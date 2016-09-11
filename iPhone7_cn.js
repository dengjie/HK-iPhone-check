/*

    MNRJ2CH/A:iPhone 7 Plus 32GB 黑色 
    MNFU2CH/A:iPhone 7 Plus 128GB 亮黑色
    MNG02CH/A:iPhone 7 Plus 256GB 亮黑色
    MNFR2CH/A:iPhone 7 Plus 128GB 金色
    MNRL2CH/A:iPhone 7 Plus 32GB 金色
    MNH12CH/A:iPhone 7 128GB 玫瑰金色
    MNH42CH/A:iPhone 7 256GB 银色
    MNH72CH/A:iPhone 7 256GB 亮黑色
    MNRM2CH/A:iPhone 7 Plus 32GB 玫瑰金色
    MNFX2CH/A:iPhone 7 Plus 256GB 金色
    MNH02CH/A:iPhone 7 128GB 金色
    MNGY2CH/A:iPhone 7 128GB 银色
    MNFQ2CH/A:iPhone 7 Plus 128GB 银色
    MNGX2CH/A:iPhone 7 128GB 黑色
    MNGR2CH/A:iPhone 7 32GB 银色
    MNH32CH/A:iPhone 7 256GB 黑色
    MNRK2CH/A:iPhone 7 Plus 32GB 银色
    MNFT2CH/A:iPhone 7 Plus 128GB 玫瑰金色
    MNFW2CH/A:iPhone 7 Plus 256GB 银色
    MNH62CH/A:iPhone 7 256GB 玫瑰金色
    MNFY2CH/A:iPhone 7 Plus 256GB 玫瑰金色
    MNFP2CH/A:iPhone 7 Plus 128GB 黑色
    MNGT2CH/A:iPhone 7 32GB 金色
    MNGW2CH/A:iPhone 7 32GB 玫瑰金色
    MNH52CH/A:iPhone 7 256GB 金色
    MNGQ2CH/A:iPhone 7 32GB 黑色
    MNH22CH/A:iPhone 7 128GB 亮黑色
    MNFV2CH/A:iPhone 7 Plus 256GB 黑色

*/

var online = 1;
var count = 0;
var frequency = 2;//刷新频率，单位秒
var plusonly = ['MNRJ2CH/A','MNFU2CH/A','MNG02CH/A','MNFR2CH/A','MNRL2CH/A','MNRM2CH/A','MNFX2CH/A','MNFQ2CH/A','MNRK2CH/A','MNFT2CH/A','MNFT2CH/A','MNFW2CH/A','MNFV2CH/A','MNFP2CH/A','MNFY2CH/A']
// 指定关注型号

var stores_list ={
    "stores" : [{
    "storeNumber" : "R484",
    "storeName" : "深圳益田假日广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "深圳"
  }]
}



