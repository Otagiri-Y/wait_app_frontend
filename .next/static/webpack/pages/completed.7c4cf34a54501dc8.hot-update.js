"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/completed",{

/***/ "./pages/completed.js":
/*!****************************!*\
  !*** ./pages/completed.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Completed.module.css */ \"./styles/Completed.module.css\");\n/* harmony import */ var _styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n // 矢印アイコンのインポート\n // Path to your CSS module\nfunction PaidQueuePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isReloading, setIsReloading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleReload = ()=>{\n        setIsReloading(true);\n        window.location.reload();\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/queue\");\n        }, 500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"../samurai.png\",\n                    alt: \"Samurai Image\",\n                    className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().image)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the LINE!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketInfo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"[受付完了]\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"受付メールを送付しています。\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"入店時にお見せください。\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                    disabled: loading,\n                    children: \"⏎トップに戻る\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(PaidQueuePage, \"cZVUQ4BVYxgrqUip2kD3R9lo9oo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wbGV0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDeUI7QUFDc0IsQ0FBQyxlQUFlO0FBQ25ELENBQUMsMEJBQTBCO0FBRWhFLFNBQVNROztJQUNwQixNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNYSxlQUFlO1FBQ2pCRCxlQUFlO1FBQ2ZFLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUMxQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEJBLE1BQU1DLGNBQWM7UUFDcEJULFdBQVc7UUFFWFUsV0FBVztZQUNQVixXQUFXO1lBQ1hGLE9BQU9hLElBQUksQ0FBQztRQUNoQixHQUFHO0lBQ1A7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV2pCLCtFQUFnQjs7MEJBQzVCLDhEQUFDZ0I7Z0JBQUlDLFdBQVdqQixvRkFBcUI7MEJBQ2pDLDRFQUFDb0I7b0JBQUlDLEtBQUk7b0JBQWlCQyxLQUFJO29CQUFnQkwsV0FBV2pCLDJFQUFZOzs7Ozs7Ozs7OzswQkFFekUsOERBQUN3QjtnQkFBR1AsV0FBV2pCLCtFQUFnQjswQkFBRTs7Ozs7OzBCQUNqQyw4REFBQzBCO2dCQUFHVCxXQUFXakIsOEVBQWU7MEJBQUU7Ozs7OzswQkFFaEMsOERBQUNnQjtnQkFBSUMsV0FBV2pCLGdGQUFpQjswQkFDN0IsNEVBQUMwQjs4QkFBRzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNWO2dCQUFJQyxXQUFXakIsMEVBQVc7O2tDQUN2Qiw4REFBQ2dCO3dCQUFJQyxXQUFXakIsMkVBQVk7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNnQjt3QkFBSUMsV0FBV2pCLDJFQUFZO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBR2xDLDhEQUFDK0I7Z0JBQUtDLFVBQVVyQjtnQkFBY00sV0FBV2pCLDBFQUFXOzBCQUNoRCw0RUFBQ2lDO29CQUFPQyxNQUFLO29CQUFTakIsV0FBV2pCLGtGQUFtQjtvQkFBRW9DLFVBQVVqQzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekY7R0E1Q3dCRjs7UUFDTE4sa0RBQVNBOzs7S0FESk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGxldGVkLmpzPzg2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhUGFwZXJQbGFuZSwgZmFTcGlubmVyLCBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnOyAvLyDnn6LljbDjgqLjgqTjgrPjg7Pjga7jgqTjg7Pjg53jg7zjg4hcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbXBsZXRlZC5tb2R1bGUuY3NzJzsgLy8gUGF0aCB0byB5b3VyIENTUyBtb2R1bGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFpZFF1ZXVlUGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzUmVsb2FkaW5nLCBzZXRJc1JlbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVSZWxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUmVsb2FkaW5nKHRydWUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3F1ZXVlJyk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc2FtdXJhaS5wbmdcIiBhbHQ9XCJTYW11cmFpIEltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU1haW59PlNtYXNoIHRoZSBMSU5FITwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVTdWJ9PuW+heOBoeaZgumWk+OCkuOBmeOBo+mjm+OBsOOBmyE8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldEluZm99PlxuICAgICAgICAgICAgICAgIDxoMj5b5Y+X5LuY5a6M5LqGXTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT7lj5fku5jjg6Hjg7zjg6vjgpLpgIHku5jjgZfjgabjgYTjgb7jgZnjgII8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT7lhaXlupfmmYLjgavjgYropovjgZvjgY/jgaDjgZXjgYTjgII8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAg4o+O44OI44OD44OX44Gr5oi744KLXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb250QXdlc29tZUljb24iLCJmYVBhcGVyUGxhbmUiLCJmYVNwaW5uZXIiLCJmYVN5bmNBbHQiLCJzdHlsZXMiLCJQYWlkUXVldWVQYWdlIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc1JlbG9hZGluZyIsInNldElzUmVsb2FkaW5nIiwiaGFuZGxlUmVsb2FkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWFnZUNvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCIsImltYWdlIiwiaDEiLCJ0aXRsZU1haW4iLCJoMiIsInRpdGxlU3ViIiwidGlja2V0SW5mbyIsInRleHQiLCJsYWJlbCIsImZvcm0iLCJvblN1Ym1pdCIsImJ1dHRvbiIsInR5cGUiLCJzdWJtaXRCdXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/completed.js\n"));

/***/ })

});