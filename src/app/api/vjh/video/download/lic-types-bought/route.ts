import { NextResponse } from "next/server";

import { ENUM_PRODUCT } from "@/enum/product";

export function GET() {
  return NextResponse.json({
    data: [
      {
        vid: 886751,
        licTypes: [ENUM_PRODUCT.LIC_TYPE.NP],
      },
    ],
  });
}
