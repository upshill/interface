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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(true),
      _React$useState4 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      auth = _React$useState4[0],
      setAuth = _React$useState4[1];

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_stores_commonSlice__WEBPACK_IMPORTED_MODULE_8__.accountSelector);

  var _useCopyToClipboard = (0,react_use__WEBPACK_IMPORTED_MODULE_13__.useCopyToClipboard)(),
      _useCopyToClipboard2 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useCopyToClipboard, 2),
      _ = _useCopyToClipboard2[0],
      copyToClipboard = _useCopyToClipboard2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__.useState("0x000000000000000000000000000000000000dEaD"),
      _React$useState6 = (0,_home_kaliz_dev_tantranlee_upshill_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      refer = _React$useState6[0],
      setRefer = _React$useState6[1];

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
    if (web3__WEBPACK_IMPORTED_MODULE_10___default().utils.keccak256(window.location.hostname.toLowerCase()) != "0x29a791d46f2a56eae682f7aad217aad82c3cc994ed08d6ec8c7af4a1999a9b6e") {
      setAuth(false);
    }
  }, []);
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
    children: [!auth && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "fixed inset-0 bg-opacity-0 z-50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
        src: "/particles.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "UpShill.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "description",
        content: "Upshill - Refer and get 50% of all Claim & 10% purchase UpShill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "absolute z-10 inset-0",
      id: "particles-js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
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
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "font-bold text-2xl uppercase",
              children: "UpShill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://pancakeswap.finance",
              className: "uppercase text-xl",
              target: "_blank",
              children: "Pancake Swap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://bscscan.com/token/0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe",
              className: "uppercase text-xl",
              target: "_blank",
              children: "BSC Scan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "/whitepaper.pdf",
              className: "uppercase text-xl",
              target: "_blank",
              children: "Whitepaper"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "",
            children: !isSSR && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 43
              }, _this),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(LazyConnectComponent, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
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
                lineNumber: 172,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "text-xl",
                children: "Refer and get 50% of all Claim & 10% purchase UpShill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-2 text-xl",
                children: "Your referral link:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "px-4 py-2 rounded bg-cyan-600 w-full lg:w-2/3",
                children: !account ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: "Please connect wallet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 21
                }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "break-words",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "inline",
                    children: "".concat("https://upshill.com", "?address=").concat(account)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
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
                      lineNumber: 195,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
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
                  lineNumber: 205,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  onClick: handleClaimToken,
                  className: "bg-yellow-500 px-4 py-2 rounded font-bold text-center w-full",
                  children: "Get free UpShill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-4 relative",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "h-px bg-cyan-300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "absolute w-6 h-6 rounded-full bg-cyan-300 flex items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  children: "Or"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "text-xl",
                  children: "Purchase Upshill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "mb-2",
                  children: ["Raito: 1BNB = ", (0,_libs_number__WEBPACK_IMPORTED_MODULE_12__.numberFormat)("27500000000"), " ", "UShi"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
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
                    lineNumber: 226,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                    onClick: handleBuyTokenSale,
                    className: "bg-yellow-500 px-4 py-2 rounded font-bold text-center w-full",
                    children: "Buy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "h-px bg-cyan-300 mb-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "mb-2 text-xl",
                  children: "Pancake swap listing:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_5__.default, {
                    date: 1621236321365,
                    renderer: renderer
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
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
              lineNumber: 257,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "uppercase text-xl font-bold",
              children: "UpShill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 256,
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
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://pancakeswap.finance",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "Pancake swap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "https://bscscan.com/token/0xdb9a8daD87Bd56e2329930F8237EF569cD221fbe",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "BSC Scan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "/whitepaper.pdf",
              target: "_blank",
              className: "text-xl uppercase block",
              children: "Whitepaper"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, _this);
};

