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

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_3__.Card.Meta;\n\n\n\n\nvar Quiz = function(param) {\n    var quiz = param.quiz;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_6__.AuthContext), auth = ref[0], setAuth = ref[1];\n    //const [enroll ,setEnroll] = useState({})\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    useEffect(function() {\n        if (auth) checkEnrollment();\n    }, [\n        auth === null || auth === void 0 ? void 0 : auth.token\n    ]);\n    var checkEnrollment = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios.get(\"/api/check-enrollment/\".concat(quiz._id));\n                    case 2:\n                        data = _ctx.sent.data;\n                        console.log(\"CHECK ENROLLMENT\", data);\n                        setEnrolled(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkEnrollment() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var slug = router.query.slug;\n    var handlePaidEnrollment = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data, stripe;\n            return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        setLoading(true);\n                        // check if user is logged in\n                        if (!auth) router.push(\"/login\");\n                        if (!enrolled.status) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", router.push(\"/user/course/\".concat(enrolled.quiz.slug)));\n                    case 5:\n                        _ctx.next = 7;\n                        return axios.post(\"/api/paid-enrollment/\".concat(quiz._id));\n                    case 7:\n                        data = _ctx.sent.data;\n                        _ctx.next = 10;\n                        return loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);\n                    case 10:\n                        stripe = _ctx.sent;\n                        stripe.redirectToCheckout({\n                            sessionId: data\n                        });\n                        _ctx.next = 19;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        toast(\"Enrollment failed, try again.\");\n                        console.log(_ctx.t0);\n                        setLoading(false);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    14\n                ]\n            ]);\n        }));\n        return function handlePaidEnrollment() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleFreeEnrollment = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var data;\n            return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // console.log(\"handle free enrollment\");\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        // check if user is logged in\n                        if (!user) router.push(\"/login\");\n                        if (!enrolled.status) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", router.push(\"/user/course/\".concat(enrolled.quiz.slug)));\n                    case 5:\n                        setLoading(true);\n                        _ctx.next = 8;\n                        return axios.post(\"/api/free-enrollment/\".concat(course._id));\n                    case 8:\n                        data = _ctx.sent.data;\n                        toast(data.message);\n                        setLoading(false);\n                        router.push(\"/user/course/\".concat(data.course.slug));\n                        _ctx.next = 19;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        toast(\"Enrollment failed. Try again.\");\n                        console.log(_ctx.t0);\n                        setLoading(false);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function handleFreeEnrollment(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/quiz/\".concat(quiz.slug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                span: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                    hoverable: true,\n                    style: {\n                        width: 340\n                    },\n                    cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        alt: \"example\",\n                        src: \"https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png\"\n                    }, void 0, false, void 0, void 0),\n                    children: [\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-center mt-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.LoadingOutlined, {\n                                className: \"h1 text-danger\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"mb-3 mt-3\",\n                            type: \"danger\",\n                            block: true,\n                            shape: \"round\",\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.SafetyOutlined, {}, void 0, false, void 0, void 0),\n                            size: \"large\",\n                            disabled: loading,\n                            onClick: quiz.paid ? handlePaidEnrollment : handleFreeEnrollment,\n                            children: user ? enrolled.status ? \"Go to course\" : \"Enroll\" : \"Login to enroll\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Meta, {\n                            title: quiz.name,\n                            description: quiz.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                            lineNumber: 104,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                    lineNumber: 69,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\components\\\\Quiz.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, _this);\n};\n_s(Quiz, \"uGCljsQsxhgUC7Wz/AGJIpdsgdU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzs7OztpQ0FDMUMsaUJBRU4sOERBQUMzRCx3Q0FBTTs0QkFDTDJELFNBQVMsRUFBQyxXQUFXOzRCQUNyQkMsSUFBSSxFQUFDLFFBQVE7NEJBQ2JDLEtBQUs7NEJBQ0xDLEtBQUssRUFBQyxPQUFPOzRCQUNiQyxJQUFJLGdCQUFFLDhEQUFDeEQsNkRBQWMsb0NBQUc7NEJBQ3hCeUQsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLFFBQVEsRUFBRVAsT0FBTzs0QkFDakJRLE9BQU8sRUFBRXRELElBQUksQ0FBQ3VELElBQUksR0FBR3ZDLG9CQUFvQixHQUFHYyxvQkFBb0I7c0NBRS9ERyxJQUFJLEdBQ0RiLFFBQVEsQ0FBQ0MsTUFBTSxHQUNiLGNBQWMsR0FDZCxRQUFRLEdBQ1YsaUJBQWlCOzs7OztpQ0FDZDtzQ0FFTCw4REFBQzVCLElBQUk7NEJBQUMrRCxLQUFLLEVBQUV4RCxJQUFJLENBQUN5RCxJQUFJOzRCQUFFQyxXQUFXLEVBQUUxRCxJQUFJLENBQUMwRCxXQUFXOzs7OztpQ0FBSTs7Ozs7O3lCQUNwRDs7Ozs7cUJBQ0g7Ozs7O2lCQUNDOzs7OzthQUNMLENBQ1I7Q0FDTDtHQXJHSzNELElBQUk7O1FBR09ILGtEQUFTOzs7QUFIcEJHLEtBQUFBLElBQUk7QUF1R1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1aXouanM/NGFlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgU2FmZXR5T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XG5cbmNvbnN0IFF1aXogPSAoe3F1aXp9KSA9PiB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICAvL2NvbnN0IFtlbnJvbGwgLHNldEVucm9sbF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGgpIGNoZWNrRW5yb2xsbWVudCgpO1xuICB9LCBbYXV0aD8udG9rZW5dKTtcblxuICBjb25zdCBjaGVja0Vucm9sbG1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2hlY2stZW5yb2xsbWVudC8ke3F1aXouX2lkfWApO1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0sgRU5ST0xMTUVOVFwiLCBkYXRhKTtcbiAgICBzZXRFbnJvbGxlZChkYXRhKTtcbiAgfTtcblxuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBoYW5kbGVQYWlkRW5yb2xsbWVudCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhhbmRsZSBwYWlkIGVucm9sbG1lbnRcIik7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAvLyBjaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgaWYgKCFhdXRoKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIC8vIGNoZWNrIGlmIGFscmVhZHkgZW5yb2xsZWRcbiAgICAgIGlmIChlbnJvbGxlZC5zdGF0dXMpXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZW5yb2xsZWQucXVpei5zbHVnfWApO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3BhaWQtZW5yb2xsbWVudC8ke3F1aXouX2lkfWApO1xuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcbiAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQ6IGRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0b2FzdChcIkVucm9sbG1lbnQgZmFpbGVkLCB0cnkgYWdhaW4uXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVGcmVlRW5yb2xsbWVudCA9IGFzeW5jIChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoYW5kbGUgZnJlZSBlbnJvbGxtZW50XCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgLy8gY2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgIGlmICghdXNlcikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAvLyBjaGVjayBpZiBhbHJlYWR5IGVucm9sbGVkXG4gICAgICBpZiAoZW5yb2xsZWQuc3RhdHVzKVxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goYC91c2VyL2NvdXJzZS8ke2Vucm9sbGVkLnF1aXouc2x1Z31gKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvZnJlZS1lbnJvbGxtZW50LyR7Y291cnNlLl9pZH1gKTtcbiAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9jb3Vyc2UvJHtkYXRhLmNvdXJzZS5zbHVnfWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9hc3QoXCJFbnJvbGxtZW50IGZhaWxlZC4gVHJ5IGFnYWluLlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9xdWl6LyR7cXVpei5zbHVnfWB9PlxuICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBob3ZlcmFibGVcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0MCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvdmVyPXtcbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3ByYWN0aWNhbGRldi9pbWFnZS9mZXRjaC9zLS1La1Njc3RuSi0tL2NfaW1hZ2dhX3NjYWxlLGZfYXV0byxmbF9wcm9ncmVzc2l2ZSxoXzQyMCxxX2F1dG8sd18xMDAwL2h0dHBzOi8vZGV2LXRvLXVwbG9hZHMuczMuYW1hem9uYXdzLmNvbS91cGxvYWRzL2FydGljbGVzL3pvanV5NzlsbzNmbjNxZHQ3ZzZwLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBlbnJvbGwgYnV0dG9uICovfVxuICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgY2xhc3NOYW1lPVwiaDEgdGV4dC1kYW5nZXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyBtdC0zXCJcbiAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICBpY29uPXs8U2FmZXR5T3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtxdWl6LnBhaWQgPyBoYW5kbGVQYWlkRW5yb2xsbWVudCA6IGhhbmRsZUZyZWVFbnJvbGxtZW50fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlclxuICAgICAgICAgICAgICAgID8gZW5yb2xsZWQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICA/IFwiR28gdG8gY291cnNlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJFbnJvbGxcIlxuICAgICAgICAgICAgICAgIDogXCJMb2dpbiB0byBlbnJvbGxcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e3F1aXoubmFtZX0gZGVzY3JpcHRpb249e3F1aXouZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkNvbCIsIlJvdyIsIkxpbmsiLCJNZXRhIiwiTG9hZGluZ091dGxpbmVkIiwiU2FmZXR5T3V0bGluZWQiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJRdWl6IiwicXVpeiIsImF1dGgiLCJzZXRBdXRoIiwicm91dGVyIiwidXNlRWZmZWN0IiwiY2hlY2tFbnJvbGxtZW50IiwidG9rZW4iLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwic2V0RW5yb2xsZWQiLCJzbHVnIiwicXVlcnkiLCJoYW5kbGVQYWlkRW5yb2xsbWVudCIsInN0cmlwZSIsInNldExvYWRpbmciLCJwdXNoIiwiZW5yb2xsZWQiLCJzdGF0dXMiLCJwb3N0IiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfS0VZIiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwidG9hc3QiLCJoYW5kbGVGcmVlRW5yb2xsbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJjb3Vyc2UiLCJtZXNzYWdlIiwiZGl2IiwiaHJlZiIsInNwYW4iLCJob3ZlcmFibGUiLCJzdHlsZSIsIndpZHRoIiwiY292ZXIiLCJpbWciLCJhbHQiLCJzcmMiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwidHlwZSIsImJsb2NrIiwic2hhcGUiLCJpY29uIiwic2l6ZSIsImRpc2FibGVkIiwib25DbGljayIsInBhaWQiLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quiz.js\n"));

/***/ })

});