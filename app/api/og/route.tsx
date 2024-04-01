import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

const NunitoBold = fetch(
  new URL("../../../assets/fonts/Nunito-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const fontBold = await NunitoBold;
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            backgroundColor: "#0F1419",
            position: "relative",
          }}
        >
          <div tw="w-full flex justify-center items-center flex-col">
            <div tw="absolute top-8 left-8 text-[#F5F5F5] text-2xl font-bold mb-12">
              Art Beckett
            </div>
            <div tw="font-nunito text-6xl font-bold text-[#F5F5F5] mt-40">
              {heading}
            </div>
            <div tw="flex width-full justify-end">
              <button tw="text-[#F5F5F5] bg-[#F35B04] px-8 py-3 rounded-lg mt-60">
                Read more
              </button>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Nunito",
            data: fontBold,
            style: "normal",
            weight: 600,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image.", { status: 500 });
  }
}
