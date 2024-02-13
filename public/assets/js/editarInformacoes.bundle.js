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
/*!*******************************************!*\
  !*** ./frontend/mainEditarInformacoes.js ***!
  \*******************************************/
// consegui criar o bundle separado para cada página
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=editarInformacoes.bundle.js.map