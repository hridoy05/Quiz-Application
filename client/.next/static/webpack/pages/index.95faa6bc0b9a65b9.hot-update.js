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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_6__.Card.Meta;\nvar Quizes = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), quizes = ref[0], setAllQuizes = ref[1];\n    // hooks\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // state\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // if (auth?.token) \n        loadQuizes();\n    }, []);\n    var loadQuizes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"/quizes\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setAllQuizes(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function loadQuizes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"site-card-wrQuizeser\",\n        style: {\n            width: \"90%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Row, {\n            gutter: 24,\n            style: {\n                padding: \"10px\"\n            },\n            children: quizes && quizes.map(function(quiz) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/quiz/\".concat(quiz.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        span: 8,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            hoverable: true,\n                            style: {\n                                width: 340\n                            },\n                            cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                alt: \"example\",\n                                src: \"https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png\"\n                            }, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    children: quiz.paid ? \"Paid\" : \"Free\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Meta, {\n                                    title: quiz.name,\n                                    description: quiz.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Quizes, \"8G+3E1ORbUFTeNuWbJr5S6TS0lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Quizes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quizes);\nvar _c;\n$RefreshReg$(_c, \"Quizes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQThDO0FBQ2lCO0FBQ3JDO0FBQ2M7QUFDWDtBQUM3QixJQUFNLElBQU0sR0FBS0MsMkNBQUw7QUFDWixJQUFNVyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBK0JMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBcENNLE1BQU0sR0FBa0JOLEdBQVksR0FBOUIsRUFBRU8sWUFBWSxHQUFJUCxHQUFZLEdBQWhCO0lBQzNCLFFBQVE7SUFDUixJQUFNUSxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsUUFBUTtJQUVSSCxnREFBUyxDQUFDLFdBQU07UUFDZCxvQkFBb0I7UUFDcEJVLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1BLFVBQVU7bUJBQUcsMlBBQVk7Z0JBRW5CQyxJQUFJOzs7Ozs7K0JBQVdULGdEQUFTLENBQUMsU0FBUyxDQUFDOzt3QkFBckMsSUFBTSxhQUFKUyxJQUFJLENBQStCO3dCQUMzQ0gsWUFBWSxDQUFDRyxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUVuQkUsT0FBTyxDQUFDQyxHQUFHLFNBQUssQ0FBQzs7Ozs7Ozs7Ozs7U0FFcEI7d0JBUEtKLFVBQVU7OztPQU9mO0lBQ0QscUJBQ0UsOERBQUNLLEtBQUc7UUFDRkMsU0FBUyxFQUFDLHNCQUFzQjtRQUNoQ0MsS0FBSyxFQUFFO1lBQ0xDLEtBQUssRUFBRSxLQUFLO1NBQ2I7a0JBRUQsNEVBQUNyQixxQ0FBRztZQUFDc0IsTUFBTSxFQUFFLEVBQUU7WUFBRUYsS0FBSyxFQUFFO2dCQUFFRyxPQUFPLEVBQUUsTUFBTTthQUFFO3NCQUN4Q2IsTUFBTSxJQUNMQSxNQUFNLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3FDQUNkLDhEQUFDbEIsa0RBQUk7b0JBQUNtQixJQUFJLEVBQUUsUUFBTyxDQUFZLE9BQVZELElBQUksQ0FBQ0UsSUFBSSxDQUFFOzhCQUNoQyw0RUFBQzVCLHFDQUFHO3dCQUFDNkIsSUFBSSxFQUFFLENBQUM7a0NBQ1YsNEVBQUM5QixzQ0FBSTs0QkFDSCtCLFNBQVM7NEJBQ1RULEtBQUssRUFBRTtnQ0FDTEMsS0FBSyxFQUFFLEdBQUc7NkJBQ1g7NEJBQ0RTLEtBQUssZ0JBQ0gsOERBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBQyxTQUFTO2dDQUNiQyxHQUFHLEVBQUMsOE1BQThNOzZEQUNsTjs7OENBR0osOERBQUNwQyx3Q0FBTTs4Q0FBRTRCLElBQUksQ0FBQ1MsSUFBSSxHQUFJLE1BQUksR0FBSyxNQUFJOzs7Ozt5Q0FBVzs4Q0FDOUMsOERBQUMxQixJQUFJO29DQUFDMkIsS0FBSyxFQUFFVixJQUFJLENBQUNXLElBQUk7b0NBQUVDLFdBQVcsRUFBRVosSUFBSSxDQUFDWSxXQUFXOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNwRDs7Ozs7NkJBQ0g7Ozs7O3lCQUNDO2FBQ1IsQ0FBQzs7Ozs7aUJBQ0E7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBcERLNUIsTUFBTTs7UUFHS0gsa0RBQVM7OztBQUhwQkcsS0FBQUEsTUFBTTtBQXNEWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXplcy5qcz8xNDIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuY29uc3QgUXVpemVzID0gKCkgPT4ge1xuICBjb25zdCBbcXVpemVzLCBzZXRBbGxRdWl6ZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGhvb2tzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBzdGF0ZVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGF1dGg/LnRva2VuKSBcbiAgICBsb2FkUXVpemVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2FkUXVpemVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9xdWl6ZXNcIik7XG4gICAgICBzZXRBbGxRdWl6ZXMoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJzaXRlLWNhcmQtd3JRdWl6ZXNlclwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJvdyBndXR0ZXI9ezI0fSBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cbiAgICAgICAge3F1aXplcyAmJlxuICAgICAgICAgIHF1aXplcy5tYXAoKHF1aXopID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcXVpei8ke3F1aXouc2x1Z31gfT5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb3Zlcj17XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcmFjdGljYWxkZXYvaW1hZ2UvZmV0Y2gvcy0tS2tTY3N0bkotLS9jX2ltYWdnYV9zY2FsZSxmX2F1dG8sZmxfcHJvZ3Jlc3NpdmUsaF80MjAscV9hdXRvLHdfMTAwMC9odHRwczovL2Rldi10by11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy9hcnRpY2xlcy96b2p1eTc5bG8zZm4zcWR0N2c2cC5wbmdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPntxdWl6LnBhaWQgPyBgUGFpZGAgOiBgRnJlZWB9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e3F1aXoubmFtZX0gZGVzY3JpcHRpb249e3F1aXouZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdWl6ZXM7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZCIsIkNvbCIsIlJvdyIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTWV0YSIsIlF1aXplcyIsInF1aXplcyIsInNldEFsbFF1aXplcyIsInJvdXRlciIsImxvYWRRdWl6ZXMiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJndXR0ZXIiLCJwYWRkaW5nIiwibWFwIiwicXVpeiIsImhyZWYiLCJzbHVnIiwic3BhbiIsImhvdmVyYWJsZSIsImNvdmVyIiwiaW1nIiwiYWx0Iiwic3JjIiwicGFpZCIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quizes.js\n"));

/***/ })

});