self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_commonSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/commonSlice */ "./stores/commonSlice.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../libs/notify */ "./libs/notify.js");
/* harmony import */ var _libs_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../libs/number */ "./libs/number.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/upshill/client/pages/index.js",
    _this = undefined,
    _s = $RefreshSig$();



var LazyConnectComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.lazy(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_web3modal_dist_index_js"), __webpack_require__.e("components_connect_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/connect */ "./components/connect.js"));
});
_c2 = LazyConnectComponent;










var Completionist = function Completionist() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
    children: "You are good to go!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }, _this);
};

_c3 = Completionist;
var regex = /^\d+(\.\d{1,2})?$/;

var renderer = function renderer(_ref) {
  var completed = _ref.completed,
      formatted = _ref.formatted;
  var days = formatted.days,
      hours = formatted.hours,
      minutes = formatted.minutes,
      seconds = formatted.seconds;

  if (completed) {
    // Render a completed state
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Completionist, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, _this);
  } else {
    // Render a countdown
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex space-x-4 justify-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "px-4 py-2 rounded bg-teal-400 text-white text-xl",
        children: [days, "d"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "px-4 py-2 rounded bg-teal-400 text-white text-xl",
        children: [hours, "h"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "px-4 py-2 rounded bg-teal-400 text-white text-xl",
        children: [minutes, "m"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "px-4 py-2 rounded bg-teal-400 text-white text-xl",
        children: [seconds, "s"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this);
  }
};

var IndexPage = function IndexPage() {
  _s();

  var isSSR = false;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(0.5),
      _React$useState2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      amount = _React$useState2[0],
      setAmount = _React$useState2[1];

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_stores_commonSlice__WEBPACK_IMPORTED_MODULE_8__.accountSelector);

  var _useCopyToClipboard = (0,react_use__WEBPACK_IMPORTED_MODULE_13__.useCopyToClipboard)(),
      _useCopyToClipboard2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useCopyToClipboard, 2),
      _ = _useCopyToClipboard2[0],
      copyToClipboard = _useCopyToClipboard2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState("0x000000000000000000000000000000000000dEaD"),
      _React$useState4 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      refer = _React$useState4[0],
      setRefer = _React$useState4[1];

  var handleCopy = function handleCopy(msg) {
    copyToClipboard(msg);
    (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.successNotify)("Success");
  };

  var handleClaimToken = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var accounts;
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log(window.contract);

              if (window.contract) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Please connect wallet"));

            case 4:
              _context.next = 6;
              return window.provider.eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return window.contract.methods.getAirdrop(refer).send({
                from: accounts[0]
              });

            case 9:
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function handleClaimToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleBuyTokenSale = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var accounts;
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (window.contract) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Please connect wallet"));

            case 3:
              if (regex.test(amount)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Invalid input amount"));

            case 5:
              _context2.next = 7;
              return window.provider.eth.getAccounts();

            case 7:
              accounts = _context2.sent;
              _context2.next = 10;
              return window.contract.methods.tokenSale(refer).send({
                from: accounts[0],
                value: amount * Math.pow(10, 18)
              });

            case 10:
              _context2.next = 14;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function handleBuyTokenSale() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleWithdrawal = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var accounts;
      return _home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (window.contract) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_11__.errorNotify)("Please connect wallet"));

            case 3:
              _context3.next = 5;
              return window.provider.eth.getAccounts();

            case 5:
              accounts = _context3.sent;
              _context3.next = 8;
              return window.contract.methods.clearETH().send({
                from: accounts[0]
              });

            case 8:
              _context3.next = 12;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function handleWithdrawal() {
      return _ref4.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    if (router.query.address && web3__WEBPACK_IMPORTED_MODULE_10___default().utils.isAddress(router.query.address)) {
      setRefer(router.query.address);
    }
  }, [router.query]);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    window.particlesJS.load("particles-js", "/particles.json", function () {
      console.log("callback - particles.js config loaded");
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "min-h-screen text-white bg-gradient-to-br from-light-blue-900 to-light-blue-700 relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
        src: "/particles.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "UpShill.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "Upshill - Refer and get 50% of all Claim & 10% purchase UpShill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "absolute z-10 inset-0",
      id: "particles-js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "container mx-auto px-4 py-6 relative z-20",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "min-h-screen flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
          className: "flex items-center justify-between mb-8",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: "/logo.png",
              alt: "",
              className: "w-16"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "font-bold text-2xl uppercase",
              children: "UpShill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "flex-1 lg:flex items-center justify-center space-x-6 hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://t.me/upshill",
              className: "uppercase text-xl",
              target: "_blank",
              children: "Telegram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://pancakeswap.finance",
              className: "uppercase text-xl",
              target: "_blank",
              children: "Pancake Swap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://bscscan.com/token/0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe",
              className: "uppercase text-xl",
              target: "_blank",
              children: "BSC Scan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "/whitepaper.pdf",
              className: "uppercase text-xl",
              target: "_blank",
              children: "Whitepaper"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "",
            children: !isSSR && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 43
              }, _this),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(LazyConnectComponent, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
          className: "flex-1 flex items-center flex-wrap",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "w-full lg:w-1/2 mb-8 lg:mb-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 mb-4 font-medium",
                children: "Claim your UpShill token"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text-xl",
                children: "Refer and get 50% of all Claim & 10% purchase UpShill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-2 text-xl",
                children: "Your referral link:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "px-4 py-2 rounded bg-cyan-600 w-full lg:w-2/3",
                children: !account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: "Please connect wallet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "break-words",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "inline",
                    children: "".concat("https://upshill.com", "?address=").concat(account)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "inline-flex ml-2 hover:text-yellow-400 cursor-pointer",
                    onClick: function onClick() {
                      return handleCopy("".concat("https://upshill.com", "?address=").concat(account));
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_14__.AiTwotoneCopy, {
                      className: "w-6 h-6"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "w-full lg:w-1/2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "rounded shadow bg-cyan-600 p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-8",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "mb-4 text-xl",
                  children: "Claim your token"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  onClick: handleClaimToken,
                  className: "bg-yellow-500 px-4 py-2 rounded font-bold text-center w-full",
                  children: "Get free UpShill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-4 relative",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "h-px bg-cyan-300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "absolute w-6 h-6 rounded-full bg-cyan-300 flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  children: "Or"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "text-xl",
                  children: "Purchase Upshill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "mb-2",
                  children: ["Raito: 1BNB = ", (0,_libs_number__WEBPACK_IMPORTED_MODULE_12__.numberFormat)("27500000000"), " ", "UShi"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                    type: "text",
                    className: "w-full px-4 py-2 rounded border border-yellow-500 bg-yellow-300 placeholder-gray-900 mb-4 text-gray-900",
                    placeholder: "Enter amount",
                    value: amount,
                    onChange: function onChange(e) {
                      return setAmount(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    onClick: handleBuyTokenSale,
                    className: "bg-yellow-500 px-4 py-2 rounded font-bold text-center w-full",
                    children: "Buy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "h-px bg-cyan-300 mb-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "mb-2 text-xl",
                  children: "Pancake swap listing:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_5__.default, {
                    date: 1621236321365,
                    renderer: renderer
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("footer", {
      className: "px-4 py-16 bg-gray-900 bg-opacity-70 relative z-20",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: "/logo.png",
              alt: "",
              className: "w-16"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "uppercase text-xl font-bold",
              children: "UpShill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "w-1/2 lg:w-auto text-right lg:flex lg:space-x-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://t.me/upshill",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "Telegram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://pancakeswap.finance",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "Pancake swap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://bscscan.com/token/0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "BSC Scan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "/whitepaper.pdf",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "Whitepaper"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);
};

_s(IndexPage, "D5HWxP1a67GadGaGeHFEIWxxX1M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_use__WEBPACK_IMPORTED_MODULE_13__.useCopyToClipboard, next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c4 = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "LazyConnectComponent$React.lazy");
$RefreshReg$(_c2, "LazyConnectComponent");
$RefreshReg$(_c3, "Completionist");
$RefreshReg$(_c4, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF6eUNvbm5lY3RDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBsZXRpb25pc3QiLCJyZWdleCIsInJlbmRlcmVyIiwiY29tcGxldGVkIiwiZm9ybWF0dGVkIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJJbmRleFBhZ2UiLCJpc1NTUiIsImFtb3VudCIsInNldEFtb3VudCIsImFjY291bnQiLCJ1c2VTZWxlY3RvciIsImFjY291bnRTZWxlY3RvciIsInVzZUNvcHlUb0NsaXBib2FyZCIsIl8iLCJjb3B5VG9DbGlwYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWZlciIsInNldFJlZmVyIiwiaGFuZGxlQ29weSIsIm1zZyIsInN1Y2Nlc3NOb3RpZnkiLCJoYW5kbGVDbGFpbVRva2VuIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImNvbnRyYWN0IiwiZXJyb3JOb3RpZnkiLCJwcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0QWlyZHJvcCIsInNlbmQiLCJmcm9tIiwiaGFuZGxlQnV5VG9rZW5TYWxlIiwidGVzdCIsInRva2VuU2FsZSIsInZhbHVlIiwiaGFuZGxlV2l0aGRyYXdhbCIsImNsZWFyRVRIIiwicXVlcnkiLCJhZGRyZXNzIiwiV2ViMyIsInBhcnRpY2xlc0pTIiwibG9hZCIsInByb2Nlc3MiLCJudW1iZXJGb3JtYXQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQSxJQUFNQSxvQkFBb0IsZ0JBQUdDLHVDQUFBLE1BQVc7QUFBQSxTQUFNLCtQQUFOO0FBQUEsQ0FBWCxDQUE3QjtNQUFNRCxvQjtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFN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O01BTFhYLFM7QUFvUE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgwNDNlNzc0MjQzN2I1OGZmMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBDb3VudGRvd24gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiXG5jb25zdCBMYXp5Q29ubmVjdENvbXBvbmVudCA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9jb25uZWN0XCIpKVxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBhY2NvdW50U2VsZWN0b3IgfSBmcm9tIFwiLi4vc3RvcmVzL2NvbW1vblNsaWNlXCJcbmltcG9ydCB7IEFpVHdvdG9uZUNvcHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCJcbmltcG9ydCB7IGVycm9yTm90aWZ5LCBzdWNjZXNzTm90aWZ5IH0gZnJvbSBcIi4uL2xpYnMvbm90aWZ5XCJcbmltcG9ydCB7IG51bWJlckZvcm1hdCB9IGZyb20gXCIuLi9saWJzL251bWJlclwiXG5pbXBvcnQgeyB1c2VDb3B5VG9DbGlwYm9hcmQgfSBmcm9tIFwicmVhY3QtdXNlXCJcblxuY29uc3QgQ29tcGxldGlvbmlzdCA9ICgpID0+IDxzcGFuPllvdSBhcmUgZ29vZCB0byBnbyE8L3NwYW4+XG5jb25zdCByZWdleCA9IC9eXFxkKyhcXC5cXGR7MSwyfSk/JC9cbmNvbnN0IHJlbmRlcmVyID0gKHsgY29tcGxldGVkLCBmb3JtYXR0ZWQgfSkgPT4ge1xuICBjb25zdCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSBmb3JtYXR0ZWRcbiAgaWYgKGNvbXBsZXRlZCkge1xuICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxuICAgIHJldHVybiA8Q29tcGxldGlvbmlzdCAvPlxuICB9IGVsc2Uge1xuICAgIC8vIFJlbmRlciBhIGNvdW50ZG93blxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctdGVhbC00MDAgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge2RheXN9ZFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy10ZWFsLTQwMCB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICB7aG91cnN9aFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy10ZWFsLTQwMCB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICB7bWludXRlc31tXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLXRlYWwtNDAwIHRleHQtd2hpdGUgdGV4dC14bFwiPlxuICAgICAgICAgIHtzZWNvbmRzfXNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCBpc1NTUiA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IFJlYWN0LnVzZVN0YXRlKDAuNSlcbiAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKGFjY291bnRTZWxlY3RvcilcbiAgY29uc3QgW18sIGNvcHlUb0NsaXBib2FyZF0gPSB1c2VDb3B5VG9DbGlwYm9hcmQoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbcmVmZXIsIHNldFJlZmVyXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkRWFEXCJcbiAgKVxuICBjb25zdCBoYW5kbGVDb3B5ID0gbXNnID0+IHtcbiAgICBjb3B5VG9DbGlwYm9hcmQobXNnKVxuICAgIHN1Y2Nlc3NOb3RpZnkoXCJTdWNjZXNzXCIpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2xhaW1Ub2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cod2luZG93LmNvbnRyYWN0KVxuICAgICAgaWYgKCF3aW5kb3cuY29udHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0XCIpXG4gICAgICB9XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgICAgLmdldEFpcmRyb3AocmVmZXIpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSlcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH1cblxuICBjb25zdCBoYW5kbGVCdXlUb2tlblNhbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmNvbnRyYWN0KSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIlBsZWFzZSBjb25uZWN0IHdhbGxldFwiKVxuICAgICAgfSAvLyBub3RpZnkgY29ubmVjdCB3YWxsZXQgZmlyc3RcbiAgICAgIGlmICghcmVnZXgudGVzdChhbW91bnQpKSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIkludmFsaWQgaW5wdXQgYW1vdW50XCIpXG4gICAgICB9IC8vIGludmFsZCBhbW91bnRcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kcy50b2tlblNhbGUocmVmZXIpLnNlbmQoe1xuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6IGFtb3VudCAqIDEwICoqIDE4LFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH1cbiAgY29uc3QgaGFuZGxlV2l0aGRyYXdhbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF3aW5kb3cuY29udHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0XCIpXG4gICAgICB9XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHMuY2xlYXJFVEgoKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSlcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH1cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmFkZHJlc3MgJiYgV2ViMy51dGlscy5pc0FkZHJlc3Mocm91dGVyLnF1ZXJ5LmFkZHJlc3MpKSB7XG4gICAgICBzZXRSZWZlcihyb3V0ZXIucXVlcnkuYWRkcmVzcylcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnldKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkKFwicGFydGljbGVzLWpzXCIsIFwiL3BhcnRpY2xlcy5qc29uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2sgLSBwYXJ0aWNsZXMuanMgY29uZmlnIGxvYWRlZFwiKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1saWdodC1ibHVlLTkwMCB0by1saWdodC1ibHVlLTcwMCByZWxhdGl2ZVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3BhcnRpY2xlcy5qc1wiIC8+XG4gICAgICAgIDx0aXRsZT5VcFNoaWxsLmNvbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiVXBzaGlsbCAtIFJlZmVyIGFuZCBnZXQgNTAlIG9mIGFsbCBDbGFpbSAmIDEwJSBwdXJjaGFzZSBVcFNoaWxsXCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xMCBpbnNldC0wXCIgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS02IHJlbGF0aXZlIHotMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xNlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHVwcGVyY2FzZVwiPlVwU2hpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbGc6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC02IGhpZGRlblwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RFTEVHUkFNfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVsZWdyYW1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBTkNBS0V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGxcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYW5jYWtlIFN3YXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JTQ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJTQyBTY2FuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL3doaXRlcGFwZXIucGRmXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdoaXRlcGFwZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICB7IWlzU1NSICYmIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgLz59PlxuICAgICAgICAgICAgICAgICAgPExhenlDb25uZWN0Q29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIG1iLTggbGc6bWItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy01MDAgdG8tcGluay01MDAgbWItNCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgQ2xhaW0geW91ciBVcFNoaWxsIHRva2VuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICBSZWZlciBhbmQgZ2V0IDUwJSBvZiBhbGwgQ2xhaW0gJiAxMCUgcHVyY2hhc2UgVXBTaGlsbFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsXCI+WW91ciByZWZlcnJhbCBsaW5rOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctY3lhbi02MDAgdy1mdWxsIGxnOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICB7IWFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+UGxlYXNlIGNvbm5lY3Qgd2FsbGV0PC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrLXdvcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT01FfT9hZGRyZXNzPSR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1sLTIgaG92ZXI6dGV4dC15ZWxsb3ctNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvcHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9NRX0/YWRkcmVzcz0ke2FjY291bnR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZUNvcHkgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3cgYmctY3lhbi02MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC14bFwiPkNsYWltIHlvdXIgdG9rZW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xhaW1Ub2tlbn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCBweC00IHB5LTIgcm91bmRlZCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IGZyZWUgVXBTaGlsbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHggYmctY3lhbi0zMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtNiByb3VuZGVkLWZ1bGwgYmctY3lhbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGVmdC0xLzIgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIE9yXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlB1cmNoYXNlIFVwc2hpbGw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBSYWl0bzogMUJOQiA9IHtudW1iZXJGb3JtYXQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFJVE8pfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgVVNoaVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBiZy15ZWxsb3ctMzAwIHBsYWNlaG9sZGVyLWdyYXktOTAwIG1iLTQgdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1eVRva2VuU2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHB4LTQgcHktMiByb3VuZGVkIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQnV5XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4IGJnLWN5YW4tMzAwIG1iLTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIHRleHQteGxcIj5QYW5jYWtlIHN3YXAgbGlzdGluZzo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17MTYyMTIzNjMyMTM2NX0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweC00IHB5LTE2IGJnLWdyYXktOTAwIGJnLW9wYWNpdHktNzAgcmVsYXRpdmUgei0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xNlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgZm9udC1ib2xkXCI+VXBTaGlsbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGxnOnctYXV0byB0ZXh0LXJpZ2h0IGxnOmZsZXggbGc6c3BhY2UteC04XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVEVMRUdSQU19XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVwcGVyY2FzZSBibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWxlZ3JhbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFOQ0FLRX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdXBwZXJjYXNlIGJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhbmNha2Ugc3dhcFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlNDfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB1cHBlcmNhc2UgYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQlNDIFNjYW5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvd2hpdGVwYXBlci5wZGZcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB1cHBlcmNhc2UgYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgV2hpdGVwYXBlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=