var stores_list_temp = {
  "updatedTime" : "下午 11:45",
  "supportedDomains" : {
    "0" : "https://apple.com/cn/iphone-7/",
    "1" : "http://www.apple.com/",
    "2" : "http://storeint.apple.com/",
    "3" : "http://epp.apple.com/",
    "4" : "applestore://"
  },
  "stores" : [ {
    "storeNumber" : "R320",
    "storeName" : "三里屯",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "北京"
  }, {
    "storeNumber" : "R401",
    "storeName" : "上海环贸 iapm",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  }, {
    "storeNumber" : "R534",
    "storeName" : "中街大悦城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "沈阳"
  }, {
    "storeNumber" : "R581",
    "storeName" : "五角场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  }, {
    "storeNumber" : "R479",
    "storeName" : "华贸购物中心",
    "storeEnabled" : true,
    "sellEdition" : true,
    "storeCity" : "北京"
  }, {
    "storeNumber" : "R359",
    "storeName" : "南京东路",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  }, {
    "storeNumber" : "R493",
    "storeName" : "南京艾尚天地",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "南京"
  }, {
    "storeNumber" : "R571",
    "storeName" : "南宁万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "南宁"
  }, {
    "storeNumber" : "R644",
    "storeName" : "厦门新生活广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "厦门"
  }, {
    "storeNumber" : "R609",
    "storeName" : "大连恒隆广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "大连"
  }, {
    "storeNumber" : "R637",
    "storeName" : "天津大悦城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "天津"
  }, {
    "storeNumber" : "R579",
    "storeName" : "天津恒隆广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "天津"
  }, {
    "storeNumber" : "R577",
    "storeName" : "天环广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "广州"
  }, {
    "storeNumber" : "R502",
    "storeName" : "成都万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "成都"
  }, {
    "storeNumber" : "R580",
    "storeName" : "成都太古里",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "成都"
  }, {
    "storeNumber" : "R574",
    "storeName" : "无锡恒隆广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "无锡"
  }, {
    "storeNumber" : "R645",
    "storeName" : "朝阳大悦城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "北京"
  }, {
    "storeNumber" : "R532",
    "storeName" : "杭州万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "杭州"
  }, {
    "storeNumber" : "R576",
    "storeName" : "沈阳万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "沈阳"
  }, {
    "storeNumber" : "R646",
    "storeName" : "泰禾广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "福州"
  }, {
    "storeNumber" : "R648",
    "storeName" : "济南恒隆广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "济南"
  }, {
    "storeNumber" : "R389",
    "storeName" : "浦东",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  }, {
    "storeNumber" : "R484",
    "storeName" : "深圳益田假日广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "深圳"
  }, {
    "storeNumber" : "R448",
    "storeName" : "王府井",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "北京"
  }, {
    "storeNumber" : "R683",
    "storeName" : "环球港",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  }, {
    "storeNumber" : "R478",
    "storeName" : "百年城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "大连"
  }, {
    "storeNumber" : "R643",
    "storeName" : "虹悦城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "南京"
  }, {
    "storeNumber" : "R388",
    "storeName" : "西单大悦城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "北京"
  }, {
    "storeNumber" : "R471",
    "storeName" : "西湖",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "杭州"
  }, {
    "storeNumber" : "R480",
    "storeName" : "解放碑",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "重庆"
  }, {
    "storeNumber" : "R572",
    "storeName" : "郑州万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "郑州"
  }, {
    "storeNumber" : "R573",
    "storeName" : "重庆万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "重庆"
  }, {
    "storeNumber" : "R476",
    "storeName" : "重庆北城天街",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "重庆"
  }, {
    "storeNumber" : "R638",
    "storeName" : "银河国际购物中心",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "天津"
  }, {
    "storeNumber" : "R557",
    "storeName" : "青岛万象城",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "青岛"
  }, {
    "storeNumber" : "R390",
    "storeName" : "香港广场",
    "storeEnabled" : true,
    "sellEdition" : false,
    "storeCity" : "上海"
  } ],
  "timezone" : "CST",
  "updatedDate" : "9月11日星期日",
  "reservationURL" : "https://reserve-cn.apple.com/CN/zh_CN/reserve/iPhone"
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
        "group_id": "100224",
        "name": "iPhone 7",
        "description": "",
        "contractEnabled": true,
        "unlockEnabled": true,
        "url": "",
        "url2x": ""
    }],
    "skus": [{
        "part_number": "MNGQ2CH\/A",
        "productDescription": "iPhone 7 32GB 黑色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 5,388",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 449",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNGR2CH\/A",
        "productDescription": "iPhone 7 32GB 银色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 5,388",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 449",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNGT2CH\/A",
        "productDescription": "iPhone 7 32GB 金色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 5,388",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 449",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNGW2CH\/A",
        "productDescription": "iPhone 7 32GB 玫瑰金色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 5,388",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 449",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNGX2CH\/A",
        "productDescription": "iPhone 7 128GB 黑色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 6,188",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 516",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNGY2CH\/A",
        "productDescription": "iPhone 7 128GB 银色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 6,188",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 516",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH02CH\/A",
        "productDescription": "iPhone 7 128GB 金色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 6,188",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 516",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH12CH\/A",
        "productDescription": "iPhone 7 128GB 玫瑰金色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 6,188",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 516",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH22CH\/A",
        "productDescription": "iPhone 7 128GB 亮黑色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 6,188",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "RMB 516",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH32CH\/A",
        "productDescription": "iPhone 7 256GB 黑色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 6,988",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 582",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH42CH\/A",
        "productDescription": "iPhone 7 256GB 银色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 6,988",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 582",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH52CH\/A",
        "productDescription": "iPhone 7 256GB 金色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 6,988",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 582",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH62CH\/A",
        "productDescription": "iPhone 7 256GB 玫瑰金色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 6,988",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 582",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNH72CH\/A",
        "productDescription": "iPhone 7 256GB 亮黑色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 6,988",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "RMB 582",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10143"
    }, {
        "part_number": "MNFP2CH\/A",
        "productDescription": "iPhone 7 Plus 128GB 黑色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 7,188",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 599",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFQ2CH\/A",
        "productDescription": "iPhone 7 Plus 128GB 银色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 7,188",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 599",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFR2CH\/A",
        "productDescription": "iPhone 7 Plus 128GB 金色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 7,188",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 599",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFT2CH\/A",
        "productDescription": "iPhone 7 Plus 128GB 玫瑰金色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 7,188",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 599",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFU2CH\/A",
        "productDescription": "iPhone 7 Plus 128GB 亮黑色",
        "capacity": "128GB",
        "productDisplayPrice": "RMB 7,188",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "RMB 599",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFV2CH\/A",
        "productDescription": "iPhone 7 Plus 256GB 黑色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 7,988",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 666",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFW2CH\/A",
        "productDescription": "iPhone 7 Plus 256GB 银色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 7,988",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 666",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFX2CH\/A",
        "productDescription": "iPhone 7 Plus 256GB 金色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 7,988",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 666",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNFY2CH\/A",
        "productDescription": "iPhone 7 Plus 256GB 玫瑰金色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 7,988",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 666",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNG02CH\/A",
        "productDescription": "iPhone 7 Plus 256GB 亮黑色",
        "capacity": "256GB",
        "productDisplayPrice": "RMB 7,988",
        "discount_price": "",
        "colorSortOrder": "2085",
        "installmentPrice": "RMB 666",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNRJ2CH\/A",
        "productDescription": "iPhone 7 Plus 32GB 黑色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 6,388",
        "discount_price": "",
        "colorSortOrder": "2095",
        "installmentPrice": "RMB 532",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNRK2CH\/A",
        "productDescription": "iPhone 7 Plus 32GB 银色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 6,388",
        "discount_price": "",
        "colorSortOrder": "2105",
        "installmentPrice": "RMB 532",
        "installmentPeriod": "12",
        "color": "银色",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNRL2CH\/A",
        "productDescription": "iPhone 7 Plus 32GB 金色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 6,388",
        "discount_price": "",
        "colorSortOrder": "2205",
        "installmentPrice": "RMB 532",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }, {
        "part_number": "MNRM2CH\/A",
        "productDescription": "iPhone 7 Plus 32GB 玫瑰金色",
        "capacity": "32GB",
        "productDisplayPrice": "RMB 6,388",
        "discount_price": "",
        "colorSortOrder": "2401",
        "installmentPrice": "RMB 532",
        "installmentPeriod": "12",
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
        "group_id": "100224",
        "subfamily_id": "10142"
    }]
}



function checkStore(){
   count ++;
   console.log('第'+count+'次尝试，时间：'+new Date())
   $.ajax({
            type: "GET",
            url: "https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability.json",
            datatype : "jsonp",
            success: function (o) {
                   
                   if(online){
                       var a = stores_list.stores[0].storeNumber;
                       checkStatus(o[a],a)

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
                           if(checkplus(i)){
                             console.log('%c'+getProductName(i)+'现在有货!!!'+getStoreName(v2),'color:red');
                           }else{
                             console.log('%c'+getProductName(i)+'现在有货!!!'+getStoreName(v2),'color:green');
                           }
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

function checkplus(v){
    for(var i=0;i<plusonly.length;i++){
        if(plusonly[i]==v){
            return true;
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
