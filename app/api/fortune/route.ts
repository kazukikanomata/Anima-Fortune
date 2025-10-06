import { GAS_API_URL } from "@/app/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(GAS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Route: Error from GAS:", response.status, errorText);
      return NextResponse.json(
        { success: false, error: "Error from external service" },
        { status: response.status }
      );
    }

    const gasResult = await response.json();
    console.log("Server response:", gasResult);
    return NextResponse.json(gasResult);
  } catch (error) {
    console.error("API Route: Error occurred:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
