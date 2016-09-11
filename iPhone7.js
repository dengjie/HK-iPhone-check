/*

 MN8V2ZP/A:iPhone 7 256GB 玫瑰金色
 MN8G2ZP/A:iPhone 7 32GB 黑色
 MN492ZP/A:iPhone 7 Plus 128GB 銀色
 MNQK2ZP/A:iPhone 7 Plus 32GB 金色
 MN8N2ZP/A:iPhone 7 128GB 金色
 MN8Q2ZP/A:iPhone 7 128GB 亮黑色
 MN4L2ZP/A:iPhone 7 Plus 256GB 亮黑色
 MN8K2ZP/A:iPhone 7 32GB 玫瑰金色
 MN4F2ZP/A:iPhone 7 Plus 256GB 銀色
 MN8U2ZP/A:iPhone 7 256GB 金色
 MN8R2ZP/A:iPhone 7 256GB 黑色
 MNQJ2ZP/A:iPhone 7 Plus 32GB 銀色
 MN8H2ZP/A:iPhone 7 32GB 銀色
 MN4C2ZP/A:iPhone 7 Plus 128GB 玫瑰金色
 MN4D2ZP/A:iPhone 7 Plus 128GB 亮黑色
 MN4J2ZP/A:iPhone 7 Plus 256GB 金色
 MN4A2ZP/A:iPhone 7 Plus 128GB 金色
 MN8L2ZP/A:iPhone 7 128GB 黑色
 MN8T2ZP/A:iPhone 7 256GB 銀色
 MNQH2ZP/A:iPhone 7 Plus 32GB 黑色
 MN8W2ZP/A:iPhone 7 256GB 亮黑色
 MN4E2ZP/A:iPhone 7 Plus 256GB 黑色
 MN8J2ZP/A:iPhone 7 32GB 金色
 MN8M2ZP/A:iPhone 7 128GB 銀色
 MN4K2ZP/A:iPhone 7 Plus 256GB 玫瑰金色
 MN482ZP/A:iPhone 7 Plus 128GB 黑色
 MNQL2ZP/A:iPhone 7 Plus 32GB 玫瑰金色
 MN8P2ZP/A:iPhone 7 128GB 玫瑰金色


*/

var online = 1;
var count = 0;
var frequency = 2;//刷新频率，单位秒

var stores_list = {
  "updatedTime" : "下午 3:05",
  "supportedDomains" : {
    "0" : "https://www.apple.com/hk/iphone-7/",
    "1" : "http://www.apple.com/",
    "2" : "http://storeint.apple.com/",
    "3" : "http://epp.apple.com/",
    "4" : "applestore://"
  },
  "stores" : [ {
    "storeNumber" : "R499",
    "storeName" : "Canton Road 广东道",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "香港"
  }, {
    "storeNumber" : "R409",
    "storeName" : "Causeway Bay 铜锣湾",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "香港"
  }, {
    "storeNumber" : "R485",
    "storeName" : "Festival Walk 又一城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "香港"
  }, {
    "storeNumber" : "R428",
    "storeName" : "ifc mall 中环",
    "storeEnabled" : true,
    "sellEdition" : true,
    "storeCity" : "香港"
  }, {
    "storeNumber" : "R610",
    "storeName" : "New Town Plaza 沙田",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "香港"
  } ],
  "timezone" : "HKT",
  "updatedDate" : "9 月 11 日星期日",
  "reservationURL" : "https://reserve-hk.apple.com/HK/zh_HK/reserve/iPhone"
}

