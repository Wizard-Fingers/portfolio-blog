import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
// import Image from "next/image";
// import Logo from "../../../public/static/logo-dark.png";
// import SEOImage from "../../../components/seo-logo";
export const runtime = "edge";

const NunitoBold = fetch(
  new URL("../../../assets/fonts/Nunito-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

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
            height: "100%",
            width: "100%",
            backgroundColor: "#0F1419",
            position: "relative",
          }}
        >
          <div tw="absolute top-0 left-0 m-4 text-white bg-dark-graph-paper">
            Art Beckett
          </div>
          <div tw="font-nunito text-7xl font-bold text-white mt-12 ml-8 ">
            {heading}
          </div>
          <div tw="flex flex-col items-center justify-center w-full">
            <div tw="flex flex-col items-center justify-center"></div>
            <div tw="flex justify-center"></div>
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
