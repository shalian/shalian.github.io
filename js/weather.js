/**
 * https://www.seniverse.com/ // 心知天气网址
 * https://www.seniverse.com/widget?source=widgetV2 // 天气插件
 * email：1750875477@qq.com
 * pwd：Sha211314
 */

/**
 * 固定
 */
(function(a, h, g, f, e, d, c, b) {
    b = function() {
        d = h.createElement(g);
        c = h.getElementsByTagName(g)[0];
        d.src = e;
        d.charset = "utf-8";
        d.async = 1;
        c.parentNode.insertBefore(d, c)
    };
    a["SeniverseWeatherWidgetObject"] = f;
    a[f] || (a[f] = function() {
        (a[f].q = a[f].q || []).push(arguments)
    }); 
    a[f].l = +new Date();
    if (a.attachEvent) { a.attachEvent("onload", b) } else { a.addEventListener("load", b, false) }
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
    flavor: "slim",
    location: "WW317SR5ZWKC",
    geolocation: true,
    language: "auto",
    unit: "c",
    theme: "auto",
    token: "cf4d3206-a790-4a0f-a286-2f1fb1ccf655",
    hover: "enabled",
    container: "tp-weather-widget"
})

/**
 * 气泡
 */
// (function(a,h,g,f,e,d,c,b){b=function(){d=h.createElement(g);c=h.getElementsByTagName(g)[0];d.src=e;d.charset="utf-8";d.async=1;c.parentNode.insertBefore(d,c)};a["SeniverseWeatherWidgetObject"]=f;a[f]||(a[f]=function(){(a[f].q=a[f].q||[]).push(arguments)});a[f].l=+new Date();if(a.attachEvent){a.attachEvent("onload",b)}else{a.addEventListener("load",b,false)}}(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt((new Date().getTime() / 100000000).toString(),10)));
//   window.SeniverseWeatherWidget('show', {
//     flavor: "bubble",
//     location: "WW317SR5ZWKC",
//     geolocation: true,
//     language: "zh-Hans",
//     unit: "c",
//     theme: "auto",
//     token: "cf4d3206-a790-4a0f-a286-2f1fb1ccf655",
//     hover: "enabled",
//     container: "tp-weather-widget"
//   })
