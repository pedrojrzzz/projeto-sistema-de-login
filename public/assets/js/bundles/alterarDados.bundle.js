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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=alterarDados.bundle.js.map