var Sidebar = (function (exports) {
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

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral$2(["\n        padding: ", ";\n        font-size: ", ";\n        border-radius: 3px;\n        font-weight: bold;\n        ", "\n        font-family: Segoe UI, sans-serif;\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ", "\n        background-color: ", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ", ";\n            color: ", "\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ", ";\n            color: ", "\n        }\n        &:disabled:hover {\n            background-color: ", ";\n        }\n    "]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral$2(["\n        padding: ", ";\n        font-size: ", ";\n        border-radius: 3px;\n        font-weight: bold;\n        ", "\n        font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ", "\n        background-color: ", ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ", ";\n            color: ", ";\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ", ";\n            color: ", ";\n        }\n        &:disabled:hover {\n            background-color: ", ";\n        }\n    "]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral$2(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  & button:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$1 = {
    flavor: String,
    small: Boolean,
    large: Boolean,
    block: Boolean,
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
  var ButtonGroup = styled.div(_templateObject$1());
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
  var NButton = styled("button", props$1)(_templateObject3$1(), function (props) {
    return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
  }, function (props) {
    return props.large ? "24px" : props.small ? "12px" : "16px";
  }, function (props) {
    return props.block ? "width: 100%;" : "";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.color ? props.defaultTheme[props.flavor].color.color : "#040404";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color + "80" : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color + "80" : "#dcc";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.focus : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.focus ? props.defaultTheme[props.flavor].color.focus : "#000";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.hover ? props.defaultTheme[props.flavor].background.hover : "#d5d5d5";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.hover : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].color.hover ? props.defaultTheme[props.flavor].color.hover : "#000";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] && props.defaultTheme[props.flavor].background.color ? props.defaultTheme[props.flavor].background.color : "#f0f0f0";
  });

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
  /* script */


  var __vue_script__$1 = NButton;
  /* template */

  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = normalizeComponent$1({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  var components$1 = [{
    label: "NButton",
    component: NButton
  }, {
    label: "DialogButton",
    component: DialogButton
  }, {
    label: "ButtonGroup",
    component: ButtonGroup
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

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["\n  margin-left: 0px;\n  @media (min-width: ", "px) {\n    margin-left: ", "px;\n    margin-top: 0px;\n  }\n  padding-left: 15px;\n"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ", "\n      50%\n  );\n  width: 0.5rem;\n  height: 0.5rem;\n  margin-bottom: 1px;\n  transform: rotate(45deg);\n  transition: 0.3s all;\n  display: inline-block;\n"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin-top: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n  transition: 0.3s max-height;\n  max-height: 0px;\n  overflow-y: hidden;\n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n  padding: 10px 20px;\n  & a {\n    text-decoration: none;\n  }\n  & * {\n    color: ", ";\n  }\n  ", ";\n  ", "\n  &:hover {\n  background-color: ", ";};\n  }\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n  list-style: none;\n  margin-top: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: height 0.3s ease-out;\n\n  @media (min-width: ", "px) {\n    height: auto !important;\n    padding: 5px 0px !important;\n  }\n\n  ", "\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$2() {
    var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n  & * {\n    color: ", ";};\n  }\n"]);

    _templateObject3$2 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: ", "px;\n  z-index: 1;\n  overflow-y: auto;\n  position: absolute;\n  left: 0px;\n  top: ", ";\n  bottom: ", ";\n  ", "\n  @media (max-width: ", "px) {\n    position: relative;\n    width: 100%;\n    padding-left: auto;\n    top: initial;\n    height: initial\n  }\n  & * {\n    webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n  }\n"]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n  display: none;\n  @media (max-width: ", "px) {\n    display: block;\n  }\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var props$2 = {
    flavor: String,
    disabled: Boolean,
    active: Boolean,
    raw: Boolean,
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: null
    },
    breakpoint: {
      type: Number,
      default: 576
    },
    topOffset: {
      type: String,
      default: "0px"
    },
    bottomOffset: {
      type: String,
      default: "0px"
    },
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme$1;
      }
    }
  };
  var SidebarHamburgerContainer = styled("div", props$2)(_templateObject$2(), function (props) {
    return props.breakpoint;
  });
  var SidebarContainer = styled("aside", props$2)(_templateObject2$2(), function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.color : "#f2f2f2";
  }, function (props) {
    return props.width;
  }, function (props) {
    return props.topOffset;
  }, function (props) {
    return props.bottomOffset;
  }, function (props) {
    return !isNaN(props.height) ? "height: ".concat(props.height, "px") : "";
  }, function (props) {
    return props.breakpoint;
  });
  var SidebarTitle = styled("div", props$2)(_templateObject3$2(), function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
  });
  var SidebarContent = styled("div", props$2)(_templateObject4(), function (props) {
    return props.breakpoint + 1;
  }, function (props) {
    return props.raw ? "" : "\n    & * {\n      color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222", ";!important };\n    }\n  \n  ");
  });
  var SidebarItemList = styled.ul(_templateObject5());
  var SidebarItem = styled("li", props$2)(_templateObject6(), function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
  }, function (props) {
    return props.disabled ? "\n    pointer-events: none;\n    & * {color: rgba(0, 0, 0, 0.3) !important;}" : "";
  }, function (props) {
    return props.active ? "\n  background-color: ".concat(props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.focus : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.focus : "#d7d7d7", ";\n  ") : "";
  }, function (props) {
    return props.theme && props.theme[props.flavor] ? props.theme[props.flavor].background.hover : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].background.hover : "#d7d7d7";
  });
  var SidebarDropdown = styled("ul", props$2)(_templateObject7());
  var SidebarDropdownCarat = styled("div", props$2)(_templateObject8(), function (props) {
    return props.disabled ? "rgba(0, 0, 0, 0.3)" : props.theme && props.theme[props.flavor] ? props.theme[props.flavor].color.color : props.defaultTheme[props.flavor] ? props.defaultTheme[props.flavor].color.color : "#222";
  });
  var VueSidebarDropdown = {
    components: {
      SidebarDropdown: SidebarDropdown,
      SidebarDropdownCarat: SidebarDropdownCarat,
      NLabel: NLabel,
      SidebarItem: SidebarItem,
      TextContent: TextContent
    },
    data: function data() {
      return {
        toggled: false
      };
    },
    props: {
      icon: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: ""
      },
      items: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      flavor: {
        type: String,
        default: ""
      }
    },
    computed: {
      uid: function uid() {
        return this._uid;
      },
      computeDropdownClass: function computeDropdownClass() {
        if (this.toggled) {
          return ["sidebar-open-carat"];
        }

        return [];
      }
    },
    methods: {
      toggleDropdown: function toggleDropdown() {
        this.toggled = !this.toggled;
      }
    },
    template: "\n    <div>\n      <div class=\"sidebar-icon\" v-html=\"icon\"></div>\n      <n-label\n        class=\"dropdown-label\"\n        :for=\"'sidebar-dropdown' + uid\"\n        role=\"button\"\n        @click=\"toggleDropdown\"\n        @keyup.space=\"toggleDropdown\"\n        @keyup.enter=\"toggleDropdown\"\n        tabindex=\"0\"\n      >\n        {{text}}\n        <sidebar-dropdown-carat\n          :disabled=\"disabled\"\n          :flavor=\"flavor\"\n          :class=\"computeDropdownClass\"\n        ></sidebar-dropdown-carat>\n      </n-label>\n      <sidebar-dropdown\n        :style=\"{'max-height': toggled ? (items.length * 40) + 'px' : '0px'}\"\n        :tabindex=\"-1\"\n      >\n        <sidebar-item\n          v-for=\"(option, optionIndex) in items\"\n          :key=\"'dropdown' + uid + 'option' + optionIndex\"\n          :flavor=\"flavor\"\n          :disabled=\"option.disabled\"\n          :active=\"option.active\"\n          :tabindex=\"-1\"\n        >\n          <a :href=\"option.url\" :tabindex=\"toggled ? 0 : -1\">\n            <div class=\"sidebar-icon\" v-html=\"option.icon\"></div>\n            <text-content :size=\"13\">{{option.text}}</text-content>\n          </a>\n        </sidebar-item>\n      </sidebar-dropdown>\n    </div>\n  "
  };
  var Sidebar = {
    components: {
      SidebarContainer: SidebarContainer,
      SidebarHamburgerContainer: SidebarHamburgerContainer,
      SidebarTitle: SidebarTitle,
      SidebarContent: SidebarContent,
      SidebarItemList: SidebarItemList,
      SidebarItem: SidebarItem,
      TextContent: TextContent,
      VueSidebarDropdown: VueSidebarDropdown,
      NButton: NButton
    },
    data: function data() {
      return {
        windowWidth: 0,
        open: true
      };
    },
    mounted: function mounted() {
      var self = this;
      window.addEventListener("click", self.checkOffclick);
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener("click", self.checkOffclick);
    },
    methods: {
      collapseSection: function collapseSection(element) {
        // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

        var elementTransition = element.style.transition;
        element.style.transition = "";
        element.style.height = sectionHeight + "px !important";
        element.style.padding = "0px 0px"; // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'

        requestAnimationFrame(function () {
          element.style.height = sectionHeight + "px";
          element.style.transition = elementTransition; // element.style.overflowY = 'hidden';
          // on the next frame (as soon as the previous style change has taken effect),
          // have the element transition to height: 0

          requestAnimationFrame(function () {
            element.style.height = 0 + "px";
          });
        }); // mark the section as "currently collapsed"

        element.setAttribute("data-collapsed", "true");
      },
      expandSection: function expandSection(element) {
        // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight; // have the element transition to the height of its inner content

        element.style.height = sectionHeight + "px";
        element.style.padding = "5px 0px"; // element.style.overflowY = "auto"
        // when the next css transition finishes (which should be the one we just triggered)

        element.addEventListener("transitionend", function () {
          // remove this event listener so it only gets triggered once
          element.removeEventListener("transitionend", this);

          if (element.getAttribute("data-collapsed") == "false") {
            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = "auto";
          }
        }); // mark the section as "currently not collapsed"

        element.setAttribute("data-collapsed", "false");
      },
      checkOffclick: function checkOffclick($e) {
        /**
         * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another
         */
        var self = this;

        function isChild(obj, parentObj) {
          if (obj.isEqualNode(parentObj)) return true;

          while (obj = obj.parentNode) {
            if (obj.isEqualNode(parentObj)) return true;
          }

          return false;
        }

        if (self.open && this.$refs.sidebar && !isChild($e.target, this.$refs.sidebar.$el)) {
          self.open = false;
          self.collapseSection(this.$refs.content.$el);
        }
      },
      toggleAccordion: function toggleAccordion() {
        this.open = !this.open;

        if (this.open) {
          this.expandSection(this.$refs.content.$el);
        } else {
          this.collapseSection(this.$refs.content.$el);
        }
      },
      changeWindow: function changeWindow($e) {
        window.location.href = $e;
      }
    },
    props: {
      sidebarTitle: {
        type: String,
        default: "Sidebar"
      },
      flavor: {
        type: String,
        default: ""
      },
      bottomOffset: {
        type: String,
        default: "0px"
      },
      topOffset: {
        type: String,
        default: ""
      },
      width: {
        type: Number,
        default: 200
      },
      height: {
        type: [Number, Object],
        default: null
      },
      breakpoint: {
        type: Number,
        default: 576
      },
      items: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    }
  };
  var SidebarOffsetContent = styled("div", props$2)(_templateObject9(), function (props) {
    return props.breakpoint;
  }, function (props) {
    return props.width;
  });

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
  const __vue_script__$2 = Sidebar;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "sidebar-container",
      {
        ref: "sidebar",
        attrs: {
          flavor: _vm.flavor,
          "top-offset": _vm.topOffset,
          "bottom-offset": _vm.bottomOffset,
          id: "sidebar",
          width: _vm.width,
          height: _vm.height,
          breakpoint: _vm.breakpoint
        }
      },
      [
        _c(
          "sidebar-title",
          { attrs: { flavor: _vm.flavor } },
          [
            _c("text-content", { attrs: { size: 16 } }, [
              _vm._v(_vm._s(_vm.sidebarTitle))
            ]),
            _vm._v(" "),
            _c(
              "sidebar-hamburger-container",
              { attrs: { width: _vm.width, breakpoint: _vm.breakpoint } },
              [
                _c(
                  "n-button",
                  {
                    attrs: { flavor: _vm.flavor },
                    on: { click: _vm.toggleAccordion }
                  },
                  [_vm._v("☰")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "sidebar-content",
          {
            ref: "content",
            attrs: {
              flavor: _vm.flavor,
              width: _vm.width,
              breakpoint: _vm.breakpoint
            }
          },
          [
            _c(
              "sidebar-item-list",
              _vm._l(_vm.items, function(item, index) {
                return _c(
                  "sidebar-item",
                  {
                    key: "item" + index,
                    attrs: {
                      flavor: _vm.flavor,
                      disabled: item.disabled,
                      active: item.active
                    }
                  },
                  [
                    item.type == "item"
                      ? _c(
                          "a",
                          { attrs: { href: item.url } },
                          [
                            _c("div", {
                              staticClass: "sidebar-icon",
                              domProps: { innerHTML: _vm._s(item.icon) }
                            }),
                            _vm._v(" "),
                            _c("text-content", { attrs: { size: 13 } }, [
                              _vm._v(_vm._s(item.text))
                            ])
                          ],
                          1
                        )
                      : _c(
                          "div",
                          [
                            _c("vue-sidebar-dropdown", {
                              attrs: {
                                icon: item.icon,
                                text: item.text,
                                disabled: item.disabled,
                                items: item.items,
                                flavor: _vm.flavor
                              }
                            })
                          ],
                          1
                        )
                  ]
                )
              }),
              1
            )
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-087972c2_0", { source: "\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\n}\n.sidebar-icon {\r\n  display: inline-block;\n}\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\n}\n.dropdown-label {\r\n  cursor: pointer;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\Navbars\\Sidebar\\src\\Sidebar.vue"],"names":[],"mappings":";AAyeA;EACA,oCAAA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,6EAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,eAAA;AACA","file":"Sidebar.vue","sourcesContent":["<template>\r\n  <sidebar-container\r\n    :flavor=\"flavor\"\r\n    :top-offset=\"topOffset\"\r\n    :bottom-offset=\"bottomOffset\"\r\n    id=\"sidebar\"\r\n    :width=\"width\"\r\n    :height=\"height\"\r\n    :breakpoint=\"breakpoint\"\r\n    ref=\"sidebar\"\r\n  >\r\n    <sidebar-title :flavor=\"flavor\">\r\n      <text-content :size=\"16\">{{ sidebarTitle }}</text-content>\r\n      <sidebar-hamburger-container :width=\"width\" :breakpoint=\"breakpoint\">\r\n        <n-button :flavor=\"flavor\" @click=\"toggleAccordion\">&#9776;</n-button>\r\n      </sidebar-hamburger-container>\r\n    </sidebar-title>\r\n    <sidebar-content\r\n      :flavor=\"flavor\"\r\n      :width=\"width\"\r\n      :breakpoint=\"breakpoint\"\r\n      ref=\"content\"\r\n    >\r\n      <sidebar-item-list>\r\n        <sidebar-item\r\n          v-for=\"(item, index) in items\"\r\n          :key=\"'item' + index\"\r\n          :flavor=\"flavor\"\r\n          :disabled=\"item.disabled\"\r\n          :active=\"item.active\"\r\n        >\r\n          <a v-if=\"item.type == 'item'\" :href=\"item.url\">\r\n            <div class=\"sidebar-icon\" v-html=\"item.icon\"></div>\r\n            <text-content :size=\"13\">{{ item.text }}</text-content>\r\n          </a>\r\n          <div v-else>\r\n            <vue-sidebar-dropdown\r\n              :icon=\"item.icon\"\r\n              :text=\"item.text\"\r\n              :disabled=\"item.disabled\"\r\n              :items=\"item.items\"\r\n              :flavor=\"flavor\"\r\n            ></vue-sidebar-dropdown>\r\n          </div>\r\n        </sidebar-item>\r\n      </sidebar-item-list>\r\n    </sidebar-content>\r\n  </sidebar-container>\r\n</template>\r\n<script>\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nimport { TextContent, NLabel } from \"@IntusFacultas/typography\";\r\nimport { NButton } from \"@IntusFacultas/button\";\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  raw: Boolean,\r\n  width: {\r\n    type: Number,\r\n    default: 200,\r\n  },\r\n  height: {\r\n    type: Number,\r\n    default: null,\r\n  },\r\n  breakpoint: {\r\n    type: Number,\r\n    default: 576,\r\n  },\r\n  topOffset: {\r\n    type: String,\r\n    default: \"0px\",\r\n  },\r\n  bottomOffset: {\r\n    type: String,\r\n    default: \"0px\",\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    },\r\n  },\r\n};\r\nexport const SidebarHamburgerContainer = styled(\"div\", props)`\r\n  display: none;\r\n  @media (max-width: ${(props) => props.breakpoint}px) {\r\n    display: block;\r\n  }\r\n`;\r\nexport const SidebarContainer = styled(\"aside\", props)`\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : \"#f2f2f2\"};\r\n  width: ${(props) => props.width}px;\r\n  z-index: 1;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  left: 0px;\r\n  top: ${(props) => props.topOffset};\r\n  bottom: ${(props) => props.bottomOffset};\r\n  ${(props) => (!isNaN(props.height) ? `height: ${props.height}px` : ``)}\r\n  @media (max-width: ${(props) => props.breakpoint}px) {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-left: auto;\r\n    top: initial;\r\n    height: initial\r\n  }\r\n  & * {\r\n    webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\r\n  }\r\n`;\r\nexport const SidebarTitle = styled(\"div\", props)`\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px 15px;\r\n  & * {\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};};\r\n  }\r\n`;\r\nexport const SidebarContent = styled(\"div\", props)`\r\n  overflow: hidden;\r\n  transition: height 0.3s ease-out;\r\n\r\n  @media (min-width: ${(props) => props.breakpoint + 1}px) {\r\n    height: auto !important;\r\n    padding: 5px 0px !important;\r\n  }\r\n\r\n  ${(props) =>\r\n    props.raw\r\n      ? \"\"\r\n      : `\r\n    & * {\r\n      color: ${\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"\r\n      };!important };\r\n    }\r\n  \r\n  `}\r\n`;\r\nexport const SidebarItemList = styled.ul`\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\r\n`;\r\nexport const SidebarItem = styled(\"li\", props)`\r\n  padding: 10px 20px;\r\n  & a {\r\n    text-decoration: none;\r\n  }\r\n  & * {\r\n    color: ${(props) =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].color.color\r\n        : \"#222\"};\r\n  }\r\n  ${(props) =>\r\n    props.disabled\r\n      ? `\r\n    pointer-events: none;\r\n    & * {color: rgba(0, 0, 0, 0.3) !important;}`\r\n      : \"\"};\r\n  ${(props) =>\r\n    props.active\r\n      ? `\r\n  background-color: ${\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.focus\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.focus\r\n      : \"#d7d7d7\"\r\n  };\r\n  `\r\n      : \"\"}\r\n  &:hover {\r\n  background-color: ${(props) =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.hover\r\n      : props.defaultTheme[props.flavor]\r\n      ? props.defaultTheme[props.flavor].background.hover\r\n      : \"#d7d7d7\"};};\r\n  }\r\n`;\r\nconst SidebarDropdown = styled(\"ul\", props)`\r\n  list-style: none;\r\n  margin-top: 0px;\r\n  padding: 0px;\r\n  margin-bottom: 0px;\r\n  transition: 0.3s max-height;\r\n  max-height: 0px;\r\n  overflow-y: hidden;\r\n`;\r\nconst SidebarDropdownCarat = styled(\"div\", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${(props) =>\r\n        props.disabled\r\n          ? \"rgba(0, 0, 0, 0.3)\"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : \"#222\"}\r\n      50%\r\n  );\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  margin-bottom: 1px;\r\n  transform: rotate(45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nexport const VueSidebarDropdown = {\r\n  components: {\r\n    SidebarDropdown,\r\n    SidebarDropdownCarat,\r\n    NLabel,\r\n    SidebarItem,\r\n    TextContent,\r\n  },\r\n  data() {\r\n    return {\r\n      toggled: false,\r\n    };\r\n  },\r\n  props: {\r\n    icon: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n  },\r\n  computed: {\r\n    uid() {\r\n      return this._uid;\r\n    },\r\n    computeDropdownClass() {\r\n      if (this.toggled) {\r\n        return [\"sidebar-open-carat\"];\r\n      }\r\n      return [];\r\n    },\r\n  },\r\n  methods: {\r\n    toggleDropdown() {\r\n      this.toggled = !this.toggled;\r\n    },\r\n  },\r\n  template: `\r\n    <div>\r\n      <div class=\"sidebar-icon\" v-html=\"icon\"></div>\r\n      <n-label\r\n        class=\"dropdown-label\"\r\n        :for=\"'sidebar-dropdown' + uid\"\r\n        role=\"button\"\r\n        @click=\"toggleDropdown\"\r\n        @keyup.space=\"toggleDropdown\"\r\n        @keyup.enter=\"toggleDropdown\"\r\n        tabindex=\"0\"\r\n      >\r\n        {{text}}\r\n        <sidebar-dropdown-carat\r\n          :disabled=\"disabled\"\r\n          :flavor=\"flavor\"\r\n          :class=\"computeDropdownClass\"\r\n        ></sidebar-dropdown-carat>\r\n      </n-label>\r\n      <sidebar-dropdown\r\n        :style=\"{'max-height': toggled ? (items.length * 40) + 'px' : '0px'}\"\r\n        :tabindex=\"-1\"\r\n      >\r\n        <sidebar-item\r\n          v-for=\"(option, optionIndex) in items\"\r\n          :key=\"'dropdown' + uid + 'option' + optionIndex\"\r\n          :flavor=\"flavor\"\r\n          :disabled=\"option.disabled\"\r\n          :active=\"option.active\"\r\n          :tabindex=\"-1\"\r\n        >\r\n          <a :href=\"option.url\" :tabindex=\"toggled ? 0 : -1\">\r\n            <div class=\"sidebar-icon\" v-html=\"option.icon\"></div>\r\n            <text-content :size=\"13\">{{option.text}}</text-content>\r\n          </a>\r\n        </sidebar-item>\r\n      </sidebar-dropdown>\r\n    </div>\r\n  `,\r\n};\r\n\r\nexport const Sidebar = {\r\n  components: {\r\n    SidebarContainer,\r\n    SidebarHamburgerContainer,\r\n    SidebarTitle,\r\n    SidebarContent,\r\n    SidebarItemList,\r\n    SidebarItem,\r\n    TextContent,\r\n    VueSidebarDropdown,\r\n    NButton,\r\n  },\r\n  data: function() {\r\n    return {\r\n      windowWidth: 0,\r\n      open: true,\r\n    };\r\n  },\r\n  mounted: function() {\r\n    var self = this;\r\n    window.addEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener(\"click\", self.checkOffclick);\r\n  },\r\n  methods: {\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = \"\";\r\n      element.style.height = sectionHeight + \"px !important\";\r\n      element.style.padding = \"0px 0px\";\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element's height to its current pixel height, so we\r\n      // aren't transitioning out of 'auto'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + \"px\";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = 'hidden';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + \"px\";\r\n        });\r\n      });\r\n\r\n      // mark the section as \"currently collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"true\");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element's inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + \"px\";\r\n      element.style.padding = \"5px 0px\";\r\n\r\n      // element.style.overflowY = \"auto\"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener(\"transitionend\", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener(\"transitionend\", this);\r\n        if (element.getAttribute(\"data-collapsed\") == \"false\") {\r\n          // remove \"height\" from the element's inline styles, so it can return to its initial value\r\n          element.style.height = \"auto\";\r\n        }\r\n      });\r\n\r\n      // mark the section as \"currently not collapsed\"\r\n      element.setAttribute(\"data-collapsed\", \"false\");\r\n    },\r\n    checkOffclick: function($e) {\r\n      /**\r\n       * Pulled from: https://stackoverflow.com/questions/17773852/check-if-div-is-descendant-of-another\r\n       */\r\n      let self = this;\r\n      function isChild(obj, parentObj) {\r\n        if (obj.isEqualNode(parentObj)) return true;\r\n        while ((obj = obj.parentNode)) {\r\n          if (obj.isEqualNode(parentObj)) return true;\r\n        }\r\n        return false;\r\n      }\r\n      if (\r\n        self.open &&\r\n        this.$refs.sidebar &&\r\n        !isChild($e.target, this.$refs.sidebar.$el)\r\n      ) {\r\n        self.open = false;\r\n        self.collapseSection(this.$refs.content.$el);\r\n      }\r\n    },\r\n    toggleAccordion: function() {\r\n      this.open = !this.open;\r\n      if (this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n      }\r\n    },\r\n    changeWindow: function($e) {\r\n      window.location.href = $e;\r\n    },\r\n  },\r\n  props: {\r\n    sidebarTitle: {\r\n      type: String,\r\n      default: \"Sidebar\",\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    bottomOffset: {\r\n      type: String,\r\n      default: \"0px\",\r\n    },\r\n    topOffset: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 200,\r\n    },\r\n    height: {\r\n      type: [Number, Object],\r\n      default: null,\r\n    },\r\n    breakpoint: {\r\n      type: Number,\r\n      default: 576,\r\n    },\r\n    items: {\r\n      type: Array,\r\n      default: function() {\r\n        return [];\r\n      },\r\n    },\r\n  },\r\n};\r\nexport const SidebarOffsetContent = styled(\"div\", props)`\r\n  margin-left: 0px;\r\n  @media (min-width: ${(props) => props.breakpoint}px) {\r\n    margin-left: ${(props) => props.width}px;\r\n    margin-top: 0px;\r\n  }\r\n  padding-left: 15px;\r\n`;\r\nexport default Sidebar;\r\n</script>\r\n\r\n<style>\r\n.sidebar-open-carat {\r\n  transform: rotate(135deg) !important;\r\n  margin-bottom: 4px;\r\n}\r\n.sidebar-icon {\r\n  display: inline-block;\r\n}\r\n.dropdown-arrow {\r\n  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(135deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n}\r\n.dropdown-label {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"]}, media: undefined });

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
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector$1,
      undefined,
      undefined
    );

  // Import vue component
  var components$2 = [{
    label: "SidebarHamburgerContainer",
    component: SidebarHamburgerContainer
  }, {
    label: "SidebarContainer",
    component: SidebarContainer
  }, {
    label: "SidebarTitle",
    component: SidebarTitle
  }, {
    label: "SidebarContent",
    component: SidebarContent
  }, {
    label: "VueSidebarDropdown",
    component: VueSidebarDropdown
  }, {
    label: "Sidebar",
    component: Sidebar
  }, {
    label: "SidebarItem",
    component: SidebarItem
  }, {
    label: "SidebarItemList",
    component: SidebarItemList
  }, {
    label: "SidebarOffsetContent",
    component: SidebarOffsetContent
  }];
  var GlobalVue$2 = null;

  var _loop$2 = function _loop() {
    var component_obj = _components$2[_i$2];

    // install function executed by Vue.use()
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
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.Sidebar = Sidebar;
  exports.SidebarContainer = SidebarContainer;
  exports.SidebarContent = SidebarContent;
  exports.SidebarHamburgerContainer = SidebarHamburgerContainer;
  exports.SidebarItem = SidebarItem;
  exports.SidebarItemList = SidebarItemList;
  exports.SidebarOffsetContent = SidebarOffsetContent;
  exports.SidebarTitle = SidebarTitle;
  exports.VueSidebarDropdown = VueSidebarDropdown;
  exports.default = Sidebar;

  return exports;

}({}));
//# sourceMappingURL=Sidebar.iife.js.map
