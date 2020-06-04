var Form = (function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  var generateAlphabeticName = function generateAlphabeticName(code) {
    var lastDigit = chars[code % chars.length];
    return code > chars.length ? "".concat(generateAlphabeticName(Math.floor(code / chars.length))).concat(lastDigit) : lastDigit;
  };

  var interleave = function interleave(strings, interpolations) {
    return interpolations.reduce(function (array, interp, i) {
      return array.concat(interp, strings[i + 1]);
    }, [strings[0]]);
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** `Object#toString` result references. */


  var objectTag = '[object Object]';
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */

  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;

    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }

    return result;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /** Used for built-in method references. */


  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /** Used to infer the `Object` constructor. */

  var objectCtorString = funcToString.call(Object);
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /** Built-in value references. */

  var getPrototype = overArg(Object.getPrototypeOf, Object);
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike(value) {
    return !!value && _typeof(value) == 'object';
  }
  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */


  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }

    var proto = getPrototype(value);

    if (proto === null) {
      return true;
    }

    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  var lodash_isplainobject = isPlainObject;
  var _uppercasePattern = /([A-Z])/g;
  var msPattern = /^ms-/;

  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }

  var hyphenateStyleName_1 = hyphenateStyleName;

  var objToCss = function objToCss(obj, prevKey) {
    var css = Object.keys(obj).map(function (key) {
      if (lodash_isplainobject(obj[key])) return objToCss(obj[key], key);
      return "".concat(hyphenateStyleName_1(key), ": ").concat(obj[key], ";");
    }).join(' ');
    return prevKey ? "".concat(prevKey, " {\n  ").concat(css, "\n}") : css;
  };

  var flatten = function flatten(chunks, executionContext) {
    return chunks.reduce(function (ruleSet, chunk) {
      if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
      if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten(chunk, executionContext)));

      if (typeof chunk === 'function') {
        return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
      }

      return ruleSet.concat(lodash_isplainobject(chunk) ? objToCss(chunk) : chunk.toString());
    }, []);
  };

  var css = function css(rules) {
    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    return flatten(interleave(rules, interpolations));
  };

  function last(arr) {
    return arr[arr.length - 1];
  }

  function sheetForTag(tag) {
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }

  var isDev = function (x) {
    return x === 'development' || !x;
  }("development");

  var isTest = "development" === 'test';
  var isBrowser = typeof document !== 'undefined' && !isTest;

  var oldIE = function () {
    if (isBrowser) {
      var div = document.createElement('div');
      div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
      return div.getElementsByTagName('i').length === 1;
    }
  }();

  function makeStyleTag() {
    var tag = document.createElement('style');
    tag.type = 'text/css';
    tag.appendChild(document.createTextNode(''));
    (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
    return tag;
  }

  var StyleSheet = function () {
    function StyleSheet() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$speedy = _ref.speedy,
          speedy = _ref$speedy === void 0 ? !isDev && !isTest : _ref$speedy,
          _ref$maxLength = _ref.maxLength,
          maxLength = _ref$maxLength === void 0 ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

      _classCallCheck(this, StyleSheet);

      this.isSpeedy = speedy;
      this.sheet = undefined;
      this.tags = [];
      this.maxLength = maxLength;
      this.ctr = 0;
    }

    _createClass(StyleSheet, [{
      key: "inject",
      value: function inject() {
        var _this = this;

        if (this.injected) {
          throw new Error('already injected stylesheet!');
        }

        if (isBrowser) {
          this.tags[0] = makeStyleTag();
          this.sheet = sheetForTag(this.tags[0]);
        } else {
          this.sheet = {
            cssRules: [],
            insertRule: function insertRule(rule) {
              var serverRule = {
                cssText: rule
              };

              _this.sheet.cssRules.push(serverRule);

              return {
                serverRule: serverRule,
                appendRule: function appendRule(newCss) {
                  return serverRule.cssText += newCss;
                }
              };
            }
          };
        }

        this.injected = true;
      }
    }, {
      key: "speedy",
      value: function speedy(bool) {
        if (this.ctr !== 0) {
          throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy(".concat(bool, ") earlier in your app, or call flush() before speedy(").concat(bool, ")"));
        }

        this.isSpeedy = !!bool;
      }
    }, {
      key: "_insert",
      value: function _insert(rule) {
        try {
          this.sheet.insertRule(rule, this.sheet.cssRules.length);
        } catch (e) {
          if (isDev) {
            console.warn('whoops, illegal rule inserted', rule);
          }
        }
      }
    }, {
      key: "insert",
      value: function insert(rule) {
        var insertedRule;

        if (isBrowser) {
          if (this.isSpeedy && this.sheet.insertRule) {
            this._insert(rule);
          } else {
            var textNode = document.createTextNode(rule);
            last(this.tags).appendChild(textNode);
            insertedRule = {
              textNode: textNode,
              appendRule: function appendRule(newCss) {
                return textNode.appendData(newCss);
              }
            };

            if (!this.isSpeedy) {
              this.sheet = sheetForTag(last(this.tags));
            }
          }
        } else {
          insertedRule = this.sheet.insertRule(rule);
        }

        this.ctr++;

        if (isBrowser && this.ctr % this.maxLength === 0) {
          this.tags.push(makeStyleTag());
          this.sheet = sheetForTag(last(this.tags));
        }

        return insertedRule;
      }
    }, {
      key: "flush",
      value: function flush() {
        if (isBrowser) {
          this.tags.forEach(function (tag) {
            return tag.parentNode.removeChild(tag);
          });
          this.tags = [];
          this.sheet = null;
          this.ctr = 0;
        } else {
          this.sheet.cssRules = [];
        }

        this.injected = false;
      }
    }, {
      key: "rules",
      value: function rules() {
        if (!isBrowser) {
          return this.sheet.cssRules;
        }

        var arr = [];
        this.tags.forEach(function (tag) {
          return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
        });
        return arr;
      }
    }]);

    return StyleSheet;
  }();

  var StyleSheet$1 = function () {
    function StyleSheet$1() {
      _classCallCheck(this, StyleSheet$1);

      this.globalStyleSheet = new StyleSheet({
        speedy: false
      });
      this.componentStyleSheet = new StyleSheet({
        speedy: false,
        maxLength: 40
      });
    }

    _createClass(StyleSheet$1, [{
      key: "inject",
      value: function inject() {
        this.globalStyleSheet.inject();
        this.componentStyleSheet.inject();
      }
    }, {
      key: "flush",
      value: function flush() {
        if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
        if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
      }
    }, {
      key: "insert",
      value: function insert(rule) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          global: false
        };
        var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
        return sheet.insert(rule);
      }
    }, {
      key: "rules",
      value: function rules() {
        return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
      }
    }, {
      key: "injected",
      get: function get() {
        return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
      }
    }]);

    return StyleSheet$1;
  }();

  var styleSheet = new StyleSheet$1();

  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var hash = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = doHash; // murmurhash2 via https://gist.github.com/raycmorgan/588423

    function doHash(str, seed) {
      var m = 0x5bd1e995;
      var r = 24;
      var h = seed ^ str.length;
      var length = str.length;
      var currentIndex = 0;

      while (length >= 4) {
        var k = UInt32(str, currentIndex);
        k = Umul32(k, m);
        k ^= k >>> r;
        k = Umul32(k, m);
        h = Umul32(h, m);
        h ^= k;
        currentIndex += 4;
        length -= 4;
      }

      switch (length) {
        case 3:
          h ^= UInt16(str, currentIndex);
          h ^= str.charCodeAt(currentIndex + 2) << 16;
          h = Umul32(h, m);
          break;

        case 2:
          h ^= UInt16(str, currentIndex);
          h = Umul32(h, m);
          break;

        case 1:
          h ^= str.charCodeAt(currentIndex);
          h = Umul32(h, m);
          break;
      }

      h ^= h >>> 13;
      h = Umul32(h, m);
      h ^= h >>> 15;
      return h >>> 0;
    }

    function UInt32(str, pos) {
      return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
    }

    function UInt16(str, pos) {
      return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
    }

    function Umul32(n, m) {
      n = n | 0;
      m = m | 0;
      var nlo = n & 0xffff;
      var nhi = n >>> 16;
      var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
      return res;
    }
  });
  var hashStr = unwrapExports(hash);

  var stylis = createCommonjsModule(function (module, exports) {
    /*
     *          __        ___
     *    _____/ /___  __/ (_)____
     *   / ___/ __/ / / / / / ___/
     *  (__  ) /_/ /_/ / / (__  )
     * /____/\__/\__, /_/_/____/
     *          /____/
     *
     * light - weight css preprocessor @licence MIT
     */
    (function (factory) {
      /* eslint-disable */
      module['exports'] = factory(null);
    })(
    /** @param {*=} options */
    function factory(options) {
      /**
       * Notes
       *
       * The ['<method name>'] pattern is used to support closure compiler
       * the jsdoc signatures are also used to the same effect
       *
       * ----
       *
       * int + int + int === n4 [faster]
       *
       * vs
       *
       * int === n1 && int === n2 && int === n3
       *
       * ----
       *
       * switch (int) { case ints...} [faster]
       *
       * vs
       *
       * if (int == 1 && int === 2 ...)
       *
       * ----
       *
       * The (first*n1 + second*n2 + third*n3) format used in the property parser
       * is a simple way to hash the sequence of characters
       * taking into account the index they occur in
       * since any number of 3 character sequences could produce duplicates.
       *
       * On the other hand sequences that are directly tied to the index of the character
       * resolve a far more accurate measure, it's also faster
       * to evaluate one condition in a switch statement
       * than three in an if statement regardless of the added math.
       *
       * This allows the vendor prefixer to be both small and fast.
       */
      var nullptn = /^\0+/g;
      /* matches leading null characters */

      var formatptn = /[\0\r\f]/g;
      /* matches new line, null and formfeed characters */

      var colonptn = /: */g;
      /* splits animation rules */

      var cursorptn = /zoo|gra/;
      /* assert cursor varient */

      var transformptn = /([,: ])(transform)/g;
      /* vendor prefix transform, older webkit */

      var animationptn = /,+\s*(?![^(]*[)])/g;
      /* splits multiple shorthand notation animations */

      var propertiesptn = / +\s*(?![^(]*[)])/g;
      /* animation properties */

      var elementptn = / *[\0] */g;
      /* selector elements */

      var selectorptn = /,\r+?/g;
      /* splits selectors */

      var andptn = /([\t\r\n ])*\f?&/g;
      /* match & */

      var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
      /* matches :global(.*) */

      var invalidptn = /\W+/g;
      /* removes invalid characters from keyframes */

      var keyframeptn = /@(k\w+)\s*(\S*)\s*/;
      /* matches @keyframes $1 */

      var plcholdrptn = /::(place)/g;
      /* match ::placeholder varient */

      var readonlyptn = /:(read-only)/g;
      /* match :read-only varient */

      var beforeptn = /\s+(?=[{\];=:>])/g;
      /* matches \s before ] ; = : */

      var afterptn = /([[}=:>])\s+/g;
      /* matches \s after characters [ } = : */

      var tailptn = /(\{[^{]+?);(?=\})/g;
      /* matches tail semi-colons ;} */

      var whiteptn = /\s{2,}/g;
      /* matches repeating whitespace */

      var pseudoptn = /([^\(])(:+) */g;
      /* pseudo element */

      var writingptn = /[svh]\w+-[tblr]{2}/;
      /* match *gradient property */

      var supportsptn = /\(\s*(.*)\s*\)/g;
      /* match supports (groups) */

      var propertyptn = /([\s\S]*?);/g;
      /* match properties leading semicolon */

      var selfptn = /-self|flex-/g;
      /* match flex- and -self in align-self: flex-*; */

      var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
      /* match tail whitspace */

      var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/;
      /* match max/min/fit-content, fill-available */

      var imgsrcptn = /([^-])(image-set\()/;
      /* vendors */

      var webkit = '-webkit-';
      var moz = '-moz-';
      var ms = '-ms-';
      /* character codes */

      var SEMICOLON = 59;
      /* ; */

      var CLOSEBRACES = 125;
      /* } */

      var OPENBRACES = 123;
      /* { */

      var OPENPARENTHESES = 40;
      /* ( */

      var CLOSEPARENTHESES = 41;
      /* ) */

      var OPENBRACKET = 91;
      /* [ */

      var CLOSEBRACKET = 93;
      /* ] */

      var NEWLINE = 10;
      /* \n */

      var CARRIAGE = 13;
      /* \r */

      var TAB = 9;
      /* \t */

      var AT = 64;
      /* @ */

      var SPACE = 32;
      /*   */

      var AND = 38;
      /* & */

      var DASH = 45;
      /* - */

      var UNDERSCORE = 95;
      /* _ */

      var STAR = 42;
      /* * */

      var COMMA = 44;
      /* , */

      var COLON = 58;
      /* : */

      var SINGLEQUOTE = 39;
      /* ' */

      var DOUBLEQUOTE = 34;
      /* " */

      var FOWARDSLASH = 47;
      /* / */

      var GREATERTHAN = 62;
      /* > */

      var PLUS = 43;
      /* + */

      var TILDE = 126;
      /* ~ */

      var NULL = 0;
      /* \0 */

      var FORMFEED = 12;
      /* \f */

      var VERTICALTAB = 11;
      /* \v */

      /* special identifiers */

      var KEYFRAME = 107;
      /* k */

      var MEDIA = 109;
      /* m */

      var SUPPORTS = 115;
      /* s */

      var PLACEHOLDER = 112;
      /* p */

      var READONLY = 111;
      /* o */

      var IMPORT = 105;
      /* <at>i */

      var CHARSET = 99;
      /* <at>c */

      var DOCUMENT = 100;
      /* <at>d */

      var PAGE = 112;
      /* <at>p */

      var column = 1;
      /* current column */

      var line = 1;
      /* current line numebr */

      var pattern = 0;
      /* :pattern */

      var cascade = 1;
      /* #id h1 h2 vs h1#id h2#id  */

      var prefix = 1;
      /* vendor prefix */

      var escape = 1;
      /* escape :global() pattern */

      var compress = 0;
      /* compress output */

      var semicolon = 0;
      /* no/semicolon option */

      var preserve = 0;
      /* preserve empty selectors */

      /* empty reference */

      var array = [];
      /* plugins */

      var plugins = [];
      var plugged = 0;
      var should = null;
      /* plugin context */

      var POSTS = -2;
      var PREPS = -1;
      var UNKWN = 0;
      var PROPS = 1;
      var BLCKS = 2;
      var ATRUL = 3;
      /* plugin newline context */

      var unkwn = 0;
      /* keyframe animation */

      var keyed = 1;
      var key = '';
      /* selector namespace */

      var nscopealt = '';
      var nscope = '';
      /**
       * Compile
       *
       * @param {Array<string>} parent
       * @param {Array<string>} current
       * @param {string} body
       * @param {number} id
       * @param {number} depth
       * @return {string}
       */

      function compile(parent, current, body, id, depth) {
        var bracket = 0;
        /* brackets [] */

        var comment = 0;
        /* comments /* // or /* */

        var parentheses = 0;
        /* functions () */

        var quote = 0;
        /* quotes '', "" */

        var first = 0;
        /* first character code */

        var second = 0;
        /* second character code */

        var code = 0;
        /* current character code */

        var tail = 0;
        /* previous character code */

        var trail = 0;
        /* character before previous code */

        var peak = 0;
        /* previous non-whitespace code */

        var counter = 0;
        /* count sequence termination */

        var context = 0;
        /* track current context */

        var atrule = 0;
        /* track @at-rule context */

        var pseudo = 0;
        /* track pseudo token index */

        var caret = 0;
        /* current character index */

        var format = 0;
        /* control character formating context */

        var insert = 0;
        /* auto semicolon insertion */

        var invert = 0;
        /* inverted selector pattern */

        var length = 0;
        /* generic length address */

        var eof = body.length;
        /* end of file(length) */

        var eol = eof - 1;
        /* end of file(characters) */

        var char = '';
        /* current character */

        var chars = '';
        /* current buffer of characters */

        var child = '';
        /* next buffer of characters */

        var out = '';
        /* compiled body */

        var children = '';
        /* compiled children */

        var flat = '';
        /* compiled leafs */

        var selector;
        /* generic selector address */

        var result;
        /* generic address */
        // ...build body

        while (caret < eof) {
          code = body.charCodeAt(caret); // eof varient

          if (caret === eol) {
            // last character + noop context, add synthetic padding for noop context to terminate
            if (comment + quote + parentheses + bracket !== 0) {
              if (comment !== 0) {
                code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
              }

              quote = parentheses = bracket = 0;
              eof++;
              eol++;
            }
          }

          if (comment + quote + parentheses + bracket === 0) {
            // eof varient
            if (caret === eol) {
              if (format > 0) {
                chars = chars.replace(formatptn, '');
              }

              if (chars.trim().length > 0) {
                switch (code) {
                  case SPACE:
                  case TAB:
                  case SEMICOLON:
                  case CARRIAGE:
                  case NEWLINE:
                    {
                      break;
                    }

                  default:
                    {
                      chars += body.charAt(caret);
                    }
                }

                code = SEMICOLON;
              }
            } // auto semicolon insertion


            if (insert === 1) {
              switch (code) {
                // false flags
                case OPENBRACES:
                case CLOSEBRACES:
                case SEMICOLON:
                case DOUBLEQUOTE:
                case SINGLEQUOTE:
                case OPENPARENTHESES:
                case CLOSEPARENTHESES:
                case COMMA:
                  {
                    insert = 0;
                  }
                // ignore

                case TAB:
                case CARRIAGE:
                case NEWLINE:
                case SPACE:
                  {
                    break;
                  }
                // valid

                default:
                  {
                    insert = 0;
                    length = caret;
                    first = code;
                    caret--;
                    code = SEMICOLON;

                    while (length < eof) {
                      switch (body.charCodeAt(length++)) {
                        case NEWLINE:
                        case CARRIAGE:
                        case SEMICOLON:
                          {
                            ++caret;
                            code = first;
                            length = eof;
                            break;
                          }

                        case COLON:
                          {
                            if (format > 0) {
                              ++caret;
                              code = first;
                            }
                          }

                        case OPENBRACES:
                          {
                            length = eof;
                          }
                      }
                    }
                  }
              }
            } // token varient


            switch (code) {
              case OPENBRACES:
                {
                  chars = chars.trim();
                  first = chars.charCodeAt(0);
                  counter = 1;
                  length = ++caret;

                  while (caret < eof) {
                    switch (code = body.charCodeAt(caret)) {
                      case OPENBRACES:
                        {
                          counter++;
                          break;
                        }

                      case CLOSEBRACES:
                        {
                          counter--;
                          break;
                        }

                      case FOWARDSLASH:
                        {
                          switch (second = body.charCodeAt(caret + 1)) {
                            // /*, //
                            case STAR:
                            case FOWARDSLASH:
                              {
                                caret = delimited(second, caret, eol, body);
                              }
                          }

                          break;
                        }
                      // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93

                      case OPENBRACKET:
                        {
                          code++;
                        }
                      // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41

                      case OPENPARENTHESES:
                        {
                          code++;
                        }
                      // quote tail delimiter is identical to the head delimiter hence noop,
                      // fallthrough clauses have been shifted to the correct tail delimiter

                      case DOUBLEQUOTE:
                      case SINGLEQUOTE:
                        {
                          while (caret++ < eol) {
                            if (body.charCodeAt(caret) === code) {
                              break;
                            }
                          }
                        }
                    }

                    if (counter === 0) {
                      break;
                    }

                    caret++;
                  }

                  child = body.substring(length, caret);

                  if (first === NULL) {
                    first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
                  }

                  switch (first) {
                    // @at-rule
                    case AT:
                      {
                        if (format > 0) {
                          chars = chars.replace(formatptn, '');
                        }

                        second = chars.charCodeAt(1);

                        switch (second) {
                          case DOCUMENT:
                          case MEDIA:
                          case SUPPORTS:
                          case DASH:
                            {
                              selector = current;
                              break;
                            }

                          default:
                            {
                              selector = array;
                            }
                        }

                        child = compile(current, selector, child, second, depth + 1);
                        length = child.length; // preserve empty @at-rule

                        if (preserve > 0 && length === 0) {
                          length = chars.length;
                        } // execute plugins, @at-rule context


                        if (plugged > 0) {
                          selector = select(array, chars, invert);
                          result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
                          chars = selector.join('');

                          if (result !== void 0) {
                            if ((length = (child = result.trim()).length) === 0) {
                              second = 0;
                              child = '';
                            }
                          }
                        }

                        if (length > 0) {
                          switch (second) {
                            case SUPPORTS:
                              {
                                chars = chars.replace(supportsptn, supports);
                              }

                            case DOCUMENT:
                            case MEDIA:
                            case DASH:
                              {
                                child = chars + '{' + child + '}';
                                break;
                              }

                            case KEYFRAME:
                              {
                                chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
                                child = chars + '{' + child + '}';

                                if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
                                  child = '@' + webkit + child + '@' + child;
                                } else {
                                  child = '@' + child;
                                }

                                break;
                              }

                            default:
                              {
                                child = chars + child;

                                if (id === PAGE) {
                                  child = (out += child, '');
                                }
                              }
                          }
                        } else {
                          child = '';
                        }

                        break;
                      }
                    // selector

                    default:
                      {
                        child = compile(current, select(current, chars, invert), child, id, depth + 1);
                      }
                  }

                  children += child; // reset

                  context = 0;
                  insert = 0;
                  pseudo = 0;
                  format = 0;
                  invert = 0;
                  atrule = 0;
                  chars = '';
                  child = '';
                  code = body.charCodeAt(++caret);
                  break;
                }

              case CLOSEBRACES:
              case SEMICOLON:
                {
                  chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

                  if ((length = chars.length) > 1) {
                    // monkey-patch missing colon
                    if (pseudo === 0) {
                      first = chars.charCodeAt(0); // first character is a letter or dash, buffer has a space character

                      if (first === DASH || first > 96 && first < 123) {
                        length = (chars = chars.replace(' ', ':')).length;
                      }
                    } // execute plugins, property context


                    if (plugged > 0) {
                      if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
                        if ((length = (chars = result.trim()).length) === 0) {
                          chars = '\0\0';
                        }
                      }
                    }

                    first = chars.charCodeAt(0);
                    second = chars.charCodeAt(1);

                    switch (first) {
                      case NULL:
                        {
                          break;
                        }

                      case AT:
                        {
                          if (second === IMPORT || second === CHARSET) {
                            flat += chars + body.charAt(caret);
                            break;
                          }
                        }

                      default:
                        {
                          if (chars.charCodeAt(length - 1) === COLON) {
                            break;
                          }

                          out += property(chars, first, second, chars.charCodeAt(2));
                        }
                    }
                  } // reset


                  context = 0;
                  insert = 0;
                  pseudo = 0;
                  format = 0;
                  invert = 0;
                  chars = '';
                  code = body.charCodeAt(++caret);
                  break;
                }
            }
          } // parse characters


          switch (code) {
            case CARRIAGE:
            case NEWLINE:
              {
                // auto insert semicolon
                if (comment + quote + parentheses + bracket + semicolon === 0) {
                  // valid non-whitespace characters that
                  // may precede a newline
                  switch (peak) {
                    case CLOSEPARENTHESES:
                    case SINGLEQUOTE:
                    case DOUBLEQUOTE:
                    case AT:
                    case TILDE:
                    case GREATERTHAN:
                    case STAR:
                    case PLUS:
                    case FOWARDSLASH:
                    case DASH:
                    case COLON:
                    case COMMA:
                    case SEMICOLON:
                    case OPENBRACES:
                    case CLOSEBRACES:
                      {
                        break;
                      }

                    default:
                      {
                        // current buffer has a colon
                        if (pseudo > 0) {
                          insert = 1;
                        }
                      }
                  }
                } // terminate line comment


                if (comment === FOWARDSLASH) {
                  comment = 0;
                } else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
                  format = 1;
                  chars += '\0';
                } // execute plugins, newline context


                if (plugged * unkwn > 0) {
                  proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
                } // next line, reset column position


                column = 1;
                line++;
                break;
              }

            case SEMICOLON:
            case CLOSEBRACES:
              {
                if (comment + quote + parentheses + bracket === 0) {
                  column++;
                  break;
                }
              }

            default:
              {
                // increment column position
                column++; // current character

                char = body.charAt(caret); // remove comments, escape functions, strings, attributes and prepare selectors

                switch (code) {
                  case TAB:
                  case SPACE:
                    {
                      if (quote + bracket + comment === 0) {
                        switch (tail) {
                          case COMMA:
                          case COLON:
                          case TAB:
                          case SPACE:
                            {
                              char = '';
                              break;
                            }

                          default:
                            {
                              if (code !== SPACE) {
                                char = ' ';
                              }
                            }
                        }
                      }

                      break;
                    }
                  // escape breaking control characters

                  case NULL:
                    {
                      char = '\\0';
                      break;
                    }

                  case FORMFEED:
                    {
                      char = '\\f';
                      break;
                    }

                  case VERTICALTAB:
                    {
                      char = '\\v';
                      break;
                    }
                  // &

                  case AND:
                    {
                      // inverted selector pattern i.e html &
                      if (quote + comment + bracket === 0 && cascade > 0) {
                        invert = 1;
                        format = 1;
                        char = '\f' + char;
                      }

                      break;
                    }
                  // ::p<l>aceholder, l
                  // :read-on<l>y, l

                  case 108:
                    {
                      if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
                        switch (caret - pseudo) {
                          // ::placeholder
                          case 2:
                            {
                              if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
                                pattern = tail;
                              }
                            }
                          // :read-only

                          case 8:
                            {
                              if (trail === READONLY) {
                                pattern = trail;
                              }
                            }
                        }
                      }

                      break;
                    }
                  // :<pattern>

                  case COLON:
                    {
                      if (quote + comment + bracket === 0) {
                        pseudo = caret;
                      }

                      break;
                    }
                  // selectors

                  case COMMA:
                    {
                      if (comment + parentheses + quote + bracket === 0) {
                        format = 1;
                        char += '\r';
                      }

                      break;
                    }
                  // quotes

                  case DOUBLEQUOTE:
                  case SINGLEQUOTE:
                    {
                      if (comment === 0) {
                        quote = quote === code ? 0 : quote === 0 ? code : quote;
                      }

                      break;
                    }
                  // attributes

                  case OPENBRACKET:
                    {
                      if (quote + comment + parentheses === 0) {
                        bracket++;
                      }

                      break;
                    }

                  case CLOSEBRACKET:
                    {
                      if (quote + comment + parentheses === 0) {
                        bracket--;
                      }

                      break;
                    }
                  // functions

                  case CLOSEPARENTHESES:
                    {
                      if (quote + comment + bracket === 0) {
                        parentheses--;
                      }

                      break;
                    }

                  case OPENPARENTHESES:
                    {
                      if (quote + comment + bracket === 0) {
                        if (context === 0) {
                          switch (tail * 2 + trail * 3) {
                            // :matches
                            case 533:
                              {
                                break;
                              }
                            // :global, :not, :nth-child etc...

                            default:
                              {
                                counter = 0;
                                context = 1;
                              }
                          }
                        }

                        parentheses++;
                      }

                      break;
                    }

                  case AT:
                    {
                      if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
                        atrule = 1;
                      }

                      break;
                    }
                  // block/line comments

                  case STAR:
                  case FOWARDSLASH:
                    {
                      if (quote + bracket + parentheses > 0) {
                        break;
                      }

                      switch (comment) {
                        // initialize line/block comment context
                        case 0:
                          {
                            switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                              // //
                              case 235:
                                {
                                  comment = FOWARDSLASH;
                                  break;
                                }
                              // /*

                              case 220:
                                {
                                  length = caret;
                                  comment = STAR;
                                  break;
                                }
                            }

                            break;
                          }
                        // end block comment context

                        case STAR:
                          {
                            if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
                              // /*<!> ... */, !
                              if (body.charCodeAt(length + 2) === 33) {
                                out += body.substring(length, caret + 1);
                              }

                              char = '';
                              comment = 0;
                            }
                          }
                      }
                    }
                } // ignore comment blocks


                if (comment === 0) {
                  // aggressive isolation mode, divide each individual selector
                  // including selectors in :not function but excluding selectors in :global function
                  if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
                    switch (code) {
                      case COMMA:
                      case TILDE:
                      case GREATERTHAN:
                      case PLUS:
                      case CLOSEPARENTHESES:
                      case OPENPARENTHESES:
                        {
                          if (context === 0) {
                            // outside of an isolated context i.e nth-child(<...>)
                            switch (tail) {
                              case TAB:
                              case SPACE:
                              case NEWLINE:
                              case CARRIAGE:
                                {
                                  char = char + '\0';
                                  break;
                                }

                              default:
                                {
                                  char = '\0' + char + (code === COMMA ? '' : '\0');
                                }
                            }

                            format = 1;
                          } else {
                            // within an isolated context, sleep untill it's terminated
                            switch (code) {
                              case OPENPARENTHESES:
                                {
                                  // :globa<l>(
                                  if (pseudo + 7 === caret && tail === 108) {
                                    pseudo = 0;
                                  }

                                  context = ++counter;
                                  break;
                                }

                              case CLOSEPARENTHESES:
                                {
                                  if ((context = --counter) === 0) {
                                    format = 1;
                                    char += '\0';
                                  }

                                  break;
                                }
                            }
                          }

                          break;
                        }

                      case TAB:
                      case SPACE:
                        {
                          switch (tail) {
                            case NULL:
                            case OPENBRACES:
                            case CLOSEBRACES:
                            case SEMICOLON:
                            case COMMA:
                            case FORMFEED:
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE:
                              {
                                break;
                              }

                            default:
                              {
                                // ignore in isolated contexts
                                if (context === 0) {
                                  format = 1;
                                  char += '\0';
                                }
                              }
                          }
                        }
                    }
                  } // concat buffer of characters


                  chars += char; // previous non-whitespace character code

                  if (code !== SPACE && code !== TAB) {
                    peak = code;
                  }
                }
              }
          } // tail character codes


          trail = tail;
          tail = code; // visit every character

          caret++;
        }

        length = out.length; // preserve empty selector

        if (preserve > 0) {
          if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
            if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
              length = current.join(',').length + 2;
            }
          }
        }

        if (length > 0) {
          // cascade isolation mode?
          selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current; // execute plugins, block context

          if (plugged > 0) {
            result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

            if (result !== void 0 && (out = result).length === 0) {
              return flat + out + children;
            }
          }

          out = selector.join(',') + '{' + out + '}';

          if (prefix * pattern !== 0) {
            if (prefix === 2 && !vendor(out, 2)) pattern = 0;

            switch (pattern) {
              // ::read-only
              case READONLY:
                {
                  out = out.replace(readonlyptn, ':' + moz + '$1') + out;
                  break;
                }
              // ::placeholder

              case PLACEHOLDER:
                {
                  out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
                  break;
                }
            }

            pattern = 0;
          }
        }

        return flat + out + children;
      }
      /**
       * Select
       *
       * @param {Array<string>} parent
       * @param {string} current
       * @param {number} invert
       * @return {Array<string>}
       */


      function select(parent, current, invert) {
        var selectors = current.trim().split(selectorptn);
        var out = selectors;
        var length = selectors.length;
        var l = parent.length;

        switch (l) {
          // 0-1 parent selectors
          case 0:
          case 1:
            {
              for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
                out[i] = scope(selector, out[i], invert, l).trim();
              }

              break;
            }
          // >2 parent selectors, nested

          default:
            {
              for (var i = 0, j = 0, out = []; i < length; ++i) {
                for (var k = 0; k < l; ++k) {
                  out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
                }
              }
            }
        }

        return out;
      }
      /**
       * Scope
       *
       * @param {string} parent
       * @param {string} current
       * @param {number} invert
       * @param {number} level
       * @return {string}
       */


      function scope(parent, current, invert, level) {
        var selector = current;
        var code = selector.charCodeAt(0); // trim leading whitespace

        if (code < 33) {
          code = (selector = selector.trim()).charCodeAt(0);
        }

        switch (code) {
          // &
          case AND:
            {
              switch (cascade + level) {
                case 0:
                case 1:
                  {
                    if (parent.trim().length === 0) {
                      break;
                    }
                  }

                default:
                  {
                    return selector.replace(andptn, '$1' + parent.trim());
                  }
              }

              break;
            }
          // :

          case COLON:
            {
              switch (selector.charCodeAt(1)) {
                // g in :global
                case 103:
                  {
                    if (escape > 0 && cascade > 0) {
                      return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
                    }

                    break;
                  }

                default:
                  {
                    // :hover
                    return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
                  }
              }
            }

          default:
            {
              // html &
              if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
                return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
              }
            }
        }

        return parent + selector;
      }
      /**
       * Property
       *
       * @param {string} input
       * @param {number} first
       * @param {number} second
       * @param {number} third
       * @return {string}
       */


      function property(input, first, second, third) {
        var index = 0;
        var out = input + ';';
        var hash = first * 2 + second * 3 + third * 4;
        var cache; // animation: a, n, i characters

        if (hash === 944) {
          return animation(out);
        } else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
          return out;
        } // vendor prefix


        switch (hash) {
          // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
          case 1015:
            {
              // text-shadow/text-align/text-transform, a
              return out.charCodeAt(10) === 97 ? webkit + out + out : out;
            }
          // filter/fill f, i, l

          case 951:
            {
              // filter, t
              return out.charCodeAt(3) === 116 ? webkit + out + out : out;
            }
          // color/column, c, o, l

          case 963:
            {
              // column, n
              return out.charCodeAt(5) === 110 ? webkit + out + out : out;
            }
          // box-decoration-break, b, o, x

          case 1009:
            {
              if (out.charCodeAt(4) !== 100) {
                break;
              }
            }
          // mask, m, a, s
          // clip-path, c, l, i

          case 969:
          case 942:
            {
              return webkit + out + out;
            }
          // appearance: a, p, p

          case 978:
            {
              return webkit + out + moz + out + out;
            }
          // hyphens: h, y, p
          // user-select: u, s, e

          case 1019:
          case 983:
            {
              return webkit + out + moz + out + ms + out + out;
            }
          // background/backface-visibility, b, a, c

          case 883:
            {
              // backface-visibility, -
              if (out.charCodeAt(8) === DASH) {
                return webkit + out + out;
              } // image-set(...)


              if (out.indexOf('image-set(', 11) > 0) {
                return out.replace(imgsrcptn, '$1' + webkit + '$2') + out;
              }

              return out;
            }
          // flex: f, l, e

          case 932:
            {
              if (out.charCodeAt(4) === DASH) {
                switch (out.charCodeAt(5)) {
                  // flex-grow, g
                  case 103:
                    {
                      return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
                    }
                  // flex-shrink, s

                  case 115:
                    {
                      return webkit + out + ms + out.replace('shrink', 'negative') + out;
                    }
                  // flex-basis, b

                  case 98:
                    {
                      return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
                    }
                }
              }

              return webkit + out + ms + out + out;
            }
          // order: o, r, d

          case 964:
            {
              return webkit + out + ms + 'flex' + '-' + out + out;
            }
          // justify-items/justify-content, j, u, s

          case 1023:
            {
              // justify-content, c
              if (out.charCodeAt(8) !== 99) {
                break;
              }

              cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
              return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
            }
          // cursor, c, u, r

          case 1005:
            {
              return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
            }
          // writing-mode, w, r, i

          case 1000:
            {
              cache = out.substring(13).trim();
              index = cache.indexOf('-') + 1;

              switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                // vertical-lr
                case 226:
                  {
                    cache = out.replace(writingptn, 'tb');
                    break;
                  }
                // vertical-rl

                case 232:
                  {
                    cache = out.replace(writingptn, 'tb-rl');
                    break;
                  }
                // horizontal-tb

                case 220:
                  {
                    cache = out.replace(writingptn, 'lr');
                    break;
                  }

                default:
                  {
                    return out;
                  }
              }

              return webkit + out + ms + cache + out;
            }
          // position: sticky

          case 1017:
            {
              if (out.indexOf('sticky', 9) === -1) {
                return out;
              }
            }
          // display(flex/inline-flex/inline-box): d, i, s

          case 975:
            {
              index = (out = input).length - 10;
              cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

              switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
                // inline-
                case 203:
                  {
                    // inline-box
                    if (cache.charCodeAt(8) < 111) {
                      break;
                    }
                  }
                // inline-box/sticky

                case 115:
                  {
                    out = out.replace(cache, webkit + cache) + ';' + out;
                    break;
                  }
                // inline-flex
                // flex

                case 207:
                case 102:
                  {
                    out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
                  }
              }

              return out + ';';
            }
          // align-items, align-center, align-self: a, l, i, -

          case 938:
            {
              if (out.charCodeAt(5) === DASH) {
                switch (out.charCodeAt(6)) {
                  // align-items, i
                  case 105:
                    {
                      cache = out.replace('-items', '');
                      return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
                    }
                  // align-self, s

                  case 115:
                    {
                      return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
                    }
                  // align-content

                  default:
                    {
                      return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
                    }
                }
              }

              break;
            }
          // min/max

          case 973:
          case 989:
            {
              // min-/max- height/width/block-size/inline-size
              if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
                break;
              }
            }
          // height/width: min-content / width: max-content

          case 931:
          case 953:
            {
              if (dimensionptn.test(input) === true) {
                // stretch
                if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
              }

              break;
            }
          // transform, transition: t, r, a

          case 962:
            {
              out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out; // transitions

              if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
                return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
              }

              break;
            }
        }

        return out;
      }
      /**
       * Vendor
       *
       * @param {string} content
       * @param {number} context
       * @return {boolean}
       */


      function vendor(content, context) {
        var index = content.indexOf(context === 1 ? ':' : '{');
        var key = content.substring(0, context !== 3 ? index : 10);
        var value = content.substring(index + 1, content.length - 1);
        return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
      }
      /**
       * Supports
       *
       * @param {string} match
       * @param {string} group
       * @return {string}
       */


      function supports(match, group) {
        var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));
        return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
      }
      /**
       * Animation
       *
       * @param {string} input
       * @return {string}
       */


      function animation(input) {
        var length = input.length;
        var index = input.indexOf(':', 9) + 1;
        var declare = input.substring(0, index).trim();
        var out = input.substring(index, length - 1).trim();

        switch (input.charCodeAt(9) * keyed) {
          case 0:
            {
              break;
            }
          // animation-*, -

          case DASH:
            {
              // animation-name, n
              if (input.charCodeAt(10) !== 110) {
                break;
              }
            }
          // animation/animation-name

          default:
            {
              // split in case of multiple animations
              var list = out.split((out = '', animationptn));

              for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
                var value = list[i];
                var items = value.split(propertiesptn);

                while (value = items[index]) {
                  var peak = value.charCodeAt(0);

                  if (keyed === 1 && ( // letters
                  peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE || // dash but not in sequence i.e --
                  peak === DASH && value.charCodeAt(1) !== DASH)) {
                    // not a number/function
                    switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
                      case 1:
                        {
                          switch (value) {
                            // not a valid reserved keyword
                            case 'infinite':
                            case 'alternate':
                            case 'backwards':
                            case 'running':
                            case 'normal':
                            case 'forwards':
                            case 'both':
                            case 'none':
                            case 'linear':
                            case 'ease':
                            case 'ease-in':
                            case 'ease-out':
                            case 'ease-in-out':
                            case 'paused':
                            case 'reverse':
                            case 'alternate-reverse':
                            case 'inherit':
                            case 'initial':
                            case 'unset':
                            case 'step-start':
                            case 'step-end':
                              {
                                break;
                              }

                            default:
                              {
                                value += key;
                              }
                          }
                        }
                    }
                  }

                  items[index++] = value;
                }

                out += (i === 0 ? '' : ',') + items.join(' ');
              }
            }
        }

        out = declare + out + ';';
        if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;
        return out;
      }
      /**
       * Isolate
       *
       * @param {Array<string>} current
       */


      function isolate(current) {
        for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
          // split individual elements in a selector i.e h1 h2 === [h1, h2]
          var elements = current[i].split(elementptn);
          var out = '';

          for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
            // empty element
            if ((size = (element = elements[j]).length) === 0 && l > 1) {
              continue;
            }

            tail = out.charCodeAt(out.length - 1);
            code = element.charCodeAt(0);
            padding = '';

            if (j !== 0) {
              // determine if we need padding
              switch (tail) {
                case STAR:
                case TILDE:
                case GREATERTHAN:
                case PLUS:
                case SPACE:
                case OPENPARENTHESES:
                  {
                    break;
                  }

                default:
                  {
                    padding = ' ';
                  }
              }
            }

            switch (code) {
              case AND:
                {
                  element = padding + nscopealt;
                }

              case TILDE:
              case GREATERTHAN:
              case PLUS:
              case SPACE:
              case CLOSEPARENTHESES:
              case OPENPARENTHESES:
                {
                  break;
                }

              case OPENBRACKET:
                {
                  element = padding + element + nscopealt;
                  break;
                }

              case COLON:
                {
                  switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
                    // :global
                    case 530:
                      {
                        if (escape > 0) {
                          element = padding + element.substring(8, size - 1);
                          break;
                        }
                      }
                    // :hover, :nth-child(), ...

                    default:
                      {
                        if (j < 1 || elements[j - 1].length < 1) {
                          element = padding + nscopealt + element;
                        }
                      }
                  }

                  break;
                }

              case COMMA:
                {
                  padding = '';
                }

              default:
                {
                  if (size > 1 && element.indexOf(':') > 0) {
                    element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
                  } else {
                    element = padding + element + nscopealt;
                  }
                }
            }

            out += element;
          }

          selector[i] = out.replace(formatptn, '').trim();
        }

        return selector;
      }
      /**
       * Proxy
       *
       * @param {number} context
       * @param {string} content
       * @param {Array<string>} selectors
       * @param {Array<string>} parents
       * @param {number} line
       * @param {number} column
       * @param {number} length
       * @param {number} id
       * @param {number} depth
       * @param {number} at
       * @return {(string|void|*)}
       */


      function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
        for (var i = 0, out = content, next; i < plugged; ++i) {
          switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
            case void 0:
            case false:
            case true:
            case null:
              {
                break;
              }

            default:
              {
                out = next;
              }
          }
        }

        if (out !== content) {
          return out;
        }
      }
      /**
       * @param {number} code
       * @param {number} index
       * @param {number} length
       * @param {string} body
       * @return {number}
       */


      function delimited(code, index, length, body) {
        for (var i = index + 1; i < length; ++i) {
          switch (body.charCodeAt(i)) {
            // /*
            case FOWARDSLASH:
              {
                if (code === STAR) {
                  if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                    return i + 1;
                  }
                }

                break;
              }
            // //

            case NEWLINE:
              {
                if (code === FOWARDSLASH) {
                  return i + 1;
                }
              }
          }
        }

        return i;
      }
      /**
       * Minify
       *
       * @param {(string|*)} output
       * @return {string}
       */


      function minify(output) {
        return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
      }
      /**
       * Use
       *
       * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
       */


      function use(plugin) {
        switch (plugin) {
          case void 0:
          case null:
            {
              plugged = plugins.length = 0;
              break;
            }

          default:
            {
              if (typeof plugin === 'function') {
                plugins[plugged++] = plugin;
              } else if (_typeof(plugin) === 'object') {
                for (var i = 0, length = plugin.length; i < length; ++i) {
                  use(plugin[i]);
                }
              } else {
                unkwn = !!plugin | 0;
              }
            }
        }

        return use;
      }
      /**
       * Set
       *
       * @param {*} options
       */


      function set(options) {
        for (var name in options) {
          var value = options[name];

          switch (name) {
            case 'keyframe':
              keyed = value | 0;
              break;

            case 'global':
              escape = value | 0;
              break;

            case 'cascade':
              cascade = value | 0;
              break;

            case 'compress':
              compress = value | 0;
              break;

            case 'semicolon':
              semicolon = value | 0;
              break;

            case 'preserve':
              preserve = value | 0;
              break;

            case 'prefix':
              should = null;

              if (!value) {
                prefix = 0;
              } else if (typeof value !== 'function') {
                prefix = 1;
              } else {
                prefix = 2;
                should = value;
              }

          }
        }

        return set;
      }
      /**
       * Stylis
       *
       * @param {string} selector
       * @param {string} input
       * @return {*}
       */


      function stylis(selector, input) {
        if (this !== void 0 && this.constructor === stylis) {
          return factory(selector);
        } // setup


        var ns = selector;
        var code = ns.charCodeAt(0); // trim leading whitespace

        if (code < 33) {
          code = (ns = ns.trim()).charCodeAt(0);
        } // keyframe/animation namespace


        if (keyed > 0) {
          key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
        } // reset, used to assert if a plugin is moneky-patching the return value


        code = 1; // cascade/isolate

        if (cascade === 1) {
          nscope = ns;
        } else {
          nscopealt = ns;
        }

        var selectors = [nscope];
        var result; // execute plugins, pre-process context

        if (plugged > 0) {
          result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

          if (result !== void 0 && typeof result === 'string') {
            input = result;
          }
        } // build


        var output = compile(array, selectors, input, 0, 0); // execute plugins, post-process context

        if (plugged > 0) {
          result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0); // bypass minification

          if (result !== void 0 && typeof (output = result) !== 'string') {
            code = 0;
          }
        } // reset


        key = '';
        nscope = '';
        nscopealt = '';
        pattern = 0;
        line = 1;
        column = 1;
        return compress * code === 0 ? output : minify(output);
      }

      stylis['use'] = use;
      stylis['set'] = set;

      if (options !== void 0) {
        set(options);
      }

      return stylis;
    });
  });

  var ComponentStyle = function () {
    function ComponentStyle(rules, selector) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.selector = selector;
    }

    _createClass(ComponentStyle, [{
      key: "generateAndInject",
      value: function generateAndInject() {
        if (!styleSheet.injected) styleSheet.inject();
        var flatCSS = flatten(this.rules).join('');
        var cssString = this.selector ? "".concat(this.selector, " { ").concat(flatCSS, " }") : flatCSS;
        var css = stylis('', cssString, false, false);
        styleSheet.insert(css, {
          global: true
        });
      }
    }]);

    return ComponentStyle;
  }();
  /**
   * lodash 4.1.3 (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used for built-in method references. */

  var objectProto$1 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      object[key] = value;
    }
  }
  /**
   * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
   *
   * @private
   * @param {Array} props The property identifiers.
   * @param {Array} values The property values.
   * @param {Function} assignFunc The function to assign values.
   * @returns {Object} Returns the new object.
   */


  function baseZipObject(props, values, assignFunc) {
    var index = -1,
        length = props.length,
        valsLength = values.length,
        result = {};

    while (++index < length) {
      var value = index < valsLength ? values[index] : undefined;
      assignFunc(result, props[index], value);
    }

    return result;
  }
  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property identifiers and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 0.4.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */


  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'user': 'fred' };
   * var other = { 'user': 'fred' };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */


  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var lodash_zipobject = zipObject;

  function normalizeProps() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (Array.isArray(props)) {
      return lodash_zipobject(props);
    } else {
      return props;
    }
  }

  var _styledComponent = function _styledComponent(ComponentStyle) {
    var createStyledComponent = function createStyledComponent(target, rules, props) {
      var componentStyle = new ComponentStyle(rules);
      var currentProps = normalizeProps(props);
      var prevProps = normalizeProps(target.props);
      var StyledComponent = {
        inject: {
          $theme: {
            "default": function _default() {
              return function () {
                return {};
              };
            }
          }
        },
        props: _objectSpread2({
          value: null
        }, currentProps, {}, prevProps),
        data: function data() {
          return {
            localValue: this.value
          };
        },
        render: function render(createElement) {
          var _this = this;

          var children = [];

          for (var slot in this.$slots) {
            if (slot === 'default') {
              children.push(this.$slots[slot]);
            } else {
              children.push(createElement('template', {
                slot: slot
              }, this.$slots[slot]));
            }
          }

          return createElement(target, {
            "class": [this.generatedClassName],
            props: this.$props,
            domProps: {
              value: this.localValue
            },
            on: _objectSpread2({}, this.$listeners, {
              input: function input(event) {
                if (event && event.target) {
                  _this.localValue = event.target.value;
                }
              }
            }),
            scopedSlots: this.$scopedSlots
          }, children);
        },
        methods: {
          generateAndInjectStyles: function generateAndInjectStyles(componentProps) {
            return componentStyle.generateAndInjectStyles(componentProps);
          }
        },
        computed: {
          generatedClassName: function generatedClassName() {
            var componentProps = _objectSpread2({
              theme: this.theme
            }, this.$props);

            return this.generateAndInjectStyles(componentProps);
          },
          theme: function theme() {
            return this.$theme();
          }
        },
        watch: {
          value: function value(newValue) {
            this.localValue = newValue;
          },
          localValue: function localValue() {
            this.$emit('input', this.localValue);
          }
        },
        extend: function extend(cssRules) {
          for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            interpolations[_key - 1] = arguments[_key];
          }

          var extendedRules = css.apply(void 0, [cssRules].concat(interpolations));
          return createStyledComponent(target, rules.concat(extendedRules), props);
        },
        withComponent: function withComponent(newTarget) {
          return createStyledComponent(newTarget, rules, props);
        }
      };
      return StyledComponent;
    };

    return createStyledComponent;
  };

  var _componentStyle = function _componentStyle(nameGenerator) {
    var inserted = {};

    var ComponentStyle = function () {
      function ComponentStyle(rules) {
        _classCallCheck(this, ComponentStyle);

        this.rules = rules;
        stylis.set({
          keyframe: false
        });
        if (!styleSheet.injected) styleSheet.inject();
        this.insertedRule = styleSheet.insert('');
      }

      _createClass(ComponentStyle, [{
        key: "generateAndInjectStyles",
        value: function generateAndInjectStyles(executionContext) {
          var flatCSS = flatten(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, '');
          var hash = hashStr(flatCSS);

          if (!inserted[hash]) {
            var selector = nameGenerator(hash);
            inserted[hash] = selector;
            var css = stylis(".".concat(selector), flatCSS);
            this.insertedRule.appendRule(css);
          }

          return inserted[hash];
        }
      }]);

      return ComponentStyle;
    }();

    return ComponentStyle;
  };

  var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  function isTag(target) {
    if (typeof target === 'string') {
      return domElements.indexOf(target) !== -1;
    }
  }

  function isVueComponent(target) {
    return target && (typeof target.render === 'function' || typeof target.template === 'string');
  }

  function isStyledComponent(target) {
    return target && target.methods && typeof target.methods.generateAndInjectStyles === 'function';
  }

  function isValidElementType(target) {
    return isStyledComponent(target) || isVueComponent(target) || isTag(target);
  }

  var _styled = function _styled(createStyledComponent) {
    var styled = function styled(tagName) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isValidElementType(tagName)) {
        throw new Error(tagName + ' is not allowed for styled tag type.');
      }

      return function (cssRules) {
        for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          interpolations[_key - 1] = arguments[_key];
        }

        return createStyledComponent(tagName, css.apply(void 0, [cssRules].concat(interpolations)), props);
      };
    };

    domElements.forEach(function (domElement) {
      styled[domElement] = styled(domElement);
    });
    return styled;
  };

  var styled = _styled(_styledComponent(_componentStyle(generateAlphabeticName)));

  if (typeof Object.assign !== "function") {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) {

        if (target === null || target === undefined) {
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      },
      writable: true,
      configurable: true
    });
  }

  var NIWSTheme = {
    TASK: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444"
      },
      background: {
        color: "#CBE6F7",
        hover: "#51BAF4",
        focus: "#CBE6F7"
      },
      border: {
        color: "2px solid #CBE6F7",
        hover: "2px solid #51BAF4",
        focus: "2px solid #51BAF4"
      }
    },
    REWORK: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444"
      },
      background: {
        color: "#FFC364",
        hover: "#ED9406",
        focus: "#FFC364"
      },
      border: {
        color: "2px solid #FFC364",
        hover: "2px solid #ED9406",
        focus: "2px solid #ED9406"
      }
    },
    START: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444"
      },
      background: {
        color: "#B7F7DC",
        hover: "#2EE591",
        focus: "#B7F7DC"
      },
      border: {
        color: "2px solid #B7F7DC",
        hover: "2px solid #2EE591",
        focus: "2px solid #2EE591"
      }
    },
    COMPLETE: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444"
      },
      background: {
        color: "#E0CEF4",
        hover: "#735D87",
        focus: "#E0CEF4"
      },
      border: {
        color: "2px solid #E0CEF4",
        hover: "2px solid #735D87",
        focus: "2px solid #735D87"
      }
    },
    CANCEL: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444"
      },
      background: {
        color: "#DDA8A8",
        hover: "#964545",
        focus: "#DDA8A8"
      },
      border: {
        color: "2px solid #DDA8A8",
        hover: "2px solid #964545",
        focus: "2px solid #964545"
      }
    }
  };
  var TextTheme = {
    Normal: {
      color: "#444"
    },
    Dark: {
      color: "#e0e0e0"
    },
    LightBlue: {
      color: "#41BEE8"
    }
  };
  var Theme = {
    Light: {
      color: {
        color: "#222",
        hover: "#222",
        focus: "#222"
      },
      background: {
        color: "#f8f9fa",
        hover: "#DDE4E9",
        focus: "#f8f9fa"
      },
      border: {
        color: "#DDE4E9",
        hover: "#DDE4E9",
        focus: "#DDE4E9"
      }
    },
    Secondary: {
      color: {
        color: "#fff",
        hover: "#fff",
        focus: "#fff"
      },
      background: {
        color: "#6c757d",
        hover: "#525D67",
        focus: "#6c757d"
      },
      border: {
        color: "#525D67",
        hover: "#525D67",
        focus: "#525D67"
      }
    },
    Dark: {
      color: {
        color: "#fff",
        hover: "#fff",
        focus: "#fff"
      },
      background: {
        color: "#343a40",
        hover: "#23272b",
        focus: "#343a40"
      },
      border: {
        color: "#4F575E",
        hover: "#4F575E",
        focus: "#4F575E"
      }
    },
    Primary: {
      color: {
        color: "#fff",
        focus: "#fff",
        hover: "#fff"
      },
      background: {
        color: "#4357AD",
        hover: "#2940A1",
        focus: "#4357AD"
      },
      border: {
        color: "#2940A1",
        hover: "#2940A1",
        focus: "#2940A1"
      }
    },
    Info: {
      color: {
        color: "#222",
        focus: "#222",
        hover: "#222"
      },
      background: {
        color: "#58B0AE",
        hover: "#36938F",
        focus: "#58B0AE"
      },
      border: {
        color: "#36938F",
        hover: "#36938F",
        focus: "#36938F"
      }
    },
    Warning: {
      color: {
        color: "#222",
        focus: "#222",
        hover: "#222"
      },
      background: {
        color: "#FFb354",
        hover: "#EB972D",
        focus: "#FFb354"
      },
      border: {
        color: "#EB972D",
        hover: "#EB972D",
        focus: "#EB972D"
      }
    },
    Danger: {
      color: {
        color: "#fff",
        focus: "#fff",
        hover: "#fff"
      },
      background: {
        color: "#C40005",
        hover: "#9E0004",
        focus: "#C40005"
      },
      border: {
        color: "#9E0004",
        hover: "#9E0004",
        focus: "#9E0004"
      }
    },
    Success: {
      color: {
        color: "#fff",
        focus: "#fff",
        hover: "#fff"
      },
      background: {
        color: "#0B7C40",
        hover: "#00642E",
        focus: "#0B7C40"
      },
      border: {
        color: "#00642E",
        hover: "#00642E",
        focus: "#00642E"
      }
    },
    LightBlue: {
      color: {
        color: "#222",
        focus: "#222",
        hover: "#222"
      },
      background: {
        color: "#41BEE8",
        hover: "#38a5ca",
        focus: "#38a5ca"
      },
      border: {
        color: "#38a5ca",
        hover: "#38a5ca",
        focus: "#38a5ca"
      }
    }
  };
  var AlertTheme = {
    Warning: Theme["Warning"],
    Danger: Theme["Danger"],
    Success: Theme["Success"],
    Info: Theme["Info"]
  };
  var Theme = Object.assign(Theme, NIWSTheme, AlertTheme);
  var Theme$1 = Theme;

  function _taggedTemplateLiteral$1(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral$1(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont, Roboto,\n    \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral$1(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont, Roboto,\n    \"Helvetica Neue\", Arial, sans-serif;\n  font-size: ", "px;\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral$1(["\n  margin-top: 0;\n  font-weight: ", ";\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: ", ";\n  ", "\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var titleProps = {
    dark: Boolean,
    bold: Boolean,
    flavor: String,
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      }
    }
  };
  var PageTitle = styled("h1", titleProps)(_templateObject(), function (props) {
    return props.bold ? "bold" : 500;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color + "!important" : "" : "";
  });
  var SectionTitle = PageTitle.withComponent("h2", titleProps);
  var SubSectionTitle = PageTitle.withComponent("h3", titleProps);
  var CategoryTitle = PageTitle.withComponent("h4", titleProps);
  var SubCategoryTitle = PageTitle.withComponent("h5", titleProps);
  var Keyword = PageTitle.withComponent("h6", titleProps);
  var props = {
    size: {
      type: Number,
      default: 15
    },
    dark: Boolean,
    bold: Boolean,
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      }
    },
    flavor: String
  };
  var TextContent = styled("span", props)(_templateObject2(), function (props) {
    return props.size < 14 ? 14 : props.size > 16 ? 16 : props.size;
  }, function (props) {
    return props.bold ? "bold" : 500;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
  });
  var Paragraph = TextContent.withComponent("p", props);
  var SmallText = styled("small", props)(_templateObject3(), function (props) {
    return props.bold ? "bold" : 500;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
  });
  var NLabel = TextContent.withComponent("label", props);
  var WebLink = TextContent.withComponent("a", props);

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }
  /* script */


  var __vue_script__ = TextContent;
  /* template */

  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-07cfd3a8_0", {
      source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      map: {
        "version": 3,
        "sources": [],
        "names": [],
        "mappings": "",
        "file": "Typography.vue"
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = undefined;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

  var components = [{
    label: "PageTitle",
    component: PageTitle
  }, {
    label: "SectionTitle",
    component: SectionTitle
  }, {
    label: "SubSectionTitle",
    component: SubSectionTitle
  }, {
    label: "CategoryTitle",
    component: CategoryTitle
  }, {
    label: "SubCategoryTitle",
    component: SubCategoryTitle
  }, {
    label: "Keyword",
    component: Keyword
  }, {
    label: "TextContent",
    component: TextContent
  }, {
    label: "Paragraph",
    component: Paragraph
  }, {
    label: "SmallText",
    component: SmallText
  }, {
    label: "NLabel",
    component: NLabel
  }];
  var GlobalVue = null;

  var _loop = function _loop() {
    var component_obj = _components[_i]; // install function executed by Vue.use()

    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()


    var plugin = {
      install: install
    }; // To auto-install when vue is found
    // eslint-disable-next-line no-redeclare

    /* global window, global */

    if (typeof window !== "undefined") {
      GlobalVue = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue = global.Vue;
    }

    if (GlobalVue) {
      GlobalVue.use(plugin);
    } // Inject install function into component - allows component
    // to be registered via Vue.use() as well as Vue.component()


    component_obj.component.install = install;
  };

  for (var _i = 0, _components = components; _i < _components.length; _i++) {
    _loop();
  } // Export component by default

  function _taggedTemplateLiteral$2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral$2(["\n  width: 100%;\n  height: 35px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px 5px 2px 5px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\n  &:focus {\n    border-color: 1px solid\n      ", ";\n    outline: none;\n    box-shadow: 0px 0px 0px 3px\n      ", ";\n  }\n  &:read-only {\n    background-color: #e9e9e9;\n    color: #747474;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    color: #747474;\n    background-color: #e2e2e2;\n  }\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$1 = {
    flavor: {
      type: String,
      default: "LightBlue"
    },
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme$1;
      }
    }
  };
  var NInput = styled("input", props$1)(_templateObject$1(), function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#04040480";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].border.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].border.color ? props.defaultTheme[props.flavor].border.color : "#10d2ff80";
  });
  var VueInput = {
    name: "vue-input",
    components: {
      NInput: NInput,
      NLabel: NLabel
    },
    data: function data() {
      return {
        internalValue: ""
      };
    },
    props: {
      flavor: {
        type: String,
        default: "LightBlue"
      },
      autocomplete: {
        type: String,
        default: "off"
      },
      value: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ""
      },
      pattern: {
        type: String,
        default: ""
      },
      multiple: {
        type: Boolean,
        default: false
      },
      min: {
        type: String,
        default: ""
      },
      max: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        required: true
      },
      inputType: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      labelFlavor: {
        type: String,
        default: ""
      },
      labelDark: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        required: true
      },
      autofocus: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: function value(newVal, oldVal) {
        this.internalValue = newVal;
      }
    },
    mounted: function mounted() {
      var self = this;

      if (typeof self.$parent !== "undefined") {
        if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};
        self.$parent.$refs.inputs[self.name] = self;
      }
    },
    methods: {
      onInput: function onInput($e) {
        var self = this;
        this.internalValue = $e;
        self.$emit("input", this.internalValue);
      },
      onChange: function onChange() {
        this.$emit("change", this.internalValue);
      },
      onFocus: function onFocus() {
        this.$emit("focus");
      }
    }
  };

  function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE$1 = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$1(context) {
    return function (id, style) {
      return addStyle$1(id, style);
    };
  }

  var HEAD$1;
  var styles$1 = {};

  function addStyle$1(id, css) {
    var group = isOldIE$1 ? css.media || 'default' : id;
    var style = styles$1[group] || (styles$1[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD$1 === undefined) {
          HEAD$1 = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD$1.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }
  /* script */


  var __vue_script__$1 = VueInput;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "input-container"
    }, [_c("n-label", {
      attrs: {
        dark: _vm.labelDark,
        flavor: _vm.labelFlavor,
        for: _vm.name
      }
    }, [_vm._v("\n    " + _vm._s(_vm.label) + "\n  ")]), _vm._v(" "), _c("n-input", {
      attrs: {
        flavor: _vm.flavor,
        id: _vm.name,
        readonly: _vm.readonly,
        placeholder: _vm.placeholder,
        pattern: _vm.pattern,
        multiple: _vm.multiple,
        min: _vm.min,
        max: _vm.max,
        name: _vm.name,
        type: _vm.inputType,
        required: _vm.required,
        disabled: _vm.disabled,
        autofocus: _vm.autofocus,
        autocomplete: _vm.autocomplete,
        value: _vm.internalValue
      },
      on: {
        input: _vm.onInput,
        change: _vm.onChange,
        focus: _vm.onFocus,
        keyup: function keyup($event) {
          return _vm.$emit("keyup", $event);
        }
      }
    })], 1);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-c703c74e_0", {
      source: "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n",
      map: {
        "version": 3,
        "sources": ["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\StyledHTML\\Input\\src\\Input.vue"],
        "names": [],
        "mappings": ";AAqMA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA",
        "file": "Input.vue",
        "sourcesContent": ["<template>\r\n  <div class=\"input-container\">\r\n    <n-label :dark=\"labelDark\" :flavor=\"labelFlavor\" :for=\"name\">\r\n      {{ label }}\r\n    </n-label>\r\n    <n-input\r\n      :flavor=\"flavor\"\r\n      :id=\"name\"\r\n      :readonly=\"readonly\"\r\n      :placeholder=\"placeholder\"\r\n      :pattern=\"pattern\"\r\n      :multiple=\"multiple\"\r\n      :min=\"min\"\r\n      :max=\"max\"\r\n      :name=\"name\"\r\n      :type=\"inputType\"\r\n      :required=\"required\"\r\n      :disabled=\"disabled\"\r\n      :autofocus=\"autofocus\"\r\n      :autocomplete=\"autocomplete\"\r\n      :value=\"internalValue\"\r\n      @input=\"onInput\"\r\n      @change=\"onChange\"\r\n      @focus=\"onFocus\"\r\n      @keyup=\"$emit('keyup', $event)\"\r\n    ></n-input>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: \"LightBlue\",\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function () {\r\n      return Theme;\r\n    },\r\n  },\r\n};\r\nexport const NInput = styled(\"input\", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: 1px solid\r\n      ${(props) =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#04040480\"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${(props) =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#10d2ff80\"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueInput = {\r\n  name: \"vue-input\",\r\n  components: { NInput, NLabel },\r\n  data: function () {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\",\r\n    },\r\n    autocomplete: {\r\n      type: String,\r\n      default: \"off\",\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    pattern: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    min: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    max: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    inputType: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    },\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (typeof self.$parent !== \"undefined\") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n  },\r\n  methods: {\r\n    onInput($e) {\r\n      var self = this;\r\n      this.internalValue = $e;\r\n      self.$emit(\"input\", this.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit(\"focus\");\r\n    },\r\n  },\r\n};\r\nexport default VueInput;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n"]
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = normalizeComponent$1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector$1, undefined, undefined);

  var components$1 = [{
    label: "VueInput",
    component: VueInput
  }, {
    label: "NInput",
    component: NInput
  }];
  var GlobalVue$1 = null;

  var _loop$1 = function _loop() {
    var component_obj = _components$1[_i$1]; // install function executed by Vue.use()

    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()


    var plugin = {
      install: install
    }; // To auto-install when vue is found
    // eslint-disable-next-line no-redeclare

    /* global window, global */

    if (typeof window !== "undefined") {
      GlobalVue$1 = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue$1 = global.Vue;
    }

    if (GlobalVue$1) {
      GlobalVue$1.use(plugin);
    } // Inject install function into component - allows component
    // to be registered via Vue.use() as well as Vue.component()


    component_obj.component.install = install;
  };

  for (var _i$1 = 0, _components$1 = components$1; _i$1 < _components$1.length; _i$1++) {
    _loop$1();
  } // Export component by default

  //
  var FormInput = {
    components: {
      SmallText: SmallText,
      VueInput: VueInput
    },
    tag: "what",
    data: function data() {
      return {
        internalValue: ""
      };
    },
    watch: {
      value: function value(newVal) {
        if (newVal != this.internalValue) {
          this.internalValue = newVal;
        }
      }
    },
    mounted: function mounted() {
      this.internalValue = this.value;
    },
    props: {
      name: String,
      inputType: String,
      label: String,
      required: Boolean,
      value: [String, Number],
      placeholder: String,
      disabled: {
        type: Boolean,
        default: false
      },
      errors: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    methods: {
      computeFlavor: function computeFlavor(el) {
        if (el.indexOf("Text") != -1) {
          return "Danger";
        } else {
          if (this.errors.length > 0) {
            return "Danger";
          }

          return "LightBlue";
        }
      },
      onChange: function onChange($e) {
        this.internalValue = $e;
        this.$emit("change", $e);
      },
      onInput: function onInput($e) {
        this.internalValue = $e;
        this.$emit("input", $e);
      }
    }
  };

  function normalizeComponent$2(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE$2 = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$2(context) {
    return function (id, style) {
      return addStyle$2(id, style);
    };
  }

  var HEAD$2;
  var styles$2 = {};

  function addStyle$2(id, css) {
    var group = isOldIE$2 ? css.media || 'default' : id;
    var style = styles$2[group] || (styles$2[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD$2 === undefined) {
          HEAD$2 = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD$2.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  /* script */
  const __vue_script__$2 = FormInput;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c("vue-input", {
          attrs: {
            flavor: _vm.computeFlavor("field"),
            name: _vm.name,
            "input-type": _vm.inputType,
            required: _vm.required,
            label: _vm.label,
            disabled: _vm.disabled,
            placeholder: _vm.placeholder
          },
          on: {
            change: _vm.onChange,
            input: _vm.onInput,
            keyup: function($event) {
              return _vm.$emit("keyup", $event)
            }
          },
          model: {
            value: _vm.internalValue,
            callback: function($$v) {
              _vm.internalValue = $$v;
            },
            expression: "internalValue"
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-error-message" },
          _vm._l(_vm.errors, function(error) {
            return _c(
              "small-text",
              {
                key: "field-error-" + error,
                attrs: { flavor: _vm.computeFlavor("fieldText") }
              },
              [_vm._v(_vm._s(error))]
            )
          }),
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-915bb754_0", { source: "\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n  display: flex;\r\n  flex-direction: column;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\FormInput.vue"],"names":[],"mappings":";AAyFA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;AACA","file":"FormInput.vue","sourcesContent":["<template>\r\n  <div>\r\n    <vue-input\r\n      :flavor=\"computeFlavor('field')\"\r\n      :name=\"name\"\r\n      :input-type=\"inputType\"\r\n      :required=\"required\"\r\n      :label=\"label\"\r\n      :disabled=\"disabled\"\r\n      v-model=\"internalValue\"\r\n      :placeholder=\"placeholder\"\r\n      @change=\"onChange\"\r\n      @input=\"onInput\"\r\n      @keyup=\"$emit('keyup', $event)\"\r\n    ></vue-input>\r\n    <div class=\"form-error-message\">\r\n      <small-text\r\n        :flavor=\"computeFlavor('fieldText')\"\r\n        v-for=\"error in errors\"\r\n        :key=\"`field-error-${error}`\"\r\n        >{{ error }}</small-text\r\n      >\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nimport { SmallText } from \"@IntusFacultas/typography\";\r\nimport { VueInput } from \"@IntusFacultas/input\";\r\nexport const FormInput = {\r\n  components: { SmallText, VueInput },\r\n  tag: \"what\",\r\n  data() {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal) {\r\n      if (newVal != this.internalValue) {\r\n        this.internalValue = newVal;\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    this.internalValue = this.value;\r\n  },\r\n  props: {\r\n    name: String,\r\n    inputType: String,\r\n    label: String,\r\n    required: Boolean,\r\n    value: [String, Number],\r\n    placeholder: String,\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    errors: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    computeFlavor(el) {\r\n      if (el.indexOf(\"Text\") != -1) {\r\n        return \"Danger\";\r\n      } else {\r\n        if (this.errors.length > 0) {\r\n          return \"Danger\";\r\n        }\r\n        return \"LightBlue\";\r\n      }\r\n    },\r\n    onChange($e) {\r\n      this.internalValue = $e;\r\n      this.$emit(\"change\", $e);\r\n    },\r\n    onInput($e) {\r\n      this.internalValue = $e;\r\n      this.$emit(\"input\", $e);\r\n    },\r\n  },\r\n};\r\nexport default FormInput;\r\n</script>\r\n\r\n<style>\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = normalizeComponent$2(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector$2,
      undefined,
      undefined
    );

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var RawFormInputContainer = styled.div(_templateObject$2());
  var RawFormInput = {
    components: {
      SmallText: SmallText,
      RawFormInputContainer: RawFormInputContainer
    },
    data: function data() {
      return {
        internalValue: ""
      };
    },
    watch: {
      value: function value(newVal) {
        if (newVal != this.internalValue) {
          this.internalValue = newVal;
        }
      }
    },
    mounted: function mounted() {
      this.internalValue = this.value;
    },
    props: {
      errors: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    methods: {
      computeFlavor: function computeFlavor() {
        if (this.errors.length > 0) {
          return "Danger";
        }

        return "LightBlue";
      }
    }
  };

  /* script */
  const __vue_script__$3 = RawFormInput;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "raw-form-input-container",
      [
        _vm._t("default"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-error-message" },
          _vm._l(_vm.errors, function(error, index) {
            return _c(
              "small-text",
              {
                key: "field-error-" + index,
                attrs: { flavor: _vm.computeFlavor("fieldText") }
              },
              [_vm._v(_vm._s(error))]
            )
          }),
          1
        )
      ],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = function (inject) {
      if (!inject) return
      inject("data-v-ec4288ca_0", { source: "\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\RawFormInput.vue"],"names":[],"mappings":";AAyDA;EACA,gBAAA;EACA,cAAA;AACA","file":"RawFormInput.vue","sourcesContent":["<template>\r\n  <raw-form-input-container>\r\n    <slot></slot>\r\n    <div class=\"form-error-message\">\r\n      <small-text\r\n        :flavor=\"computeFlavor('fieldText')\"\r\n        v-for=\"(error, index) in errors\"\r\n        :key=\"`field-error-${index}`\"\r\n        >{{ error }}</small-text\r\n      >\r\n    </div>\r\n  </raw-form-input-container>\r\n</template>\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport { SmallText } from \"@IntusFacultas/typography\";\r\nconst RawFormInputContainer = styled.div`\r\n  position: relative;\r\n`;\r\nexport const RawFormInput = {\r\n  components: { SmallText, RawFormInputContainer },\r\n  data() {\r\n    return {\r\n      internalValue: \"\",\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal) {\r\n      if (newVal != this.internalValue) {\r\n        this.internalValue = newVal;\r\n      }\r\n    },\r\n  },\r\n  mounted() {\r\n    this.internalValue = this.value;\r\n  },\r\n  props: {\r\n    errors: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  methods: {\r\n    computeFlavor() {\r\n      if (this.errors.length > 0) {\r\n        return \"Danger\";\r\n      }\r\n      return \"LightBlue\";\r\n    },\r\n  },\r\n};\r\nexport default RawFormInput;\r\n</script>\r\n\r\n<style>\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = normalizeComponent$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      createInjector$2,
      undefined,
      undefined
    );

  function _taggedTemplateLiteral$3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral$3(["\n  padding: ", ";\n  font-size: ", ";\n  border-radius: 3px;\n  font-weight: bold;\n  ", "\n  font-family: Segoe UI, sans-serif;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  cursor: pointer;\n  ", "\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n  ", "\n  @-webkit-keyframes AnimationName {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -100% -100%;\n    }\n  }\n  @-moz-keyframes AnimationName {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -100% -100%;\n    }\n  }\n  @keyframes AnimationName {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -100% -100%;\n    }\n  }\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral$3(["\n        padding: ", ";\n        font-size: ", ";\n        border-radius: 3px;\n        font-weight: bold;\n        ", "\n        font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ", "\n        background-color: ", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ", ";\n            color: ", ";\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n        &:disabled:hover {\n            background-color: ", ";\n        }\n    "]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral$3(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  & button:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$2 = {
    flavor: String,
    small: Boolean,
    outline: Boolean,
    large: Boolean,
    block: Boolean,
    loading: Boolean,
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme$1;
      }
    }
  };
  var dialogProps = {
    flavor: String,
    small: Boolean,
    large: Boolean,
    block: Boolean,
    dialogTheme: {
      type: Object,
      default: function _default() {
        return Theme$1;
      }
    }
  };
  var ButtonGroup = styled.div(_templateObject$3());
  var DialogButton = styled("button", dialogProps)(_templateObject2$1(), function (props) {
    return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
  }, function (props) {
    return props.large ? "24px" : props.small ? "12px" : "16px";
  }, function (props) {
    return props.block ? "width: 100%;" : "";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.color ? props.dialogTheme[props.flavor].color.color : "#040404";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color : "#f0f0f0";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color + "80" : "#ddcccc80";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.focus ? props.dialogTheme[props.flavor].color.focus : "#000";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.hover ? props.dialogTheme[props.flavor].background.hover : "#d5d5d5";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].color.hover ? props.dialogTheme[props.flavor].color.hover : "#000";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.dialogTheme[props.flavor] && props.dialogTheme[props.flavor].background.color ? props.dialogTheme[props.flavor].background.color : "#f0f0f0";
  });
  var NButton = styled("button", props$2)(_templateObject3$1(), function (props) {
    return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
  }, function (props) {
    return props.large ? "24px" : props.small ? "12px" : "16px";
  }, function (props) {
    return props.block ? "width: 100%;" : "";
  }, function (props) {
    return props.outline ? "\n        /* Outline is true*/\n\n        background-color: transparent;\n        color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0", ";\n        border: 2px solid ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color + "80" : "#dcc", ";\n        }\n        &:hover:enabled {\n          background-color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#d5d5d5", ";\n          color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.color ? props.defaultTheme[props.flavor].color.color : "#000", "\n      }\n\n      ") : "\n        /* Outline is false */\n        border: 1px solid transparent;\n        color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.color ? props.defaultTheme[props.flavor].color.color : "#040404", ";\n        background-color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color + "80" : "#dcc", ";\n            color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.focus ? props.defaultTheme[props.flavor].color.focus : "#000", "\n        }\n        &:hover:enabled {\n            background-color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.hover ? props.defaultTheme[props.flavor].background.hover : "#d5d5d5", ";\n            color: ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.hover ? props.defaultTheme[props.flavor].color.hover : "#000", "\n        }\n      ");
  }, function (props) {
    return props.loading ? "\n     background: linear-gradient(to right, ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#dcc", " 0%, ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#dcc", " 50%, ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover + "AA" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.hover ? props.defaultTheme[props.flavor].background.hover + "AA" : "#dcc", " 50%, ").concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover + "AA" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.hover ? props.defaultTheme[props.flavor].background.hover + "AA" : "#dcc", " 100%);\n      background-size: 600% 600%;\n\n      -webkit-animation: AnimationName 2s ease infinite;\n      -moz-animation: AnimationName 2s ease infinite;\n      animation: AnimationName 2s ease infinite;\n  ") : "";
  });

  function normalizeComponent$3(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }
  /* script */


  var __vue_script__$4 = NButton;
  /* template */

  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = normalizeComponent$3({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  var components$2 = [{
    label: "NButton",
    component: NButton
  }, {
    label: "DialogButton",
    component: DialogButton
  }, {
    label: "ButtonGroup",
    component: ButtonGroup
  }];
  var GlobalVue$2 = null;

  var _loop$2 = function _loop() {
    var component_obj = _components$2[_i$2]; // install function executed by Vue.use()

    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()


    var plugin = {
      install: install
    }; // To auto-install when vue is found
    // eslint-disable-next-line no-redeclare

    /* global window, global */

    if (typeof window !== "undefined") {
      GlobalVue$2 = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue$2 = global.Vue;
    }

    if (GlobalVue$2) {
      GlobalVue$2.use(plugin);
    } // Inject install function into component - allows component
    // to be registered via Vue.use() as well as Vue.component()


    component_obj.component.install = install;
  };

  for (var _i$2 = 0, _components$2 = components$2; _i$2 < _components$2.length; _i$2++) {
    _loop$2();
  } // Export component by default

  var SelectMe = {
    name: "select-me",
    components: {
      NInput: NInput,
      NButton: NButton
    },
    data: function data() {
      return {
        timeout: "",
        optionSearch: "",
        showOptions: false,
        showSelected: false,
        selectBoxWidth: 0,
        calculatedWidth: 0,
        calculatedHeight: 0,
        calculatedPadding: 0,
        selectedOptions: [],
        hoveredOption: {},
        hoveredSelectedOption: {},
        combinedPaddingPerBadge: 26,
        hoveredIndex: -1,
        hoveredSelectedIndex: -1
      };
    },
    watch: {
      options: {
        handler: function handler() {
          if (this.selectedOptions.length == 0 && !this.canBeEmpty && this.options.length != 0) {
            this.selectOption(this.options[0]);
          }
        },
        deep: true
      },
      value: function value(newValue) {
        this.selectedOptions = newValue;
        window.requestAnimationFrame(this.setSelectBoxWidth);
        this.setCalculatedPadding();
      }
    },
    props: {
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      name: {
        type: String,
        required: true
      },
      badgeFlavor: {
        type: String,
        default: "Primary"
      },
      flavor: {
        type: String,
        default: "LightBlue"
      },
      displayAttribute: {
        type: String,
        default: "text"
      },
      valueAttribute: {
        type: String,
        default: "value"
      },
      canBeEmpty: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      debug: {
        type: Boolean,
        default: false
      },
      multiSelect: {
        type: Boolean,
        default: false
      },
      initialValues: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    computed: {
      computedSpanClass: function computedSpanClass() {
        var self = this;
        if (!self.multiSelect) return ["selectme-badge-single-span"];
        return [];
      },
      computedCutOff: function computedCutOff() {
        var self = this;
        return self.calculatedWidth - 100;
      },
      showDropdown: function showDropdown() {
        var self = this;
        return self.showOptions || self.debug;
      },
      selectOptions: function selectOptions() {
        function textContains(n) {
          return n[self.displayAttribute].toUpperCase().indexOf(self.optionSearch.toUpperCase()) > -1;
        }

        var self = this;
        var options = self.options;

        function filter(fn, array) {
          var rtArray = [];

          for (var x = 0; x < array.length; x++) {
            if (fn(array[x])) {
              rtArray.push(array[x]);
            }
          }

          return rtArray;
        }

        if (self.optionSearch) {
          options = filter(textContains, options);
        }

        return options;
      }
    },
    methods: {
      deselectDropdownOption: function deselectDropdownOption(option) {
        var self = this;
        self.deselectOption(option, false);
        window.requestAnimationFrame(self.setSelectBoxWidth);
      },
      handleOffClick: function handleOffClick(event) {
        var self = this;

        if (!event.target.attributes["data-dropdown"]) {
          self.showSelected = false;
        }
      },
      toggleSelectedDropdown: function toggleSelectedDropdown() {
        var self = this;
        self.showSelected = !self.showSelected;
      },
      selectHoveredOption: function selectHoveredOption() {
        var self = this;

        if (self.showOptions) {
          if (Object.keys(self.hoveredOption).length > 0) {
            if (!self.contains(self.hoveredOption, self.selectedOptions)) {
              if (!self.multiSelect) self.selectedOptions = [];
              self.selectedOptions.push(Object.assign({}, self.hoveredOption));
            } else {
              self.deselectOption(self.hoveredOption, false);
            }

            self.$emit("input", self.selectedOptions);
            self.hoveredOption = {};
            self.hoveredIndex = -1;
            window.requestAnimationFrame(self.setSelectBoxWidth);
            self.setCalculatedPadding();

            if (self.multiSelect) {
              self.$el.firstChild.focus();
            } else {
              self.closeDropdown();
            }
          }
        } else if (self.showSelected) {
          self.deselectOption(self.hoveredSelectedOption);
          self.$emit("input", self.selectedOptions);
          self.hoveredSelectedOption = {};
          self.showSelected = false;
          setTimeout(function () {
            self.hoveredIndex = -1;
            window.requestAnimationFrame(self.setSelectBoxWidth);
            self.setCalculatedPadding();
            self.$el.firstChild.focus();
          }, 550);
        }
      },
      hoverElement: function hoverElement() {
        var self = this;
        clearTimeout(self.timeout);
        self.hoveredOption = self.selectOptions.filter(function (option) {
          return option[self.valueAttribute] == document.activeElement.getAttribute("value");
        })[0];
        self.hoveredIndex = self.selectOptions.map(function (option) {
          return option[self.valueAttribute];
        }).indexOf(self.hoveredOption[self.valueAttribute]);
      },
      hoverOption: function hoverOption(step) {
        var self = this;
        var proposedIndex = self.hoveredIndex + step;
        self.openDropdown();

        if (proposedIndex >= self.selectOptions.length) {
          self.hoveredIndex = 0;
          self.hoveredOption = self.selectOptions[self.hoveredIndex];
        } else if (proposedIndex < -1) {
          return;
        } else if (proposedIndex == -1) {
          self.hoveredIndex = proposedIndex;
          self.$el.firstChild.focus();
          self.closeDropdown();
          self.hoveredOption = {};
        } else {
          self.hoveredIndex = proposedIndex;
          self.hoveredOption = self.selectOptions[self.hoveredIndex];
          self.$forceUpdate();
        }
      },
      hoverSelectedOption: function hoverSelectedOption(step) {
        var self = this;
        var proposedIndex = self.hoveredIndex + step;
        self.showSelected = true;

        if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {
          return;
        } else if (proposedIndex == -1) {
          self.hoveredIndex = proposedIndex;
          self.$el.firstChild.focus();
          self.showSelected = false;
          self.hoveredSelectedOption = {};
        } else {
          self.hoveredIndex = proposedIndex;
          self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];
          self.$forceUpdate();
        }
      },
      contains: function contains(option, options) {
        var self = this;

        for (var x = 0; x < options.length; x++) {
          var textMatches = option[self.displayAttribute] == options[x][self.displayAttribute];
          var valueMatches = option[self.valueAttribute] == options[x][self.valueAttribute];
          if (textMatches && valueMatches) return true;
        }

        return false;
      },
      isHovered: function isHovered(option, hoverOption) {
        var self = this;
        var textMatches = option[self.displayAttribute] == hoverOption[self.displayAttribute];
        var valueMatches = option[self.valueAttribute] == hoverOption[self.valueAttribute];
        return textMatches && valueMatches;
      },
      handleUp: function handleUp() {
        var self = this;

        if (self.showSelected) {
          self.hoverSelectedOption(-1);
        } else if (self.showOptions) {
          self.hoverOption(-1);
        } else {
          self.hoverOption(-1);
        }
      },
      handleDown: function handleDown() {
        var self = this;

        if (self.showSelected) {
          self.hoverSelectedOption(1);
        } else if (self.showOptions) {
          self.hoverOption(1);
        } else {
          self.hoverOption(1);
        }
      },
      handleLeft: function handleLeft() {
        var self = this;

        if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth > self.computedCutOff & !self.showSelected) {
          self.closeDropdown();
          self.showSelected = true;
        }
      },
      handleRight: function handleRight() {
        var self = this;

        if (self.showSelected) {
          self.showSelected = false;
          self.hoveredSelectedOption = {};
          self.$el.firstChild.focus();
        }
      },
      handleBackspace: function handleBackspace() {
        var self = this;

        if (self.optionSearch.length == 0 && self.selectedOptions.length > 0 && self.selectBoxWidth <= self.computedCutOff) {
          var el = self.selectedOptions.pop();
          self.$emit("input", self.selectedOptions);
          window.requestAnimationFrame(self.setSelectBoxWidth);
          self.setCalculatedPadding();
          self.optionSearch = el[self.displayAttribute];
        }
      },
      contained: function contained(option) {
        var self = this;
        return self.contains(option, self.selectedOptions);
      },
      selectOption: function selectOption(option) {
        var self = this;

        if (!self.contains(option, self.selectedOptions)) {
          if (!self.multiSelect) {
            self.selectedOptions = [];
          }

          self.selectedOptions.push(option);
        } else {
          self.deselectOption(option, !self.multiSelect);
        }

        self.optionSearch = "";

        if (!self.multiSelect) {
          self.closeDropdown();
        }

        self.$emit("input", self.selectedOptions);
        window.requestAnimationFrame(self.setSelectBoxWidth);
        self.setCalculatedPadding();
      },
      deselectOption: function deselectOption(option, closeDropdown) {
        var self = this;

        if (!self.canBeEmpty && self.selectedOptions.length == 1) {
          return;
        }

        function findIndex(option, options) {
          for (var x = 0; x < options.length; x++) {
            if (option[self.valueAttribute] == options[x][self.valueAttribute]) {
              return x;
            }
          }

          return -1;
        }

        var index = findIndex(option, self.selectedOptions);
        self.selectedOptions.splice(index, 1);
        self.$forceUpdate();

        if (typeof closeDropdown === "undefined" || closeDropdown) {
          self.closeDropdown();
        }

        self.$emit("input", self.selectedOptions);
        window.requestAnimationFrame(self.setSelectBoxWidth);
        self.setCalculatedPadding();
      },
      closeDropdown: function closeDropdown() {
        var self = this;
        self.hoveredIndex = -1;
        self.timeout = setTimeout(function () {
          self.showOptions = false;
        }, 200);
      },
      openDropdown: function openDropdown() {
        var self = this;
        self.$emit("focus");
        clearTimeout(self.timeout);

        if (self.disabled) {
          return false;
        }

        self.hoveredIndex = -1;
        self.setCalculatedWidth();
        self.showSelected = false;
        self.showOptions = true;
      },
      setSelectBoxWidth: function setSelectBoxWidth() {
        var self = this;
        if (self.$refs.selectBox) self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;
        window.requestAnimationFrame(self.setSelectBoxWidth);
      },
      setCalculatedPadding: function setCalculatedPadding() {
        var self = this;

        if (self.selectBoxWidth > self.computedCutOff) {
          self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;
        } else {
          self.calculatedPadding = self.selectBoxWidth;
        }

        window.requestAnimationFrame(self.setCalculatedPadding);
      },
      setCalculatedWidth: function setCalculatedWidth() {
        var self = this;
        setTimeout(function () {
          try {
            self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;

            if (!self.multiSelect) {
              self.calculatedHeight -= 4;
            }

            self.calculatedWidth = self.$el.firstChild.offsetWidth;
            window.requestAnimationFrame(self.setSelectBoxWidth);
            self.setCalculatedPadding();
          } catch (err) {// pass
          }
        }, 50);
      }
    },
    mounted: function mounted() {
      var self = this;

      if (!self.canBeEmpty && self.options.length > 0) {
        self.selectOption(self.options[0]);
      }

      window.requestAnimationFrame(self.setCalculatedPadding);
      window.addEventListener("resize", self.setCalculatedWidth);
      window.addEventListener("click", self.handleOffClick);
      self.setCalculatedWidth();
      setTimeout(function () {
        self.setCalculatedWidth();
      }, 200);

      for (var x = 0; x < self.initialValues.length; x++) {
        var initVal = self.initialValues[x];

        for (var y = 0; y < self.options.length; y++) {
          if (self.options[y][self.valueAttribute] == initVal[self.valueAttribute]) {
            self.selectedOptions.push(Object.assign({}, self.options[y]));
            break;
          }
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener("resize", self.setCalculatedWidth);
      window.removeEventListener("click", self.handleOffClick);
    }
  };

  function normalizeComponent$4(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE$3 = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$3(context) {
    return function (id, style) {
      return addStyle$3(id, style);
    };
  }

  var HEAD$3;
  var styles$3 = {};

  function addStyle$3(id, css) {
    var group = isOldIE$3 ? css.media || 'default' : id;
    var style = styles$3[group] || (styles$3[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD$3 === undefined) {
          HEAD$3 = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD$3.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }
  /* script */


  var __vue_script__$5 = SelectMe;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "selectme-container"
    }, [_c("n-input", {
      style: {
        "padding-left": _vm.calculatedPadding + "px"
      },
      attrs: {
        id: _vm.name,
        autocomplete: "off",
        type: "text",
        placeholder: "Search...",
        flavor: _vm.flavor,
        disabled: _vm.disabled
      },
      on: {
        click: _vm.openDropdown,
        focus: _vm.openDropdown,
        input: _vm.openDropdown,
        blur: _vm.closeDropdown,
        keydown: [function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "delete", [8, 46], $event.key, ["Backspace", "Delete", "Del"])) {
            return null;
          }

          return _vm.handleBackspace($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
            return null;
          }

          return _vm.handleDown($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
            return null;
          }

          return _vm.handleUp($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) {
            return null;
          }

          if ("button" in $event && $event.button !== 0) {
            return null;
          }

          return _vm.handleLeft($event);
        }, function ($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) {
            return null;
          }

          if ("button" in $event && $event.button !== 2) {
            return null;
          }

          return _vm.handleRight($event);
        }],
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
            return null;
          }

          return _vm.selectHoveredOption($event);
        }
      },
      model: {
        value: _vm.optionSearch,
        callback: function callback($$v) {
          _vm.optionSearch = $$v;
        },
        expression: "optionSearch"
      }
    }), _vm._v(" "), _vm.showDropdown ? _c("div", {
      staticClass: "selectme-dropdown",
      style: {
        width: _vm.calculatedWidth + "px"
      }
    }, [_c("ul", [_vm._l(_vm.selectOptions, function (option, index) {
      return _c("li", {
        key: "dropdown-" + option[_vm.valueAttribute] + "-" + index,
        ref: "hover" + option[_vm.valueAttribute],
        refInFor: true,
        class: {
          "selectme-selected": _vm.contained(option),
          "selectme-hovered": _vm.isHovered(option, _vm.hoveredOption)
        },
        attrs: {
          tabindex: "0",
          role: "button",
          value: option[_vm.valueAttribute]
        },
        on: {
          keyup: [function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }

            return _vm.selectHoveredOption($event);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
              return null;
            }

            return _vm.selectHoveredOption($event);
          }],
          focus: function focus($event) {
            return _vm.hoverElement();
          },
          keydown: [function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
              return null;
            }

            return _vm.hoverOption(1);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
              return null;
            }

            return _vm.hoverOption(-1);
          }],
          blur: _vm.closeDropdown,
          click: function click($event) {
            return _vm.selectOption(option);
          }
        }
      }, [_vm.contained(option) ? _c("span", {
        staticClass: "sr-only"
      }, [_vm._v("Active:")]) : _c("span", {
        staticClass: "sr-only"
      }, [_vm._v("Press enter to select:")]), _vm._v("\n        " + _vm._s(option[_vm.displayAttribute]) + "\n      ")]);
    }), _vm._v(" "), _vm.selectOptions.length == 0 ? _c("li", [_vm._v("No results found")]) : _vm._e()], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.selectBoxWidth > _vm.computedCutOff && _vm.selectedOptions.length > 0 && _vm.canBeEmpty && _vm.multiSelect,
        expression: "\n      selectBoxWidth > computedCutOff &&\n      selectedOptions.length > 0 &&\n      canBeEmpty &&\n      multiSelect\n    "
      }],
      ref: "selectDropdownBox",
      staticClass: "selectme-selected",
      style: {
        top: _vm.multiSelect ? _vm.calculatedHeight + "px" : _vm.calculatedHeight + 4 + "px"
      },
      attrs: {
        "data-dropdown": "parent"
      }
    }, [_c("n-button", {
      staticClass: "selectme-button selectme-badge",
      attrs: {
        flavor: _vm.badgeFlavor,
        "data-dropdown": "toggle"
      },
      on: {
        click: _vm.toggleSelectedDropdown
      }
    }, [_vm._v("\n      " + _vm._s(_vm.selectedOptions.length) + " selected...\n      "), !_vm.showSelected ? _c("span", {
      staticClass: "select-me-ignore-me"
    }, [_vm._v("▾")]) : _c("span", {
      staticClass: "select-me-ignore-me"
    }, [_vm._v("▴")])]), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showSelected,
        expression: "showSelected"
      }],
      staticClass: "selectme-dropdown"
    }, [_c("ul", _vm._l(_vm.selectedOptions, function (option, index) {
      return _c("li", {
        key: "selected-" + option[_vm.valueAttribute] + "-" + index,
        ref: "selected" + option[_vm.valueAttribute],
        refInFor: true,
        class: {
          "selectme-hovered": _vm.isHovered(option, _vm.hoveredSelectedOption)
        },
        attrs: {
          tabindex: "0",
          role: "button",
          "data-dropdown": "child"
        },
        on: {
          keyup: [function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
              return null;
            }

            return _vm.deselectDropdownOption(option);
          }, function ($event) {
            if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
              return null;
            }

            return _vm.deselectDropdownOption(option);
          }],
          click: function click($event) {
            return _vm.deselectDropdownOption(option);
          }
        }
      }, [_c("span", [_vm._v("×")]), _vm._v("\n          " + _vm._s(option[_vm.displayAttribute]) + "\n        ")]);
    }), 0)])], 1), _vm._v(" "), _c("div", {
      ref: "selectBox",
      staticClass: "selectme-selected",
      class: {
        "hidden-inline": _vm.selectBoxWidth > _vm.computedCutOff && _vm.canBeEmpty && _vm.multiSelect
      },
      style: {
        top: _vm.calculatedHeight + "px"
      }
    }, _vm._l(_vm.selectedOptions, function (option, index) {
      return _c("n-button", {
        key: "selected-badge-" + option[_vm.valueAttribute] + "-" + index,
        staticClass: "selectme-button selectme-badge",
        class: {
          "selectme-single-select-badge": !_vm.multiSelect
        },
        attrs: {
          flavor: _vm.badgeFlavor
        },
        on: {
          click: function click($event) {
            return _vm.deselectOption(option);
          }
        }
      }, [_vm._v("\n      " + _vm._s(option[_vm.displayAttribute]) + "\n      "), _vm.canBeEmpty || !_vm.canBeEmpty && _vm.selectedOptions.length > 1 ? _c("span", {
        staticClass: "select-me-ignore-me",
        class: _vm.computedSpanClass
      }, [_vm._v("×")]) : _vm._e()]);
    }), 1)], 1);
  };

  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;
  /* style */

  var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-27920d50_0", {
      source: "\n.select-me-ignore-me[data-v-27920d50] {\r\n  pointer-events: none;\n}\n.selectme-button[data-v-27920d50] {\r\n  height: 30px;\r\n  margin-top: -2px;\n}\n.selectme-single-select-badge[data-v-27920d50] {\r\n  margin-top: 1px;\n}\n.hidden-inline[data-v-27920d50] {\r\n  opacity: 0;\r\n  pointer-events: none;\n}\n.selectme-badge[data-v-27920d50] {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: \"Segoe UI\" !important;\n}\n.selectme-container[data-v-27920d50] {\r\n  height: 45px;\n}\n.selectme-container *[data-v-27920d50] {\r\n  font-family: \"Roboto\", sans-serif;\n}\n.sr-only[data-v-27920d50] {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\n}\n.selectme-dropdown[data-v-27920d50] {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\n}\n.selectme-badge-single-span[data-v-27920d50] {\r\n  float: left;\r\n  padding-right: 8px;\n}\n.selectme-badge-transparent[data-v-27920d50] {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\n}\n.selectme-selected[data-v-27920d50] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\n}\n.selectme-selected > button[data-v-27920d50] {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\n}\n.selectme-dropdown > ul[data-v-27920d50] {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\n}\n.selectme-dropdown > ul > li[data-v-27920d50] {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-27920d50] {\r\n  background-color: #007bff;\r\n  color: white;\n}\n.selectme-dropdown > ul > li.selectme-hovered[data-v-27920d50] {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered[data-v-27920d50] {\r\n  background-color: #0069d9;\r\n  color: white;\n}\n.selectme-dropdown > ul > li[data-v-27920d50]:hover {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-27920d50]:hover {\r\n  background-color: #0069d9;\r\n  color: white;\n}\r\n",
      map: {
        "version": 3,
        "sources": ["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\SelectMe\\src\\SelectMe.vue"],
        "names": [],
        "mappings": ";AA2jBA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,UAAA;EACA,oBAAA;AACA;AACA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;EACA,sBAAA;EACA,2BAAA;EACA,0BAAA;EACA,kCAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,iCAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;AACA;AACA;EACA,kBAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,qCAAA;EACA,0BAAA;EACA,oCAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,0BAAA;EACA,wCAAA;AACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,0BAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA",
        "file": "SelectMe.vue",
        "sourcesContent": ["<template>\r\n  <div class=\"selectme-container\">\r\n    <n-input\r\n      :id=\"name\"\r\n      autocomplete=\"off\"\r\n      type=\"text\"\r\n      placeholder=\"Search...\"\r\n      @click=\"openDropdown\"\r\n      @focus=\"openDropdown\"\r\n      @input=\"openDropdown\"\r\n      @blur=\"closeDropdown\"\r\n      :flavor=\"flavor\"\r\n      v-model=\"optionSearch\"\r\n      @keydown.delete=\"handleBackspace\"\r\n      @keydown.down=\"handleDown\"\r\n      @keydown.up=\"handleUp\"\r\n      @keydown.left=\"handleLeft\"\r\n      @keydown.right=\"handleRight\"\r\n      @keyup.enter=\"selectHoveredOption\"\r\n      :style=\"{ 'padding-left': calculatedPadding + 'px' }\"\r\n      :disabled=\"disabled\"\r\n    ></n-input>\r\n    <!-- Dropdown for all options -->\r\n    <div\r\n      v-if=\"showDropdown\"\r\n      class=\"selectme-dropdown\"\r\n      :style=\"{ width: calculatedWidth + 'px' }\"\r\n    >\r\n      <ul>\r\n        <li\r\n          @keyup.enter=\"selectHoveredOption\"\r\n          @keyup.space=\"selectHoveredOption\"\r\n          tabindex=\"0\"\r\n          role=\"button\"\r\n          @focus=\"hoverElement()\"\r\n          @keydown.down=\"hoverOption(1)\"\r\n          @keydown.up=\"hoverOption(-1)\"\r\n          @blur=\"closeDropdown\"\r\n          v-for=\"(option, index) in selectOptions\"\r\n          :key=\"'dropdown-' + option[valueAttribute] + '-' + index\"\r\n          :value=\"option[valueAttribute]\"\r\n          :ref=\"'hover' + option[valueAttribute]\"\r\n          @click=\"selectOption(option)\"\r\n          :class=\"{\r\n            'selectme-selected': contained(option),\r\n            'selectme-hovered': isHovered(option, hoveredOption),\r\n          }\"\r\n        >\r\n          <span class=\"sr-only\" v-if=\"contained(option)\">Active:</span>\r\n          <span class=\"sr-only\" v-else>Press enter to select:</span>\r\n          {{ option[displayAttribute] }}\r\n        </li>\r\n        <li v-if=\"selectOptions.length == 0\">No results found</li>\r\n      </ul>\r\n    </div>\r\n    <!-- Dropdown for selected values. Only shows when selected overflow input-->\r\n    <div\r\n      class=\"selectme-selected\"\r\n      :style=\"{\r\n        top: multiSelect\r\n          ? `${calculatedHeight}px`\r\n          : `${calculatedHeight + 4}px`,\r\n      }\"\r\n      v-show=\"\r\n        selectBoxWidth > computedCutOff &&\r\n        selectedOptions.length > 0 &&\r\n        canBeEmpty &&\r\n        multiSelect\r\n      \"\r\n      ref=\"selectDropdownBox\"\r\n      data-dropdown=\"parent\"\r\n    >\r\n      <n-button\r\n        @click=\"toggleSelectedDropdown\"\r\n        class=\"selectme-button selectme-badge\"\r\n        :flavor=\"badgeFlavor\"\r\n        data-dropdown=\"toggle\"\r\n      >\r\n        {{ selectedOptions.length }} selected...\r\n        <span class=\"select-me-ignore-me\" v-if=\"!showSelected\">&#x25BE;</span>\r\n        <span class=\"select-me-ignore-me\" v-else>&#x25B4;</span>\r\n      </n-button>\r\n      <div class=\"selectme-dropdown\" v-show=\"showSelected\">\r\n        <ul>\r\n          <li\r\n            tabindex=\"0\"\r\n            v-for=\"(option, index) in selectedOptions\"\r\n            :key=\"'selected-' + option[valueAttribute] + '-' + index\"\r\n            role=\"button\"\r\n            data-dropdown=\"child\"\r\n            @keyup.enter=\"deselectDropdownOption(option)\"\r\n            @keyup.space=\"deselectDropdownOption(option)\"\r\n            :ref=\"'selected' + option[valueAttribute]\"\r\n            :class=\"{\r\n              'selectme-hovered': isHovered(option, hoveredSelectedOption),\r\n            }\"\r\n            @click=\"deselectDropdownOption(option)\"\r\n          >\r\n            <span>&#215;</span>\r\n            {{ option[displayAttribute] }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Inline selected options -->\r\n    <div\r\n      class=\"selectme-selected\"\r\n      ref=\"selectBox\"\r\n      :style=\"{ top: calculatedHeight + 'px' }\"\r\n      :class=\"{\r\n        'hidden-inline':\r\n          selectBoxWidth > computedCutOff && canBeEmpty && multiSelect,\r\n      }\"\r\n    >\r\n      <n-button\r\n        :flavor=\"badgeFlavor\"\r\n        class=\"selectme-button selectme-badge\"\r\n        :class=\"{ 'selectme-single-select-badge': !multiSelect }\"\r\n        v-for=\"(option, index) in selectedOptions\"\r\n        @click=\"deselectOption(option)\"\r\n        :key=\"'selected-badge-' + option[valueAttribute] + '-' + index\"\r\n      >\r\n        {{ option[displayAttribute] }}\r\n        <span\r\n          :class=\"computedSpanClass\"\r\n          class=\"select-me-ignore-me\"\r\n          v-if=\"canBeEmpty || (!canBeEmpty && selectedOptions.length > 1)\"\r\n          >&#215;</span\r\n        >\r\n      </n-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NInput } from \"@IntusFacultas/input\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nconst SelectMe = {\r\n  name: \"select-me\",\r\n  components: { NInput, NButton },\r\n  data() {\r\n    return {\r\n      timeout: \"\",\r\n      optionSearch: \"\",\r\n      showOptions: false,\r\n      showSelected: false,\r\n      selectBoxWidth: 0,\r\n      calculatedWidth: 0,\r\n      calculatedHeight: 0,\r\n      calculatedPadding: 0,\r\n      selectedOptions: [],\r\n      hoveredOption: {},\r\n      hoveredSelectedOption: {},\r\n      combinedPaddingPerBadge: 26,\r\n      hoveredIndex: -1,\r\n      hoveredSelectedIndex: -1,\r\n    };\r\n  },\r\n  watch: {\r\n    options: {\r\n      handler() {\r\n        if (\r\n          this.selectedOptions.length == 0 &&\r\n          !this.canBeEmpty &&\r\n          this.options.length != 0\r\n        ) {\r\n          this.selectOption(this.options[0]);\r\n        }\r\n      },\r\n      deep: true,\r\n    },\r\n    value(newValue) {\r\n      this.selectedOptions = newValue;\r\n      window.requestAnimationFrame(this.setSelectBoxWidth);\r\n      this.setCalculatedPadding();\r\n    },\r\n  },\r\n  props: {\r\n    value: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n    badgeFlavor: {\r\n      type: String,\r\n      default: \"Primary\",\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\",\r\n    },\r\n    displayAttribute: {\r\n      type: String,\r\n      default: \"text\",\r\n    },\r\n    valueAttribute: {\r\n      type: String,\r\n      default: \"value\",\r\n    },\r\n    canBeEmpty: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    options: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    multiSelect: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    initialValues: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n  computed: {\r\n    computedSpanClass() {\r\n      var self = this;\r\n      if (!self.multiSelect) return [\"selectme-badge-single-span\"];\r\n      return [];\r\n    },\r\n    computedCutOff() {\r\n      var self = this;\r\n      return self.calculatedWidth - 100;\r\n    },\r\n    showDropdown() {\r\n      var self = this;\r\n      return self.showOptions || self.debug;\r\n    },\r\n    selectOptions() {\r\n      function textContains(n) {\r\n        return (\r\n          n[self.displayAttribute]\r\n            .toUpperCase()\r\n            .indexOf(self.optionSearch.toUpperCase()) > -1\r\n        );\r\n      }\r\n      var self = this;\r\n      let options = self.options;\r\n      function filter(fn, array) {\r\n        var rtArray = [];\r\n        for (var x = 0; x < array.length; x++) {\r\n          if (fn(array[x])) {\r\n            rtArray.push(array[x]);\r\n          }\r\n        }\r\n        return rtArray;\r\n      }\r\n      if (self.optionSearch) {\r\n        options = filter(textContains, options);\r\n      }\r\n      return options;\r\n    },\r\n  },\r\n  methods: {\r\n    deselectDropdownOption(option) {\r\n      var self = this;\r\n      self.deselectOption(option, false);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    handleOffClick(event) {\r\n      var self = this;\r\n      if (!event.target.attributes[\"data-dropdown\"]) {\r\n        self.showSelected = false;\r\n      }\r\n    },\r\n    toggleSelectedDropdown() {\r\n      var self = this;\r\n      self.showSelected = !self.showSelected;\r\n    },\r\n    selectHoveredOption() {\r\n      var self = this;\r\n      if (self.showOptions) {\r\n        if (Object.keys(self.hoveredOption).length > 0) {\r\n          if (!self.contains(self.hoveredOption, self.selectedOptions)) {\r\n            if (!self.multiSelect) self.selectedOptions = [];\r\n            self.selectedOptions.push(Object.assign({}, self.hoveredOption));\r\n          } else {\r\n            self.deselectOption(self.hoveredOption, false);\r\n          }\r\n          self.$emit(\"input\", self.selectedOptions);\r\n          self.hoveredOption = {};\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          if (self.multiSelect) {\r\n            self.$el.firstChild.focus();\r\n          } else {\r\n            self.closeDropdown();\r\n          }\r\n        }\r\n      } else if (self.showSelected) {\r\n        self.deselectOption(self.hoveredSelectedOption);\r\n        self.$emit(\"input\", self.selectedOptions);\r\n        self.hoveredSelectedOption = {};\r\n        self.showSelected = false;\r\n        setTimeout(function () {\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          self.$el.firstChild.focus();\r\n        }, 550);\r\n      }\r\n    },\r\n    hoverElement() {\r\n      var self = this;\r\n      clearTimeout(self.timeout);\r\n      self.hoveredOption = self.selectOptions.filter(\r\n        (option) =>\r\n          option[self.valueAttribute] ==\r\n          document.activeElement.getAttribute(\"value\")\r\n      )[0];\r\n      self.hoveredIndex = self.selectOptions\r\n        .map((option) => option[self.valueAttribute])\r\n        .indexOf(self.hoveredOption[self.valueAttribute]);\r\n    },\r\n    hoverOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.openDropdown();\r\n      if (proposedIndex >= self.selectOptions.length) {\r\n        self.hoveredIndex = 0;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n      } else if (proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.closeDropdown();\r\n        self.hoveredOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    hoverSelectedOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.showSelected = true;\r\n      if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    contains(option, options) {\r\n      var self = this;\r\n      for (var x = 0; x < options.length; x++) {\r\n        let textMatches =\r\n          option[self.displayAttribute] == options[x][self.displayAttribute];\r\n        let valueMatches =\r\n          option[self.valueAttribute] == options[x][self.valueAttribute];\r\n        if (textMatches && valueMatches) return true;\r\n      }\r\n      return false;\r\n    },\r\n    isHovered(option, hoverOption) {\r\n      var self = this;\r\n      let textMatches =\r\n        option[self.displayAttribute] == hoverOption[self.displayAttribute];\r\n      let valueMatches =\r\n        option[self.valueAttribute] == hoverOption[self.valueAttribute];\r\n      return textMatches && valueMatches;\r\n    },\r\n    handleUp() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(-1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(-1);\r\n      } else {\r\n        self.hoverOption(-1);\r\n      }\r\n    },\r\n    handleDown() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(1);\r\n      } else {\r\n        self.hoverOption(1);\r\n      }\r\n    },\r\n    handleLeft() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        (self.selectBoxWidth > self.computedCutOff) & !self.showSelected\r\n      ) {\r\n        self.closeDropdown();\r\n        self.showSelected = true;\r\n      }\r\n    },\r\n    handleRight() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n        self.$el.firstChild.focus();\r\n      }\r\n    },\r\n    handleBackspace() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        self.selectBoxWidth <= self.computedCutOff\r\n      ) {\r\n        var el = self.selectedOptions.pop();\r\n        self.$emit(\"input\", self.selectedOptions);\r\n        window.requestAnimationFrame(self.setSelectBoxWidth);\r\n        self.setCalculatedPadding();\r\n        self.optionSearch = el[self.displayAttribute];\r\n      }\r\n    },\r\n    contained(option) {\r\n      var self = this;\r\n      return self.contains(option, self.selectedOptions);\r\n    },\r\n    selectOption(option) {\r\n      var self = this;\r\n      if (!self.contains(option, self.selectedOptions)) {\r\n        if (!self.multiSelect) {\r\n          self.selectedOptions = [];\r\n        }\r\n        self.selectedOptions.push(option);\r\n      } else {\r\n        self.deselectOption(option, !self.multiSelect);\r\n      }\r\n      self.optionSearch = \"\";\r\n      if (!self.multiSelect) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit(\"input\", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    deselectOption(option, closeDropdown) {\r\n      var self = this;\r\n      if (!self.canBeEmpty && self.selectedOptions.length == 1) {\r\n        return;\r\n      }\r\n      function findIndex(option, options) {\r\n        for (var x = 0; x < options.length; x++) {\r\n          if (option[self.valueAttribute] == options[x][self.valueAttribute]) {\r\n            return x;\r\n          }\r\n        }\r\n        return -1;\r\n      }\r\n      var index = findIndex(option, self.selectedOptions);\r\n      self.selectedOptions.splice(index, 1);\r\n      self.$forceUpdate();\r\n      if (typeof closeDropdown === \"undefined\" || closeDropdown) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit(\"input\", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    closeDropdown() {\r\n      var self = this;\r\n      self.hoveredIndex = -1;\r\n      self.timeout = setTimeout(function () {\r\n        self.showOptions = false;\r\n      }, 200);\r\n    },\r\n    openDropdown() {\r\n      var self = this;\r\n      self.$emit(\"focus\");\r\n      clearTimeout(self.timeout);\r\n      if (self.disabled) {\r\n        return false;\r\n      }\r\n      self.hoveredIndex = -1;\r\n      self.setCalculatedWidth();\r\n      self.showSelected = false;\r\n      self.showOptions = true;\r\n    },\r\n    setSelectBoxWidth() {\r\n      var self = this;\r\n      if (self.$refs.selectBox)\r\n        self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    setCalculatedPadding() {\r\n      var self = this;\r\n      if (self.selectBoxWidth > self.computedCutOff) {\r\n        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;\r\n      } else {\r\n        self.calculatedPadding = self.selectBoxWidth;\r\n      }\r\n      window.requestAnimationFrame(self.setCalculatedPadding);\r\n    },\r\n    setCalculatedWidth() {\r\n      var self = this;\r\n      setTimeout(function () {\r\n        try {\r\n          self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;\r\n          if (!self.multiSelect) {\r\n            self.calculatedHeight -= 4;\r\n          }\r\n          self.calculatedWidth = self.$el.firstChild.offsetWidth;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n        } catch (err) {\r\n          // pass\r\n        }\r\n      }, 50);\r\n    },\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (!self.canBeEmpty && self.options.length > 0) {\r\n      self.selectOption(self.options[0]);\r\n    }\r\n    window.requestAnimationFrame(self.setCalculatedPadding);\r\n    window.addEventListener(\"resize\", self.setCalculatedWidth);\r\n    window.addEventListener(\"click\", self.handleOffClick);\r\n    self.setCalculatedWidth();\r\n    setTimeout(function () {\r\n      self.setCalculatedWidth();\r\n    }, 200);\r\n    for (var x = 0; x < self.initialValues.length; x++) {\r\n      var initVal = self.initialValues[x];\r\n      for (var y = 0; y < self.options.length; y++) {\r\n        if (\r\n          self.options[y][self.valueAttribute] == initVal[self.valueAttribute]\r\n        ) {\r\n          self.selectedOptions.push(Object.assign({}, self.options[y]));\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"resize\", self.setCalculatedWidth);\r\n    window.removeEventListener(\"click\", self.handleOffClick);\r\n  },\r\n};\r\nexport default SelectMe;\r\n</script>\r\n<style scoped>\r\n.select-me-ignore-me {\r\n  pointer-events: none;\r\n}\r\n.selectme-button {\r\n  height: 30px;\r\n  margin-top: -2px;\r\n}\r\n.selectme-single-select-badge {\r\n  margin-top: 1px;\r\n}\r\n.hidden-inline {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.selectme-badge {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: \"Segoe UI\" !important;\r\n}\r\n.selectme-container {\r\n  height: 45px;\r\n}\r\n.selectme-container * {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.selectme-dropdown {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-badge-single-span {\r\n  float: left;\r\n  padding-right: 8px;\r\n}\r\n.selectme-badge-transparent {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\r\n}\r\n.selectme-selected {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\n.selectme-selected > button {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\r\n}\r\n.selectme-dropdown > ul {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.selectme-dropdown > ul > li {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected {\r\n  background-color: #007bff;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li.selectme-hovered {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li:hover {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected:hover {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n</style>\r\n"]
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$5 = "data-v-27920d50";
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = normalizeComponent$4({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector$3, undefined, undefined); // Import vue component


  var install = function installSelectMe(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("SelectMe", __vue_component__$5);
  }; // Create module definition for Vue.use()


  var plugin = {
    install: install
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue$3 = null;

  if (typeof window !== "undefined") {
    GlobalVue$3 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$3 = global.Vue;
  }

  if (GlobalVue$3) {
    GlobalVue$3.use(plugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()


  __vue_component__$5.install = install; // Export component by default

  function _taggedTemplateLiteral$4(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral$4(["\n  width: calc(100% - 85px);\n  display: inline-block;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteral$4(["\n  animation: shimmer 2.5s infinite;\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\n  background-size: 1000px 100%;\n  height: ", ";\n  margin: 10px 10px;\n  border-radius: 8px;\n  width: ", ";\n"]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral$4(["\n  animation: shimmer 2.5s infinite;\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\n  background-size: 1000px 100%;\n  height: 10px;\n  display: inline-block;\n  margin: 10px 0px;\n  border-radius: 8px;\n  width: ", "%;\n"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteral$4(["\n  height: ", ";\n  padding: 15px;\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$3 = {
    height: {
      type: String,
      default: "50px"
    },
    width: {
      type: [String, Number],
      default: "50px"
    }
  };
  var PlaceholderContainer = styled("div", props$3)(_templateObject$4(), function (props) {
    return props.height;
  });
  var PlaceholderLine = styled("div", props$3)(_templateObject2$2(), function (props) {
    return props.width;
  });
  var PlaceholderPicture = styled("div", props$3)(_templateObject3$2(), function (props) {
    return props.height;
  }, function (props) {
    return props.width;
  });
  var ParagraphLineHolder = styled.div(_templateObject4());
  var PlaceholderParagraph = {
    components: {
      PlaceholderLine: PlaceholderLine,
      PlaceholderPicture: PlaceholderPicture,
      ParagraphLineHolder: ParagraphLineHolder
    },
    methods: {
      getWidth: function getWidth() {
        return Math.random() * (100 - 85) + 85;
      }
    },
    template: "\n    <div>\n        <div>\n            <placeholder-picture height=\"78px\" width=\"60px\" class=\"paragraph\"></placeholder-picture>\n            <paragraph-line-holder>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\n            </paragraph-line-holder>\n        </div>\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\n    </div>\n    "
  };
  var Placeholder = {
    components: {
      PlaceholderContainer: PlaceholderContainer,
      PlaceholderLine: PlaceholderLine,
      PlaceholderParagraph: PlaceholderParagraph
    },
    data: function data() {
      return {
        PLACEHOLDER_LINE_HEIGHT: 30,
        PARAGRAPH_HEIGHT: 170,
        PADDING_BUFFER: 30,
        internals: {
          paragraphs: 0,
          lines: 0
        }
      };
    },
    props: {
      height: {
        type: String,
        default: "50px"
      },
      paragraphs: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      height: function height() {
        var _this = this;

        this.$nextTick(function () {
          _this.internals = _this.calculateInternals();

          _this.$forceUpdate();
        });
      }
    },
    mounted: function mounted() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.internals = _this2.calculateInternals();
      });
    },
    methods: {
      getWidth: function getWidth() {
        return Math.random() * (100 - 85) + 85;
      },
      calculateInternals: function calculateInternals() {
        try {
          var availableSpace = this.$refs.container.$el.scrollHeight - this.PADDING_BUFFER;

          if (!this.paragraphs) {
            return {
              paragraphs: 0,
              lines: parseInt(availableSpace / this.PLACEHOLDER_LINE_HEIGHT)
            };
          } else {
            var maxParagraphs = parseInt(availableSpace / this.PARAGRAPH_HEIGHT);
            var remainingSpace = parseInt(availableSpace % this.PARAGRAPH_HEIGHT / this.PLACEHOLDER_LINE_HEIGHT);
            return {
              paragraphs: maxParagraphs,
              lines: remainingSpace
            };
          }
        } catch (error) {
          return {
            paragraphs: 0,
            lines: 0
          };
        }
      }
    },
    computed: {}
  };

  function normalizeComponent$5(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var isOldIE$4 = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$4(context) {
    return function (id, style) {
      return addStyle$4(id, style);
    };
  }

  var HEAD$4;
  var styles$4 = {};

  function addStyle$4(id, css) {
    var group = isOldIE$4 ? css.media || 'default' : id;
    var style = styles$4[group] || (styles$4[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);

        if (HEAD$4 === undefined) {
          HEAD$4 = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD$4.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }
  /* script */


  var __vue_script__$6 = Placeholder;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("placeholder-container", {
      ref: "container",
      attrs: {
        height: _vm.height
      }
    }, [_vm._l(_vm.internals.paragraphs, function (paragraph, paragraphIndex) {
      return _c("placeholder-paragraph", {
        key: "paragraph" + paragraphIndex
      });
    }), _vm._v(" "), _vm._l(_vm.internals.lines, function (line, index) {
      return _c("placeholder-line", {
        key: index,
        attrs: {
          width: _vm.getWidth()
        }
      });
    })], 2);
  };

  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;
  /* style */

  var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-28f05ad8_0", {
      source: "\n@keyframes shimmer {\n0% {\r\n    background-position: -1000px 0;\n}\n100% {\r\n    background-position: 1000px 0;\n}\n}\n@-webkit-keyframes shimmer {\n0% {\r\n    background-position: -1000px 0;\n}\n100% {\r\n    background-position: 1000px 0;\n}\n}\n@-moz-keyframes shimmer {\n0% {\r\n    background-position: -1000px 0;\n}\n100% {\r\n    background-position: 1000px 0;\n}\n}\n.paragraph {\r\n  display: inline-block;\n}\r\n",
      map: {
        "version": 3,
        "sources": ["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Placeholder\\src\\Placeholder.vue"],
        "names": [],
        "mappings": ";AAmJA;AACA;IACA,8BAAA;AACA;AACA;IACA,6BAAA;AACA;AACA;AACA;AACA;IACA,8BAAA;AACA;AACA;IACA,6BAAA;AACA;AACA;AACA;AACA;IACA,8BAAA;AACA;AACA;IACA,6BAAA;AACA;AACA;AACA;EACA,qBAAA;AACA",
        "file": "Placeholder.vue",
        "sourcesContent": ["<template>\r\n  <placeholder-container ref=\"container\" :height=\"height\">\r\n    <placeholder-paragraph\r\n      v-for=\"(paragraph, paragraphIndex) in internals.paragraphs\"\r\n      :key=\"`paragraph${paragraphIndex}`\"\r\n    ></placeholder-paragraph>\r\n    <placeholder-line\r\n      v-for=\"(line, index) in internals.lines\"\r\n      :key=\"index\"\r\n      :width=\"getWidth()\"\r\n    ></placeholder-line>\r\n  </placeholder-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\n\r\nconst props = {\r\n  height: {\r\n    type: String,\r\n    default: \"50px\",\r\n  },\r\n  width: {\r\n    type: [String, Number],\r\n    default: \"50px\",\r\n  },\r\n};\r\nconst PlaceholderContainer = styled(\"div\", props)`\r\n  height: ${(props) => props.height};\r\n  padding: 15px;\r\n`;\r\nconst PlaceholderLine = styled(\"div\", props)`\r\n  animation: shimmer 2.5s infinite;\r\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\r\n  background-size: 1000px 100%;\r\n  height: 10px;\r\n  display: inline-block;\r\n  margin: 10px 0px;\r\n  border-radius: 8px;\r\n  width: ${(props) => props.width}%;\r\n`;\r\nexport const PlaceholderPicture = styled(\"div\", props)`\r\n  animation: shimmer 2.5s infinite;\r\n  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);\r\n  background-size: 1000px 100%;\r\n  height: ${(props) => props.height};\r\n  margin: 10px 10px;\r\n  border-radius: 8px;\r\n  width: ${(props) => props.width};\r\n`;\r\nexport const ParagraphLineHolder = styled.div`\r\n  width: calc(100% - 85px);\r\n  display: inline-block;\r\n`;\r\nconst PlaceholderParagraph = {\r\n  components: { PlaceholderLine, PlaceholderPicture, ParagraphLineHolder },\r\n  methods: {\r\n    getWidth() {\r\n      return Math.random() * (100 - 85) + 85;\r\n    },\r\n  },\r\n  template: `\r\n    <div>\r\n        <div>\r\n            <placeholder-picture height=\"78px\" width=\"60px\" class=\"paragraph\"></placeholder-picture>\r\n            <paragraph-line-holder>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n                <placeholder-line :width=\"getWidth()\" class=\"paragraph\"></placeholder-line>\r\n            </paragraph-line-holder>\r\n        </div>\r\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\r\n        <placeholder-line :width=\"getWidth()\"></placeholder-line>\r\n    </div>\r\n    `,\r\n};\r\nexport const Placeholder = {\r\n  components: { PlaceholderContainer, PlaceholderLine, PlaceholderParagraph },\r\n  data() {\r\n    return {\r\n      PLACEHOLDER_LINE_HEIGHT: 30,\r\n      PARAGRAPH_HEIGHT: 170,\r\n      PADDING_BUFFER: 30,\r\n      internals: { paragraphs: 0, lines: 0 },\r\n    };\r\n  },\r\n  props: {\r\n    height: {\r\n      type: String,\r\n      default: \"50px\",\r\n    },\r\n    paragraphs: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n  },\r\n  watch: {\r\n    height() {\r\n      this.$nextTick(() => {\r\n        this.internals = this.calculateInternals();\r\n        this.$forceUpdate();\r\n      });\r\n    },\r\n  },\r\n  mounted() {\r\n    this.$nextTick(() => {\r\n      this.internals = this.calculateInternals();\r\n    });\r\n  },\r\n  methods: {\r\n    getWidth() {\r\n      return Math.random() * (100 - 85) + 85;\r\n    },\r\n    calculateInternals() {\r\n      try {\r\n        let availableSpace =\r\n          this.$refs.container.$el.scrollHeight - this.PADDING_BUFFER;\r\n        if (!this.paragraphs) {\r\n          return {\r\n            paragraphs: 0,\r\n            lines: parseInt(availableSpace / this.PLACEHOLDER_LINE_HEIGHT),\r\n          };\r\n        } else {\r\n          let maxParagraphs = parseInt(availableSpace / this.PARAGRAPH_HEIGHT);\r\n          let remainingSpace = parseInt(\r\n            (availableSpace % this.PARAGRAPH_HEIGHT) /\r\n              this.PLACEHOLDER_LINE_HEIGHT\r\n          );\r\n          return {\r\n            paragraphs: maxParagraphs,\r\n            lines: remainingSpace,\r\n          };\r\n        }\r\n      } catch (error) {\r\n        return {\r\n          paragraphs: 0,\r\n          lines: 0,\r\n        };\r\n      }\r\n    },\r\n  },\r\n  computed: {},\r\n};\r\nexport default Placeholder;\r\n</script>\r\n\r\n<style>\r\n@keyframes shimmer {\r\n  0% {\r\n    background-position: -1000px 0;\r\n  }\r\n  100% {\r\n    background-position: 1000px 0;\r\n  }\r\n}\r\n@-webkit-keyframes shimmer {\r\n  0% {\r\n    background-position: -1000px 0;\r\n  }\r\n  100% {\r\n    background-position: 1000px 0;\r\n  }\r\n}\r\n@-moz-keyframes shimmer {\r\n  0% {\r\n    background-position: -1000px 0;\r\n  }\r\n  100% {\r\n    background-position: 1000px 0;\r\n  }\r\n}\r\n.paragraph {\r\n  display: inline-block;\r\n}\r\n</style>\r\n"]
      },
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = normalizeComponent$5({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector$4, undefined, undefined); // Import vue component


  var components$3 = [{
    label: "Placeholder",
    component: Placeholder
  }, {
    label: "PlaceholderPicture",
    component: PlaceholderPicture
  }];
  var GlobalVue$4 = null;

  var _loop$3 = function _loop() {
    var component_obj = _components$3[_i$3]; // install function executed by Vue.use()

    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()


    var plugin = {
      install: install
    }; // To auto-install when vue is found
    // eslint-disable-next-line no-redeclare

    /* global window, global */

    if (typeof window !== "undefined") {
      GlobalVue$4 = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue$4 = global.Vue;
    }

    if (GlobalVue$4) {
      GlobalVue$4.use(plugin);
    } // Inject install function into component - allows component
    // to be registered via Vue.use() as well as Vue.component()


    component_obj.component.install = install;
  };

  for (var _i$3 = 0, _components$3 = components$3; _i$3 < _components$3.length; _i$3++) {
    _loop$3();
  } // Export component by default

  var VueForm = {
    components: {
      FormInput: __vue_component__$2,
      NButton: NButton,
      SelectMe: __vue_component__$5,
      RawFormInput: __vue_component__$3,
      NLabel: NLabel,
      Placeholder: Placeholder
    },
    data: function data() {
      return {
        internalFields: [],
        internalErrors: {},
        load: false,
        errorsExist: false,
        overridenFieldErrors: []
      };
    },
    props: {
      showBottom: {
        type: Boolean,
        default: true
      },
      submitting: Boolean,
      disableSubmission: Boolean,
      disableClearing: Boolean,
      allowSubmissionOnEnter: {
        type: Boolean,
        default: true
      },
      fields: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      errors: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    watch: {
      fields: function fields() {
        this.internalFields = this.fields.slice();
      },
      errors: {
        handler: function handler() {
          // this.internalErrors = Object.assign({}, newVal);
          for (var _i = 0, _Object$keys = Object.keys(this.errors); _i < _Object$keys.length; _i++) {
            var field = _Object$keys[_i];

            if (this.overridenFieldErrors.indexOf(field) == -1) {
              this.$set(this.internalErrors, field, this.errors[field].slice());
            }
          }

          this.checkErrors();
          this.$forceUpdate();
        },
        deep: true
      }
    },
    mounted: function mounted() {
      var _this = this;

      var self = this;
      setTimeout(function () {
        self.load = true;
      }, 500);
      this.fields.forEach(function (field) {
        _this.$watch(function () {
          return field;
        }, _this.handleChange, {
          deep: true
        });
      });
      this.internalFields = this.fields.slice();

      for (var _i2 = 0, _Object$keys2 = Object.keys(this.errors); _i2 < _Object$keys2.length; _i2++) {
        var field = _Object$keys2[_i2];
        this.internalErrors[field] = this.errors[field].slice();
      }
    },
    methods: {
      checkErrors: function checkErrors() {
        for (var _i3 = 0, _Object$keys3 = Object.keys(this.internalErrors); _i3 < _Object$keys3.length; _i3++) {
          var field = _Object$keys3[_i3];

          if (this.internalErrors[field].length != 0) {
            this.errorsExist = true;
            return true;
          }
        }

        this.errorsExist = false;
        return false;
      },
      submitForm: function submitForm(index) {
        if (index == this.internalFields.length - 1 && this.allowSubmissionOnEnter) {
          this.$emit("submit");
        }
      },
      clearAll: function clearAll() {
        var _iterator = _createForOfIteratorHelper(this.internalFields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;
            field.value = "";
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.$emit("clear");
        this.$emit("fields", this.internalFields.slice());
      },
      objectDeepEquals: function objectDeepEquals(ob1, ob2) {
        var ob1Keys = Object.keys(ob1);
        var ob2Keys = Object.keys(ob2);

        if (ob1Keys.length !== ob2Keys.length) {
          return false;
        }

        for (var _i4 = 0, _ob1Keys = ob1Keys; _i4 < _ob1Keys.length; _i4++) {
          var key = _ob1Keys[_i4];

          if (ob2Keys.indexOf(key) == -1) {
            return false;
          }

          if (_typeof(ob1[key]) != _typeof(ob2[key])) {
            return false;
          }

          if (_typeof(ob1[key]) == "object") {
            if (!this.objectDeepEquals(ob1[key], ob2[key])) {
              return false;
            }
          } else if (Array.isArray(ob1[key])) {
            if (!this.deepEquals(ob1[key], ob2[key])) {
              return false;
            }
          } else {
            if (ob1[key] != ob2[key]) {
              return false;
            }
          }
        }

        return true;
      },
      deepEquals: function deepEquals(ar1, ar2) {
        var still_matches = true;
        var self = this;

        if (!Array.isArray(ar1) || !Array.isArray(ar2)) {
          return false;
        }

        if (ar1.length !== ar2.length) {
          return false;
        }

        ar1.forEach(function (val1, index) {
          var val2 = ar2[index];

          if (val1 !== val2 && !self.objectDeepEquals(val1, val2)) {
            still_matches = false;
          }
        });
        return still_matches;
      },
      validateField: function validateField(field) {
        if (typeof field.validation == "function") {
          var value = field.validation(field.value, this.internalFields);

          if (value) {
            if (!Array.isArray(this.internalErrors[field.name])) {
              this.$set(this.internalErrors, field.name, [value]);
            }

            if (this.internalErrors[field.name].indexOf(value) == -1) {
              this.internalErrors[field.name].push(value);
            }

            this.$forceUpdate();
            this.$emit("errors", this.internalErrors);
            this.checkErrors();
            return false;
          }
        }

        this.internalErrors[field.name] = [];

        if (this.overridenFieldErrors.indexOf(field.name) == -1) {
          this.overridenFieldErrors.push(field.name);
        }

        this.$emit("fields", this.internalFields.slice());
        this.$emit("errors", this.internalErrors);
        this.checkErrors();
        return true;
      },
      handleChange: function handleChange() {
        this.internalFields = this.fields.slice();
      },
      submit: function submit($e) {
        $e.preventDefault();
        this.overridenFieldErrors = [];
        document.activeElement.blur();
        this.$emit("submit");
      }
    }
  };

  /* script */
  const __vue_script__$7 = VueForm;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "form",
      [
        _vm._l(_vm.internalFields, function(field, index) {
          return _c(
            "div",
            { key: "field" + index },
            [
              field.type != "select"
                ? _c("form-input", {
                    attrs: {
                      label: field.label,
                      placeholder: field.placeholder,
                      name: field.name,
                      required: field.required,
                      disabled: field.disabled,
                      errors: _vm.internalErrors[field.name],
                      "input-type": field.type
                    },
                    on: {
                      input: function($event) {
                        return _vm.validateField(field)
                      },
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                        ) {
                          return null
                        }
                        return _vm.submitForm(index)
                      }
                    },
                    model: {
                      value: field.value,
                      callback: function($$v) {
                        _vm.$set(field, "value", $$v);
                      },
                      expression: "field.value"
                    }
                  })
                : field.type == "select"
                ? _c(
                    "raw-form-input",
                    { attrs: { errors: _vm.internalErrors[field.name] } },
                    [
                      _c("n-label", { attrs: { for: field.name } }, [
                        _vm._v(_vm._s(field.label))
                      ]),
                      _vm._v(" "),
                      _c("select-me", {
                        class: { "opacity-transparent": !_vm.load },
                        attrs: {
                          name: field.name,
                          "can-be-empty": !field.required,
                          options: field.options
                        },
                        on: {
                          input: function($event) {
                            return _vm.validateField(field)
                          }
                        },
                        model: {
                          value: field.value,
                          callback: function($$v) {
                            _vm.$set(field, "value", $$v);
                          },
                          expression: "field.value"
                        }
                      }),
                      _vm._v(" "),
                      !_vm.load
                        ? _c("placeholder", {
                            staticClass: "field-placeholder",
                            attrs: { height: "35px" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        }),
        _vm._v(" "),
        _vm.showBottom
          ? _c(
              "div",
              { staticClass: "form-bottom-content" },
              [
                _vm._t("default"),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    !_vm.disableClearing
                      ? _c(
                          "n-button",
                          {
                            staticClass: "form-button-spacing",
                            attrs: {
                              type: "button",
                              flavor: "Warning",
                              disabled: _vm.submitting
                            },
                            on: { click: _vm.clearAll }
                          },
                          [_vm._v("Clear")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "n-button",
                      {
                        attrs: {
                          type: "button",
                          flavor: "Primary",
                          loading: _vm.submitting,
                          disabled:
                            _vm.submitting ||
                            _vm.errorsExist ||
                            _vm.disableSubmission
                        },
                        on: {
                          click: function($event) {
                            return _vm.submit($event)
                          }
                        }
                      },
                      [
                        _c("span", [_vm._v("Submit ")]),
                        _vm._v(" "),
                        _vm.submitting
                          ? _c(
                              "svg",
                              {
                                staticClass: "loading-spinner",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 24 24",
                                  fill: "white"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z"
                                  }
                                })
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ],
                  1
                )
              ],
              2
            )
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = function (inject) {
      if (!inject) return
      inject("data-v-283bd7c8_0", { source: "\n.field-placeholder {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 20px;\n}\n.form-bottom-content {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\n}\n.opacity-transparent {\r\n  opacity: 0;\n}\n.form-button-spacing {\r\n  margin-right: 5px;\n}\n@keyframes FormLoadingSpinner {\nfrom {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\n}\nto {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\n}\n}\n.loading-spinner {\r\n  -webkit-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: FormLoadingSpinner 0.5s infinite steps(8);\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Form\\src\\Form.vue"],"names":[],"mappings":";AA2QA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;AACA;AACA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;AACA;AACA;EACA,gBAAA;EACA,cAAA;AACA;AACA;EACA,UAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;AACA;IACA,+BAAA;IACA,uBAAA;AACA;AACA;IACA,iCAAA;IACA,yBAAA;AACA;AACA;AACA;EACA,4DAAA,EAAA,oCAAA;EACA,yDAAA,EAAA,iBAAA;EACA,wDAAA,EAAA,sBAAA;EACA,uDAAA,EAAA,iBAAA;EACA,oDAAA;AACA","file":"Form.vue","sourcesContent":["<template>\r\n  <form>\r\n    <div v-for=\"(field, index) in internalFields\" :key=\"`field${index}`\">\r\n      <form-input\r\n        v-if=\"field.type != 'select'\"\r\n        :label=\"field.label\"\r\n        :placeholder=\"field.placeholder\"\r\n        :name=\"field.name\"\r\n        :required=\"field.required\"\r\n        :disabled=\"field.disabled\"\r\n        v-model=\"field.value\"\r\n        :errors=\"internalErrors[field.name]\"\r\n        :input-type=\"field.type\"\r\n        @input=\"validateField(field)\"\r\n        @keyup.enter=\"submitForm(index)\"\r\n      ></form-input>\r\n      <raw-form-input\r\n        :errors=\"internalErrors[field.name]\"\r\n        v-else-if=\"field.type == 'select'\"\r\n      >\r\n        <n-label :for=\"field.name\">{{ field.label }}</n-label>\r\n        <select-me\r\n          :name=\"field.name\"\r\n          :can-be-empty=\"!field.required\"\r\n          :options=\"field.options\"\r\n          v-model=\"field.value\"\r\n          :class=\"{ 'opacity-transparent': !load }\"\r\n          @input=\"validateField(field)\"\r\n        ></select-me>\r\n        <placeholder\r\n          class=\"field-placeholder\"\r\n          height=\"35px\"\r\n          v-if=\"!load\"\r\n        ></placeholder>\r\n      </raw-form-input>\r\n    </div>\r\n    <div class=\"form-bottom-content\" v-if=\"showBottom\">\r\n      <slot></slot>\r\n      <div>\r\n        <n-button\r\n          type=\"button\"\r\n          flavor=\"Warning\"\r\n          @click=\"clearAll\"\r\n          :disabled=\"submitting\"\r\n          v-if=\"!disableClearing\"\r\n          class=\"form-button-spacing\"\r\n          >Clear</n-button\r\n        >\r\n        <n-button\r\n          type=\"button\"\r\n          flavor=\"Primary\"\r\n          @click=\"submit($event)\"\r\n          :loading=\"submitting\"\r\n          :disabled=\"submitting || errorsExist || disableSubmission\"\r\n        >\r\n          <span>Submit&nbsp;</span>\r\n          <svg\r\n            v-if=\"submitting\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"14\"\r\n            height=\"14\"\r\n            viewBox=\"0 0 24 24\"\r\n            fill=\"white\"\r\n            class=\"loading-spinner\"\r\n          >\r\n            <path\r\n              d=\"M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z\"\r\n            />\r\n          </svg>\r\n        </n-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</template>\r\n<script>\r\nimport FormInput from \"./FormInput.vue\";\r\nimport RawFormInput from \"./RawFormInput.vue\";\r\nimport SelectMe from \"@IntusFacultas/select-me\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport { Placeholder } from \"@IntusFacultas/placeholder\";\r\nexport const VueForm = {\r\n  components: {\r\n    FormInput,\r\n    NButton,\r\n    SelectMe,\r\n    RawFormInput,\r\n    NLabel,\r\n    Placeholder,\r\n  },\r\n  data() {\r\n    return {\r\n      internalFields: [],\r\n      internalErrors: {},\r\n      load: false,\r\n      errorsExist: false,\r\n      overridenFieldErrors: [],\r\n    };\r\n  },\r\n  props: {\r\n    showBottom: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    submitting: Boolean,\r\n    disableSubmission: Boolean,\r\n    disableClearing: Boolean,\r\n    allowSubmissionOnEnter: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    fields: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    errors: {\r\n      type: Object,\r\n      default() {\r\n        return {};\r\n      },\r\n    },\r\n  },\r\n  watch: {\r\n    fields() {\r\n      this.internalFields = this.fields.slice();\r\n    },\r\n    errors: {\r\n      handler() {\r\n        // this.internalErrors = Object.assign({}, newVal);\r\n        for (let field of Object.keys(this.errors)) {\r\n          if (this.overridenFieldErrors.indexOf(field) == -1) {\r\n            this.$set(this.internalErrors, field, this.errors[field].slice());\r\n          }\r\n        }\r\n        this.checkErrors();\r\n        this.$forceUpdate();\r\n      },\r\n      deep: true,\r\n    },\r\n  },\r\n  mounted() {\r\n    let self = this;\r\n    setTimeout(() => {\r\n      self.load = true;\r\n    }, 500);\r\n    this.fields.forEach((field) => {\r\n      this.$watch(() => field, this.handleChange, { deep: true });\r\n    });\r\n    this.internalFields = this.fields.slice();\r\n    for (let field of Object.keys(this.errors)) {\r\n      this.internalErrors[field] = this.errors[field].slice();\r\n    }\r\n  },\r\n  methods: {\r\n    checkErrors() {\r\n      for (let field of Object.keys(this.internalErrors)) {\r\n        if (this.internalErrors[field].length != 0) {\r\n          this.errorsExist = true;\r\n          return true;\r\n        }\r\n      }\r\n      this.errorsExist = false;\r\n      return false;\r\n    },\r\n    submitForm(index) {\r\n      if (\r\n        index == this.internalFields.length - 1 &&\r\n        this.allowSubmissionOnEnter\r\n      ) {\r\n        this.$emit(\"submit\");\r\n      }\r\n    },\r\n    clearAll() {\r\n      for (let field of this.internalFields) {\r\n        field.value = \"\";\r\n      }\r\n      this.$emit(\"clear\");\r\n      this.$emit(\"fields\", this.internalFields.slice());\r\n    },\r\n    objectDeepEquals(ob1, ob2) {\r\n      let ob1Keys = Object.keys(ob1);\r\n      let ob2Keys = Object.keys(ob2);\r\n      if (ob1Keys.length !== ob2Keys.length) {\r\n        return false;\r\n      }\r\n      for (let key of ob1Keys) {\r\n        if (ob2Keys.indexOf(key) == -1) {\r\n          return false;\r\n        }\r\n        if (typeof ob1[key] != typeof ob2[key]) {\r\n          return false;\r\n        }\r\n        if (typeof ob1[key] == \"object\") {\r\n          if (!this.objectDeepEquals(ob1[key], ob2[key])) {\r\n            return false;\r\n          }\r\n        } else if (Array.isArray(ob1[key])) {\r\n          if (!this.deepEquals(ob1[key], ob2[key])) {\r\n            return false;\r\n          }\r\n        } else {\r\n          if (ob1[key] != ob2[key]) {\r\n            return false;\r\n          }\r\n        }\r\n      }\r\n      return true;\r\n    },\r\n    deepEquals(ar1, ar2) {\r\n      let still_matches = true;\r\n      let self = this;\r\n      if (!Array.isArray(ar1) || !Array.isArray(ar2)) {\r\n        return false;\r\n      }\r\n      if (ar1.length !== ar2.length) {\r\n        return false;\r\n      }\r\n      ar1.forEach((val1, index) => {\r\n        let val2 = ar2[index];\r\n        if (val1 !== val2 && !self.objectDeepEquals(val1, val2)) {\r\n          still_matches = false;\r\n        }\r\n      });\r\n      return still_matches;\r\n    },\r\n    validateField(field) {\r\n      if (typeof field.validation == \"function\") {\r\n        let value = field.validation(field.value, this.internalFields);\r\n        if (value) {\r\n          if (!Array.isArray(this.internalErrors[field.name])) {\r\n            this.$set(this.internalErrors, field.name, [value]);\r\n          }\r\n          if (this.internalErrors[field.name].indexOf(value) == -1) {\r\n            this.internalErrors[field.name].push(value);\r\n          }\r\n          this.$forceUpdate();\r\n          this.$emit(\"errors\", this.internalErrors);\r\n          this.checkErrors();\r\n          return false;\r\n        }\r\n      }\r\n      this.internalErrors[field.name] = [];\r\n      if (this.overridenFieldErrors.indexOf(field.name) == -1) {\r\n        this.overridenFieldErrors.push(field.name);\r\n      }\r\n      this.$emit(\"fields\", this.internalFields.slice());\r\n      this.$emit(\"errors\", this.internalErrors);\r\n      this.checkErrors();\r\n      return true;\r\n    },\r\n    handleChange() {\r\n      this.internalFields = this.fields.slice();\r\n    },\r\n    submit($e) {\r\n      $e.preventDefault();\r\n      this.overridenFieldErrors = [];\r\n      document.activeElement.blur();\r\n      this.$emit(\"submit\");\r\n    },\r\n  },\r\n};\r\nexport default VueForm;\r\n</script>\r\n\r\n<style>\r\n.field-placeholder {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0px;\r\n  top: 20px;\r\n}\r\n.form-bottom-content {\r\n  margin-top: 25px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.form-error-message {\r\n  min-height: 17px;\r\n  min-width: 1px;\r\n}\r\n.opacity-transparent {\r\n  opacity: 0;\r\n}\r\n.form-button-spacing {\r\n  margin-right: 5px;\r\n}\r\n@keyframes FormLoadingSpinner {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.loading-spinner {\r\n  -webkit-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Firefox < 16 */\r\n  -ms-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Internet Explorer */\r\n  -o-animation: FormLoadingSpinner 0.5s infinite steps(8); /* Opera < 12.1 */\r\n  animation: FormLoadingSpinner 0.5s infinite steps(8);\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = normalizeComponent$2(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      createInjector$2,
      undefined,
      undefined
    );

  // Import vue component

  var install$1 = function installVueStaticAlert(Vue) {
    if (install$1.installed) return;
    install$1.installed = true;
    Vue.component("VueForm", __vue_component__$7);
  }; // Create module definition for Vue.use()


  var plugin$1 = {
    install: install$1
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue$5 = null;

  if (typeof window !== "undefined") {
    GlobalVue$5 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$5 = global.Vue;
  }

  if (GlobalVue$5) {
    GlobalVue$5.use(plugin$1);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()


  __vue_component__$7.install = install$1; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.VueForm = __vue_component__$7;
  exports.default = __vue_component__$7;

  return exports;

}({}));
//# sourceMappingURL=Form.iife.js.map
