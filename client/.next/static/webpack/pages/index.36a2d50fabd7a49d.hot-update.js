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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_2__.Card.Meta;\nvar Quizes = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data), quizes = ref[0], setAllQuizes = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"site-card-wrQuizeser\",\n        style: {\n            width: \"90%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Row, {\n            gutter: 16,\n            style: {\n                padding: \"10px\"\n            },\n            children: quizes && quizes.map(function(quiz) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                    span: 7,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        hoverable: true,\n                        style: {\n                            width: 340\n                        },\n                        cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"example\",\n                            src: \"https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png\"\n                        }, void 0, false, void 0, void 0),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: quiz.paid ? \"Paid\" : \"Free\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Meta, {\n                                title: quiz.name,\n                                description: quiz.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(Quizes, \"wuvWnGDG1cZpF3THbsQMJHztE6w=\");\n_c = Quizes;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quizes);\nvar _c;\n$RefreshReg$(_c, \"Quizes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7OztBQUE4QztBQUNOO0FBQ3hDLElBQU0sSUFBTSxHQUFLQywyQ0FBTDtBQUNaLElBQU1NLE1BQU0sR0FBRyxnQkFBWTtRQUFWQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2pCLElBQStCSCxHQUFjLEdBQWRBLCtDQUFRLENBQUNHLElBQUksQ0FBQyxFQUF0Q0MsTUFBTSxHQUFrQkosR0FBYyxHQUFoQyxFQUFFSyxZQUFZLEdBQUlMLEdBQWMsR0FBbEI7SUFDN0IscUJBQ0UsOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtRQUFDQyxLQUFLLEVBQUU7WUFDekNDLEtBQUssRUFBRSxLQUFLO1NBQ2I7a0JBQ0MsNEVBQUNYLHFDQUFHO1lBQUNZLE1BQU0sRUFBRSxFQUFFO1lBQUVGLEtBQUssRUFBRTtnQkFBQ0csT0FBTyxFQUFFLE1BQU07YUFBQztzQkFFcENQLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxHQUFHLENBQUNDLFNBQUFBLElBQUk7cUNBQ3RCLDhEQUFDaEIscUNBQUc7b0JBQUNpQixJQUFJLEVBQUUsQ0FBQzs4QkFDWiw0RUFBQ2xCLHNDQUFJO3dCQUNMbUIsU0FBUzt3QkFDVFAsS0FBSyxFQUFFOzRCQUNIQyxLQUFLLEVBQUUsR0FBRzt5QkFDWDt3QkFDSE8sS0FBSyxnQkFBRSw4REFBQ0MsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLFNBQVM7NEJBQUNDLEdBQUcsRUFBQyw4TUFBOE07eURBQUc7OzBDQUUzTyw4REFBQ3hCLHdDQUFNOzBDQUFFa0IsSUFBSSxDQUFDTyxJQUFJLEdBQUUsTUFBSSxHQUFHLE1BQUk7Ozs7O3FDQUFXOzBDQUM1Qyw4REFBQ25CLElBQUk7Z0NBQUNvQixLQUFLLEVBQUVSLElBQUksQ0FBQ1MsSUFBSTtnQ0FBRUMsV0FBVyxFQUFFVixJQUFJLENBQUNVLFdBQVc7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3BEOzs7Ozt5QkFDSDthQUNOLENBQUM7Ozs7O2lCQUVEOzs7OzthQUNGLENBQ1Q7Q0FDRTtHQTFCQ3JCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUFzQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6ZXMuanM/MTQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ29sLCBSb3cgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcbmNvbnN0IFF1aXplcyA9ICh7ZGF0YX0pID0+IHtcbiAgICBjb25zdCBbcXVpemVzLCBzZXRBbGxRdWl6ZXNdID0gdXNlU3RhdGUoZGF0YSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtY2FyZC13clF1aXplc2VyXCIgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiOTAlXCIsXG4gICAgICB9fT5cbiAgICAgICAgPFJvdyBndXR0ZXI9ezE2fSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgIHtcbiAgICAgICAgICAgICBxdWl6ZXMgJiYgcXVpemVzLm1hcChxdWl6ID0+IChcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezd9PlxuICAgICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNDAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcmFjdGljYWxkZXYvaW1hZ2UvZmV0Y2gvcy0tS2tTY3N0bkotLS9jX2ltYWdnYV9zY2FsZSxmX2F1dG8sZmxfcHJvZ3Jlc3NpdmUsaF80MjAscV9hdXRvLHdfMTAwMC9odHRwczovL2Rldi10by11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy9hcnRpY2xlcy96b2p1eTc5bG8zZm4zcWR0N2c2cC5wbmdcIiAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+e3F1aXoucGFpZD9gUGFpZGA6YEZyZWVgfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e3F1aXoubmFtZX0gZGVzY3JpcHRpb249e3F1aXouZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gIClcbiAgICB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSX0vcXVpemVzYCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJEQVRBID09PT09PiBcIiwgZGF0YS5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBxdWl6ZXM6IGRhdGEsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgUXVpemVzOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiQ29sIiwiUm93IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1ldGEiLCJRdWl6ZXMiLCJkYXRhIiwicXVpemVzIiwic2V0QWxsUXVpemVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImd1dHRlciIsInBhZGRpbmciLCJtYXAiLCJxdWl6Iiwic3BhbiIsImhvdmVyYWJsZSIsImNvdmVyIiwiaW1nIiwiYWx0Iiwic3JjIiwicGFpZCIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quizes.js\n"));

/***/ })

});