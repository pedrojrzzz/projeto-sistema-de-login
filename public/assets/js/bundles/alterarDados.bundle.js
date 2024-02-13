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
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./frontend/mainAlterarDados.js ***!
  \**************************************/
var body = document.querySelector('body');
body.addEventListener('click', function (event) {
  var el = event.target;
  if (el.classList.contains('nameEdit')) {
    var modalNameEdit = document.querySelector('.modalNameEdit');
    modalNameEdit.showModal();
  }
  if (el.classList.contains('emailEdit')) {
    console.log('oi clicou em mim 2');
  }
  if (el.classList.contains('passwordEdit')) {
    console.log('oi clicou em mim 3');
  }
});
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=alterarDados.bundle.js.map