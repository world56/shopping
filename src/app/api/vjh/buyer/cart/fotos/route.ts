import { NextResponse } from "next/server";

import { ENUM_PRODUCT } from "@/enum/product";

const url = `https://img1.baidu.com/it/u=142496994,3021742835&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500`;

export function GET() {
 return NextResponse.json({
    data: [
      {
        fid: 1,
        price: 18,
        coverImage: url,
        title: "水果收集食品背景苹果苹果橙柠檬fr",
        licType: ENUM_PRODUCT.LIC_TYPE.NP,
        softwareType: ENUM_PRODUCT.IMAGE_TYPE.PSD,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
      {
        fid: 2,
        price: 47,
        coverImage: url,
        title: "公安企业火热夏天吃“冰雪饭”",
        licType: ENUM_PRODUCT.LIC_TYPE.LP,
        softwareType: ENUM_PRODUCT.IMAGE_TYPE.IMAGE,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },

      {
        fid: 3,
        price: 72,
        coverImage: url,
        title: "在木制切菜板上手工切碎中等稀罕的烤战斧肉",
        licType: ENUM_PRODUCT.LIC_TYPE.LPPLUS,
        softwareType: ENUM_PRODUCT.IMAGE_TYPE.AI,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
    ],
  });
}
