
odoo.define('website_cookies.website_cookies', function (require) {
"use strict";

var core = require('web.core');
// var ajax = require('web.ajax');
// var website = require('website.website');
// var Model = require('web.Model');

// var qweb = core.qweb;
var _t = core._t;

(function() {
    var cook   = document.createElement('script');
    cook.type  = 'text/javascript';
    cook.async = true;
    cook.src   = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(cook,s);
    
    var cookcss   = document.createElement('link');
    cookcss.type  = 'text/css';
    cookcss.rel = "stylesheet";
    cookcss.href   = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css';
    var scss = document.getElementsByTagName('link')[0];
    scss.parentNode.insertBefore(cookcss,scss);

    window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#efefef",
              "text": "#404040"
            },
            "button": {
              "background": "#8ec760",
              "text": "#ffffff"
            }
          },
          // "cookie.domain": "",
          // "dismissOnScroll": true,
          // "dismissOnTimeout": true,
          "content": {
            "message": _t("We use cookies."),
            "dismiss": _t("Got it"),
            "link": _t("More Info"),
            "href": "/cookies"
          }
    })});
    
})();

});

