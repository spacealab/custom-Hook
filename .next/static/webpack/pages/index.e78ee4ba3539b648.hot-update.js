"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callForecastApi: function() { return /* binding */ callForecastApi; },\n/* harmony export */   callWeatherApi: function() { return /* binding */ callWeatherApi; }\n/* harmony export */ });\nconst baseUrl = \"https://api.openweathermap.org/data/2.5/\";\nconst apikey = \"3dce9b1c66837262a25b3f448d354a76\";\nasync function callWeatherApi(param) {\n    let { city } = param;\n    await sleep(2000);\n    const response = await fetch(baseUrl + \"weather?q=\".concat(city, \"&appid=\").concat(apikey, \"&units=metric\"));\n    if (response.ok) {\n        return await response.json();\n    } else {\n        return false;\n    }\n}\nasync function callForecastApi(param) {\n    let { lat, lon } = param;\n    const response = await fetch(baseUrl + \"onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(apikey, \"&units=metric\"));\n    return await response.json();\n}\nconst sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU1BLFVBQVU7QUFDaEIsTUFBTUMsU0FBUztBQVlSLGVBQWVDLGVBQWUsS0FBcUI7UUFBckIsRUFBQ0MsSUFBSSxFQUFnQixHQUFyQjtJQUNqQyxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFPTixVQUFVLGFBQTJCQyxPQUFkRSxNQUFLLFdBQWdCLE9BQVBGLFFBQU87SUFDMUUsSUFBR0ksU0FBU0UsRUFBRSxFQUFFO1FBQ1osT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQzlCLE9BQU87UUFDSCxPQUFPO0lBQ1g7QUFDSjtBQUdPLGVBQWVDLGdCQUFnQixLQUF3QjtRQUF4QixFQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBZSxHQUF4QjtJQUNsQyxNQUFNTixXQUFXLE1BQU1DLE1BQU9OLFVBQVUsZUFBMEJXLE9BQVhELEtBQUksU0FBb0JULE9BQWJVLEtBQUksV0FBZ0IsT0FBUFYsUUFBTztJQUN0RixPQUFPLE1BQU1JLFNBQVNHLElBQUk7QUFDOUI7QUFFQSxNQUFNSixRQUFRLENBQUNRLEtBQWUsSUFBSUMsUUFBUSxDQUFDQyxJQUFNQyxXQUFXRCxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL2FwaS50cz83MGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3RSZXNwb25zZX0gZnJvbSBcIkAvdHlwZXMvYXBpL0ZvcmVjYXN0UmVzcG9uc2VcIlxuaW1wb3J0IHtXZWF0aGVyUmVzcG9uc2V9IGZyb20gXCJAL3R5cGVzL2FwaS9XZWF0aGVyUmVzcG9uc2VcIlxuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvXCI7XG5jb25zdCBhcGlrZXkgPSBcIjNkY2U5YjFjNjY4MzcyNjJhMjViM2Y0NDhkMzU0YTc2XCI7XG5cbmludGVyZmFjZSBXZWF0aGVyUHJvcHMge1xuICAgIGNpdHk6IHN0cmluZyxcbn1cblxuaW50ZXJmYWNlIEZvcmVjYXN0UHJvcHMge1xuICAgIGxvbjogbnVtYmVyLFxuICAgIGxhdDogbnVtYmVyLFxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsV2VhdGhlckFwaSh7Y2l0eX0gOiBXZWF0aGVyUHJvcHMpIDpQcm9taXNlPFdlYXRoZXJSZXNwb25zZSB8IGZhbHNlPiB7XG4gICAgYXdhaXQgc2xlZXAoMjAwMClcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBiYXNlVXJsICsgYHdlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7YXBpa2V5fSZ1bml0cz1tZXRyaWNgKVxuICAgIGlmKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxsRm9yZWNhc3RBcGkoe2xhdCwgbG9ufTpGb3JlY2FzdFByb3BzKSA6UHJvbWlzZTxGb3JlY2FzdFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggYmFzZVVybCArIGBvbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke2FwaWtleX0mdW5pdHM9bWV0cmljYClcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5jb25zdCBzbGVlcCA9IChtczogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJhcGlrZXkiLCJjYWxsV2VhdGhlckFwaSIsImNpdHkiLCJzbGVlcCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImpzb24iLCJjYWxsRm9yZWNhc3RBcGkiLCJsYXQiLCJsb24iLCJtcyIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/api.ts\n"));

/***/ })

});