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

/***/ "./src/hook/useWeatherApi.tsx":
/*!************************************!*\
  !*** ./src/hook/useWeatherApi.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useWeatherApi; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ \"./src/api/api.ts\");\nvar _s = $RefreshSig$();\n\n\nfunction useWeatherApi(param) {\n    let { city } = param;\n    _s();\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"pending\");\n    const apiCall = async ()=>{\n        setStatus(\"isLoading\");\n        const result = await (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.callWeatherApi)({\n            city\n        });\n        setResponse(result);\n        if (result === false) {\n            setStatus(\"hasError\");\n            return;\n        }\n        setStatus(\"isSuccess\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        apiCall();\n    }, [\n        city\n    ]);\n    return {\n        isLoading,\n        hasError,\n        response\n    };\n}\n_s(useWeatherApi, \"0osYrjBBfFZq283cUF2oC+LGajM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9vay91c2VXZWF0aGVyQXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUdEO0FBYzVCLFNBQVNHLGNBQWMsS0FBYTtRQUFiLEVBQUNDLElBQUksRUFBUSxHQUFiOztJQUVsQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQTBCO0lBRWxFLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBbUQ7SUFFdkYsTUFBTVEsVUFBVTtRQUNaRCxVQUFVO1FBQ1YsTUFBTUUsU0FBUyxNQUFNUix3REFBY0EsQ0FBQztZQUFDRTtRQUFJO1FBQ3pDRSxZQUFZSTtRQUNaLElBQUdBLFdBQVcsT0FBTztZQUNqQkYsVUFBVTtZQUNWO1FBQ0o7UUFDQUEsVUFBVTtJQUNkO0lBRUFSLGdEQUFTQSxDQUFFO1FBQ1BTO0lBQ0osR0FBRTtRQUFDTDtLQUFLO0lBRVIsT0FBTztRQUFDTztRQUFXQztRQUFVUDtJQUFRO0FBQ3pDO0dBdEJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2svdXNlV2VhdGhlckFwaS50c3g/MWUzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7V2VhdGhlclJlc3BvbnNlfSBmcm9tIFwiQC90eXBlcy9hcGkvV2VhdGhlclJlc3BvbnNlXCJcbmltcG9ydCB7IGNhbGxXZWF0aGVyQXBpIH0gZnJvbSBcIkAvYXBpL2FwaVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNpdHk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFdlYXRoZXJSZXN1bHQge1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBoYXNFcnJvcjogYm9vbGVhbjtcbiAgICByZXNwb25zZTogV2VhdGhlclJlc3BvbnNlIHwgZmFsc2U7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXZWF0aGVyQXBpKHtjaXR5fTogUHJvcHMpIDogV2VhdGhlclJlc3VsdCB7XG5cbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPFdlYXRoZXJSZXNwb25zZSB8IGZhbHNlPihmYWxzZSk7XG5cbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8XCJwZW5kaW5nXCJ8IFwiaXNMb2FkaW5nXCIgfFwiaGFzRXJyb3JcIiB8IFwiaXNTdWNjZXNzXCI+KFwicGVuZGluZ1wiKVxuXG4gICAgY29uc3QgYXBpQ2FsbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFwiaXNMb2FkaW5nXCIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsV2VhdGhlckFwaSh7Y2l0eX0pOyAgIFxuICAgICAgICBzZXRSZXNwb25zZShyZXN1bHQpOyAgICAgXG4gICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcImhhc0Vycm9yXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFN0YXR1cyhcImlzU3VjY2Vzc1wiKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgYXBpQ2FsbCgpO1xuICAgIH0sW2NpdHldKVxuXG4gICAgcmV0dXJuIHtpc0xvYWRpbmcsIGhhc0Vycm9yLCByZXNwb25zZX1cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjYWxsV2VhdGhlckFwaSIsInVzZVdlYXRoZXJBcGkiLCJjaXR5IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInN0YXR1cyIsInNldFN0YXR1cyIsImFwaUNhbGwiLCJyZXN1bHQiLCJpc0xvYWRpbmciLCJoYXNFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hook/useWeatherApi.tsx\n"));

/***/ })

});