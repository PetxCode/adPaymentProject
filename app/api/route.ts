import { dbConfig } from "@/utils/dbConfig";
import AdModel from "@/utils/model/adModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const ad = await AdModel.find();

    return NextResponse.json({
      message: "ad found",
      status: 200,
      data: ad,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();

    const { title, link, imageURL, imageURLID } = await req.json();

    const ad = await AdModel.create({
      title,
      link,
      imageURL,
      imageURLID,
    });

    return NextResponse.json({
      message: "ad found",
      status: 200,
      data: ad,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};
