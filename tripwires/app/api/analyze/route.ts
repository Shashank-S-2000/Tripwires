import { NextResponse } from "next/server";
import { scanWebsite } from "@/lib/scanner/websiteScanner";
import { analyzeWebsite } from "@/lib/ai/analyzeWebsite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        {
          error: "URL is required",
        },
        {
          status: 400,
        }
      );
    }

    const websiteData = await scanWebsite(url);

    const analysis = analyzeWebsite(websiteData);

    return NextResponse.json({
      websiteData,
      analysis,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}