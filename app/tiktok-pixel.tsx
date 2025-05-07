"use client"

import Script from "next/script"

export function TikTokPixel() {
  return (
    <Script id="tiktok-pixel" strategy="afterInteractive">
      {`
        // Safely initialize TikTok pixel
        try {
          !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
            ttq.setAndDefer = function(t, e) {
              t[e] = function() {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              }
            };
            for (var i = 0; i < ttq.methods.length; i++) {
              ttq.setAndDefer(ttq, ttq.methods[i]);
            }
            ttq.instance = function(t) {
              for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
                ttq.setAndDefer(e, ttq.methods[n]);
              }
              return e;
            };
            ttq.load = function(e, n) {
              var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i = ttq._i || {};
              ttq._i[e] = [];
              ttq._i[e]._u = i;
              ttq._t = ttq._t || {};
              ttq._t[e] = +new Date();
              ttq._o = ttq._o || {};
              ttq._o[e] = n || {};
              // Comment out the actual loading for now to prevent errors
              // var o = document.createElement("script");
              // o.type = "text/javascript";
              // o.async = !0;
              // o.src = i + "?sdkid=" + e + "&lib=" + t;
              // var a = document.getElementsByTagName("script")[0];
              // a.parentNode.insertBefore(o, a);
            };
            // Comment out the actual loading for now
            // ttq.load('SEU_PIXEL_ID_AQUI');
            // ttq.page();
          }(window, document, 'ttq');
        } catch (e) {
          console.error('TikTok pixel initialization error:', e);
        }
      `}
    </Script>
  )
}
