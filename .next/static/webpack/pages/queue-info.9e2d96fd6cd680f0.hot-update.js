"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/queue-info",{

/***/ "./pages/queue-info.js":
/*!*****************************!*\
  !*** ./pages/queue-info.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Queue-Info.module.css */ \"./styles/Queue-Info.module.css\");\n/* harmony import */ var _styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import OptionItem from '../components/OptionItem'; // Import the OptionItem component\n\nfunction PaidQueuePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n            router.push(\"/paid-queue\");\n        }, 500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"../samurai.png\",\n                    alt: \"Samurai Image\",\n                    className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().image)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the LINE!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketInfo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"[特急券]\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().additionalText),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"らーめん\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"麺屋 紫侍\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketCost),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"30組待ち | （約90分）\"\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketFree),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketOption),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                    children: \"一般　無料\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    name: \"ticketType\",\n                                    className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().radio)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketPaid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketOption),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),\n                                        children: \"特\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                        children: \"5番目　500円/人\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"ticketType\",\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().radio)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketOption),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),\n                                        children: \"特\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                        children: \"7番目　500円/人\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"ticketType\",\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().radio)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketOption),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),\n                                        children: \"特\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                        children: \"10番目　500円/人\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"ticketType\",\n                                        className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().radio)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_Queue_Info_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                    disabled: loading,\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner,\n                                spin: true\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0送信中...\"\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPaperPlane\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                                lineNumber: 79,\n                                columnNumber: 29\n                            }, this),\n                            \"\\xa0申し込む\"\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/queue-info.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(PaidQueuePage, \"OeGW3YQfIEwiDdtbkZtE38+y0P4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0xQyx3RUFBU0E7Z0NBQUUyQyxJQUFJOzs7Ozs7NEJBQUc7O3FEQUc3Qzs7MENBQ0ksOERBQUM3QywyRUFBZUE7Z0NBQUM0QyxNQUFNM0MsMkVBQVlBOzs7Ozs7NEJBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkU7R0E5RXdCRzs7UUFDTEwsa0RBQVNBOzs7S0FESksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUtaW5mby5qcz84NmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVBhcGVyUGxhbmUsIGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG4vLyBpbXBvcnQgT3B0aW9uSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL09wdGlvbkl0ZW0nOyAvLyBJbXBvcnQgdGhlIE9wdGlvbkl0ZW0gY29tcG9uZW50XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9RdWV1ZS1JbmZvLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWlkUXVldWVQYWdlKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3BhaWQtcXVldWUnKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zYW11cmFpLnBuZ1wiIGFsdD1cIlNhbXVyYWkgSW1hZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlTWFpbn0+U21hc2ggdGhlIExJTkUhPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVN1Yn0+5b6F44Gh5pmC6ZaT44KS44GZ44Gj6aOb44Gw44GbITwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlja2V0SW5mb30+XG4gICAgICAgICAgICAgICAgPGgyPlvnibnmgKXliLhdPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZGl0aW9uYWxUZXh0fT5cbiAgICAgICAgICAgICAgICA8YT7jgonjg7zjgoHjgpM8L2E+XG4gICAgICAgICAgICAgICAgPGgyPum6uuWxiyDntKvkvo08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlja2V0Q29zdH0+XG4gICAgICAgICAgICAgICAgPGgyPjMw57WE5b6F44GhIHwg77yI57SEOTDliIbvvIk8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXRTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldEZyZWV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldE9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT7kuIDoiKzjgIDnhKHmlpk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGlja2V0VHlwZVwiIGNsYXNzTmFtZT17c3R5bGVzLnJhZGlvfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldFBhaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldE9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0+54m5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4155Wq55uu44CANTAw5YaGL+S6ujwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0aWNrZXRUeXBlXCIgY2xhc3NOYW1lPXtzdHlsZXMucmFkaW99IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldE9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0+54m5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4355Wq55uu44CANTAw5YaGL+S6ujwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0aWNrZXRUeXBlXCIgY2xhc3NOYW1lPXtzdHlsZXMucmFkaW99IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpY2tldE9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZX0+54m5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4xMOeVquebruOAgDUwMOWGhi/kuro8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidGlja2V0VHlwZVwiIGNsYXNzTmFtZT17c3R5bGVzLnJhZGlvfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIC8+Jm5ic3A76YCB5L+h5LitLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBhcGVyUGxhbmV9IC8+Jm5ic3A755Sz44GX6L6844KAXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFQYXBlclBsYW5lIiwiZmFTcGlubmVyIiwic3R5bGVzIiwiUGFpZFF1ZXVlUGFnZSIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1hZ2VDb250YWluZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJpbWFnZSIsImgxIiwidGl0bGVNYWluIiwiaDIiLCJ0aXRsZVN1YiIsInRpY2tldEluZm8iLCJhZGRpdGlvbmFsVGV4dCIsImEiLCJ0aWNrZXRDb3N0IiwidGlja2V0U2VjdGlvbiIsInRpY2tldEZyZWUiLCJ0aWNrZXRPcHRpb24iLCJjaXJjbGUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJyYWRpbyIsInRpY2tldFBhaWQiLCJmb3JtIiwib25TdWJtaXQiLCJidXR0b24iLCJzdWJtaXRCdXR0b24iLCJkaXNhYmxlZCIsImljb24iLCJzcGluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/queue-info.js\n"));

/***/ })

});