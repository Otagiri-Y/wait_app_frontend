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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Completed.module.css */ \"./styles/Completed.module.css\");\n/* harmony import */ var _styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // 矢印アイコンのインポート\n // Path to your CSS module\nfunction PaidQueuePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isReloading, setIsReloading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleReload = ()=>{\n        setIsReloading(true);\n        window.location.reload();\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/paid-queue\");\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the LINE!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"受付メールを送付しています。\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"受付メールを送付しています。入店時にお見せください。\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"ticketType\",\n                        className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().radio)\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_Completed_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                    disabled: loading,\n                    children: \"⏎トップに戻る\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/completed.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(PaidQueuePage, \"cZVUQ4BVYxgrqUip2kD3R9lo9oo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wbGV0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDeUI7QUFDVztBQUNkLENBQUMsZUFBZTtBQUMxQixDQUFDLDBCQUEwQjtBQUVoRSxTQUFTUTs7SUFDcEIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFFL0MsTUFBTWEsZUFBZTtRQUNqQkQsZUFBZTtRQUNmRSxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDMUI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCQSxNQUFNQyxjQUFjO1FBQ3BCVCxXQUFXO1FBRVhVLFdBQVc7WUFDUFYsV0FBVztZQUNYRixPQUFPYSxJQUFJLENBQUM7UUFDaEIsR0FBRztJQUNQO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdqQiwrRUFBZ0I7OzBCQUM1Qiw4REFBQ21CO2dCQUFHRixXQUFXakIsK0VBQWdCOzBCQUFFOzs7Ozs7MEJBQ2pDLDhEQUFDcUI7Z0JBQUdKLFdBQVdqQiw4RUFBZTswQkFBRTs7Ozs7OzBCQUVoQyw4REFBQ2dCO2dCQUFJQyxXQUFXakIsMEVBQVc7O2tDQUNmLDhEQUFDZ0I7d0JBQUlDLFdBQVdqQiwyRUFBWTtrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2dCO3dCQUFJQyxXQUFXakIsMkVBQVk7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUN5Qjt3QkFBTUMsTUFBSzt3QkFBUUMsTUFBSzt3QkFBYVYsV0FBV2pCLDJFQUFZOzs7Ozs7Ozs7Ozs7MEJBSXpFLDhEQUFDNkI7Z0JBQUtDLFVBQVVuQjtnQkFBY00sV0FBV2pCLDBFQUFXOzBCQUNoRCw0RUFBQytCO29CQUFPTCxNQUFLO29CQUFTVCxXQUFXakIsa0ZBQW1CO29CQUFFaUMsVUFBVTlCOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU96RjtHQXhDd0JGOztRQUNMTixrREFBU0E7OztLQURKTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wbGV0ZWQuanM/ODYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQYXBlclBsYW5lLCBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFTeW5jQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJzsgLy8g55+i5Y2w44Ki44Kk44Kz44Oz44Gu44Kk44Oz44Od44O844OIXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Db21wbGV0ZWQubW9kdWxlLmNzcyc7IC8vIFBhdGggdG8geW91ciBDU1MgbW9kdWxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhaWRRdWV1ZVBhZ2UoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1JlbG9hZGluZywgc2V0SXNSZWxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVsb2FkID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1JlbG9hZGluZyh0cnVlKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wYWlkLXF1ZXVlJyk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVNYWlufT5TbWFzaCB0aGUgTElORSE8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlU3VifT7lvoXjgaHmmYLplpPjgpLjgZnjgaPpo5vjgbDjgZshPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PuWPl+S7mOODoeODvOODq+OCkumAgeS7mOOBl+OBpuOBhOOBvuOBmeOAgjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+5Y+X5LuY44Oh44O844Or44KS6YCB5LuY44GX44Gm44GE44G+44GZ44CC5YWl5bqX5pmC44Gr44GK6KaL44Gb44GP44Gg44GV44GE44CCPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRpY2tldFR5cGVcIiBjbGFzc05hbWU9e3N0eWxlcy5yYWRpb30gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnN1Ym1pdEJ1dHRvbn0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKPjuODiOODg+ODl+OBq+aIu+OCi1xuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhUGFwZXJQbGFuZSIsImZhU3Bpbm5lciIsImZhU3luY0FsdCIsInN0eWxlcyIsIlBhaWRRdWV1ZVBhZ2UiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzUmVsb2FkaW5nIiwic2V0SXNSZWxvYWRpbmciLCJoYW5kbGVSZWxvYWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGVNYWluIiwiaDIiLCJ0aXRsZVN1YiIsInRleHQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJyYWRpbyIsImZvcm0iLCJvblN1Ym1pdCIsImJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/completed.js\n"));

/***/ })

});