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
              href: "https://bscscan.com/token/0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF6eUNvbm5lY3RDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBsZXRpb25pc3QiLCJyZWdleCIsInJlbmRlcmVyIiwiY29tcGxldGVkIiwiZm9ybWF0dGVkIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJJbmRleFBhZ2UiLCJpc1NTUiIsImFtb3VudCIsInNldEFtb3VudCIsImFjY291bnQiLCJ1c2VTZWxlY3RvciIsImFjY291bnRTZWxlY3RvciIsInVzZUNvcHlUb0NsaXBib2FyZCIsIl8iLCJjb3B5VG9DbGlwYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWZlciIsInNldFJlZmVyIiwiaGFuZGxlQ29weSIsIm1zZyIsInN1Y2Nlc3NOb3RpZnkiLCJoYW5kbGVDbGFpbVRva2VuIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImNvbnRyYWN0IiwiZXJyb3JOb3RpZnkiLCJwcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0QWlyZHJvcCIsInNlbmQiLCJmcm9tIiwiaGFuZGxlQnV5VG9rZW5TYWxlIiwidGVzdCIsInRva2VuU2FsZSIsInZhbHVlIiwiaGFuZGxlV2l0aGRyYXdhbCIsImNsZWFyRVRIIiwicXVlcnkiLCJhZGRyZXNzIiwiV2ViMyIsInBhcnRpY2xlc0pTIiwibG9hZCIsInByb2Nlc3MiLCJudW1iZXJGb3JtYXQiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQSxJQUFNQSxvQkFBb0IsZ0JBQUdDLHVDQUFBLE1BQVc7QUFBQSxTQUFNLCtQQUFOO0FBQUEsQ0FBWCxDQUE3QjtNQUFNRCxvQjtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFN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OztNQUxYWCxTO0FBb1BOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUwN2VlMjkyZTAxMmE5YTc1NGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIlxuY29uc3QgTGF6eUNvbm5lY3RDb21wb25lbnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvY29ubmVjdFwiKSlcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgYWNjb3VudFNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3Jlcy9jb21tb25TbGljZVwiXG5pbXBvcnQgeyBBaVR3b3RvbmVDb3B5IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5pbXBvcnQgeyBlcnJvck5vdGlmeSwgc3VjY2Vzc05vdGlmeSB9IGZyb20gXCIuLi9saWJzL25vdGlmeVwiXG5pbXBvcnQgeyBudW1iZXJGb3JtYXQgfSBmcm9tIFwiLi4vbGlicy9udW1iZXJcIlxuaW1wb3J0IHsgdXNlQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LXVzZVwiXG5cbmNvbnN0IENvbXBsZXRpb25pc3QgPSAoKSA9PiA8c3Bhbj5Zb3UgYXJlIGdvb2QgdG8gZ28hPC9zcGFuPlxuY29uc3QgcmVnZXggPSAvXlxcZCsoXFwuXFxkezEsMn0pPyQvXG5jb25zdCByZW5kZXJlciA9ICh7IGNvbXBsZXRlZCwgZm9ybWF0dGVkIH0pID0+IHtcbiAgY29uc3QgeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gZm9ybWF0dGVkXG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcbiAgICByZXR1cm4gPENvbXBsZXRpb25pc3QgLz5cbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLXRlYWwtNDAwIHRleHQtd2hpdGUgdGV4dC14bFwiPlxuICAgICAgICAgIHtkYXlzfWRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctdGVhbC00MDAgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge2hvdXJzfWhcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctdGVhbC00MDAgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge21pbnV0ZXN9bVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy10ZWFsLTQwMCB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICB7c2Vjb25kc31zXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwLjUpXG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhY2NvdW50U2VsZWN0b3IpXG4gIGNvbnN0IFtfLCBjb3B5VG9DbGlwYm9hcmRdID0gdXNlQ29weVRvQ2xpcGJvYXJkKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3JlZmVyLCBzZXRSZWZlcl0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZEVhRFwiXG4gIClcbiAgY29uc3QgaGFuZGxlQ29weSA9IG1zZyA9PiB7XG4gICAgY29weVRvQ2xpcGJvYXJkKG1zZylcbiAgICBzdWNjZXNzTm90aWZ5KFwiU3VjY2Vzc1wiKVxuICB9XG4gIGNvbnN0IGhhbmRsZUNsYWltVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5jb250cmFjdClcbiAgICAgIGlmICghd2luZG93LmNvbnRyYWN0KSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIlBsZWFzZSBjb25uZWN0IHdhbGxldFwiKVxuICAgICAgfVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzXG4gICAgICAgIC5nZXRBaXJkcm9wKHJlZmVyKVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQnV5VG9rZW5TYWxlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXdpbmRvdy5jb250cmFjdCkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJQbGVhc2UgY29ubmVjdCB3YWxsZXRcIilcbiAgICAgIH0gLy8gbm90aWZ5IGNvbm5lY3Qgd2FsbGV0IGZpcnN0XG4gICAgICBpZiAoIXJlZ2V4LnRlc3QoYW1vdW50KSkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJJbnZhbGlkIGlucHV0IGFtb3VudFwiKVxuICAgICAgfSAvLyBpbnZhbGQgYW1vdW50XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKVxuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5TYWxlKHJlZmVyKS5zZW5kKHtcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgIHZhbHVlOiBhbW91bnQgKiAxMCAqKiAxOCxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG4gIGNvbnN0IGhhbmRsZVdpdGhkcmF3YWwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghd2luZG93LmNvbnRyYWN0KSB7XG4gICAgICAgIHJldHVybiBlcnJvck5vdGlmeShcIlBsZWFzZSBjb25uZWN0IHdhbGxldFwiKVxuICAgICAgfVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzLmNsZWFyRVRIKCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeS5hZGRyZXNzICYmIFdlYjMudXRpbHMuaXNBZGRyZXNzKHJvdXRlci5xdWVyeS5hZGRyZXNzKSkge1xuICAgICAgc2V0UmVmZXIocm91dGVyLnF1ZXJ5LmFkZHJlc3MpXG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5XSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cucGFydGljbGVzSlMubG9hZChcInBhcnRpY2xlcy1qc1wiLCBcIi9wYXJ0aWNsZXMuanNvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWRcIilcbiAgICB9KVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tbGlnaHQtYmx1ZS05MDAgdG8tbGlnaHQtYmx1ZS03MDAgcmVsYXRpdmVcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi9wYXJ0aWNsZXMuanNcIiAvPlxuICAgICAgICA8dGl0bGU+VXBTaGlsbC5jb208L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlVwc2hpbGwgLSBSZWZlciBhbmQgZ2V0IDUwJSBvZiBhbGwgQ2xhaW0gJiAxMCUgcHVyY2hhc2UgVXBTaGlsbFwiXG4gICAgICAgID48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgaW5zZXQtMFwiIGlkPVwicGFydGljbGVzLWpzXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNiByZWxhdGl2ZSB6LTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTZcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB1cHBlcmNhc2VcIj5VcFNoaWxsPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGxnOmZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNiBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URUxFR1JBTX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlbGVncmFtXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQU5DQUtFfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGFuY2FrZSBTd2FwXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CU0N9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGxcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCU0MgU2NhblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi93aGl0ZXBhcGVyLnBkZlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGxcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXaGl0ZXBhcGVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgeyFpc1NTUiAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LlN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2IC8+fT5cbiAgICAgICAgICAgICAgICAgIDxMYXp5Q29ubmVjdENvbXBvbmVudCAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuU3VzcGVuc2U+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBtYi04IGxnOm1iLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS15ZWxsb3ctNTAwIHRvLXBpbmstNTAwIG1iLTQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgIENsYWltIHlvdXIgVXBTaGlsbCB0b2tlblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgUmVmZXIgYW5kIGdldCA1MCUgb2YgYWxsIENsYWltICYgMTAlIHB1cmNoYXNlIFVwU2hpbGxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bFwiPllvdXIgcmVmZXJyYWwgbGluazo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLWN5YW4tNjAwIHctZnVsbCBsZzp3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgeyFhY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlBsZWFzZSBjb25uZWN0IHdhbGxldDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhay13b3Jkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9NRX0/YWRkcmVzcz0ke2FjY291bnR9YH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBtbC0yIGhvdmVyOnRleHQteWVsbG93LTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb3B5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hPTUV9P2FkZHJlc3M9JHthY2NvdW50fWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVDb3B5IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgc2hhZG93IGJnLWN5YW4tNjAwIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQteGxcIj5DbGFpbSB5b3VyIHRva2VuPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsYWltVG9rZW59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgcHgtNCBweS0yIHJvdW5kZWQgZm9udC1ib2xkIHRleHQtY2VudGVyIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBmcmVlIFVwU2hpbGxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4IGJnLWN5YW4tMzAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTYgcm91bmRlZC1mdWxsIGJnLWN5YW4tMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxlZnQtMS8yIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICBPclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5QdXJjaGFzZSBVcHNoaWxsPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgUmFpdG86IDFCTkIgPSB7bnVtYmVyRm9ybWF0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JBSVRPKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIFVTaGlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgcm91bmRlZCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgYmcteWVsbG93LTMwMCBwbGFjZWhvbGRlci1ncmF5LTkwMCBtYi00IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXlUb2tlblNhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCBweC00IHB5LTIgcm91bmRlZCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1weCBiZy1jeWFuLTMwMCBtYi00XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsXCI+UGFuY2FrZSBzd2FwIGxpc3Rpbmc6PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duIGRhdGU9ezE2MjEyMzYzMjEzNjV9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHgtNCBweS0xNiBiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTcwIHJlbGF0aXZlIHotMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTZcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsIGZvbnQtYm9sZFwiPlVwU2hpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBsZzp3LWF1dG8gdGV4dC1yaWdodCBsZzpmbGV4IGxnOnNwYWNlLXgtOFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RFTEVHUkFNfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB1cHBlcmNhc2UgYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVsZWdyYW1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBTkNBS0V9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVwcGVyY2FzZSBibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYW5jYWtlIHN3YXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JTQ31cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdXBwZXJjYXNlIGJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJTQyBTY2FuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CU0N9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVwcGVyY2FzZSBibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXaGl0ZXBhcGVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==