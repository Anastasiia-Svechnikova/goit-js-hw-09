!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc"),u={submitBtn:document.querySelector("button"),form:document.querySelector(".form")};function a(t,n,o){for(var i=0;i<t;i+=1)c(i+1,n*i).then((function(t){var n=t.position,i=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(i+o,"ms"))})).catch((function(t){var n=t.position,i=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(i+o,"ms"))}))}function c(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.submitBtn.addEventListener("click",(function(e){e.preventDefault();var t=new FormData(u.form),n=Number(t.get("amount")),o=Number(t.get("delay")),i=Number(t.get("step"));setTimeout(a,o,n,i,o)}))}();
//# sourceMappingURL=03-promises.c8187d2c.js.map
