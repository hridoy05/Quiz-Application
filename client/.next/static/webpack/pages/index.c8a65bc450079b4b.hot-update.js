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

/***/ "./pages/quizes.js":
/*!*************************!*\
  !*** ./pages/quizes.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_6__.Card.Meta;\nvar Quizes = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), quizes = ref[0], setAllQuizes = ref[1];\n    // context\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_4__.AuthContext), auth = ref1[0], setAuth = ref1[1];\n    // console.log(auth);\n    // hooks\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // state\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (auth === null || auth === void 0 ? void 0 : auth.token) loadQuizes();\n    }, [\n        auth === null || auth === void 0 ? void 0 : auth.token\n    ]);\n    var loadQuizes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/quizes\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setAllQuizes(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function loadQuizes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"site-card-wrQuizeser\",\n        style: {\n            width: \"90%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n            gutter: 16,\n            style: {\n                padding: \"10px\"\n            },\n            children: quizes && quizes.map(function(quiz) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                    span: 7,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                        hoverable: true,\n                        style: {\n                            width: 340\n                        },\n                        cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            alt: \"example\",\n                            src: \"https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png\"\n                        }, void 0, false, void 0, void 0),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                children: quiz.paid ? \"Paid\" : \"Free\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Meta, {\n                                title: quiz.name,\n                                description: quiz.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                        lineNumber: 40,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Quizes, \"bc5bt20RWieUyipf+zXcxLV+amw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Quizes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quizes);\nvar _c;\n$RefreshReg$(_c, \"Quizes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBOEM7QUFDaUI7QUFDckM7QUFDb0I7QUFDTjtBQUN4QyxJQUFNLElBQU0sR0FBS0MsMkNBQUw7QUFDWixJQUFNVyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBK0JMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBcENNLE1BQU0sR0FBa0JOLEdBQVksR0FBOUIsRUFBRU8sWUFBWSxHQUFJUCxHQUFZLEdBQWhCO0lBRTNCLFVBQVU7SUFDVixJQUF3QkYsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNJLHNEQUFXLENBQUMsRUFBeENNLElBQUksR0FBYVYsSUFBdUIsR0FBcEMsRUFBRVcsT0FBTyxHQUFJWCxJQUF1QixHQUEzQjtJQUNwQixxQkFBcUI7SUFDckIsUUFBUTtJQUNSLElBQU1ZLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixRQUFRO0lBRVJKLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlTLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBSSxDQUFFRyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxDQUFDO0tBQy9CLEVBQUU7UUFBQ0osSUFBSSxhQUFKQSxJQUFJLFdBQU8sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxJQUFJLENBQUVHLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFbEIsSUFBTUMsVUFBVTttQkFBRywyUEFBWTtnQkFFbkJDLElBQUk7Ozs7OzsrQkFBV1osZ0RBQVMsQ0FBQyxTQUFTLENBQUM7O3dCQUFyQyxJQUFNLGFBQUpZLElBQUksQ0FBK0I7d0JBQzNDTixZQUFZLENBQUNNLElBQUksQ0FBQyxDQUFDOzs7Ozs7d0JBRW5CRSxPQUFPLENBQUNDLEdBQUcsU0FBSyxDQUFDOzs7Ozs7Ozs7OztTQUVwQjt3QkFQS0osVUFBVTs7O09BT2Y7SUFDRCxxQkFDRSw4REFBQ0ssS0FBRztRQUNGQyxTQUFTLEVBQUMsc0JBQXNCO1FBQ2hDQyxLQUFLLEVBQUU7WUFDTEMsS0FBSyxFQUFFLEtBQUs7U0FDYjtrQkFFRCw0RUFBQ3hCLHFDQUFHO1lBQUN5QixNQUFNLEVBQUUsRUFBRTtZQUFFRixLQUFLLEVBQUU7Z0JBQUVHLE9BQU8sRUFBRSxNQUFNO2FBQUU7c0JBQ3hDaEIsTUFBTSxJQUNMQSxNQUFNLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsSUFBSTtxQ0FDZCw4REFBQzdCLHFDQUFHO29CQUFDOEIsSUFBSSxFQUFFLENBQUM7OEJBQ1YsNEVBQUMvQixzQ0FBSTt3QkFDSGdDLFNBQVM7d0JBQ1RQLEtBQUssRUFBRTs0QkFDTEMsS0FBSyxFQUFFLEdBQUc7eUJBQ1g7d0JBQ0RPLEtBQUssZ0JBQ0gsOERBQUNDLEtBQUc7NEJBQ0ZDLEdBQUcsRUFBQyxTQUFTOzRCQUNiQyxHQUFHLEVBQUMsOE1BQThNO3lEQUNsTjs7MENBR0osOERBQUNyQyx3Q0FBTTswQ0FBRStCLElBQUksQ0FBQ08sSUFBSSxHQUFJLE1BQUksR0FBSyxNQUFJOzs7OztxQ0FBVzswQ0FDOUMsOERBQUMzQixJQUFJO2dDQUFDNEIsS0FBSyxFQUFFUixJQUFJLENBQUNTLElBQUk7Z0NBQUVDLFdBQVcsRUFBRVYsSUFBSSxDQUFDVSxXQUFXOzs7OztxQ0FBSTs7Ozs7OzZCQUNwRDs7Ozs7eUJBQ0g7YUFDUCxDQUFDOzs7OztpQkFDQTs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FyREs3QixNQUFNOztRQU9LRixrREFBUzs7O0FBUHBCRSxLQUFBQSxNQUFNO0FBdURaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpemVzLmpzPzE0MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcbmNvbnN0IFF1aXplcyA9ICgpID0+IHtcbiAgY29uc3QgW3F1aXplcywgc2V0QWxsUXVpemVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIGNvbnRleHRcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKGF1dGgpO1xuICAvLyBob29rc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gc3RhdGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoPy50b2tlbikgbG9hZFF1aXplcygpO1xuICB9LCBbYXV0aD8udG9rZW5dKTtcblxuICBjb25zdCBsb2FkUXVpemVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9xdWl6ZXNcIik7XG4gICAgICBzZXRBbGxRdWl6ZXMoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzaXRlLWNhcmQtd3JRdWl6ZXNlclwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJvdyBndXR0ZXI9ezE2fSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cbiAgICAgICAge3F1aXplcyAmJlxuICAgICAgICAgIHF1aXplcy5tYXAoKHF1aXopID0+IChcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17N30+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb3Zlcj17XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcmFjdGljYWxkZXYvaW1hZ2UvZmV0Y2gvcy0tS2tTY3N0bkotLS9jX2ltYWdnYV9zY2FsZSxmX2F1dG8sZmxfcHJvZ3Jlc3NpdmUsaF80MjAscV9hdXRvLHdfMTAwMC9odHRwczovL2Rldi10by11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy9hcnRpY2xlcy96b2p1eTc5bG8zZm4zcWR0N2c2cC5wbmdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPntxdWl6LnBhaWQgPyBgUGFpZGAgOiBgRnJlZWB9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e3F1aXoubmFtZX0gZGVzY3JpcHRpb249e3F1aXouZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpfVxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6ZXM7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkNvbCIsIlJvdyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBdXRoQ29udGV4dCIsInVzZVJvdXRlciIsIk1ldGEiLCJRdWl6ZXMiLCJxdWl6ZXMiLCJzZXRBbGxRdWl6ZXMiLCJhdXRoIiwic2V0QXV0aCIsInJvdXRlciIsInRva2VuIiwibG9hZFF1aXplcyIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImd1dHRlciIsInBhZGRpbmciLCJtYXAiLCJxdWl6Iiwic3BhbiIsImhvdmVyYWJsZSIsImNvdmVyIiwiaW1nIiwiYWx0Iiwic3JjIiwicGFpZCIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quizes.js\n"));

/***/ })

});