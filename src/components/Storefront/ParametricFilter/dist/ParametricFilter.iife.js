var ParametricFilter = (function() {
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
        writable: true,
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
          value: Object.freeze(raw),
        },
      })
    );
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
        writable: true,
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
                  cssText: rule,
                };

                _this.sheet.cssRules.push(serverRule);

                return {
                  serverRule: serverRule,
                  appendRule: function appendRule(newCss) {
                    return (serverRule.cssText += newCss);
                  },
                };
              },
            };
          }

          this.injected = true;
        },
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
        },
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
        },
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
                },
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
        },
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
        },
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
        },
      },
    ]);

    return StyleSheet;
  })();

  var StyleSheet$1 = (function() {
    function StyleSheet$1() {
      _classCallCheck(this, StyleSheet$1);

      this.globalStyleSheet = new StyleSheet({
        speedy: false,
      });
      this.componentStyleSheet = new StyleSheet({
        speedy: false,
        maxLength: 40,
      });
    }

    _createClass(StyleSheet$1, [
      {
        key: "inject",
        value: function inject() {
          this.globalStyleSheet.inject();
          this.componentStyleSheet.inject();
        },
      },
      {
        key: "flush",
        value: function flush() {
          if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
          if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
        },
      },
      {
        key: "insert",
        value: function insert(rule) {
          var opts =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  global: false,
                };
          var sheet = opts.global
            ? this.globalStyleSheet
            : this.componentStyleSheet;
          return sheet.insert(rule);
        },
      },
      {
        key: "rules",
        value: function rules() {
          return this.globalStyleSheet
            .rules()
            .concat(this.componentStyleSheet.rules());
        },
      },
      {
        key: "injected",
        get: function get() {
          return (
            this.globalStyleSheet.injected && this.componentStyleSheet.injected
          );
        },
      },
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
        exports: {},
      }),
      fn(module, module.exports),
      module.exports
    );
  }

  var hash = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true,
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
            global: true,
          });
        },
      },
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
            },
          },
        },
        props: _objectSpread2$1(
          {
            value: null,
          },
          currentProps,
          {},
          prevProps
        ),
        data: function data() {
          return {
            localValue: this.value,
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
                    slot: slot,
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
                value: this.localValue,
              },
              on: _objectSpread2$1({}, this.$listeners, {
                input: function input(event) {
                  if (event && event.target) {
                    _this.localValue = event.target.value;
                  }
                },
              }),
              scopedSlots: this.$scopedSlots,
            },
            children
          );
        },
        methods: {
          generateAndInjectStyles: function generateAndInjectStyles(
            componentProps
          ) {
            return componentStyle.generateAndInjectStyles(componentProps);
          },
        },
        computed: {
          generatedClassName: function generatedClassName() {
            var componentProps = _objectSpread2$1(
              {
                theme: this.theme,
              },
              this.$props
            );

            return this.generateAndInjectStyles(componentProps);
          },
          theme: function theme() {
            return this.$theme();
          },
        },
        watch: {
          value: function value(newValue) {
            this.localValue = newValue;
          },
          localValue: function localValue() {
            this.$emit("input", this.localValue);
          },
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
        },
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
          keyframe: false,
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
          },
        },
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
    "tspan",
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
        focus: "#444444",
      },
      background: {
        color: "#CBE6F7",
        hover: "#51BAF4",
        focus: "#CBE6F7",
      },
      border: {
        color: "2px solid #CBE6F7",
        hover: "2px solid #51BAF4",
        focus: "2px solid #51BAF4",
      },
    },
    REWORK: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444",
      },
      background: {
        color: "#FFC364",
        hover: "#ED9406",
        focus: "#FFC364",
      },
      border: {
        color: "2px solid #FFC364",
        hover: "2px solid #ED9406",
        focus: "2px solid #ED9406",
      },
    },
    START: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444",
      },
      background: {
        color: "#B7F7DC",
        hover: "#2EE591",
        focus: "#B7F7DC",
      },
      border: {
        color: "2px solid #B7F7DC",
        hover: "2px solid #2EE591",
        focus: "2px solid #2EE591",
      },
    },
    COMPLETE: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444",
      },
      background: {
        color: "#E0CEF4",
        hover: "#735D87",
        focus: "#E0CEF4",
      },
      border: {
        color: "2px solid #E0CEF4",
        hover: "2px solid #735D87",
        focus: "2px solid #735D87",
      },
    },
    CANCEL: {
      color: {
        color: "#444444",
        hover: "#FFFFFF",
        focus: "#444444",
      },
      background: {
        color: "#DDA8A8",
        hover: "#964545",
        focus: "#DDA8A8",
      },
      border: {
        color: "2px solid #DDA8A8",
        hover: "2px solid #964545",
        focus: "2px solid #964545",
      },
    },
  };
  var TextTheme = {
    Normal: {
      color: "#444",
    },
    Dark: {
      color: "#e0e0e0",
    },
    PortionMarkingDark: {
      color: "#cbd5f4",
    },
    LightBlue: {
      color: "#41BEE8",
    },
    AirBlue: {
      color: "#2999F4",
    },
    MissileOrange: {
      color: "#FF7200",
    },
    CyberYellow: {
      color: "#F7C82C",
    },
    SpaceTeal: {
      color: "#0AD1C3",
    },
    INTsMagenta: {
      color: "#FC49C9",
    },
    RegionGreen: {
      color: "#C8E552",
    },
    Sky: {
      color: "#80CCFF",
    },
    Apricot: {
      color: "#FCB681",
    },
    Aqua: {
      color: "#77FCD5",
    },
    Sunny: {
      color: "#F9EC75",
    },
    Moss: {
      color: "#DFFF92",
    },
    Pink: {
      color: "#F2B4F9",
    },
    Deep: {
      color: "#002339",
    },
    Bark: {
      color: "#481F0C",
    },
    Jungle: {
      color: "#015149",
    },
    Spice: {
      color: "#705405",
    },
    Olive: {
      color: "#4C5612",
    },
    Plum: {
      color: "#361329",
    },
  };
  var AlertTheme = {
    warning: {
      color: {
        color: "#222",
        hover: "#222",
        focus: "#222",
      },
      background: {
        color: "#fec700",
        hover: "#fec700",
        focus: "#fec700",
      },
      border: {
        color: "#fec700",
        hover: "#fec700",
        focus: "#fec700",
      },
    },
    danger: {
      color: {
        color: "#fff",
        hover: "#fff",
        focus: "#fff",
      },
      background: {
        color: "#890620",
        hover: "#890620",
        focus: "#890620",
      },
      border: {
        color: "#670014",
        hover: "#670014",
        focus: "#670014",
      },
    },
    success: {
      color: {
        color: "#fff",
        focus: "#fff",
        hover: "#fff",
      },
      background: {
        color: "#0B7C40",
        hover: "#00642E",
        focus: "#0B7C40",
      },
      border: {
        color: "#00642E",
        hover: "#00642E",
        focus: "#00642E",
      },
    },
    info: {
      color: {
        color: "#000",
        hover: "#000",
        focus: "#000",
      },
      background: {
        color: "#4E8098",
        hover: "#4E8098",
        focus: "#4E8098",
      },
      border: {
        color: "#316780",
        hover: "#316780",
        focus: "#316780",
      },
    },
  };

  var NASICTheme = _objectSpread2(
    {
      Light: {
        color: {
          color: "#222",
          hover: "#222",
          focus: "#222",
        },
        background: {
          color: "#f8f9fa",
          hover: "#DDE4E9",
          focus: "#f8f9fa",
        },
        border: {
          color: "#DDE4E9",
          hover: "#DDE4E9",
          focus: "#DDE4E9",
        },
      },
      Secondary: {
        color: {
          color: "#fff",
          hover: "#fff",
          focus: "#fff",
        },
        background: {
          color: "#6c757d",
          hover: "#525D67",
          focus: "#6c757d",
        },
        border: {
          color: "#525D67",
          hover: "#525D67",
          focus: "#525D67",
        },
      },
      Dark: {
        color: {
          color: "#fff",
          hover: "#fff",
          focus: "#fff",
        },
        background: {
          color: "#343a40",
          hover: "#23272b",
          focus: "#343a40",
        },
        border: {
          color: "#4F575E",
          hover: "#4F575E",
          focus: "#4F575E",
        },
      },
      Primary: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#4357AD",
          hover: "#2940A1",
          focus: "#4357AD",
        },
        border: {
          color: "#2940A1",
          hover: "#2940A1",
          focus: "#2940A1",
        },
      },
      Info: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#58B0AE",
          hover: "#36938F",
          focus: "#58B0AE",
        },
        border: {
          color: "#36938F",
          hover: "#36938F",
          focus: "#36938F",
        },
      },
      Warning: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#ED7D3A",
          hover: "#D15A14",
          focus: "#ED7D3A",
        },
        border: {
          color: "#D15A14",
          hover: "#D15A14",
          focus: "#D15A14",
        },
      },
      Danger: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#7C0002",
          hover: "#560002",
          focus: "#7C0002",
        },
        border: {
          color: "#560002",
          hover: "#560002",
          focus: "#560002",
        },
      },
      Success: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#0B7C40",
          hover: "#00642E",
          focus: "#0B7C40",
        },
        border: {
          color: "#00642E",
          hover: "#00642E",
          focus: "#00642E",
        },
      },
      LightBlue: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#41BEE8",
          hover: "#38a5ca",
          focus: "#38a5ca",
        },
        border: {
          color: "#38a5ca",
          hover: "#38a5ca",
          focus: "#38a5ca",
        },
      },
      AirBlue: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#2999F4",
          hover: "#2386d7",
          focus: "#2386d7",
        },
        border: {
          color: "#2386d7",
          hover: "#2386d7",
          focus: "#2386d7",
        },
      },
      MissileOrange: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#FF7200",
          hover: "#C65800",
          focus: "#FF7200",
        },
        border: {
          color: "#C65800",
          hover: "#C65800",
          focus: "#C65800",
        },
      },
      CyberYellow: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#F7C82C",
          hover: "#D4A609",
          focus: "#F7C82C",
        },
        border: {
          color: "#D4A609",
          hover: "#D4A609",
          focus: "#D4A609",
        },
      },
      SpaceTeal: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#0AD1C3",
          hover: "#00BBAE",
          focus: "#0AD1C3",
        },
        border: {
          color: "#00BBAE",
          hover: "#00BBAE",
          focus: "#00BBAE",
        },
      },
      INTsMagenta: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#FC49C9",
          hover: "#FA1FBD",
          focus: "#FC49C9",
        },
        border: {
          color: "#FA1FBD",
          hover: "#FA1FBD",
          focus: "#FA1FBD",
        },
      },
      RegionGreen: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#C8E552",
          hover: "#B0CF2E",
          focus: "#C8E552",
        },
        border: {
          color: "#B0CF2E",
          hover: "#B0CF2E",
          focus: "#B0CF2E",
        },
      },
      Sky: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#80CCFF",
          hover: "#57BDFF",
          focus: "#80CCFF",
        },
        border: {
          color: "#57BDFF",
          hover: "#57BDFF",
          focus: "#57BDFF",
        },
      },
      Apricot: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#FCB681",
          hover: "#D88B51",
          focus: "#FCB681",
        },
        border: {
          color: "#D88B51",
          hover: "#D88B51",
          focus: "#D88B51",
        },
      },
      Aqua: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#77FCD5",
          hover: "#25EEB1",
          focus: "#77FCD5",
        },
        border: {
          color: "#25EEB1",
          hover: "#25EEB1",
          focus: "#25EEB1",
        },
      },
      Sunny: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#F9EC75",
          hover: "#D7C949",
          focus: "#F9EC75",
        },
        border: {
          color: "#D7C949",
          hover: "#D7C949",
          focus: "#D7C949",
        },
      },
      Moss: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#DFFF92",
          hover: "#C5FF38",
          focus: "#DFFF92",
        },
        border: {
          color: "#C5FF38",
          hover: "#C5FF38",
          focus: "#C5FF38",
        },
      },
      Pink: {
        color: {
          color: "#222",
          focus: "#222",
          hover: "#222",
        },
        background: {
          color: "#F2B4F9",
          hover: "#E486EE",
          focus: "#F2B4F9",
        },
        border: {
          color: "#E486EE",
          hover: "#E486EE",
          focus: "#E486EE",
        },
      },
      Deep: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#002339",
          hover: "#000B12",
          focus: "#002339",
        },
        border: {
          color: "#000B12",
          hover: "#000B12",
          focus: "#000B12",
        },
      },
      Bark: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#481F0C",
          hover: "#2B0E01",
          focus: "#481F0C",
        },
        border: {
          color: "#2B0E01",
          hover: "#2B0E01",
          focus: "#2B0E01",
        },
      },
      Jungle: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#015149",
          hover: "#003933",
          focus: "#015149",
        },
        border: {
          color: "#003933",
          hover: "#003933",
          focus: "#003933",
        },
      },
      Spice: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#705405",
          hover: "#4A3700",
          focus: "#705405",
        },
        border: {
          color: "#4A3700",
          hover: "#4A3700",
          focus: "#4A3700",
        },
      },
      Olive: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#4C5612",
          hover: "#2F3703",
          focus: "#4C5612",
        },
        border: {
          color: "#2F3703",
          hover: "#2F3703",
          focus: "#2F3703",
        },
      },
      Plum: {
        color: {
          color: "#fff",
          focus: "#fff",
          hover: "#fff",
        },
        background: {
          color: "#361329",
          hover: "#26081B",
          focus: "#361329",
        },
        border: {
          color: "#26081B",
          hover: "#26081B",
          focus: "#26081B",
        },
      },
    },
    NIWSTheme,
    {},
    AlertTheme
  );

  function _taggedTemplateLiteral$1(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw),
        },
      })
    );
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral$1([
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
      ";\n        }\n    ",
    ]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral$1([
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
      ";\n        }\n    ",
    ]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var props = {
    flavor: String,
    small: Boolean,
    large: Boolean,
    block: Boolean,
    defaultTheme: {
      type: Object,
      default: function _default() {
        return NASICTheme;
      },
    },
  };
  var dialogProps = {
    flavor: String,
    small: Boolean,
    large: Boolean,
    block: Boolean,
    dialogTheme: {
      type: Object,
      default: function _default() {
        return NASICTheme;
      },
    },
  };
  var DialogButton = styled("button", dialogProps)(
    _templateObject(),
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
  var NButton = styled("button", props)(
    _templateObject2(),
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
  /* script */

  var __vue_script__ = NButton;
  /* template */

  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = undefined;
  /* style inject */

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
    install: install,
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

  NButton.install = install; // install function executed by Vue.use()

  var dialogInstall = function installDialogButton(Vue) {
    if (dialogInstall.installed) return;
    dialogInstall.installed = true;
    Vue.component("DialogButton", DialogButton);
  }; // Create module definition for Vue.use()

  var dialogPlugin = {
    install: dialogInstall,
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(dialogPlugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  DialogButton.install = dialogInstall; // Export component by default

  function _templateObject5() {
    var data = _taggedTemplateLiteral([
      '\n  font-family: "Open Sans Condensed Light", sans-serif !important;\n  font-weight: 400;\n  margin: 0;\n  color: ',
      ";\n  line-height: 1.571;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ",
      "\n",
    ]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral([
      '\n  margin: 0;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  font-weight: ',
      ";\n  line-height: 1.571;\n  color: ",
      ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ",
      "\n",
    ]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral([
      '\n  margin: 0;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: ',
      "px;\n  font-weight: ",
      ";\n  line-height: 1.571;\n  color: ",
      ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ",
      "\n",
    ]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral([
      "\n  margin-top: 0;\n  font-weight: ",
      ';\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: "PT Serif Regular", serif;\n  color: ',
      ";\n  ",
      "\n",
    ]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral([
      "\n  margin-top: 0;\n  font-weight: ",
      ';\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  color: ',
      ";\n  ",
      "\n",
    ]);

    _templateObject$1 = function _templateObject() {
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
      },
    },
  };
  var WebTitle = styled("h1", titleProps)(
    _templateObject$1(),
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
  var WebSectionTitle = WebTitle.withComponent("h2", titleProps);
  var WebSubSectionTitle = WebTitle.withComponent("h3", titleProps);
  var WebCategoryTitle = WebTitle.withComponent("h4", titleProps);
  var WebSubCategoryTitle = WebTitle.withComponent("h5", titleProps);
  var WebKeyword = WebTitle.withComponent("h6", titleProps);
  var ProductTitle = styled("h1", titleProps)(
    _templateObject2$1(),
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
  var SectionTitle = ProductTitle.withComponent("h2", titleProps);
  var SubSectionTitle = ProductTitle.withComponent("h3", titleProps);
  var CategoryTitle = ProductTitle.withComponent("h4", titleProps);
  var SubCategoryTitle = ProductTitle.withComponent("h5", titleProps);
  var Keyword = ProductTitle.withComponent("h6", titleProps);
  var props$1 = {
    size: {
      type: Number,
      default: 15,
    },
    dark: Boolean,
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      },
    },
    flavor: String,
  };
  var NText = styled("span", props$1)(
    _templateObject3(),
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
  var NPara = NText.withComponent("p", props$1);
  var SmallText = styled("small", props$1)(
    _templateObject4(),
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
  var NLabel = NText.withComponent("label", props$1);
  var PortionMarking = styled("span", props$1)(
    _templateObject5(),
    function(props) {
      return props.dark
        ? props.textTheme.PortionMarkingDark.color
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
        styles: [],
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

  var __vue_script__$1 = NText;
  /* template */

  /* style */

  var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-28957960_0", {
      source:
        "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      map: {
        version: 3,
        sources: [],
        names: [],
        mappings: "",
        file: "Typography.vue",
      },
      media: undefined,
    });
  };
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = undefined;
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
    createInjector,
    undefined,
    undefined
  );

  var components = [
    {
      label: "WebTitle",
      component: WebTitle,
    },
    {
      label: "WebSectionTitle",
      component: WebSectionTitle,
    },
    {
      label: "WebSubSectionTitle",
      component: WebSubSectionTitle,
    },
    {
      label: "WebCategoryTitle",
      component: WebCategoryTitle,
    },
    {
      label: "WebSubCategoryTitle",
      component: WebSubCategoryTitle,
    },
    {
      label: "WebKeyword",
      component: WebKeyword,
    },
    {
      label: "ProductTitle",
      component: ProductTitle,
    },
    {
      label: "SectionTitle",
      component: SectionTitle,
    },
    {
      label: "SubSectionTitle",
      component: SubSectionTitle,
    },
    {
      label: "CategoryTitle",
      component: CategoryTitle,
    },
    {
      label: "SubCategoryTitle",
      component: SubCategoryTitle,
    },
    {
      label: "Keyword",
      component: Keyword,
    },
    {
      label: "NText",
      component: NText,
    },
    {
      label: "NPara",
      component: NPara,
    },
    {
      label: "SmallText",
      component: SmallText,
    },
    {
      label: "NLabel",
      component: NLabel,
    },
    {
      label: "PortionMarking",
      component: PortionMarking,
    },
  ];
  var GlobalVue$1 = null;

  var _loop = function _loop() {
    var component_obj = _components[_i];

    // install function executed by Vue.use()
    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()

    var plugin = {
      install: install,
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

  for (var _i = 0, _components = components; _i < _components.length; _i++) {
    _loop();
  } // It's possible to expose named exports when writing components that can

  function _templateObject$2() {
    var data = _taggedTemplateLiteral([
      "\n  color: ",
      "\n        background-color: ",
      ';\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  display: inline-block;\n  border-radius: 4px;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  text-align: center;\n  white-space: nowrap;\n',
    ]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var props$2 = {
    flavor: String,
    defaultTheme: {
      type: Object,
      default: function _default() {
        return NASICTheme;
      },
    },
  };
  var NBadge = styled("div", props$2)(
    _templateObject$2(),
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
    }
  );

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
  /* script */

  var __vue_script__$2 = NBadge;
  /* template */

  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = normalizeComponent$2(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  ); // Import vue component
  // install function executed by Vue.use()

  var install$1 = function installNBadge(Vue) {
    if (install$1.installed) return;
    install$1.installed = true;
    Vue.component("NBadge", __vue_component__$2);
  }; // Create module definition for Vue.use()

  var plugin$1 = {
    install: install$1,
  }; // To auto-install when vue is found
  // eslint-disable-next-line no-redeclare

  /* global window, global */

  var GlobalVue$2 = null;

  if (typeof window !== "undefined") {
    GlobalVue$2 = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue$2 = global.Vue;
  }

  if (GlobalVue$2) {
    GlobalVue$2.use(plugin$1);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  __vue_component__$2.install = install$1; // It's possible to expose named exports when writing components that can

  function _taggedTemplateLiteral$2(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw),
        },
      })
    );
  }

  function _templateObject$3() {
    var data = _taggedTemplateLiteral$2([
      '\n  width: 100%;\n  height: 35px;\n  font-size: 16px;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  padding: 2px 5px 2px 5px;\n  margin-top: 2px;\n  box-sizing: border-box;\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\n  &:focus {\n    border-color: 1px solid\n      ',
      ";\n    outline: none;\n    box-shadow: 0px 0px 0px 3px\n      ",
      ";\n  }\n  &:read-only {\n    background-color: #e9e9e9;\n    color: #747474;\n  }\n  &:disabled {\n    cursor: not-allowed;\n    pointer-events: none;\n    color: #747474;\n    background-color: #e2e2e2;\n  }\n",
    ]);

    _templateObject$3 = function _templateObject() {
      return data;
    };

    return data;
  }

  var props$3 = {
    flavor: {
      type: String,
      default: "LightBlue",
    },
    defaultTheme: {
      type: Object,
      default: function _default() {
        return NASICTheme;
      },
    },
  };
  var NInput = styled("input", props$3)(
    _templateObject$3(),
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
      NLabel: NLabel,
    },
    data: function data() {
      return {
        internalValue: "",
      };
    },
    props: {
      flavor: {
        type: String,
        default: "LightBlue",
      },
      autocomplete: {
        type: String,
        default: "off",
      },
      value: {
        type: String,
        default: "",
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: "",
      },
      pattern: {
        type: String,
        default: "",
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      min: {
        type: String,
        default: "",
      },
      max: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        required: true,
      },
      inputType: {
        type: String,
        required: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      labelFlavor: {
        type: String,
        default: "",
      },
      labelDark: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
    },
    watch: {
      value: function value(newVal, oldVal) {
        this.internalValue = newVal;
      },
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
      },
    },
  };

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
        styles: [],
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

  var __vue_script__$3 = VueInput;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(
      "div",
      {
        staticClass: "input-container",
      },
      [
        _c(
          "n-label",
          {
            attrs: {
              dark: _vm.labelDark,
              flavor: _vm.labelFlavor,
              for: _vm.name,
            },
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
            value: _vm.internalValue,
          },
          on: {
            input: _vm.oninput,
            change: _vm.onChange,
            focus: _vm.onFocus,
          },
        }),
      ],
      1
    );
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-b35ff69c_0", {
      source:
        "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n",
      map: {
        version: 3,
        sources: [
          "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\NASICHTML\\Input\\src\\Input.vue",
        ],
        names: [],
        mappings: ";AAoMA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA",
        file: "Input.vue",
        sourcesContent: [
          '<template>\r\n  <div class="input-container">\r\n    <n-label :dark="labelDark" :flavor="labelFlavor" :for="name">{{\r\n      label\r\n    }}</n-label>\r\n    <n-input\r\n      :flavor="flavor"\r\n      :id="name"\r\n      :readonly="readonly"\r\n      :placeholder="placeholder"\r\n      :pattern="pattern"\r\n      :multiple="multiple"\r\n      :min="min"\r\n      :max="max"\r\n      :name="name"\r\n      :type="inputType"\r\n      :required="required"\r\n      :disabled="disabled"\r\n      :autofocus="autofocus"\r\n      :autocomplete="autocomplete"\r\n      :value="internalValue"\r\n      @input="oninput"\r\n      @change="onChange"\r\n      @focus="onFocus"\r\n    ></n-input>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from "@intus/typography";\r\nimport styled from "vue-styled-components";\r\nimport Theme from "@intus/design-system";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: "LightBlue"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nexport const NInput = styled("input", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: 1px solid\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : "#04040480"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : "#10d2ff80"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueInput = {\r\n  name: "vue-input",\r\n  components: { NInput, NLabel },\r\n  data: function() {\r\n    return {\r\n      internalValue: ""\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: "LightBlue"\r\n    },\r\n    autocomplete: {\r\n      type: String,\r\n      default: "off"\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    pattern: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    min: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    max: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    inputType: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: ""\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (typeof self.$parent !== "undefined") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n  },\r\n  methods: {\r\n    oninput($e) {\r\n      var self = this;\r\n      this.internalValue = $e;\r\n      self.$emit("input", this.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit("change", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit("focus");\r\n    }\r\n  }\r\n};\r\nexport default VueInput;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n',
        ],
      },
      media: undefined,
    });
  };
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = normalizeComponent$3(
    {
      render: __vue_render__,
      staticRenderFns: __vue_staticRenderFns__,
    },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector$1,
    undefined,
    undefined
  );

  var components$1 = [
    {
      label: "VueInput",
      component: VueInput,
    },
    {
      label: "NInput",
      component: NInput,
    },
  ];
  var GlobalVue$3 = null;

  var _loop$1 = function _loop() {
    var component_obj = _components$1[_i$1]; // install function executed by Vue.use()

    var install = function installComponent(Vue) {
      if (install.installed) return;
      install.installed = true;
      Vue.component(component_obj.label, component_obj.component);
    }; // Create module definition for Vue.use()

    var plugin = {
      install: install,
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
    var _i$1 = 0, _components$1 = components$1;
    _i$1 < _components$1.length;
    _i$1++
  ) {
    _loop$1();
  } // Export component by default

  var SelectMe = {
    name: "select-me",
    components: {
      NInput: NInput,
      NButton: NButton,
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
        hoveredSelectedIndex: -1,
      };
    },
    watch: {
      value: function value(newValue) {
        this.selectedOptions = newValue;
        window.requestAnimationFrame(this.setSelectBoxWidth);
        this.setCalculatedPadding();
      },
    },
    props: {
      value: {
        type: Array,
        default: function _default() {
          return [];
        },
      },
      name: {
        type: String,
        required: true,
      },
      badgeFlavor: {
        type: String,
        default: "Primary",
      },
      flavor: {
        type: String,
        default: "LightBlue",
      },
      displayAttribute: {
        type: String,
        default: "text",
      },
      valueAttribute: {
        type: String,
        default: "value",
      },
      canBeEmpty: {
        type: Boolean,
        default: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Array,
        default: function _default() {
          return [];
        },
      },
      debug: {
        type: Boolean,
        default: false,
      },
      multiSelect: {
        type: Boolean,
        default: false,
      },
      initialValues: {
        type: Array,
        default: function _default() {
          return [];
        },
      },
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
          return (
            n[self.displayAttribute]
              .toUpperCase()
              .indexOf(self.optionSearch.toUpperCase()) > -1
          );
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
      },
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
          setTimeout(function() {
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
        self.hoveredOption = self.selectOptions.filter(function(option) {
          return (
            option[self.valueAttribute] ==
            document.activeElement.getAttribute("value")
          );
        })[0];
        self.hoveredIndex = self.selectOptions
          .map(function(option) {
            return option[self.valueAttribute];
          })
          .indexOf(self.hoveredOption[self.valueAttribute]);
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

        if (
          proposedIndex >= self.selectedOptions.length ||
          proposedIndex < -1
        ) {
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
          var textMatches =
            option[self.displayAttribute] == options[x][self.displayAttribute];
          var valueMatches =
            option[self.valueAttribute] == options[x][self.valueAttribute];
          if (textMatches && valueMatches) return true;
        }

        return false;
      },
      isHovered: function isHovered(option, hoverOption) {
        var self = this;
        var textMatches =
          option[self.displayAttribute] == hoverOption[self.displayAttribute];
        var valueMatches =
          option[self.valueAttribute] == hoverOption[self.valueAttribute];
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

        if (
          self.optionSearch.length == 0 &&
          self.selectedOptions.length > 0 &&
          (self.selectBoxWidth > self.computedCutOff) & !self.showSelected
        ) {
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

        if (
          self.optionSearch.length == 0 &&
          self.selectedOptions.length > 0 &&
          self.selectBoxWidth <= self.computedCutOff
        ) {
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
            if (
              option[self.valueAttribute] == options[x][self.valueAttribute]
            ) {
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
        self.timeout = setTimeout(function() {
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
        if (self.$refs.selectBox)
          self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;
        window.requestAnimationFrame(self.setSelectBoxWidth);
      },
      setCalculatedPadding: function setCalculatedPadding() {
        var self = this;

        if (self.selectBoxWidth > self.computedCutOff) {
          self.calculatedPadding =
            self.$refs.selectDropdownBox.clientWidth + 10;
        } else {
          self.calculatedPadding = self.selectBoxWidth;
        }

        window.requestAnimationFrame(self.setCalculatedPadding);
      },
      setCalculatedWidth: function setCalculatedWidth() {
        var self = this;
        setTimeout(function() {
          try {
            self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;

            if (!self.multiSelect) {
              self.calculatedHeight -= 4;
            }

            self.calculatedWidth = self.$el.firstChild.offsetWidth;
            window.requestAnimationFrame(self.setSelectBoxWidth);
            self.setCalculatedPadding();
          } catch (err) {
            // pass
          }
        }, 50);
      },
    },
    mounted: function mounted() {
      var self = this;

      if (!self.canBeEmpty) {
        self.selectOption(self.options[0]);
      }

      window.requestAnimationFrame(self.setCalculatedPadding);
      window.addEventListener("resize", self.setCalculatedWidth);
      window.addEventListener("click", self.handleOffClick);
      self.setCalculatedWidth();
      setTimeout(function() {
        self.setCalculatedWidth();
      }, 200);

      for (var x = 0; x < self.initialValues.length; x++) {
        var initVal = self.initialValues[x];

        for (var y = 0; y < self.options.length; y++) {
          if (
            self.options[y][self.valueAttribute] == initVal[self.valueAttribute]
          ) {
            self.selectedOptions.push(Object.assign({}, self.options[y]));
            break;
          }
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener("resize", self.setCalculatedWidth);
      window.removeEventListener("click", self.handleOffClick);
    },
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
        styles: [],
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

  var __vue_script__$4 = SelectMe;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(
      "div",
      {
        staticClass: "selectme-container",
      },
      [
        _c("n-input", {
          style: {
            "padding-left": _vm.calculatedPadding + "px",
          },
          attrs: {
            id: _vm.name,
            autocomplete: "off",
            type: "text",
            placeholder: "Search...",
            flavor: _vm.flavor,
            disabled: _vm.disabled,
          },
          on: {
            click: _vm.openDropdown,
            focus: _vm.openDropdown,
            input: _vm.openDropdown,
            blur: _vm.closeDropdown,
            keydown: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                    "Backspace",
                    "Delete",
                    "Del",
                  ])
                ) {
                  return null;
                }

                return _vm.handleBackspace($event);
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown",
                  ])
                ) {
                  return null;
                }

                return _vm.handleDown($event);
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp",
                  ])
                ) {
                  return null;
                }

                return _vm.handleUp($event);
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "left", 37, $event.key, [
                    "Left",
                    "ArrowLeft",
                  ])
                ) {
                  return null;
                }

                if ("button" in $event && $event.button !== 0) {
                  return null;
                }

                return _vm.handleLeft($event);
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "right", 39, $event.key, [
                    "Right",
                    "ArrowRight",
                  ])
                ) {
                  return null;
                }

                if ("button" in $event && $event.button !== 2) {
                  return null;
                }

                return _vm.handleRight($event);
              },
            ],
            keyup: function keyup($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null;
              }

              return _vm.selectHoveredOption($event);
            },
          },
          model: {
            value: _vm.optionSearch,
            callback: function callback($$v) {
              _vm.optionSearch = $$v;
            },
            expression: "optionSearch",
          },
        }),
        _vm._v(" "),
        _vm.showDropdown
          ? _c(
              "div",
              {
                staticClass: "selectme-dropdown",
                style: {
                  width: _vm.calculatedWidth + "px",
                },
              },
              [
                _c(
                  "ul",
                  [
                    _vm._l(_vm.selectOptions, function(option, index) {
                      return _c(
                        "li",
                        {
                          key:
                            "dropdown-" +
                            option[_vm.valueAttribute] +
                            "-" +
                            index,
                          ref: "hover" + option[_vm.valueAttribute],
                          refInFor: true,
                          class: {
                            "selectme-selected": _vm.contained(option),
                            "selectme-hovered": _vm.isHovered(
                              option,
                              _vm.hoveredOption
                            ),
                          },
                          attrs: {
                            tabindex: "0",
                            role: "button",
                            value: option[_vm.valueAttribute],
                          },
                          on: {
                            keyup: [
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null;
                                }

                                return _vm.selectHoveredOption($event);
                              },
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "space",
                                    32,
                                    $event.key,
                                    [" ", "Spacebar"]
                                  )
                                ) {
                                  return null;
                                }

                                return _vm.selectHoveredOption($event);
                              },
                            ],
                            focus: function focus($event) {
                              return _vm.hoverElement();
                            },
                            keydown: [
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "down",
                                    40,
                                    $event.key,
                                    ["Down", "ArrowDown"]
                                  )
                                ) {
                                  return null;
                                }

                                return _vm.hoverOption(1);
                              },
                              function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k($event.keyCode, "up", 38, $event.key, [
                                    "Up",
                                    "ArrowUp",
                                  ])
                                ) {
                                  return null;
                                }

                                return _vm.hoverOption(-1);
                              },
                            ],
                            blur: _vm.closeDropdown,
                            click: function click($event) {
                              return _vm.selectOption(option);
                            },
                          },
                        },
                        [
                          _vm.contained(option)
                            ? _c(
                                "span",
                                {
                                  staticClass: "sr-only",
                                },
                                [_vm._v("Active:")]
                              )
                            : _c(
                                "span",
                                {
                                  staticClass: "sr-only",
                                },
                                [_vm._v("Press enter to select:")]
                              ),
                          _vm._v(
                            "\n        " +
                              _vm._s(option[_vm.displayAttribute]) +
                              "\n      "
                          ),
                        ]
                      );
                    }),
                    _vm._v(" "),
                    _vm.selectOptions.length == 0
                      ? _c("li", [_vm._v("No results found")])
                      : _vm._e(),
                  ],
                  2
                ),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.selectBoxWidth > _vm.computedCutOff &&
                  _vm.selectedOptions.length > 0,
                expression:
                  "selectBoxWidth > computedCutOff && selectedOptions.length > 0",
              },
            ],
            ref: "selectDropdownBox",
            staticClass: "selectme-selected",
            style: {
              top: _vm.multiSelect
                ? _vm.calculatedHeight + "px"
                : _vm.calculatedHeight + 4 + "px",
            },
            attrs: {
              "data-dropdown": "parent",
            },
          },
          [
            _c(
              "n-button",
              {
                staticClass: "selectme-button selectme-badge",
                attrs: {
                  flavor: _vm.badgeFlavor,
                  "data-dropdown": "toggle",
                },
                on: {
                  click: _vm.toggleSelectedDropdown,
                },
              },
              [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.selectedOptions.length) +
                    " selected...\n      "
                ),
                !_vm.showSelected
                  ? _c(
                      "span",
                      {
                        staticClass: "select-me-ignore-me",
                      },
                      [_vm._v("▾")]
                    )
                  : _c(
                      "span",
                      {
                        staticClass: "select-me-ignore-me",
                      },
                      [_vm._v("▴")]
                    ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showSelected,
                    expression: "showSelected",
                  },
                ],
                staticClass: "selectme-dropdown",
              },
              [
                _c(
                  "ul",
                  _vm._l(_vm.selectedOptions, function(option, index) {
                    return _c(
                      "li",
                      {
                        key:
                          "selected-" +
                          option[_vm.valueAttribute] +
                          "-" +
                          index,
                        ref: "selected" + option[_vm.valueAttribute],
                        refInFor: true,
                        class: {
                          "selectme-hovered": _vm.isHovered(
                            option,
                            _vm.hoveredSelectedOption
                          ),
                        },
                        attrs: {
                          tabindex: "0",
                          role: "button",
                          "data-dropdown": "child",
                        },
                        on: {
                          keyup: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null;
                              }

                              return _vm.deselectDropdownOption(option);
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "space",
                                  32,
                                  $event.key,
                                  [" ", "Spacebar"]
                                )
                              ) {
                                return null;
                              }

                              return _vm.deselectDropdownOption(option);
                            },
                          ],
                          click: function click($event) {
                            return _vm.deselectDropdownOption(option);
                          },
                        },
                      },
                      [
                        _c("span", [_vm._v("×")]),
                        _vm._v(
                          "\n          " +
                            _vm._s(option[_vm.displayAttribute]) +
                            "\n        "
                        ),
                      ]
                    );
                  }),
                  0
                ),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "selectBox",
            staticClass: "selectme-selected",
            class: {
              "hidden-inline": _vm.selectBoxWidth > _vm.computedCutOff,
            },
            style: {
              top: _vm.calculatedHeight + "px",
            },
          },
          _vm._l(_vm.selectedOptions, function(option, index) {
            return _c(
              "n-button",
              {
                key:
                  "selected-badge-" + option[_vm.valueAttribute] + "-" + index,
                staticClass: "selectme-button selectme-badge",
                class: {
                  "selectme-single-select-badge": !_vm.multiSelect,
                },
                attrs: {
                  flavor: _vm.badgeFlavor,
                },
                on: {
                  click: function click($event) {
                    return _vm.deselectOption(option);
                  },
                },
              },
              [
                _vm._v(
                  "\n      " + _vm._s(option[_vm.displayAttribute]) + "\n      "
                ),
                _vm.canBeEmpty ||
                (!_vm.canBeEmpty && _vm.selectedOptions.length > 1)
                  ? _c(
                      "span",
                      {
                        staticClass: "select-me-ignore-me",
                        class: _vm.computedSpanClass,
                      },
                      [_vm._v("×")]
                    )
                  : _vm._e(),
              ]
            );
          }),
          1
        ),
      ],
      1
    );
  };

  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;
  /* style */

  var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-6b2a79a3_0", {
      source:
        '\n.select-me-ignore-me[data-v-6b2a79a3] {\r\n  pointer-events: none;\n}\n.selectme-button[data-v-6b2a79a3] {\r\n  height: 30px;\r\n  margin-top: -2px;\n}\n.selectme-single-select-badge[data-v-6b2a79a3] {\r\n  margin-top: 1px;\n}\n.hidden-inline[data-v-6b2a79a3] {\r\n  opacity: 0;\r\n  pointer-events: none;\n}\n.selectme-badge[data-v-6b2a79a3] {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: "Segoe UI" !important;\n}\n.selectme-container[data-v-6b2a79a3] {\r\n  height: 45px;\n}\n.selectme-container *[data-v-6b2a79a3] {\r\n  font-family: "Roboto", sans-serif;\n}\n.sr-only[data-v-6b2a79a3] {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\n}\n.selectme-dropdown[data-v-6b2a79a3] {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\n}\n.selectme-badge-single-span[data-v-6b2a79a3] {\r\n  float: left;\r\n  padding-right: 8px;\n}\n.selectme-badge-transparent[data-v-6b2a79a3] {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\n}\n.selectme-selected[data-v-6b2a79a3] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\n}\n.selectme-selected > button[data-v-6b2a79a3] {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\n}\n.selectme-dropdown > ul[data-v-6b2a79a3] {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\n}\n.selectme-dropdown > ul > li[data-v-6b2a79a3] {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-6b2a79a3] {\r\n  background-color: #007bff;\r\n  color: white;\n}\n.selectme-dropdown > ul > li.selectme-hovered[data-v-6b2a79a3] {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered[data-v-6b2a79a3] {\r\n  background-color: #0069d9;\r\n  color: white;\n}\n.selectme-dropdown > ul > li[data-v-6b2a79a3]:hover {\r\n  background-color: #eeeeee;\n}\n.selectme-dropdown > ul > li.selectme-selected[data-v-6b2a79a3]:hover {\r\n  background-color: #0069d9;\r\n  color: white;\n}\r\n',
      map: {
        version: 3,
        sources: [
          "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\SelectMe\\src\\SelectMe.vue",
        ],
        names: [],
        mappings:
          ";AA4hBA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,UAAA;EACA,oBAAA;AACA;AACA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;EACA,sBAAA;EACA,2BAAA;EACA,0BAAA;EACA,kCAAA;AACA;AACA;EACA,YAAA;AACA;AACA;EACA,iCAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;AACA;AACA;EACA,kBAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,qCAAA;EACA,0BAAA;EACA,oCAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,0BAAA;EACA,wCAAA;AACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,0BAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,yBAAA;EACA,YAAA;AACA",
        file: "SelectMe.vue",
        sourcesContent: [
          '<template>\r\n  <div class="selectme-container">\r\n    <n-input\r\n      :id="name"\r\n      autocomplete="off"\r\n      type="text"\r\n      placeholder="Search..."\r\n      @click="openDropdown"\r\n      @focus="openDropdown"\r\n      @input="openDropdown"\r\n      @blur="closeDropdown"\r\n      :flavor="flavor"\r\n      v-model="optionSearch"\r\n      @keydown.delete="handleBackspace"\r\n      @keydown.down="handleDown"\r\n      @keydown.up="handleUp"\r\n      @keydown.left="handleLeft"\r\n      @keydown.right="handleRight"\r\n      @keyup.enter="selectHoveredOption"\r\n      :style="{\'padding-left\': calculatedPadding + \'px\'}"\r\n      :disabled="disabled"\r\n    ></n-input>\r\n    <!-- Dropdown for all options -->\r\n    <div v-if="showDropdown" class="selectme-dropdown" :style="{width: calculatedWidth + \'px\'}">\r\n      <ul>\r\n        <li\r\n          @keyup.enter="selectHoveredOption"\r\n          @keyup.space="selectHoveredOption"\r\n          tabindex="0"\r\n          role="button"\r\n          @focus="hoverElement()"\r\n          @keydown.down="hoverOption(1)"\r\n          @keydown.up="hoverOption(-1)"\r\n          @blur="closeDropdown"\r\n          v-for="(option, index) in selectOptions"\r\n          :key="\'dropdown-\' + option[valueAttribute] + \'-\' + index"\r\n          :value="option[valueAttribute]"\r\n          :ref="\'hover\' + option[valueAttribute]"\r\n          @click="selectOption(option)"\r\n          :class="{\'selectme-selected\': contained(option), \'selectme-hovered\': isHovered(option, hoveredOption)}"\r\n        >\r\n          <span class="sr-only" v-if="contained(option)">Active:</span>\r\n          <span class="sr-only" v-else>Press enter to select:</span>\r\n          {{option[displayAttribute]}}\r\n        </li>\r\n        <li v-if="selectOptions.length == 0">No results found</li>\r\n      </ul>\r\n    </div>\r\n    <!-- Dropdown for selected values. Only shows when selected overflow input-->\r\n    <div\r\n      class="selectme-selected"\r\n      :style="{top: multiSelect ? `${calculatedHeight}px` : `${calculatedHeight + 4}px` }"\r\n      v-show="selectBoxWidth > computedCutOff && selectedOptions.length > 0"\r\n      ref="selectDropdownBox"\r\n      data-dropdown="parent"\r\n    >\r\n      <n-button\r\n        @click="toggleSelectedDropdown"\r\n        class="selectme-button selectme-badge"\r\n        :flavor="badgeFlavor"\r\n        data-dropdown="toggle"\r\n      >\r\n        {{selectedOptions.length}} selected...\r\n        <span\r\n          class="select-me-ignore-me"\r\n          v-if="!showSelected"\r\n        >&#x25BE;</span>\r\n        <span class="select-me-ignore-me" v-else>&#x25B4;</span>\r\n      </n-button>\r\n      <div class="selectme-dropdown" v-show="showSelected">\r\n        <ul>\r\n          <li\r\n            tabindex="0"\r\n            v-for="(option, index) in selectedOptions"\r\n            :key="\'selected-\' + option[valueAttribute] + \'-\' + index"\r\n            role="button"\r\n            data-dropdown="child"\r\n            @keyup.enter="deselectDropdownOption(option)"\r\n            @keyup.space="deselectDropdownOption(option)"\r\n            :ref="\'selected\' + option[valueAttribute]"\r\n            :class="{\'selectme-hovered\': isHovered(option, hoveredSelectedOption)}"\r\n            @click="deselectDropdownOption(option)"\r\n          >\r\n            <span>&#215;</span>\r\n            {{option[displayAttribute]}}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- Inline selected options -->\r\n    <div\r\n      class="selectme-selected"\r\n      ref="selectBox"\r\n      :style="{top:  calculatedHeight + \'px\' }"\r\n      :class="{\'hidden-inline\': selectBoxWidth > computedCutOff}"\r\n    >\r\n      <n-button\r\n        :flavor="badgeFlavor"\r\n        class="selectme-button selectme-badge"\r\n        :class="{\'selectme-single-select-badge\': !multiSelect}"\r\n        v-for="(option, index) in selectedOptions"\r\n        @click="deselectOption(option)"\r\n        :key="\'selected-badge-\' + option[valueAttribute] + \'-\' + index"\r\n      >\r\n        {{option[displayAttribute]}}\r\n        <span\r\n          :class="computedSpanClass"\r\n          class="select-me-ignore-me"\r\n          v-if="canBeEmpty || !canBeEmpty && selectedOptions.length > 1"\r\n        >&#215;</span>\r\n      </n-button>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NInput } from "@intus/input";\r\nimport { NButton } from "@intus/button";\r\nconst SelectMe = {\r\n  name: "select-me",\r\n  components: { NInput, NButton },\r\n  data() {\r\n    return {\r\n      timeout: "",\r\n      optionSearch: "",\r\n      showOptions: false,\r\n      showSelected: false,\r\n      selectBoxWidth: 0,\r\n      calculatedWidth: 0,\r\n      calculatedHeight: 0,\r\n      calculatedPadding: 0,\r\n      selectedOptions: [],\r\n      hoveredOption: {},\r\n      hoveredSelectedOption: {},\r\n      combinedPaddingPerBadge: 26,\r\n      hoveredIndex: -1,\r\n      hoveredSelectedIndex: -1\r\n    };\r\n  },\r\n  watch: {\r\n    value(newValue) {\r\n      this.selectedOptions = newValue;\r\n      window.requestAnimationFrame(this.setSelectBoxWidth);\r\n      this.setCalculatedPadding();\r\n    }\r\n  },\r\n  props: {\r\n    value: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    badgeFlavor: {\r\n      type: String,\r\n      default: "Primary"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: "LightBlue"\r\n    },\r\n    displayAttribute: {\r\n      type: String,\r\n      default: "text"\r\n    },\r\n    valueAttribute: {\r\n      type: String,\r\n      default: "value"\r\n    },\r\n    canBeEmpty: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    options: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    multiSelect: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    initialValues: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedSpanClass() {\r\n      var self = this;\r\n      if (!self.multiSelect) return ["selectme-badge-single-span"];\r\n      return [];\r\n    },\r\n    computedCutOff() {\r\n      var self = this;\r\n      return self.calculatedWidth - 100;\r\n    },\r\n    showDropdown() {\r\n      var self = this;\r\n      return self.showOptions || self.debug;\r\n    },\r\n    selectOptions() {\r\n      function textContains(n) {\r\n        return (\r\n          n[self.displayAttribute]\r\n            .toUpperCase()\r\n            .indexOf(self.optionSearch.toUpperCase()) > -1\r\n        );\r\n      }\r\n      var self = this;\r\n      let options = self.options;\r\n      function filter(fn, array) {\r\n        var rtArray = [];\r\n        for (var x = 0; x < array.length; x++) {\r\n          if (fn(array[x])) {\r\n            rtArray.push(array[x]);\r\n          }\r\n        }\r\n        return rtArray;\r\n      }\r\n      if (self.optionSearch) {\r\n        options = filter(textContains, options);\r\n      }\r\n      return options;\r\n    }\r\n  },\r\n  methods: {\r\n    deselectDropdownOption(option) {\r\n      var self = this;\r\n      self.deselectOption(option, false);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    handleOffClick(event) {\r\n      var self = this;\r\n      if (!event.target.attributes["data-dropdown"]) {\r\n        self.showSelected = false;\r\n      }\r\n    },\r\n    toggleSelectedDropdown() {\r\n      var self = this;\r\n      self.showSelected = !self.showSelected;\r\n    },\r\n    selectHoveredOption() {\r\n      var self = this;\r\n      if (self.showOptions) {\r\n        if (Object.keys(self.hoveredOption).length > 0) {\r\n          if (!self.contains(self.hoveredOption, self.selectedOptions)) {\r\n            if (!self.multiSelect) self.selectedOptions = [];\r\n            self.selectedOptions.push(Object.assign({}, self.hoveredOption));\r\n          } else {\r\n            self.deselectOption(self.hoveredOption, false);\r\n          }\r\n          self.$emit("input", self.selectedOptions);\r\n          self.hoveredOption = {};\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          if (self.multiSelect) {\r\n            self.$el.firstChild.focus();\r\n          } else {\r\n            self.closeDropdown();\r\n          }\r\n        }\r\n      } else if (self.showSelected) {\r\n        self.deselectOption(self.hoveredSelectedOption);\r\n        self.$emit("input", self.selectedOptions);\r\n        self.hoveredSelectedOption = {};\r\n        self.showSelected = false;\r\n        setTimeout(function() {\r\n          self.hoveredIndex = -1;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n          self.$el.firstChild.focus();\r\n        }, 550);\r\n      }\r\n    },\r\n    hoverElement() {\r\n      var self = this;\r\n      clearTimeout(self.timeout);\r\n      self.hoveredOption = self.selectOptions.filter(\r\n        option =>\r\n          option[self.valueAttribute] ==\r\n          document.activeElement.getAttribute("value")\r\n      )[0];\r\n      self.hoveredIndex = self.selectOptions\r\n        .map(option => option[self.valueAttribute])\r\n        .indexOf(self.hoveredOption[self.valueAttribute]);\r\n    },\r\n    hoverOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.openDropdown();\r\n      if (proposedIndex >= self.selectOptions.length) {\r\n        self.hoveredIndex = 0;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n      } else if (proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.closeDropdown();\r\n        self.hoveredOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredOption = self.selectOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    hoverSelectedOption(step) {\r\n      var self = this;\r\n      var proposedIndex = self.hoveredIndex + step;\r\n      self.showSelected = true;\r\n      if (proposedIndex >= self.selectedOptions.length || proposedIndex < -1) {\r\n        return;\r\n      } else if (proposedIndex == -1) {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.$el.firstChild.focus();\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n      } else {\r\n        self.hoveredIndex = proposedIndex;\r\n        self.hoveredSelectedOption = self.selectedOptions[self.hoveredIndex];\r\n        self.$forceUpdate();\r\n      }\r\n    },\r\n    contains(option, options) {\r\n      var self = this;\r\n      for (var x = 0; x < options.length; x++) {\r\n        let textMatches =\r\n          option[self.displayAttribute] == options[x][self.displayAttribute];\r\n        let valueMatches =\r\n          option[self.valueAttribute] == options[x][self.valueAttribute];\r\n        if (textMatches && valueMatches) return true;\r\n      }\r\n      return false;\r\n    },\r\n    isHovered(option, hoverOption) {\r\n      var self = this;\r\n      let textMatches =\r\n        option[self.displayAttribute] == hoverOption[self.displayAttribute];\r\n      let valueMatches =\r\n        option[self.valueAttribute] == hoverOption[self.valueAttribute];\r\n      return textMatches && valueMatches;\r\n    },\r\n    handleUp() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(-1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(-1);\r\n      } else {\r\n        self.hoverOption(-1);\r\n      }\r\n    },\r\n    handleDown() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.hoverSelectedOption(1);\r\n      } else if (self.showOptions) {\r\n        self.hoverOption(1);\r\n      } else {\r\n        self.hoverOption(1);\r\n      }\r\n    },\r\n    handleLeft() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        (self.selectBoxWidth > self.computedCutOff) & !self.showSelected\r\n      ) {\r\n        self.closeDropdown();\r\n        self.showSelected = true;\r\n      }\r\n    },\r\n    handleRight() {\r\n      var self = this;\r\n      if (self.showSelected) {\r\n        self.showSelected = false;\r\n        self.hoveredSelectedOption = {};\r\n        self.$el.firstChild.focus();\r\n      }\r\n    },\r\n    handleBackspace() {\r\n      var self = this;\r\n      if (\r\n        self.optionSearch.length == 0 &&\r\n        self.selectedOptions.length > 0 &&\r\n        self.selectBoxWidth <= self.computedCutOff\r\n      ) {\r\n        var el = self.selectedOptions.pop();\r\n        self.$emit("input", self.selectedOptions);\r\n        window.requestAnimationFrame(self.setSelectBoxWidth);\r\n        self.setCalculatedPadding();\r\n        self.optionSearch = el[self.displayAttribute];\r\n      }\r\n    },\r\n    contained(option) {\r\n      var self = this;\r\n      return self.contains(option, self.selectedOptions);\r\n    },\r\n    selectOption(option) {\r\n      var self = this;\r\n      if (!self.contains(option, self.selectedOptions)) {\r\n        if (!self.multiSelect) {\r\n          self.selectedOptions = [];\r\n        }\r\n        self.selectedOptions.push(option);\r\n      } else {\r\n        self.deselectOption(option, !self.multiSelect);\r\n      }\r\n      self.optionSearch = "";\r\n      if (!self.multiSelect) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit("input", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    deselectOption(option, closeDropdown) {\r\n      var self = this;\r\n      if (!self.canBeEmpty && self.selectedOptions.length == 1) {\r\n        return;\r\n      }\r\n      function findIndex(option, options) {\r\n        for (var x = 0; x < options.length; x++) {\r\n          if (option[self.valueAttribute] == options[x][self.valueAttribute]) {\r\n            return x;\r\n          }\r\n        }\r\n        return -1;\r\n      }\r\n      var index = findIndex(option, self.selectedOptions);\r\n      self.selectedOptions.splice(index, 1);\r\n      self.$forceUpdate();\r\n      if (typeof closeDropdown === "undefined" || closeDropdown) {\r\n        self.closeDropdown();\r\n      }\r\n      self.$emit("input", self.selectedOptions);\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n      self.setCalculatedPadding();\r\n    },\r\n    closeDropdown() {\r\n      var self = this;\r\n      self.hoveredIndex = -1;\r\n      self.timeout = setTimeout(function() {\r\n        self.showOptions = false;\r\n      }, 200);\r\n    },\r\n    openDropdown() {\r\n      var self = this;\r\n      self.$emit("focus");\r\n      clearTimeout(self.timeout);\r\n      if (self.disabled) {\r\n        return false;\r\n      }\r\n      self.hoveredIndex = -1;\r\n      self.setCalculatedWidth();\r\n      self.showSelected = false;\r\n      self.showOptions = true;\r\n    },\r\n    setSelectBoxWidth() {\r\n      var self = this;\r\n      if (self.$refs.selectBox)\r\n        self.selectBoxWidth = self.$refs.selectBox.clientWidth + 5;\r\n      window.requestAnimationFrame(self.setSelectBoxWidth);\r\n    },\r\n    setCalculatedPadding() {\r\n      var self = this;\r\n      if (self.selectBoxWidth > self.computedCutOff) {\r\n        self.calculatedPadding = self.$refs.selectDropdownBox.clientWidth + 10;\r\n      } else {\r\n        self.calculatedPadding = self.selectBoxWidth;\r\n      }\r\n      window.requestAnimationFrame(self.setCalculatedPadding);\r\n    },\r\n    setCalculatedWidth() {\r\n      var self = this;\r\n      setTimeout(function() {\r\n        try {\r\n          self.calculatedHeight = self.$el.firstChild.offsetHeight * -1 + 5;\r\n          if (!self.multiSelect) {\r\n            self.calculatedHeight -= 4;\r\n          }\r\n          self.calculatedWidth = self.$el.firstChild.offsetWidth;\r\n          window.requestAnimationFrame(self.setSelectBoxWidth);\r\n          self.setCalculatedPadding();\r\n        } catch (err) {\r\n          // pass\r\n        }\r\n      }, 50);\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (!self.canBeEmpty) {\r\n      self.selectOption(self.options[0]);\r\n    }\r\n    window.requestAnimationFrame(self.setCalculatedPadding);\r\n    window.addEventListener("resize", self.setCalculatedWidth);\r\n    window.addEventListener("click", self.handleOffClick);\r\n    self.setCalculatedWidth();\r\n    setTimeout(function() {\r\n      self.setCalculatedWidth();\r\n    }, 200);\r\n    for (var x = 0; x < self.initialValues.length; x++) {\r\n      var initVal = self.initialValues[x];\r\n      for (var y = 0; y < self.options.length; y++) {\r\n        if (\r\n          self.options[y][self.valueAttribute] == initVal[self.valueAttribute]\r\n        ) {\r\n          self.selectedOptions.push(Object.assign({}, self.options[y]));\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    window.removeEventListener("resize", self.setCalculatedWidth);\r\n    window.removeEventListener("click", self.handleOffClick);\r\n  }\r\n};\r\nexport default SelectMe;\r\n</script>\r\n<style scoped>\r\n.select-me-ignore-me {\r\n  pointer-events: none;\r\n}\r\n.selectme-button {\r\n  height: 30px;\r\n  margin-top: -2px;\r\n}\r\n.selectme-single-select-badge {\r\n  margin-top: 1px;\r\n}\r\n.hidden-inline {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n.selectme-badge {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n  font-weight: 700 !important;\r\n  font-size: 16px !important;\r\n  font-family: "Segoe UI" !important;\r\n}\r\n.selectme-container {\r\n  height: 45px;\r\n}\r\n.selectme-container * {\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.selectme-dropdown {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: white;\r\n  padding: 5px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0 5px 5px;\r\n  box-shadow: 0px 4px 7px -3px #dadada;\r\n  min-width: 200px;\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-badge-single-span {\r\n  float: left;\r\n  padding-right: 8px;\r\n}\r\n.selectme-badge-transparent {\r\n  color: black;\r\n  font-size: 16px !important;\r\n  background-color: transparent !important;\r\n}\r\n.selectme-selected {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\n.selectme-selected > button {\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  margin-right: 2px;\r\n}\r\n.selectme-dropdown > ul {\r\n  list-style: none;\r\n  padding-left: 0px;\r\n  margin-left: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.selectme-dropdown > ul > li {\r\n  padding: 2px 10px 2px 10px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  margin-left: 0px;\r\n  font-size: 16px;\r\n  max-height: 200px;\r\n  margin-bottom: -2px;\r\n  overflow-y: auto;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected {\r\n  background-color: #007bff;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li.selectme-hovered {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected.selectme-hovered {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n.selectme-dropdown > ul > li:hover {\r\n  background-color: #eeeeee;\r\n}\r\n.selectme-dropdown > ul > li.selectme-selected:hover {\r\n  background-color: #0069d9;\r\n  color: white;\r\n}\r\n</style>',
        ],
      },
      media: undefined,
    });
  };
  /* scoped */

  var __vue_scope_id__$4 = "data-v-6b2a79a3";
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = normalizeComponent$4(
    {
      render: __vue_render__$1,
      staticRenderFns: __vue_staticRenderFns__$1,
    },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    createInjector$2,
    undefined,
    undefined
  ); // Import vue component

  var install$2 = function installSelectMe(Vue) {
    if (install$2.installed) return;
    install$2.installed = true;
    Vue.component("SelectMe", __vue_component__$4);
  }; // Create module definition for Vue.use()

  var plugin$2 = {
    install: install$2,
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
    GlobalVue$4.use(plugin$2);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  __vue_component__$4.install = install$2; // Export component by default

  function _templateObject5$1() {
    var data = _taggedTemplateLiteral([
      "\n  transition: 0.3s height;\n  margin-top: 3px;\n  height: 0px;\n  overflow-y: hidden;\n",
    ]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$1() {
    var data = _taggedTemplateLiteral([
      '\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol";\n  padding: 5px;\n  margin-bottom: 2px;\n  cursor: pointer;\n  text-align: left !important;\n  color: ',
      "\n  background-color: ",
      ";\n  &:hover {\n    background-color: ",
      ";\n    color: ",
      "\n  }\n",
    ]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral([
      "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n",
    ]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$2() {
    var data = _taggedTemplateLiteral([
      "\n  background-image: linear-gradient(\n    to top right,\n    transparent 50%,\n    ",
      "\n      50%\n  );\n  float: right;\n  width: 0.5rem;\n  height: 0.5rem;\n  transform: rotate(45deg);\n  transition: 0.3s all;\n  display: inline-block;\n",
    ]);

    _templateObject2$2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

    _templateObject$4 = function _templateObject() {
      return data;
    };

    return data;
  }
  var ParametricContainer = styled.div(_templateObject$4());
  var props$4 = {
    flavor: String,
    disabled: Boolean,
    active: Boolean,
    defaultTheme: {
      type: Object,
      default: function _default() {
        return NASICTheme;
      },
    },
  };
  var ParametricCarat = styled("div", props$4)(_templateObject2$2(), function(
    props
  ) {
    return props.disabled
      ? "rgba(0, 0, 0, 0.3)"
      : props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].color.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].color.color
      : "#222";
  });
  var QuickSelectContainer = styled.div(_templateObject3$1());
  var QuickSelectOption = styled("div", props$4)(
    _templateObject4$1(),
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
    }
  );
  var ParametricContentContainer = styled.div(_templateObject5$1());
  var ParametricFilter = {
    components: {
      NButton: NButton,
      ParametricContainer: ParametricContainer,
      ParametricCarat: ParametricCarat,
      SelectMe: __vue_component__$4,
      ParametricContentContainer: ParametricContentContainer,
      QuickSelectContainer: QuickSelectContainer,
      QuickSelectOption: QuickSelectOption,
      Badge: __vue_component__$2,
      NLabel: NLabel,
    },
    data: function data() {
      return {
        selectedItems: [],
        open: false,
        unwatch: null,
      };
    },
    props: {
      value: {
        type: String,
        default: function _default() {
          return [];
        },
      },
      name: {
        type: String,
        required: true,
      },
      filter: {
        type: Object,
        required: true,
      },
      defaultOpen: {
        type: Boolean,
        default: false,
      },
      displayAttribute: {
        type: String,
        default: "text",
      },
      valueAttribute: {
        type: String,
        default: "value",
      },
      quickSelectFlavor: {
        type: String,
        default: "Secondary",
      },
      activeBadgeFlavor: {
        type: String,
        default: "Light",
      },
      badgeFlavor: {
        type: String,
        default: "Secondary",
      },
      flavor: {
        type: String,
        default: "Dark",
      },
      debug: {
        type: Boolean,
        default: false,
      },
    },
    beforeDestroy: function beforeDestroy() {
      this.unwatch();
    },
    mounted: function mounted() {
      this.open = this.defaultOpen;

      if (this.defaultOpen) {
        this.expandSection(this.$refs.content.$el);
      }

      if (this.filter.selected_values) {
        this.selectedItems = this.filter.selected_values.slice();
      }

      this.unwatch = this.$watch("values", this.updateSelectedItems, {
        deep: true,
      });
    },
    methods: {
      updateSelectedItems: function updateSelectedItems() {
        this.selectedItems = this.value;
      },
      collapseSection: function collapseSection(element) {
        // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

        var elementTransition = element.style.transition;
        element.style.transition = "";
        element.style.height = sectionHeight + "px !important";
        element.style.overflowY = "hidden"; // element.style.width = sectionWidth + "px !important";
        // on the next frame (as soon as the previous style change has taken effect),
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'

        requestAnimationFrame(function() {
          element.style.height = sectionHeight + "px"; // element.style.width = sectionWidth + "px";

          element.style.transition = elementTransition; // element.style.overflowY = 'hidden';
          // on the next frame (as soon as the previous style change has taken effect),
          // have the element transition to height: 0

          requestAnimationFrame(function() {
            element.style.height = 0 + "px"; // element.style.width = "0px";

            element.style.paddingBottom = "0px";
          });
        }); // mark the section as "currently collapsed"

        element.setAttribute("data-collapsed", "true");
      },
      expandSection: function expandSection(element) {
        // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified
        // get the height of the element's inner content, regardless of its actual size
        var sectionHeight = element.scrollHeight; // have the element transition to the height of its inner content

        element.style.height = sectionHeight + "px"; // element.style.width = sectionWidth + "px";

        element.style.paddingBottom = "5px"; // element.style.overflowY = "auto"
        // when the next css transition finishes (which should be the one we just triggered)

        element.addEventListener("transitionend", function() {
          // remove this event listener so it only gets triggered once
          element.removeEventListener("transitionend", this);

          if (element.getAttribute("data-collapsed") == "false") {
            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = "auto";
            element.style.overflowY = "visible";
          }
        }); // mark the section as "currently not collapsed"

        element.setAttribute("data-collapsed", "false");
      },
      handleUpdate: function handleUpdate(value) {
        this.selectedItems = value.slice();
        this.$emit("input", this.selectedItems);
      },
      toggle: function toggle() {
        // this.open = !this.open;
        if (!this.open) {
          this.expandSection(this.$refs.content.$el);
          this.open = true;
        } else {
          this.collapseSection(this.$refs.content.$el);
          this.open = false;
        }
      },
      quickSelect: function quickSelect(item) {
        var _this = this;

        var option = this.filter.items.filter(function(i) {
          return i[_this.valueAttribute] == item[_this.valueAttribute];
        })[0];

        if (this.$refs.selectBar) {
          this.$refs.selectBar.selectOption(option);
        }
      },
    },
    computed: {
      computeClass: function computeClass() {
        if (this.open) {
          return ["sidebar-open-carat"];
        }

        return [];
      },
    },
  };

  function normalizeComponent$5(
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

  var isOldIE$3 =
    typeof navigator !== "undefined" &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector$3(context) {
    return function(id, style) {
      return addStyle$3(id, style);
    };
  }

  var HEAD$3;
  var styles$3 = {};

  function addStyle$3(id, css) {
    var group = isOldIE$3 ? css.media || "default" : id;
    var style =
      styles$3[group] ||
      (styles$3[group] = {
        ids: new Set(),
        styles: [],
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

        if (HEAD$3 === undefined) {
          HEAD$3 = document.head || document.getElementsByTagName("head")[0];
        }

        HEAD$3.appendChild(style.element);
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
  const __vue_script__$5 = ParametricFilter;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "parametric-container",
      [
        _c(
          "n-button",
          {
            staticClass: "parametric-button",
            attrs: { block: true, flavor: _vm.flavor },
            on: { click: _vm.toggle },
          },
          [
            _c(
              "span",
              [
                _vm._v("\n      " + _vm._s(_vm.filter.display) + "\n      "),
                _vm.selectedItems.length != 0
                  ? _c("badge", { attrs: { flavor: _vm.activeBadgeFlavor } }, [
                      _vm._v("Active"),
                    ])
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            _c("parametric-carat", {
              class: _vm.computeClass,
              attrs: { flavor: _vm.flavor, disabled: _vm.filter.disabled },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "parametric-content-container",
          { ref: "content" },
          [
            _c(
              "n-label",
              { staticClass: "sr-only", attrs: { for: _vm.name } },
              [_vm._v(_vm._s(_vm.filter.display))]
            ),
            _vm._v(" "),
            _c("select-me", {
              ref: "selectBar",
              attrs: {
                "aria-label": _vm.filter.display,
                options: _vm.filter.items,
                "badge-flavor": _vm.badgeFlavor,
                "multi-select": true,
                debug: _vm.debug,
                "display-attribute": _vm.displayAttribute,
                "value-attribute": _vm.valueAttribute,
                name: _vm.name,
              },
              on: {
                input: _vm.handleUpdate,
                focus: function($event) {
                  _vm.open = true;
                },
              },
              model: {
                value: _vm.selectedItems,
                callback: function($$v) {
                  _vm.selectedItems = $$v;
                },
                expression: "selectedItems",
              },
            }),
            _vm._v(" "),
            _c(
              "quick-select-container",
              _vm._l(_vm.filter.quickSelects, function(item, index) {
                return _c("quick-select-option", {
                  key: index,
                  attrs: { flavor: _vm.quickSelectFlavor },
                  domProps: { innerHTML: _vm._s(item[_vm.displayAttribute]) },
                  on: {
                    click: function($event) {
                      return _vm.quickSelect(item);
                    },
                  },
                });
              }),
              1
            ),
          ],
          1
        ),
      ],
      1
    );
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function(inject) {
    if (!inject) return;
    inject("data-v-3b6853c4_0", {
      source:
        "\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\n}\n.parametric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\n}\n.parametric-open-carat {\r\n  transform: rotate(135deg) !important;\n}\r\n",
      map: {
        version: 3,
        sources: [
          "C:\\Users\\pedro\\Documents\\Work\\Storybook\\src\\components\\Storefront\\ParametricFilter\\src\\ParametricFilter.vue",
        ],
        names: [],
        mappings:
          ";AAiUA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,qBAAA;EACA,SAAA;AACA;AACA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;AACA;AACA;EACA,oCAAA;AACA",
        file: "ParametricFilter.vue",
        sourcesContent: [
          '<template>\r\n  <parametric-container>\r\n    <n-button\r\n      :block="true"\r\n      :flavor="flavor"\r\n      @click="toggle"\r\n      class="parametric-button"\r\n    >\r\n      <span>\r\n        {{ filter.display }}\r\n        <badge :flavor="activeBadgeFlavor" v-if="selectedItems.length != 0"\r\n          >Active</badge\r\n        >\r\n      </span>\r\n      <parametric-carat\r\n        :flavor="flavor"\r\n        :class="computeClass"\r\n        :disabled="filter.disabled"\r\n      ></parametric-carat>\r\n    </n-button>\r\n    <parametric-content-container ref="content">\r\n      <n-label class="sr-only" :for="name">{{ filter.display }}</n-label>\r\n      <select-me\r\n        :aria-label="filter.display"\r\n        v-model="selectedItems"\r\n        :options="filter.items"\r\n        :badge-flavor="badgeFlavor"\r\n        :multi-select="true"\r\n        :debug="debug"\r\n        :display-attribute="displayAttribute"\r\n        :value-attribute="valueAttribute"\r\n        :name="name"\r\n        ref="selectBar"\r\n        @input="handleUpdate"\r\n        @focus="open = true"\r\n      ></select-me>\r\n      <quick-select-container>\r\n        <quick-select-option\r\n          v-for="(item, index) in filter.quickSelects"\r\n          :flavor="quickSelectFlavor"\r\n          :key="index"\r\n          v-html="item[displayAttribute]"\r\n          @click="quickSelect(item)"\r\n        ></quick-select-option>\r\n      </quick-select-container>\r\n    </parametric-content-container>\r\n  </parametric-container>\r\n</template>\r\n\r\n<script>\r\nimport { NButton } from "@intus/button";\r\nimport { NLabel } from "@intus/typography";\r\nimport Badge from "@intus/badge";\r\nimport styled from "vue-styled-components";\r\nimport SelectMe from "@intus/select-me";\r\nimport Theme from "@intus/design-system";\r\nconst ParametricContainer = styled.div`\r\n  width: 100%;\r\n`;\r\nconst props = {\r\n  flavor: String,\r\n  disabled: Boolean,\r\n  active: Boolean,\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst ParametricCarat = styled("div", props)`\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    transparent 50%,\r\n    ${props =>\r\n        props.disabled\r\n          ? "rgba(0, 0, 0, 0.3)"\r\n          : props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].color.color\r\n          : props.defaultTheme[props.flavor]\r\n          ? props.defaultTheme[props.flavor].color.color\r\n          : "#222"}\r\n      50%\r\n  );\r\n  float: right;\r\n  width: 0.5rem;\r\n  height: 0.5rem;\r\n  transform: rotate(45deg);\r\n  transition: 0.3s all;\r\n  display: inline-block;\r\n`;\r\nconst QuickSelectContainer = styled.div`\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 5px;\r\n`;\r\nconst QuickSelectOption = styled("div", props)`\r\n  font-family: "Open Sans Regular", -apple-system, BlinkMacSystemFont,\r\n    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",\r\n    "Segoe UI Emoji", "Segoe UI Symbol";\r\n  padding: 5px;\r\n  margin-bottom: 2px;\r\n  cursor: pointer;\r\n  text-align: left !important;\r\n  color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].color.color\r\n      : props.defaultTheme[props.flavor] &&\r\n        props.defaultTheme[props.flavor].color.color\r\n      ? props.defaultTheme[props.flavor].color.color\r\n      : "#040404"}\r\n  background-color: ${props =>\r\n    props.theme && props.theme[props.flavor]\r\n      ? props.theme[props.flavor].background.color\r\n      : props.defaultTheme[props.flavor] &&\r\n        props.defaultTheme[props.flavor].background.color\r\n      ? props.defaultTheme[props.flavor].background.color\r\n      : "#f0f0f0"};\r\n  &:hover {\r\n    background-color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].background.hover\r\n        : props.defaultTheme[props.flavor] &&\r\n          props.defaultTheme[props.flavor].background.hover\r\n        ? props.defaultTheme[props.flavor].background.hover\r\n        : "#d5d5d5"};\r\n    color: ${props =>\r\n      props.theme && props.theme[props.flavor]\r\n        ? props.theme[props.flavor].color.hover\r\n        : props.defaultTheme[props.flavor] &&\r\n          props.defaultTheme[props.flavor].color.hover\r\n        ? props.defaultTheme[props.flavor].color.hover\r\n        : "#000"}\r\n  }\r\n`;\r\nconst ParametricContentContainer = styled.div`\r\n  transition: 0.3s height;\r\n  margin-top: 3px;\r\n  height: 0px;\r\n  overflow-y: hidden;\r\n`;\r\nexport const ParametricFilter = {\r\n  components: {\r\n    NButton,\r\n    ParametricContainer,\r\n    ParametricCarat,\r\n    SelectMe,\r\n    ParametricContentContainer,\r\n    QuickSelectContainer,\r\n    QuickSelectOption,\r\n    Badge,\r\n    NLabel\r\n  },\r\n  data() {\r\n    return {\r\n      selectedItems: [],\r\n      open: false,\r\n      unwatch: null\r\n    };\r\n  },\r\n  props: {\r\n    value: {\r\n      type: String,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    filter: {\r\n      type: Object,\r\n      required: true\r\n    },\r\n    defaultOpen: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    displayAttribute: {\r\n      type: String,\r\n      default: "text"\r\n    },\r\n    valueAttribute: {\r\n      type: String,\r\n      default: "value"\r\n    },\r\n    quickSelectFlavor: {\r\n      type: String,\r\n      default: "Secondary"\r\n    },\r\n    activeBadgeFlavor: {\r\n      type: String,\r\n      default: "Light"\r\n    },\r\n    badgeFlavor: {\r\n      type: String,\r\n      default: "Secondary"\r\n    },\r\n    flavor: {\r\n      type: String,\r\n      default: "Dark"\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    this.unwatch();\r\n  },\r\n  mounted() {\r\n    this.open = this.defaultOpen;\r\n    if (this.defaultOpen) {\r\n      this.expandSection(this.$refs.content.$el);\r\n    }\r\n    if (this.filter.selected_values) {\r\n      this.selectedItems = this.filter.selected_values.slice();\r\n    }\r\n    this.unwatch = this.$watch("values", this.updateSelectedItems, {\r\n      deep: true\r\n    });\r\n  },\r\n  methods: {\r\n    updateSelectedItems() {\r\n      this.selectedItems = this.value;\r\n    },\r\n    collapseSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // temporarily disable all css transitions\r\n      var elementTransition = element.style.transition;\r\n      element.style.transition = "";\r\n      element.style.height = sectionHeight + "px !important";\r\n      element.style.overflowY = "hidden";\r\n      // element.style.width = sectionWidth + "px !important";\r\n\r\n      // on the next frame (as soon as the previous style change has taken effect),\r\n      // explicitly set the element\'s height to its current pixel height, so we\r\n      // aren\'t transitioning out of \'auto\'\r\n      requestAnimationFrame(function() {\r\n        element.style.height = sectionHeight + "px";\r\n        // element.style.width = sectionWidth + "px";\r\n        element.style.transition = elementTransition;\r\n        // element.style.overflowY = \'hidden\';\r\n\r\n        // on the next frame (as soon as the previous style change has taken effect),\r\n        // have the element transition to height: 0\r\n        requestAnimationFrame(function() {\r\n          element.style.height = 0 + "px";\r\n          // element.style.width = "0px";\r\n          element.style.paddingBottom = "0px";\r\n        });\r\n      });\r\n\r\n      // mark the section as "currently collapsed"\r\n      element.setAttribute("data-collapsed", "true");\r\n    },\r\n    expandSection(element) {\r\n      // pulled from https://css-tricks.com/using-css-transitions-auto-dimensions/ and modified\r\n      // get the height of the element\'s inner content, regardless of its actual size\r\n      let sectionHeight = element.scrollHeight;\r\n      // have the element transition to the height of its inner content\r\n      element.style.height = sectionHeight + "px";\r\n      // element.style.width = sectionWidth + "px";\r\n\r\n      element.style.paddingBottom = "5px";\r\n      // element.style.overflowY = "auto"\r\n      // when the next css transition finishes (which should be the one we just triggered)\r\n      element.addEventListener("transitionend", function() {\r\n        // remove this event listener so it only gets triggered once\r\n        element.removeEventListener("transitionend", this);\r\n        if (element.getAttribute("data-collapsed") == "false") {\r\n          // remove "height" from the element\'s inline styles, so it can return to its initial value\r\n          element.style.height = "auto";\r\n          element.style.overflowY = "visible";\r\n        }\r\n      });\r\n\r\n      // mark the section as "currently not collapsed"\r\n      element.setAttribute("data-collapsed", "false");\r\n    },\r\n    handleUpdate(value) {\r\n      this.selectedItems = value.slice();\r\n      this.$emit("input", this.selectedItems);\r\n    },\r\n    toggle() {\r\n      // this.open = !this.open;\r\n\r\n      if (!this.open) {\r\n        this.expandSection(this.$refs.content.$el);\r\n        this.open = true;\r\n      } else {\r\n        this.collapseSection(this.$refs.content.$el);\r\n        this.open = false;\r\n      }\r\n    },\r\n    quickSelect(item) {\r\n      let option = this.filter.items.filter(\r\n        i => i[this.valueAttribute] == item[this.valueAttribute]\r\n      )[0];\r\n      if (this.$refs.selectBar) {\r\n        this.$refs.selectBar.selectOption(option);\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computeClass() {\r\n      if (this.open) {\r\n        return ["sidebar-open-carat"];\r\n      }\r\n      return [];\r\n    }\r\n  }\r\n};\r\nexport default ParametricFilter;\r\n</script>\r\n\r\n<style>\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n}\r\n.parametric-button {\r\n  justify-content: space-between;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.parametric-open-carat {\r\n  transform: rotate(135deg) !important;\r\n}\r\n</style>\r\n',
        ],
      },
      media: undefined,
    });
  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$5 = normalizeComponent$5(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    createInjector$3,
    undefined,
    undefined
  );

  // Import vue component

  var install$3 = function installParametricFilter(Vue) {
    if (install$3.installed) return;
    install$3.installed = true;
    Vue.component("ParametricFilter", __vue_component__$5);
  }; // Create module definition for Vue.use()

  var plugin$3 = {
    install: install$3,
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
    GlobalVue$5.use(plugin$3);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()

  __vue_component__$5.install = install$3; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  return __vue_component__$5;
})();
//# sourceMappingURL=ParametricFilter.iife.js.map
