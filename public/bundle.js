/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.jsx":
/*!*********************!*\
  !*** ./app/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// All by Felipe Alfonso Gonzalez\n// Software Craftsman \n// f.alfonso.go@gmail.com \n\n// variable to create a nested component : ->\nvar GreeterMessage = React.createClass({\n  displayName: \"GreeterMessage\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"h1\",\n        null,\n        \"Some H1\"\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        \"Some paragraph\"\n      )\n    );\n  }\n});\n\nvar GreeterForm = React.createClass({\n  displayName: \"GreeterForm\",\n\n  render: function render() {\n    return React.createElement(\n      \"form\",\n      { onSubmit: this.onButtonClick },\n      React.createElement(\"input\", { type: \"text\", ref: \"name\" }),\n      React.createElement(\n        \"button\",\n        null,\n        \"Set name\"\n      )\n    );\n  }\n});\n\n//component in React \nvar Greeter = React.createClass({\n  displayName: \"Greeter\",\n\n  // usage of Default props \n  getDefaultProps: function getDefaultProps() {\n    return {\n      name: 'React',\n      message: 'Default message'\n    };\n  },\n  getInitialState: function getInitialState() {\n    return {\n      name: this.props.name\n    };\n  },\n  onButtonClick: function onButtonClick(e) {\n    e.preventDefault();\n\n    var nameRef = this.refs.name;\n\n    var name = this.refs.name.value;\n    //after to send the name as a var I clear the field\n    // this.refs.name.value = '';\n    nameRef.value = '';\n\n    if (typeof name == 'string' && name.length > 0) {\n      this.setState({\n        name: name\n      });\n    }\n    // alert(name);\n  },\n  render: function render() {\n\n    // usage of props\n    var name = this.state.name;\n    var message = this.props.message;\n\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"h1\",\n        null,\n        \"Hello \",\n        name,\n        \"!\"\n      ),\n      React.createElement(\n        \"p\",\n        null,\n        message + '!!'\n      ),\n      React.createElement(GreeterMessage, null),\n      React.createElement(\n        \"form\",\n        { onSubmit: this.onButtonClick },\n        React.createElement(\"input\", { type: \"text\", ref: \"name\" }),\n        React.createElement(\n          \"button\",\n          null,\n          \"Set name\"\n        )\n      ),\n      React.createElement(GreeterForm, null)\n    );\n  }\n});\n\n// var props\nvar firstname = 'Andrew';\nReactDOM.render(\n// we pass the var through React JSX\nReact.createElement(Greeter, { name: firstname, message: \"This is a message\" }), document.getElementById('app'));\n\n//# sourceURL=webpack:///./app/app.jsx?");

/***/ })

/******/ });