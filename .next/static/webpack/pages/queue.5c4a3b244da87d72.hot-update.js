"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Queue.module.css */ \"./styles/Queue.module.css\");\n/* harmony import */ var _styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Path to your CSS module\nfunction PaidQueuePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/paid-queue\");\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the LINE!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketInfo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"[特急券]\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().additionalText),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"らーめん\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"麺屋 紫侍\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketCost),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"30組待ち | （約90分）\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueTitle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No  name 人数\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"5min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 tanaka 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"7min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"7min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"5min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>window.location.reload(),\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().reloadButton),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faArrowCircleUp,\n                    spin: true,\n                    className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                    disabled: loading,\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner,\n                                spin: true\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                                lineNumber: 69,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0送信中...\"\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPaperPlane\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0行列に並ぶ\"\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(PaidQueuePage, \"OeGW3YQfIEwiDdtbkZtE38+y0P4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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X0UvLi9wYWdlcy9xdWV1ZS5qcz9kOTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBhcGVyUGxhbmUsIGZhU3Bpbm5lciwgZmFBcnJvd0NpcmNsZVVwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1F1ZXVlLm1vZHVsZS5jc3MnOyAvLyBQYXRoIHRvIHlvdXIgQ1NTIG1vZHVsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWlkUXVldWVQYWdlKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3BhaWQtcXVldWUnKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZU1haW59PlNtYXNoIHRoZSBMSU5FITwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVTdWJ9PuW+heOBoeaZgumWk+OCkuOBmeOBo+mjm+OBsOOBmyE8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldEluZm99PlxuICAgICAgICAgICAgICAgIDxoMj5b54m55oCl5Yi4XTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRpdGlvbmFsVGV4dH0+XG4gICAgICAgICAgICAgICAgPGE+44KJ44O844KB44KTPC9hPlxuICAgICAgICAgICAgICAgIDxoMj7purrlsYsg57Sr5L6NPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldENvc3R9PlxuICAgICAgICAgICAgICAgIDxoMj4zMOe1hOW+heOBoSB8IO+8iOe0hDkw5YiG77yJPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXVlVGl0bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vICBuYW1lIOS6uuaVsDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+bWluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vLjIgc3V6dWtpIDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjVtaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vLjIgdGFuYWthIDI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjdtaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vLjIgc3V6dWtpIDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjdtaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vLjIgc3V6dWtpIDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjVtaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9IGNsYXNzTmFtZT17c3R5bGVzLnJlbG9hZEJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93Q2lyY2xlVXB9IHNwaW4gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIC8+Jm5ic3A76YCB5L+h5LitLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBhcGVyUGxhbmV9IC8+Jm5ic3A76KGM5YiX44Gr5Lim44G2XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFQYXBlclBsYW5lIiwiZmFTcGlubmVyIiwiZmFBcnJvd0NpcmNsZVVwIiwic3R5bGVzIiwiUGFpZFF1ZXVlUGFnZSIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZU1haW4iLCJoMiIsInRpdGxlU3ViIiwidGlja2V0SW5mbyIsImFkZGl0aW9uYWxUZXh0IiwiYSIsInRpY2tldENvc3QiLCJRdWV1ZVRpdGxlIiwibGFiZWwiLCJ0aW1lIiwiUXVldWVTZWN0aW9uIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbG9hZEJ1dHRvbiIsImljb24iLCJzcGluIiwiZm9ybSIsIm9uU3VibWl0Iiwic3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/queue.js\n"));

/***/ })

});