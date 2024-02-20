(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/modules/alterarDadosValidator.js":
/*!***************************************************!*\
  !*** ./frontend/modules/alterarDadosValidator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alterarDadadosValidatorClass: () => (/* binding */ alterarDadadosValidatorClass)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var alterarDadadosValidatorClass = /*#__PURE__*/function () {
  function alterarDadadosValidatorClass(data) {
    _classCallCheck(this, alterarDadadosValidatorClass);
    this.formData = data;
    this.formNameEdit = document.querySelector('.formNameEdit');
    this.formEmailEdit = document.querySelector('.formEmailEdit');
    this.formPasswordEdit = document.querySelector('.formPasswordEdit');
    this.errors = [];
  }
  _createClass(alterarDadadosValidatorClass, [{
    key: "cleanUpData",
    value: function () {
      var _cleanUpData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var key;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              for (key in this.formData) {
                if (typeof this.formData[key] !== 'string') {
                  this.formData[key] = '';
                }
              }
              return _context.abrupt("return", true);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function cleanUpData() {
        return _cleanUpData.apply(this, arguments);
      }
      return cleanUpData;
    }()
  }, {
    key: "newNameValidator",
    value: function () {
      var _newNameValidator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var inputNameEdit, regexApenasLetras, regexNome;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              inputNameEdit = document.querySelector('.inputNameEdit');
              if (!(inputNameEdit.value.length == 0)) {
                _context2.next = 7;
                break;
              }
              this.errors.push('Nenhum campo pode estar vazio');
              this.showError(inputNameEdit, this.errors.length - 1);
              return _context2.abrupt("return");
            case 7:
              this.cleanError(inputNameEdit);
            case 8:
              regexApenasLetras = /[a-zA-Z]/;
              if (regexApenasLetras.test(this.formData.name)) {
                _context2.next = 15;
                break;
              }
              this.errors.push('Caracteres especiais não são permitidos');
              this.showError(inputNameEdit, this.errors.length - 1);
              return _context2.abrupt("return");
            case 15:
              this.cleanError(inputNameEdit);
            case 16:
              regexNome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
              if (regexNome.test(this.formData.name)) {
                _context2.next = 23;
                break;
              }
              this.errors.push('Nome inválido');
              this.showError(inputNameEdit, this.errors.length - 1);
              return _context2.abrupt("return");
            case 23:
              this.cleanError(inputNameEdit);
            case 24:
              if (this.errors.length == 0) {
                this.formNameEdit.submit();
              }
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function newNameValidator() {
        return _newNameValidator.apply(this, arguments);
      }
      return newNameValidator;
    }()
  }, {
    key: "newEmailValidator",
    value: function () {
      var _newEmailValidator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var inputEmailEdit, regexEmail;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              inputEmailEdit = document.querySelector('.inputEmailEdit');
              if (!(this.errors.length !== 0)) {
                _context3.next = 6;
                break;
              }
              this.showError(inputEmailEdit, this.errors.length - 1);
              return _context3.abrupt("return");
            case 6:
              this.cleanError(inputEmailEdit);
            case 7:
              regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
              if (regexEmail.test(this.formData.email)) {
                _context3.next = 14;
                break;
              }
              this.errors.push('E-mail inválido');
              this.showError(inputEmailEdit, this.errors.length - 1);
              return _context3.abrupt("return");
            case 14:
              this.cleanError(inputEmailEdit);
            case 15:
              if (this.errors.length == 0) {
                this.formEmailEdit.submit();
              }
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function newEmailValidator() {
        return _newEmailValidator.apply(this, arguments);
      }
      return newEmailValidator;
    }()
  }, {
    key: "newPasswordValidator",
    value: function () {
      var _newPasswordValidator = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var inputCurrentPasswordEdit, inputNewPasswordEdit, inputConfirmNewPassword, regexPassword;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              inputCurrentPasswordEdit = document.querySelector('.inputCurrentPassword');
              inputNewPasswordEdit = document.querySelector('.inputNewPasswordEdit');
              inputConfirmNewPassword = document.querySelector('.inputConfirmNewPassword'); // Verificar se algum campo do form senha está vazio
              if (!(inputCurrentPasswordEdit.value.length == 0)) {
                _context4.next = 9;
                break;
              }
              this.errors.push('Nenhum campo pode estar vazio');
              this.showError(inputCurrentPasswordEdit, this.errors.length - 1);
              return _context4.abrupt("return");
            case 9:
              this.cleanError(inputCurrentPasswordEdit);
            case 10:
              if (!(inputNewPasswordEdit.value.length == 0)) {
                _context4.next = 16;
                break;
              }
              this.errors.push('Nenhum campo pode estar vazio');
              this.showError(inputNewPasswordEdit, this.errors.length - 1);
              return _context4.abrupt("return");
            case 16:
              this.cleanError(inputNewPasswordEdit);
            case 17:
              if (!(inputConfirmNewPassword.value.length == 0)) {
                _context4.next = 23;
                break;
              }
              this.errors.push('Nenhum campo pode estar vazio');
              this.showError(inputConfirmNewPassword, this.errors.length - 1);
              return _context4.abrupt("return");
            case 23:
              this.cleanError(inputConfirmNewPassword);
            case 24:
              if (!(this.errors.length == 0)) {
                _context4.next = 28;
                break;
              }
              this.formPasswordEdit.submit();
              _context4.next = 29;
              break;
            case 28:
              return _context4.abrupt("return");
            case 29:
              // *************************
              // Verificar se os campos do form senha passam pelo regex de StrongPassword
              regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
              if (!regexPassword.test(inputCurrentPasswordEdit.value)) {
                this.errors.push('Senha inválida');
                this.showError(inputCurrentPasswordEdit, this.errors.length - 1);
              } else {
                this.cleanError(inputCurrentPasswordEdit);
              }
              if (!regexPassword.test(inputNewPasswordEdit.value)) {
                this.errors.push('Senha inválida');
                this.showError(inputNewPasswordEdit, this.errors.length - 1);
              } else {
                this.cleanError(inputNewPasswordEdit);
              }
              if (!regexPassword.test(inputConfirmNewPassword.value)) {
                this.errors.push('Senha inválida');
                this.showError(inputConfirmNewPassword, this.errors.length - 1);
              } else {
                this.cleanError(inputConfirmNewPassword);
              }

              // *************************
            case 33:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function newPasswordValidator() {
        return _newPasswordValidator.apply(this, arguments);
      }
      return newPasswordValidator;
    }()
  }, {
    key: "showError",
    value: function showError(field, erro) {
      var proximoElemento = field.nextElementSibling;
      if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
        proximoElemento.remove();
      }
      var paragrafo = document.createElement("p");
      field.insertAdjacentElement("afterend", paragrafo);
      if (this.errors.length !== 0) {
        paragrafo.innerHTML = this.errors[erro];
        paragrafo.style.color = "red";
        paragrafo.style.fontWeight = 600;
        paragrafo.style.marginLeft = 25;
        this.erros = [];
      }
    }
  }, {
    key: "cleanError",
    value: function cleanError(field) {
      var proximoElemento = field.nextElementSibling;
      if (proximoElemento && proximoElemento.tagName.toLowerCase() === "p") {
        proximoElemento.remove(); // Remove o parágrafo
      }
    }
  }]);
  return alterarDadadosValidatorClass;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./frontend/mainAlterarDados.js ***!
  \**************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Abrir modais quando clicado em alterar algum dado