var source = {
  "zh_HK" : {
    "launchDate" : "9 月 16 日星期五"
  },
  "R499" : {
    "MN8V2ZP/A" : "NONE",
    "timeSlot" : null,
    "MN8G2ZP/A" : "NONE",
    "MN492ZP/A" : "NONE",
    "MNQK2ZP/A" : "NONE",
    "MN8N2ZP/A" : "NONE",
    "MN8Q2ZP/A" : "NONE",
    "MN4L2ZP/A" : "NONE",
    "MN8K2ZP/A" : "NONE",
    "MN4F2ZP/A" : "NONE",
    "MN8U2ZP/A" : "NONE",
    "MN8R2ZP/A" : "NONE",
    "MNQJ2ZP/A" : "NONE",
    "MN8H2ZP/A" : "NONE",
    "MN4C2ZP/A" : "NONE",
    "MN4D2ZP/A" : "NONE",
    "MN4J2ZP/A" : "NONE",
    "MN4A2ZP/A" : "NONE",
    "MN8L2ZP/A" : "NONE",
    "MN8T2ZP/A" : "NONE",
    "MNQH2ZP/A" : "NONE",
    "MN8W2ZP/A" : "NONE",
    "MN4E2ZP/A" : "NONE",
    "MN8J2ZP/A" : "NONE",
    "MN8M2ZP/A" : "NONE",
    "MN4K2ZP/A" : "NONE",
    "MN482ZP/A" : "NONE",
    "MNQL2ZP/A" : "NONE",
    "MN8P2ZP/A" : "NONE"
  },
  "R610" : {
    "MN8V2ZP/A" : "NONE",
    "timeSlot" : {
      "zh_HK" : {
        "timeslotTime" : "下午 2:30",
        "contractTimeslotTime" : "下午 2:30"
      },
      "en_HK" : {
        "timeslotTime" : "2:30 PM",
        "contractTimeslotTime" : "2:30 PM"
      }
    },
    "MN8G2ZP/A" : "NONE",
    "MN492ZP/A" : "NONE",
    "MNQK2ZP/A" : "NONE",
    "MN8N2ZP/A" : "NONE",
    "MN8Q2ZP/A" : "NONE",
    "MN4L2ZP/A" : "NONE",
    "MN8K2ZP/A" : "NONE",
    "MN4F2ZP/A" : "NONE",
    "MN8U2ZP/A" : "NONE",
    "MN8R2ZP/A" : "NONE",
    "MNQJ2ZP/A" : "NONE",
    "MN8H2ZP/A" : "NONE",
    "MN4C2ZP/A" : "NONE",
    "MN4D2ZP/A" : "NONE",
    "MN4J2ZP/A" : "NONE",
    "MN4A2ZP/A" : "NONE",
    "MN8L2ZP/A" : "NONE",
    "MN8T2ZP/A" : "NONE",
    "MNQH2ZP/A" : "NONE",
    "MN8W2ZP/A" : "NONE",
    "MN4E2ZP/A" : "NONE",
    "MN8J2ZP/A" : "NONE",
    "MN8M2ZP/A" : "NONE",
    "MN4K2ZP/A" : "NONE",
    "MN482ZP/A" : "NONE",
    "MNQL2ZP/A" : "NONE",
    "MN8P2ZP/A" : "NONE"
  },
  "isToday" : false,
  "R485" : {
    "MN8V2ZP/A" : "NONE",
    "timeSlot" : {
      "zh_HK" : {
        "timeslotTime" : "上午 11:30",
        "contractTimeslotTime" : "上午 11:30"
      },
      "en_HK" : {
        "timeslotTime" : "11:30 AM",
        "contractTimeslotTime" : "11:30 AM"
      }
    },
    "MN8G2ZP/A" : "NONE",
    "MN492ZP/A" : "NONE",
    "MNQK2ZP/A" : "NONE",
    "MN8N2ZP/A" : "NONE",
    "MN8Q2ZP/A" : "NONE",
    "MN4L2ZP/A" : "NONE",
    "MN8K2ZP/A" : "NONE",
    "MN4F2ZP/A" : "NONE",
    "MN8U2ZP/A" : "NONE",
    "MN8R2ZP/A" : "NONE",
    "MNQJ2ZP/A" : "NONE",
    "MN8H2ZP/A" : "NONE",
    "MN4C2ZP/A" : "NONE",
    "MN4D2ZP/A" : "NONE",
    "MN4J2ZP/A" : "NONE",
    "MN4A2ZP/A" : "NONE",
    "MN8L2ZP/A" : "NONE",
    "MN8T2ZP/A" : "NONE",
    "MNQH2ZP/A" : "NONE",
    "MN8W2ZP/A" : "NONE",
    "MN4E2ZP/A" : "NONE",
    "MN8J2ZP/A" : "NONE",
    "MN8M2ZP/A" : "NONE",
    "MN4K2ZP/A" : "NONE",
    "MN482ZP/A" : "NONE",
    "MNQL2ZP/A" : "NONE",
    "MN8P2ZP/A" : "NONE"
  },
  "en_HK" : {
    "launchDate" : "Friday, September 16"
  },
  "R409" : {
    "MN8V2ZP/A" : "NONE",
    "timeSlot" : {
      "zh_HK" : {
        "timeslotTime" : "上午 9:30",
        "contractTimeslotTime" : "上午 9:30"
      },
      "en_HK" : {
        "timeslotTime" : "9:30 AM",
        "contractTimeslotTime" : "9:30 AM"
      }
    },
    "MN8G2ZP/A" : "NONE",
    "MN492ZP/A" : "NONE",
    "MNQK2ZP/A" : "NONE",
    "MN8N2ZP/A" : "NONE",
    "MN8Q2ZP/A" : "NONE",
    "MN4L2ZP/A" : "NONE",
    "MN8K2ZP/A" : "NONE",
    "MN4F2ZP/A" : "NONE",
    "MN8U2ZP/A" : "NONE",
    "MN8R2ZP/A" : "NONE",
    "MNQJ2ZP/A" : "NONE",
    "MN8H2ZP/A" : "NONE",
    "MN4C2ZP/A" : "NONE",
    "MN4D2ZP/A" : "NONE",
    "MN4J2ZP/A" : "NONE",
    "MN4A2ZP/A" : "NONE",
    "MN8L2ZP/A" : "NONE",
    "MN8T2ZP/A" : "NONE",
    "MNQH2ZP/A" : "NONE",
    "MN8W2ZP/A" : "NONE",
    "MN4E2ZP/A" : "NONE",
    "MN8J2ZP/A" : "NONE",
    "MN8M2ZP/A" : "NONE",
    "MN4K2ZP/A" : "NONE",
    "MN482ZP/A" : "NONE",
    "MNQL2ZP/A" : "NONE",
    "MN8P2ZP/A" : "NONE"
  },
  "updated" : 1473576308023,
  "R428" : {
    "MN8V2ZP/A" : "NONE",
    "timeSlot" : {
      "zh_HK" : {
        "timeslotTime" : "下午 4:30",
        "contractTimeslotTime" : "下午 4:30"
      },
      "en_HK" : {
        "timeslotTime" : "4:30 PM",
        "contractTimeslotTime" : "4:30 PM"
      }
    },
    "MN8G2ZP/A" : "NONE",
    "MN492ZP/A" : "NONE",
    "MNQK2ZP/A" : "NONE",
    "MN8N2ZP/A" : "NONE",
    "MN8Q2ZP/A" : "NONE",
    "MN4L2ZP/A" : "NONE",
    "MN8K2ZP/A" : "NONE",
    "MN4F2ZP/A" : "NONE",
    "MN8U2ZP/A" : "NONE",
    "MN8R2ZP/A" : "NONE",
    "MNQJ2ZP/A" : "NONE",
    "MN8H2ZP/A" : "NONE",
    "MN4C2ZP/A" : "NONE",
    "MN4D2ZP/A" : "NONE",
    "MN4J2ZP/A" : "NONE",
    "MN4A2ZP/A" : "NONE",
    "MN8L2ZP/A" : "NONE",
    "MN8T2ZP/A" : "NONE",
    "MNQH2ZP/A" : "NONE",
    "MN8W2ZP/A" : "NONE",
    "MN4E2ZP/A" : "NONE",
    "MN8J2ZP/A" : "NONE",
    "MN8M2ZP/A" : "NONE",
    "MN4K2ZP/A" : "NONE",
    "MN482ZP/A" : "NONE",
    "MNQL2ZP/A" : "NONE",
    "MN8P2ZP/A" : "ALL"
  }
}

