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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Queue.module.css */ \"./styles/Queue.module.css\");\n/* harmony import */ var _styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import OptionItem from '../components/OptionItem'; // Import the OptionItem component\n\nfunction PaidQueuePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/paid-queue\");\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the LINE!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketInfo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"[特急券]\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().additionalText),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"らーめん\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"麺屋 紫侍\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketCost),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"30組待ち | （約90分）\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueTitle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No  name 人数\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"5min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 tanaka 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"7min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"7min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().QueueSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"No.2 suzuki 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),\n                        children: \"5min\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>window.location.reload(),\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().reloadButton),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                        icon: faArrowCircleUp\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    \" リロード\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                    disabled: loading,\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner,\n                                spin: true\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0送信中...\"\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPaperPlane\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                                lineNumber: 74,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0行列に並ぶ\"\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(PaidQueuePage, \"OeGW3YQfIEwiDdtbkZtE38+y0P4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBhcGVyUGxhbmUsIGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG4vLyBpbXBvcnQgT3B0aW9uSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL09wdGlvbkl0ZW0nOyAvLyBJbXBvcnQgdGhlIE9wdGlvbkl0ZW0gY29tcG9uZW50XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9RdWV1ZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFpZFF1ZXVlUGFnZSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wYWlkLXF1ZXVlJyk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVNYWlufT5TbWFzaCB0aGUgTElORSE8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlU3VifT7lvoXjgaHmmYLplpPjgpLjgZnjgaPpo5vjgbDjgZshPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXRJbmZvfT5cbiAgICAgICAgICAgICAgICA8aDI+W+eJueaApeWIuF08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkaXRpb25hbFRleHR9PlxuICAgICAgICAgICAgICAgIDxhPuOCieODvOOCgeOCkzwvYT5cbiAgICAgICAgICAgICAgICA8aDI+6bq65bGLIOe0q+S+jTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXRDb3N0fT5cbiAgICAgICAgICAgICAgICA8aDI+MzDntYTlvoXjgaEgfCDvvIjntIQ5MOWIhu+8iTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+Tm8gIG5hbWUg5Lq65pWwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+bWluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5Oby4yIHN1enVraSAxPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+NW1pbjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXVlU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pk5vLjIgdGFuYWthIDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT43bWluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVldWVTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+Tm8uMiBzdXp1a2kgMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PjdtaW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWV1ZVNlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5Oby4yIHN1enVraSAxPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+NW1pbjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0gY2xhc3NOYW1lPXtzdHlsZXMucmVsb2FkQnV0dG9ufT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dDaXJjbGVVcH0gLz4g44Oq44Ot44O844OJXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc3VibWl0QnV0dG9ufSBkaXNhYmxlZD17bG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Bpbm5lcn0gc3BpbiAvPiZuYnNwO+mAgeS/oeS4rS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQYXBlclBsYW5lfSAvPiZuYnNwO+ihjOWIl+OBq+S4puOBtlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhUGFwZXJQbGFuZSIsImZhU3Bpbm5lciIsInN0eWxlcyIsIlBhaWRRdWV1ZVBhZ2UiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwidGl0bGVNYWluIiwiaDIiLCJ0aXRsZVN1YiIsInRpY2tldEluZm8iLCJhZGRpdGlvbmFsVGV4dCIsImEiLCJ0aWNrZXRDb3N0IiwiUXVldWVUaXRsZSIsImxhYmVsIiwidGltZSIsIlF1ZXVlU2VjdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZWxvYWRCdXR0b24iLCJpY29uIiwiZmFBcnJvd0NpcmNsZVVwIiwiZm9ybSIsIm9uU3VibWl0Iiwic3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJzcGluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/queue.js\n"));

/***/ })

});