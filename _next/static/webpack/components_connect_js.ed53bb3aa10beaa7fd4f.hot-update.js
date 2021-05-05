self["webpackHotUpdate_N_E"]("components_connect_js",{

/***/ "./components/connect.js":
/*!*******************************!*\
  !*** ./components/connect.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Connect; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _build_contracts_Upshill_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../build/contracts/Upshill.json */ "../build/contracts/Upshill.json");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_commonSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/commonSlice */ "./stores/commonSlice.js");
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/notify */ "./libs/notify.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/upshill/client/components/connect.js",
    _s = $RefreshSig$();








var contractAddress = "0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe";

var useWeb3 = function useWeb3() {
  var connect = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var web3Modal, provider, web3, accounts, contract;
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!window.contract) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              web3Modal = new Web3Modle({
                network: "mainnet",
                providerOptions: {}
              });
              web3Modal.clearCachedProvider();
              console.log("0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe");
              _context.next = 8;
              return web3Modal.connect();

            case 8:
              provider = _context.sent;
              web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(provider);
              _context.next = 12;
              return web3.eth.getAccounts();

            case 12:
              accounts = _context.sent;
              setWeb3Context({
                address: accounts[0]
              });
              contract = new web3.eth.Contract(_build_contracts_Upshill_json__WEBPACK_IMPORTED_MODULE_7__.abi, contractAddress);
              window.web = web3;
              window.contract = contract;
              _context.next = 21;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 19]]);
    }));

    return function connect() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    connect: connect
  };
};

