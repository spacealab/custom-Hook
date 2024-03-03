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

/***/ "./src/hook/useApiCall.ts":
/*!********************************!*\
  !*** ./src/hook/useApiCall.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useApiCall; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useApiCall(param) {\n    let { func, params, refresh } = param;\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"pending\");\n    const apiCall = async ()=>{\n        setStatus(\"isLoading\");\n        const result = await func(params);\n        if (result === false) {\n            setStatus(\"hasError\");\n            return;\n        }\n        setStatus(\"isSuccess\");\n        setResponse(result);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        apiCall();\n    }, refresh);\n    return {\n        status,\n        response\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9vay91c2VBcGlDYWxsLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQVU3QixTQUFTRSxXQUFrQixLQUFtQztRQUFuQyxFQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFhLEdBQW5DO0lBR3RDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBVztJQUVuRCxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQVk7SUFFaEQsTUFBTVMsVUFBVTtRQUNaRCxVQUFVO1FBQ1YsTUFBTUUsU0FBUyxNQUFNUixLQUFLQztRQUUxQixJQUFHTyxXQUFXLE9BQU87WUFDakJGLFVBQVU7WUFDVjtRQUNKO1FBQ0FBLFVBQVU7UUFDVkYsWUFBWUk7SUFDaEI7SUFFQVgsZ0RBQVNBLENBQUU7UUFDUFU7SUFDSixHQUFFTDtJQUVGLE9BQU87UUFBQ0c7UUFBUUY7SUFBUTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9vay91c2VBcGlDYWxsLnRzPzM1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQXBpU3RhdHVzIGZyb20gXCJAL3R5cGVzL2FwaS9BcGlTdGF0dXNcIlxuXG5pbnRlcmZhY2UgUHJvcHM8VCxTPiB7XG4gICAgZnVuYzogKGFyZzogVCkgPT4gUHJvbWlzZTxTIHwgZmFsc2U+O1xuICAgIHBhcmFtczogVDtcbiAgICByZWZyZXNoOiBBcnJheTxhbnk+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUFwaUNhbGw8UywgVD4gKHtmdW5jLCBwYXJhbXMsIHJlZnJlc2h9OiBQcm9wczxULFM+KSB7XG5cblxuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8U3wgZmFsc2U+KGZhbHNlKTtcblxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxBcGlTdGF0dXM+KFwicGVuZGluZ1wiKVxuXG4gICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiaXNMb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKHBhcmFtcyk7ICBcblxuICAgICAgICBpZihyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJoYXNFcnJvclwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRTdGF0dXMoXCJpc1N1Y2Nlc3NcIik7XG4gICAgICAgIHNldFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgICAgIGFwaUNhbGwoKTtcbiAgICB9LHJlZnJlc2gpXG5cbiAgICByZXR1cm4ge3N0YXR1cywgcmVzcG9uc2V9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBpQ2FsbCIsImZ1bmMiLCJwYXJhbXMiLCJyZWZyZXNoIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInN0YXR1cyIsInNldFN0YXR1cyIsImFwaUNhbGwiLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hook/useApiCall.ts\n"));

/***/ })

});