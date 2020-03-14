var VueMe = (function() {
  "use strict";

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
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
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }

    return target;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _nonIterableRest()
    );
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (
      !(
        Symbol.iterator in Object(arr) ||
        Object.prototype.toString.call(arr) === "[object Arguments]"
      )
    ) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
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

  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  var generateAlphabeticName = function generateAlphabeticName(code) {
    var lastDigit = chars[code % chars.length];
    return code > chars.length
      ? ""
          .concat(generateAlphabeticName(Math.floor(code / chars.length)))
          .concat(lastDigit)
      : lastDigit;
  };

  var interleave = function interleave(strings, interpolations) {
    return interpolations.reduce(
      function(array, interp, i) {
        return array.concat(interp, strings[i + 1]);
      },
      [strings[0]]
    );
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

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(source, true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$1(source).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
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
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === "[object Arguments]"
    )
      return Array.from(iter);
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

  var objectTag = "[object Object]";
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

    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
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
    return function(arg) {
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
    return !!value && _typeof(value) == "object";
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
    if (
      !isObjectLike(value) ||
      objectToString.call(value) != objectTag ||
      isHostObject(value)
    ) {
      return false;
    }

    var proto = getPrototype(value);

    if (proto === null) {
      return true;
    }

    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return (
      typeof Ctor == "function" &&
      Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString
    );
  }

  var lodash_isplainobject = isPlainObject;
  var _uppercasePattern = /([A-Z])/g;
  var msPattern = /^ms-/;

  function hyphenate(string) {
    return string.replace(_uppercasePattern, "-$1").toLowerCase();
  }

  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, "-ms-");
  }

  var hyphenateStyleName_1 = hyphenateStyleName;

  var objToCss = function objToCss(obj, prevKey) {
    var css = Object.keys(obj)
      .map(function(key) {
        if (lodash_isplainobject(obj[key])) return objToCss(obj[key], key);
        return "".concat(hyphenateStyleName_1(key), ": ").concat(obj[key], ";");
      })
      .join(" ");
    return prevKey ? "".concat(prevKey, " {\n  ").concat(css, "\n}") : css;
  };

  var flatten = function flatten(chunks, executionContext) {
    return chunks.reduce(function(ruleSet, chunk) {
      if (
        chunk === undefined ||
        chunk === null ||
        chunk === false ||
        chunk === ""
      )
        return ruleSet;
      if (Array.isArray(chunk))
        return [].concat(
          _toConsumableArray(ruleSet),
          _toConsumableArray(flatten(chunk, executionContext))
        );

      if (typeof chunk === "function") {
        return executionContext
          ? ruleSet.concat.apply(
              ruleSet,
              _toConsumableArray(
                flatten([chunk(executionContext)], executionContext)
              )
            )
          : ruleSet.concat(chunk);
      }

      return ruleSet.concat(
        lodash_isplainobject(chunk) ? objToCss(chunk) : chunk.toString()
      );
    }, []);
  };

  var css = function css(rules) {
    for (
      var _len = arguments.length,
        interpolations = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
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

  var isDev = (function(x) {
    return x === "development" || !x;
  })("development");

  var isTest = "development" === "test";
  var isBrowser = typeof document !== "undefined" && !isTest;

  var oldIE = (function() {
    if (isBrowser) {
      var div = document.createElement("div");
      div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
      return div.getElementsByTagName("i").length === 1;
    }
  })();

  function makeStyleTag() {
    var tag = document.createElement("style");
    tag.type = "text/css";
    tag.appendChild(document.createTextNode(""));
    (document.head || document.getElementsByTagName("head")[0]).appendChild(
      tag
    );
    return tag;
  }

  var StyleSheet = (function() {
    function StyleSheet() {
      var _ref =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === void 0 ? !isDev && !isTest : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength =
          _ref$maxLength === void 0
            ? isBrowser && oldIE
              ? 4000
              : 65000
            : _ref$maxLength;

      _classCallCheck(this, StyleSheet);

      this.isSpeedy = speedy;
      this.sheet = undefined;
      this.tags = [];
      this.maxLength = maxLength;
      this.ctr = 0;
    }

    _createClass(StyleSheet, [
      {
        key: "inject",
        value: function inject() {
          var _this = this;

          if (this.injected) {
            throw new Error("already injected stylesheet!");
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
                    return (serverRule.cssText += newCss);
                  }
                };
              }
            };
          }

          this.injected = true;
        }
      },
      {
        key: "speedy",
        value: function speedy(bool) {
          if (this.ctr !== 0) {
            throw new Error(
              "cannot change speedy mode after inserting any rule to sheet. Either call speedy("
                .concat(
                  bool,
                  ") earlier in your app, or call flush() before speedy("
                )
                .concat(bool, ")")
            );
          }

          this.isSpeedy = !!bool;
        }
      },
      {
        key: "_insert",
        value: function _insert(rule) {
          try {
            this.sheet.insertRule(rule, this.sheet.cssRules.length);
          } catch (e) {
            if (isDev) {
              console.warn("whoops, illegal rule inserted", rule);
            }
          }
        }
      },
      {
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
      },
      {
        key: "flush",
        value: function flush() {
          if (isBrowser) {
            this.tags.forEach(function(tag) {
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
      },
      {
        key: "rules",
        value: function rules() {
          if (!isBrowser) {
            return this.sheet.cssRules;
          }

          var arr = [];
          this.tags.forEach(function(tag) {
            return arr.splice.apply(
              arr,
              [arr.length, 0].concat(
                _toConsumableArray(Array.from(sheetForTag(tag).cssRules))
              )
            );
          });
          return arr;
        }
      }
    ]);

    return StyleSheet;
  })();

  var StyleSheet$1 = (function() {
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

    _createClass(StyleSheet$1, [
      {
        key: "inject",
        value: function inject() {
          this.globalStyleSheet.inject();
          this.componentStyleSheet.inject();
        }
      },
      {
        key: "flush",
        value: function flush() {
          if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
          if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
        }
      },
      {
        key: "insert",
        value: function insert(rule) {
          var opts =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  global: false
                };
          var sheet = opts.global
            ? this.globalStyleSheet
            : this.componentStyleSheet;
          return sheet.insert(rule);
        }
      },
      {
        key: "rules",
        value: function rules() {
          return this.globalStyleSheet
            .rules()
            .concat(this.componentStyleSheet.rules());
        }
      },
      {
        key: "injected",
        get: function get() {
          return (
            this.globalStyleSheet.injected && this.componentStyleSheet.injected
          );
        }
      }
    ]);

    return StyleSheet$1;
  })();

  var styleSheet = new StyleSheet$1();

  function unwrapExports(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, "default")
      ? x["default"]
      : x;
  }

  function createCommonjsModule(fn, module) {
    return (
      (module = {
        exports: {}
      }),
      fn(module, module.exports),
      module.exports
    );
  }

  var hash = createCommonjsModule(function(module, exports) {
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
      return (
        str.charCodeAt(pos++) +
        (str.charCodeAt(pos++) << 8) +
        (str.charCodeAt(pos++) << 16) +
        (str.charCodeAt(pos) << 24)
      );
    }

    function UInt16(str, pos) {
      return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
    }

    function Umul32(n, m) {
      n = n | 0;
      m = m | 0;
      var nlo = n & 0xffff;
      var nhi = n >>> 16;
      var res = (nlo * m + (((nhi * m) & 0xffff) << 16)) | 0;
      return res;
    }
  });
  var hashStr = unwrapExports(hash);

  var stylis = createCommonjsModule(function(module, exports) {
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
    (function(factory) {
      /* eslint-disable */
      module["exports"] = factory(null);
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

        var webkit = "-webkit-";
        var moz = "-moz-";
        var ms = "-ms-";
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
        var key = "";
        /* selector namespace */

        var nscopealt = "";
        var nscope = "";
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

          var char = "";
          /* current character */

          var chars = "";
          /* current buffer of characters */

          var child = "";
          /* next buffer of characters */

          var out = "";
          /* compiled body */

          var children = "";
          /* compiled children */

          var flat = "";
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
                  chars = chars.replace(formatptn, "");
                }

                if (chars.trim().length > 0) {
                  switch (code) {
                    case SPACE:
                    case TAB:
                    case SEMICOLON:
                    case CARRIAGE:
                    case NEWLINE: {
                      break;
                    }

                    default: {
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
                  case COMMA: {
                    insert = 0;
                  }
                  // ignore

                  case TAB:
                  case CARRIAGE:
                  case NEWLINE:
                  case SPACE: {
                    break;
                  }
                  // valid

                  default: {
                    insert = 0;
                    length = caret;
                    first = code;
                    caret--;
                    code = SEMICOLON;

                    while (length < eof) {
                      switch (body.charCodeAt(length++)) {
                        case NEWLINE:
                        case CARRIAGE:
                        case SEMICOLON: {
                          ++caret;
                          code = first;
                          length = eof;
                          break;
                        }

                        case COLON: {
                          if (format > 0) {
                            ++caret;
                            code = first;
                          }
                        }

                        case OPENBRACES: {
                          length = eof;
                        }
                      }
                    }
                  }
                }
              } // token varient

              switch (code) {
                case OPENBRACES: {
                  chars = chars.trim();
                  first = chars.charCodeAt(0);
                  counter = 1;
                  length = ++caret;

                  while (caret < eof) {
                    switch ((code = body.charCodeAt(caret))) {
                      case OPENBRACES: {
                        counter++;
                        break;
                      }

                      case CLOSEBRACES: {
                        counter--;
                        break;
                      }

                      case FOWARDSLASH: {
                        switch ((second = body.charCodeAt(caret + 1))) {
                          // /*, //
                          case STAR:
                          case FOWARDSLASH: {
                            caret = delimited(second, caret, eol, body);
                          }
                        }

                        break;
                      }
                      // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93

                      case OPENBRACKET: {
                        code++;
                      }
                      // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41

                      case OPENPARENTHESES: {
                        code++;
                      }
                      // quote tail delimiter is identical to the head delimiter hence noop,
                      // fallthrough clauses have been shifted to the correct tail delimiter

                      case DOUBLEQUOTE:
                      case SINGLEQUOTE: {
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
                    first = (chars = chars
                      .replace(nullptn, "")
                      .trim()).charCodeAt(0);
                  }

                  switch (first) {
                    // @at-rule
                    case AT: {
                      if (format > 0) {
                        chars = chars.replace(formatptn, "");
                      }

                      second = chars.charCodeAt(1);

                      switch (second) {
                        case DOCUMENT:
                        case MEDIA:
                        case SUPPORTS:
                        case DASH: {
                          selector = current;
                          break;
                        }

                        default: {
                          selector = array;
                        }
                      }

                      child = compile(
                        current,
                        selector,
                        child,
                        second,
                        depth + 1
                      );
                      length = child.length; // preserve empty @at-rule

                      if (preserve > 0 && length === 0) {
                        length = chars.length;
                      } // execute plugins, @at-rule context

                      if (plugged > 0) {
                        selector = select(array, chars, invert);
                        result = proxy(
                          ATRUL,
                          child,
                          selector,
                          current,
                          line,
                          column,
                          length,
                          second,
                          depth,
                          id
                        );
                        chars = selector.join("");

                        if (result !== void 0) {
                          if ((length = (child = result.trim()).length) === 0) {
                            second = 0;
                            child = "";
                          }
                        }
                      }

                      if (length > 0) {
                        switch (second) {
                          case SUPPORTS: {
                            chars = chars.replace(supportsptn, supports);
                          }

                          case DOCUMENT:
                          case MEDIA:
                          case DASH: {
                            child = chars + "{" + child + "}";
                            break;
                          }

                          case KEYFRAME: {
                            chars = chars.replace(
                              keyframeptn,
                              "$1 $2" + (keyed > 0 ? key : "")
                            );
                            child = chars + "{" + child + "}";

                            if (
                              prefix === 1 ||
                              (prefix === 2 && vendor("@" + child, 3))
                            ) {
                              child = "@" + webkit + child + "@" + child;
                            } else {
                              child = "@" + child;
                            }

                            break;
                          }

                          default: {
                            child = chars + child;

                            if (id === PAGE) {
                              child = ((out += child), "");
                            }
                          }
                        }
                      } else {
                        child = "";
                      }

                      break;
                    }
                    // selector

                    default: {
                      child = compile(
                        current,
                        select(current, chars, invert),
                        child,
                        id,
                        depth + 1
                      );
                    }
                  }

                  children += child; // reset

                  context = 0;
                  insert = 0;
                  pseudo = 0;
                  format = 0;
                  invert = 0;
                  atrule = 0;
                  chars = "";
                  child = "";
                  code = body.charCodeAt(++caret);
                  break;
                }

                case CLOSEBRACES:
                case SEMICOLON: {
                  chars = (format > 0
                    ? chars.replace(formatptn, "")
                    : chars
                  ).trim();

                  if ((length = chars.length) > 1) {
                    // monkey-patch missing colon
                    if (pseudo === 0) {
                      first = chars.charCodeAt(0); // first character is a letter or dash, buffer has a space character

                      if (first === DASH || (first > 96 && first < 123)) {
                        length = (chars = chars.replace(" ", ":")).length;
                      }
                    } // execute plugins, property context

                    if (plugged > 0) {
                      if (
                        (result = proxy(
                          PROPS,
                          chars,
                          current,
                          parent,
                          line,
                          column,
                          out.length,
                          id,
                          depth,
                          id
                        )) !== void 0
                      ) {
                        if ((length = (chars = result.trim()).length) === 0) {
                          chars = "\0\0";
                        }
                      }
                    }

                    first = chars.charCodeAt(0);
                    second = chars.charCodeAt(1);

                    switch (first) {
                      case NULL: {
                        break;
                      }

                      case AT: {
                        if (second === IMPORT || second === CHARSET) {
                          flat += chars + body.charAt(caret);
                          break;
                        }
                      }

                      default: {
                        if (chars.charCodeAt(length - 1) === COLON) {
                          break;
                        }

                        out += property(
                          chars,
                          first,
                          second,
                          chars.charCodeAt(2)
                        );
                      }
                    }
                  } // reset

                  context = 0;
                  insert = 0;
                  pseudo = 0;
                  format = 0;
                  invert = 0;
                  chars = "";
                  code = body.charCodeAt(++caret);
                  break;
                }
              }
            } // parse characters

            switch (code) {
              case CARRIAGE:
              case NEWLINE: {
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
                    case CLOSEBRACES: {
                      break;
                    }

                    default: {
                      // current buffer has a colon
                      if (pseudo > 0) {
                        insert = 1;
                      }
                    }
                  }
                } // terminate line comment

                if (comment === FOWARDSLASH) {
                  comment = 0;
                } else if (
                  cascade + context === 0 &&
                  id !== KEYFRAME &&
                  chars.length > 0
                ) {
                  format = 1;
                  chars += "\0";
                } // execute plugins, newline context

                if (plugged * unkwn > 0) {
                  proxy(
                    UNKWN,
                    chars,
                    current,
                    parent,
                    line,
                    column,
                    out.length,
                    id,
                    depth,
                    id
                  );
                } // next line, reset column position

                column = 1;
                line++;
                break;
              }

              case SEMICOLON:
              case CLOSEBRACES: {
                if (comment + quote + parentheses + bracket === 0) {
                  column++;
                  break;
                }
              }

              default: {
                // increment column position
                column++; // current character

                char = body.charAt(caret); // remove comments, escape functions, strings, attributes and prepare selectors

                switch (code) {
                  case TAB:
                  case SPACE: {
                    if (quote + bracket + comment === 0) {
                      switch (tail) {
                        case COMMA:
                        case COLON:
                        case TAB:
                        case SPACE: {
                          char = "";
                          break;
                        }

                        default: {
                          if (code !== SPACE) {
                            char = " ";
                          }
                        }
                      }
                    }

                    break;
                  }
                  // escape breaking control characters

                  case NULL: {
                    char = "\\0";
                    break;
                  }

                  case FORMFEED: {
                    char = "\\f";
                    break;
                  }

                  case VERTICALTAB: {
                    char = "\\v";
                    break;
                  }
                  // &

                  case AND: {
                    // inverted selector pattern i.e html &
                    if (quote + comment + bracket === 0 && cascade > 0) {
                      invert = 1;
                      format = 1;
                      char = "\f" + char;
                    }

                    break;
                  }
                  // ::p<l>aceholder, l
                  // :read-on<l>y, l

                  case 108: {
                    if (
                      quote + comment + bracket + pattern === 0 &&
                      pseudo > 0
                    ) {
                      switch (caret - pseudo) {
                        // ::placeholder
                        case 2: {
                          if (
                            tail === PLACEHOLDER &&
                            body.charCodeAt(caret - 3) === COLON
                          ) {
                            pattern = tail;
                          }
                        }
                        // :read-only

                        case 8: {
                          if (trail === READONLY) {
                            pattern = trail;
                          }
                        }
                      }
                    }

                    break;
                  }
                  // :<pattern>

                  case COLON: {
                    if (quote + comment + bracket === 0) {
                      pseudo = caret;
                    }

                    break;
                  }
                  // selectors

                  case COMMA: {
                    if (comment + parentheses + quote + bracket === 0) {
                      format = 1;
                      char += "\r";
                    }

                    break;
                  }
                  // quotes

                  case DOUBLEQUOTE:
                  case SINGLEQUOTE: {
                    if (comment === 0) {
                      quote = quote === code ? 0 : quote === 0 ? code : quote;
                    }

                    break;
                  }
                  // attributes

                  case OPENBRACKET: {
                    if (quote + comment + parentheses === 0) {
                      bracket++;
                    }

                    break;
                  }

                  case CLOSEBRACKET: {
                    if (quote + comment + parentheses === 0) {
                      bracket--;
                    }

                    break;
                  }
                  // functions

                  case CLOSEPARENTHESES: {
                    if (quote + comment + bracket === 0) {
                      parentheses--;
                    }

                    break;
                  }

                  case OPENPARENTHESES: {
                    if (quote + comment + bracket === 0) {
                      if (context === 0) {
                        switch (tail * 2 + trail * 3) {
                          // :matches
                          case 533: {
                            break;
                          }
                          // :global, :not, :nth-child etc...

                          default: {
                            counter = 0;
                            context = 1;
                          }
                        }
                      }

                      parentheses++;
                    }

                    break;
                  }

                  case AT: {
                    if (
                      comment +
                        parentheses +
                        quote +
                        bracket +
                        pseudo +
                        atrule ===
                      0
                    ) {
                      atrule = 1;
                    }

                    break;
                  }
                  // block/line comments

                  case STAR:
                  case FOWARDSLASH: {
                    if (quote + bracket + parentheses > 0) {
                      break;
                    }

                    switch (comment) {
                      // initialize line/block comment context
                      case 0: {
                        switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                          // //
                          case 235: {
                            comment = FOWARDSLASH;
                            break;
                          }
                          // /*

                          case 220: {
                            length = caret;
                            comment = STAR;
                            break;
                          }
                        }

                        break;
                      }
                      // end block comment context

                      case STAR: {
                        if (
                          code === FOWARDSLASH &&
                          tail === STAR &&
                          length + 2 !== caret
                        ) {
                          // /*<!> ... */, !
                          if (body.charCodeAt(length + 2) === 33) {
                            out += body.substring(length, caret + 1);
                          }

                          char = "";
                          comment = 0;
                        }
                      }
                    }
                  }
                } // ignore comment blocks

                if (comment === 0) {
                  // aggressive isolation mode, divide each individual selector
                  // including selectors in :not function but excluding selectors in :global function
                  if (
                    cascade + quote + bracket + atrule === 0 &&
                    id !== KEYFRAME &&
                    code !== SEMICOLON
                  ) {
                    switch (code) {
                      case COMMA:
                      case TILDE:
                      case GREATERTHAN:
                      case PLUS:
                      case CLOSEPARENTHESES:
                      case OPENPARENTHESES: {
                        if (context === 0) {
                          // outside of an isolated context i.e nth-child(<...>)
                          switch (tail) {
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE: {
                              char = char + "\0";
                              break;
                            }

                            default: {
                              char = "\0" + char + (code === COMMA ? "" : "\0");
                            }
                          }

                          format = 1;
                        } else {
                          // within an isolated context, sleep untill it's terminated
                          switch (code) {
                            case OPENPARENTHESES: {
                              // :globa<l>(
                              if (pseudo + 7 === caret && tail === 108) {
                                pseudo = 0;
                              }

                              context = ++counter;
                              break;
                            }

                            case CLOSEPARENTHESES: {
                              if ((context = --counter) === 0) {
                                format = 1;
                                char += "\0";
                              }

                              break;
                            }
                          }
                        }

                        break;
                      }

                      case TAB:
                      case SPACE: {
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
                          case CARRIAGE: {
                            break;
                          }

                          default: {
                            // ignore in isolated contexts
                            if (context === 0) {
                              format = 1;
                              char += "\0";
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
            if (
              length === 0 &&
              children.length === 0 &&
              (current[0].length === 0) === false
            ) {
              if (
                id !== MEDIA ||
                (current.length === 1 &&
                  (cascade > 0 ? nscopealt : nscope) === current[0])
              ) {
                length = current.join(",").length + 2;
              }
            }
          }

          if (length > 0) {
            // cascade isolation mode?
            selector =
              cascade === 0 && id !== KEYFRAME ? isolate(current) : current; // execute plugins, block context

            if (plugged > 0) {
              result = proxy(
                BLCKS,
                out,
                selector,
                parent,
                line,
                column,
                length,
                id,
                depth,
                id
              );

              if (result !== void 0 && (out = result).length === 0) {
                return flat + out + children;
              }
            }

            out = selector.join(",") + "{" + out + "}";

            if (prefix * pattern !== 0) {
              if (prefix === 2 && !vendor(out, 2)) pattern = 0;

              switch (pattern) {
                // ::read-only
                case READONLY: {
                  out = out.replace(readonlyptn, ":" + moz + "$1") + out;
                  break;
                }
                // ::placeholder

                case PLACEHOLDER: {
                  out =
                    out.replace(plcholdrptn, "::" + webkit + "input-$1") +
                    out.replace(plcholdrptn, "::" + moz + "$1") +
                    out.replace(plcholdrptn, ":" + ms + "input-$1") +
                    out;
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
            case 1: {
              for (
                var i = 0, selector = l === 0 ? "" : parent[0] + " ";
                i < length;
                ++i
              ) {
                out[i] = scope(selector, out[i], invert, l).trim();
              }

              break;
            }
            // >2 parent selectors, nested

            default: {
              for (var i = 0, j = 0, out = []; i < length; ++i) {
                for (var k = 0; k < l; ++k) {
                  out[j++] = scope(
                    parent[k] + " ",
                    selectors[i],
                    invert,
                    l
                  ).trim();
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
            case AND: {
              switch (cascade + level) {
                case 0:
                case 1: {
                  if (parent.trim().length === 0) {
                    break;
                  }
                }

                default: {
                  return selector.replace(andptn, "$1" + parent.trim());
                }
              }

              break;
            }
            // :

            case COLON: {
              switch (selector.charCodeAt(1)) {
                // g in :global
                case 103: {
                  if (escape > 0 && cascade > 0) {
                    return selector
                      .replace(escapeptn, "$1")
                      .replace(andptn, "$1" + nscope);
                  }

                  break;
                }

                default: {
                  // :hover
                  return (
                    parent.trim() +
                    selector.replace(andptn, "$1" + parent.trim())
                  );
                }
              }
            }

            default: {
              // html &
              if (invert * cascade > 0 && selector.indexOf("\f") > 0) {
                return selector.replace(
                  andptn,
                  (parent.charCodeAt(0) === COLON ? "" : "$1") + parent.trim()
                );
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
          var out = input + ";";
          var hash = first * 2 + second * 3 + third * 4;
          var cache; // animation: a, n, i characters

          if (hash === 944) {
            return animation(out);
          } else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
            return out;
          } // vendor prefix

          switch (hash) {
            // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
            case 1015: {
              // text-shadow/text-align/text-transform, a
              return out.charCodeAt(10) === 97 ? webkit + out + out : out;
            }
            // filter/fill f, i, l

            case 951: {
              // filter, t
              return out.charCodeAt(3) === 116 ? webkit + out + out : out;
            }
            // color/column, c, o, l

            case 963: {
              // column, n
              return out.charCodeAt(5) === 110 ? webkit + out + out : out;
            }
            // box-decoration-break, b, o, x

            case 1009: {
              if (out.charCodeAt(4) !== 100) {
                break;
              }
            }
            // mask, m, a, s
            // clip-path, c, l, i

            case 969:
            case 942: {
              return webkit + out + out;
            }
            // appearance: a, p, p

            case 978: {
              return webkit + out + moz + out + out;
            }
            // hyphens: h, y, p
            // user-select: u, s, e

            case 1019:
            case 983: {
              return webkit + out + moz + out + ms + out + out;
            }
            // background/backface-visibility, b, a, c

            case 883: {
              // backface-visibility, -
              if (out.charCodeAt(8) === DASH) {
                return webkit + out + out;
              } // image-set(...)

              if (out.indexOf("image-set(", 11) > 0) {
                return out.replace(imgsrcptn, "$1" + webkit + "$2") + out;
              }

              return out;
            }
            // flex: f, l, e

            case 932: {
              if (out.charCodeAt(4) === DASH) {
                switch (out.charCodeAt(5)) {
                  // flex-grow, g
                  case 103: {
                    return (
                      webkit +
                      "box-" +
                      out.replace("-grow", "") +
                      webkit +
                      out +
                      ms +
                      out.replace("grow", "positive") +
                      out
                    );
                  }
                  // flex-shrink, s

                  case 115: {
                    return (
                      webkit +
                      out +
                      ms +
                      out.replace("shrink", "negative") +
                      out
                    );
                  }
                  // flex-basis, b

                  case 98: {
                    return (
                      webkit +
                      out +
                      ms +
                      out.replace("basis", "preferred-size") +
                      out
                    );
                  }
                }
              }

              return webkit + out + ms + out + out;
            }
            // order: o, r, d

            case 964: {
              return webkit + out + ms + "flex" + "-" + out + out;
            }
            // justify-items/justify-content, j, u, s

            case 1023: {
              // justify-content, c
              if (out.charCodeAt(8) !== 99) {
                break;
              }

              cache = out
                .substring(out.indexOf(":", 15))
                .replace("flex-", "")
                .replace("space-between", "justify");
              return (
                webkit +
                "box-pack" +
                cache +
                webkit +
                out +
                ms +
                "flex-pack" +
                cache +
                out
              );
            }
            // cursor, c, u, r

            case 1005: {
              return cursorptn.test(out)
                ? out.replace(colonptn, ":" + webkit) +
                    out.replace(colonptn, ":" + moz) +
                    out
                : out;
            }
            // writing-mode, w, r, i

            case 1000: {
              cache = out.substring(13).trim();
              index = cache.indexOf("-") + 1;

              switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                // vertical-lr
                case 226: {
                  cache = out.replace(writingptn, "tb");
                  break;
                }
                // vertical-rl

                case 232: {
                  cache = out.replace(writingptn, "tb-rl");
                  break;
                }
                // horizontal-tb

                case 220: {
                  cache = out.replace(writingptn, "lr");
                  break;
                }

                default: {
                  return out;
                }
              }

              return webkit + out + ms + cache + out;
            }
            // position: sticky

            case 1017: {
              if (out.indexOf("sticky", 9) === -1) {
                return out;
              }
            }
            // display(flex/inline-flex/inline-box): d, i, s

            case 975: {
              index = (out = input).length - 10;
              cache = (out.charCodeAt(index) === 33
                ? out.substring(0, index)
                : out
              )
                .substring(input.indexOf(":", 7) + 1)
                .trim();

              switch (
                (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0))
              ) {
                // inline-
                case 203: {
                  // inline-box
                  if (cache.charCodeAt(8) < 111) {
                    break;
                  }
                }
                // inline-box/sticky

                case 115: {
                  out = out.replace(cache, webkit + cache) + ";" + out;
                  break;
                }
                // inline-flex
                // flex

                case 207:
                case 102: {
                  out =
                    out.replace(
                      cache,
                      webkit + (hash > 102 ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    out.replace(cache, webkit + cache) +
                    ";" +
                    out.replace(cache, ms + cache + "box") +
                    ";" +
                    out;
                }
              }

              return out + ";";
            }
            // align-items, align-center, align-self: a, l, i, -

            case 938: {
              if (out.charCodeAt(5) === DASH) {
                switch (out.charCodeAt(6)) {
                  // align-items, i
                  case 105: {
                    cache = out.replace("-items", "");
                    return (
                      webkit +
                      out +
                      webkit +
                      "box-" +
                      cache +
                      ms +
                      "flex-" +
                      cache +
                      out
                    );
                  }
                  // align-self, s

                  case 115: {
                    return (
                      webkit +
                      out +
                      ms +
                      "flex-item-" +
                      out.replace(selfptn, "") +
                      out
                    );
                  }
                  // align-content

                  default: {
                    return (
                      webkit +
                      out +
                      ms +
                      "flex-line-pack" +
                      out.replace("align-content", "").replace(selfptn, "") +
                      out
                    );
                  }
                }
              }

              break;
            }
            // min/max

            case 973:
            case 989: {
              // min-/max- height/width/block-size/inline-size
              if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
                break;
              }
            }
            // height/width: min-content / width: max-content

            case 931:
            case 953: {
              if (dimensionptn.test(input) === true) {
                // stretch
                if (
                  (cache = input.substring(input.indexOf(":") + 1)).charCodeAt(
                    0
                  ) === 115
                )
                  return property(
                    input.replace("stretch", "fill-available"),
                    first,
                    second,
                    third
                  ).replace(":fill-available", ":stretch");
                else
                  return (
                    out.replace(cache, webkit + cache) +
                    out.replace(cache, moz + cache.replace("fill-", "")) +
                    out
                  );
              }

              break;
            }
            // transform, transition: t, r, a

            case 962: {
              out =
                webkit +
                out +
                (out.charCodeAt(5) === 102 ? ms + out : "") +
                out; // transitions

              if (
                second + third === 211 &&
                out.charCodeAt(13) === 105 &&
                out.indexOf("transform", 10) > 0
              ) {
                return (
                  out
                    .substring(0, out.indexOf(";", 27) + 1)
                    .replace(transformptn, "$1" + webkit + "$2") + out
                );
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
          var index = content.indexOf(context === 1 ? ":" : "{");
          var key = content.substring(0, context !== 3 ? index : 10);
          var value = content.substring(index + 1, content.length - 1);
          return should(
            context !== 2 ? key : key.replace(pseudofmt, "$1"),
            value,
            context
          );
        }
        /**
         * Supports
         *
         * @param {string} match
         * @param {string} group
         * @return {string}
         */

        function supports(match, group) {
          var out = property(
            group,
            group.charCodeAt(0),
            group.charCodeAt(1),
            group.charCodeAt(2)
          );
          return out !== group + ";"
            ? out.replace(propertyptn, " or ($1)").substring(4)
            : "(" + group + ")";
        }
        /**
         * Animation
         *
         * @param {string} input
         * @return {string}
         */

        function animation(input) {
          var length = input.length;
          var index = input.indexOf(":", 9) + 1;
          var declare = input.substring(0, index).trim();
          var out = input.substring(index, length - 1).trim();

          switch (input.charCodeAt(9) * keyed) {
            case 0: {
              break;
            }
            // animation-*, -

            case DASH: {
              // animation-name, n
              if (input.charCodeAt(10) !== 110) {
                break;
              }
            }
            // animation/animation-name

            default: {
              // split in case of multiple animations
              var list = out.split(((out = ""), animationptn));

              for (
                var i = 0, index = 0, length = list.length;
                i < length;
                index = 0, ++i
              ) {
                var value = list[i];
                var items = value.split(propertiesptn);

                while ((value = items[index])) {
                  var peak = value.charCodeAt(0);

                  if (
                    keyed === 1 && // letters
                    ((peak > AT && peak < 90) ||
                    (peak > 96 && peak < 123) ||
                    peak === UNDERSCORE || // dash but not in sequence i.e --
                      (peak === DASH && value.charCodeAt(1) !== DASH))
                  ) {
                    // not a number/function
                    switch (
                      isNaN(parseFloat(value)) +
                      (value.indexOf("(") !== -1)
                    ) {
                      case 1: {
                        switch (value) {
                          // not a valid reserved keyword
                          case "infinite":
                          case "alternate":
                          case "backwards":
                          case "running":
                          case "normal":
                          case "forwards":
                          case "both":
                          case "none":
                          case "linear":
                          case "ease":
                          case "ease-in":
                          case "ease-out":
                          case "ease-in-out":
                          case "paused":
                          case "reverse":
                          case "alternate-reverse":
                          case "inherit":
                          case "initial":
                          case "unset":
                          case "step-start":
                          case "step-end": {
                            break;
                          }

                          default: {
                            value += key;
                          }
                        }
                      }
                    }
                  }

                  items[index++] = value;
                }

                out += (i === 0 ? "" : ",") + items.join(" ");
              }
            }
          }

          out = declare + out + ";";
          if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
            return webkit + out + out;
          return out;
        }
        /**
         * Isolate
         *
         * @param {Array<string>} current
         */

        function isolate(current) {
          for (
            var i = 0,
              length = current.length,
              selector = Array(length),
              padding,
              element;
            i < length;
            ++i
          ) {
            // split individual elements in a selector i.e h1 h2 === [h1, h2]
            var elements = current[i].split(elementptn);
            var out = "";

            for (
              var j = 0, size = 0, tail = 0, code = 0, l = elements.length;
              j < l;
              ++j
            ) {
              // empty element
              if ((size = (element = elements[j]).length) === 0 && l > 1) {
                continue;
              }

              tail = out.charCodeAt(out.length - 1);
              code = element.charCodeAt(0);
              padding = "";

              if (j !== 0) {
                // determine if we need padding
                switch (tail) {
                  case STAR:
                  case TILDE:
                  case GREATERTHAN:
                  case PLUS:
                  case SPACE:
                  case OPENPARENTHESES: {
                    break;
                  }

                  default: {
                    padding = " ";
                  }
                }
              }

              switch (code) {
                case AND: {
                  element = padding + nscopealt;
                }

                case TILDE:
                case GREATERTHAN:
                case PLUS:
                case SPACE:
                case CLOSEPARENTHESES:
                case OPENPARENTHESES: {
                  break;
                }

                case OPENBRACKET: {
                  element = padding + element + nscopealt;
                  break;
                }

                case COLON: {
                  switch (
                    element.charCodeAt(1) * 2 +
                    element.charCodeAt(2) * 3
                  ) {
                    // :global
                    case 530: {
                      if (escape > 0) {
                        element = padding + element.substring(8, size - 1);
                        break;
                      }
                    }
                    // :hover, :nth-child(), ...

                    default: {
                      if (j < 1 || elements[j - 1].length < 1) {
                        element = padding + nscopealt + element;
                      }
                    }
                  }

                  break;
                }

                case COMMA: {
                  padding = "";
                }

                default: {
                  if (size > 1 && element.indexOf(":") > 0) {
                    element =
                      padding +
                      element.replace(pseudoptn, "$1" + nscopealt + "$2");
                  } else {
                    element = padding + element + nscopealt;
                  }
                }
              }

              out += element;
            }

            selector[i] = out.replace(formatptn, "").trim();
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

        function proxy(
          context,
          content,
          selectors,
          parents,
          line,
          column,
          length,
          id,
          depth,
          at
        ) {
          for (var i = 0, out = content, next; i < plugged; ++i) {
            switch (
              (next = plugins[i].call(
                stylis,
                context,
                out,
                selectors,
                parents,
                line,
                column,
                length,
                id,
                depth,
                at
              ))
            ) {
              case void 0:
              case false:
              case true:
              case null: {
                break;
              }

              default: {
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
              case FOWARDSLASH: {
                if (code === STAR) {
                  if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                    return i + 1;
                  }
                }

                break;
              }
              // //

              case NEWLINE: {
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
          return output
            .replace(formatptn, "")
            .replace(beforeptn, "")
            .replace(afterptn, "$1")
            .replace(tailptn, "$1")
            .replace(whiteptn, " ");
        }
        /**
         * Use
         *
         * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
         */

        function use(plugin) {
          switch (plugin) {
            case void 0:
            case null: {
              plugged = plugins.length = 0;
              break;
            }

            default: {
              if (typeof plugin === "function") {
                plugins[plugged++] = plugin;
              } else if (_typeof(plugin) === "object") {
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
              case "keyframe":
                keyed = value | 0;
                break;

              case "global":
                escape = value | 0;
                break;

              case "cascade":
                cascade = value | 0;
                break;

              case "compress":
                compress = value | 0;
                break;

              case "semicolon":
                semicolon = value | 0;
                break;

              case "preserve":
                preserve = value | 0;
                break;

              case "prefix":
                should = null;

                if (!value) {
                  prefix = 0;
                } else if (typeof value !== "function") {
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
            key = ns.replace(invalidptn, code === OPENBRACKET ? "" : "-");
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
            result = proxy(
              PREPS,
              input,
              selectors,
              selectors,
              line,
              column,
              0,
              0,
              0,
              0
            );

            if (result !== void 0 && typeof result === "string") {
              input = result;
            }
          } // build

          var output = compile(array, selectors, input, 0, 0); // execute plugins, post-process context

          if (plugged > 0) {
            result = proxy(
              POSTS,
              output,
              selectors,
              selectors,
              line,
              column,
              output.length,
              0,
              0,
              0
            ); // bypass minification

            if (result !== void 0 && typeof (output = result) !== "string") {
              code = 0;
            }
          } // reset

          key = "";
          nscope = "";
          nscopealt = "";
          pattern = 0;
          line = 1;
          column = 1;
          return compress * code === 0 ? output : minify(output);
        }

        stylis["use"] = use;
        stylis["set"] = set;

        if (options !== void 0) {
          set(options);
        }

        return stylis;
      }
    );
  });

  var ComponentStyle = (function() {
    function ComponentStyle(rules, selector) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.selector = selector;
    }

    _createClass(ComponentStyle, [
      {
        key: "generateAndInject",
        value: function generateAndInject() {
          if (!styleSheet.injected) styleSheet.inject();
          var flatCSS = flatten(this.rules).join("");
          var cssString = this.selector
            ? "".concat(this.selector, " { ").concat(flatCSS, " }")
            : flatCSS;
          var css = stylis("", cssString, false, false);
          styleSheet.insert(css, {
            global: true
          });
        }
      }
    ]);

    return ComponentStyle;
  })();
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

    if (
      !(hasOwnProperty$1.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))
    ) {
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
    return value === other || (value !== value && other !== other);
  }

  var lodash_zipobject = zipObject;

  function normalizeProps() {
    var props =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (Array.isArray(props)) {
      return lodash_zipobject(props);
    } else {
      return props;
    }
  }

  var _styledComponent = function _styledComponent(ComponentStyle) {
    var createStyledComponent = function createStyledComponent(
      target,
      rules,
      props
    ) {
      var componentStyle = new ComponentStyle(rules);
      var currentProps = normalizeProps(props);
      var prevProps = normalizeProps(target.props);
      var StyledComponent = {
        inject: {
          $theme: {
            default: function _default() {
              return function() {
                return {};
              };
            }
          }
        },
        props: _objectSpread2$1(
          {
            value: null
          },
          currentProps,
          {},
          prevProps
        ),
        data: function data() {
          return {
            localValue: this.value
          };
        },
        render: function render(createElement) {
          var _this = this;

          var children = [];

          for (var slot in this.$slots) {
            if (slot === "default") {
              children.push(this.$slots[slot]);
            } else {
              children.push(
                createElement(
                  "template",
                  {
                    slot: slot
                  },
                  this.$slots[slot]
                )
              );
            }
          }

          return createElement(
            target,
            {
              class: [this.generatedClassName],
              props: this.$props,
              domProps: {
                value: this.localValue
              },
              on: _objectSpread2$1({}, this.$listeners, {
                input: function input(event) {
                  if (event && event.target) {
                    _this.localValue = event.target.value;
                  }
                }
              }),
              scopedSlots: this.$scopedSlots
            },
            children
          );
        },
        methods: {
          generateAndInjectStyles: function generateAndInjectStyles(
            componentProps
          ) {
            return componentStyle.generateAndInjectStyles(componentProps);
          }
        },
        computed: {
          generatedClassName: function generatedClassName() {
            var componentProps = _objectSpread2$1(
              {
                theme: this.theme
              },
              this.$props
            );

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
            this.$emit("input", this.localValue);
          }
        },
        extend: function extend(cssRules) {
          for (
            var _len = arguments.length,
              interpolations = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            interpolations[_key - 1] = arguments[_key];
          }

          var extendedRules = css.apply(
            void 0,
            [cssRules].concat(interpolations)
          );
          return createStyledComponent(
            target,
            rules.concat(extendedRules),
            props
          );
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

    var ComponentStyle = (function() {
      function ComponentStyle(rules) {
        _classCallCheck(this, ComponentStyle);

        this.rules = rules;
        stylis.set({
          keyframe: false
        });
        if (!styleSheet.injected) styleSheet.inject();
        this.insertedRule = styleSheet.insert("");
      }

      _createClass(ComponentStyle, [
        {
          key: "generateAndInjectStyles",
          value: function generateAndInjectStyles(executionContext) {
            var flatCSS = flatten(this.rules, executionContext)
              .join("")
              .replace(/^\s*\/\/.*$/gm, "");
            var hash = hashStr(flatCSS);

            if (!inserted[hash]) {
              var selector = nameGenerator(hash);
              inserted[hash] = selector;
              var css = stylis(".".concat(selector), flatCSS);
              this.insertedRule.appendRule(css);
            }

            return inserted[hash];
          }
        }
      ]);

      return ComponentStyle;
    })();

    return ComponentStyle;
  };

  var domElements = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];

  function isTag(target) {
    if (typeof target === "string") {
      return domElements.indexOf(target) !== -1;
    }
  }

  function isVueComponent(target) {
    return (
      target &&
      (typeof target.render === "function" ||
        typeof target.template === "string")
    );
  }

  function isStyledComponent(target) {
    return (
      target &&
      target.methods &&
      typeof target.methods.generateAndInjectStyles === "function"
    );
  }

  function isValidElementType(target) {
    return isStyledComponent(target) || isVueComponent(target) || isTag(target);
  }

  var _styled = function _styled(createStyledComponent) {
    var styled = function styled(tagName) {
      var props =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!isValidElementType(tagName)) {
        throw new Error(tagName + " is not allowed for styled tag type.");
      }

      return function(cssRules) {
        for (
          var _len = arguments.length,
            interpolations = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          interpolations[_key - 1] = arguments[_key];
        }

        return createStyledComponent(
          tagName,
          css.apply(void 0, [cssRules].concat(interpolations)),
          props
        );
      };
    };

    domElements.forEach(function(domElement) {
      styled[domElement] = styled(domElement);
    });
    return styled;
  };

  var styled = _styled(
    _styledComponent(_componentStyle(generateAlphabeticName))
  );

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

  var Theme = _objectSpread2(
    {
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
          color: "#ED7D3A",
          hover: "#D15A14",
          focus: "#ED7D3A"
        },
        border: {
          color: "#D15A14",
          hover: "#D15A14",
          focus: "#D15A14"
        }
      },
      Danger: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff"
        },
        background: {
          color: "#7C0002",
          hover: "#560002",
          focus: "#7C0002"
        },
        border: {
          color: "#560002",
          hover: "#560002",
          focus: "#560002"
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
    },
    NIWSTheme
  );

  var AlertTheme = {
    warning: Theme["Warning"],
    danger: Theme["Danger"],
    success: Theme["Success"],
    info: Theme["Info"]
  };

  function _taggedTemplateLiteral$1(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral$1([
      '\n  margin: 0;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  font-weight: ',
      ";\n  line-height: 1.571;\n  color: ",
      ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ",
      "\n"
    ]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral$1([
      '\n  margin: 0;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: ',
      "px;\n  font-weight: ",
      ";\n  line-height: 1.571;\n  color: ",
      ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ",
      "\n"
    ]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral$1([
      "\n  margin-top: 0;\n  font-weight: ",
      ';\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  color: ',
      ";\n  ",
      "\n"
    ]);

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
  var PageTitle = styled("h1", titleProps)(
    _templateObject(),
    function(props) {
      return props.bold ? "bold" : 500;
    },
    function(props) {
      return props.dark
        ? props.textTheme.Dark.color
        : props.textTheme.Normal.color;
    },
    function(props) {
      return props.flavor
        ? props.textTheme[props.flavor]
          ? "color " + props.textTheme[props.flavor].color + "!important"
          : ""
        : "";
    }
  );
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
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      }
    },
    flavor: String
  };
  var WebText = styled("span", props)(
    _templateObject2(),
    function(props) {
      return props.size < 14 ? 14 : props.size > 16 ? 16 : props.size;
    },
    function(props) {
      return props.bold ? "bold" : 500;
    },
    function(props) {
      return props.dark
        ? props.textTheme.Dark.color
        : props.textTheme.Normal.color;
    },
    function(props) {
      return props.flavor
        ? props.textTheme[props.flavor]
          ? "color " + props.textTheme[props.flavor].color
          : ""
        : "";
    }
  );
  var Paragraph = WebText.withComponent("p", props);
  var NSmall = styled("small", props)(
    _templateObject3(),
    function(props) {
      return props.bold ? "bold" : 500;
    },
    function(props) {
      return props.dark
        ? props.textTheme.Dark.color
        : props.textTheme.Normal.color;
    },
    function(props) {
      return props.flavor
        ? props.textTheme[props.flavor]
          ? "color " + props.textTheme[props.flavor].color
          : ""
        : "";
    }
  );
  var NLabel = WebText.withComponent("label", props);

  function normalizeComponent(
    template,
    style,
    script,
    scopeId,
    isFunctionalTemplate,
    moduleIdentifier,
    /* server only */
    shadowMode,
    createInjector,
    createInjectorSSR,
    createInjectorShadow
  ) {
    if (typeof shadowMode !== "boolean") {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === "function" ? script.options : script; // render functions

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
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
      hook = shadowMode
        ? function(context) {
            style.call(
              this,
              createInjectorShadow(context, this.$root.$options.shadowRoot)
            );
          }
        : function(context) {
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

  var isOldIE =
    typeof navigator !== "undefined" &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function(id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || "default" : id;
    var style =
      styles[group] ||
      (styles[group] = {
        ids: new Set(),
        styles: []
      });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */"; // http://stackoverflow.com/a/26603875

        code +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          " */";
      }

      if (!style.element) {
        style.element = document.createElement("style");
        style.element.type = "text/css";
        if (css.media) style.element.setAttribute("media", css.media);

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName("head")[0];
        }

        HEAD.appendChild(style.element);
      }

      if ("styleSheet" in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles
          .filter(Boolean)
          .join("\n");
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  }
  /* script */

  var __vue_script__ = WebText;
  /* template */

  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-473a8904_0", {
      source:
        "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      map: {
        version: 3,
        sources: [],
        names: [],
        mappings: "",
        file: "Typography.vue"
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

  var __vue_component__ = normalizeComponent(
    {},
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

  var components = [
    {
      label: "PageTitle",
      component: PageTitle
    },
    {
      label: "SectionTitle",
      component: SectionTitle
    },
    {
      label: "SubSectionTitle",
      component: SubSectionTitle
    },
    {
      label: "CategoryTitle",
      component: CategoryTitle
    },
    {
      label: "SubCategoryTitle",
      component: SubCategoryTitle
    },
    {
      label: "Keyword",
      component: Keyword
    },
    {
      label: "WebText",
      component: WebText
    },
    {
      label: "Paragraph",
      component: Paragraph
    },
    {
      label: "NSmall",
      component: NSmall
    },
    {
      label: "NLabel",
      component: NLabel
    }
  ];
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

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral$2([
      "\n        padding: ",
      ";\n        font-size: ",
      ";\n        border-radius: 3px;\n        font-weight: bold;\n        ",
      "\n        font-family: Segoe UI, sans-serif;\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ",
      "\n        background-color: ",
      ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ",
      ";\n            color: ",
      "\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ",
      ";\n            color: ",
      "\n        }\n        &:disabled:hover {\n            background-color: ",
      ";\n        }\n    "
    ]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral$2([
      "\n        padding: ",
      ";\n        font-size: ",
      ";\n        border-radius: 3px;\n        font-weight: bold;\n        ",
      '\n        font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n        border: 1px solid transparent;\n        transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n        cursor: pointer;\n        color: ',
      "\n        background-color: ",
      ";\n        &:focus {\n            outline: none;\n            box-shadow: 0 0 0 .2rem ",
      ";\n            color: ",
      "\n        }\n        &:disabled {\n            opacity: 0.6;\n            cursor: not-allowed;\n        }\n        &:hover {\n            background-color: ",
      ";\n            color: ",
      "\n        }\n        &:disabled:hover {\n            background-color: ",
      ";\n        }\n    "
    ]);

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
        return Theme;
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
        return Theme;
      }
    }
  };
  var DialogButton = styled("button", dialogProps)(
    _templateObject$1(),
    function(props) {
      return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
    },
    function(props) {
      return props.large ? "24px" : props.small ? "12px" : "16px";
    },
    function(props) {
      return props.block ? "width: 100%;" : "";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].color.color
        ? props.dialogTheme[props.flavor].color.color
        : "#040404";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].background.color
        ? props.dialogTheme[props.flavor].background.color
        : "#f0f0f0";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color + "80"
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].background.color
        ? props.dialogTheme[props.flavor].background.color + "80"
        : "#ddcccc80";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.focus
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].color.focus
        ? props.dialogTheme[props.flavor].color.focus
        : "#000";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].background.hover
        ? props.dialogTheme[props.flavor].background.hover
        : "#d5d5d5";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].color.hover
        ? props.dialogTheme[props.flavor].color.hover
        : "#000";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.dialogTheme[props.flavor] &&
          props.dialogTheme[props.flavor].background.color
        ? props.dialogTheme[props.flavor].background.color
        : "#f0f0f0";
    }
  );
  var NButton = styled("button", props$1)(
    _templateObject2$1(),
    function(props) {
      return props.large ? "8px 10px" : props.small ? "3px 5px" : "5px 10px";
    },
    function(props) {
      return props.large ? "24px" : props.small ? "12px" : "16px";
    },
    function(props) {
      return props.block ? "width: 100%;" : "";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.color
        ? props.defaultTheme[props.flavor].color.color
        : "#040404";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.color
        ? props.defaultTheme[props.flavor].background.color
        : "#f0f0f0";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color + "80"
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.color
        ? props.defaultTheme[props.flavor].background.color + "80"
        : "#dcc";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.focus
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.focus
        ? props.defaultTheme[props.flavor].color.focus
        : "#000";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.hover
        ? props.defaultTheme[props.flavor].background.hover
        : "#d5d5d5";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].color.hover
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].color.hover
        ? props.defaultTheme[props.flavor].color.hover
        : "#000";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].background.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].background.color
        ? props.defaultTheme[props.flavor].background.color
        : "#f0f0f0";
    }
  );

  function normalizeComponent$1(
    template,
    style,
    script,
    scopeId,
    isFunctionalTemplate,
    moduleIdentifier,
    /* server only */
    shadowMode,
    createInjector,
    createInjectorSSR,
    createInjectorShadow
  ) {
    if (typeof shadowMode !== "boolean") {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === "function" ? script.options : script; // render functions

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
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
      hook = shadowMode
        ? function(context) {
            style.call(
              this,
              createInjectorShadow(context, this.$root.$options.shadowRoot)
            );
          }
        : function(context) {
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

  var __vue_component__$1 = normalizeComponent$1(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  ); // Import vue component

  var install = function installNButton(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("NButton", NButton);
  }; // Create module definition for Vue.use()

  var plugin = {
    install: install
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue$1 = null;

  if (typeof window !== "undefined") {
    GlobalVue$1 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$1 = global.Vue;
  }

  if (GlobalVue$1) {
    GlobalVue$1.use(plugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  NButton.install = install; // install function executed by Vue.use()

  var dialogInstall = function installDialogButton(Vue) {
    if (dialogInstall.installed) return;
    dialogInstall.installed = true;
    Vue.component("DialogButton", DialogButton);
  }; // Create module definition for Vue.use()

  var dialogPlugin = {
    install: dialogInstall
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  if (typeof window !== "undefined") {
    GlobalVue$1 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$1 = global.Vue;
  }

  if (GlobalVue$1) {
    GlobalVue$1.use(dialogPlugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  DialogButton.install = dialogInstall; // Export component by default

  function _taggedTemplateLiteral$3(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral$3([
      '\n  width: 100%;\n  height: 35px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px 5px 2px 5px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\n  &:focus {\n    border-color: 1px solid\n      ',
      ";\n    outline: none;\n    box-shadow: 0px 0px 0px 3px\n      ",
      ";\n  }\n  &:read-only {\n    background-color: #e9e9e9;\n    color: #747474;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    color: #747474;\n    background-color: #e2e2e2;\n  }\n"
    ]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$2 = {
    flavor: {
      type: String,
      default: "LightBlue"
    },
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme;
      }
    }
  };
  var NInput = styled("input", props$2)(
    _templateObject$2(),
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].border.color
        ? props.defaultTheme[props.flavor].border.color
        : "#04040480";
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor] &&
          props.defaultTheme[props.flavor].border.color
        ? props.defaultTheme[props.flavor].border.color
        : "#10d2ff80";
    }
  );
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
      oninput: function oninput($e) {
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

  function normalizeComponent$2(
    template,
    style,
    script,
    scopeId,
    isFunctionalTemplate,
    moduleIdentifier,
    /* server only */
    shadowMode,
    createInjector,
    createInjectorSSR,
    createInjectorShadow
  ) {
    if (typeof shadowMode !== "boolean") {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === "function" ? script.options : script; // render functions

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
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
      hook = shadowMode
        ? function(context) {
            style.call(
              this,
              createInjectorShadow(context, this.$root.$options.shadowRoot)
            );
          }
        : function(context) {
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

  var isOldIE$1 =
    typeof navigator !== "undefined" &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$1(context) {
    return function(id, style) {
      return addStyle$1(id, style);
    };
  }

  var HEAD$1;
  var styles$1 = {};

  function addStyle$1(id, css) {
    var group = isOldIE$1 ? css.media || "default" : id;
    var style =
      styles$1[group] ||
      (styles$1[group] = {
        ids: new Set(),
        styles: []
      });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */"; // http://stackoverflow.com/a/26603875

        code +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          " */";
      }

      if (!style.element) {
        style.element = document.createElement("style");
        style.element.type = "text/css";
        if (css.media) style.element.setAttribute("media", css.media);

        if (HEAD$1 === undefined) {
          HEAD$1 = document.head || document.getElementsByTagName("head")[0];
        }

        HEAD$1.appendChild(style.element);
      }

      if ("styleSheet" in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles
          .filter(Boolean)
          .join("\n");
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  }
  /* script */

  var __vue_script__$2 = VueInput;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(
      "div",
      {
        staticClass: "input-container"
      },
      [
        _c(
          "n-label",
          {
            attrs: {
              dark: _vm.labelDark,
              flavor: _vm.labelFlavor,
              for: _vm.name
            }
          },
          [_vm._v(_vm._s(_vm.label))]
        ),
        _vm._v(" "),
        _c("n-input", {
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
            input: _vm.oninput,
            change: _vm.onChange,
            focus: _vm.onFocus
          }
        })
      ],
      1
    );
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-23064d4e_0", {
      source:
        "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n",
      map: {
        version: 3,
        sources: [
          "C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\StyledHTML\\Input\\src\\Input.vue"
        ],
        names: [],
        mappings: ";AAoMA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA",
        file: "Input.vue",
        sourcesContent: [
          '<template>\r\n  <div class="input-container">\r\n    <n-label :dark="labelDark" :flavor="labelFlavor" :for="name">{{\r\n      label\r\n    }}</n-label>\r\n    <n-input\r\n      :flavor="flavor"\r\n      :id="name"\r\n      :readonly="readonly"\r\n      :placeholder="placeholder"\r\n      :pattern="pattern"\r\n      :multiple="multiple"\r\n      :min="min"\r\n      :max="max"\r\n      :name="name"\r\n      :type="inputType"\r\n      :required="required"\r\n      :disabled="disabled"\r\n      :autofocus="autofocus"\r\n      :autocomplete="autocomplete"\r\n      :value="internalValue"\r\n      @input="oninput"\r\n      @change="onChange"\r\n      @focus="onFocus"\r\n    ></n-input>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from "@IntusFacultas/typography";\r\nimport styled from "vue-styled-components";\r\nimport Theme from "@IntusFacultas/design-system";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: "LightBlue"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nexport const NInput = styled("input", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: 1px solid\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : "#04040480"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : "#10d2ff80"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueInput = {\r\n  name: "vue-input",\r\n  components: { NInput, NLabel },\r\n  data: function() {\r\n    return {\r\n      internalValue: ""\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: "LightBlue"\r\n    },\r\n    autocomplete: {\r\n      type: String,\r\n      default: "off"\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    pattern: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    min: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    max: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    inputType: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (typeof self.$parent !== "undefined") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n  },\r\n  methods: {\r\n    oninput($e) {\r\n      var self = this;\r\n      this.internalValue = $e;\r\n      self.$emit("input", this.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit("change", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit("focus");\r\n    }\r\n  }\r\n};\r\nexport default VueInput;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n'
        ]
      },
      media: undefined
    });
  };
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = normalizeComponent$2(
    {
      render: __vue_render__,
      staticRenderFns: __vue_staticRenderFns__
    },
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

  var components$1 = [
    {
      label: "VueInput",
      component: VueInput
    },
    {
      label: "NInput",
      component: NInput
    }
  ];
  var GlobalVue$2 = null;

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

  for (
    var _i$1 = 0, _components$1 = components$1;
    _i$1 < _components$1.length;
    _i$1++
  ) {
    _loop$1();
  } // Export component by default

  function _taggedTemplateLiteral$4(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral$4([
      "\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n"
    ]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral$4([
      "\n  flex: ",
      ";\n  width: 100%;\n  padding: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  @media (min-width: 0px) {\n    flex: ",
      ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ",
      "\n        )\n    );\n  }\n  @media (min-width: 576px) {\n    flex: ",
      ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ",
      "\n        )\n    );\n  }\n  @media (min-width: 768px) {\n    flex: ",
      ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ",
      "\n        )\n    );\n  }\n  @media (min-width: 992px) {\n    flex: ",
      ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ",
      "\n        )\n    );\n  }\n  @media (min-width: 1200px) {\n    flex: ",
      ";\n    min-width: calc(\n      100% /\n        (\n          12 /\n            ",
      "\n        )\n    );\n  }\n  box-sizing: border-box;\n"
    ]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$3 = {
    col: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  };
  var FlexColumn = styled("div", props$3)(
    _templateObject$3(),
    function(props) {
      return !isNaN(props.col) ? props.col : 1;
    },
    function(props) {
      return !isNaN(props.xs)
        ? props.xs
        : !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.xs)
        ? props.xs
        : !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.sm)
        ? props.sm
        : !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.md)
        ? props.md
        : !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.lg)
        ? props.lg
        : !isNaN(props.xl)
        ? props.xl
        : !isNaN(props.col)
        ? props.col
        : 1;
    },
    function(props) {
      return !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
    },
    function(props) {
      return !isNaN(props.xl) ? props.xl : !isNaN(props.col) ? props.col : 1;
    }
  );
  var FlexRow = styled.div(_templateObject2$2());

  function normalizeComponent$3(
    template,
    style,
    script,
    scopeId,
    isFunctionalTemplate,
    moduleIdentifier,
    /* server only */
    shadowMode,
    createInjector,
    createInjectorSSR,
    createInjectorShadow
  ) {
    if (typeof shadowMode !== "boolean") {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === "function" ? script.options : script; // render functions

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
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
      hook = shadowMode
        ? function(context) {
            style.call(
              this,
              createInjectorShadow(context, this.$root.$options.shadowRoot)
            );
          }
        : function(context) {
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

  var __vue_script__$3 = FlexColumn;
  /* template */

  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = normalizeComponent$3(
    {},
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  ); // Import vue component

  var components$2 = [
    {
      label: "FlexRow",
      component: FlexRow
    },
    {
      label: "FlexColumn",
      component: FlexColumn
    }
  ];
  var GlobalVue$3 = null;

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
      GlobalVue$3 = window.Vue;
    } else if (typeof global !== "undefined") {
      GlobalVue$3 = global.Vue;
    }

    if (GlobalVue$3) {
      GlobalVue$3.use(plugin);
    } // Inject install function into component - allows component
    // to be registered via Vue.use() as well as Vue.component()

    component_obj.component.install = install;
  };

  for (
    var _i$2 = 0, _components$2 = components$2;
    _i$2 < _components$2.length;
    _i$2++
  ) {
    _loop$2();
  } // Export component by default

  function _templateObject7() {
    var data = _taggedTemplateLiteral([
      "\n  margin-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n"
    ]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral([""]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral([
      '\n  width: 100%;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  padding: 10px;\n  word-break: break-word;\n'
    ]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral([
      "\n  z-index: ",
      ";\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-top: solid 7px\n    ",
      ";\n  border-radius: 0.25rem;\n  min-width: ",
      "px;\n  display: flex;\n  transition: all 0.4s;\n  transform: scale(0);\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\n"
    ]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$3() {
    var data = _taggedTemplateLiteral([
      "\n  background-color: #444;\n  opacity: 0;\n  z-index: ",
      ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition-duration: 0.4s;\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\n  transition-property: opacity;\n  animation: vueme-fadein 0.4s;\n"
    ]);

    _templateObject2$3 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteral([
      "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: fixed;\n  width: 100%;\n  z-index: ",
      ";\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n"
    ]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var props$4 = {
    zIndex: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 360
    },
    flavor: String,
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme;
      }
    }
  };
  var VueMeDialogContainer = styled("div", props$4)(
    _templateObject$4(),
    function(props) {
      return props.zIndex + 1999;
    }
  );
  var VueMeBackdrop = styled("div", props$4)(_templateObject2$3(), function(
    props
  ) {
    return props.zIndex + 1999;
  });
  var VueMeTitleContainer = styled.div(_templateObject3$1());
  var VueMeDialogBox = styled("div", props$4)(
    _templateObject4(),
    function(props) {
      return props.zIndex + 2000;
    },
    function(props) {
      return props.theme && props.theme[props.flavor]
        ? props.theme[props.flavor].border.color
        : props.defaultTheme[props.flavor]
        ? props.defaultTheme[props.flavor].border.color
        : "white";
    },
    function(props) {
      return props.width;
    }
  );
  var VueMeDialogContentContainer = styled.div(_templateObject5());
  var VueMeDialogContent = styled.div(_templateObject6());
  var VueMeDialogButtonContainer = styled.div(_templateObject7());
  var VueMeDialog = {
    components: {
      VueMeDialogContainer: VueMeDialogContainer,
      VueMeBackdrop: VueMeBackdrop,
      VueMeTitleContainer: VueMeTitleContainer,
      VueMeDialogBox: VueMeDialogBox,
      VueMeDialogContentContainer: VueMeDialogContentContainer,
      VueMeDialogContent: VueMeDialogContent,
      VueMeDialogButtonContainer: VueMeDialogButtonContainer,
      SubSectionTitle: SubSectionTitle,
      DialogButton: DialogButton,
      VueInput: VueInput,
      FlexRow: FlexRow,
      FlexColumn: FlexColumn
    },
    data: function data() {
      return {
        show: false,
        intervalId: -1,
        shaking: false,
        enabled: false,
        fieldValues: [],
        internalCloseTime: 0
      };
    },
    props: {
      flavor: {
        type: String,
        default: ""
      },
      id: {
        type: Number,
        required: true
      },
      parent: {
        type: Object,
        required: true
      },
      zIndex: {
        type: Number,
        default: 0
      },
      closeTime: {
        type: Number,
        default: 0
      },
      autoCloseIndex: {
        type: Number,
        default: -1
      },
      autoClose: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "Alert"
      },
      icon: {
        type: String,
        default: ""
      },
      width: {
        type: Number,
        default: 360
      },
      content: {
        type: String,
        default: "You forgot to provide content"
      },
      fields: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      backgroundDismiss: {
        type: Boolean,
        default: true
      },
      buttons: {
        type: Array,
        default: function _default() {
          return [
            {
              id: 1,
              flavor: "",
              text: "Close",
              action: function action() {
                // empty
              }
            }
          ];
        }
      }
    },
    mounted: function mounted() {
      var self = this;
      this.$nextTick(function() {
        self.open();
      });
    },
    methods: {
      open: function open() {
        this.show = true;
        this.enabled = true;
        this.internalCloseTime = this.closeTime;

        if (this.autoClose) {
          this.beginAutoClose();
        }

        var self = this;
        setTimeout(function() {
          self.$refs.backdrop.$el.classList.add("vueme-dialog-backdrop-open");
          self.$refs.dialogBox.$el.classList.add("vueme-dialog-open");
        }, 50);
      },
      handleAutoClose: function handleAutoClose() {
        if (this.internalCloseTime == 0) {
          clearInterval(this.intervalId);
          this.callFunction(this.buttons[this.autoCloseIndex]);
        } else {
          this.internalCloseTime--;
        }
      },
      beginAutoClose: function beginAutoClose() {
        this.intervalId = setInterval(this.handleAutoClose, 1000);
      },
      callFunction: function callFunction(button) {
        if (this.enabled) {
          var close = button.action(this.fieldValues);

          if (close !== false) {
            this.close();
          }
        }
      },
      close: function close() {
        if (this.enabled && !this.shaking) {
          this.enabled = false;

          if (this && this.$refs && this.$refs.dialogBox) {
            this.$refs.dialogBox.$el.classList.remove("vueme-dialog-open");
            this.$refs.dialogBox.$el.classList.add("vueme-dismiss-dialog");
          }

          if (this && this.$refs && this.$refs.backdrop)
            this.$refs.backdrop.$el.classList.remove(
              "vueme-dialog-backdrop-open"
            );
          var self = this;
          setTimeout(function() {
            self.show = false;
            self.show = false; // destroy the vue listeners, etc

            self.$destroy(); // remove the element from the DOM

            self.$el.parentNode.removeChild(self.$el);
            self.parent.close(self.id);
          }, 420);
        }
      },
      closeDialog: function closeDialog() {
        if (!this.enabled) {
          return;
        }

        if (this.backgroundDismiss) {
          this.close();
        } else {
          if (this && this.$refs && this.$refs.dialogBox)
            this.$refs.dialogBox.$el.classList.add("vueme-shake-dialog");
          var self = this;
          this.shaking = true;
          setTimeout(function() {
            self.shaking = false;
            if (self && self.$refs && self.$refs.dialogBox)
              self.$refs.dialogBox.$el.classList.remove("vueme-shake-dialog");
          }, 1000);
        }
      }
    },
    template:
      '\n  <vue-me-dialog-container :z-index="zIndex">\n    <vue-me-backdrop\n      ref="backdrop"\n      :class="{\'vueme-dialog-backdrop-open\' : show}"\n      :z-index="zIndex"\n      @click="closeDialog"\n    ></vue-me-backdrop>\n      <vue-me-dialog-box\n        ref="dialogBox"\n        :flavor="flavor"\n        :width="width"\n      >\n        <vue-me-dialog-content-container>\n          <vue-me-title-container>\n            <span v-html="icon"></span>\n            <sub-section-title class="vue-me-title">{{title}}</sub-section-title>\n          </vue-me-title-container>\n          <vue-me-dialog-content>\n            <div v-html="content"></div>\n            <form v-if="fields.length > 0">\n              <vue-input\n                v-for="field in fields"\n                :key="\'field\' + field.id"\n                :name="\'vueMeField\' + field.id"\n                :input-type="field.type"\n                :label="field.label"\n                v-model="fieldValues[field.id]"\n              ></vue-input>\n            </form>\n            <vue-me-dialog-button-container>\n              <dialog-button\n                v-for="(button, index) in buttons"\n                :key="\'button\' + button.id"\n                @click="callFunction(button)"\n                :flavor="button.flavor"\n                :small="true"\n                :disabled="shaking"\n              >\n                {{button.text}}\n                <span v-if="index == autoCloseIndex">({{internalCloseTime}})</span>\n              </dialog-button>\n            </vue-me-dialog-button-container>\n          </vue-me-dialog-content>\n        </vue-me-dialog-content-container>\n      </vue-me-dialog-box>\n  </vue-me-dialog-container>\n  '
  };
  var VueMe = {
    components: {
      VueMeDialog: VueMeDialog
    },
    name: "vue-me",
    data: function data() {
      return {
        alerts: [],
        availableId: 0,
        availalbeAlertId: 0,
        deletedAlerts: []
      };
    },
    props: {
      parentInstance: {
        type: Object,
        default: ""
      }
    },
    mounted: function mounted() {
      this.parentInstance.$alert = this.alert;

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
                  if (
                    Object.prototype.hasOwnProperty.call(nextSource, nextKey)
                  ) {
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
    },
    watch: {
      deletedAlerts: function deletedAlerts(newVal, oldVal) {
        // we do this because if we change the alerts array while we still have alerts visible, it causes a re render but
        // not a re-mount so the alerts "disappear". So we wait to delete from array until all alerts are no longer visible
        if (
          this.deletedAlerts.length == this.alerts.length &&
          this.deletedAlerts.length != 0
        ) {
          this.alerts = [];
          this.deletedAlerts = [];
        }
      }
    },
    methods: {
      close: function close(id) {
        this.deletedAlerts.push(id);
      },
      formatField: function formatField(field) {
        var label = "Label";

        if (field.label) {
          label = field.label;
        }

        var fieldType = "text";

        if (field.type) {
          fieldType = field.type;
        }

        var id = label + "-" + fieldType;

        if (field.id) {
          id = field.id;
        }

        return {
          id: id,
          label: label,
          type: fieldType
        };
      },
      formatButton: function formatButton(button) {
        var text = "Button";

        if (button.text) {
          text = button.text;
        }

        var flavor = "Primary";

        if (button.flavor) {
          flavor = button.flavor;
        }

        var action = function action() {};

        if (button.action) {
          action = button.action;
        }

        var id = this.availableId++;

        if (button.id) {
          id = button.id;
        }

        return {
          id: id,
          text: text,
          flavor: flavor,
          action: action
        };
      },
      alert: function alert(options) {
        var dialogConfiguration = {
          id: this.availalbeAlertId++,
          parent: this
        };
        var flavor = "";

        if (options.flavor) {
          flavor = options.flavor;
        }

        dialogConfiguration.flavor = flavor;
        var width = 360;

        if (options.width) {
          width = options.width;
        }

        dialogConfiguration.width = width;
        var title = "Alert";

        if (typeof options.title == "string") {
          title = options.title;
        }

        dialogConfiguration.title = title;
        var icon = "";

        if (options.icon) {
          icon = options.icon;
        }

        dialogConfiguration.icon = icon;
        var content = "This is an alert.";

        if (typeof options.content == "string") {
          content = options.content;
        }

        dialogConfiguration.content = content;
        var backgroundDismiss = false;

        if (options.backgroundDismiss) {
          backgroundDismiss = options.backgroundDismiss;
        }

        dialogConfiguration.backgroundDismiss = backgroundDismiss;
        var buttons = [this.formatButton({})];

        if (options.buttons && Array.isArray(options.buttons)) {
          buttons = [];

          for (var x = 0; x < options.buttons.length; x++) {
            buttons.push(this.formatButton(options.buttons[x]));
          }
        }

        dialogConfiguration.buttons = buttons;
        var fields = [];

        if (options.fields && Array.isArray(options.fields)) {
          fields = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (
              var _iterator = options.fields[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var field = _step.value;
              fields.push(this.formatField(field));
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
        }

        dialogConfiguration.fields = fields;
        var autoClose = options.autoClose;

        if (autoClose) {
          dialogConfiguration.autoClose = true;
          autoClose = autoClose.split("|");
          dialogConfiguration.closeTime = Math.ceil(
            parseInt(autoClose[1]) / 1000
          );
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (
              var _iterator2 = dialogConfiguration.buttons
                  .entries()
                  [Symbol.iterator](),
                _step2;
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                index = _step2$value[0],
                button = _step2$value[1];

              if (button.id == autoClose[0]) {
                dialogConfiguration.autoCloseIndex = index;
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
        }

        this.alerts.push(Object.assign({}, dialogConfiguration));
      }
    }
  };

  function normalizeComponent$4(
    template,
    style,
    script,
    scopeId,
    isFunctionalTemplate,
    moduleIdentifier,
    /* server only */
    shadowMode,
    createInjector,
    createInjectorSSR,
    createInjectorShadow
  ) {
    if (typeof shadowMode !== "boolean") {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.

    var options = typeof script === "function" ? script.options : script; // render functions

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
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
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
      hook = shadowMode
        ? function(context) {
            style.call(
              this,
              createInjectorShadow(context, this.$root.$options.shadowRoot)
            );
          }
        : function(context) {
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

  var isOldIE$2 =
    typeof navigator !== "undefined" &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$2(context) {
    return function(id, style) {
      return addStyle$2(id, style);
    };
  }

  var HEAD$2;
  var styles$2 = {};

  function addStyle$2(id, css) {
    var group = isOldIE$2 ? css.media || "default" : id;
    var style =
      styles$2[group] ||
      (styles$2[group] = {
        ids: new Set(),
        styles: []
      });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */"; // http://stackoverflow.com/a/26603875

        code +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
          " */";
      }

      if (!style.element) {
        style.element = document.createElement("style");
        style.element.type = "text/css";
        if (css.media) style.element.setAttribute("media", css.media);

        if (HEAD$2 === undefined) {
          HEAD$2 = document.head || document.getElementsByTagName("head")[0];
        }

        HEAD$2.appendChild(style.element);
      }

      if ("styleSheet" in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles
          .filter(Boolean)
          .join("\n");
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
        else style.element.appendChild(textNode);
      }
    }
  }

  /* script */
  const __vue_script__$4 = VueMe;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._l(_vm.alerts, function(alert, index) {
        return _c("vue-me-dialog", {
          key: index,
          attrs: {
            flavor: alert.flavor,
            id: alert.id,
            parent: alert.parent,
            zIndex: alert.zIndex,
            closeTime: alert.closeTime,
            autoCloseIndex: alert.autoCloseIndex,
            autoClose: alert.autoClose,
            title: alert.title,
            icon: alert.icon,
            width: alert.width,
            content: alert.content,
            fields: alert.fields,
            backgroundDismiss: alert.backgroundDismiss,
            buttons: alert.buttons
          }
        });
      }),
      1
    );
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function(inject) {
    if (!inject) return;
    inject("data-v-6f980367_0", {
      source:
        "\n.vue-me-title {\r\n  margin: 0px;\n}\n.vueme-dialog-backdrop-open {\r\n  opacity: 0.2;\n}\n.vueme-dialog-open {\r\n  transform: scale(1);\n}\n.vueme-dismiss-dialog {\r\n  transition: all 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transform: scale(0);\r\n  display: block;\n}\n.vueme-shake-dialog {\r\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\n}\n@keyframes vueme-fadein {\nfrom {\r\n    opacity: 0;\n}\nto {\r\n    opacity: 0.2;\n}\n}\n@keyframes shake {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\n}\n30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\n}\n40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\n}\n}\n@-ms-keyframes shake {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\n}\n30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\n}\n40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\n}\n}\r\n",
      map: {
        version: 3,
        sources: [
          "C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\VueMe\\src\\VueMe.vue"
        ],
        names: [],
        mappings:
          ";AAugBA;EACA,WAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,6DAAA;EACA,mBAAA;EACA,cAAA;AACA;AACA;EACA,wEAAA;EACA,gEAAA;EACA,uCAAA;EACA,+BAAA;AACA;AACA;AACA;IACA,UAAA;AACA;AACA;IACA,YAAA;AACA;AACA;AACA;AACA;;IAEA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;;;IAGA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;AACA;AACA;;IAEA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA;;;IAGA,0CAAA;IACA,kCAAA;AACA;AACA;;IAEA,yCAAA;IACA,iCAAA;AACA;AACA",
        file: "VueMe.vue",
        sourcesContent: [
          '<template>\r\n  <div>\r\n    <vue-me-dialog\r\n      v-for="(alert, index) in alerts"\r\n      :key="index"\r\n      :flavor="alert.flavor"\r\n      :id="alert.id"\r\n      :parent="alert.parent"\r\n      :zIndex="alert.zIndex"\r\n      :closeTime="alert.closeTime"\r\n      :autoCloseIndex="alert.autoCloseIndex"\r\n      :autoClose="alert.autoClose"\r\n      :title="alert.title"\r\n      :icon="alert.icon"\r\n      :width="alert.width"\r\n      :content="alert.content"\r\n      :fields="alert.fields"\r\n      :backgroundDismiss="alert.backgroundDismiss"\r\n      :buttons="alert.buttons"\r\n    ></vue-me-dialog>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport styled from "vue-styled-components";\r\nimport { Theme } from "@IntusFacultas/design-system";\r\nimport { SubSectionTitle } from "@IntusFacultas/typography";\r\nimport { DialogButton } from "@IntusFacultas/button";\r\nimport { VueInput } from "@IntusFacultas/input";\r\nimport { FlexRow, FlexColumn } from "@IntusFacultas/layout";\r\nconst props = {\r\n  zIndex: {\r\n    type: Number,\r\n    default: 0\r\n  },\r\n  width: {\r\n    type: Number,\r\n    default: 360\r\n  },\r\n  flavor: String,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst VueMeDialogContainer = styled("div", props)`\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: ${props => props.zIndex + 1999};\r\n  top: 0px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n`;\r\nconst VueMeBackdrop = styled("div", props)`\r\n  background-color: #444;\r\n  opacity: 0;\r\n  z-index: ${props => props.zIndex + 1999};\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition-duration: 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transition-property: opacity;\r\n  animation: vueme-fadein 0.4s;\r\n`;\r\nconst VueMeTitleContainer = styled.div`\r\n  display: flex;\r\n`;\r\nconst VueMeDialogBox = styled("div", props)`\r\n  z-index: ${props => props.zIndex + 2000};\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-top: solid 7px\r\n    ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].border.color\r\n        : props.defaultTheme[props.flavor]\r\n        ? props.defaultTheme[props.flavor].border.color\r\n        : "white"};\r\n  border-radius: 0.25rem;\r\n  min-width: ${props => props.width}px;\r\n  display: flex;\r\n  transition: all 0.4s;\r\n  transform: scale(0);\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n`;\r\nconst VueMeDialogContentContainer = styled.div`\r\n  width: 100%;\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  padding: 10px;\r\n  word-break: break-word;\r\n`;\r\nconst VueMeDialogContent = styled.div``;\r\nconst VueMeDialogButtonContainer = styled.div`\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n`;\r\nconst VueMeDialog = {\r\n  components: {\r\n    VueMeDialogContainer,\r\n    VueMeBackdrop,\r\n    VueMeTitleContainer,\r\n    VueMeDialogBox,\r\n    VueMeDialogContentContainer,\r\n    VueMeDialogContent,\r\n    VueMeDialogButtonContainer,\r\n    SubSectionTitle,\r\n    DialogButton,\r\n    VueInput,\r\n    FlexRow,\r\n    FlexColumn\r\n  },\r\n  data() {\r\n    return {\r\n      show: false,\r\n      intervalId: -1,\r\n      shaking: false,\r\n      enabled: false,\r\n      fieldValues: [],\r\n      internalCloseTime: 0\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    id: {\r\n      type: Number,\r\n      required: true\r\n    },\r\n    parent: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    zIndex: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    closeTime: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    autoCloseIndex: {\r\n      type: Number,\r\n      default: -1\r\n    },\r\n    autoClose: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    title: {\r\n      type: String,\r\n      default: "Alert"\r\n    },\r\n    icon: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    width: {\r\n      type: Number,\r\n      default: 360\r\n    },\r\n    content: {\r\n      type: String,\r\n      default: "You forgot to provide content"\r\n    },\r\n    fields: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    backgroundDismiss: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    buttons: {\r\n      type: Array,\r\n      default() {\r\n        return [\r\n          {\r\n            id: 1,\r\n            flavor: "",\r\n            text: "Close",\r\n            action: function() {\r\n              // empty\r\n            }\r\n          }\r\n        ];\r\n      }\r\n    }\r\n  },\r\n  mounted() {\r\n    let self = this;\r\n    this.$nextTick(function() {\r\n      self.open();\r\n    });\r\n  },\r\n  methods: {\r\n    open: function() {\r\n      this.show = true;\r\n      this.enabled = true;\r\n      this.internalCloseTime = this.closeTime;\r\n      if (this.autoClose) {\r\n        this.beginAutoClose();\r\n      }\r\n      let self = this;\r\n      setTimeout(function() {\r\n        self.$refs.backdrop.$el.classList.add("vueme-dialog-backdrop-open");\r\n        self.$refs.dialogBox.$el.classList.add("vueme-dialog-open");\r\n      }, 50);\r\n    },\r\n    handleAutoClose: function() {\r\n      if (this.internalCloseTime == 0) {\r\n        clearInterval(this.intervalId);\r\n        this.callFunction(this.buttons[this.autoCloseIndex]);\r\n      } else {\r\n        this.internalCloseTime--;\r\n      }\r\n    },\r\n    beginAutoClose: function() {\r\n      this.intervalId = setInterval(this.handleAutoClose, 1000);\r\n    },\r\n    callFunction: function(button) {\r\n      if (this.enabled) {\r\n        var close = button.action(this.fieldValues);\r\n        if (close !== false) {\r\n          this.close();\r\n        }\r\n      }\r\n    },\r\n    close: function() {\r\n      if (this.enabled && !this.shaking) {\r\n        this.enabled = false;\r\n        if (this && this.$refs && this.$refs.dialogBox) {\r\n          this.$refs.dialogBox.$el.classList.remove("vueme-dialog-open");\r\n          this.$refs.dialogBox.$el.classList.add("vueme-dismiss-dialog");\r\n        }\r\n        if (this && this.$refs && this.$refs.backdrop)\r\n          this.$refs.backdrop.$el.classList.remove(\r\n            "vueme-dialog-backdrop-open"\r\n          );\r\n        let self = this;\r\n        setTimeout(function() {\r\n          self.show = false;\r\n          self.show = false;\r\n          // destroy the vue listeners, etc\r\n          self.$destroy();\r\n\r\n          // remove the element from the DOM\r\n          self.$el.parentNode.removeChild(self.$el);\r\n          self.parent.close(self.id);\r\n        }, 420);\r\n      }\r\n    },\r\n    closeDialog: function() {\r\n      if (!this.enabled) {\r\n        return;\r\n      }\r\n      if (this.backgroundDismiss) {\r\n        this.close();\r\n      } else {\r\n        if (this && this.$refs && this.$refs.dialogBox)\r\n          this.$refs.dialogBox.$el.classList.add("vueme-shake-dialog");\r\n        let self = this;\r\n        this.shaking = true;\r\n        setTimeout(function() {\r\n          self.shaking = false;\r\n          if (self && self.$refs && self.$refs.dialogBox)\r\n            self.$refs.dialogBox.$el.classList.remove("vueme-shake-dialog");\r\n        }, 1000);\r\n      }\r\n    }\r\n  },\r\n  template: `\r\n  <vue-me-dialog-container :z-index="zIndex">\r\n    <vue-me-backdrop\r\n      ref="backdrop"\r\n      :class="{\'vueme-dialog-backdrop-open\' : show}"\r\n      :z-index="zIndex"\r\n      @click="closeDialog"\r\n    ></vue-me-backdrop>\r\n      <vue-me-dialog-box\r\n        ref="dialogBox"\r\n        :flavor="flavor"\r\n        :width="width"\r\n      >\r\n        <vue-me-dialog-content-container>\r\n          <vue-me-title-container>\r\n            <span v-html="icon"></span>\r\n            <sub-section-title class="vue-me-title">{{title}}</sub-section-title>\r\n          </vue-me-title-container>\r\n          <vue-me-dialog-content>\r\n            <div v-html="content"></div>\r\n            <form v-if="fields.length > 0">\r\n              <vue-input\r\n                v-for="field in fields"\r\n                :key="\'field\' + field.id"\r\n                :name="\'vueMeField\' + field.id"\r\n                :input-type="field.type"\r\n                :label="field.label"\r\n                v-model="fieldValues[field.id]"\r\n              ></vue-input>\r\n            </form>\r\n            <vue-me-dialog-button-container>\r\n              <dialog-button\r\n                v-for="(button, index) in buttons"\r\n                :key="\'button\' + button.id"\r\n                @click="callFunction(button)"\r\n                :flavor="button.flavor"\r\n                :small="true"\r\n                :disabled="shaking"\r\n              >\r\n                {{button.text}}\r\n                <span v-if="index == autoCloseIndex">({{internalCloseTime}})</span>\r\n              </dialog-button>\r\n            </vue-me-dialog-button-container>\r\n          </vue-me-dialog-content>\r\n        </vue-me-dialog-content-container>\r\n      </vue-me-dialog-box>\r\n  </vue-me-dialog-container>\r\n  `\r\n};\r\nexport const VueMe = {\r\n  components: { VueMeDialog },\r\n  name: "vue-me",\r\n  data() {\r\n    return {\r\n      alerts: [],\r\n      availableId: 0,\r\n      availalbeAlertId: 0,\r\n      deletedAlerts: []\r\n    };\r\n  },\r\n  props: {\r\n    parentInstance: {\r\n      type: Object,\r\n      default: ""\r\n    }\r\n  },\r\n  mounted: function() {\r\n    this.parentInstance.$alert = this.alert;\r\n    if (typeof Object.assign !== "function") {\r\n      // Must be writable: true, enumerable: false, configurable: true\r\n      Object.defineProperty(Object, "assign", {\r\n        value: function assign(target, varArgs) {\r\n          // .length of function is 2\r\n          "use strict";\r\n          if (target === null || target === undefined) {\r\n            throw new TypeError("Cannot convert undefined or null to object");\r\n          }\r\n\r\n          var to = Object(target);\r\n\r\n          for (var index = 1; index < arguments.length; index++) {\r\n            var nextSource = arguments[index];\r\n\r\n            if (nextSource !== null && nextSource !== undefined) {\r\n              for (var nextKey in nextSource) {\r\n                // Avoid bugs when hasOwnProperty is shadowed\r\n                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {\r\n                  to[nextKey] = nextSource[nextKey];\r\n                }\r\n              }\r\n            }\r\n          }\r\n          return to;\r\n        },\r\n        writable: true,\r\n        configurable: true\r\n      });\r\n    }\r\n  },\r\n  watch: {\r\n    deletedAlerts(newVal, oldVal) {\r\n      // we do this because if we change the alerts array while we still have alerts visible, it causes a re render but\r\n      // not a re-mount so the alerts "disappear". So we wait to delete from array until all alerts are no longer visible\r\n      if (\r\n        this.deletedAlerts.length == this.alerts.length &&\r\n        this.deletedAlerts.length != 0\r\n      ) {\r\n        this.alerts = [];\r\n        this.deletedAlerts = [];\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    close: function close(id) {\r\n      this.deletedAlerts.push(id);\r\n    },\r\n    formatField: function(field) {\r\n      var label = "Label";\r\n      if (field.label) {\r\n        label = field.label;\r\n      }\r\n      var fieldType = "text";\r\n      if (field.type) {\r\n        fieldType = field.type;\r\n      }\r\n      var id = label + "-" + fieldType;\r\n      if (field.id) {\r\n        id = field.id;\r\n      }\r\n      return {\r\n        id: id,\r\n        label: label,\r\n        type: fieldType\r\n      };\r\n    },\r\n    formatButton: function(button) {\r\n      var text = "Button";\r\n      if (button.text) {\r\n        text = button.text;\r\n      }\r\n      var flavor = "Primary";\r\n      if (button.flavor) {\r\n        flavor = button.flavor;\r\n      }\r\n      var action = function() {};\r\n      if (button.action) {\r\n        action = button.action;\r\n      }\r\n      var id = this.availableId++;\r\n      if (button.id) {\r\n        id = button.id;\r\n      }\r\n      return {\r\n        id: id,\r\n        text: text,\r\n        flavor: flavor,\r\n        action: action\r\n      };\r\n    },\r\n    alert: function(options) {\r\n      let dialogConfiguration = {\r\n        id: this.availalbeAlertId++,\r\n        parent: this\r\n      };\r\n      let flavor = "";\r\n      if (options.flavor) {\r\n        flavor = options.flavor;\r\n      }\r\n      dialogConfiguration.flavor = flavor;\r\n      let width = 360;\r\n      if (options.width) {\r\n        width = options.width;\r\n      }\r\n      dialogConfiguration.width = width;\r\n      let title = "Alert";\r\n      if (typeof options.title == "string") {\r\n        title = options.title;\r\n      }\r\n      dialogConfiguration.title = title;\r\n      let icon = "";\r\n      if (options.icon) {\r\n        icon = options.icon;\r\n      }\r\n      dialogConfiguration.icon = icon;\r\n      let content = "This is an alert.";\r\n      if (typeof options.content == "string") {\r\n        content = options.content;\r\n      }\r\n      dialogConfiguration.content = content;\r\n      let backgroundDismiss = false;\r\n      if (options.backgroundDismiss) {\r\n        backgroundDismiss = options.backgroundDismiss;\r\n      }\r\n      dialogConfiguration.backgroundDismiss = backgroundDismiss;\r\n      let buttons = [this.formatButton({})];\r\n      if (options.buttons && Array.isArray(options.buttons)) {\r\n        buttons = [];\r\n        for (let x = 0; x < options.buttons.length; x++) {\r\n          buttons.push(this.formatButton(options.buttons[x]));\r\n        }\r\n      }\r\n      dialogConfiguration.buttons = buttons;\r\n      let fields = [];\r\n      if (options.fields && Array.isArray(options.fields)) {\r\n        fields = [];\r\n        for (let field of options.fields) {\r\n          fields.push(this.formatField(field));\r\n        }\r\n      }\r\n      dialogConfiguration.fields = fields;\r\n      let autoClose = options.autoClose;\r\n      if (autoClose) {\r\n        dialogConfiguration.autoClose = true;\r\n        autoClose = autoClose.split("|");\r\n        dialogConfiguration.closeTime = Math.ceil(\r\n          parseInt(autoClose[1]) / 1000\r\n        );\r\n        for (let [index, button] of dialogConfiguration.buttons.entries()) {\r\n          if (button.id == autoClose[0]) {\r\n            dialogConfiguration.autoCloseIndex = index;\r\n            break;\r\n          }\r\n        }\r\n      }\r\n      this.alerts.push(Object.assign({}, dialogConfiguration));\r\n    }\r\n  }\r\n};\r\nexport default VueMe;\r\n</script>\r\n\r\n<style>\r\n.vue-me-title {\r\n  margin: 0px;\r\n}\r\n.vueme-dialog-backdrop-open {\r\n  opacity: 0.2;\r\n}\r\n.vueme-dialog-open {\r\n  transform: scale(1);\r\n}\r\n.vueme-dismiss-dialog {\r\n  transition: all 0.4s;\r\n  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);\r\n  transform: scale(0);\r\n  display: block;\r\n}\r\n.vueme-shake-dialog {\r\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n@keyframes vueme-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 0.2;\r\n  }\r\n}\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\r\n  }\r\n}\r\n@-ms-keyframes shake {\r\n  10%,\r\n  90% {\r\n    -webkit-transform: translate3d(-2px, 0, 0);\r\n    transform: translate3d(-2px, 0, 0);\r\n  }\r\n  20%,\r\n  80% {\r\n    -webkit-transform: translate3d(4px, 0, 0);\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n  30%,\r\n  50%,\r\n  70% {\r\n    -webkit-transform: translate3d(-8px, 0, 0);\r\n    transform: translate3d(-8px, 0, 0);\r\n  }\r\n  40%,\r\n  60% {\r\n    -webkit-transform: translate3d(8px, 0, 0);\r\n    transform: translate3d(8px, 0, 0);\r\n  }\r\n}\r\n</style>\r\n'
        ]
      },
      media: undefined
    });
  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$4 = normalizeComponent$4(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector$2,
    undefined,
    undefined
  );

  // Import vue component

  var install$1 = function installVueMe(Vue) {
    if (install$1.installed) return;
    install$1.installed = true;
    Vue.component("VueMe", __vue_component__$4);
  }; // Create module definition for Vue.use()

  var plugin$1 = {
    install: install$1
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue$4 = null;

  if (typeof window !== "undefined") {
    GlobalVue$4 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$4 = global.Vue;
  }

  if (GlobalVue$4) {
    GlobalVue$4.use(plugin$1);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  __vue_component__$4.install = install$1; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  return __vue_component__$4;
})();
//# sourceMappingURL=VueMe.iife.js.map