var __productJson__ = {
    "subFamilies": [{
        "subfamily_id": "10143",
        "product": "iPhone 7",
        "localizedName": "iPhone 7",
        "reservableQuantity": "2",
        "sortOrder": "",
        "src": "",
        "src2x": ""
    }, {
        "subfamily_id": "10142",
        "product": "iPhone 7 Plus",
        "localizedName": "iPhone 7 Plus",
        "reservableQuantity": "2",
        "sortOrder": "",
        "src": "",
        "src2x": ""
    }],
    "carriers": [],
    "groups": [{
        "group_id": "100227",
        "name": "iPhone 7",
        "description": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "url": "",
        "url2x": ""
    }],
    "skus": [{
        "part_number": "MN8G2ZP\/A",
        "productDescription": "iPhone 7 32GB 黑色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$5,588",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8H2ZP\/A",
        "productDescription": "iPhone 7 32GB 銀色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$5,588",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8J2ZP\/A",
        "productDescription": "iPhone 7 32GB 金色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$5,588",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8K2ZP\/A",
        "productDescription": "iPhone 7 32GB 玫瑰金色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$5,588",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8L2ZP\/A",
        "productDescription": "iPhone 7 128GB 黑色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$6,388",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8M2ZP\/A",
        "productDescription": "iPhone 7 128GB 銀色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$6,388",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8N2ZP\/A",
        "productDescription": "iPhone 7 128GB 金色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$6,388",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8P2ZP\/A",
        "productDescription": "iPhone 7 128GB 玫瑰金色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$6,388",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8Q2ZP\/A",
        "productDescription": "iPhone 7 128GB 亮黑色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$6,388",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "亮黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567346997",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567346997",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430076339",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430076339",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8R2ZP\/A",
        "productDescription": "iPhone 7 256GB 黑色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$7,188",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567294973",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/black\/iphone7-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430037379",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8T2ZP\/A",
        "productDescription": "iPhone 7 256GB 銀色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$7,188",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567606309",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/silver\/iphone7-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430219571",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8U2ZP\/A",
        "productDescription": "iPhone 7 256GB 金色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$7,188",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567321417",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/gold\/iphone7-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430060215",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8V2ZP\/A",
        "productDescription": "iPhone 7 256GB 玫瑰金色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$7,188",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567583984",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/rosegold\/iphone7-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN8W2ZP\/A",
        "productDescription": "iPhone 7 256GB 亮黑色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$7,188",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "亮黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567346997",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567346997",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430076339",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/jetblack\/iphone7-jetblack-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430076339",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10143"
    }, {
        "part_number": "MN482ZP\/A",
        "productDescription": "iPhone 7 Plus 128GB 黑色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$7,388",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN492ZP\/A",
        "productDescription": "iPhone 7 Plus 128GB 銀色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$7,388",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4A2ZP\/A",
        "productDescription": "iPhone 7 Plus 128GB 金色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$7,388",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4C2ZP\/A",
        "productDescription": "iPhone 7 Plus 128GB 玫瑰金色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$7,388",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4D2ZP\/A",
        "productDescription": "iPhone 7 Plus 128GB 亮黑色",
        "capacity": "128GB",
        "productDisplayPrice": "HK$7,388",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "亮黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567436189",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567436189",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430122140",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430122140",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4E2ZP\/A",
        "productDescription": "iPhone 7 Plus 256GB 黑色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$8,288",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4F2ZP\/A",
        "productDescription": "iPhone 7 Plus 256GB 銀色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$8,288",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4J2ZP\/A",
        "productDescription": "iPhone 7 Plus 256GB 金色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$8,288",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4K2ZP\/A",
        "productDescription": "iPhone 7 Plus 256GB 玫瑰金色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$8,288",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MN4L2ZP\/A",
        "productDescription": "iPhone 7 Plus 256GB 亮黑色",
        "capacity": "256GB",
        "productDisplayPrice": "HK$8,288",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "亮黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567436189",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567436189",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430122140",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-jetblack-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430122140",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNQH2ZP\/A",
        "productDescription": "iPhone 7 Plus 32GB 黑色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$6,588",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "黑色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567374271",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-black-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430090682",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNQJ2ZP\/A",
        "productDescription": "iPhone 7 Plus 32GB 銀色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$6,588",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "銀色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567501259",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-silver-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430173129",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNQK2ZP\/A",
        "productDescription": "iPhone 7 Plus 32GB 金色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$6,588",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567409164",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-gold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430108712",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNQL2ZP\/A",
        "productDescription": "iPhone 7 Plus 32GB 玫瑰金色",
        "capacity": "32GB",
        "productDisplayPrice": "HK$6,588",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "",
        "installmentPeriod": "",
        "color": "玫瑰金色",
        "ipp_price": "",
        "ipp_installments": "",
        "color_swatch_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=16&hei=16&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "color_swatch_retina_url": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016_SW_COLOR?wid=32&hei=32&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1471567470988",
        "colorSwatch3xUrl": "",
        "productImageURL": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=300&hei=300&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImageURL2x": "https:\/\/store.storeimages.cdn-apple.com\/8748\/as-images.apple.com\/is\/image\/AppleInc\/aos\/published\/images\/i\/ph\/iphone7\/plus\/iphone7-plus-rosegold-select-2016?wid=600&hei=600&fmt=jpeg&qlt=80&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430147951",
        "productImage3xUrl": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "group_id": "100227",
        "subfamily_id": "10142"
    }]
}



