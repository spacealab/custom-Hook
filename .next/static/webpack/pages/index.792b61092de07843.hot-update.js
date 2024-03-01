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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ \"./src/api/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ForecastList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForecastList */ \"./src/components/weather/ForecastList.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm */ \"./src/components/weather/SearchForm.tsx\");\n/* harmony import */ var _WeatherInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeatherInfo */ \"./src/components/weather/WeatherInfo.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Weather(param) {\n    let { city } = param;\n    _s();\n    const [cityState, setCityState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(city);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [weatherState, setWeatherState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        city: \"\",\n        wind: 0,\n        humidity: 0,\n        description: \"\",\n        icon: \"\",\n        daily: []\n    });\n    const [forecastState, setForecastState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getWeatherData = async ()=>{\n        const response = await (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.callWeatherApi)({\n            city: cityState\n        });\n        setIsLoading(false);\n        const weather = {\n            city: response.name,\n            wind: response.wind.speed,\n            humidity: response.main.humidity,\n            description: response.weather[0].description,\n            icon: response.weather[0].icon,\n            daily: []\n        };\n        setWeatherState(weather);\n        const forecastResponse = await (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.callForecastApi)({\n            lat: response.coord.lat,\n            lon: response.coord.lon\n        });\n        setForecastState(forecastResponse);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWeatherData();\n    }, [\n        cityState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mt-[200px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"next.svg\",\n                alt: \"logo\",\n                width: 86,\n                height: 44\n            }, void 0, false, {\n                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow mt-4 rounded-2xl p-8 py-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        city: cityState,\n                        setCityState: setCityState\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    weatherState.city && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeatherInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        weather: weatherState\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 39\n                    }, this),\n                    forecastState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ForecastList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        forecast: forecastState\n                    }, void 0, false, {\n                        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 35\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ali/Desktop/Project/3/custom Hook/src/components/weather/Weather.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Weather, \"KCBYn3oO0Ffzmt5NOu+agZ7w/8E=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL1dlYXRoZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDYjtBQUVGO0FBRVg7QUFDTztBQUNFO0FBTXhDLFNBQVNRLFFBQVEsS0FBYTtRQUFiLEVBQUNDLElBQUksRUFBUSxHQUFiOztJQUNiLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQ007SUFDM0MsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFVO1FBQ3RETSxNQUFNO1FBQ05PLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsT0FBTyxFQUFFO0lBQ2I7SUFFQSxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHbkIsK0NBQVFBLENBQTBCO0lBRTVFLE1BQU1vQixpQkFBaUI7UUFDbkIsTUFBTUMsV0FBVyxNQUFNdkIsd0RBQWNBLENBQUM7WUFBQ1EsTUFBTUM7UUFBUztRQUN0REcsYUFBYTtRQUNiLE1BQU1ZLFVBQVU7WUFDWmhCLE1BQU1lLFNBQVNFLElBQUk7WUFDbkJWLE1BQUtRLFNBQVNSLElBQUksQ0FBQ1csS0FBSztZQUN4QlYsVUFBVU8sU0FBU0ksSUFBSSxDQUFDWCxRQUFRO1lBQ2hDQyxhQUFhTSxTQUFTQyxPQUFPLENBQUMsRUFBRSxDQUFDUCxXQUFXO1lBQzVDQyxNQUFNSyxTQUFTQyxPQUFPLENBQUMsRUFBRSxDQUFDTixJQUFJO1lBQzlCQyxPQUFPLEVBQUU7UUFDYjtRQUNBTCxnQkFBZ0JVO1FBRWhCLE1BQU1JLG1CQUFvQixNQUFNN0IseURBQWVBLENBQUM7WUFBQzhCLEtBQUtOLFNBQVNPLEtBQUssQ0FBQ0QsR0FBRztZQUFFRSxLQUFLUixTQUFTTyxLQUFLLENBQUNDLEdBQUc7UUFBQTtRQUNqR1YsaUJBQWlCTztJQUNyQjtJQUVBM0IsZ0RBQVNBLENBQUM7UUFDTnFCO0lBQ0osR0FBRztRQUFDYjtLQUFVO0lBRWQscUJBQ0ksOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQzdCLG1EQUFLQTtnQkFBQzhCLEtBQUs7Z0JBQVlDLEtBQUs7Z0JBQVFDLE9BQU87Z0JBQUlDLFFBQVE7Ozs7OzswQkFDeEQsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQzVCLG1EQUFVQTt3QkFBQ0csTUFBTUM7d0JBQVdDLGNBQWNBOzs7Ozs7b0JBQzFDRyxhQUFhTCxJQUFJLGtCQUFJLDhEQUFDRixvREFBV0E7d0JBQUNrQixTQUFTWDs7Ozs7O29CQUMzQ08sK0JBQWlCLDhEQUFDakIscURBQVlBO3dCQUFDbUMsVUFBVWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUQ7R0E3Q1NiO0tBQUFBO0FBK0NULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvV2VhdGhlci50c3g/NDZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NhbGxGb3JlY2FzdEFwaSwgY2FsbFdlYXRoZXJBcGl9IGZyb20gXCJAL2FwaS9hcGlcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRm9yZWNhc3RMaXN0IGZyb20gXCIuL0ZvcmVjYXN0TGlzdFwiO1xuaW1wb3J0IHtGb3JlY2FzdFJlc3BvbnNlfSBmcm9tIFwiQC90eXBlcy9hcGkvRm9yZWNhc3RSZXNwb25zZVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gXCIuL1NlYXJjaEZvcm1cIjtcbmltcG9ydCBXZWF0aGVySW5mbyBmcm9tIFwiLi9XZWF0aGVySW5mb1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNpdHk6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBXZWF0aGVyKHtjaXR5fTogUHJvcHMpIHtcbiAgICBjb25zdCBbY2l0eVN0YXRlLCBzZXRDaXR5U3RhdGVdID0gdXNlU3RhdGUoY2l0eSk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFt3ZWF0aGVyU3RhdGUsIHNldFdlYXRoZXJTdGF0ZV0gPSB1c2VTdGF0ZTx3ZWF0aGVyPih7XG4gICAgICAgIGNpdHk6IFwiXCIsXG4gICAgICAgIHdpbmQ6IDAsXG4gICAgICAgIGh1bWlkaXR5OiAwLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgZGFpbHk6IFtdXG4gICAgfSk7XG5cbiAgICBjb25zdCBbZm9yZWNhc3RTdGF0ZSwgc2V0Rm9yZWNhc3RTdGF0ZV0gPSB1c2VTdGF0ZTxGb3JlY2FzdFJlc3BvbnNlIHwgbnVsbD4obnVsbCk7XG5cbiAgICBjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWxsV2VhdGhlckFwaSh7Y2l0eTogY2l0eVN0YXRlfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgICAgICAgICBjaXR5OiByZXNwb25zZS5uYW1lLFxuICAgICAgICAgICAgd2luZDpyZXNwb25zZS53aW5kLnNwZWVkLFxuICAgICAgICAgICAgaHVtaWRpdHk6IHJlc3BvbnNlLm1haW4uaHVtaWRpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2Uud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGljb246IHJlc3BvbnNlLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgICAgIGRhaWx5OiBbXVxuICAgICAgICB9XG4gICAgICAgIHNldFdlYXRoZXJTdGF0ZSh3ZWF0aGVyKTtcblxuICAgICAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gIGF3YWl0IGNhbGxGb3JlY2FzdEFwaSh7bGF0OiByZXNwb25zZS5jb29yZC5sYXQsIGxvbjogcmVzcG9uc2UuY29vcmQubG9ufSlcbiAgICAgICAgc2V0Rm9yZWNhc3RTdGF0ZShmb3JlY2FzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIH0sIFtjaXR5U3RhdGVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC1bMjAwcHhdXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIm5leHQuc3ZnXCJ9IGFsdD17XCJsb2dvXCJ9IHdpZHRoPXs4Nn0gaGVpZ2h0PXs0NH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgbXQtNCByb3VuZGVkLTJ4bCBwLTggcHktMTZcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSBjaXR5PXtjaXR5U3RhdGV9IHNldENpdHlTdGF0ZT17c2V0Q2l0eVN0YXRlfSAvPlxuICAgICAgICAgICAgICAgIHt3ZWF0aGVyU3RhdGUuY2l0eSAmJiA8V2VhdGhlckluZm8gd2VhdGhlcj17d2VhdGhlclN0YXRlfS8+fVxuICAgICAgICAgICAgICAgIHtmb3JlY2FzdFN0YXRlICYmIDxGb3JlY2FzdExpc3QgZm9yZWNhc3Q9e2ZvcmVjYXN0U3RhdGV9Lz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiXSwibmFtZXMiOlsiY2FsbEZvcmVjYXN0QXBpIiwiY2FsbFdlYXRoZXJBcGkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvcmVjYXN0TGlzdCIsIkltYWdlIiwiU2VhcmNoRm9ybSIsIldlYXRoZXJJbmZvIiwiV2VhdGhlciIsImNpdHkiLCJjaXR5U3RhdGUiLCJzZXRDaXR5U3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ3ZWF0aGVyU3RhdGUiLCJzZXRXZWF0aGVyU3RhdGUiLCJ3aW5kIiwiaHVtaWRpdHkiLCJkZXNjcmlwdGlvbiIsImljb24iLCJkYWlseSIsImZvcmVjYXN0U3RhdGUiLCJzZXRGb3JlY2FzdFN0YXRlIiwiZ2V0V2VhdGhlckRhdGEiLCJyZXNwb25zZSIsIndlYXRoZXIiLCJuYW1lIiwic3BlZWQiLCJtYWluIiwiZm9yZWNhc3RSZXNwb25zZSIsImxhdCIsImNvb3JkIiwibG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JlY2FzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/weather/Weather.tsx\n"));

/***/ })

});