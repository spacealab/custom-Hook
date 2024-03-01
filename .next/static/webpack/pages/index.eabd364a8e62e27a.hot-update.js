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

/***/ "./src/components/weather/Weather.tsx":
/*!********************************************!*\
  !*** ./src/components/weather/Weather.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ \"./src/api/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ForecastList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForecastList */ \"./src/components/weather/ForecastList.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm */ \"./src/components/weather/SearchForm.tsx\");\n/* harmony import */ var _WeatherInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeatherInfo */ \"./src/components/weather/WeatherInfo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Weather(param) {\n    let { city } = param;\n    _s();\n    const [cityState, setCityState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(city);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [weatherState, setWeatherState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        city: \"\",\n        wind: 0,\n        humidity: 0,\n        description: \"\",\n        icon: \"\",\n        daily: []\n    });\n    const [forecastState, setForecastState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getWeatherData = async ()=>{\n        setIsLoading(true);\n        const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.callWeatherApi)({\n            city: cityState\n        });\n        setIsLoading(false);\n        const weather = {\n            city: response.name,\n            wind: response.wind.speed,\n            humidity: response.main.humidity,\n            description: response.weather[0].description,\n            icon: response.weather[0].icon,\n            daily: []\n        };\n        setWeatherState(weather);\n        const forecastResponse = await (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.callForecastApi)({\n            lat: response.coord.lat,\n            lon: response.coord.lon\n        });\n        setForecastState(forecastResponse);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWeatherData();\n    }, [\n        cityState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mt-[200px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"next.svg\",\n                alt: \"logo\",\n                width: 86,\n                height: 44\n            }, void 0, false, {\n                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow mt-4 rounded-2xl p-8 py-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        city: cityState,\n                        setCityState: setCityState\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"is loading please wait\"\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 33\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            weatherState.city && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeatherInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                weather: weatherState\n                            }, void 0, false, {\n                                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 47\n                            }, this),\n                            forecastState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ForecastList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                forecast: forecastState\n                            }, void 0, false, {\n                                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 43\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_s(Weather, \"KCBYn3oO0Ffzmt5NOu+agZ7w/8E=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL1dlYXRoZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUVGO0FBRVg7QUFDTztBQUNFO0FBTXhDLFNBQVNRLFFBQVEsS0FBYTtRQUFiLEVBQUNDLElBQUksRUFBUSxHQUFiOztJQUNiLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ007SUFDM0MsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFVO1FBQ3RETSxNQUFNO1FBQ05PLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsT0FBTyxFQUFFO0lBQ2I7SUFFQSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHbkIsK0NBQVFBLENBQTBCO0lBRTVFLE1BQU1vQixpQkFBaUI7UUFDbkJWLGFBQWE7UUFDYixNQUFNVyxXQUFXLE1BQU12Qix3REFBY0EsQ0FBQztZQUFDUSxNQUFNQztRQUFTO1FBQ3RERyxhQUFhO1FBQ2IsTUFBTVksVUFBVTtZQUNaaEIsTUFBTWUsU0FBU0UsSUFBSTtZQUNuQlYsTUFBS1EsU0FBU1IsSUFBSSxDQUFDVyxLQUFLO1lBQ3hCVixVQUFVTyxTQUFTSSxJQUFJLENBQUNYLFFBQVE7WUFDaENDLGFBQWFNLFNBQVNDLE9BQU8sQ0FBQyxFQUFFLENBQUNQLFdBQVc7WUFDNUNDLE1BQU1LLFNBQVNDLE9BQU8sQ0FBQyxFQUFFLENBQUNOLElBQUk7WUFDOUJDLE9BQU8sRUFBRTtRQUNiO1FBQ0FMLGdCQUFnQlU7UUFFaEIsTUFBTUksbUJBQW9CLE1BQU03Qix5REFBZUEsQ0FBQztZQUFDOEIsS0FBS04sU0FBU08sS0FBSyxDQUFDRCxHQUFHO1lBQUVFLEtBQUtSLFNBQVNPLEtBQUssQ0FBQ0MsR0FBRztRQUFBO1FBQ2pHVixpQkFBaUJPO0lBQ3JCO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOcUI7SUFDSixHQUFHO1FBQUNiO0tBQVU7SUFFZCxxQkFDSSw4REFBQ3VCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDN0IsbURBQUtBO2dCQUFDOEIsS0FBSztnQkFBWUMsS0FBSztnQkFBUUMsT0FBTztnQkFBSUMsUUFBUTs7Ozs7OzBCQUN4RCw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDNUIsbURBQVVBO3dCQUFDRyxNQUFNQzt3QkFBV0MsY0FBY0E7Ozs7OztvQkFFdkNDLDBCQUFZLDhEQUFDMkI7a0NBQUU7Ozs7OzZDQUNmOzs0QkFDS3pCLGFBQWFMLElBQUksa0JBQUksOERBQUNGLG9EQUFXQTtnQ0FBQ2tCLFNBQVNYOzs7Ozs7NEJBQzNDTywrQkFBaUIsOERBQUNqQixxREFBWUE7Z0NBQUNvQyxVQUFVbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxFO0dBbkRTYjtLQUFBQTtBQXFEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL1dlYXRoZXIudHN4PzQ2YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYWxsRm9yZWNhc3RBcGksIGNhbGxXZWF0aGVyQXBpfSBmcm9tIFwiQC9hcGkvYXBpXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZvcmVjYXN0TGlzdCBmcm9tIFwiLi9Gb3JlY2FzdExpc3RcIjtcbmltcG9ydCB7Rm9yZWNhc3RSZXNwb25zZX0gZnJvbSBcIkAvdHlwZXMvYXBpL0ZvcmVjYXN0UmVzcG9uc2VcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi9TZWFyY2hGb3JtXCI7XG5pbXBvcnQgV2VhdGhlckluZm8gZnJvbSBcIi4vV2VhdGhlckluZm9cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaXR5OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gV2VhdGhlcih7Y2l0eX06IFByb3BzKSB7XG4gICAgY29uc3QgW2NpdHlTdGF0ZSwgc2V0Q2l0eVN0YXRlXSA9IHVzZVN0YXRlKGNpdHkpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbd2VhdGhlclN0YXRlLCBzZXRXZWF0aGVyU3RhdGVdID0gdXNlU3RhdGU8d2VhdGhlcj4oe1xuICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICB3aW5kOiAwLFxuICAgICAgICBodW1pZGl0eTogMCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGljb246IFwiXCIsXG4gICAgICAgIGRhaWx5OiBbXVxuICAgIH0pO1xuXG4gICAgY29uc3QgW2ZvcmVjYXN0U3RhdGUsIHNldEZvcmVjYXN0U3RhdGVdID0gdXNlU3RhdGU8Rm9yZWNhc3RSZXNwb25zZSB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWxsV2VhdGhlckFwaSh7Y2l0eTogY2l0eVN0YXRlfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgICAgICBjaXR5OiByZXNwb25zZS5uYW1lLFxuICAgICAgICAgICAgd2luZDpyZXNwb25zZS53aW5kLnNwZWVkLFxuICAgICAgICAgICAgaHVtaWRpdHk6IHJlc3BvbnNlLm1haW4uaHVtaWRpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2Uud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGljb246IHJlc3BvbnNlLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgICAgIGRhaWx5OiBbXVxuICAgICAgICB9XG4gICAgICAgIHNldFdlYXRoZXJTdGF0ZSh3ZWF0aGVyKTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gIGF3YWl0IGNhbGxGb3JlY2FzdEFwaSh7bGF0OiByZXNwb25zZS5jb29yZC5sYXQsIGxvbjogcmVzcG9uc2UuY29vcmQubG9ufSlcbiAgICAgICAgc2V0Rm9yZWNhc3RTdGF0ZShmb3JlY2FzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIH0sIFtjaXR5U3RhdGVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC1bMjAwcHhdXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIm5leHQuc3ZnXCJ9IGFsdD17XCJsb2dvXCJ9IHdpZHRoPXs4Nn0gaGVpZ2h0PXs0NH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgbXQtNCByb3VuZGVkLTJ4bCBwLTggcHktMTZcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSBjaXR5PXtjaXR5U3RhdGV9IHNldENpdHlTdGF0ZT17c2V0Q2l0eVN0YXRlfSAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gPHA+aXMgbG9hZGluZyBwbGVhc2Ugd2FpdDwvcD4gOlxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dlYXRoZXJTdGF0ZS5jaXR5ICYmIDxXZWF0aGVySW5mbyB3ZWF0aGVyPXt3ZWF0aGVyU3RhdGV9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9yZWNhc3RTdGF0ZSAmJiA8Rm9yZWNhc3RMaXN0IGZvcmVjYXN0PXtmb3JlY2FzdFN0YXRlfS8+fVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiXSwibmFtZXMiOlsiY2FsbEZvcmVjYXN0QXBpIiwiY2FsbFdlYXRoZXJBcGkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcmVjYXN0TGlzdCIsIkltYWdlIiwiU2VhcmNoRm9ybSIsIldlYXRoZXJJbmZvIiwiV2VhdGhlciIsImNpdHkiLCJjaXR5U3RhdGUiLCJzZXRDaXR5U3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ3ZWF0aGVyU3RhdGUiLCJzZXRXZWF0aGVyU3RhdGUiLCJ3aW5kIiwiaHVtaWRpdHkiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkYWlseSIsImZvcmVjYXN0U3RhdGUiLCJzZXRGb3JlY2FzdFN0YXRlIiwiZ2V0V2VhdGhlckRhdGEiLCJyZXNwb25zZSIsIndlYXRoZXIiLCJuYW1lIiwic3BlZWQiLCJtYWluIiwiZm9yZWNhc3RSZXNwb25zZSIsImxhdCIsImNvb3JkIiwibG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiZm9yZWNhc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/weather/Weather.tsx\n"));

/***/ })

});