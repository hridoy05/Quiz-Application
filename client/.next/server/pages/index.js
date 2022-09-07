"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: null,\n        token: \"\"\n    });\n    // config axios\n    if (process.server) {\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = process.env.API;\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${auth?.token}`;\n    } else {\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api/v1\";\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${auth?.token}`;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.getItem(\"auth\")) {\n            setAuth(JSON.parse(localStorage.getItem(\"auth\")));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: [\n            auth,\n            setAuth\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\context\\\\auth.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUNqQztBQUUxQixNQUFNSSxXQUFXLGlCQUFHRixvREFBYSxFQUFFO0FBRW5DLE1BQU1HLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3JDLE1BQU0sS0FBQ0MsSUFBSSxNQUFFQyxPQUFPLE1BQUlSLCtDQUFRLENBQUM7UUFDL0JTLElBQUksRUFBRSxJQUFJO1FBQ1ZDLEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQztJQUVGLGVBQWU7SUFDZixJQUFJQyxPQUFPLENBQUNDLE1BQU0sRUFBRTtRQUNsQlQsK0RBQXNCLEdBQUdRLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDQyxHQUFHLENBQUM7UUFDekNiLG9GQUE4QyxHQUFHLENBQUMsT0FBTyxFQUFFSSxJQUFJLEVBQUVHLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUUsTUFBTTtRQUNMUCwrREFBc0IsR0FBR1EsOEJBQTJCLENBQUM7UUFDckRSLG9GQUE4QyxHQUFHLENBQUMsT0FBTyxFQUFFSSxJQUFJLEVBQUVHLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUU7SUFHRFQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSW1CLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDYixPQUFPLENBQUNjLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNqQixXQUFXLENBQUNvQixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDbEIsSUFBSTtZQUFFQyxPQUFPO1NBQUM7a0JBQ3pDRixRQUFROzs7OztpQkFDWSxDQUN2QjtDQUNIO0FBRW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9hdXRoLmpzPzgxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcjogbnVsbCxcbiAgICB0b2tlbjogXCJcIixcbiAgfSk7XG5cbiAgLy8gY29uZmlnIGF4aW9zXG4gIGlmIChwcm9jZXNzLnNlcnZlcikge1xuICAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5BUEk7XG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke2F1dGg/LnRva2VufWA7XG4gIH0gZWxzZSB7XG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7YXV0aD8udG9rZW59YDtcbiAgfVxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpIHtcbiAgICAgIHNldEF1dGgoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2F1dGgsIHNldEF1dGhdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsImF4aW9zIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJzZXRBdXRoIiwidXNlciIsInRva2VuIiwicHJvY2VzcyIsInNlcnZlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImVudiIsIkFQSSIsImhlYWRlcnMiLCJjb21tb24iLCJORVhUX1BVQkxJQ19BUEkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/auth.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n\n\n\nfunction Home() {\n    // context\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(auth, null, 4)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\appifylab\\\\Quiz\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNXO0FBRTlDLFNBQVNFLElBQUksR0FBRztJQUNkLFVBQVU7SUFDVixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJSixpREFBVSxDQUFDQyxzREFBVyxDQUFDO0lBRS9DLHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxNQUFJOzs7OztvQkFBSzswQkFFYiw4REFBQ0MsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0MsS0FBRzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFBTzs7Ozs7O1lBQ3RDLENBQ047Q0FDSDtBQUVELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb250ZXh0XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cblxuICAgICAgPGJyIC8+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShhdXRoLCBudWxsLCA0KX08L3ByZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJIb21lIiwiYXV0aCIsInNldEF1dGgiLCJkaXYiLCJoMSIsImJyIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();