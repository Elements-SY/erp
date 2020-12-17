var mapKeys = {
   baidu: "webgl&ak=oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih&callback=initialize",
   gaode: "db58e78f212de61b554baaacfa302501"
}
var loadMap = {
   baiDu: function () {
      var script = document.createElement("script");
      script.src = "https://api.map.baidu.com/api?v=1.0&type=" + mapKeys.baidu;
      document.body.appendChild(script);
   },
   gaoDe: function () {
      var script = document.createElement("script");
      script.src = "https://webapi.amap.com/maps?v=1.4.15&key=" + mapKeys.gaode;
      document.body.appendChild(script);
   },
}