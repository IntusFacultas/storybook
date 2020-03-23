var DatePicker = (function () {
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var moment = createCommonjsModule(function (module, exports) {

    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, function () {

      var hookCallback;

      function hooks() {
        return hookCallback.apply(null, arguments);
      } // This is done to register the method called with moment()
      // without creating circular dependencies.


      function setHookCallback(callback) {
        hookCallback = callback;
      }

      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
      }

      function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
      }

      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;

          for (k in obj) {
            if (obj.hasOwnProperty(k)) {
              return false;
            }
          }

          return true;
        }
      }

      function isUndefined(input) {
        return input === void 0;
      }

      function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
      }

      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
      }

      function map(arr, fn) {
        var res = [],
            i;

        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }

        return res;
      }

      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }

      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }

        if (hasOwnProp(b, 'toString')) {
          a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
          a.valueOf = b.valueOf;
        }

        return a;
      }

      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }

      function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }

      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }

        return m._pf;
      }

      var some;

      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function some(fun) {
          var t = Object(this);
          var len = t.length >>> 0;

          for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }

          return false;
        };
      }

      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m);
          var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
          });
          var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }

          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }

        return m._isValid;
      }

      function createInvalid(flags) {
        var m = createUTC(NaN);

        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }

        return m;
      } // Plugins that add properties should also add the key here (null value),
      // so we can properly clone ourselves.


      var momentProperties = hooks.momentProperties = [];

      function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }

        if (!isUndefined(from._i)) {
          to._i = from._i;
        }

        if (!isUndefined(from._f)) {
          to._f = from._f;
        }

        if (!isUndefined(from._l)) {
          to._l = from._l;
        }

        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }

        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }

        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }

        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }

        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }

        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];

            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }

        return to;
      }

      var updateInProgress = false; // Moment prototype object

      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);

        if (!this.isValid()) {
          this._d = new Date(NaN);
        } // Prevent infinite loop in case updateOffset creates new moment
        // objects.


        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }

      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }

      function absFloor(number) {
        if (number < 0) {
          // -0 -> 0
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }

      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }

        return value;
      } // compare two arrays, return the number of differences


      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;

        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }

        return diffs + lengthDiff;
      }

      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
          console.warn('Deprecation warning: ' + msg);
        }
      }

      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }

          if (firstTime) {
            var args = [];
            var arg;

            for (var i = 0; i < arguments.length; i++) {
              arg = '';

              if (_typeof(arguments[i]) === 'object') {
                arg += '\n[' + i + '] ';

                for (var key in arguments[0]) {
                  arg += key + ': ' + arguments[0][key] + ', ';
                }

                arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                arg = arguments[i];
              }

              args.push(arg);
            }

            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
            firstTime = false;
          }

          return fn.apply(this, arguments);
        }, fn);
      }

      var deprecations = {};

      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }

        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }

      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;

      function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      function set(config) {
        var prop, i;

        for (i in config) {
          prop = config[i];

          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this['_' + i] = prop;
          }
        }

        this._config = config; // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.

        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
      }

      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;

        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }

        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
          }
        }

        return res;
      }

      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }

      var keys;

      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function keys(obj) {
          var i,
              res = [];

          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }

          return res;
        };
      }

      var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      };

      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
      }

      var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
      };

      function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
          return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
          return val.slice(1);
        });
        return this._longDateFormat[key];
      }

      var defaultInvalidDate = 'Invalid date';

      function invalidDate() {
        return this._invalidDate;
      }

      var defaultOrdinal = '%d';
      var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

      function ordinal(number) {
        return this._ordinal.replace('%d', number);
      }

      var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      };

      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }

      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }

      var aliases = {};

      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
      }

      function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }

      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);

            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }

        return normalizedInput;
      }

      var priorities = {};

      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }

      function getPrioritizedUnits(unitsObj) {
        var units = [];

        for (var u in unitsObj) {
          units.push({
            unit: u,
            priority: priorities[u]
          });
        }

        units.sort(function (a, b) {
          return a.priority - b.priority;
        });
        return units;
      }

      function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }

      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
      var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
      var formatFunctions = {};
      var formatTokenFunctions = {}; // token:    'M'
      // padded:   ['MM', 2]
      // ordinal:  'Mo'
      // callback: function () { this.month() + 1 }

      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;

        if (typeof callback === 'string') {
          func = function func() {
            return this[callback]();
          };
        }

        if (token) {
          formatTokenFunctions[token] = func;
        }

        if (padded) {
          formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }

        if (ordinal) {
          formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }

      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, '');
        }

        return input.replace(/\\/g, '');
      }

      function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }

        return function (mom) {
          var output = '',
              i;

          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }

          return output;
        };
      } // format date using native date object


      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }

      function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;

        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }

        return format;
      }

      var match1 = /\d/; //       0 - 9

      var match2 = /\d\d/; //      00 - 99

      var match3 = /\d{3}/; //     000 - 999

      var match4 = /\d{4}/; //    0000 - 9999

      var match6 = /[+-]?\d{6}/; // -999999 - 999999

      var match1to2 = /\d\d?/; //       0 - 99

      var match3to4 = /\d\d\d\d?/; //     999 - 9999

      var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

      var match1to3 = /\d{1,3}/; //       0 - 999

      var match1to4 = /\d{1,4}/; //       0 - 9999

      var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

      var matchUnsigned = /\d+/; //       0 - inf

      var matchSigned = /[+-]?\d+/; //    -inf - inf

      var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

      var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

      var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
      // any word (or two) characters or numbers including two/three word month in arabic.
      // includes scottish gaelic two word and hyphenated months

      var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
      var regexes = {};

      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }

      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
      } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


      function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }

      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      var tokens = {};

      function addParseToken(token, callback) {
        var i,
            func = callback;

        if (typeof token === 'string') {
          token = [token];
        }

        if (isNumber(callback)) {
          func = function func(input, array) {
            array[callback] = toInt(input);
          };
        }

        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }

      function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        });
      }

      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }

      var YEAR = 0;
      var MONTH = 1;
      var DATE = 2;
      var HOUR = 3;
      var MINUTE = 4;
      var SECOND = 5;
      var MILLISECOND = 6;
      var WEEK = 7;
      var WEEKDAY = 8; // FORMATTING

      addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
      });
      addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      });
      addFormatToken(0, ['YYYY', 4], 0, 'year');
      addFormatToken(0, ['YYYYY', 5], 0, 'year');
      addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

      addUnitAlias('year', 'y'); // PRIORITIES

      addUnitPriority('year', 1); // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);
      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
      }); // HELPERS

      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }

      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      } // HOOKS


      hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
      }; // MOMENTS


      var getSetYear = makeGetSet('FullYear', true);

      function getIsLeapYear() {
        return isLeapYear(this.year());
      }

      function makeGetSet(unit, keepTime) {
        return function (value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }

      function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
      }

      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
          }
        }
      } // MOMENTS


      function stringGet(units) {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units]();
        }

        return this;
      }

      function stringSet(units, value) {
        if (_typeof(units) === 'object') {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units);

          for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units](value);
          }
        }

        return this;
      }

      function mod(n, x) {
        return (n % x + x) % x;
      }

      var indexOf;

      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function indexOf(o) {
          // I know
          var i;

          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }

          return -1;
        };
      }

      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }

        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      } // FORMATTING


      addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      });
      addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
      });
      addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
      }); // ALIASES

      addUnitAlias('month', 'M'); // PRIORITY

      addUnitPriority('month', 8); // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });
      addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }); // LOCALES

      var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
      var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months['standalone'];
        }

        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
      }

      var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }

        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
      }

      function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();

        if (!this._monthsParse) {
          // this is not used
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];

          for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        } // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse


        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);

          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
          }

          if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      } // MOMENTS


      function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
          // No op
          return mom;
        }

        if (typeof value === 'string') {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

            if (!isNumber(value)) {
              return mom;
            }
          }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

        return mom;
      }

      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, 'Month');
        }
      }

      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }

      var defaultMonthsShortRegex = matchWord;

      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }

          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }

      var defaultMonthsRegex = matchWord;

      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
          }

          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }

          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }

      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;

        for (i = 0; i < 12; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, i]);
          shortPieces.push(this.monthsShort(mom, ''));
          longPieces.push(this.months(mom, ''));
          mixedPieces.push(this.months(mom, ''));
          mixedPieces.push(this.monthsShort(mom, ''));
        } // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.


        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }

        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      }

      function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date; // the date constructor remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          date = new Date(y + 400, m, d, h, M, s, ms);

          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
      }

      function createUTCDate(y) {
        var date; // the Date.UTC function remaps years 0-99 to 1900-1999

        if (y < 100 && y >= 0) {
          var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));

          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
      } // start-of-first-week - start-of-year


      function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }

        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }

      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }

        return {
          week: resWeek,
          year: resYear
        };
      }

      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      } // FORMATTING


      addFormatToken('w', ['ww', 2], 'wo', 'week');
      addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W'); // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5); // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);
      addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }); // HELPERS
      // LOCALES

      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }

      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 6th is the first week of the year.

      };

      function localeFirstDayOfWeek() {
        return this._week.dow;
      }

      function localeFirstDayOfYear() {
        return this._week.doy;
      } // MOMENTS


      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
      }

      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
      } // FORMATTING


      addFormatToken('d', 0, 'do', 'day');
      addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
      });
      addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
      });
      addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
      });
      addFormatToken('e', 0, 0, 'weekday');
      addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E'); // PRIORITY

      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11); // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });
      addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
      }); // HELPERS

      function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
          return input;
        }

        if (!isNaN(input)) {
          return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);

        if (typeof input === 'number') {
          return input;
        }

        return null;
      }

      function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
          return locale.weekdaysParse(input) % 7 || 7;
        }

        return isNaN(input) ? null : input;
      } // LOCALES


      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }

      var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }

      var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }

      var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }

      function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];

          for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
          }
        }

        if (strict) {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._weekdaysParse, llc);

            if (ii !== -1) {
              return ii;
            }

            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }

      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);

          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
          }

          if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
          } // test the regex


          if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      } // MOMENTS


      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, 'd');
        } else {
          return day;
        }
      }

      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
      }

      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        } // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.


        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }

      var defaultWeekdaysRegex = matchWord;

      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }

          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }

      var defaultWeekdaysShortRegex = matchWord;

      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }

          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }

      var defaultWeekdaysMinRegex = matchWord;

      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
          }

          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }

          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }

      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;

        for (i = 0; i < 7; i++) {
          // make the regex if we don't have it already
          mom = createUTC([2000, 1]).day(i);
          minp = this.weekdaysMin(mom, '');
          shortp = this.weekdaysShort(mom, '');
          longp = this.weekdays(mom, '');
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.


        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        for (i = 0; i < 7; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
      } // FORMATTING


      function hFormat() {
        return this.hours() % 12 || 12;
      }

      function kFormat() {
        return this.hours() || 24;
      }

      addFormatToken('H', ['HH', 2], 0, 'hour');
      addFormatToken('h', ['hh', 2], 0, hFormat);
      addFormatToken('k', ['kk', 2], 0, kFormat);
      addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });

      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false); // ALIASES

      addUnitAlias('hour', 'h'); // PRIORITY

      addUnitPriority('hour', 13); // PARSING

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);
      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);
      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }); // LOCALES

      function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
      }

      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? 'pm' : 'PM';
        } else {
          return isLower ? 'am' : 'AM';
        }
      } // MOMENTS
      // Setting the hour should keep the time, because the user explicitly
      // specified which hour they want. So trying to maintain the same hour (in
      // a new timezone) makes sense. Adding/subtracting hours does not follow
      // this rule.


      var getSetHour = makeGetSet('Hours', true);
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      }; // internal storage for locale config files

      var locales = {};
      var localeFamilies = {};
      var globalLocale;

      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
      } // pick the locale from the array
      // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
      // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


      function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
          split = normalizeLocale(names[i]).split('-');
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split('-') : null;

          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));

            if (locale) {
              return locale;
            }

            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
            }

            j--;
          }

          i++;
        }

        return globalLocale;
      }

      function loadLocale(name) {
        var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

        if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = commonjsRequire;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {}
        }

        return locales[name];
      } // This function will load locale and then set the global locale.  If
      // no arguments are passed in, it will simply return the current global
      // locale key.


      function getSetGlobalLocale(key, values) {
        var data;

        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }

          if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
          } else {
            if (typeof console !== 'undefined' && console.warn) {
              //warn user if arguments are passed but the locale could not be set
              console.warn('Locale ' + key + ' not found. Did you forget to load it?');
            }
          }
        }

        return globalLocale._abbr;
      }

      function defineLocale(name, config) {
        if (config !== null) {
          var locale,
              parentConfig = baseConfig;
          config.abbr = name;

          if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);

              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }

                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }

          locales[name] = new Locale(mergeConfigs(parentConfig, config));

          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
            });
          } // backwards compat for now: also set the locale
          // make sure we set the locale AFTER all child locales have been
          // created, so we won't end up with the child locale set.


          getSetGlobalLocale(name);
          return locales[name];
        } else {
          // useful for testing
          delete locales[name];
          return null;
        }
      }

      function updateLocale(name, config) {
        if (config != null) {
          var locale,
              tmpLocale,
              parentConfig = baseConfig; // MERGE

          tmpLocale = loadLocale(name);

          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }

          config = mergeConfigs(parentConfig, config);
          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale; // backwards compat for now: also set the locale

          getSetGlobalLocale(name);
        } else {
          // pass null for config to unupdate, useful for tests
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }

        return locales[name];
      } // returns locale data


      function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }

        if (!key) {
          return globalLocale;
        }

        if (!isArray(key)) {
          //short-circuit everything else
          locale = loadLocale(key);

          if (locale) {
            return locale;
          }

          key = [key];
        }

        return chooseLocale(key);
      }

      function listLocales() {
        return keys(locales);
      }

      function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }

          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }

          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }

          getParsingFlags(m).overflow = overflow;
        }

        return m;
      } // Pick the first defined of two or three arguments.


      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }

        if (b != null) {
          return b;
        }

        return c;
      }

      function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());

        if (config._useUTC) {
          return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }

        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      } // convert an array to a date.
      // the array should mirror the parameters below
      // note: all values past the year are optional and will default to the lowest possible value.
      // [year, month, day , hour, minute, second, millisecond]


      function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
          return;
        }

        currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        } //if the day of the year is set, figure out what it is


        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }

          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        } // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything


        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        } // Zero out whatever was not defaulted, including time


        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        } // Check for 24:00:00.000


        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.

        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
          config._a[HOUR] = 24;
        } // check for mismatching day of week


        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }

      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
        w = config._w;

        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
          // how we interpret now (local, utc, fixed offset). So create
          // a now version of current config (take local/utc/offset flags, and
          // create now).

          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);

          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          var curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

          week = defaults(w.w, curWeek.week);

          if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;

            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;

            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            // default to beginning of week
            weekday = dow;
          }
        }

        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      } // iso 8601 regex
      // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
      var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
      var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
      var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

      var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
      var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

      function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
          getParsingFlags(config).iso = true;

          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }

          if (dateFormat == null) {
            config._isValid = false;
            return;
          }

          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
              }
            }

            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }

          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }

          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
            } else {
              config._isValid = false;
              return;
            }
          }

          config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }

        return result;
      }

      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);

        if (year <= 49) {
          return 2000 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }

        return year;
      }

      function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      }

      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
              weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }

        return true;
      }

      var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };

      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          // the only allowed military tz is Z
          return 0;
        } else {
          var hm = parseInt(numOffset, 10);
          var m = hm % 100,
              h = (hm - m) / 100;
          return h * 60 + m;
        }
      } // date and time from ref 2822 format


      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));

        if (match) {
          var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }

          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);

          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      } // date from iso format or fallback


      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }

        configFromISO(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }

        configFromRFC2822(config);

        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        } // Final attempt, use Input Fallback


        hooks.createFromInputFallback(config);
      }

      hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      }); // constant that refers to the ISO standard

      hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


      hooks.RFC_2822 = function () {}; // date from string and format string


      function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }

        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }

        config._a = [];
        getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
          //         'regex', getParseRegexForToken(token, config));

          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));

            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }

            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          } // don't parse if it's not a known token


          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }

            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        } // add remaining unparsed input length to the string


        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        } // clear _12h flag if hour is <= 12


        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config);
      }

      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
          // nothing to do
          return hour;
        }

        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          // Fallback
          isPm = locale.isPM(meridiem);

          if (isPm && hour < 12) {
            hour += 12;
          }

          if (!isPm && hour === 12) {
            hour = 0;
          }

          return hour;
        } else {
          // this is not supposed to happen
          return hour;
        }
      } // date from string and array of format strings


      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }

        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          tempConfig = copyConfig({}, config);

          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }

          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);

          if (!isValid(tempConfig)) {
            continue;
          } // if there is any input that was not parsed add a penalty for that format


          currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;

          if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }

        extend(config, bestMoment || tempConfig);
      }

      function configFromObject(config) {
        if (config._d) {
          return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray(config);
      }

      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));

        if (res._nextDay) {
          // Adding is smart enough around DST
          res.add(1, 'd');
          res._nextDay = undefined;
        }

        return res;
      }

      function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
          return createInvalid({
            nullInput: true
          });
        }

        if (typeof input === 'string') {
          config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }

        if (!isValid(config)) {
          config._d = null;
        }

        return config;
      }

      function configFromInput(config) {
        var input = config._i;

        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          // from milliseconds
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }

      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        } // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423


        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }

      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }

      var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      });
      var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);

        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }); // Pick a moment m from moments so that m[fn](other) is true for all
      // other. This relies on the function fn to be transitive.
      //
      // moments should either be an array of moment objects or an array, whose
      // first element is an array of moment objects.

      function pickBy(fn, moments) {
        var res, i;

        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }

        if (!moments.length) {
          return createLocal();
        }

        res = moments[0];

        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }

        return res;
      } // TODO: Use [].sort instead?


      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
      }

      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
      }

      var now = function now() {
        return Date.now ? Date.now() : +new Date();
      };

      var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

      function isDurationValid(m) {
        for (var key in m) {
          if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }

        var unitHasDecimal = false;

        for (var i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false; // only allow non-integers for smallest unit
            }

            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }

        return true;
      }

      function isValid$1() {
        return this._isValid;
      }

      function createInvalid$1() {
        return createDuration(NaN);
      }

      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately

        this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.

        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();

        this._bubble();
      }

      function isDuration(obj) {
        return obj instanceof Duration;
      }

      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      } // FORMATTING


      function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
          var offset = this.utcOffset();
          var sign = '+';

          if (offset < 0) {
            offset = -offset;
            sign = '-';
          }

          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
      }

      offset('Z', ':');
      offset('ZZ', ''); // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }); // HELPERS
      // timezone chunker
      // '+10:00' > ['10',  '00']
      // '-1530'  > ['-15', '30']

      var chunkOffset = /([\+\-]|\d\d)/gi;

      function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
          return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
      } // Return a moment from input, that is local/utc/zone equivalent to model.


      function cloneWithOffset(input, model) {
        var res, diff;

        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

          res._d.setTime(res._d.valueOf() + diff);

          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }

      function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
      } // HOOKS
      // This function will be called whenever a moment is mutated.
      // It is intended to keep the offset in sync with the timezone.


      hooks.updateOffset = function () {}; // MOMENTS
      // keepLocalTime = true means only change the timezone, without
      // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
      // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
      // +0200, so we adjust the time as needed, to be valid.
      //
      // Keeping the time actually adds/subtracts (one hour)
      // from the actual represented time. That is why we call updateOffset
      // a second time. In case it wants us to change the offset again
      // _changeInProgress == true case, then we have to adjust, because
      // there is no such time in the given timezone.


      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;

        if (!this.isValid()) {
          return input != null ? this : NaN;
        }

        if (input != null) {
          if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);

            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }

          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }

          this._offset = input;
          this._isUTC = true;

          if (localAdjust != null) {
            this.add(localAdjust, 'm');
          }

          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }

          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }

      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== 'string') {
            input = -input;
          }

          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }

      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }

      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;

          if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
          }
        }

        return this;
      }

      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
          var tZone = offsetFromString(matchOffset, this._i);

          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }

        return this;
      }

      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }

        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }

      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }

      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }

        var c = {};
        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
          var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }

        return this._isDSTShifted;
      }

      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }

      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }

      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      } // ASP.NET json date format regex


      var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
      // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
      // and further modified to allow for strings containing both week and day

      var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input)) {
          duration = {};

          if (key) {
            duration[key] = input;
          } else {
            duration.milliseconds = input;
          }
        } else if (!!(match = aspNetRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

          };
        } else if (!!(match = isoRegex.exec(input))) {
          sign = match[1] === '-' ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          // checks for null or undefined
          duration = {};
        } else if (_typeof(duration) === 'object' && ('from' in duration || 'to' in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
          ret._locale = input._locale;
        }

        return ret;
      }

      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;

      function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

        return (isNaN(res) ? 0 : res) * sign;
      }

      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

        if (base.clone().add(res.months, 'M').isAfter(other)) {
          --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
      }

      function momentsDifference(base, other) {
        var res;

        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }

        other = cloneWithOffset(other, base);

        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }

        return res;
      } // TODO: remove 'name' arg after deprecation is removed


      function createAdder(direction, name) {
        return function (val, period) {
          var dur, tmp; //invert the arguments, but complain about it

          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;
            val = period;
            period = tmp;
          }

          val = typeof val === 'string' ? +val : val;
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }

      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
          // No op
          return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
          setMonth(mom, get(mom, 'Month') + months * isAdding);
        }

        if (days) {
          set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }

        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }

        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }

      var add = createAdder(1, 'add');
      var subtract = createAdder(-1, 'subtract');

      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      }

      function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }

      function clone() {
        return new Moment(this);
      }

      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }

      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }

      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);

        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }

        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }

      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;

        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }

        units = normalizeUnits(units) || 'millisecond';

        if (units === 'millisecond') {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }

      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }

      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }

      function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
          return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
          return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);

        switch (units) {
          case 'year':
            output = monthDiff(this, that) / 12;
            break;

          case 'month':
            output = monthDiff(this, that);
            break;

          case 'quarter':
            output = monthDiff(this, that) / 3;
            break;

          case 'second':
            output = (this - that) / 1e3;
            break;
          // 1000

          case 'minute':
            output = (this - that) / 6e4;
            break;
          // 1000 * 60

          case 'hour':
            output = (this - that) / 36e5;
            break;
          // 1000 * 60 * 60

          case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst

          case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst

          default:
            output = this - that;
        }

        return asFloat ? output : absFloor(output);
      }

      function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

          adjust = (b - anchor) / (anchor2 - anchor);
        } //check for negative zero, return zero if negative zero


        return -(wholeMonthDiff + adjust) || 0;
      }

      hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
      hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

      function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }

      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }

        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;

        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }

        if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
          }
        }

        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }
      /**
       * Return a human readable representation of a moment that can
       * also be evaluated to get a new moment which is the same
       *
       * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
       */


      function inspect() {
        if (!this.isValid()) {
          return 'moment.invalid(/* ' + this._i + ' */)';
        }

        var func = 'moment';
        var zone = '';

        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
          zone = 'Z';
        }

        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }

      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }

        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }

      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }

      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }

      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      } // If passed a locale key, it will set the locale for this
      // instance.  Otherwise, it will return the locale configuration
      // variables for this instance.


      function locale(key) {
        var newLocaleData;

        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);

          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }

          return this;
        }
      }

      var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      });

      function localeData() {
        return this._locale;
      }

      var MS_PER_SECOND = 1000;
      var MS_PER_MINUTE = 60 * MS_PER_SECOND;
      var MS_PER_HOUR = 60 * MS_PER_MINUTE;
      var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }

      function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }

      function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
          // preserve leap years using a full 400 year cycle, then reset
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }

      function startOf(units) {
        var time;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;

          case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;

          case 'hour':
            time = this._d.valueOf();
            time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;

          case 'minute':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;

          case 'second':
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function endOf(units) {
        var time;
        units = normalizeUnits(units);

        if (units === undefined || units === 'millisecond' || !this.isValid()) {
          return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
          case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;

          case 'quarter':
            time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;

          case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;

          case 'week':
            time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;

          case 'isoWeek':
            time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;

          case 'day':
          case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;

          case 'hour':
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;

          case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;

          case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }

        this._d.setTime(time);

        hooks.updateOffset(this, true);
        return this;
      }

      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
      }

      function unix() {
        return Math.floor(this.valueOf() / 1000);
      }

      function toDate() {
        return new Date(this.valueOf());
      }

      function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
      }

      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }

      function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
      }

      function isValid$2() {
        return isValid(this);
      }

      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }

      function invalidAt() {
        return getParsingFlags(this).overflow;
      }

      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      } // FORMATTING


      addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      });

      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
      }

      addWeekYearFormatToken('gggg', 'weekYear');
      addWeekYearFormatToken('ggggg', 'weekYear');
      addWeekYearFormatToken('GGGG', 'isoWeekYear');
      addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1); // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);
      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      });
      addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }); // MOMENTS

      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }

      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }

      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;

        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }

      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;

        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);

          if (week > weeksTarget) {
            week = weeksTarget;
          }

          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }

      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      } // FORMATTING


      addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

      addUnitAlias('quarter', 'Q'); // PRIORITY

      addUnitPriority('quarter', 7); // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }); // MOMENTS

      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      } // FORMATTING


      addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

      addUnitAlias('date', 'D'); // PRIORITY

      addUnitPriority('date', 9); // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }); // MOMENTS

      var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

      addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

      addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

      addUnitPriority('dayOfYear', 4); // PARSING

      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
      }); // HELPERS
      // MOMENTS

      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
      } // FORMATTING


      addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

      addUnitAlias('minute', 'm'); // PRIORITY

      addUnitPriority('minute', 14); // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE); // MOMENTS

      var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

      addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

      addUnitAlias('second', 's'); // PRIORITY

      addUnitPriority('second', 15); // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND); // MOMENTS

      var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

      addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ['SSS', 3], 0, 'millisecond');
      addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
      });
      addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
      });
      addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
      });
      addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
      }); // ALIASES

      addUnitAlias('millisecond', 'ms'); // PRIORITY

      addUnitPriority('millisecond', 16); // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);
      var token;

      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }

      function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      } // MOMENTS


      var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

      addFormatToken('z', 0, 0, 'zoneAbbr');
      addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

      function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
      }

      function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }

      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
      proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
      proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
      proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
      proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

      function createUnix(input) {
        return createLocal(input * 1000);
      }

      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }

      function preParsePostFormat(string) {
        return string;
      }

      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;

      function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }

      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';

        if (index != null) {
          return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];

        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, 'month');
        }

        return out;
      } // ()
      // (5)
      // (fmt, 5)
      // (fmt)
      // (true)
      // (true, 5)
      // (true, fmt, 5)
      // (true, fmt)


      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;

          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
          return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];

        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }

        return out;
      }

      function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
      }

      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
      }

      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
      }

      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
      }

      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
      }

      getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      }); // Side effect imports

      hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
      hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
      var mathAbs = Math.abs;

      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }

      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      } // supports only 2.0-style add(1, 's') or add(duration)


      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      } // supports only 2.0-style subtract(1, 's') or subtract(duration)


      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }

      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }

      function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166

        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        } // The following code bubbles up values, see the tests for
        // examples of what that means.


        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24); // convert days to months

        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }

      function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
      }

      function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
      }

      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }

        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);

          switch (units) {
            case 'month':
              return months;

            case 'quarter':
              return months / 3;

            case 'year':
              return months / 12;
          }
        } else {
          // handle milliseconds separately because of floating point math errors (issue #1867)
          days = this._days + Math.round(monthsToDays(this._months));

          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;

            case 'day':
              return days + milliseconds / 864e5;

            case 'hour':
              return days * 24 + milliseconds / 36e5;

            case 'minute':
              return days * 1440 + milliseconds / 6e4;

            case 'second':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here

            case 'millisecond':
              return Math.floor(days * 864e5) + milliseconds;

            default:
              throw new Error('Unknown unit ' + units);
          }
        }
      } // TODO: Use this.as('ms')?


      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }

        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }

      function makeAs(alias) {
        return function () {
          return this.as(alias);
        };
      }

      var asMilliseconds = makeAs('ms');
      var asSeconds = makeAs('s');
      var asMinutes = makeAs('m');
      var asHours = makeAs('h');
      var asDays = makeAs('d');
      var asWeeks = makeAs('w');
      var asMonths = makeAs('M');
      var asQuarters = makeAs('Q');
      var asYears = makeAs('y');

      function clone$1() {
        return createDuration(this);
      }

      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
      }

      function makeGetter(name) {
        return function () {
          return this.isValid() ? this._data[name] : NaN;
        };
      }

      var milliseconds = makeGetter('milliseconds');
      var seconds = makeGetter('seconds');
      var minutes = makeGetter('minutes');
      var hours = makeGetter('hours');
      var days = makeGetter('days');
      var months = makeGetter('months');
      var years = makeGetter('years');

      function weeks() {
        return absFloor(this.days() / 7);
      }

      var round = Math.round;
      var thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11 // months to year

      }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }

      function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));
        var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      } // This function allows you to set the rounding function for relative time strings


      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }

        if (typeof roundingFunction === 'function') {
          round = roundingFunction;
          return true;
        }

        return false;
      } // This function allows you to set a threshold for relative time strings


      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }

        if (limit === undefined) {
          return thresholds[threshold];
        }

        thresholds[threshold] = limit;

        if (threshold === 's') {
          thresholds.ss = limit - 1;
        }

        return true;
      }

      function humanize(withSuffix) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
      }

      var abs$1 = Math.abs;

      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }

      function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60; // 12 months -> 1 year

        years = absFloor(months / 12);
        months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
          // this is the same as C#'s (Noda) and python (isodate)...
          // but not other JS (goog.date)
          return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
      }

      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
      proto$2.lang = lang; // Side effect imports
      // FORMATTING

      addFormatToken('X', 0, 0, 'unix');
      addFormatToken('x', 0, 0, 'valueOf'); // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
      });
      addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
      }); // Side effect imports

      hooks.version = '2.24.0';
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

      hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',
        // <input type="date" />
        TIME: 'HH:mm',
        // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',
        // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',
        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',
        // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />

      };
      return hooks;
    });
  });

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

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray$1(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$1() {
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
      if (Array.isArray(chunk)) return [].concat(_toConsumableArray$1(ruleSet), _toConsumableArray$1(flatten(chunk, executionContext)));

      if (typeof chunk === 'function') {
        return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray$1(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
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
          return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray$1(Array.from(sheetForTag(tag).cssRules))));
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

  function createCommonjsModule$1(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var hash = createCommonjsModule$1(function (module, exports) {
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

  var stylis = createCommonjsModule$1(function (module, exports) {
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
  };
  var AlertTheme = {
    warning: Theme["Warning"],
    danger: Theme["Danger"],
    success: Theme["Success"],
    info: Theme["Info"]
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
    var data = _taggedTemplateLiteral$1(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral$1(["\n  margin: 0;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: ", "px;\n  font-weight: ", ";\n  line-height: 1.571;\n  color: ", ";\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  ", "\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral$1(["\n  margin-top: 0;\n  font-weight: ", ";\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  color: ", ";\n  ", "\n"]);

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
    textTheme: {
      type: Object,
      default: function _default() {
        return TextTheme;
      }
    },
    flavor: String
  };
  var WebText = styled("span", props)(_templateObject2(), function (props) {
    return props.size < 14 ? 14 : props.size > 16 ? 16 : props.size;
  }, function (props) {
    return props.bold ? "bold" : 500;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
  });
  var Paragraph = WebText.withComponent("p", props);
  var NSmall = styled("small", props)(_templateObject3(), function (props) {
    return props.bold ? "bold" : 500;
  }, function (props) {
    return props.dark ? props.textTheme.Dark.color : props.textTheme.Normal.color;
  }, function (props) {
    return props.flavor ? props.textTheme[props.flavor] ? "color " + props.textTheme[props.flavor].color : "" : "";
  });
  var NLabel = WebText.withComponent("label", props);

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


  var __vue_script__ = WebText;
  /* template */

  /* style */

  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-473a8904_0", {
      source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
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
    label: "WebText",
    component: WebText
  }, {
    label: "Paragraph",
    component: Paragraph
  }, {
    label: "NSmall",
    component: NSmall
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
    }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c("n-input", {
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
    })], 1);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-23064d4e_0", {
      source: "\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\n}\r\n",
      map: {
        "version": 3,
        "sources": ["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\StyledHTML\\Input\\src\\Input.vue"],
        "names": [],
        "mappings": ";AAoMA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AACA",
        "file": "Input.vue",
        "sourcesContent": ["<template>\r\n  <div class=\"input-container\">\r\n    <n-label :dark=\"labelDark\" :flavor=\"labelFlavor\" :for=\"name\">{{\r\n      label\r\n    }}</n-label>\r\n    <n-input\r\n      :flavor=\"flavor\"\r\n      :id=\"name\"\r\n      :readonly=\"readonly\"\r\n      :placeholder=\"placeholder\"\r\n      :pattern=\"pattern\"\r\n      :multiple=\"multiple\"\r\n      :min=\"min\"\r\n      :max=\"max\"\r\n      :name=\"name\"\r\n      :type=\"inputType\"\r\n      :required=\"required\"\r\n      :disabled=\"disabled\"\r\n      :autofocus=\"autofocus\"\r\n      :autocomplete=\"autocomplete\"\r\n      :value=\"internalValue\"\r\n      @input=\"oninput\"\r\n      @change=\"onChange\"\r\n      @focus=\"onFocus\"\r\n    ></n-input>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { NLabel } from \"@IntusFacultas/typography\";\r\nimport styled from \"vue-styled-components\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst props = {\r\n  flavor: {\r\n    type: String,\r\n    default: \"LightBlue\"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default: function() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nexport const NInput = styled(\"input\", props)`\r\n  width: 100%;\r\n  height: 35px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  padding: 2px 5px 2px 5px;\r\n  margin-top: 2px;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  transition: box-shadow 0.5s cubic-bezier(0, 0.99, 0.37, 1.01);\r\n  &:focus {\r\n    border-color: 1px solid\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#04040480\"};\r\n    outline: none;\r\n    box-shadow: 0px 0px 0px 3px\r\n      ${props =>\r\n        props.theme && props.theme[props.flavor]\r\n          ? props.theme[props.flavor].border.color\r\n          : props.defaultTheme[props.flavor] &&\r\n            props.defaultTheme[props.flavor].border.color\r\n          ? props.defaultTheme[props.flavor].border.color\r\n          : \"#10d2ff80\"};\r\n  }\r\n  &:read-only {\r\n    background-color: #e9e9e9;\r\n    color: #747474;\r\n  }\r\n  &:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: none;\r\n    color: #747474;\r\n    background-color: #e2e2e2;\r\n  }\r\n`;\r\nexport const VueInput = {\r\n  name: \"vue-input\",\r\n  components: { NInput, NLabel },\r\n  data: function() {\r\n    return {\r\n      internalValue: \"\"\r\n    };\r\n  },\r\n  props: {\r\n    flavor: {\r\n      type: String,\r\n      default: \"LightBlue\"\r\n    },\r\n    autocomplete: {\r\n      type: String,\r\n      default: \"off\"\r\n    },\r\n    value: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    placeholder: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    pattern: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    multiple: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    min: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    max: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    inputType: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    labelFlavor: {\r\n      type: String,\r\n      default: \"\"\r\n    },\r\n    labelDark: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    label: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    autofocus: {\r\n      type: Boolean,\r\n      default: false\r\n    }\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.internalValue = newVal;\r\n    }\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    if (typeof self.$parent !== \"undefined\") {\r\n      if (!self.$parent.$refs.inputs) self.$parent.$refs.inputs = {};\r\n      self.$parent.$refs.inputs[self.name] = self;\r\n    }\r\n  },\r\n  methods: {\r\n    oninput($e) {\r\n      var self = this;\r\n      this.internalValue = $e;\r\n      self.$emit(\"input\", this.internalValue);\r\n    },\r\n    onChange() {\r\n      this.$emit(\"change\", this.internalValue);\r\n    },\r\n    onFocus() {\r\n      this.$emit(\"focus\");\r\n    }\r\n  }\r\n};\r\nexport default VueInput;\r\n</script>\r\n\r\n<style>\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n</style>\r\n"]
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

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  cursor: pointer;\n  ", "\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  border-radius: 4px;\n"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 5px 10px;\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n  cursor: pointer;\n  border-radius: 4px;\n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n  width: 280px;\n  position: absolute;\n  padding: 10px 10px;\n  border-radius: 4px;\n  background-color: white;\n  top: ", ";\n  & * {\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    user-select: none;\n  }\n  z-index: 1000;\n  box-shadow: 0px 8px 8px 2px #e4e4e4;\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  padding: 4px 16px;\n  &:hover {\n    background-color: #eee;\n  }\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width:240px\n  border: 1px solid white;\n  border-radius: 4px;\n  padding: 4px 0px;\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width:240px\n  border: 1px solid white;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 4px 0px;\n  &:hover {\n    background-color: #eee;\n  }\n  transition: color .1s ease-in-out,\n            background-color .1s ease-in-out,\n            border-color .1s ease-in-out,\n            box-shadow .1s ease-in-out;\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  & * {\n    font-size: 16px;\n  }\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var SATURDAY = 6;
  var SUNDAY = 0;
  var props$2 = {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inMonth: {
      type: Boolean,
      default: false
    },
    current: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "inherit"
    },
    defaultTheme: {
      type: Object,
      default: function _default() {
        return Theme$1;
      }
    }
  };
  var SelectorBar = styled.div(_templateObject$2());
  var MonthPicker = styled.button(_templateObject2$1());
  var YearPicker = styled.span(_templateObject3$1());
  var IncrementDecrement = styled.button(_templateObject4());
  var ContentContainer = styled.div(_templateObject5());
  var DatePickerContainer = styled("div", props$2)(_templateObject6(), function (props) {
    return props.top;
  });
  var MonthOrYear = styled("td", props$2)(_templateObject7(), function (props) {
    return props.active ? "\n        color: ".concat(props.defaultTheme.Primary.color.color, "\n        background-color: ").concat(props.defaultTheme.Primary.background.color, "\n        &:hover {\n          background-color: ").concat(props.defaultTheme.Primary.background.hover, ";\n        }\n      ") : props.current ? "\n        background-color: #ddd;\n        &:hover {\n          background-color: #eee;\n        }\n      " : "\n  &:hover {\n    background-color: #eee;\n  }";
  });
  var Day = styled("td", props$2)(_templateObject8(), function (props) {
    return props.inMonth ? "" : "color: #b8b8b8;";
  }, function (props) {
    return props.active ? "\n        color: ".concat(props.defaultTheme.Primary.color.color, "\n        background-color: ").concat(props.defaultTheme.Primary.background.color, "\n        &:hover {\n          background-color: ").concat(props.defaultTheme.Primary.background.hover, ";\n        }\n      ") : props.current ? "\n        background-color: #ddd;\n        &:hover {\n          background-color: #eee;\n        }\n      " : "\n  &:hover {\n    background-color: #eee;\n  }";
  }, function (props) {
    return props.disabled ? "pointer-events: none; color: #f0f0f0; cursor: not-allowed;" : "";
  });
  var Calendar = styled.table(_templateObject9());
  var DatePicker = {
    components: {
      VueInput: VueInput,
      DatePickerContainer: DatePickerContainer,
      IncrementDecrement: IncrementDecrement,
      MonthPicker: MonthPicker,
      SelectorBar: SelectorBar,
      Calendar: Calendar,
      Day: Day,
      MonthOrYear: MonthOrYear,
      YearPicker: YearPicker,
      ContentContainer: ContentContainer
    },
    data: function data() {
      return {
        show: false,
        selectingDay: true,
        selectingMonth: false,
        selectingYear: false,
        cursorDate: null,
        currentDate: null,
        calculatedTop: "initial",
        internalDate: null,
        shownMonth: {
          month: "Loading",
          dates: []
        },
        shownYear: {
          year: "Loading",
          months: []
        },
        shownYears: {
          range: "Loading",
          years: []
        }
      };
    },
    watch: {
      value: function value(newVal, oldVal) {
        if (!moment(newVal).isSame(this.internalDate)) {
          this.internalDate = moment(newVal);
          this.cursorDate = this.internalDate;
        }
      },
      start: function start(newVal, oldVal) {
        if (oldVal == null || !moment(newVal).isSame(oldVal)) {
          this.validateStartEnd();
        }
      },
      end: function end(newVal, oldVal) {
        if (oldVal == null || !moment(newVal).isSame(oldVal)) {
          this.validateStartEnd();
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      document.removeEventListener("click", this.handleClick, {
        passive: true
      });
    },
    mounted: function mounted() {
      Element.prototype.closestDatePicker = function (name) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;

        do {
          if (ancestor.getAttribute("data-datepicker") == name) return ancestor;
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);

        return null;
      };

      this.internalDate = moment(this.value);

      if (!this.internalDate.isValid()) {
        this.internalDate = null;
        this.cursorDate = moment();
      } else {
        this.cursorDate = this.internalDate.clone();
      }

      this.currentDate = moment();
      this.validateStartEnd();
      this.updateShownValues();
      document.addEventListener("click", this.handleClick, {
        passive: true
      });
    },
    props: {
      label: {
        type: String,
        default: "Select a date"
      },
      debug: {
        type: Boolean,
        default: false
      },
      textFlavor: {
        type: String,
        default: "Normal"
      },
      name: {
        type: String,
        required: true
      },
      defaultNow: {
        type: Boolean,
        default: true
      },
      start: {
        type: [Object, String, Date, moment],
        default: function _default() {
          return null;
        }
      },
      end: {
        type: [Object, String, Date, moment],
        default: function _default() {
          return null;
        }
      },
      disabledDates: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      value: {
        type: [Object, String, Date, moment],
        default: function _default() {
          return new Date();
        }
      }
    },
    computed: {
      computedStart: function computedStart() {
        if (this.start) {
          return moment(this.start);
        }

        return null;
      },
      computedEnd: function computedEnd() {
        if (this.end) {
          return moment(this.end);
        }

        return null;
      }
    },
    methods: {
      open: function open() {
        this.show = true;
        var self = this;
        var ref;

        if (this.selectingDay) {
          ref = "daypicker";
        } else if (this.selectingMonth) {
          ref = "monthpicker";
        } else if (this.selectingYear) {
          ref = "yearpicker";
        }

        this.$nextTick(function () {
          self.calculatedTop = self.calculateTop(ref);
          self.$forceUpdate();
        });
      },
      calculateTop: function calculateTop(ref) {
        var BUFFER = 20;

        if (this.$refs[ref]) {
          var totalHeightNeeded = this.$refs[ref].$el.getBoundingClientRect().bottom;

          if (totalHeightNeeded > window.innerHeight) {
            return "-".concat(this.$refs[ref].$el.scrollHeight - BUFFER, "px");
          }

          return "inherit";
        }

        return "inherit";
      },
      validateStartEnd: function validateStartEnd() {
        if (this.computedStart && this.computedEnd) {
          if (this.computedEnd.isBefore(this.computedStart)) {
            console.error("Datepicker ID: ".concat(this.name, " was passed an end date that comes before the passed start date. Start Date: ").concat(this.computedStart.format("YYYY-MM-DD"), ", End date: ").concat(this.computedEnd.format("YYYY-MM-DD")));
          }
        }
      },
      testDisabled: function testDisabled(d) {
        for (disabled in this.disabledDates) {
          if (moment(disabled).isSame(d)) {
            return true;
          }
        }

        if (this.computedStart) {
          if (d.isBefore(this.computedStart)) {
            return true;
          }
        }

        if (this.computedEnd) {
          if (d.isAfter(this.computedEnd)) {
            return true;
          }
        }

        return false;
      },
      close: function close() {
        this.show = false;
        this.selectingDay = true;
        this.selectingMonth = false;
        this.selectingYear = false;
      },
      handleClick: function handleClick(event) {
        if (event.target.getAttribute("data-datepicker") != this.name && !event.target.closestDatePicker(this.name)) {
          this.close();
        }
      },
      updateShownValues: function updateShownValues() {
        this.shownMonth = this.formatMonth(this.getsDayOfMonth(this.cursorDate));
        this.shownYear = {
          year: this.cursorDate.year(),
          months: [[{
            display: "JAN",
            value: 0
          }, {
            display: "FEB",
            value: 1
          }, {
            display: "MAR",
            value: 2
          }, {
            display: "APR",
            value: 3
          }], [{
            display: "MAY",
            value: 4
          }, {
            display: "JUN",
            value: 5
          }, {
            display: "JUL",
            value: 6
          }, {
            display: "AUG",
            value: 7
          }], [{
            display: "SEP",
            value: 8
          }, {
            display: "OCT",
            value: 9
          }, {
            display: "NOV",
            value: 10
          }, {
            display: "DEC",
            value: 11
          }]]
        };
        var rangeStart = Math.floor(this.cursorDate.year() / 10) * 10;
        var rangeEnd = Math.round(this.cursorDate.year() / 10) * 10;

        if (rangeStart == rangeEnd) {
          rangeEnd += 10;
        }

        var years = [[], [], []];
        var buffer = 0;

        for (var year = rangeStart; year <= rangeEnd; year++) {
          years[parseInt(buffer++ / 5)].push(year);
        }

        this.shownYears = {
          range: "".concat(rangeStart, " - ").concat(rangeEnd),
          years: years
        };
      },
      incrementCursorDate: function incrementCursorDate(amount, duration) {
        this.cursorDate.add(amount, duration);
        this.updateShownValues();
      },
      decrementCursorDate: function decrementCursorDate(amount, duration) {
        this.cursorDate.subtract(amount, duration);
        this.updateShownValues();
      },
      setInternalDate: function setInternalDate(day) {
        this.internalDate = day.clone();
        this.$emit("input", this.internalDate);
        this.close();
      },
      setCursorDate: function setCursorDate(value, time) {
        if (time == "day") {
          this.cursorDate = value.clone();
        } else if (time == "month") {
          this.cursorDate.month(value);
        } else if (time == "year") {
          this.cursorDate.year(value);
        }

        this.updateShownValues();
        this.$forceUpdate();
      },
      toggleYear: function toggleYear() {
        this.selectingDay = false;
        this.selectingMonth = false;
        this.selectingYear = true;
      },
      toggleMonth: function toggleMonth() {
        this.selectingDay = false;
        this.selectingMonth = true;
        this.selectingYear = false;
      },
      toggleDay: function toggleDay() {
        this.selectingDay = true;
        this.selectingMonth = false;
        this.selectingYear = false;
      },
      formatMonth: function formatMonth(days) {
        if (days[0].day() != 0) {
          var missedDate = days[0].clone().subtract(1, "d");

          while (missedDate.day() != SATURDAY) {
            days.unshift(missedDate.clone());
            missedDate.subtract(1, "d");
          }
        }

        if (days[days.length - 1].day() != SATURDAY) {
          var _missedDate = days[days.length - 1].clone().add(1, "d");

          while (_missedDate.day() != SUNDAY) {
            days.push(_missedDate.clone());

            _missedDate.add(1, "d");
          }
        }

        var formattedMonth = [];
        var week = [];

        var _iterator = _createForOfIteratorHelper(days),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var day = _step.value;

            if (day.day() == SATURDAY) {
              week.push(day);
              formattedMonth.push(week.slice());
              week = [];
            } else {
              week.push(day);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return {
          month: this.cursorDate.format("MMMM YYYY"),
          dates: formattedMonth.slice()
        };
      },
      getsDayOfMonth: function getsDayOfMonth(momentDate) {
        var daysBehind = [];
        var daysAhead = [];
        var previousDay = momentDate.clone().subtract(1, "d");

        while (previousDay.month() == momentDate.month()) {
          daysBehind.push(previousDay.clone());
          previousDay.subtract(1, "d");
        }

        daysBehind = daysBehind.reverse();
        var nextDay = momentDate.clone().add(1, "d");

        while (nextDay.month() == momentDate.month()) {
          daysAhead.push(nextDay.clone());
          nextDay.add(1, "d");
        }

        return [].concat(_toConsumableArray(daysBehind), [momentDate], daysAhead);
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
  const __vue_script__$2 = DatePicker;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "content-container",
      { ref: "content" },
      [
        _c("vue-input", {
          ref: "input",
          attrs: {
            label: _vm.label,
            "input-type": "Date",
            "label-flavor": _vm.textFlavor,
            name: _vm.name,
            value: _vm.internalDate ? _vm.internalDate.format("YYYY-MM-DD") : "",
            "data-datepicker": _vm.name
          },
          on: {
            focus: function($event) {
              return _vm.open()
            }
          }
        }),
        _vm._v(" "),
        _vm.selectingDay && (_vm.show || _vm.debug)
          ? _c(
              "date-picker-container",
              {
                ref: "daypicker",
                attrs: { "data-datepicker": _vm.name, top: _vm.calculatedTop }
              },
              [
                _c(
                  "selector-bar",
                  { attrs: { "data-datepicker": _vm.name } },
                  [
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.decrementCursorDate(1, "month")
                          }
                        }
                      },
                      [_vm._v("❮")]
                    ),
                    _vm._v(" "),
                    _c(
                      "month-picker",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: { click: _vm.toggleMonth }
                      },
                      [
                        _vm._v(
                          "\n        " + _vm._s(_vm.shownMonth.month) + "\n      "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.incrementCursorDate(1, "month")
                          }
                        }
                      },
                      [_vm._v("❯")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                  _vm.cursorDate
                    ? _c(
                        "tbody",
                        { attrs: { "data-datepicker": _vm.name } },
                        [
                          _c("tr", [
                            _c("td", [_vm._v("Su")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Mo")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Tu")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("We")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Th")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Fr")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Sa")])
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.shownMonth.dates, function(week, index) {
                            return _c(
                              "tr",
                              {
                                key: index,
                                attrs: { "data-datepicker": _vm.name }
                              },
                              _vm._l(week, function(day, dayIndex) {
                                return _c(
                                  "day",
                                  {
                                    key: dayIndex,
                                    attrs: {
                                      "data-datepicker": _vm.name,
                                      "in-month":
                                        day.month() == _vm.cursorDate.month() &&
                                        day.year() == _vm.cursorDate.year(),
                                      disabled: _vm.testDisabled(day),
                                      current:
                                        _vm.currentDate.month() == day.month() &&
                                        _vm.currentDate.year() == day.year() &&
                                        _vm.currentDate.date() == day.date(),
                                      active: _vm.internalDate
                                        ? _vm.internalDate.month() ==
                                            day.month() &&
                                          _vm.internalDate.year() == day.year() &&
                                          _vm.internalDate.date() == day.date()
                                        : false,
                                      role: "button",
                                      tabindex: "0"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.setCursorDate(day, "day");
                                        _vm.setInternalDate(day);
                                      },
                                      keyup: [
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
                                            return null
                                          }
                                          _vm.setCursorDate(day, "day");
                                          _vm.setInternalDate(day);
                                        },
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
                                            return null
                                          }
                                          _vm.setCursorDate(day, "day");
                                          _vm.setInternalDate(day);
                                        }
                                      ]
                                    }
                                  },
                                  [_vm._v(_vm._s(day.format("D")))]
                                )
                              }),
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "tr",
                            [
                              _c(
                                "day",
                                {
                                  attrs: {
                                    tabindex: "0",
                                    "in-month": true,
                                    disabled: _vm.testDisabled(_vm.currentDate),
                                    colspan: "7"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.setCursorDate(_vm.currentDate, "day");
                                      _vm.setInternalDate(_vm.currentDate);
                                    },
                                    keyup: [
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
                                          return null
                                        }
                                        _vm.setCursorDate(_vm.currentDate, "day");
                                        _vm.setInternalDate(_vm.currentDate);
                                      },
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
                                          return null
                                        }
                                        _vm.setCursorDate(_vm.currentDate, "day");
                                        _vm.setInternalDate(_vm.currentDate);
                                      }
                                    ]
                                  }
                                },
                                [_vm._v("Today")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          : _vm.selectingMonth && (_vm.show || _vm.debug)
          ? _c(
              "date-picker-container",
              { ref: "monthpicker", attrs: { "data-datepicker": _vm.name } },
              [
                _c(
                  "selector-bar",
                  { attrs: { "data-datepicker": _vm.name } },
                  [
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.decrementCursorDate(1, "year")
                          }
                        }
                      },
                      [_vm._v("❮")]
                    ),
                    _vm._v(" "),
                    _c(
                      "month-picker",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: { click: _vm.toggleYear }
                      },
                      [
                        _vm._v(
                          "\n        " + _vm._s(_vm.shownYear.year) + "\n      "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.incrementCursorDate(1, "year")
                          }
                        }
                      },
                      [_vm._v("❯")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                  _vm.cursorDate
                    ? _c(
                        "tbody",
                        { attrs: { "data-datepicker": _vm.name } },
                        _vm._l(_vm.shownYear.months, function(monthChunk, index) {
                          return _c(
                            "tr",
                            {
                              key: index,
                              attrs: { "data-datepicker": _vm.name }
                            },
                            _vm._l(monthChunk, function(month, monthIndex) {
                              return _c(
                                "month-or-year",
                                {
                                  key: monthIndex,
                                  attrs: {
                                    "data-datepicker": _vm.name,
                                    current:
                                      _vm.currentDate.month() == month.value &&
                                      _vm.currentDate.year() ==
                                        _vm.shownYear.year,
                                    active: _vm.internalDate
                                      ? _vm.internalDate.month() == month.value &&
                                        _vm.internalDate.year() ==
                                          _vm.shownYear.year
                                      : false,
                                    role: "button",
                                    tabindex: "0"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.setCursorDate(month.value, "month");
                                      _vm.toggleDay();
                                    },
                                    keyup: [
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
                                          return null
                                        }
                                        _vm.setCursorDate(month.value, "month");
                                        _vm.toggleDay();
                                      },
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
                                          return null
                                        }
                                        _vm.setCursorDate(month.value, "month");
                                        _vm.toggleDay();
                                      }
                                    ]
                                  }
                                },
                                [_vm._v(_vm._s(month.display))]
                              )
                            }),
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          : _vm.selectingYear && (_vm.show || _vm.debug)
          ? _c(
              "date-picker-container",
              { ref: "yearpicker", attrs: { "data-datepicker": _vm.name } },
              [
                _c(
                  "selector-bar",
                  { attrs: { "data-datepicker": _vm.name } },
                  [
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.decrementCursorDate(10, "year")
                          }
                        }
                      },
                      [_vm._v("❮")]
                    ),
                    _vm._v(" "),
                    _c(
                      "year-picker",
                      { attrs: { "data-datepicker": _vm.name } },
                      [
                        _vm._v(
                          "\n        " + _vm._s(_vm.shownYears.range) + "\n      "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "increment-decrement",
                      {
                        attrs: { "data-datepicker": _vm.name },
                        on: {
                          click: function($event) {
                            return _vm.incrementCursorDate(10, "year")
                          }
                        }
                      },
                      [_vm._v("❯")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("calendar", { attrs: { "data-datepicker": _vm.name } }, [
                  _vm.cursorDate
                    ? _c(
                        "tbody",
                        { attrs: { "data-datepicker": _vm.name } },
                        _vm._l(_vm.shownYears.years, function(yearChunk, index) {
                          return _c(
                            "tr",
                            {
                              key: index,
                              attrs: { "data-datepicker": _vm.name }
                            },
                            _vm._l(yearChunk, function(year, yearIndex) {
                              return _c(
                                "month-or-year",
                                {
                                  key: yearIndex,
                                  attrs: {
                                    "data-datepicker": _vm.name,
                                    current: _vm.currentDate.year() == year,
                                    active: _vm.internalDate
                                      ? _vm.internalDate.year() == year
                                      : false,
                                    role: "button",
                                    tabindex: "0",
                                    colspan: yearChunk.length == 5 ? 1 : 5
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.setCursorDate(year, "year");
                                      _vm.toggleMonth();
                                    },
                                    keyup: [
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
                                          return null
                                        }
                                        _vm.setCursorDate(year, "year");
                                        _vm.toggleMonth();
                                      },
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
                                          return null
                                        }
                                        _vm.setCursorDate(year, "year");
                                        _vm.toggleMonth();
                                      }
                                    ]
                                  }
                                },
                                [_vm._v(_vm._s(year))]
                              )
                            }),
                            1
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-4f3cec88_0", { source: "\ninput::-webkit-calendar-picker-indicator {\r\n  display: none;\n}\ninput[type=\"date\"]::-webkit-input-placeholder {\r\n  visibility: hidden !important;\n}\ninput[type=\"date\"]::-webkit-outer-spin-button,\r\ninput[type=\"date\"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\storybook\\src\\components\\DatePicker\\src\\DatePicker.vue"],"names":[],"mappings":";AAwvBA;EACA,aAAA;AACA;AACA;EACA,6BAAA;AACA;AACA;;EAEA,wBAAA;EACA,SAAA;AACA","file":"DatePicker.vue","sourcesContent":["<template>\r\n  <content-container ref=\"content\">\r\n    <vue-input\r\n      :label=\"label\"\r\n      input-type=\"Date\"\r\n      :label-flavor=\"textFlavor\"\r\n      :name=\"name\"\r\n      :value=\"internalDate ? internalDate.format('YYYY-MM-DD') : ''\"\r\n      @focus=\"open()\"\r\n      ref=\"input\"\r\n      :data-datepicker=\"name\"\r\n    ></vue-input>\r\n    <date-picker-container\r\n      :data-datepicker=\"name\"\r\n      v-if=\"selectingDay && (show || debug)\"\r\n      ref=\"daypicker\"\r\n      :top=\"calculatedTop\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(1, 'month')\"\r\n        >&#10094;</increment-decrement>\r\n        <month-picker :data-datepicker=\"name\" @click=\"toggleMonth\">\r\n          {{\r\n          shownMonth.month\r\n          }}\r\n        </month-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(1, 'month')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr>\r\n            <td>Su</td>\r\n            <td>Mo</td>\r\n            <td>Tu</td>\r\n            <td>We</td>\r\n            <td>Th</td>\r\n            <td>Fr</td>\r\n            <td>Sa</td>\r\n          </tr>\r\n          <tr :data-datepicker=\"name\" v-for=\"(week, index) in shownMonth.dates\" :key=\"index\">\r\n            <day\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(day, dayIndex) in week\"\r\n              :in-month=\"\r\n                day.month() == cursorDate.month() &&\r\n                  day.year() == cursorDate.year()\r\n              \"\r\n              :disabled=\"testDisabled(day)\"\r\n              @click=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(day, 'day');\r\n                setInternalDate(day);\r\n              \"\r\n              :current=\"\r\n                currentDate.month() == day.month() &&\r\n                  currentDate.year() == day.year() &&\r\n                  currentDate.date() == day.date()\r\n              \"\r\n              :active=\"\r\n                internalDate\r\n                  ? internalDate.month() == day.month() &&\r\n                    internalDate.year() == day.year() &&\r\n                    internalDate.date() == day.date()\r\n                  : false\r\n              \"\r\n              :key=\"dayIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n            >{{ day.format(\"D\") }}</day>\r\n          </tr>\r\n          <tr>\r\n            <day\r\n              tabindex=\"0\"\r\n              @click=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(currentDate, 'day');\r\n                setInternalDate(currentDate);\r\n              \"\r\n              :in-month=\"true\"\r\n              :disabled=\"testDisabled(currentDate)\"\r\n              colspan=\"7\"\r\n            >Today</day>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n    <date-picker-container\r\n      ref=\"monthpicker\"\r\n      :data-datepicker=\"name\"\r\n      v-else-if=\"selectingMonth && (show || debug)\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(1, 'year')\"\r\n        >&#10094;</increment-decrement>\r\n        <month-picker :data-datepicker=\"name\" @click=\"toggleYear\">\r\n          {{\r\n          shownYear.year\r\n          }}\r\n        </month-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(1, 'year')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr :data-datepicker=\"name\" v-for=\"(monthChunk, index) in shownYear.months\" :key=\"index\">\r\n            <month-or-year\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(month, monthIndex) in monthChunk\"\r\n              :current=\"\r\n                currentDate.month() == month.value &&\r\n                  currentDate.year() == shownYear.year\r\n              \"\r\n              :active=\"\r\n                internalDate\r\n                  ? internalDate.month() == month.value &&\r\n                    internalDate.year() == shownYear.year\r\n                  : false\r\n              \"\r\n              :key=\"monthIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n              @click=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(month.value, 'month');\r\n                toggleDay();\r\n              \"\r\n            >{{ month.display }}</month-or-year>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n    <date-picker-container\r\n      :data-datepicker=\"name\"\r\n      v-else-if=\"selectingYear && (show || debug)\"\r\n      ref=\"yearpicker\"\r\n    >\r\n      <selector-bar :data-datepicker=\"name\">\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"decrementCursorDate(10, 'year')\"\r\n        >&#10094;</increment-decrement>\r\n        <year-picker :data-datepicker=\"name\">\r\n          {{\r\n          shownYears.range\r\n          }}\r\n        </year-picker>\r\n        <increment-decrement\r\n          :data-datepicker=\"name\"\r\n          @click=\"incrementCursorDate(10, 'year')\"\r\n        >&#10095;</increment-decrement>\r\n      </selector-bar>\r\n      <calendar :data-datepicker=\"name\">\r\n        <tbody :data-datepicker=\"name\" v-if=\"cursorDate\">\r\n          <tr :data-datepicker=\"name\" v-for=\"(yearChunk, index) in shownYears.years\" :key=\"index\">\r\n            <month-or-year\r\n              :data-datepicker=\"name\"\r\n              v-for=\"(year, yearIndex) in yearChunk\"\r\n              :current=\"currentDate.year() == year\"\r\n              :active=\"internalDate ? internalDate.year() == year : false\"\r\n              :key=\"yearIndex\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n              :colspan=\"yearChunk.length == 5 ? 1 : 5\"\r\n              @click=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n              @keyup.space=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n              @keyup.enter=\"\r\n                setCursorDate(year, 'year');\r\n                toggleMonth();\r\n              \"\r\n            >{{ year }}</month-or-year>\r\n          </tr>\r\n        </tbody>\r\n      </calendar>\r\n    </date-picker-container>\r\n  </content-container>\r\n</template>\r\n\r\n<script>\r\nimport moment from \"moment\";\r\nimport styled from \"vue-styled-components\";\r\nimport { VueInput } from \"@IntusFacultas/input\";\r\nimport Theme from \"@IntusFacultas/design-system\";\r\nconst SATURDAY = 6;\r\nconst SUNDAY = 0;\r\nconst props = {\r\n  active: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  disabled: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  inMonth: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  current: {\r\n    type: Boolean,\r\n    default: false\r\n  },\r\n  top: {\r\n    type: String,\r\n    default: \"inherit\"\r\n  },\r\n  defaultTheme: {\r\n    type: Object,\r\n    default() {\r\n      return Theme;\r\n    }\r\n  }\r\n};\r\nconst SelectorBar = styled.div`\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: 100%;\r\n  & * {\r\n    font-size: 16px;\r\n  }\r\n`;\r\nconst MonthPicker = styled.button`\r\n  background-color: white;\r\n  width:240px\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  padding: 4px 0px;\r\n  &:hover {\r\n    background-color: #eee;\r\n  }\r\n  transition: color .1s ease-in-out,\r\n            background-color .1s ease-in-out,\r\n            border-color .1s ease-in-out,\r\n            box-shadow .1s ease-in-out;\r\n`;\r\nconst YearPicker = styled.span`\r\n  background-color: white;\r\n  width:240px\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  padding: 4px 0px;\r\n`;\r\nconst IncrementDecrement = styled.button`\r\n  background-color: white;\r\n  border: 1px solid white;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  padding: 4px 16px;\r\n  &:hover {\r\n    background-color: #eee;\r\n  }\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n`;\r\nconst ContentContainer = styled.div`\r\n  position: relative;\r\n`;\r\nconst DatePickerContainer = styled(\"div\", props)`\r\n  width: 280px;\r\n  position: absolute;\r\n  padding: 10px 10px;\r\n  border-radius: 4px;\r\n  background-color: white;\r\n  top: ${props => props.top};\r\n  & * {\r\n    font-family: \"Open Sans Regular\", -apple-system, BlinkMacSystemFont,\r\n      \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif,\r\n      \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    user-select: none;\r\n  }\r\n  z-index: 1000;\r\n  box-shadow: 0px 8px 8px 2px #e4e4e4;\r\n`;\r\nconst MonthOrYear = styled(\"td\", props)`\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n        color: ${props.defaultTheme.Primary.color.color}\r\n        background-color: ${props.defaultTheme.Primary.background.color}\r\n        &:hover {\r\n          background-color: ${props.defaultTheme.Primary.background.hover};\r\n        }\r\n      `\r\n      : props.current\r\n      ? `\r\n        background-color: #ddd;\r\n        &:hover {\r\n          background-color: #eee;\r\n        }\r\n      `\r\n      : `\r\n  &:hover {\r\n    background-color: #eee;\r\n  }`}\r\n  padding: 5px 10px;\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n`;\r\nconst Day = styled(\"td\", props)`\r\n  ${props => (props.inMonth ? `` : `color: #b8b8b8;`)}\r\n  ${props =>\r\n    props.active\r\n      ? `\r\n        color: ${props.defaultTheme.Primary.color.color}\r\n        background-color: ${props.defaultTheme.Primary.background.color}\r\n        &:hover {\r\n          background-color: ${props.defaultTheme.Primary.background.hover};\r\n        }\r\n      `\r\n      : props.current\r\n      ? `\r\n        background-color: #ddd;\r\n        &:hover {\r\n          background-color: #eee;\r\n        }\r\n      `\r\n      : `\r\n  &:hover {\r\n    background-color: #eee;\r\n  }`}\r\n  cursor: pointer;\r\n  ${props =>\r\n    props.disabled\r\n      ? `pointer-events: none; color: #f0f0f0; cursor: not-allowed;`\r\n      : ``}\r\n  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,\r\n    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;\r\n  border-radius: 4px;\r\n`;\r\nconst Calendar = styled.table`\r\n  width: 100%;\r\n  text-align: center;\r\n`;\r\nexport const DatePicker = {\r\n  components: {\r\n    VueInput,\r\n    DatePickerContainer,\r\n    IncrementDecrement,\r\n    MonthPicker,\r\n    SelectorBar,\r\n    Calendar,\r\n    Day,\r\n    MonthOrYear,\r\n    YearPicker,\r\n    ContentContainer\r\n  },\r\n  data() {\r\n    return {\r\n      show: false,\r\n      selectingDay: true,\r\n      selectingMonth: false,\r\n      selectingYear: false,\r\n      cursorDate: null,\r\n      currentDate: null,\r\n      calculatedTop: \"initial\",\r\n      internalDate: null,\r\n      shownMonth: {\r\n        month: \"Loading\",\r\n        dates: []\r\n      },\r\n      shownYear: {\r\n        year: \"Loading\",\r\n        months: []\r\n      },\r\n      shownYears: {\r\n        range: \"Loading\",\r\n        years: []\r\n      }\r\n    };\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      if (!moment(newVal).isSame(this.internalDate)) {\r\n        this.internalDate = moment(newVal);\r\n        this.cursorDate = this.internalDate;\r\n      }\r\n    },\r\n    start(newVal, oldVal) {\r\n      if (oldVal == null || !moment(newVal).isSame(oldVal)) {\r\n        this.validateStartEnd();\r\n      }\r\n    },\r\n    end(newVal, oldVal) {\r\n      if (oldVal == null || !moment(newVal).isSame(oldVal)) {\r\n        this.validateStartEnd();\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy() {\r\n    document.removeEventListener(\"click\", this.handleClick, { passive: true });\r\n  },\r\n  mounted() {\r\n    Element.prototype.closestDatePicker = function(name) {\r\n      var el = this;\r\n      var ancestor = this;\r\n      if (!document.documentElement.contains(el)) return null;\r\n      do {\r\n        if (ancestor.getAttribute(\"data-datepicker\") == name) return ancestor;\r\n        ancestor = ancestor.parentElement;\r\n      } while (ancestor !== null);\r\n      return null;\r\n    };\r\n    this.internalDate = moment(this.value);\r\n    if (!this.internalDate.isValid()) {\r\n      this.internalDate = null;\r\n      this.cursorDate = moment();\r\n    } else {\r\n      this.cursorDate = this.internalDate.clone();\r\n    }\r\n    this.currentDate = moment();\r\n    this.validateStartEnd();\r\n    this.updateShownValues();\r\n    document.addEventListener(\"click\", this.handleClick, { passive: true });\r\n  },\r\n  props: {\r\n    label: {\r\n      type: String,\r\n      default: \"Select a date\"\r\n    },\r\n    debug: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    textFlavor: {\r\n      type: String,\r\n      default: \"Normal\"\r\n    },\r\n    name: {\r\n      type: String,\r\n      required: true\r\n    },\r\n    defaultNow: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    start: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return null;\r\n      }\r\n    },\r\n    end: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return null;\r\n      }\r\n    },\r\n    disabledDates: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      }\r\n    },\r\n    value: {\r\n      type: [Object, String, Date, moment],\r\n      default() {\r\n        return new Date();\r\n      }\r\n    }\r\n  },\r\n  computed: {\r\n    computedStart() {\r\n      if (this.start) {\r\n        return moment(this.start);\r\n      }\r\n      return null;\r\n    },\r\n    computedEnd() {\r\n      if (this.end) {\r\n        return moment(this.end);\r\n      }\r\n      return null;\r\n    }\r\n  },\r\n  methods: {\r\n    open() {\r\n      this.show = true;\r\n      let self = this;\r\n      let ref;\r\n      if (this.selectingDay) {\r\n        ref = \"daypicker\";\r\n      } else if (this.selectingMonth) {\r\n        ref = \"monthpicker\";\r\n      } else if (this.selectingYear) {\r\n        ref = \"yearpicker\";\r\n      }\r\n\r\n      this.$nextTick(() => {\r\n        self.calculatedTop = self.calculateTop(ref);\r\n        self.$forceUpdate();\r\n      });\r\n    },\r\n    calculateTop(ref) {\r\n      const BUFFER = 20;\r\n      if (this.$refs[ref]) {\r\n        let totalHeightNeeded = this.$refs[ref].$el.getBoundingClientRect()\r\n          .bottom;\r\n        if (totalHeightNeeded > window.innerHeight) {\r\n          return `-${this.$refs[ref].$el.scrollHeight - BUFFER}px`;\r\n        }\r\n        return \"inherit\";\r\n      }\r\n      return \"inherit\";\r\n    },\r\n    validateStartEnd() {\r\n      if (this.computedStart && this.computedEnd) {\r\n        if (this.computedEnd.isBefore(this.computedStart)) {\r\n          console.error(\r\n            `Datepicker ID: ${\r\n              this.name\r\n            } was passed an end date that comes before the passed start date. Start Date: ${this.computedStart.format(\r\n              \"YYYY-MM-DD\"\r\n            )}, End date: ${this.computedEnd.format(\"YYYY-MM-DD\")}`\r\n          );\r\n        }\r\n      }\r\n    },\r\n    testDisabled(d) {\r\n      for (disabled in this.disabledDates) {\r\n        if (moment(disabled).isSame(d)) {\r\n          return true;\r\n        }\r\n      }\r\n      if (this.computedStart) {\r\n        if (d.isBefore(this.computedStart)) {\r\n          return true;\r\n        }\r\n      }\r\n      if (this.computedEnd) {\r\n        if (d.isAfter(this.computedEnd)) {\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    },\r\n    close() {\r\n      this.show = false;\r\n      this.selectingDay = true;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = false;\r\n    },\r\n    handleClick(event) {\r\n      if (\r\n        event.target.getAttribute(\"data-datepicker\") != this.name &&\r\n        !event.target.closestDatePicker(this.name)\r\n      ) {\r\n        this.close();\r\n      }\r\n    },\r\n    updateShownValues() {\r\n      this.shownMonth = this.formatMonth(this.getsDayOfMonth(this.cursorDate));\r\n      this.shownYear = {\r\n        year: this.cursorDate.year(),\r\n        months: [\r\n          [\r\n            {\r\n              display: \"JAN\",\r\n              value: 0\r\n            },\r\n            {\r\n              display: \"FEB\",\r\n              value: 1\r\n            },\r\n            {\r\n              display: \"MAR\",\r\n              value: 2\r\n            },\r\n            {\r\n              display: \"APR\",\r\n              value: 3\r\n            }\r\n          ],\r\n          [\r\n            {\r\n              display: \"MAY\",\r\n              value: 4\r\n            },\r\n            {\r\n              display: \"JUN\",\r\n              value: 5\r\n            },\r\n            {\r\n              display: \"JUL\",\r\n              value: 6\r\n            },\r\n            {\r\n              display: \"AUG\",\r\n              value: 7\r\n            }\r\n          ],\r\n          [\r\n            {\r\n              display: \"SEP\",\r\n              value: 8\r\n            },\r\n            {\r\n              display: \"OCT\",\r\n              value: 9\r\n            },\r\n            {\r\n              display: \"NOV\",\r\n              value: 10\r\n            },\r\n            {\r\n              display: \"DEC\",\r\n              value: 11\r\n            }\r\n          ]\r\n        ]\r\n      };\r\n      let rangeStart = Math.floor(this.cursorDate.year() / 10) * 10;\r\n      let rangeEnd = Math.round(this.cursorDate.year() / 10) * 10;\r\n      if (rangeStart == rangeEnd) {\r\n        rangeEnd += 10;\r\n      }\r\n      let years = [[], [], []];\r\n      let buffer = 0;\r\n      for (let year = rangeStart; year <= rangeEnd; year++) {\r\n        years[parseInt(buffer++ / 5)].push(year);\r\n      }\r\n      this.shownYears = {\r\n        range: `${rangeStart} - ${rangeEnd}`,\r\n        years\r\n      };\r\n    },\r\n    incrementCursorDate(amount, duration) {\r\n      this.cursorDate.add(amount, duration);\r\n      this.updateShownValues();\r\n    },\r\n    decrementCursorDate(amount, duration) {\r\n      this.cursorDate.subtract(amount, duration);\r\n      this.updateShownValues();\r\n    },\r\n    setInternalDate(day) {\r\n      this.internalDate = day.clone();\r\n      this.$emit(\"input\", this.internalDate);\r\n      this.close();\r\n    },\r\n    setCursorDate(value, time) {\r\n      if (time == \"day\") {\r\n        this.cursorDate = value.clone();\r\n      } else if (time == \"month\") {\r\n        this.cursorDate.month(value);\r\n      } else if (time == \"year\") {\r\n        this.cursorDate.year(value);\r\n      }\r\n      this.updateShownValues();\r\n      this.$forceUpdate();\r\n    },\r\n    toggleYear() {\r\n      this.selectingDay = false;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = true;\r\n    },\r\n    toggleMonth() {\r\n      this.selectingDay = false;\r\n      this.selectingMonth = true;\r\n      this.selectingYear = false;\r\n    },\r\n    toggleDay() {\r\n      this.selectingDay = true;\r\n      this.selectingMonth = false;\r\n      this.selectingYear = false;\r\n    },\r\n    formatMonth(days) {\r\n      if (days[0].day() != 0) {\r\n        let missedDate = days[0].clone().subtract(1, \"d\");\r\n        while (missedDate.day() != SATURDAY) {\r\n          days.unshift(missedDate.clone());\r\n          missedDate.subtract(1, \"d\");\r\n        }\r\n      }\r\n\r\n      if (days[days.length - 1].day() != SATURDAY) {\r\n        let missedDate = days[days.length - 1].clone().add(1, \"d\");\r\n        while (missedDate.day() != SUNDAY) {\r\n          days.push(missedDate.clone());\r\n          missedDate.add(1, \"d\");\r\n        }\r\n      }\r\n      let formattedMonth = [];\r\n      let week = [];\r\n      for (let day of days) {\r\n        if (day.day() == SATURDAY) {\r\n          week.push(day);\r\n          formattedMonth.push(week.slice());\r\n          week = [];\r\n        } else {\r\n          week.push(day);\r\n        }\r\n      }\r\n      return {\r\n        month: this.cursorDate.format(\"MMMM YYYY\"),\r\n        dates: formattedMonth.slice()\r\n      };\r\n    },\r\n    getsDayOfMonth(momentDate) {\r\n      let daysBehind = [];\r\n      let daysAhead = [];\r\n      let previousDay = momentDate.clone().subtract(1, \"d\");\r\n      while (previousDay.month() == momentDate.month()) {\r\n        daysBehind.push(previousDay.clone());\r\n        previousDay.subtract(1, \"d\");\r\n      }\r\n      daysBehind = daysBehind.reverse();\r\n      let nextDay = momentDate.clone().add(1, \"d\");\r\n      while (nextDay.month() == momentDate.month()) {\r\n        daysAhead.push(nextDay.clone());\r\n        nextDay.add(1, \"d\");\r\n      }\r\n      return [...daysBehind, momentDate, ...daysAhead];\r\n    }\r\n  }\r\n};\r\nexport default DatePicker;\r\n</script>\r\n\r\n<style>\r\ninput::-webkit-calendar-picker-indicator {\r\n  display: none;\r\n}\r\ninput[type=\"date\"]::-webkit-input-placeholder {\r\n  visibility: hidden !important;\r\n}\r\ninput[type=\"date\"]::-webkit-outer-spin-button,\r\ninput[type=\"date\"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n</style>\r\n"]}, media: undefined });

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

  // Import vue component

  var install = function installDatePicker(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("DatePicker", __vue_component__$2);
  }; // Create module definition for Vue.use()


  var plugin = {
    install: install
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
    GlobalVue$2.use(plugin);
  } // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()


  __vue_component__$2.install = install; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  return __vue_component__$2;

}());
//# sourceMappingURL=DatePicker.iife.js.map
