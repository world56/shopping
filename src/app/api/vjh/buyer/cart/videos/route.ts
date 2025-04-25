import { NextResponse } from "next/server";

import { ENUM_PRODUCT } from "@/enum/product";

const url = `https://img0.baidu.com/it/u=1721007946,1174893583&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500`;

export function GET() {
  return NextResponse.json({
    data: [
      {
        vid: 886751,
        price: 108,
        coverImage: url,
        title: "麻辣小龙虾",
        licType: ENUM_PRODUCT.LIC_TYPE.NP,
        softwareType: ENUM_PRODUCT.VIDEO_TYPE.VIDEO,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
      {
        vid: 886752,
        price: 25,
        coverImage: url,
        title: "2025蛇年新年祝福视频框会声会影模板",
        licType: ENUM_PRODUCT.LIC_TYPE.LP,
        softwareType: ENUM_PRODUCT.VIDEO_TYPE.C4D,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
    ],
  });
}