function Connect() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(),
      _React$useState2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      web3Context = _React$useState2[0],
      setWeb3Context = _React$useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var providerOptions = {};
  var web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({
    network: "mainnet",
    providerOptions: providerOptions
  });

  var connectWeb3 = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var provider, web3, chainId, accounts, contract;
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              web3Modal.clearCachedProvider();
              console.log("0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe");
              _context2.next = 5;
              return web3Modal.connect();

            case 5:
              provider = _context2.sent;
              web3 = new (web3__WEBPACK_IMPORTED_MODULE_6___default())(provider);
              _context2.next = 9;
              return web3.eth.getChainId();

            case 9:
              chainId = _context2.sent;

              if (!(chainId != "56")) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_10__.errorNotify)("Please select SmartChain"));

            case 12:
              _context2.next = 14;
              return web3.eth.getAccounts();

            case 14:
              accounts = _context2.sent;

              if (accounts && accounts[0]) {
                dispatch((0,_stores_commonSlice__WEBPACK_IMPORTED_MODULE_9__.setAccount)(accounts[0]));
              }

              setWeb3Context({
                address: accounts[0]
              });
              contract = new web3.eth.Contract(_build_contracts_Upshill_json__WEBPACK_IMPORTED_MODULE_7__.abi, contractAddress);
              window.contract = contract;
              window.provider = web3;
              _context2.next = 25;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 22]]);
    }));

    return function connectWeb3() {
      return _ref2.apply(this, arguments);
    };
  }();

  var disconnect = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              web3Modal.clearCachedProvider();
              setWeb3Context(undefined);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function disconnect() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [!web3Context && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "px-4 py-2 rounded tetx-white bg-yellow-500",
      onClick: connectWeb3,
      children: "Connect wallet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this), web3Context && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-32 truncate bg-yellow-500 text-white text-center py-2 rounded",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [web3Context.address.substring(0, 4), "...", web3Context.address.substring(38, 42)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

_s(Connect, "3ZmQ3nHPCuFJ4zOGSBKd5wBXUSQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch];
});

_c = Connect;

var _c;

$RefreshReg$(_c, "Connect");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb25uZWN0LmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0QWRkcmVzcyIsInByb2Nlc3MiLCJ1c2VXZWIzIiwiY29ubmVjdCIsIndpbmRvdyIsImNvbnRyYWN0Iiwid2ViM01vZGFsIiwiV2ViM01vZGxlIiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJ3ZWIzIiwiV2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRXZWIzQ29udGV4dCIsImFkZHJlc3MiLCJDb250cmFjdCIsIlVwc2hpbGwiLCJ3ZWIiLCJDb25uZWN0IiwiUmVhY3QiLCJ3ZWIzQ29udGV4dCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJXZWIzTW9kYWwiLCJjb25uZWN0V2ViMyIsImdldENoYWluSWQiLCJjaGFpbklkIiwiZXJyb3JOb3RpZnkiLCJzZXRBY2NvdW50IiwiZGlzY29ubmVjdCIsInVuZGVmaW5lZCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBR0MsNENBQXhCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsT0FBTztBQUFBLHlVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1CQUVSQyxNQUFNLENBQUNDLFFBRkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFHTkMsdUJBSE0sR0FHTSxJQUFJQyxTQUFKLENBQWM7QUFDOUJDLHVCQUFPLEVBQUUsU0FEcUI7QUFFOUJDLCtCQUFlLEVBQUU7QUFGYSxlQUFkLENBSE47QUFPWkgsdUJBQVMsQ0FBQ0ksbUJBQVY7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZWCw0Q0FBWjtBQVJZO0FBQUEscUJBU1dLLFNBQVMsQ0FBQ0gsT0FBVixFQVRYOztBQUFBO0FBU05VLHNCQVRNO0FBVU5DLGtCQVZNLEdBVUMsSUFBSUMsNkNBQUosQ0FBU0YsUUFBVCxDQVZEO0FBQUE7QUFBQSxxQkFXV0MsSUFBSSxDQUFDRSxHQUFMLENBQVNDLFdBQVQsRUFYWDs7QUFBQTtBQVdOQyxzQkFYTTtBQVlaQyw0QkFBYyxDQUFDO0FBQ2JDLHVCQUFPLEVBQUVGLFFBQVEsQ0FBQyxDQUFEO0FBREosZUFBRCxDQUFkO0FBR01iLHNCQWZNLEdBZUssSUFBSVMsSUFBSSxDQUFDRSxHQUFMLENBQVNLLFFBQWIsQ0FBc0JDLDhEQUF0QixFQUFtQ3RCLGVBQW5DLENBZkw7QUFnQlpJLG9CQUFNLENBQUNtQixHQUFQLEdBQWFULElBQWI7QUFDQVYsb0JBQU0sQ0FBQ0MsUUFBUCxHQUFrQkEsUUFBbEI7QUFqQlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUEYsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQW9CQSxTQUFPO0FBQ0xBLFdBQU8sRUFBUEE7QUFESyxHQUFQO0FBR0QsQ0F4QkQ7O0FBMEJlLFNBQVNxQixPQUFULEdBQW1CO0FBQUE7O0FBQUEsd0JBQ01DLHFEQUFBLEVBRE47QUFBQTtBQUFBLE1BQ3pCQyxXQUR5QjtBQUFBLE1BQ1pQLGNBRFk7O0FBRWhDLE1BQU1RLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFFQSxNQUFJbkIsZUFBZSxHQUFHLEVBQXRCO0FBRUEsTUFBTUgsU0FBUyxHQUFHLElBQUl1QixrREFBSixDQUFjO0FBQzlCckIsV0FBTyxFQUFFLFNBRHFCO0FBRTlCQyxtQkFBZSxFQUFmQTtBQUY4QixHQUFkLENBQWxCOztBQUtBLE1BQU1xQixXQUFXO0FBQUEsMFVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFaEJ4Qix1QkFBUyxDQUFDSSxtQkFBVjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlYLDRDQUFaO0FBSGdCO0FBQUEscUJBSU9LLFNBQVMsQ0FBQ0gsT0FBVixFQUpQOztBQUFBO0FBSVZVLHNCQUpVO0FBS1ZDLGtCQUxVLEdBS0gsSUFBSUMsNkNBQUosQ0FBU0YsUUFBVCxDQUxHO0FBQUE7QUFBQSxxQkFNTUMsSUFBSSxDQUFDRSxHQUFMLENBQVNlLFVBQVQsRUFOTjs7QUFBQTtBQU1WQyxxQkFOVTs7QUFBQSxvQkFPWkEsT0FBTyxJQUFJL0IsSUFQQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFRUGdDLDBEQUFXLENBQUMsMEJBQUQsQ0FSSjs7QUFBQTtBQUFBO0FBQUEscUJBVU9uQixJQUFJLENBQUNFLEdBQUwsQ0FBU0MsV0FBVCxFQVZQOztBQUFBO0FBVVZDLHNCQVZVOztBQVdoQixrQkFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUMsQ0FBRCxDQUF4QixFQUE2QjtBQUMzQlMsd0JBQVEsQ0FBQ08sK0RBQVUsQ0FBQ2hCLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBWCxDQUFSO0FBQ0Q7O0FBQ0RDLDRCQUFjLENBQUM7QUFDYkMsdUJBQU8sRUFBRUYsUUFBUSxDQUFDLENBQUQ7QUFESixlQUFELENBQWQ7QUFHTWIsc0JBakJVLEdBaUJDLElBQUlTLElBQUksQ0FBQ0UsR0FBTCxDQUFTSyxRQUFiLENBQXNCQyw4REFBdEIsRUFBbUN0QixlQUFuQyxDQWpCRDtBQWtCaEJJLG9CQUFNLENBQUNDLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0FELG9CQUFNLENBQUNTLFFBQVAsR0FBa0JDLElBQWxCO0FBbkJnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCaEJILHFCQUFPLENBQUNDLEdBQVI7O0FBckJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYa0IsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUF5QkEsTUFBTUssVUFBVTtBQUFBLDBVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakI3Qix1QkFBUyxDQUFDSSxtQkFBVjtBQUNBUyw0QkFBYyxDQUFDaUIsU0FBRCxDQUFkOztBQUZpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWRCxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUtBLHNCQUNFO0FBQUEsZUFDRyxDQUFDVCxXQUFELGlCQUNDO0FBQ0UsZUFBUyxFQUFDLDRDQURaO0FBRUUsYUFBTyxFQUFFSSxXQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFTR0osV0FBVyxpQkFDVjtBQUFLLGVBQVMsRUFBQyxpRUFBZjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dBLFdBQVcsQ0FBQ04sT0FBWixDQUFvQmlCLFNBQXBCLENBQThCLENBQTlCLEVBQWlDLENBQWpDLENBREgsRUFFRyxLQUZILEVBR0dYLFdBQVcsQ0FBQ04sT0FBWixDQUFvQmlCLFNBQXBCLENBQThCLEVBQTlCLEVBQWtDLEVBQWxDLENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTlEdUJiLE87VUFFTEksb0Q7OztLQUZLSixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL2NvbXBvbmVudHNfY29ubmVjdF9qcy5lZDUzYmIzYWExMGJlYWE3ZmQ0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIlxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIlxuaW1wb3J0IFVwc2hpbGwgZnJvbSBcIi4uLy4uL2J1aWxkL2NvbnRyYWN0cy9VcHNoaWxsLmpzb25cIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgc2V0QWNjb3VudCB9IGZyb20gXCIuLi9zdG9yZXMvY29tbW9uU2xpY2VcIlxuaW1wb3J0IHsgZXJyb3JOb3RpZnkgfSBmcm9tIFwiLi4vbGlicy9ub3RpZnlcIlxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTU1xuXG5jb25zdCB1c2VXZWIzID0gKCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAod2luZG93LmNvbnRyYWN0KSByZXR1cm5cbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kbGUoe1xuICAgICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgIH0pXG4gICAgICB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpXG4gICAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05UUkFDVF9BRERSRVNTKVxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIHNldFdlYjNDb250ZXh0KHtcbiAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICB9KVxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVXBzaGlsbC5hYmksIGNvbnRyYWN0QWRkcmVzcylcbiAgICAgIHdpbmRvdy53ZWIgPSB3ZWIzXG4gICAgICB3aW5kb3cuY29udHJhY3QgPSBjb250cmFjdFxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3QsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdCgpIHtcbiAgY29uc3QgW3dlYjNDb250ZXh0LCBzZXRXZWIzQ29udGV4dF0gPSBSZWFjdC51c2VTdGF0ZSgpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGxldCBwcm92aWRlck9wdGlvbnMgPSB7fVxuXG4gIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgIG5ldHdvcms6IFwibWFpbm5ldFwiLFxuICAgIHByb3ZpZGVyT3B0aW9ucyxcbiAgfSlcblxuICBjb25zdCBjb25uZWN0V2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKVxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUylcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKVxuICAgICAgY29uc3QgY2hhaW5JZCA9IGF3YWl0IHdlYjMuZXRoLmdldENoYWluSWQoKVxuICAgICAgaWYgKGNoYWluSWQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBTbWFydENoYWluXCIpXG4gICAgICB9XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50c1swXSkge1xuICAgICAgICBkaXNwYXRjaChzZXRBY2NvdW50KGFjY291bnRzWzBdKSlcbiAgICAgIH1cbiAgICAgIHNldFdlYjNDb250ZXh0KHtcbiAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICB9KVxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVXBzaGlsbC5hYmksIGNvbnRyYWN0QWRkcmVzcylcbiAgICAgIHdpbmRvdy5jb250cmFjdCA9IGNvbnRyYWN0XG4gICAgICB3aW5kb3cucHJvdmlkZXIgPSB3ZWIzXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpXG4gICAgc2V0V2ViM0NvbnRleHQodW5kZWZpbmVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyF3ZWIzQ29udGV4dCAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCB0ZXR4LXdoaXRlIGJnLXllbGxvdy01MDBcIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXZWIzfVxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge3dlYjNDb250ZXh0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIHRydW5jYXRlIGJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHt3ZWIzQ29udGV4dC5hZGRyZXNzLnN1YnN0cmluZygwLCA0KX1cbiAgICAgICAgICAgIHtcIi4uLlwifVxuICAgICAgICAgICAge3dlYjNDb250ZXh0LmFkZHJlc3Muc3Vic3RyaW5nKDM4LCA0Mil9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=