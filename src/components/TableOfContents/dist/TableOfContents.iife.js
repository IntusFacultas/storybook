var TableOfContents = (function (exports) {
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

  function _defineProperty$1(obj, key, value) {
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
          _defineProperty$1(target, key, source[key]);
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

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  padding-left: ", "px;\n  border-left-style: solid;\n  border-left-width: 2px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: 0.2s all;\n  max-height: 0px;\n  overflow: hidden;\n  border-color: rgba(0, 0, 0, 0.1);\n  color: ", ";\n  ", ";\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  & * {\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n  }\n  padding-left: 0px;\n  list-style: none;\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n  display: block;\n  max-width: ", ";\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  color: #ff7200;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  pointer-events: none;\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Array.from) {
    Array.from = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function isCallable(fn) {
        return typeof fn === "function" || toStr.call(fn) === "[object Function]";
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }; // The length property of the from method is 1.


      return function from(arrayLike
      /*, mapFn, thisArg */
      ) {
        // 1. Let C be the this value.
        var C = this; // 2. Let items be ToObject(arrayLike).

        var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        } // 4. If mapfn is undefined, then let mapping be false.


        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;

        if (typeof mapFn !== "undefined") {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError("Array.from: when provided, the second argument must be a function");
          } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          }
        } // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).


        var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).

        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    }();
  }

  var props = {
    padding: {
      type: Number,
      default: 0
    },
    breakpoint: {
      type: Number,
      default: 576
    },
    topOffset: {
      type: Number,
      default: 100
    },
    width: {
      type: String,
      default: "auto"
    },
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      }
    },
    flavor: String
  };
  var Toggler = styled.span(_templateObject());
  var ContentsContainer = styled("nav", props)(_templateObject2(), function (props) {
    return props.width ? props.width : "auto";
  });
  var ContentsTable = styled("ul", props)(_templateObject3());
  var Item = styled("li", props)(_templateObject4(), function (props) {
    return props.padding * 10 + 10;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
  });
  var TableOfContents = _defineProperty({
    components: {
      ContentsTable: ContentsTable,
      Item: Item,
      ContentsContainer: ContentsContainer,
      Toggler: Toggler
    },
    data: function data() {
      return {
        titles: [],
        override: false,
        scrollToOverride: false,
        observer: null
      };
    },
    props: {
      width: {
        type: String,
        default: "auto"
      },
      enableDomListening: {
        type: Boolean,
        default: false
      },
      flavor: {
        type: String,
        default: ""
      },
      ignoreQuery: {
        type: [String, Array],
        default: ""
      },
      queryOverride: {
        type: String,
        default: ""
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    methods: {
      toggleOverride: function toggleOverride() {
        this.override = !this.override;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.titles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var title = _step.value;
            title.override = this.override;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      },
      delayCollapse: function delayCollapse(title) {
        setTimeout(function () {
          return title.override = false;
        }, 500);
      },
      scrollToEl: function scrollToEl(el) {
        var y = el.getBoundingClientRect().top + window.pageYOffset - this.offset; // el.scrollIntoView({ behavior: "smooth", block: "start" });

        var IEHoldOff = 5; // IE is dumb and can't appropriately calculate viewport

        window.scrollTo({
          top: y - IEHoldOff,
          behavior: "smooth"
        });
        this.scrollToOverride = true;
        var self = this;
        setTimeout(function () {
          setTimeout(function () {
            self.checkTitles();
          }, 100);
          self.scrollToOverride = false;
        }, 500);
        el.focus();
      },
      debounce: function debounce(func, wait, immediate) {
        // pulled from https://davidwalsh.name/javascript-debounce-function
        var timeout;
        return function () {
          var context = this,
              args = arguments;

          var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };

          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      },
      computeOverride: function computeOverride(title) {
        return !this.scrollToOverride && this.override || title.override || title.children.filter(function (child) {
          return child.override;
        }).length > 0 || title.parents.filter(function (parent) {
          return parent.override;
        }).length > 0;
      },
      computeScreenVisibility: function computeScreenVisibility(title) {
        return !this.scrollToOverride && (title.visible || title.children.filter(function (child) {
          return child.visible;
        }).length > 0);
      },
      computeVisibility: function computeVisibility(title) {
        return title.parents.length == 0 || title.directParents.length == 1 && title.parents.length == 1 && this.computeScreenVisibility(title.directParents[0]) || this.computeOverride(title) || this.computeScreenVisibility(title);
      },
      margined: function margined(title) {
        return title.visible; //|| title.children.filter(child => child.visible).length > 0
      },
      isInView: function isInView(el) {
        // pulled from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
        var box = el.getBoundingClientRect();
        return box.top < window.innerHeight && box.bottom >= 0;
      },
      getPathTo: function getPathTo(element) {
        // pulled from https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
        if (element.id !== "") return 'id("' + element.id + '")';
        if (element === document.body) return element.tagName;
        var ix = 0;
        var siblings = element.parentNode.childNodes;

        for (var i = 0; i < siblings.length; i++) {
          var sibling = siblings[i];
          if (sibling === element) return this.getPathTo(element.parentNode) + "/" + element.tagName + "[" + (ix + 1) + "]";
          if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
        }
      },
      checkIfTitle: function checkIfTitle(el) {
        var notDisqualified = true;

        if (this.ignoreQuery) {
          if (Array.isArray(this.ignoreQuery)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.ignoreQuery[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var query = _step2.value;

                if (el.matches(query)) {
                  notDisqualified = false;
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            notDisqualified = !el.matches(this.ignoreQuery);
          }
        }

        if (this.queryOverride) {
          return el.matches(this.queryOverride) && notDisqualified;
        } else {
          return el.matches("h1, h2, h3, h4, h5, h6") && notDisqualified;
        }
      },
      calculateTitleType: function calculateTitleType(el) {
        if (this.queryOverride) {
          return el.getAttribute("data-rank");
        } else {
          return parseInt(el.tagName[1]);
        }
      },
      crawl: function crawl(node) {
        var _this = this;

        var titles = [];
        var stack = [node];
        var visited = [];

        var _loop = function _loop() {
          var el = stack.pop();

          if (typeof el.children !== "undefined") {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = Array.from(el.children).filter(function (c) {
                return visited.indexOf(c) == -1 && !c.isEqualNode(el);
              })[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var child = _step3.value;
                stack.push(child);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          var path = _this.getPathTo(el);

          var notVisited = visited.indexOf(path) == -1;

          var isTitle = _this.checkIfTitle(el);

          if (notVisited && isTitle) {
            titles.push({
              el: el,
              id: _this.getPathTo(el),
              titleType: _this.calculateTitleType(el),
              offset: -1,
              visible: false,
              hovered: false,
              override: false
            });
          }

          visited.push(_this.getPathTo(el));
        };

        while (stack.length > 0) {
          _loop();
        }

        return titles.reverse();
      },
      checkTitles: function checkTitles() {
        var yOffset = window.pageYOffset;

        if (this.titles.length == 0) {
          return;
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.titles.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                index = _step4$value[0],
                title = _step4$value[1];

            title.offset = title.el.getBoundingClientRect().top;

            if (title.offset < 20 + this.offset && title.offset > 0) {
              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = this.titles.filter(function (o) {
                  return o.visible;
                })[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var _other2 = _step7.value;
                  _other2.visible = false;
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                    _iterator7.return();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }

              title.visible = true;
            } else if (title.visible && title.el.getBoundingClientRect().bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
              if (this.titles[index - 1]) this.titles[index - 1].visible = true;
              title.visible = false;
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        if (yOffset == 0 && window.innerWidth - document.documentElement.clientWidth == 0) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.titles.filter(function (o) {
              return o.visible;
            })[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var other = _step5.value;
              other.visible = false;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          this.titles[0].visible = true;
        } else if (window.innerHeight + yOffset >= document.body.offsetHeight) {
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = this.titles.filter(function (o) {
              return o.visible;
            })[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _other = _step6.value;
              _other.visible = false;
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          this.titles[this.titles.length - 1].visible = true;
        }
      },
      assignChildren: function assignChildren() {
        var _this2 = this;

        for (var title = 0; title < this.titles.length; title++) {
          var parentTitle = this.titles[title]; // instantiate parents, children, and direct parents arrays

          if (!parentTitle.children) {
            parentTitle.children = [];
          }

          if (!parentTitle.parents) {
            parentTitle.parents = [];
          }

          if (!parentTitle.directParents) {
            parentTitle.directParents = [];
          }

          for (var potentialChild = title + 1; potentialChild < this.titles.length; potentialChild++) {
            var childTitle = this.titles[potentialChild]; // if titletype is greater than parent, title is child of parent

            if (childTitle.titleType > parentTitle.titleType) {
              parentTitle.children.push(childTitle);

              if (!childTitle.parents) {
                childTitle.parents = [];
              }

              if (!childTitle.directParents) {
                childTitle.directParents = [];
              }

              childTitle.parents.push(parentTitle);
            } else {
              break;
            }
          }
        }

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          var _loop2 = function _loop2() {
            var title = _step8.value;

            // look for titles with only root level parents
            if (title.parents.length == 1) {
              title.directParents.push(title.parents[0]);
            } // assign siblings


            if (title.parents.length == 0) {
              title.siblings = [];
            } else {
              title.siblings = _this2.titles.filter(function (o) {
                return o.parents.filter(function (p) {
                  return p.id == title.parents[0].id;
                }).length > 0 && o.parents.length == title.parents.length && o.id != title.id;
              });
            }
          };

          for (var _iterator8 = this.titles[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }
      },
      updateTitles: function updateTitles() {
        this.titles = this.crawl(document.getElementsByTagName("body")[0]);
        this.assignChildren();
        this.checkTitles();
      },
      updateTitlesOnDOMChange: function updateTitlesOnDOMChange(mutationsList) {
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = mutationsList[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var mutation = _step9.value;

            if (mutation.type === "childList") {
              this.updateTitles();
            }
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.observer.disconnect();
    },
    mounted: function mounted() {
      var body = document.getElementsByTagName("body")[0];

      if (this.enableDomListening) {
        var config = {
          attributes: false,
          childList: true,
          subtree: false
        };
        this.observer = new MutationObserver(this.updateTitlesOnDOMChange);
        this.observer.observe(body, config);
      } else {
        (function () {
          if (typeof window.CustomEvent === "function") return false;

          function CustomEvent(event, params) {
            params = params || {
              bubbles: false,
              cancelable: false,
              detail: null
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          }

          window.CustomEvent = CustomEvent;
        })();

        window.addEventListener("IntusFacultas-table-of-contents", this.updateTitles);
      }

      this.updateTitles();
      window.addEventListener("scroll", this.checkTitles);

      (function () {

        function polyfill() {
          // aliases
          var w = window;
          var d = document; // return if scroll behavior is supported and polyfill is not forced

          if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
            return;
          } // globals


          var Element = w.HTMLElement || w.Element;
          var SCROLL_TIME = 468; // object gathering original scroll methods

          var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elementScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
          }; // define timing method

          var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
          /**
           * indicates if a the current browser is made by Microsoft
           * @method isMicrosoftBrowser
           * @param {String} userAgent
           * @returns {Boolean}
           */

          function isMicrosoftBrowser(userAgent) {
            var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
            return new RegExp(userAgentPatterns.join("|")).test(userAgent);
          }
          /*
           * IE has rounding bug rounding down clientHeight and clientWidth and
           * rounding up scrollHeight and scrollWidth causing false positives
           * on hasScrollableSpace
           */


          var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
          /**
           * changes scroll position inside an element
           * @method scrollElement
           * @param {Number} x
           * @param {Number} y
           * @returns {undefined}
           */

          function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
          }
          /**
           * returns result of applying ease math function to a number
           * @method ease
           * @param {Number} k
           * @returns {Number}
           */


          function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
          /**
           * indicates if a smooth behavior should be applied
           * @method shouldBailOut
           * @param {Number|Object} firstArg
           * @returns {Boolean}
           */


          function shouldBailOut(firstArg) {
            if (firstArg === null || _typeof(firstArg) !== "object" || firstArg.behavior === undefined || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
              // first argument is not an object/null
              // or behavior is auto, instant or undefined
              return true;
            }

            if (_typeof(firstArg) === "object" && firstArg.behavior === "smooth") {
              // first argument is an object and behavior is smooth
              return false;
            } // throw error when behavior is not supported


            throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
          }
          /**
           * indicates if an element has scrollable space in the provided axis
           * @method hasScrollableSpace
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function hasScrollableSpace(el, axis) {
            if (axis === "Y") {
              return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
            }

            if (axis === "X") {
              return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
            }
          }
          /**
           * indicates if an element has a scrollable overflow property in the axis
           * @method canOverflow
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function canOverflow(el, axis) {
            var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
            return overflowValue === "auto" || overflowValue === "scroll";
          }
          /**
           * indicates if an element can be scrolled in either axis
           * @method isScrollable
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function isScrollable(el) {
            var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
            var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
            return isScrollableY || isScrollableX;
          }
          /**
           * finds scrollable parent of an element
           * @method findScrollableParent
           * @param {Node} el
           * @returns {Node} el
           */


          function findScrollableParent(el) {
            while (el !== d.body && isScrollable(el) === false) {
              el = el.parentNode || el.host;
            }

            return el;
          }
          /**
           * self invoked function that, given a context, steps through scrolling
           * @method step
           * @param {Object} context
           * @returns {undefined}
           */


          function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

            elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

            if (currentX !== context.x || currentY !== context.y) {
              w.requestAnimationFrame(step.bind(w, context));
            }
          }
          /**
           * scrolls window or element with a smooth behavior
           * @method smoothScroll
           * @param {Object|Node} el
           * @param {Number} x
           * @param {Number} y
           * @returns {undefined}
           */


          function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now(); // define scroll context

            if (el === d.body) {
              scrollable = w;
              startX = w.scrollX || w.pageXOffset;
              startY = w.scrollY || w.pageYOffset;
              method = original.scroll;
            } else {
              scrollable = el;
              startX = el.scrollLeft;
              startY = el.scrollTop;
              method = scrollElement;
            } // scroll looping over a frame


            step({
              scrollable: scrollable,
              method: method,
              startTime: startTime,
              startX: startX,
              startY: startY,
              x: x,
              y: y
            });
          } // ORIGINAL METHODS OVERRIDES
          // w.scroll and w.scrollTo


          w.scroll = w.scrollTo = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
          }; // w.scrollBy


          w.scrollBy = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0])) {
              original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== "object" ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
          }; // Element.prototype.scroll and Element.prototype.scrollTo


          Element.prototype.scroll = Element.prototype.scrollTo = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              // if one number is passed, throw error to match Firefox implementation
              if (typeof arguments[0] === "number" && arguments[1] === undefined) {
                throw new SyntaxError("Value could not be converted");
              }

              original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== "object" ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
              return;
            }

            var left = arguments[0].left;
            var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

            smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
          }; // Element.prototype.scrollBy


          Element.prototype.scrollBy = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
              return;
            }

            this.scroll({
              left: ~~arguments[0].left + this.scrollLeft,
              top: ~~arguments[0].top + this.scrollTop,
              behavior: arguments[0].behavior
            });
          }; // Element.prototype.scrollIntoView


          Element.prototype.scrollIntoView = function () {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
              original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();

            if (scrollableParent !== d.body) {
              // reveal element inside parent
              smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

              if (w.getComputedStyle(scrollableParent).position !== "fixed") {
                w.scrollBy({
                  left: parentRects.left,
                  top: parentRects.top,
                  behavior: "smooth"
                });
              }
            } else {
              // reveal element in viewport
              w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: "smooth"
              });
            }
          };
        }

        if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
          // commonjs
          module.exports = {
            polyfill: polyfill
          };
        } else {
          // global
          polyfill();
        }
      })();
    }
  }, "beforeDestroy", function beforeDestroy() {
    if (!this.enableDomListening) {
      window.removeEventListener("IntusFacultas-table-of-contents", this.updateTitles);
    }

    window.removeEventListener("scroll", this.checkTitles);
  });

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
  const __vue_script__ = TableOfContents;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "contents-container",
      { attrs: { width: _vm.width } },
      [
        _c(
          "contents-table",
          [
            _c(
              "item",
              {
                staticClass: "visible-title table-of-contents-title",
                attrs: { flavor: _vm.flavor, tabindex: "0" },
                on: {
                  click: _vm.toggleOverride,
                  keyup: [
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "space", 32, $event.key, [
                          " ",
                          "Spacebar"
                        ])
                      ) {
                        return null
                      }
                      return _vm.toggleOverride($event)
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.toggleOverride($event)
                    }
                  ]
                }
              },
              [
                _vm._v("\n      Table of Contents\n      "),
                !_vm.override
                  ? _c("toggler", [_vm._v("+")])
                  : _c("toggler", [_vm._v("−")])
              ],
              1
            ),
            _vm._v(" "),
            _vm._l(_vm.titles, function(title) {
              return _c(
                "item",
                {
                  key: title.id,
                  class: {
                    "active-title": title.visible,
                    "margined-title": _vm.margined(title),
                    "visible-title": _vm.computeVisibility(title)
                  },
                  attrs: {
                    flavor: title.visible ? "MissileOrange" : _vm.flavor,
                    tabindex: _vm.computeVisibility(title) ? 0 : -1,
                    padding: title.titleType - 1
                  },
                  on: {
                    click: function($event) {
                      return _vm.scrollToEl(title.el)
                    },
                    keyup: [
                      function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k($event.keyCode, "space", 32, $event.key, [
                            " ",
                            "Spacebar"
                          ])
                        ) {
                          return null
                        }
                        return _vm.scrollToEl(title.el)
                      },
                      function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                        ) {
                          return null
                        }
                        return _vm.scrollToEl(title.el)
                      }
                    ]
                  }
                },
                [_vm._v(_vm._s(title.el.innerText))]
              )
            })
          ],
          2
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-5117a510_0", { source: "\n.visible-title {\r\n  max-height: 100px !important;\r\n  padding-bottom: 2px;\r\n  padding-top: 2px;\n}\n.margined-title {\r\n  border-left-style: solid;\r\n  border-left-width: 3px;\r\n  border-left-color: #ff7200 !important;\n}\n.active-title {\r\n  font-weight: bold;\n}\n.table-of-contents-title {\r\n  font-size: 16px;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\TableOfContents\\src\\TableOfContents.vue"],"names":[],"mappings":";AAu+BA;EACA,4BAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,wBAAA;EACA,sBAAA;EACA,qCAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,eAAA;AACA","file":"TableOfContents.vue","sourcesContent":["<template>\r\n  <contents-container :width=\"width\">\r\n    <contents-table>\r\n      <item\r\n        :flavor=\"flavor\"\r\n        tabindex=\"0\"\r\n        class=\"visible-title table-of-contents-title\"\r\n        @click=\"toggleOverride\"\r\n        @keyup.space=\"toggleOverride\"\r\n        @keyup.enter=\"toggleOverride\"\r\n      >\r\n        Table of Contents\r\n        <toggler v-if=\"!override\">&#43;</toggler>\r\n        <toggler v-else>&#8722;</toggler>\r\n      </item>\r\n      <item\r\n        :flavor=\"title.visible ? 'MissileOrange' : flavor\"\r\n        :tabindex=\"computeVisibility(title) ? 0 : -1\"\r\n        v-for=\"title in titles\"\r\n        :key=\"title.id\"\r\n        :padding=\"title.titleType - 1\"\r\n        :class=\"{\r\n          'active-title': title.visible,\r\n          'margined-title': margined(title),\r\n          'visible-title': computeVisibility(title),\r\n        }\"\r\n        @click=\"scrollToEl(title.el)\"\r\n        @keyup.space=\"scrollToEl(title.el)\"\r\n        @keyup.enter=\"scrollToEl(title.el)\"\r\n        >{{ title.el.innerText }}</item\r\n      >\r\n    </contents-table>\r\n  </contents-container>\r\n</template>\r\n\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport { TextTheme } from \"@IntusFacultas/design-system\";\r\nif (!Element.prototype.matches) {\r\n  Element.prototype.matches =\r\n    Element.prototype.msMatchesSelector ||\r\n    Element.prototype.webkitMatchesSelector;\r\n}\r\n\r\nif (!Array.from) {\r\n  Array.from = (function () {\r\n    var toStr = Object.prototype.toString;\r\n    var isCallable = function (fn) {\r\n      return typeof fn === \"function\" || toStr.call(fn) === \"[object Function]\";\r\n    };\r\n    var toInteger = function (value) {\r\n      var number = Number(value);\r\n      if (isNaN(number)) {\r\n        return 0;\r\n      }\r\n      if (number === 0 || !isFinite(number)) {\r\n        return number;\r\n      }\r\n      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));\r\n    };\r\n    var maxSafeInteger = Math.pow(2, 53) - 1;\r\n    var toLength = function (value) {\r\n      var len = toInteger(value);\r\n      return Math.min(Math.max(len, 0), maxSafeInteger);\r\n    };\r\n\r\n    // The length property of the from method is 1.\r\n    return function from(arrayLike /*, mapFn, thisArg */) {\r\n      // 1. Let C be the this value.\r\n      var C = this;\r\n\r\n      // 2. Let items be ToObject(arrayLike).\r\n      var items = Object(arrayLike);\r\n\r\n      // 3. ReturnIfAbrupt(items).\r\n      if (arrayLike == null) {\r\n        throw new TypeError(\r\n          \"Array.from requires an array-like object - not null or undefined\"\r\n        );\r\n      }\r\n\r\n      // 4. If mapfn is undefined, then let mapping be false.\r\n      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;\r\n      var T;\r\n      if (typeof mapFn !== \"undefined\") {\r\n        // 5. else\r\n        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.\r\n        if (!isCallable(mapFn)) {\r\n          throw new TypeError(\r\n            \"Array.from: when provided, the second argument must be a function\"\r\n          );\r\n        }\r\n\r\n        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.\r\n        if (arguments.length > 2) {\r\n          T = arguments[2];\r\n        }\r\n      }\r\n\r\n      // 10. Let lenValue be Get(items, \"length\").\r\n      // 11. Let len be ToLength(lenValue).\r\n      var len = toLength(items.length);\r\n\r\n      // 13. If IsConstructor(C) is true, then\r\n      // 13. a. Let A be the result of calling the [[Construct]] internal method\r\n      // of C with an argument list containing the single item len.\r\n      // 14. a. Else, Let A be ArrayCreate(len).\r\n      var A = isCallable(C) ? Object(new C(len)) : new Array(len);\r\n\r\n      // 16. Let k be 0.\r\n      var k = 0;\r\n      // 17. Repeat, while k < len… (also steps a - h)\r\n      var kValue;\r\n      while (k < len) {\r\n        kValue = items[k];\r\n        if (mapFn) {\r\n          A[k] =\r\n            typeof T === \"undefined\"\r\n              ? mapFn(kValue, k)\r\n              : mapFn.call(T, kValue, k);\r\n        } else {\r\n          A[k] = kValue;\r\n        }\r\n        k += 1;\r\n      }\r\n      // 18. Let putStatus be Put(A, \"length\", len, true).\r\n      A.length = len;\r\n      // 20. Return A.\r\n      return A;\r\n    };\r\n  })();\r\n}\r\n\r\nconst props = {\r\n  padding: {\r\n    type: Number,\r\n    default: 0,\r\n  },\r\n  breakpoint: {\r\n    type: Number,\r\n    default: 576,\r\n  },\r\n  topOffset: {\r\n    type: Number,\r\n    default: 100,\r\n  },\r\n  width: {\r\n    type: String,\r\n    default: \"auto\",\r\n  },\r\n  textTheme: {\r\n    type: Object,\r\n    default: function () {\r\n      return TextTheme;\r\n    },\r\n  },\r\n  flavor: String,\r\n};\r\nconst Toggler = styled.span`\r\n  color: #ff7200;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  pointer-events: none;\r\n`;\r\nconst ContentsContainer = styled(\"nav\", props)`\r\n  display: block;\r\n  max-width: ${(props) => (props.width ? props.width : \"auto\")};\r\n`;\r\nconst ContentsTable = styled(\"ul\", props)`\r\n  & * {\r\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\r\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none;\r\n  }\r\n  padding-left: 0px;\r\n  list-style: none;\r\n`;\r\n\r\nconst Item = styled(\"li\", props)`\r\n  padding-left: ${(props) => props.padding * 10 + 10}px;\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  transition: 0.2s all;\r\n  max-height: 0px;\r\n  overflow: hidden;\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n  color: ${(props) =>\r\n    props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color};\r\n  ${(props) =>\r\n    props.flavor\r\n      ? props.textTheme[props.flavor]\r\n        ? \"color \" + props.textTheme[props.flavor].color\r\n        : \"\"\r\n      : \"\"};\r\n`;\r\n\r\nexport const TableOfContents = {\r\n  components: { ContentsTable, Item, ContentsContainer, Toggler },\r\n  data() {\r\n    return {\r\n      titles: [],\r\n      override: false,\r\n      scrollToOverride: false,\r\n      observer: null,\r\n    };\r\n  },\r\n  props: {\r\n    width: {\r\n      type: String,\r\n      default: \"auto\",\r\n    },\r\n    enableDomListening: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    ignoreQuery: {\r\n      type: [String, Array],\r\n      default: \"\",\r\n    },\r\n    queryOverride: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    offset: {\r\n      type: Number,\r\n      default: 0,\r\n    },\r\n  },\r\n  methods: {\r\n    toggleOverride() {\r\n      this.override = !this.override;\r\n      for (let title of this.titles) {\r\n        title.override = this.override;\r\n      }\r\n    },\r\n    delayCollapse(title) {\r\n      setTimeout(() => (title.override = false), 500);\r\n    },\r\n    scrollToEl(el) {\r\n      const y =\r\n        el.getBoundingClientRect().top + window.pageYOffset - this.offset;\r\n      // el.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\r\n      let IEHoldOff = 5; // IE is dumb and can't appropriately calculate viewport\r\n      window.scrollTo({ top: y - IEHoldOff, behavior: \"smooth\" });\r\n      this.scrollToOverride = true;\r\n      let self = this;\r\n      setTimeout(function () {\r\n        setTimeout(() => {\r\n          self.checkTitles();\r\n        }, 100);\r\n        self.scrollToOverride = false;\r\n      }, 500);\r\n      el.focus();\r\n    },\r\n    debounce(func, wait, immediate) {\r\n      // pulled from https://davidwalsh.name/javascript-debounce-function\r\n      var timeout;\r\n      return function () {\r\n        var context = this,\r\n          args = arguments;\r\n        var later = function () {\r\n          timeout = null;\r\n          if (!immediate) func.apply(context, args);\r\n        };\r\n        var callNow = immediate && !timeout;\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(later, wait);\r\n        if (callNow) func.apply(context, args);\r\n      };\r\n    },\r\n    computeOverride(title) {\r\n      return (\r\n        (!this.scrollToOverride && this.override) ||\r\n        title.override ||\r\n        title.children.filter((child) => child.override).length > 0 ||\r\n        title.parents.filter((parent) => parent.override).length > 0\r\n      );\r\n    },\r\n    computeScreenVisibility(title) {\r\n      return (\r\n        !this.scrollToOverride &&\r\n        (title.visible ||\r\n          title.children.filter((child) => child.visible).length > 0)\r\n      );\r\n    },\r\n    computeVisibility(title) {\r\n      return (\r\n        title.parents.length == 0 ||\r\n        (title.directParents.length == 1 &&\r\n          title.parents.length == 1 &&\r\n          this.computeScreenVisibility(title.directParents[0])) ||\r\n        this.computeOverride(title) ||\r\n        this.computeScreenVisibility(title)\r\n      );\r\n    },\r\n    margined(title) {\r\n      return title.visible; //|| title.children.filter(child => child.visible).length > 0\r\n    },\r\n    isInView(el) {\r\n      // pulled from https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport\r\n      let box = el.getBoundingClientRect();\r\n      return box.top < window.innerHeight && box.bottom >= 0;\r\n    },\r\n    getPathTo(element) {\r\n      // pulled from https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931\r\n      if (element.id !== \"\") return 'id(\"' + element.id + '\")';\r\n      if (element === document.body) return element.tagName;\r\n\r\n      var ix = 0;\r\n      var siblings = element.parentNode.childNodes;\r\n      for (var i = 0; i < siblings.length; i++) {\r\n        var sibling = siblings[i];\r\n        if (sibling === element)\r\n          return (\r\n            this.getPathTo(element.parentNode) +\r\n            \"/\" +\r\n            element.tagName +\r\n            \"[\" +\r\n            (ix + 1) +\r\n            \"]\"\r\n          );\r\n        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;\r\n      }\r\n    },\r\n    checkIfTitle(el) {\r\n      let notDisqualified = true;\r\n      if (this.ignoreQuery) {\r\n        if (Array.isArray(this.ignoreQuery)) {\r\n          for (let query of this.ignoreQuery) {\r\n            if (el.matches(query)) {\r\n              notDisqualified = false;\r\n              break;\r\n            }\r\n          }\r\n        } else {\r\n          notDisqualified = !el.matches(this.ignoreQuery);\r\n        }\r\n      }\r\n      if (this.queryOverride) {\r\n        return el.matches(this.queryOverride) && notDisqualified;\r\n      } else {\r\n        return el.matches(\"h1, h2, h3, h4, h5, h6\") && notDisqualified;\r\n      }\r\n    },\r\n    calculateTitleType(el) {\r\n      if (this.queryOverride) {\r\n        return el.getAttribute(\"data-rank\");\r\n      } else {\r\n        return parseInt(el.tagName[1]);\r\n      }\r\n    },\r\n    crawl(node) {\r\n      let titles = [];\r\n      let stack = [node];\r\n      let visited = [];\r\n      while (stack.length > 0) {\r\n        let el = stack.pop();\r\n        if (typeof el.children !== \"undefined\") {\r\n          for (let child of Array.from(el.children).filter(\r\n            (c) => visited.indexOf(c) == -1 && !c.isEqualNode(el)\r\n          )) {\r\n            stack.push(child);\r\n          }\r\n        }\r\n        let path = this.getPathTo(el);\r\n        let notVisited = visited.indexOf(path) == -1;\r\n        let isTitle = this.checkIfTitle(el);\r\n        if (notVisited && isTitle) {\r\n          titles.push({\r\n            el: el,\r\n            id: this.getPathTo(el),\r\n            titleType: this.calculateTitleType(el),\r\n            offset: -1,\r\n            visible: false,\r\n            hovered: false,\r\n            override: false,\r\n          });\r\n        }\r\n        visited.push(this.getPathTo(el));\r\n      }\r\n      return titles.reverse();\r\n    },\r\n    checkTitles() {\r\n      let yOffset = window.pageYOffset;\r\n      if (this.titles.length == 0) {\r\n        return;\r\n      }\r\n      for (let [index, title] of this.titles.entries()) {\r\n        title.offset = title.el.getBoundingClientRect().top;\r\n        if (title.offset < 20 + this.offset && title.offset > 0) {\r\n          for (let other of this.titles.filter((o) => o.visible)) {\r\n            other.visible = false;\r\n          }\r\n          title.visible = true;\r\n        } else if (\r\n          title.visible &&\r\n          title.el.getBoundingClientRect().bottom >=\r\n            (window.innerHeight || document.documentElement.clientHeight)\r\n        ) {\r\n          if (this.titles[index - 1]) this.titles[index - 1].visible = true;\r\n          title.visible = false;\r\n        }\r\n      }\r\n      if (\r\n        yOffset == 0 &&\r\n        window.innerWidth - document.documentElement.clientWidth == 0\r\n      ) {\r\n        for (let other of this.titles.filter((o) => o.visible)) {\r\n          other.visible = false;\r\n        }\r\n        this.titles[0].visible = true;\r\n      } else if (window.innerHeight + yOffset >= document.body.offsetHeight) {\r\n        for (let other of this.titles.filter((o) => o.visible)) {\r\n          other.visible = false;\r\n        }\r\n        this.titles[this.titles.length - 1].visible = true;\r\n      }\r\n    },\r\n    assignChildren() {\r\n      for (let title = 0; title < this.titles.length; title++) {\r\n        let parentTitle = this.titles[title];\r\n\r\n        // instantiate parents, children, and direct parents arrays\r\n        if (!parentTitle.children) {\r\n          parentTitle.children = [];\r\n        }\r\n        if (!parentTitle.parents) {\r\n          parentTitle.parents = [];\r\n        }\r\n        if (!parentTitle.directParents) {\r\n          parentTitle.directParents = [];\r\n        }\r\n\r\n        for (\r\n          let potentialChild = title + 1;\r\n          potentialChild < this.titles.length;\r\n          potentialChild++\r\n        ) {\r\n          let childTitle = this.titles[potentialChild];\r\n\r\n          // if titletype is greater than parent, title is child of parent\r\n          if (childTitle.titleType > parentTitle.titleType) {\r\n            parentTitle.children.push(childTitle);\r\n            if (!childTitle.parents) {\r\n              childTitle.parents = [];\r\n            }\r\n            if (!childTitle.directParents) {\r\n              childTitle.directParents = [];\r\n            }\r\n\r\n            childTitle.parents.push(parentTitle);\r\n          } else {\r\n            break;\r\n          }\r\n        }\r\n      }\r\n      for (let title of this.titles) {\r\n        // look for titles with only root level parents\r\n        if (title.parents.length == 1) {\r\n          title.directParents.push(title.parents[0]);\r\n        }\r\n        // assign siblings\r\n        if (title.parents.length == 0) {\r\n          title.siblings = [];\r\n        } else {\r\n          title.siblings = this.titles.filter(\r\n            (o) =>\r\n              o.parents.filter((p) => p.id == title.parents[0].id).length > 0 &&\r\n              o.parents.length == title.parents.length &&\r\n              o.id != title.id\r\n          );\r\n        }\r\n      }\r\n    },\r\n    updateTitles() {\r\n      this.titles = this.crawl(document.getElementsByTagName(\"body\")[0]);\r\n      this.assignChildren();\r\n      this.checkTitles();\r\n    },\r\n    updateTitlesOnDOMChange(mutationsList) {\r\n      for (let mutation of mutationsList) {\r\n        if (mutation.type === \"childList\") {\r\n          this.updateTitles();\r\n        }\r\n      }\r\n    },\r\n  },\r\n  beforeDestroy() {\r\n    this.observer.disconnect();\r\n  },\r\n  mounted() {\r\n    let body = document.getElementsByTagName(\"body\")[0];\r\n    if (this.enableDomListening) {\r\n      let config = { attributes: false, childList: true, subtree: false };\r\n      this.observer = new MutationObserver(this.updateTitlesOnDOMChange);\r\n      this.observer.observe(body, config);\r\n    } else {\r\n      (function () {\r\n        if (typeof window.CustomEvent === \"function\") return false;\r\n\r\n        function CustomEvent(event, params) {\r\n          params = params || {\r\n            bubbles: false,\r\n            cancelable: false,\r\n            detail: null,\r\n          };\r\n          var evt = document.createEvent(\"CustomEvent\");\r\n          evt.initCustomEvent(\r\n            event,\r\n            params.bubbles,\r\n            params.cancelable,\r\n            params.detail\r\n          );\r\n          return evt;\r\n        }\r\n\r\n        window.CustomEvent = CustomEvent;\r\n      })();\r\n      window.addEventListener(\r\n        \"IntusFacultas-table-of-contents\",\r\n        this.updateTitles\r\n      );\r\n    }\r\n    this.updateTitles();\r\n    window.addEventListener(\"scroll\", this.checkTitles);\r\n    (function () {\r\n      \"use strict\";\r\n\r\n      // polyfill\r\n      function polyfill() {\r\n        // aliases\r\n        var w = window;\r\n        var d = document;\r\n\r\n        // return if scroll behavior is supported and polyfill is not forced\r\n        if (\r\n          \"scrollBehavior\" in d.documentElement.style &&\r\n          w.__forceSmoothScrollPolyfill__ !== true\r\n        ) {\r\n          return;\r\n        }\r\n\r\n        // globals\r\n        var Element = w.HTMLElement || w.Element;\r\n        var SCROLL_TIME = 468;\r\n\r\n        // object gathering original scroll methods\r\n        var original = {\r\n          scroll: w.scroll || w.scrollTo,\r\n          scrollBy: w.scrollBy,\r\n          elementScroll: Element.prototype.scroll || scrollElement,\r\n          scrollIntoView: Element.prototype.scrollIntoView,\r\n        };\r\n\r\n        // define timing method\r\n        var now =\r\n          w.performance && w.performance.now\r\n            ? w.performance.now.bind(w.performance)\r\n            : Date.now;\r\n\r\n        /**\r\n         * indicates if a the current browser is made by Microsoft\r\n         * @method isMicrosoftBrowser\r\n         * @param {String} userAgent\r\n         * @returns {Boolean}\r\n         */\r\n        function isMicrosoftBrowser(userAgent) {\r\n          var userAgentPatterns = [\"MSIE \", \"Trident/\", \"Edge/\"];\r\n\r\n          return new RegExp(userAgentPatterns.join(\"|\")).test(userAgent);\r\n        }\r\n\r\n        /*\r\n         * IE has rounding bug rounding down clientHeight and clientWidth and\r\n         * rounding up scrollHeight and scrollWidth causing false positives\r\n         * on hasScrollableSpace\r\n         */\r\n        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent)\r\n          ? 1\r\n          : 0;\r\n\r\n        /**\r\n         * changes scroll position inside an element\r\n         * @method scrollElement\r\n         * @param {Number} x\r\n         * @param {Number} y\r\n         * @returns {undefined}\r\n         */\r\n        function scrollElement(x, y) {\r\n          this.scrollLeft = x;\r\n          this.scrollTop = y;\r\n        }\r\n\r\n        /**\r\n         * returns result of applying ease math function to a number\r\n         * @method ease\r\n         * @param {Number} k\r\n         * @returns {Number}\r\n         */\r\n        function ease(k) {\r\n          return 0.5 * (1 - Math.cos(Math.PI * k));\r\n        }\r\n\r\n        /**\r\n         * indicates if a smooth behavior should be applied\r\n         * @method shouldBailOut\r\n         * @param {Number|Object} firstArg\r\n         * @returns {Boolean}\r\n         */\r\n        function shouldBailOut(firstArg) {\r\n          if (\r\n            firstArg === null ||\r\n            typeof firstArg !== \"object\" ||\r\n            firstArg.behavior === undefined ||\r\n            firstArg.behavior === \"auto\" ||\r\n            firstArg.behavior === \"instant\"\r\n          ) {\r\n            // first argument is not an object/null\r\n            // or behavior is auto, instant or undefined\r\n            return true;\r\n          }\r\n\r\n          if (typeof firstArg === \"object\" && firstArg.behavior === \"smooth\") {\r\n            // first argument is an object and behavior is smooth\r\n            return false;\r\n          }\r\n\r\n          // throw error when behavior is not supported\r\n          throw new TypeError(\r\n            \"behavior member of ScrollOptions \" +\r\n              firstArg.behavior +\r\n              \" is not a valid value for enumeration ScrollBehavior.\"\r\n          );\r\n        }\r\n\r\n        /**\r\n         * indicates if an element has scrollable space in the provided axis\r\n         * @method hasScrollableSpace\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function hasScrollableSpace(el, axis) {\r\n          if (axis === \"Y\") {\r\n            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;\r\n          }\r\n\r\n          if (axis === \"X\") {\r\n            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;\r\n          }\r\n        }\r\n\r\n        /**\r\n         * indicates if an element has a scrollable overflow property in the axis\r\n         * @method canOverflow\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function canOverflow(el, axis) {\r\n          var overflowValue = w.getComputedStyle(el, null)[\"overflow\" + axis];\r\n\r\n          return overflowValue === \"auto\" || overflowValue === \"scroll\";\r\n        }\r\n\r\n        /**\r\n         * indicates if an element can be scrolled in either axis\r\n         * @method isScrollable\r\n         * @param {Node} el\r\n         * @param {String} axis\r\n         * @returns {Boolean}\r\n         */\r\n        function isScrollable(el) {\r\n          var isScrollableY =\r\n            hasScrollableSpace(el, \"Y\") && canOverflow(el, \"Y\");\r\n          var isScrollableX =\r\n            hasScrollableSpace(el, \"X\") && canOverflow(el, \"X\");\r\n\r\n          return isScrollableY || isScrollableX;\r\n        }\r\n\r\n        /**\r\n         * finds scrollable parent of an element\r\n         * @method findScrollableParent\r\n         * @param {Node} el\r\n         * @returns {Node} el\r\n         */\r\n        function findScrollableParent(el) {\r\n          while (el !== d.body && isScrollable(el) === false) {\r\n            el = el.parentNode || el.host;\r\n          }\r\n\r\n          return el;\r\n        }\r\n\r\n        /**\r\n         * self invoked function that, given a context, steps through scrolling\r\n         * @method step\r\n         * @param {Object} context\r\n         * @returns {undefined}\r\n         */\r\n        function step(context) {\r\n          var time = now();\r\n          var value;\r\n          var currentX;\r\n          var currentY;\r\n          var elapsed = (time - context.startTime) / SCROLL_TIME;\r\n\r\n          // avoid elapsed times higher than one\r\n          elapsed = elapsed > 1 ? 1 : elapsed;\r\n\r\n          // apply easing to elapsed time\r\n          value = ease(elapsed);\r\n\r\n          currentX = context.startX + (context.x - context.startX) * value;\r\n          currentY = context.startY + (context.y - context.startY) * value;\r\n\r\n          context.method.call(context.scrollable, currentX, currentY);\r\n\r\n          // scroll more if we have not reached our destination\r\n          if (currentX !== context.x || currentY !== context.y) {\r\n            w.requestAnimationFrame(step.bind(w, context));\r\n          }\r\n        }\r\n\r\n        /**\r\n         * scrolls window or element with a smooth behavior\r\n         * @method smoothScroll\r\n         * @param {Object|Node} el\r\n         * @param {Number} x\r\n         * @param {Number} y\r\n         * @returns {undefined}\r\n         */\r\n        function smoothScroll(el, x, y) {\r\n          var scrollable;\r\n          var startX;\r\n          var startY;\r\n          var method;\r\n          var startTime = now();\r\n\r\n          // define scroll context\r\n          if (el === d.body) {\r\n            scrollable = w;\r\n            startX = w.scrollX || w.pageXOffset;\r\n            startY = w.scrollY || w.pageYOffset;\r\n            method = original.scroll;\r\n          } else {\r\n            scrollable = el;\r\n            startX = el.scrollLeft;\r\n            startY = el.scrollTop;\r\n            method = scrollElement;\r\n          }\r\n\r\n          // scroll looping over a frame\r\n          step({\r\n            scrollable: scrollable,\r\n            method: method,\r\n            startTime: startTime,\r\n            startX: startX,\r\n            startY: startY,\r\n            x: x,\r\n            y: y,\r\n          });\r\n        }\r\n\r\n        // ORIGINAL METHODS OVERRIDES\r\n        // w.scroll and w.scrollTo\r\n        w.scroll = w.scrollTo = function () {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.scroll.call(\r\n              w,\r\n              arguments[0].left !== undefined\r\n                ? arguments[0].left\r\n                : typeof arguments[0] !== \"object\"\r\n                ? arguments[0]\r\n                : w.scrollX || w.pageXOffset,\r\n              // use top prop, second argument if present or fallback to scrollY\r\n              arguments[0].top !== undefined\r\n                ? arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? arguments[1]\r\n                : w.scrollY || w.pageYOffset\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            w,\r\n            d.body,\r\n            arguments[0].left !== undefined\r\n              ? ~~arguments[0].left\r\n              : w.scrollX || w.pageXOffset,\r\n            arguments[0].top !== undefined\r\n              ? ~~arguments[0].top\r\n              : w.scrollY || w.pageYOffset\r\n          );\r\n        };\r\n\r\n        // w.scrollBy\r\n        w.scrollBy = function () {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0])) {\r\n            original.scrollBy.call(\r\n              w,\r\n              arguments[0].left !== undefined\r\n                ? arguments[0].left\r\n                : typeof arguments[0] !== \"object\"\r\n                ? arguments[0]\r\n                : 0,\r\n              arguments[0].top !== undefined\r\n                ? arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? arguments[1]\r\n                : 0\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            w,\r\n            d.body,\r\n            ~~arguments[0].left + (w.scrollX || w.pageXOffset),\r\n            ~~arguments[0].top + (w.scrollY || w.pageYOffset)\r\n          );\r\n        };\r\n\r\n        // Element.prototype.scroll and Element.prototype.scrollTo\r\n        Element.prototype.scroll = Element.prototype.scrollTo = function () {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            // if one number is passed, throw error to match Firefox implementation\r\n            if (\r\n              typeof arguments[0] === \"number\" &&\r\n              arguments[1] === undefined\r\n            ) {\r\n              throw new SyntaxError(\"Value could not be converted\");\r\n            }\r\n\r\n            original.elementScroll.call(\r\n              this,\r\n              // use left prop, first number argument or fallback to scrollLeft\r\n              arguments[0].left !== undefined\r\n                ? ~~arguments[0].left\r\n                : typeof arguments[0] !== \"object\"\r\n                ? ~~arguments[0]\r\n                : this.scrollLeft,\r\n              // use top prop, second argument or fallback to scrollTop\r\n              arguments[0].top !== undefined\r\n                ? ~~arguments[0].top\r\n                : arguments[1] !== undefined\r\n                ? ~~arguments[1]\r\n                : this.scrollTop\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          var left = arguments[0].left;\r\n          var top = arguments[0].top;\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          smoothScroll.call(\r\n            this,\r\n            this,\r\n            typeof left === \"undefined\" ? this.scrollLeft : ~~left,\r\n            typeof top === \"undefined\" ? this.scrollTop : ~~top\r\n          );\r\n        };\r\n\r\n        // Element.prototype.scrollBy\r\n        Element.prototype.scrollBy = function () {\r\n          // avoid action when no arguments are passed\r\n          if (arguments[0] === undefined) {\r\n            return;\r\n          }\r\n\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.elementScroll.call(\r\n              this,\r\n              arguments[0].left !== undefined\r\n                ? ~~arguments[0].left + this.scrollLeft\r\n                : ~~arguments[0] + this.scrollLeft,\r\n              arguments[0].top !== undefined\r\n                ? ~~arguments[0].top + this.scrollTop\r\n                : ~~arguments[1] + this.scrollTop\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          this.scroll({\r\n            left: ~~arguments[0].left + this.scrollLeft,\r\n            top: ~~arguments[0].top + this.scrollTop,\r\n            behavior: arguments[0].behavior,\r\n          });\r\n        };\r\n\r\n        // Element.prototype.scrollIntoView\r\n        Element.prototype.scrollIntoView = function () {\r\n          // avoid smooth behavior if not required\r\n          if (shouldBailOut(arguments[0]) === true) {\r\n            original.scrollIntoView.call(\r\n              this,\r\n              arguments[0] === undefined ? true : arguments[0]\r\n            );\r\n\r\n            return;\r\n          }\r\n\r\n          // LET THE SMOOTHNESS BEGIN!\r\n          var scrollableParent = findScrollableParent(this);\r\n          var parentRects = scrollableParent.getBoundingClientRect();\r\n          var clientRects = this.getBoundingClientRect();\r\n\r\n          if (scrollableParent !== d.body) {\r\n            // reveal element inside parent\r\n            smoothScroll.call(\r\n              this,\r\n              scrollableParent,\r\n              scrollableParent.scrollLeft + clientRects.left - parentRects.left,\r\n              scrollableParent.scrollTop + clientRects.top - parentRects.top\r\n            );\r\n\r\n            // reveal parent in viewport unless is fixed\r\n            if (w.getComputedStyle(scrollableParent).position !== \"fixed\") {\r\n              w.scrollBy({\r\n                left: parentRects.left,\r\n                top: parentRects.top,\r\n                behavior: \"smooth\",\r\n              });\r\n            }\r\n          } else {\r\n            // reveal element in viewport\r\n            w.scrollBy({\r\n              left: clientRects.left,\r\n              top: clientRects.top,\r\n              behavior: \"smooth\",\r\n            });\r\n          }\r\n        };\r\n      }\r\n\r\n      if (typeof exports === \"object\" && typeof module !== \"undefined\") {\r\n        // commonjs\r\n        module.exports = { polyfill: polyfill };\r\n      } else {\r\n        // global\r\n        polyfill();\r\n      }\r\n    })();\r\n  },\r\n  beforeDestroy() {\r\n    if (!this.enableDomListening) {\r\n      window.removeEventListener(\r\n        \"IntusFacultas-table-of-contents\",\r\n        this.updateTitles\r\n      );\r\n    }\r\n    window.removeEventListener(\"scroll\", this.checkTitles);\r\n  },\r\n};\r\nexport default TableOfContents;\r\n</script>\r\n\r\n<style>\r\n.visible-title {\r\n  max-height: 100px !important;\r\n  padding-bottom: 2px;\r\n  padding-top: 2px;\r\n}\r\n.margined-title {\r\n  border-left-style: solid;\r\n  border-left-width: 3px;\r\n  border-left-color: #ff7200 !important;\r\n}\r\n.active-title {\r\n  font-weight: bold;\r\n}\r\n.table-of-contents-title {\r\n  font-size: 16px;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  // Import vue component

  var install = function installTableOfContents(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("TableOfContents", __vue_component__);
  }; // Create module definition for Vue.use()


  var plugin = {
    install: install
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()


  __vue_component__.install = install; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.TableOfContents = __vue_component__;
  exports.default = __vue_component__;

  return exports;

}({}));
//# sourceMappingURL=TableOfContents.iife.js.map