function checkStore(){
   count ++;
   console.log('第'+count+'次尝试，时间：'+new Date())
   $.ajax({
            type: "GET",
            url: "https://reserve.cdn-apple.com/HK/zh_HK/reserve/iPhone/availability.json",
            datatype : "jsonp",
            success: function (o) {
                    
                   if(online){
                       for(i in o){
                       checkStatus(o[i],i)
                   }

                   }else{
                       for(i in source){
                       checkStatus(source[i],i)
                   }
                   }
                   
                   
            },
}); 
}



function checkStatus(v,v2){
                   for(i in v){
                       if(v[i]!='NONE'&&getProductName(i)!=undefined){

                           console.log('%c'+getProductName(i)+'现在有货!!!'+getStoreName(v2),'color:green');
                           console.log(v2);
                      
                       }
                   }
}

function getProductName(v){
  var a = __productJson__.skus;
  for(var i=0;i<a.length;i++){
      if(a[i].part_number==v){
        return a[i].productDescription;
      }
  }
}

function getStoreName(v){
    var a = stores_list.stores;
    for(i in a){
        if(a[i].storeNumber==v){
            return a[i].storeName;
        }
    }
}


var run;

function stop(){

    clearInterval(run);

}

function start(){
    
    run = setInterval(checkStore,frequency*1000);

}

start();