_s(IndexPage, "vBewoa5Us3/ueBtMzKqBpbKV6ZQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF6eUNvbm5lY3RDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBsZXRpb25pc3QiLCJyZWdleCIsInJlbmRlcmVyIiwiY29tcGxldGVkIiwiZm9ybWF0dGVkIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJJbmRleFBhZ2UiLCJpc1NTUiIsImFtb3VudCIsInNldEFtb3VudCIsImF1dGgiLCJzZXRBdXRoIiwiYWNjb3VudCIsInVzZVNlbGVjdG9yIiwiYWNjb3VudFNlbGVjdG9yIiwidXNlQ29weVRvQ2xpcGJvYXJkIiwiXyIsImNvcHlUb0NsaXBib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZmVyIiwic2V0UmVmZXIiLCJoYW5kbGVDb3B5IiwibXNnIiwic3VjY2Vzc05vdGlmeSIsImhhbmRsZUNsYWltVG9rZW4iLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiY29udHJhY3QiLCJlcnJvck5vdGlmeSIsInByb3ZpZGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRBaXJkcm9wIiwic2VuZCIsImZyb20iLCJoYW5kbGVCdXlUb2tlblNhbGUiLCJ0ZXN0IiwidG9rZW5TYWxlIiwidmFsdWUiLCJoYW5kbGVXaXRoZHJhd2FsIiwiY2xlYXJFVEgiLCJXZWIzIiwibG9jYXRpb24iLCJob3N0bmFtZSIsInRvTG93ZXJDYXNlIiwicHJvY2VzcyIsInF1ZXJ5IiwiYWRkcmVzcyIsInBhcnRpY2xlc0pTIiwibG9hZCIsIm51bWJlckZvcm1hdCIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQU1BLG9CQUFvQixnQkFBR0MsdUNBQUEsTUFBVztBQUFBLFNBQU0sK1BBQU47QUFBQSxDQUFYLENBQTdCO01BQU1ELG9CO0FB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O0FBR0UsdUJBQVMsRUFBQyx5QkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQXNCRTtBQUNFLGtCQUFJLEVBQUMsaUJBRFA7QUFFRSxvQkFBTSxFQUFDLFFBRlQ7QUFHRSx1QkFBUyxFQUFDLHlCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1SUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1TEQsQ0E1UEQ7O0dBQU0zQyxTO1VBSVlPLG9ELEVBQ2FFLDBELEVBQ2RJLGtEOzs7TUFOWGIsUztBQThQTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzdiMDBhMjc1ZGYxNjRhMTBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCJcbmNvbnN0IExhenlDb25uZWN0Q29tcG9uZW50ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2Nvbm5lY3RcIikpXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGFjY291bnRTZWxlY3RvciB9IGZyb20gXCIuLi9zdG9yZXMvY29tbW9uU2xpY2VcIlxuaW1wb3J0IHsgQWlUd290b25lQ29weSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIlxuaW1wb3J0IHsgZXJyb3JOb3RpZnksIHN1Y2Nlc3NOb3RpZnkgfSBmcm9tIFwiLi4vbGlicy9ub3RpZnlcIlxuaW1wb3J0IHsgbnVtYmVyRm9ybWF0IH0gZnJvbSBcIi4uL2xpYnMvbnVtYmVyXCJcbmltcG9ydCB7IHVzZUNvcHlUb0NsaXBib2FyZCB9IGZyb20gXCJyZWFjdC11c2VcIlxuXG5jb25zdCBDb21wbGV0aW9uaXN0ID0gKCkgPT4gPHNwYW4+WW91IGFyZSBnb29kIHRvIGdvITwvc3Bhbj5cbmNvbnN0IHJlZ2V4ID0gL15cXGQrKFxcLlxcZHsxLDJ9KT8kL1xuY29uc3QgcmVuZGVyZXIgPSAoeyBjb21wbGV0ZWQsIGZvcm1hdHRlZCB9KSA9PiB7XG4gIGNvbnN0IHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IGZvcm1hdHRlZFxuICBpZiAoY29tcGxldGVkKSB7XG4gICAgLy8gUmVuZGVyIGEgY29tcGxldGVkIHN0YXRlXG4gICAgcmV0dXJuIDxDb21wbGV0aW9uaXN0IC8+XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVuZGVyIGEgY291bnRkb3duXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy10ZWFsLTQwMCB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICB7ZGF5c31kXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLXRlYWwtNDAwIHRleHQtd2hpdGUgdGV4dC14bFwiPlxuICAgICAgICAgIHtob3Vyc31oXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIGJnLXRlYWwtNDAwIHRleHQtd2hpdGUgdGV4dC14bFwiPlxuICAgICAgICAgIHttaW51dGVzfW1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctdGVhbC00MDAgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge3NlY29uZHN9c1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGlzU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIlxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gUmVhY3QudXNlU3RhdGUoMC41KVxuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3IoYWNjb3VudFNlbGVjdG9yKVxuICBjb25zdCBbXywgY29weVRvQ2xpcGJvYXJkXSA9IHVzZUNvcHlUb0NsaXBib2FyZCgpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtyZWZlciwgc2V0UmVmZXJdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGRFYURcIlxuICApXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSBtc2cgPT4ge1xuICAgIGNvcHlUb0NsaXBib2FyZChtc2cpXG4gICAgc3VjY2Vzc05vdGlmeShcIlN1Y2Nlc3NcIilcbiAgfVxuICBjb25zdCBoYW5kbGVDbGFpbVRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cuY29udHJhY3QpXG4gICAgICBpZiAoIXdpbmRvdy5jb250cmFjdCkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJQbGVhc2UgY29ubmVjdCB3YWxsZXRcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kc1xuICAgICAgICAuZ2V0QWlyZHJvcChyZWZlcilcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJ1eVRva2VuU2FsZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF3aW5kb3cuY29udHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIGNvbm5lY3Qgd2FsbGV0XCIpXG4gICAgICB9IC8vIG5vdGlmeSBjb25uZWN0IHdhbGxldCBmaXJzdFxuICAgICAgaWYgKCFyZWdleC50ZXN0KGFtb3VudCkpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiSW52YWxpZCBpbnB1dCBhbW91bnRcIilcbiAgICAgIH0gLy8gaW52YWxkIGFtb3VudFxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cucHJvdmlkZXIuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzLnRva2VuU2FsZShyZWZlcikuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB2YWx1ZTogYW1vdW50ICogMTAgKiogMTgsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxuICBjb25zdCBoYW5kbGVXaXRoZHJhd2FsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXdpbmRvdy5jb250cmFjdCkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJQbGVhc2UgY29ubmVjdCB3YWxsZXRcIilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpXG4gICAgICBhd2FpdCB3aW5kb3cuY29udHJhY3QubWV0aG9kcy5jbGVhckVUSCgpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KVxuICAgIH0gY2F0Y2ggKGVycikge31cbiAgfVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIFdlYjMudXRpbHMua2VjY2FrMjU2KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpKSAhPVxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09ERVxuICAgICkge1xuICAgICAgc2V0QXV0aChmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIucXVlcnkuYWRkcmVzcyAmJiBXZWIzLnV0aWxzLmlzQWRkcmVzcyhyb3V0ZXIucXVlcnkuYWRkcmVzcykpIHtcbiAgICAgIHNldFJlZmVyKHJvdXRlci5xdWVyeS5hZGRyZXNzKVxuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnBhcnRpY2xlc0pTLmxvYWQoXCJwYXJ0aWNsZXMtanNcIiwgXCIvcGFydGljbGVzLmpzb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkXCIpXG4gICAgfSlcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iciBmcm9tLWxpZ2h0LWJsdWUtOTAwIHRvLWxpZ2h0LWJsdWUtNzAwIHJlbGF0aXZlXCI+XG4gICAgICB7IWF1dGggJiYgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLW9wYWNpdHktMCB6LTUwXCI+PC9kaXY+fVxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3BhcnRpY2xlcy5qc1wiIC8+XG4gICAgICAgIDx0aXRsZT5VcFNoaWxsLmNvbTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiVXBzaGlsbCAtIFJlZmVyIGFuZCBnZXQgNTAlIG9mIGFsbCBDbGFpbSAmIDEwJSBwdXJjaGFzZSBVcFNoaWxsXCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0xMCBpbnNldC0wXCIgaWQ9XCJwYXJ0aWNsZXMtanNcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS02IHJlbGF0aXZlIHotMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xNlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHVwcGVyY2FzZVwiPlVwU2hpbGw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbGc6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC02IGhpZGRlblwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RFTEVHUkFNfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LXhsXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGVsZWdyYW1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBTkNBS0V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGxcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYW5jYWtlIFN3YXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JTQ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJTQyBTY2FuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL3doaXRlcGFwZXIucGRmXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdoaXRlcGFwZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICB7IWlzU1NSICYmIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuU3VzcGVuc2UgZmFsbGJhY2s9ezxkaXYgLz59PlxuICAgICAgICAgICAgICAgICAgPExhenlDb25uZWN0Q29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIG1iLTggbGc6bWItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy01MDAgdG8tcGluay01MDAgbWItNCBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgQ2xhaW0geW91ciBVcFNoaWxsIHRva2VuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAgICBSZWZlciBhbmQgZ2V0IDUwJSBvZiBhbGwgQ2xhaW0gJiAxMCUgcHVyY2hhc2UgVXBTaGlsbFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsXCI+WW91ciByZWZlcnJhbCBsaW5rOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctY3lhbi02MDAgdy1mdWxsIGxnOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICB7IWFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+UGxlYXNlIGNvbm5lY3Qgd2FsbGV0PC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrLXdvcmRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IT01FfT9hZGRyZXNzPSR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1sLTIgaG92ZXI6dGV4dC15ZWxsb3ctNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNvcHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSE9NRX0/YWRkcmVzcz0ke2FjY291bnR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZUNvcHkgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3cgYmctY3lhbi02MDAgcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC14bFwiPkNsYWltIHlvdXIgdG9rZW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xhaW1Ub2tlbn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCBweC00IHB5LTIgcm91bmRlZCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IGZyZWUgVXBTaGlsbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHggYmctY3lhbi0zMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtNiByb3VuZGVkLWZ1bGwgYmctY3lhbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGVmdC0xLzIgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgIE9yXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlB1cmNoYXNlIFVwc2hpbGw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBSYWl0bzogMUJOQiA9IHtudW1iZXJGb3JtYXQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFJVE8pfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgVVNoaVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiByb3VuZGVkIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBiZy15ZWxsb3ctMzAwIHBsYWNlaG9sZGVyLWdyYXktOTAwIG1iLTQgdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1eVRva2VuU2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHB4LTQgcHktMiByb3VuZGVkIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQnV5XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4IGJnLWN5YW4tMzAwIG1iLTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIHRleHQteGxcIj5QYW5jYWtlIHN3YXAgbGlzdGluZzo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17MTYyMTIzNjMyMTM2NX0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweC00IHB5LTE2IGJnLWdyYXktOTAwIGJnLW9wYWNpdHktNzAgcmVsYXRpdmUgei0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xNlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgZm9udC1ib2xkXCI+VXBTaGlsbDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGxnOnctYXV0byB0ZXh0LXJpZ2h0IGxnOmZsZXggbGc6c3BhY2UteC04XCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVEVMRUdSQU19XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVwcGVyY2FzZSBibG9ja1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWxlZ3JhbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFOQ0FLRX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdXBwZXJjYXNlIGJsb2NrXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhbmNha2Ugc3dhcFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQlNDfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB1cHBlcmNhc2UgYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQlNDIFNjYW5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvd2hpdGVwYXBlci5wZGZcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB1cHBlcmNhc2UgYmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgV2hpdGVwYXBlclxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=