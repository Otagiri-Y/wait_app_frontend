"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/paid-queue",{

/***/ "./pages/paid-queue.js":
/*!*****************************!*\
  !*** ./pages/paid-queue.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaidQueuePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Paid-Queue.module.css */ \"./styles/Paid-Queue.module.css\");\n/* harmony import */ var _styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PaidQueuePage() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [people_count, setPeopleCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const backendUrl = \"http://localhost:5000\";\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Form validation\n        if (people_count < 1) {\n            setError(\"人数は1人以上でなければなりません。\");\n            return;\n        }\n        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailPattern.test(email)) {\n            setError(\"有効なメールアドレスを入力してください。\");\n            return;\n        }\n        setError(\"\");\n        setLoading(true);\n        // Convert form data to JSON\n        const formData = new FormData(e.target);\n        const body_msg = JSON.stringify({\n            name: formData.get(\"name\"),\n            email: formData.get(\"mail_address\"),\n            peopleCount: parseInt(formData.get(\"peopleCount\"), 10)\n        });\n        try {\n            console.log(\"Step 1: Preparing to send POST request\");\n            console.log(\"Sending POST request to:\", \"\".concat(backendUrl, \"/api/join\"));\n            console.log(\"Request body:\", body_msg);\n            const response = await fetch(\"\".concat(backendUrl, \"/api/join\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: body_msg\n            });\n            console.log(\"Step 2: POST request sent, awaiting response\");\n            console.log(\"Response status:\", response.status);\n            console.log(\"Response headers:\", response.headers);\n            if (!response.ok) {\n                console.log(\"Step 3: Response not OK\");\n                throw new Error(\"リクエストは失敗しました: \".concat(response.statusText));\n            }\n            console.log(\"Step 4: Response OK, parsing JSON\");\n            const data = await response.json();\n            console.log(\"Step 5: JSON parsed successfully:\", data);\n            // Success handling\n            console.log(\"Step 6: Handling successful response\");\n            alert(\"成功して行列に参加しました！\");\n            setName(\"\");\n            setEmail(\"\");\n            setPeopleCount(1);\n            router.push(\"/completed\");\n        } catch (error) {\n            console.error(\"Error caught:\", error.message);\n            setError(\"行列に参加できませんでした。エラー: \".concat(error.message));\n        } finally{\n            console.log(\"Step 7: Finished try-catch-finally block\");\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleMain),\n                children: \"Smash the WAIT!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleSub),\n                children: \"待ち時間をすっ飛ばせ!\"\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().ticketInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"[特急券]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"A1 5番目\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            \" | \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"500円/人\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                lineNumber: 96,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().labelWrapper),\n                        children: [\n                            \"NAME:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                placeholder: \"MURASAKI\",\n                                required: true,\n                                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().labelWrapper),\n                        children: [\n                            \"MAIL:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                name: \"mail_address\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                placeholder: \"***@email.com\",\n                                required: true,\n                                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().labelWrapper),\n                        children: [\n                            \"PERSON:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"people_count\",\n                                value: people_count,\n                                onChange: (e)=>setPeopleCount(parseInt(e.target.value, 10)),\n                                placeholder: \"3\",\n                                required: true,\n                                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                min: \"1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().submitButton),\n                        disabled: loading,\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner,\n                                    spin: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 15\n                                }, this),\n                                \" 送信中...\"\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPaperPlane\n                                }, void 0, false, {\n                                    fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, this),\n                                \" 申し込む\"\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Paid_Queue_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n                lineNumber: 155,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kogakatsuma/Documents/開発コード/tech0/Flask/waittime_app/wait_app_frontend/pages/paid-queue.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(PaidQueuePage, \"bj9i7oFNI1CkNvI6YPiiMDmuY3M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PaidQueuePage;\nvar _c;\n$RefreshReg$(_c, \"PaidQueuePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7O3lEQUczQzs7OENBQ0UsOERBQUMzRSwyRUFBZUE7b0NBQUMwRSxNQUFNekUsMkVBQVlBOzs7Ozs7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7O1lBTzlDVSx1QkFBUyw4REFBQ3VDO2dCQUFJQyxXQUFXaEQsNEVBQVk7MEJBQUdROzs7Ozs7Ozs7Ozs7QUFHL0M7R0F2SndCUDs7UUFRUEwsa0RBQVNBOzs7S0FSRksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFpZC1xdWV1ZS5qcz8wZmU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhUGFwZXJQbGFuZSwgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1BhaWQtUXVldWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhaWRRdWV1ZVBhZ2UoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwZW9wbGVfY291bnQsIHNldFBlb3BsZUNvdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBiYWNrZW5kVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkw7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIEZvcm0gdmFsaWRhdGlvblxuICAgIGlmIChwZW9wbGVfY291bnQgPCAxKSB7XG4gICAgICBzZXRFcnJvcign5Lq65pWw44GvMeS6uuS7peS4iuOBp+OBquOBkeOCjOOBsOOBquOCiuOBvuOBm+OCk+OAgicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgZW1haWxQYXR0ZXJuID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgaWYgKCFlbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgIHNldEVycm9yKCfmnInlirnjgarjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIHNldEVycm9yKCcnKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgLy8gQ29udmVydCBmb3JtIGRhdGEgdG8gSlNPTlxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBjb25zdCBib2R5X21zZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IGZvcm1EYXRhLmdldChcIm5hbWVcIiksXG4gICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KFwibWFpbF9hZGRyZXNzXCIpLFxuICAgICAgcGVvcGxlQ291bnQ6IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInBlb3BsZUNvdW50XCIpLCAxMCksIC8vIGNvcnJlY3RlZCB0byBwYXJzZSBhcyBpbnRlZ2VyXG4gICAgfSk7XG4gIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGVwIDE6IFByZXBhcmluZyB0byBzZW5kIFBPU1QgcmVxdWVzdCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyBQT1NUIHJlcXVlc3QgdG86JywgYCR7YmFja2VuZFVybH0vYXBpL2pvaW5gKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3QgYm9keTonLCBib2R5X21zZyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFja2VuZFVybH0vYXBpL2pvaW5gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IGJvZHlfbXNnXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnU3RlcCAyOiBQT1NUIHJlcXVlc3Qgc2VudCwgYXdhaXRpbmcgcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgaGVhZGVyczonLCByZXNwb25zZS5oZWFkZXJzKTtcbiAgICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0ZXAgMzogUmVzcG9uc2Ugbm90IE9LJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOODquOCr+OCqOOCueODiOOBr+WkseaVl+OBl+OBvuOBl+OBnzogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGVwIDQ6IFJlc3BvbnNlIE9LLCBwYXJzaW5nIEpTT04nKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0ZXAgNTogSlNPTiBwYXJzZWQgc3VjY2Vzc2Z1bGx5OicsIGRhdGEpO1xuICAgIFxuICAgICAgICAvLyBTdWNjZXNzIGhhbmRsaW5nXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGVwIDY6IEhhbmRsaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2UnKTtcbiAgICAgICAgYWxlcnQoJ+aIkOWKn+OBl+OBpuihjOWIl+OBq+WPguWKoOOBl+OBvuOBl+OBn++8gScpO1xuICAgICAgICBzZXROYW1lKCcnKTtcbiAgICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgICBzZXRQZW9wbGVDb3VudCgxKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9jb21wbGV0ZWQnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXVnaHQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHNldEVycm9yKGDooYzliJfjgavlj4LliqDjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ/jgILjgqjjg6njg7w6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBjb25zb2xlLmxvZygnU3RlcCA3OiBGaW5pc2hlZCB0cnktY2F0Y2gtZmluYWxseSBibG9jaycpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVNYWlufT5cbiAgICAgICAgU21hc2ggdGhlIFdBSVQhXG4gICAgICA8L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlU3VifT5cbiAgICAgICAg5b6F44Gh5pmC6ZaT44KS44GZ44Gj6aOb44Gw44GbIVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlja2V0SW5mb30+XG4gICAgICAgIDxoMj5b54m55oCl5Yi4XTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzdHJvbmc+QTEgNeeVquebrjwvc3Ryb25nPiB8IDxzdHJvbmc+NTAw5YaGL+S6ujwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFdyYXBwZXJ9PlxuICAgICAgICAgIE5BTUU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1VUkFTQUtJXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFdyYXBwZXJ9PlxuICAgICAgICAgIE1BSUw6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cIm1haWxfYWRkcmVzc1wiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxXcmFwcGVyfT5cbiAgICAgICAgICBQRVJTT046XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwZW9wbGVfY291bnRcIlxuICAgICAgICAgICAgdmFsdWU9e3Blb3BsZV9jb3VudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGVvcGxlQ291bnQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjNcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTcGlubmVyfSBzcGluIC8+IOmAgeS/oeS4rS4uLlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFQYXBlclBsYW5lfSAvPiDnlLPjgZfovrzjgoBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7Lyog44Ko44Op44O844Oh44OD44K744O844K444Gu6KGo56S6ICovfVxuICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb250QXdlc29tZUljb24iLCJmYVBhcGVyUGxhbmUiLCJmYVNwaW5uZXIiLCJzdHlsZXMiLCJQYWlkUXVldWVQYWdlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGVvcGxlX2NvdW50Iiwic2V0UGVvcGxlQ291bnQiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJiYWNrZW5kVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxQYXR0ZXJuIiwidGVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJib2R5X21zZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXQiLCJwZW9wbGVDb3VudCIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInN0YXR1cyIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJhbGVydCIsInB1c2giLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJ0aXRsZU1haW4iLCJoMiIsInRpdGxlU3ViIiwidGlja2V0SW5mbyIsInAiLCJzdHJvbmciLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImxhYmVsV3JhcHBlciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibWluIiwiYnV0dG9uIiwic3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJpY29uIiwic3BpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/paid-queue.js\n"));

/***/ })

});