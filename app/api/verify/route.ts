import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { refValue } = await req.json();

    console.log(refValue);

    const url: string = `https://api.paystack.co/transaction/verify/${refValue}`;

    const config = {
      headers: {
        Authorization:
          "Bearer sk_test_f5f9fc7af8e31862b79973a2140fce292a951076",
        "Content-Type": "application/json",
      },
    };

    return await axios.get(url, config).then(async (res) => {
      console.log(res);
      return NextResponse.json({
        message: "ad found",
        status: 200,
        data: await JSON.parse(JSON.stringify(res.data)),
      });
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      error: error.message,
    });
  }
};
