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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callForecastApi: function() { return /* binding */ callForecastApi; },\n/* harmony export */   callWeatherApi: function() { return /* binding */ callWeatherApi; }\n/* harmony export */ });\nconst baseUrl = \"https://api.openweathermap.org/data/2.5/\";\nconst apikey = \"3dce9b1c66837262a25b3f448d354a76\";\n// interface WeatherProps {\n//     city: string,\n// }\n// interface ForecastProps {\n//     lon: number,\n//     lat: number,\n// }\nasync function callWeatherApi(param) {\n    let { city } = param;\n    await sleep(2000);\n    const response = await fetch(baseUrl + \"weather?q=\".concat(city, \"&appid=\").concat(apikey, \"&units=metric\"));\n    if (response.ok) {\n        return await response.json();\n    } else {\n        return false;\n    }\n}\nasync function callForecastApi(param) {\n    let { lat, lon } = param;\n    await sleep(5000);\n    const response = await fetch(baseUrl + \"onecall?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(apikey, \"&units=metric\"));\n    if (response.ok) {\n        return await response.json();\n    } else {\n        return false;\n    }\n}\nconst sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU1BLFVBQVU7QUFDaEIsTUFBTUMsU0FBUztBQUVmLDJCQUEyQjtBQUMzQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLElBQUk7QUFHRyxlQUFlQyxlQUFlLEtBQW9CO1FBQXBCLEVBQUNDLElBQUksRUFBZSxHQUFwQjtJQUNqQyxNQUFNQyxNQUFNO0lBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFPTixVQUFVLGFBQTJCQyxPQUFkRSxNQUFLLFdBQWdCLE9BQVBGLFFBQU87SUFDMUUsSUFBR0ksU0FBU0UsRUFBRSxFQUFFO1FBQ1osT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQzlCLE9BQU87UUFDSCxPQUFPO0lBQ1g7QUFDSjtBQUdPLGVBQWVDLGdCQUFnQixLQUF5QjtRQUF6QixFQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBZ0IsR0FBekI7SUFDbEMsTUFBTVAsTUFBTTtJQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBT04sVUFBVSxlQUEwQlcsT0FBWEQsS0FBSSxTQUFvQlQsT0FBYlUsS0FBSSxXQUFnQixPQUFQVixRQUFPO0lBQ3RGLElBQUdJLFNBQVNFLEVBQUUsRUFBRTtRQUNaLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUM5QixPQUFPO1FBQ0gsT0FBTztJQUNYO0FBQ0o7QUFFQSxNQUFNSixRQUFRLENBQUNRLEtBQWUsSUFBSUMsUUFBUSxDQUFDQyxJQUFNQyxXQUFXRCxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL2FwaS50cz83MGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3RQcm9wc30gZnJvbSBcIkAvdHlwZXMvYXBpL0ZldGNoZXJQcm9wc1wiO1xuaW1wb3J0IHtGb3JlY2FzdFJlc3BvbnNlfSBmcm9tIFwiQC90eXBlcy9hcGkvRm9yZWNhc3RSZXNwb25zZVwiXG5pbXBvcnQge1dlYXRoZXJQcm9wc30gZnJvbSBcIkAvdHlwZXMvYXBpL0ZldGNoZXJQcm9wc1wiO1xuaW1wb3J0IHtXZWF0aGVyUmVzcG9uc2V9IGZyb20gXCJAL3R5cGVzL2FwaS9XZWF0aGVyUmVzcG9uc2VcIjtcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9cIjtcbmNvbnN0IGFwaWtleSA9IFwiM2RjZTliMWM2NjgzNzI2MmEyNWIzZjQ0OGQzNTRhNzZcIjtcblxuLy8gaW50ZXJmYWNlIFdlYXRoZXJQcm9wcyB7XG4vLyAgICAgY2l0eTogc3RyaW5nLFxuLy8gfVxuXG4vLyBpbnRlcmZhY2UgRm9yZWNhc3RQcm9wcyB7XG4vLyAgICAgbG9uOiBudW1iZXIsXG4vLyAgICAgbGF0OiBudW1iZXIsXG4vLyB9XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxXZWF0aGVyQXBpKHtjaXR5fSA6V2VhdGhlclByb3BzKSA6UHJvbWlzZTxXZWF0aGVyUmVzcG9uc2UgfCBmYWxzZT4ge1xuICAgIGF3YWl0IHNsZWVwKDIwMDApXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggYmFzZVVybCArIGB3ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2FwaWtleX0mdW5pdHM9bWV0cmljYClcbiAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsbEZvcmVjYXN0QXBpKHtsYXQsIGxvbn0gOkZvcmVjYXN0UHJvcHMpIDpQcm9taXNlPEZvcmVjYXN0UmVzcG9uc2UgfCBmYWxzZT4ge1xuICAgIGF3YWl0IHNsZWVwKDUwMDApXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggYmFzZVVybCArIGBvbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke2FwaWtleX0mdW5pdHM9bWV0cmljYClcbiAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3Qgc2xlZXAgPSAobXM6IG51bWJlcikgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgbXMpKSJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiYXBpa2V5IiwiY2FsbFdlYXRoZXJBcGkiLCJjaXR5Iiwic2xlZXAiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJqc29uIiwiY2FsbEZvcmVjYXN0QXBpIiwibGF0IiwibG9uIiwibXMiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/api.ts\n"));

/***/ })

});