var body = document.querySelector('body');
body.addEventListener('click', function (event) {
  var el = event.target;
  if (el.classList.contains('nameEdit')) {
    var modalNameEdit = document.querySelector('.modalNameEdit');
    modalNameEdit.showModal();
  }
  if (el.classList.contains('emailEdit')) {
    var modalEmailEdit = document.querySelector('.modalEmailEdit');
    modalEmailEdit.showModal();
  }
  if (el.classList.contains('passwordEdit')) {
    var modalPasswordEdit = document.querySelector('.modalPasswordEdit');
    modalPasswordEdit.showModal();
  }
});

// ************************************************

// Fechar modais quando clicado no icon X

body.addEventListener('click', function (event) {
  var el = event.target;
  if (el.classList.contains('iconXNameEdit')) {
    var modalNameEdit = document.querySelector('.modalNameEdit');
    modalNameEdit.close();
  }
  if (el.classList.contains('iconXEmailEdit')) {
    var modalEmailEdit = document.querySelector('.modalEmailEdit');
    modalEmailEdit.close();
  }
  if (el.classList.contains('iconXPasswordEdit')) {
    var modalPasswordEdit = document.querySelector('.modalPasswordEdit');
    modalPasswordEdit.close();
  }
});
// ***********************************************

// Envio do formulário
var alterarDadadosValidatorClass = (__webpack_require__(/*! ./modules/alterarDadosValidator */ "./frontend/modules/alterarDadosValidator.js").alterarDadadosValidatorClass);
body.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var el, inputNameEdit, dataForm, insAlterarDadosValidator, flag, inputEmailEdit, _dataForm, _insAlterarDadosValidator, _flag, inputCurrentPasswordEdit, inputNewPasswordEdit, inputConfirmNewPassword, _dataForm2, _insAlterarDadosValidator2, _flag2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          el = event.target; // FORM NAME EDIT
          if (!el.classList.contains('submitFormNameEdit')) {
            _context.next = 15;
            break;
          }
          event.preventDefault();
          inputNameEdit = document.querySelector('.inputNameEdit').value;
          dataForm = {
            name: inputNameEdit
          };
          insAlterarDadosValidator = new alterarDadadosValidatorClass(dataForm);
          _context.next = 8;
          return insAlterarDadosValidator.cleanUpData();
        case 8:
          flag = _context.sent;
          if (!(flag == true)) {
            _context.next = 14;
            break;
          }
          _context.next = 12;
          return insAlterarDadosValidator.newNameValidator();
        case 12:
          _context.next = 15;
          break;
        case 14:
          return _context.abrupt("return");
        case 15:
          if (!el.classList.contains('submitFormEmailEdit')) {
            _context.next = 29;
            break;
          }
          event.preventDefault();
          inputEmailEdit = document.querySelector('.inputEmailEdit').value;
          _dataForm = {
            email: inputEmailEdit
          };
          _insAlterarDadosValidator = new alterarDadadosValidatorClass(_dataForm);
          _context.next = 22;
          return _insAlterarDadosValidator.cleanUpData();
        case 22:
          _flag = _context.sent;
          if (!(_flag == true)) {
            _context.next = 28;
            break;
          }
          _context.next = 26;
          return _insAlterarDadosValidator.newEmailValidator();
        case 26:
          _context.next = 29;
          break;
        case 28:
          return _context.abrupt("return");
        case 29:
          if (!el.classList.contains('submitFormPasswordEdit')) {
            _context.next = 45;
            break;
          }
          event.preventDefault();
          inputCurrentPasswordEdit = document.querySelector('.inputCurrentPassword').value;
          inputNewPasswordEdit = document.querySelector('.inputNewPasswordEdit').value;
          inputConfirmNewPassword = document.querySelector('.inputConfirmNewPassword').value;
          _dataForm2 = {
            currentPassword: inputCurrentPasswordEdit,
            newPassword: inputNewPasswordEdit,
            confirmNewPassword: inputConfirmNewPassword
          };
          _insAlterarDadosValidator2 = new alterarDadadosValidatorClass(_dataForm2);
          _context.next = 38;
          return _insAlterarDadosValidator2.cleanUpData();
        case 38:
          _flag2 = _context.sent;
          if (!(_flag2 == true)) {
            _context.next = 44;
            break;
          }
          _context.next = 42;
          return _insAlterarDadosValidator2.newPasswordValidator();
        case 42:
          _context.next = 45;
          break;
        case 44:
          return _context.abrupt("return");
        case 45:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
// ***************************************
// ***********************************************

//Remover messages de success/errors após alguns segundos
var divSuccess = document.querySelector('.divSuccess');
var divError = document.querySelector('.divErro');
function removeMessages() {
  if (divSuccess) {
    divSuccess.remove();
  }
  if (divError) {
    divError.remove();
  }
}
setTimeout(removeMessages, 10000);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=alterarDados.bundle.js.map