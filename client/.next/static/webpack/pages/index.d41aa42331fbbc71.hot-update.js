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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta;\nvar Quizes = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), quizes = ref[0], setAllQuizes = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_Users_LS_Desktop_appifylab_Quiz_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"\".concat(process.env.API, \"/quizes\"));\n                case 2:\n                    data = _ctx.sent.data;\n                    setAllQuizes(data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"site-card-wrQuizeser\",\n        style: {\n            width: \"90%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            gutter: 16,\n            style: {\n                padding: \"10px\"\n            },\n            children: quizes && quizes.map(function(quiz) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                    span: 7,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        hoverable: true,\n                        style: {\n                            width: 340\n                        },\n                        cover: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            alt: \"example\",\n                            src: \"https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png\"\n                        }, void 0, false, void 0, void 0),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                children: quiz.paid ? \"Paid\" : \"Free\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Meta, {\n                                title: quiz.name,\n                                description: quiz.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                                lineNumber: 29,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\quizes.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Quizes, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Quizes;\n// export async function getServerSideProps() {\n//     const { data } = await axios.get(`${process.env.API}/quizes`);\n//     // console.log(\"DATA =====> \", data.length);\n//     return {\n//       props: {\n//         quizes: data,\n//       },\n//     };\n//   }\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quizes);\nvar _c;\n$RefreshReg$(_c, \"Quizes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBQThDO0FBQ0s7QUFDekI7QUFDMUIsSUFBTSxJQUFNLEdBQUtDLDJDQUFMO0FBQ1osSUFBTVEsTUFBTSxHQUFHLFdBQU07O0lBQ2pCLElBQStCSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXBDSSxNQUFNLEdBQWtCSixHQUFZLEdBQTlCLEVBQUVLLFlBQVksR0FBSUwsR0FBWSxHQUFoQjtJQUMzQkQsZ0RBQVMsQ0FBQywyUEFBUztZQUNQTyxJQUFJOzs7OzsyQkFBV0wsZ0RBQVMsQ0FBQyxFQUFDLENBQWtCLE1BQU8sQ0FBdkJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLEVBQUMsU0FBTyxDQUFDLENBQUM7O29CQUF2RCxJQUFNLGFBQUpKLElBQUksQ0FBaUQ7b0JBQzdERCxZQUFZLENBQUNDLElBQUksQ0FBQzs7Ozs7O0tBRXJCLElBQUMsRUFBRSxDQUFDO0lBQ1AscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtRQUFDQyxLQUFLLEVBQUU7WUFDekNDLEtBQUssRUFBRSxLQUFLO1NBQ2I7a0JBQ0MsNEVBQUNqQixxQ0FBRztZQUFDa0IsTUFBTSxFQUFFLEVBQUU7WUFBRUYsS0FBSyxFQUFFO2dCQUFDRyxPQUFPLEVBQUUsTUFBTTthQUFDO3NCQUVwQ1osTUFBTSxJQUFJQSxNQUFNLENBQUNhLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtxQ0FDdEIsOERBQUN0QixxQ0FBRztvQkFBQ3VCLElBQUksRUFBRSxDQUFDOzhCQUNaLDRFQUFDeEIsc0NBQUk7d0JBQ0x5QixTQUFTO3dCQUNUUCxLQUFLLEVBQUU7NEJBQ0hDLEtBQUssRUFBRSxHQUFHO3lCQUNYO3dCQUNITyxLQUFLLGdCQUFFLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUMsU0FBUzs0QkFBQ0MsR0FBRyxFQUFDLDhNQUE4TTt5REFBRzs7MENBRTNPLDhEQUFDOUIsd0NBQU07MENBQUV3QixJQUFJLENBQUNPLElBQUksR0FBRSxNQUFJLEdBQUcsTUFBSTs7Ozs7cUNBQVc7MENBQzVDLDhEQUFDdkIsSUFBSTtnQ0FBQ3dCLEtBQUssRUFBRVIsSUFBSSxDQUFDUyxJQUFJO2dDQUFFQyxXQUFXLEVBQUVWLElBQUksQ0FBQ1UsV0FBVzs7Ozs7cUNBQUk7Ozs7Ozs2QkFDcEQ7Ozs7O3lCQUNIO2FBQ04sQ0FBQzs7Ozs7aUJBRUQ7Ozs7O2FBQ0YsQ0FDVDtDQUNFO0dBL0JDekIsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBaUNaLCtDQUErQztBQUMvQyxxRUFBcUU7QUFDckUsbURBQW1EO0FBQ25ELGVBQWU7QUFDZixpQkFBaUI7QUFDakIsd0JBQXdCO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsTUFBTTtBQUVOLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpemVzLmpzPzE0MjMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENvbCwgUm93IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcbmNvbnN0IFF1aXplcyA9ICgpID0+IHtcbiAgICBjb25zdCBbcXVpemVzLCBzZXRBbGxRdWl6ZXNdID0gdXNlU3RhdGUoJycpXG4gICAgdXNlRWZmZWN0KGFzeW5jKCk9PntcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9xdWl6ZXNgKTtcbiAgICAgICAgc2V0QWxsUXVpemVzKGRhdGEpXG5cbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1jYXJkLXdyUXVpemVzZXJcIiBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCI5MCVcIixcbiAgICAgIH19PlxuICAgICAgICA8Um93IGd1dHRlcj17MTZ9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAge1xuICAgICAgICAgICAgIHF1aXplcyAmJiBxdWl6ZXMubWFwKHF1aXogPT4gKFxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17N30+XG4gICAgICAgICAgICAgICAgPENhcmQgXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0MCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3ByYWN0aWNhbGRldi9pbWFnZS9mZXRjaC9zLS1La1Njc3RuSi0tL2NfaW1hZ2dhX3NjYWxlLGZfYXV0byxmbF9wcm9ncmVzc2l2ZSxoXzQyMCxxX2F1dG8sd18xMDAwL2h0dHBzOi8vZGV2LXRvLXVwbG9hZHMuczMuYW1hem9uYXdzLmNvbS91cGxvYWRzL2FydGljbGVzL3pvanV5NzlsbzNmbjNxZHQ3ZzZwLnBuZ1wiIC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj57cXVpei5wYWlkP2BQYWlkYDpgRnJlZWB9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17cXVpei5uYW1lfSBkZXNjcmlwdGlvbj17cXVpei5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgKVxuICAgIH07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9xdWl6ZXNgKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcIkRBVEEgPT09PT0+IFwiLCBkYXRhLmxlbmd0aCk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIHF1aXplczogZGF0YSxcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgfVxuXG5leHBvcnQgZGVmYXVsdCBRdWl6ZXM7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmQiLCJDb2wiLCJSb3ciLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNZXRhIiwiUXVpemVzIiwicXVpemVzIiwic2V0QWxsUXVpemVzIiwiZGF0YSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJBUEkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiZ3V0dGVyIiwicGFkZGluZyIsIm1hcCIsInF1aXoiLCJzcGFuIiwiaG92ZXJhYmxlIiwiY292ZXIiLCJpbWciLCJhbHQiLCJzcmMiLCJwYWlkIiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quizes.js\n"));

/***/ })

});