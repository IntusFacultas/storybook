var MapFilter = (function (exports) {
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

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  // https://github.com/ariutta/svg-pan-zoom

  (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof commonjsRequire == "function" && commonjsRequire;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof commonjsRequire == "function" && commonjsRequire;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  })({
    1: [function (require, module, exports) {
      var svgPanZoom = require('./svg-pan-zoom.js'); // UMD module definition


      (function (window, document) {
        // AMD
        if (typeof module !== 'undefined' && module.exports) {
          module.exports = svgPanZoom; // Browser
          // Keep exporting globally as module.exports is available because of browserify

          window.svgPanZoom = svgPanZoom;
        }
      })(window);
    }, {
      "./svg-pan-zoom.js": 4
    }],
    2: [function (require, module, exports) {
      var SvgUtils = require('./svg-utilities');

      module.exports = {
        enable: function enable(instance) {
          // Select (and create if necessary) defs
          var defs = instance.svg.querySelector('defs');

          if (!defs) {
            defs = document.createElementNS(SvgUtils.svgNS, 'defs');
            instance.svg.appendChild(defs);
          } // Check for style element, and create it if it doesn't exist


          var styleEl = defs.querySelector('style#svg-pan-zoom-controls-styles');

          if (!styleEl) {
            var style = document.createElementNS(SvgUtils.svgNS, 'style');
            style.setAttribute('id', 'svg-pan-zoom-controls-styles');
            style.setAttribute('type', 'text/css');
            style.textContent = '.svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }';
            defs.appendChild(style);
          } // Zoom Group


          var zoomGroup = document.createElementNS(SvgUtils.svgNS, 'g');
          zoomGroup.setAttribute('id', 'svg-pan-zoom-controls');
          zoomGroup.setAttribute('transform', 'translate(' + (instance.width - 70) + ' ' + (instance.height - 76) + ') scale(0.75)');
          zoomGroup.setAttribute('class', 'svg-pan-zoom-control'); // Control elements

          zoomGroup.appendChild(this._createZoomIn(instance));
          zoomGroup.appendChild(this._createZoomReset(instance));
          zoomGroup.appendChild(this._createZoomOut(instance)); // Finally append created element

          instance.svg.appendChild(zoomGroup); // Cache control instance

          instance.controlIcons = zoomGroup;
        },
        _createZoomIn: function _createZoomIn(instance) {
          var zoomIn = document.createElementNS(SvgUtils.svgNS, 'g');
          zoomIn.setAttribute('id', 'svg-pan-zoom-zoom-in');
          zoomIn.setAttribute('transform', 'translate(30.5 5) scale(0.015)');
          zoomIn.setAttribute('class', 'svg-pan-zoom-control');
          zoomIn.addEventListener('click', function () {
            instance.getPublicInstance().zoomIn();
          }, false);
          zoomIn.addEventListener('touchstart', function () {
            instance.getPublicInstance().zoomIn();
          }, false);
          var zoomInBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier

          zoomInBackground.setAttribute('x', '0');
          zoomInBackground.setAttribute('y', '0');
          zoomInBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down

          zoomInBackground.setAttribute('height', '1400');
          zoomInBackground.setAttribute('class', 'svg-pan-zoom-control-background');
          zoomIn.appendChild(zoomInBackground);
          var zoomInShape = document.createElementNS(SvgUtils.svgNS, 'path');
          zoomInShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z');
          zoomInShape.setAttribute('class', 'svg-pan-zoom-control-element');
          zoomIn.appendChild(zoomInShape);
          return zoomIn;
        },
        _createZoomReset: function _createZoomReset(instance) {
          // reset
          var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, 'g');
          resetPanZoomControl.setAttribute('id', 'svg-pan-zoom-reset-pan-zoom');
          resetPanZoomControl.setAttribute('transform', 'translate(5 35) scale(0.4)');
          resetPanZoomControl.setAttribute('class', 'svg-pan-zoom-control');
          resetPanZoomControl.addEventListener('click', function () {
            instance.getPublicInstance().reset();
          }, false);
          resetPanZoomControl.addEventListener('touchstart', function () {
            instance.getPublicInstance().reset();
          }, false);
          var resetPanZoomControlBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier

          resetPanZoomControlBackground.setAttribute('x', '2');
          resetPanZoomControlBackground.setAttribute('y', '2');
          resetPanZoomControlBackground.setAttribute('width', '182'); // larger than expected because the whole group is transformed to scale down

          resetPanZoomControlBackground.setAttribute('height', '58');
          resetPanZoomControlBackground.setAttribute('class', 'svg-pan-zoom-control-background');
          resetPanZoomControl.appendChild(resetPanZoomControlBackground);
          var resetPanZoomControlShape1 = document.createElementNS(SvgUtils.svgNS, 'path');
          resetPanZoomControlShape1.setAttribute('d', 'M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z');
          resetPanZoomControlShape1.setAttribute('class', 'svg-pan-zoom-control-element');
          resetPanZoomControl.appendChild(resetPanZoomControlShape1);
          var resetPanZoomControlShape2 = document.createElementNS(SvgUtils.svgNS, 'path');
          resetPanZoomControlShape2.setAttribute('d', 'M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z');
          resetPanZoomControlShape2.setAttribute('class', 'svg-pan-zoom-control-element');
          resetPanZoomControl.appendChild(resetPanZoomControlShape2);
          return resetPanZoomControl;
        },
        _createZoomOut: function _createZoomOut(instance) {
          // zoom out
          var zoomOut = document.createElementNS(SvgUtils.svgNS, 'g');
          zoomOut.setAttribute('id', 'svg-pan-zoom-zoom-out');
          zoomOut.setAttribute('transform', 'translate(30.5 70) scale(0.015)');
          zoomOut.setAttribute('class', 'svg-pan-zoom-control');
          zoomOut.addEventListener('click', function () {
            instance.getPublicInstance().zoomOut();
          }, false);
          zoomOut.addEventListener('touchstart', function () {
            instance.getPublicInstance().zoomOut();
          }, false);
          var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier

          zoomOutBackground.setAttribute('x', '0');
          zoomOutBackground.setAttribute('y', '0');
          zoomOutBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down

          zoomOutBackground.setAttribute('height', '1400');
          zoomOutBackground.setAttribute('class', 'svg-pan-zoom-control-background');
          zoomOut.appendChild(zoomOutBackground);
          var zoomOutShape = document.createElementNS(SvgUtils.svgNS, 'path');
          zoomOutShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z');
          zoomOutShape.setAttribute('class', 'svg-pan-zoom-control-element');
          zoomOut.appendChild(zoomOutShape);
          return zoomOut;
        },
        disable: function disable(instance) {
          if (instance.controlIcons) {
            instance.controlIcons.parentNode.removeChild(instance.controlIcons);
            instance.controlIcons = null;
          }
        }
      };
    }, {
      "./svg-utilities": 5
    }],
    3: [function (require, module, exports) {
      var SvgUtils = require('./svg-utilities'),
          Utils = require('./utilities');

      var ShadowViewport = function ShadowViewport(viewport, options) {
        this.init(viewport, options);
      };
      /**
       * Initialization
       *
       * @param  {SVGElement} viewport
       * @param  {Object} options
       */


      ShadowViewport.prototype.init = function (viewport, options) {
        // DOM Elements
        this.viewport = viewport;
        this.options = options; // State cache

        this.originalState = {
          zoom: 1,
          x: 0,
          y: 0
        };
        this.activeState = {
          zoom: 1,
          x: 0,
          y: 0
        };
        this.updateCTMCached = Utils.proxy(this.updateCTM, this); // Create a custom requestAnimationFrame taking in account refreshRate

        this.requestAnimationFrame = Utils.createRequestAnimationFrame(this.options.refreshRate); // ViewBox

        this.viewBox = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        this.cacheViewBox(); // Process CTM

        var newCTM = this.processCTM(); // Update viewport CTM and cache zoom and pan

        this.setCTM(newCTM); // Update CTM in this frame

        this.updateCTM();
      };
      /**
       * Cache initial viewBox value
       * If no viewBox is defined, then use viewport size/position instead for viewBox values
       */


      ShadowViewport.prototype.cacheViewBox = function () {
        var svgViewBox = this.options.svg.getAttribute('viewBox');

        if (svgViewBox) {
          var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function (v) {
            return v;
          }).map(parseFloat); // Cache viewbox x and y offset

          this.viewBox.x = viewBoxValues[0];
          this.viewBox.y = viewBoxValues[1];
          this.viewBox.width = viewBoxValues[2];
          this.viewBox.height = viewBoxValues[3];
          var zoom = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height); // Update active state

          this.activeState.zoom = zoom;
          this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2;
          this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2; // Force updating CTM

          this.updateCTMOnNextFrame();
          this.options.svg.removeAttribute('viewBox');
        } else {
          this.simpleViewBoxCache();
        }
      };
      /**
       * Recalculate viewport sizes and update viewBox cache
       */


      ShadowViewport.prototype.simpleViewBoxCache = function () {
        var bBox = this.viewport.getBBox();
        this.viewBox.x = bBox.x;
        this.viewBox.y = bBox.y;
        this.viewBox.width = bBox.width;
        this.viewBox.height = bBox.height;
      };
      /**
       * Returns a viewbox object. Safe to alter
       *
       * @return {Object} viewbox object
       */


      ShadowViewport.prototype.getViewBox = function () {
        return Utils.extend({}, this.viewBox);
      };
      /**
       * Get initial zoom and pan values. Save them into originalState
       * Parses viewBox attribute to alter initial sizes
       *
       * @return {CTM} CTM object based on options
       */


      ShadowViewport.prototype.processCTM = function () {
        var newCTM = this.getCTM();

        if (this.options.fit || this.options.contain) {
          var newScale;

          if (this.options.fit) {
            newScale = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
          } else {
            newScale = Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
          }

          newCTM.a = newScale; //x-scale

          newCTM.d = newScale; //y-scale

          newCTM.e = -this.viewBox.x * newScale; //x-transform

          newCTM.f = -this.viewBox.y * newScale; //y-transform
        }

        if (this.options.center) {
          var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5,
              offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5;
          newCTM.e = offsetX;
          newCTM.f = offsetY;
        } // Cache initial values. Based on activeState and fix+center opitons


        this.originalState.zoom = newCTM.a;
        this.originalState.x = newCTM.e;
        this.originalState.y = newCTM.f;
        return newCTM;
      };
      /**
       * Return originalState object. Safe to alter
       *
       * @return {Object}
       */


      ShadowViewport.prototype.getOriginalState = function () {
        return Utils.extend({}, this.originalState);
      };
      /**
       * Return actualState object. Safe to alter
       *
       * @return {Object}
       */


      ShadowViewport.prototype.getState = function () {
        return Utils.extend({}, this.activeState);
      };
      /**
       * Get zoom scale
       *
       * @return {Float} zoom scale
       */


      ShadowViewport.prototype.getZoom = function () {
        return this.activeState.zoom;
      };
      /**
       * Get zoom scale for pubilc usage
       *
       * @return {Float} zoom scale
       */


      ShadowViewport.prototype.getRelativeZoom = function () {
        return this.activeState.zoom / this.originalState.zoom;
      };
      /**
       * Compute zoom scale for pubilc usage
       *
       * @return {Float} zoom scale
       */


      ShadowViewport.prototype.computeRelativeZoom = function (scale) {
        return scale / this.originalState.zoom;
      };
      /**
       * Get pan
       *
       * @return {Object}
       */


      ShadowViewport.prototype.getPan = function () {
        return {
          x: this.activeState.x,
          y: this.activeState.y
        };
      };
      /**
       * Return cached viewport CTM value that can be safely modified
       *
       * @return {SVGMatrix}
       */


      ShadowViewport.prototype.getCTM = function () {
        var safeCTM = this.options.svg.createSVGMatrix(); // Copy values manually as in FF they are not itterable

        safeCTM.a = this.activeState.zoom;
        safeCTM.b = 0;
        safeCTM.c = 0;
        safeCTM.d = this.activeState.zoom;
        safeCTM.e = this.activeState.x;
        safeCTM.f = this.activeState.y;
        return safeCTM;
      };
      /**
       * Set a new CTM
       *
       * @param {SVGMatrix} newCTM
       */


      ShadowViewport.prototype.setCTM = function (newCTM) {
        var willZoom = this.isZoomDifferent(newCTM),
            willPan = this.isPanDifferent(newCTM);

        if (willZoom || willPan) {
          // Before zoom
          if (willZoom) {
            // If returns false then cancel zooming
            if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(newCTM.a)) === false) {
              newCTM.a = newCTM.d = this.activeState.zoom;
              willZoom = false;
            } else {
              this.updateCache(newCTM);
              this.options.onZoom(this.getRelativeZoom());
            }
          } // Before pan


          if (willPan) {
            var preventPan = this.options.beforePan(this.getPan(), {
              x: newCTM.e,
              y: newCTM.f
            }) // If prevent pan is an object
            ,
                preventPanX = false,
                preventPanY = false; // If prevent pan is Boolean false

            if (preventPan === false) {
              // Set x and y same as before
              newCTM.e = this.getPan().x;
              newCTM.f = this.getPan().y;
              preventPanX = preventPanY = true;
            } else if (Utils.isObject(preventPan)) {
              // Check for X axes attribute
              if (preventPan.x === false) {
                // Prevent panning on x axes
                newCTM.e = this.getPan().x;
                preventPanX = true;
              } else if (Utils.isNumber(preventPan.x)) {
                // Set a custom pan value
                newCTM.e = preventPan.x;
              } // Check for Y axes attribute


              if (preventPan.y === false) {
                // Prevent panning on x axes
                newCTM.f = this.getPan().y;
                preventPanY = true;
              } else if (Utils.isNumber(preventPan.y)) {
                // Set a custom pan value
                newCTM.f = preventPan.y;
              }
            } // Update willPan flag
            // Check if newCTM is still different


            if (preventPanX && preventPanY || !this.isPanDifferent(newCTM)) {
              willPan = false;
            } else {
              this.updateCache(newCTM);
              this.options.onPan(this.getPan());
            }
          } // Check again if should zoom or pan


          if (willZoom || willPan) {
            this.updateCTMOnNextFrame();
          }
        }
      };

      ShadowViewport.prototype.isZoomDifferent = function (newCTM) {
        return this.activeState.zoom !== newCTM.a;
      };

      ShadowViewport.prototype.isPanDifferent = function (newCTM) {
        return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f;
      };
      /**
       * Update cached CTM and active state
       *
       * @param {SVGMatrix} newCTM
       */


      ShadowViewport.prototype.updateCache = function (newCTM) {
        this.activeState.zoom = newCTM.a;
        this.activeState.x = newCTM.e;
        this.activeState.y = newCTM.f;
      };

      ShadowViewport.prototype.pendingUpdate = false;
      /**
       * Place a request to update CTM on next Frame
       */

      ShadowViewport.prototype.updateCTMOnNextFrame = function () {
        if (!this.pendingUpdate) {
          // Lock
          this.pendingUpdate = true; // Throttle next update

          this.requestAnimationFrame.call(window, this.updateCTMCached);
        }
      };
      /**
       * Update viewport CTM with cached CTM
       */


      ShadowViewport.prototype.updateCTM = function () {
        var ctm = this.getCTM(); // Updates SVG element

        SvgUtils.setCTM(this.viewport, ctm, this.defs); // Free the lock

        this.pendingUpdate = false; // Notify about the update

        if (this.options.onUpdatedCTM) {
          this.options.onUpdatedCTM(ctm);
        }
      };

      module.exports = function (viewport, options) {
        return new ShadowViewport(viewport, options);
      };
    }, {
      "./svg-utilities": 5,
      "./utilities": 7
    }],
    4: [function (require, module, exports) {
      var Wheel = require('./uniwheel'),
          ControlIcons = require('./control-icons'),
          Utils = require('./utilities'),
          SvgUtils = require('./svg-utilities'),
          ShadowViewport = require('./shadow-viewport');

      var SvgPanZoom = function SvgPanZoom(svg, options) {
        this.init(svg, options);
      };

      var optionsDefaults = {
        viewportSelector: '.svg-pan-zoom_viewport' // Viewport selector. Can be querySelector string or SVGElement
        ,
        panEnabled: true // enable or disable panning (default enabled)
        ,
        controlIconsEnabled: false // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
        ,
        zoomEnabled: true // enable or disable zooming (default enabled)
        ,
        dblClickZoomEnabled: true // enable or disable zooming by double clicking (default enabled)
        ,
        mouseWheelZoomEnabled: true // enable or disable zooming by mouse wheel (default enabled)
        ,
        preventMouseEventsDefault: true // enable or disable preventDefault for mouse events
        ,
        zoomScaleSensitivity: 0.1 // Zoom sensitivity
        ,
        minZoom: 0.5 // Minimum Zoom level
        ,
        maxZoom: 10 // Maximum Zoom level
        ,
        fit: true // enable or disable viewport fit in SVG (default true)
        ,
        contain: false // enable or disable viewport contain the svg (default false)
        ,
        center: true // enable or disable viewport centering in SVG (default true)
        ,
        refreshRate: 'auto' // Maximum number of frames per second (altering SVG's viewport)
        ,
        beforeZoom: null,
        onZoom: null,
        beforePan: null,
        onPan: null,
        customEventsHandler: null,
        eventsListenerElement: null,
        onUpdatedCTM: null
      };
      var passiveListenerOption = {
        passive: true
      };

      SvgPanZoom.prototype.init = function (svg, options) {
        var that = this;
        this.svg = svg;
        this.defs = svg.querySelector('defs'); // Add default attributes to SVG

        SvgUtils.setupSvgAttributes(this.svg); // Set options

        this.options = Utils.extend(Utils.extend({}, optionsDefaults), options); // Set default state

        this.state = 'none'; // Get dimensions

        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(svg);
        this.width = boundingClientRectNormalized.width;
        this.height = boundingClientRectNormalized.height; // Init shadow viewport

        this.viewport = ShadowViewport(SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
          svg: this.svg,
          width: this.width,
          height: this.height,
          fit: this.options.fit,
          contain: this.options.contain,
          center: this.options.center,
          refreshRate: this.options.refreshRate // Put callbacks into functions as they can change through time
          ,
          beforeZoom: function beforeZoom(oldScale, newScale) {
            if (that.viewport && that.options.beforeZoom) {
              return that.options.beforeZoom(oldScale, newScale);
            }
          },
          onZoom: function onZoom(scale) {
            if (that.viewport && that.options.onZoom) {
              return that.options.onZoom(scale);
            }
          },
          beforePan: function beforePan(oldPoint, newPoint) {
            if (that.viewport && that.options.beforePan) {
              return that.options.beforePan(oldPoint, newPoint);
            }
          },
          onPan: function onPan(point) {
            if (that.viewport && that.options.onPan) {
              return that.options.onPan(point);
            }
          },
          onUpdatedCTM: function onUpdatedCTM(ctm) {
            if (that.viewport && that.options.onUpdatedCTM) {
              return that.options.onUpdatedCTM(ctm);
            }
          }
        }); // Wrap callbacks into public API context

        var publicInstance = this.getPublicInstance();
        publicInstance.setBeforeZoom(this.options.beforeZoom);
        publicInstance.setOnZoom(this.options.onZoom);
        publicInstance.setBeforePan(this.options.beforePan);
        publicInstance.setOnPan(this.options.onPan);
        publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM);

        if (this.options.controlIconsEnabled) {
          ControlIcons.enable(this);
        } // Init events handlers


        this.lastMouseWheelEventTime = Date.now();
        this.setupHandlers();
      };
      /**
       * Register event handlers
       */


      SvgPanZoom.prototype.setupHandlers = function () {
        var that = this,
            prevEvt = null // use for touchstart event to detect double tap
        ;
        this.eventListeners = {
          // Mouse down group
          mousedown: function mousedown(evt) {
            var result = that.handleMouseDown(evt, prevEvt);
            prevEvt = evt;
            return result;
          },
          touchstart: function touchstart(evt) {
            var result = that.handleMouseDown(evt, prevEvt);
            prevEvt = evt;
            return result;
          } // Mouse up group
          ,
          mouseup: function mouseup(evt) {
            return that.handleMouseUp(evt);
          },
          touchend: function touchend(evt) {
            return that.handleMouseUp(evt);
          } // Mouse move group
          ,
          mousemove: function mousemove(evt) {
            return that.handleMouseMove(evt);
          },
          touchmove: function touchmove(evt) {
            return that.handleMouseMove(evt);
          } // Mouse leave group
          ,
          mouseleave: function mouseleave(evt) {
            return that.handleMouseUp(evt);
          },
          touchleave: function touchleave(evt) {
            return that.handleMouseUp(evt);
          },
          touchcancel: function touchcancel(evt) {
            return that.handleMouseUp(evt);
          }
        }; // Init custom events handler if available

        if (this.options.customEventsHandler != null) {
          // jshint ignore:line
          this.options.customEventsHandler.init({
            svgElement: this.svg,
            eventsListenerElement: this.options.eventsListenerElement,
            instance: this.getPublicInstance()
          }); // Custom event handler may halt builtin listeners

          var haltEventListeners = this.options.customEventsHandler.haltEventListeners;

          if (haltEventListeners && haltEventListeners.length) {
            for (var i = haltEventListeners.length - 1; i >= 0; i--) {
              if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
                delete this.eventListeners[haltEventListeners[i]];
              }
            }
          }
        } // Bind eventListeners


        for (var event in this.eventListeners) {
          // Attach event to eventsListenerElement or SVG if not available
          (this.options.eventsListenerElement || this.svg).addEventListener(event, this.eventListeners[event], !this.options.preventMouseEventsDefault ? passiveListenerOption : false);
        } // Zoom using mouse wheel


        if (this.options.mouseWheelZoomEnabled) {
          this.options.mouseWheelZoomEnabled = false; // set to false as enable will set it back to true

          this.enableMouseWheelZoom();
        }
      };
      /**
       * Enable ability to zoom using mouse wheel
       */


      SvgPanZoom.prototype.enableMouseWheelZoom = function () {
        if (!this.options.mouseWheelZoomEnabled) {
          var that = this; // Mouse wheel listener

          this.wheelListener = function (evt) {
            return that.handleMouseWheel(evt);
          }; // Bind wheelListener


          var isPassiveListener = !this.options.preventMouseEventsDefault;
          Wheel.on(this.options.eventsListenerElement || this.svg, this.wheelListener, isPassiveListener);
          this.options.mouseWheelZoomEnabled = true;
        }
      };
      /**
       * Disable ability to zoom using mouse wheel
       */


      SvgPanZoom.prototype.disableMouseWheelZoom = function () {
        if (this.options.mouseWheelZoomEnabled) {
          var isPassiveListener = !this.options.preventMouseEventsDefault;
          Wheel.off(this.options.eventsListenerElement || this.svg, this.wheelListener, isPassiveListener);
          this.options.mouseWheelZoomEnabled = false;
        }
      };
      /**
       * Handle mouse wheel event
       *
       * @param  {Event} evt
       */


      SvgPanZoom.prototype.handleMouseWheel = function (evt) {
        if (!this.options.zoomEnabled || this.state !== 'none') {
          return;
        }

        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        } // Default delta in case that deltaY is not available


        var delta = evt.deltaY || 1,
            timeDelta = Date.now() - this.lastMouseWheelEventTime,
            divider = 3 + Math.max(0, 30 - timeDelta); // Update cache

        this.lastMouseWheelEventTime = Date.now(); // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)

        if ('deltaMode' in evt && evt.deltaMode === 0 && evt.wheelDelta) {
          delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY;
        }

        delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider;
        var inversedScreenCTM = this.svg.getScreenCTM().inverse(),
            relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(inversedScreenCTM),
            zoom = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

        this.zoomAtPoint(zoom, relativeMousePoint);
      };
      /**
       * Zoom in at a SVG point
       *
       * @param  {SVGPoint} point
       * @param  {Float} zoomScale    Number representing how much to zoom
       * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
       *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
       */


      SvgPanZoom.prototype.zoomAtPoint = function (zoomScale, point, zoomAbsolute) {
        var originalState = this.viewport.getOriginalState();

        if (!zoomAbsolute) {
          // Fit zoomScale in set bounds
          if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
            zoomScale = this.options.minZoom * originalState.zoom / this.getZoom();
          } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
            zoomScale = this.options.maxZoom * originalState.zoom / this.getZoom();
          }
        } else {
          // Fit zoomScale in set bounds
          zoomScale = Math.max(this.options.minZoom * originalState.zoom, Math.min(this.options.maxZoom * originalState.zoom, zoomScale)); // Find relative scale to achieve desired scale

          zoomScale = zoomScale / this.getZoom();
        }

        var oldCTM = this.viewport.getCTM(),
            relativePoint = point.matrixTransform(oldCTM.inverse()),
            modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y),
            newCTM = oldCTM.multiply(modifier);

        if (newCTM.a !== oldCTM.a) {
          this.viewport.setCTM(newCTM);
        }
      };
      /**
       * Zoom at center point
       *
       * @param  {Float} scale
       * @param  {Boolean} absolute Marks zoom scale as relative or absolute
       */


      SvgPanZoom.prototype.zoom = function (scale, absolute) {
        this.zoomAtPoint(scale, SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height), absolute);
      };
      /**
       * Zoom used by public instance
       *
       * @param  {Float} scale
       * @param  {Boolean} absolute Marks zoom scale as relative or absolute
       */


      SvgPanZoom.prototype.publicZoom = function (scale, absolute) {
        if (absolute) {
          scale = this.computeFromRelativeZoom(scale);
        }

        this.zoom(scale, absolute);
      };
      /**
       * Zoom at point used by public instance
       *
       * @param  {Float} scale
       * @param  {SVGPoint|Object} point    An object that has x and y attributes
       * @param  {Boolean} absolute Marks zoom scale as relative or absolute
       */


      SvgPanZoom.prototype.publicZoomAtPoint = function (scale, point, absolute) {
        if (absolute) {
          // Transform zoom into a relative value
          scale = this.computeFromRelativeZoom(scale);
        } // If not a SVGPoint but has x and y then create a SVGPoint


        if (Utils.getType(point) !== 'SVGPoint') {
          if ('x' in point && 'y' in point) {
            point = SvgUtils.createSVGPoint(this.svg, point.x, point.y);
          } else {
            throw new Error('Given point is invalid');
          }
        }

        this.zoomAtPoint(scale, point, absolute);
      };
      /**
       * Get zoom scale
       *
       * @return {Float} zoom scale
       */


      SvgPanZoom.prototype.getZoom = function () {
        return this.viewport.getZoom();
      };
      /**
       * Get zoom scale for public usage
       *
       * @return {Float} zoom scale
       */


      SvgPanZoom.prototype.getRelativeZoom = function () {
        return this.viewport.getRelativeZoom();
      };
      /**
       * Compute actual zoom from public zoom
       *
       * @param  {Float} zoom
       * @return {Float} zoom scale
       */


      SvgPanZoom.prototype.computeFromRelativeZoom = function (zoom) {
        return zoom * this.viewport.getOriginalState().zoom;
      };
      /**
       * Set zoom to initial state
       */


      SvgPanZoom.prototype.resetZoom = function () {
        var originalState = this.viewport.getOriginalState();
        this.zoom(originalState.zoom, true);
      };
      /**
       * Set pan to initial state
       */


      SvgPanZoom.prototype.resetPan = function () {
        this.pan(this.viewport.getOriginalState());
      };
      /**
       * Set pan and zoom to initial state
       */


      SvgPanZoom.prototype.reset = function () {
        this.resetZoom();
        this.resetPan();
      };
      /**
       * Handle double click event
       * See handleMouseDown() for alternate detection method
       *
       * @param {Event} evt
       */


      SvgPanZoom.prototype.handleDblClick = function (evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        } // Check if target was a control button


        if (this.options.controlIconsEnabled) {
          var targetClass = evt.target.getAttribute('class') || '';

          if (targetClass.indexOf('svg-pan-zoom-control') > -1) {
            return false;
          }
        }

        var zoomFactor;

        if (evt.shiftKey) {
          zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2); // zoom out when shift key pressed
        } else {
          zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2;
        }

        var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
        this.zoomAtPoint(zoomFactor, point);
      };
      /**
       * Handle click event
       *
       * @param {Event} evt
       */


      SvgPanZoom.prototype.handleMouseDown = function (evt, prevEvt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }

        Utils.mouseAndTouchNormalize(evt, this.svg); // Double click detection; more consistent than ondblclick

        if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
          this.handleDblClick(evt);
        } else {
          // Pan mode
          this.state = 'pan';
          this.firstEventCTM = this.viewport.getCTM();
          this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse());
        }
      };
      /**
       * Handle mouse move event
       *
       * @param  {Event} evt
       */


      SvgPanZoom.prototype.handleMouseMove = function (evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }

        if (this.state === 'pan' && this.options.panEnabled) {
          // Pan mode
          var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse()),
              viewportCTM = this.firstEventCTM.translate(point.x - this.stateOrigin.x, point.y - this.stateOrigin.y);
          this.viewport.setCTM(viewportCTM);
        }
      };
      /**
       * Handle mouse button release event
       *
       * @param {Event} evt
       */


      SvgPanZoom.prototype.handleMouseUp = function (evt) {
        if (this.options.preventMouseEventsDefault) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.returnValue = false;
          }
        }

        if (this.state === 'pan') {
          // Quit pan mode
          this.state = 'none';
        }
      };
      /**
       * Adjust viewport size (only) so it will fit in SVG
       * Does not center image
       */


      SvgPanZoom.prototype.fit = function () {
        var viewBox = this.viewport.getViewBox(),
            newScale = Math.min(this.width / viewBox.width, this.height / viewBox.height);
        this.zoom(newScale, true);
      };
      /**
       * Adjust viewport size (only) so it will contain the SVG
       * Does not center image
       */


      SvgPanZoom.prototype.contain = function () {
        var viewBox = this.viewport.getViewBox(),
            newScale = Math.max(this.width / viewBox.width, this.height / viewBox.height);
        this.zoom(newScale, true);
      };
      /**
       * Adjust viewport pan (only) so it will be centered in SVG
       * Does not zoom/fit/contain image
       */


      SvgPanZoom.prototype.center = function () {
        var viewBox = this.viewport.getViewBox(),
            offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5,
            offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5;
        this.getPublicInstance().pan({
          x: offsetX,
          y: offsetY
        });
      };
      /**
       * Update content cached BorderBox
       * Use when viewport contents change
       */


      SvgPanZoom.prototype.updateBBox = function () {
        this.viewport.simpleViewBoxCache();
      };
      /**
       * Pan to a rendered position
       *
       * @param  {Object} point {x: 0, y: 0}
       */


      SvgPanZoom.prototype.pan = function (point) {
        var viewportCTM = this.viewport.getCTM();
        viewportCTM.e = point.x;
        viewportCTM.f = point.y;
        this.viewport.setCTM(viewportCTM);
      };
      /**
       * Relatively pan the graph by a specified rendered position vector
       *
       * @param  {Object} point {x: 0, y: 0}
       */


      SvgPanZoom.prototype.panBy = function (point) {
        var viewportCTM = this.viewport.getCTM();
        viewportCTM.e += point.x;
        viewportCTM.f += point.y;
        this.viewport.setCTM(viewportCTM);
      };
      /**
       * Get pan vector
       *
       * @return {Object} {x: 0, y: 0}
       */


      SvgPanZoom.prototype.getPan = function () {
        var state = this.viewport.getState();
        return {
          x: state.x,
          y: state.y
        };
      };
      /**
       * Recalculates cached svg dimensions and controls position
       */


      SvgPanZoom.prototype.resize = function () {
        // Get dimensions
        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(this.svg);
        this.width = boundingClientRectNormalized.width;
        this.height = boundingClientRectNormalized.height; // Recalculate original state

        var viewport = this.viewport;
        viewport.options.width = this.width;
        viewport.options.height = this.height;
        viewport.processCTM(); // Reposition control icons by re-enabling them

        if (this.options.controlIconsEnabled) {
          this.getPublicInstance().disableControlIcons();
          this.getPublicInstance().enableControlIcons();
        }
      };
      /**
       * Unbind mouse events, free callbacks and destroy public instance
       */


      SvgPanZoom.prototype.destroy = function () {
        var that = this; // Free callbacks

        this.beforeZoom = null;
        this.onZoom = null;
        this.beforePan = null;
        this.onPan = null;
        this.onUpdatedCTM = null; // Destroy custom event handlers

        if (this.options.customEventsHandler != null) {
          // jshint ignore:line
          this.options.customEventsHandler.destroy({
            svgElement: this.svg,
            eventsListenerElement: this.options.eventsListenerElement,
            instance: this.getPublicInstance()
          });
        } // Unbind eventListeners


        for (var event in this.eventListeners) {
          (this.options.eventsListenerElement || this.svg).removeEventListener(event, this.eventListeners[event], !this.options.preventMouseEventsDefault ? passiveListenerOption : false);
        } // Unbind wheelListener


        this.disableMouseWheelZoom(); // Remove control icons

        this.getPublicInstance().disableControlIcons(); // Reset zoom and pan

        this.reset(); // Remove instance from instancesStore

        instancesStore = instancesStore.filter(function (instance) {
          return instance.svg !== that.svg;
        }); // Delete options and its contents

        delete this.options; // Delete viewport to make public shadow viewport functions uncallable

        delete this.viewport; // Destroy public instance and rewrite getPublicInstance

        delete this.publicInstance;
        delete this.pi;

        this.getPublicInstance = function () {
          return null;
        };
      };
      /**
       * Returns a public instance object
       *
       * @return {Object} Public instance object
       */


      SvgPanZoom.prototype.getPublicInstance = function () {
        var that = this; // Create cache

        if (!this.publicInstance) {
          this.publicInstance = this.pi = {
            // Pan
            enablePan: function enablePan() {
              that.options.panEnabled = true;
              return that.pi;
            },
            disablePan: function disablePan() {
              that.options.panEnabled = false;
              return that.pi;
            },
            isPanEnabled: function isPanEnabled() {
              return !!that.options.panEnabled;
            },
            pan: function pan(point) {
              that.pan(point);
              return that.pi;
            },
            panBy: function panBy(point) {
              that.panBy(point);
              return that.pi;
            },
            getPan: function getPan() {
              return that.getPan();
            } // Pan event
            ,
            setBeforePan: function setBeforePan(fn) {
              that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            setOnPan: function setOnPan(fn) {
              that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            } // Zoom and Control Icons
            ,
            enableZoom: function enableZoom() {
              that.options.zoomEnabled = true;
              return that.pi;
            },
            disableZoom: function disableZoom() {
              that.options.zoomEnabled = false;
              return that.pi;
            },
            isZoomEnabled: function isZoomEnabled() {
              return !!that.options.zoomEnabled;
            },
            enableControlIcons: function enableControlIcons() {
              if (!that.options.controlIconsEnabled) {
                that.options.controlIconsEnabled = true;
                ControlIcons.enable(that);
              }

              return that.pi;
            },
            disableControlIcons: function disableControlIcons() {
              if (that.options.controlIconsEnabled) {
                that.options.controlIconsEnabled = false;
                ControlIcons.disable(that);
              }

              return that.pi;
            },
            isControlIconsEnabled: function isControlIconsEnabled() {
              return !!that.options.controlIconsEnabled;
            } // Double click zoom
            ,
            enableDblClickZoom: function enableDblClickZoom() {
              that.options.dblClickZoomEnabled = true;
              return that.pi;
            },
            disableDblClickZoom: function disableDblClickZoom() {
              that.options.dblClickZoomEnabled = false;
              return that.pi;
            },
            isDblClickZoomEnabled: function isDblClickZoomEnabled() {
              return !!that.options.dblClickZoomEnabled;
            } // Mouse wheel zoom
            ,
            enableMouseWheelZoom: function enableMouseWheelZoom() {
              that.enableMouseWheelZoom();
              return that.pi;
            },
            disableMouseWheelZoom: function disableMouseWheelZoom() {
              that.disableMouseWheelZoom();
              return that.pi;
            },
            isMouseWheelZoomEnabled: function isMouseWheelZoomEnabled() {
              return !!that.options.mouseWheelZoomEnabled;
            } // Zoom scale and bounds
            ,
            setZoomScaleSensitivity: function setZoomScaleSensitivity(scale) {
              that.options.zoomScaleSensitivity = scale;
              return that.pi;
            },
            setMinZoom: function setMinZoom(zoom) {
              that.options.minZoom = zoom;
              return that.pi;
            },
            setMaxZoom: function setMaxZoom(zoom) {
              that.options.maxZoom = zoom;
              return that.pi;
            } // Zoom event
            ,
            setBeforeZoom: function setBeforeZoom(fn) {
              that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            },
            setOnZoom: function setOnZoom(fn) {
              that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            } // Zooming
            ,
            zoom: function zoom(scale) {
              that.publicZoom(scale, true);
              return that.pi;
            },
            zoomBy: function zoomBy(scale) {
              that.publicZoom(scale, false);
              return that.pi;
            },
            zoomAtPoint: function zoomAtPoint(scale, point) {
              that.publicZoomAtPoint(scale, point, true);
              return that.pi;
            },
            zoomAtPointBy: function zoomAtPointBy(scale, point) {
              that.publicZoomAtPoint(scale, point, false);
              return that.pi;
            },
            zoomIn: function zoomIn() {
              this.zoomBy(1 + that.options.zoomScaleSensitivity);
              return that.pi;
            },
            zoomOut: function zoomOut() {
              this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
              return that.pi;
            },
            getZoom: function getZoom() {
              return that.getRelativeZoom();
            } // CTM update
            ,
            setOnUpdatedCTM: function setOnUpdatedCTM(fn) {
              that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance);
              return that.pi;
            } // Reset
            ,
            resetZoom: function resetZoom() {
              that.resetZoom();
              return that.pi;
            },
            resetPan: function resetPan() {
              that.resetPan();
              return that.pi;
            },
            reset: function reset() {
              that.reset();
              return that.pi;
            } // Fit, Contain and Center
            ,
            fit: function fit() {
              that.fit();
              return that.pi;
            },
            contain: function contain() {
              that.contain();
              return that.pi;
            },
            center: function center() {
              that.center();
              return that.pi;
            } // Size and Resize
            ,
            updateBBox: function updateBBox() {
              that.updateBBox();
              return that.pi;
            },
            resize: function resize() {
              that.resize();
              return that.pi;
            },
            getSizes: function getSizes() {
              return {
                width: that.width,
                height: that.height,
                realZoom: that.getZoom(),
                viewBox: that.viewport.getViewBox()
              };
            } // Destroy
            ,
            destroy: function destroy() {
              that.destroy();
              return that.pi;
            }
          };
        }

        return this.publicInstance;
      };
      /**
       * Stores pairs of instances of SvgPanZoom and SVG
       * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
       *
       * @type {Array}
       */


      var instancesStore = [];

      var svgPanZoom = function svgPanZoom(elementOrSelector, options) {
        var svg = Utils.getSvg(elementOrSelector);

        if (svg === null) {
          return null;
        } else {
          // Look for existent instance
          for (var i = instancesStore.length - 1; i >= 0; i--) {
            if (instancesStore[i].svg === svg) {
              return instancesStore[i].instance.getPublicInstance();
            }
          } // If instance not found - create one


          instancesStore.push({
            svg: svg,
            instance: new SvgPanZoom(svg, options)
          }); // Return just pushed instance

          return instancesStore[instancesStore.length - 1].instance.getPublicInstance();
        }
      };

      module.exports = svgPanZoom;
    }, {
      "./control-icons": 2,
      "./shadow-viewport": 3,
      "./svg-utilities": 5,
      "./uniwheel": 6,
      "./utilities": 7
    }],
    5: [function (require, module, exports) {
      var Utils = require('./utilities'),
          _browser = 'unknown'; // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser


      if (
      /*@cc_on!@*/
       !!document.documentMode) {
        // internet explorer
        _browser = 'ie';
      }

      module.exports = {
        svgNS: 'http://www.w3.org/2000/svg',
        xmlNS: 'http://www.w3.org/XML/1998/namespace',
        xmlnsNS: 'http://www.w3.org/2000/xmlns/',
        xlinkNS: 'http://www.w3.org/1999/xlink',
        evNS: 'http://www.w3.org/2001/xml-events'
        /**
         * Get svg dimensions: width and height
         *
         * @param  {SVGSVGElement} svg
         * @return {Object}     {width: 0, height: 0}
         */
        ,
        getBoundingClientRectNormalized: function getBoundingClientRectNormalized(svg) {
          if (svg.clientWidth && svg.clientHeight) {
            return {
              width: svg.clientWidth,
              height: svg.clientHeight
            };
          } else if (!!svg.getBoundingClientRect()) {
            return svg.getBoundingClientRect();
          } else {
            throw new Error('Cannot get BoundingClientRect for SVG.');
          }
        }
        /**
         * Gets g element with class of "viewport" or creates it if it doesn't exist
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGElement}     g (group) element
         */
        ,
        getOrCreateViewport: function getOrCreateViewport(svg, selector) {
          var viewport = null;

          if (Utils.isElement(selector)) {
            viewport = selector;
          } else {
            viewport = svg.querySelector(selector);
          } // Check if there is just one main group in SVG


          if (!viewport) {
            var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function (el) {
              return el.nodeName !== 'defs' && el.nodeName !== '#text';
            }); // Node name should be SVGGElement and should have no transform attribute
            // Groups with transform are not used as viewport because it involves parsing of all transform possibilities

            if (childNodes.length === 1 && childNodes[0].nodeName === 'g' && childNodes[0].getAttribute('transform') === null) {
              viewport = childNodes[0];
            }
          } // If no favorable group element exists then create one


          if (!viewport) {
            var viewportId = 'viewport-' + new Date().toISOString().replace(/\D/g, '');
            viewport = document.createElementNS(this.svgNS, 'g');
            viewport.setAttribute('id', viewportId); // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes

            var svgChildren = svg.childNodes || svg.children;

            if (!!svgChildren && svgChildren.length > 0) {
              for (var i = svgChildren.length; i > 0; i--) {
                // Move everything into viewport except defs
                if (svgChildren[svgChildren.length - i].nodeName !== 'defs') {
                  viewport.appendChild(svgChildren[svgChildren.length - i]);
                }
              }
            }

            svg.appendChild(viewport);
          } // Parse class names


          var classNames = [];

          if (viewport.getAttribute('class')) {
            classNames = viewport.getAttribute('class').split(' ');
          } // Set class (if not set already)


          if (!~classNames.indexOf('svg-pan-zoom_viewport')) {
            classNames.push('svg-pan-zoom_viewport');
            viewport.setAttribute('class', classNames.join(' '));
          }

          return viewport;
        }
        /**
         * Set SVG attributes
         *
         * @param  {SVGSVGElement} svg
         */
        ,
        setupSvgAttributes: function setupSvgAttributes(svg) {
          // Setting default attributes
          svg.setAttribute('xmlns', this.svgNS);
          svg.setAttributeNS(this.xmlnsNS, 'xmlns:xlink', this.xlinkNS);
          svg.setAttributeNS(this.xmlnsNS, 'xmlns:ev', this.evNS); // Needed for Internet Explorer, otherwise the viewport overflows

          if (svg.parentNode !== null) {
            var style = svg.getAttribute('style') || '';

            if (style.toLowerCase().indexOf('overflow') === -1) {
              svg.setAttribute('style', 'overflow: hidden; ' + style);
            }
          }
        }
        /**
         * How long Internet Explorer takes to finish updating its display (ms).
         */
        ,
        internetExplorerRedisplayInterval: 300
        /**
         * Forces the browser to redisplay all SVG elements that rely on an
         * element defined in a 'defs' section. It works globally, for every
         * available defs element on the page.
         * The throttling is intentionally global.
         *
         * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
         * visible after pan/zoom when there are multiple SVGs on the page.
         * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
         * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
         */
        ,
        refreshDefsGlobal: Utils.throttle(function () {
          var allDefs = document.querySelectorAll('defs');
          var allDefsCount = allDefs.length;

          for (var i = 0; i < allDefsCount; i++) {
            var thisDefs = allDefs[i];
            thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
          }
        }, this ? this.internetExplorerRedisplayInterval : null)
        /**
         * Sets the current transform matrix of an element
         *
         * @param {SVGElement} element
         * @param {SVGMatrix} matrix  CTM
         * @param {SVGElement} defs
         */
        ,
        setCTM: function setCTM(element, matrix, defs) {
          var that = this,
              s = 'matrix(' + matrix.a + ',' + matrix.b + ',' + matrix.c + ',' + matrix.d + ',' + matrix.e + ',' + matrix.f + ')';
          element.setAttributeNS(null, 'transform', s);

          if ('transform' in element.style) {
            element.style.transform = s;
          } else if ('-ms-transform' in element.style) {
            element.style['-ms-transform'] = s;
          } else if ('-webkit-transform' in element.style) {
            element.style['-webkit-transform'] = s;
          } // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
          // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
          // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/


          if (_browser === 'ie' && !!defs) {
            // this refresh is intended for redisplaying the SVG during zooming
            defs.parentNode.insertBefore(defs, defs); // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
            // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
            // are located under any other element(s).

            window.setTimeout(function () {
              that.refreshDefsGlobal();
            }, that.internetExplorerRedisplayInterval);
          }
        }
        /**
         * Instantiate an SVGPoint object with given event coordinates
         *
         * @param {Event} evt
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}     point
         */
        ,
        getEventPoint: function getEventPoint(evt, svg) {
          var point = svg.createSVGPoint();
          Utils.mouseAndTouchNormalize(evt, svg);
          point.x = evt.clientX;
          point.y = evt.clientY;
          return point;
        }
        /**
         * Get SVG center point
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}
         */
        ,
        getSvgCenterPoint: function getSvgCenterPoint(svg, width, height) {
          return this.createSVGPoint(svg, width / 2, height / 2);
        }
        /**
         * Create a SVGPoint with given x and y
         *
         * @param  {SVGSVGElement} svg
         * @param  {Number} x
         * @param  {Number} y
         * @return {SVGPoint}
         */
        ,
        createSVGPoint: function createSVGPoint(svg, x, y) {
          var point = svg.createSVGPoint();
          point.x = x;
          point.y = y;
          return point;
        }
      };
    }, {
      "./utilities": 7
    }],
    6: [function (require, module, exports) {
      // uniwheel 0.1.2 (customized)
      // A unified cross browser mouse wheel event handler
      // https://github.com/teemualap/uniwheel
      module.exports = function () {
        //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel
        var prefix = "",
            _addEventListener,
            _removeEventListener,
            support,
            fns = [];

        var passiveOption = {
          passive: true
        }; // detect event model

        if (window.addEventListener) {
          _addEventListener = "addEventListener";
          _removeEventListener = "removeEventListener";
        } else {
          _addEventListener = "attachEvent";
          _removeEventListener = "detachEvent";
          prefix = "on";
        } // detect available wheel event


        support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
        "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

        function createCallback(element, callback) {
          var fn = function fn(originalEvent) {
            !originalEvent && (originalEvent = window.event); // create a normalized event object

            var event = {
              // keep a ref to the original event object
              originalEvent: originalEvent,
              target: originalEvent.target || originalEvent.srcElement,
              type: "wheel",
              deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
              deltaX: 0,
              delatZ: 0,
              preventDefault: function preventDefault() {
                originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
              }
            }; // calculate deltaY (and deltaX) according to the event

            if (support == "mousewheel") {
              event.deltaY = -1 / 40 * originalEvent.wheelDelta; // Webkit also support wheelDeltaX

              originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
            } else {
              event.deltaY = originalEvent.detail;
            } // it's time to fire the callback


            return callback(event);
          };

          fns.push({
            element: element,
            fn: fn
          });
          return fn;
        }

        function getCallback(element) {
          for (var i = 0; i < fns.length; i++) {
            if (fns[i].element === element) {
              return fns[i].fn;
            }
          }

          return function () {};
        }

        function removeCallback(element) {
          for (var i = 0; i < fns.length; i++) {
            if (fns[i].element === element) {
              return fns.splice(i, 1);
            }
          }
        }

        function _addWheelListener(elem, eventName, callback, isPassiveListener) {
          var cb;

          if (support === "wheel") {
            cb = callback;
          } else {
            cb = createCallback(elem, callback);
          }

          elem[_addEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);
        }

        function _removeWheelListener(elem, eventName, callback, isPassiveListener) {
          var cb;

          if (support === "wheel") {
            cb = callback;
          } else {
            cb = getCallback(elem);
          }

          elem[_removeEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);

          removeCallback(elem);
        }

        function addWheelListener(elem, callback, isPassiveListener) {
          _addWheelListener(elem, support, callback, isPassiveListener); // handle MozMousePixelScroll in older Firefox


          if (support == "DOMMouseScroll") {
            _addWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
          }
        }

        function removeWheelListener(elem, callback, isPassiveListener) {
          _removeWheelListener(elem, support, callback, isPassiveListener); // handle MozMousePixelScroll in older Firefox


          if (support == "DOMMouseScroll") {
            _removeWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
          }
        }

        return {
          on: addWheelListener,
          off: removeWheelListener
        };
      }();
    }, {}],
    7: [function (require, module, exports) {
      module.exports = {
        /**
         * Extends an object
         *
         * @param  {Object} target object to extend
         * @param  {Object} source object to take properties from
         * @return {Object}        extended object
         */
        extend: function extend(target, source) {
          target = target || {};

          for (var prop in source) {
            // Go recursively
            if (this.isObject(source[prop])) {
              target[prop] = this.extend(target[prop], source[prop]);
            } else {
              target[prop] = source[prop];
            }
          }

          return target;
        }
        /**
         * Checks if an object is a DOM element
         *
         * @param  {Object}  o HTML element or String
         * @return {Boolean}   returns true if object is a DOM element
         */
        ,
        isElement: function isElement(o) {
          return o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
          o && _typeof(o) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
        }
        /**
         * Checks if an object is an Object
         *
         * @param  {Object}  o Object
         * @return {Boolean}   returns true if object is an Object
         */
        ,
        isObject: function isObject(o) {
          return Object.prototype.toString.call(o) === '[object Object]';
        }
        /**
         * Checks if variable is Number
         *
         * @param  {Integer|Float}  n
         * @return {Boolean}   returns true if variable is Number
         */
        ,
        isNumber: function isNumber(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        }
        /**
         * Search for an SVG element
         *
         * @param  {Object|String} elementOrSelector DOM Element or selector String
         * @return {Object|Null}                   SVG or null
         */
        ,
        getSvg: function getSvg(elementOrSelector) {
          var element, svg;

          if (!this.isElement(elementOrSelector)) {
            // If selector provided
            if (typeof elementOrSelector === 'string' || elementOrSelector instanceof String) {
              // Try to find the element
              element = document.querySelector(elementOrSelector);

              if (!element) {
                throw new Error('Provided selector did not find any elements. Selector: ' + elementOrSelector);
              }
            } else {
              throw new Error('Provided selector is not an HTML object nor String');
            }
          } else {
            element = elementOrSelector;
          }

          if (element.tagName.toLowerCase() === 'svg') {
            svg = element;
          } else {
            if (element.tagName.toLowerCase() === 'object') {
              svg = element.contentDocument.documentElement;
            } else {
              if (element.tagName.toLowerCase() === 'embed') {
                svg = element.getSVGDocument().documentElement;
              } else {
                if (element.tagName.toLowerCase() === 'img') {
                  throw new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.');
                } else {
                  throw new Error('Cannot get SVG.');
                }
              }
            }
          }

          return svg;
        }
        /**
         * Attach a given context to a function
         * @param  {Function} fn      Function
         * @param  {Object}   context Context
         * @return {Function}           Function with certain context
         */
        ,
        proxy: function proxy(fn, context) {
          return function () {
            return fn.apply(context, arguments);
          };
        }
        /**
         * Returns object type
         * Uses toString that returns [object SVGPoint]
         * And than parses object type from string
         *
         * @param  {Object} o Any object
         * @return {String}   Object type
         */
        ,
        getType: function getType(o) {
          return Object.prototype.toString.apply(o).replace(/^\[object\s/, '').replace(/\]$/, '');
        }
        /**
         * If it is a touch event than add clientX and clientY to event object
         *
         * @param  {Event} evt
         * @param  {SVGSVGElement} svg
         */
        ,
        mouseAndTouchNormalize: function mouseAndTouchNormalize(evt, svg) {
          // If no clientX then fallback
          if (evt.clientX === void 0 || evt.clientX === null) {
            // Fallback
            evt.clientX = 0;
            evt.clientY = 0; // If it is a touch event

            if (evt.touches !== void 0 && evt.touches.length) {
              if (evt.touches[0].clientX !== void 0) {
                evt.clientX = evt.touches[0].clientX;
                evt.clientY = evt.touches[0].clientY;
              } else if (evt.touches[0].pageX !== void 0) {
                var rect = svg.getBoundingClientRect();
                evt.clientX = evt.touches[0].pageX - rect.left;
                evt.clientY = evt.touches[0].pageY - rect.top;
              } // If it is a custom event

            } else if (evt.originalEvent !== void 0) {
              if (evt.originalEvent.clientX !== void 0) {
                evt.clientX = evt.originalEvent.clientX;
                evt.clientY = evt.originalEvent.clientY;
              }
            }
          }
        }
        /**
         * Check if an event is a double click/tap
         * TODO: For touch gestures use a library (hammer.js) that takes in account other events
         * (touchmove and touchend). It should take in account tap duration and traveled distance
         *
         * @param  {Event}  evt
         * @param  {Event}  prevEvt Previous Event
         * @return {Boolean}
         */
        ,
        isDblClick: function isDblClick(evt, prevEvt) {
          // Double click detected by browser
          if (evt.detail === 2) {
            return true;
          } // Try to compare events
          else if (prevEvt !== void 0 && prevEvt !== null) {
              var timeStampDiff = evt.timeStamp - prevEvt.timeStamp // should be lower than 250 ms
              ,
                  touchesDistance = Math.sqrt(Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2));
              return timeStampDiff < 250 && touchesDistance < 10;
            } // Nothing found


          return false;
        }
        /**
         * Returns current timestamp as an integer
         *
         * @return {Number}
         */
        ,
        now: Date.now || function () {
          return new Date().getTime();
        } // From underscore.
        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.
        // jscs:disable
        // jshint ignore:start
        ,
        throttle: function throttle(func, wait, options) {
          var that = this;
          var context, args, result;
          var timeout = null;
          var previous = 0;
          if (!options) options = {};

          var later = function later() {
            previous = options.leading === false ? 0 : that.now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
          };

          return function () {
            var now = that.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;

            if (remaining <= 0 || remaining > wait) {
              clearTimeout(timeout);
              timeout = null;
              previous = now;
              result = func.apply(context, args);
              if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }

            return result;
          };
        } // jshint ignore:end
        // jscs:enable

        /**
         * Create a requestAnimationFrame simulation
         *
         * @param  {Number|String} refreshRate
         * @return {Function}
         */
        ,
        createRequestAnimationFrame: function createRequestAnimationFrame(refreshRate) {
          var timeout = null; // Convert refreshRate to timeout

          if (refreshRate !== 'auto' && refreshRate < 60 && refreshRate > 1) {
            timeout = Math.floor(1000 / refreshRate);
          }

          if (timeout === null) {
            return window.requestAnimationFrame || requestTimeout(33);
          } else {
            return requestTimeout(timeout);
          }
        }
      };
      /**
       * Create a callback that will execute after a given timeout
       *
       * @param  {Function} timeout
       * @return {Function}
       */

      function requestTimeout(timeout) {
        return function (callback) {
          window.setTimeout(callback, timeout);
        };
      }
    }, {}]
  }, {}, [1]);

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

  var COUNTRIES = [{
    id: "ARE",
    d: "M619.874 393.722l.499-.149.104.838 2.194-.481 2.319.079 1.694.091 1.92-2.072 2.091-1.974 1.772-1.908.534 1.056.381 2.437-1.433.012-.229 1.997.496.425-1.269.601-.008 1.245-.817 1.256-.073 1.219-.565.638-8.428-1.524-1.075-3.08z"
  }, {
    id: "AFG",
    d: "M646.879 356.901l2.859 1.3 2.115-.456.585-1.557 2.213-.519 1.58-1.052.56-2.785 2.363-.678.44-1.252 1.323.941.845.109 1.561.023 2.115.741.857.427 2.029-1.126.946.677.904-1.609 1.676.074.431-.518.297-1.428 1.207-1.238 1.518.81-.305 1.084.848.169-.261 2.956 1.109 1.143.978-.733 1.244-.347 1.747-1.571 1.931.259 2.892.006.499 1.007-1.632.392-1.425.645-3.218.405-3.011.731-1.636 1.508.662 1.46.321 1.704-1.397 1.43.117 1.302-.771 1.214-2.667-.105 1.102 2.219-1.784.844-1.191 2.004.154 1.98-1.095.924-1.037-.306-2.143.428-.307.914-2.088-.005-1.562 1.843-.099 2.75-3.643 1.335-1.953-.282-.568.702-1.676-.408-2.804.479-4.698-1.637 2.543-2.93-.23-2.096-2.124-.552-.22-2.085-.918-2.644 1.2-1.827-1.221-.495.77-2.451z"
  }, {
    id: "ALB",
    d: "M532.985 334.657l-.356 1.273.398 1.594 1.163.901-.056.968-.911.532-.169 1.19-1.304 1.765-.476-.254-.056-.8-1.553-1.225-.244-1.75.237-2.528.383-1.159-.473-.591-.188-1.196 1.216-1.865.178.715.754-.336.597 1.016.671.386z"
  }, {
    id: "ARM",
    d: "M597.453 337.502l3.896-.579.581.974 1.068.64-.564.924 1.493 1.258-.79 1.162 1.19.988 1.259.593.062 2.496-1.015.106-1.145-2.08.013-.557-1.239.008-.83-.973-.583.099-1.105-1.063-2.085-.908.27-1.787z"
  }, {
    id: "AGO",
    d: "M521.03 479.784l.691 2.088.805 1.683.645.908 1.074 1.47 1.854-.228.925-.396 1.549.397.42-.703.704-1.637 1.739-.109.151-.486 1.431-.011-.244 1.011 3.402-.024.051 1.768.568 1.086-.413 1.698.206 1.735.935 1.049-.15 3.371.694-.26 1.219.07 1.737-.425 1.277.167.296.881-.319 1.379.493 1.335-.418 1.068.239.986-5.838-.036-.129 9.158 1.892 2.377 1.83 1.823-5.153 1.192-6.788-.414-1.943-1.4-11.366.126-.424.205-1.672-1.319-1.818-.087-1.678.497-1.35.555-.264-1.833.388-2.552.967-2.645.146-1.236.91-2.588.668-1.173 1.611-1.87.899-1.269.294-2.107-.147-1.609-.838-1.013-.747-1.716-.689-1.694.15-.586.862-1.117-.851-2.718-.574-1.88-1.405-1.774.267-.544 1.157-.376.813.052.983-.336 8.276.036zm-10.906-.541l-.713.296-.75-2.104 1.132-1.207.847-.47 1.051.959-1.021.587-.458.719-.088 1.22z"
  }, {
    id: "ARG",
    d: "M291.601 648.907l-2.664.245-1.43-1.726-1.689-.13-3.002-.003-.002-10.568 1.077 2.148 1.402 3.525 3.645 2.865 3.925 1.207-1.262 2.437zm1.5-122.438l1.648 2.178 1.094-2.426 3.197.125.453.644 5.155 4.945 2.292.464 3.426 2.262 2.888 1.202.402 1.362-2.76 4.731 2.827.854 3.149.479 2.217-.505 2.543-2.398.458-2.743 1.389-.593 1.407 1.789-.057 2.489-2.361 1.729-1.883 1.282-3.165 3.078-3.741 4.372-.701 2.594-.75 3.365.028 3.297-.608.742-.217 2.165-.192 1.761 3.56 2.914-.383 2.368 1.752 1.507-.143 1.7-2.694 4.516-4.157 1.913-5.624.746-3.08-.361.589 2.147-.574 2.721.518 1.851-1.682 1.299-2.874.512-2.696-1.347-1.083.967.391 3.71 1.893 1.135 1.535-1.189.835 1.962-2.582 1.18-2.251 2.383-.412 3.907-.663 2.107-2.648.011-2.198 2.035-.804 3.013 2.757 2.982 2.681.831-.964 3.726-3.312 2.375-1.822 5.025-2.559 1.719-1.149 2.059.905 4.641 1.866 2.633-1.182-.231-2.599-.715-6.775-.608-1.162-2.632.054-3.332-1.867.284-.988-1.596-.245-4.599 2.151-1.878.889-2.68-.326-2.112 1.486-3.52 1.024-5.35-.301-2.331 1.224-.748-.3-1.478-1.301-.782.924-1.63-1.266-1.462-.655-4.395 1.127-.767-.474-4.543.659-3.751.75-3.223 1.679-1.3-.853-3.462-.009-3.217 2.123-2.263-.065-2.868 1.6-3.313.007-3.086-.728-.609-1.292-5.694 1.728-3.343-.265-3.115 1.002-2.896 1.836-2.963 1.979-1.95-.839-1.225.585-1.001-.089-5.143 3.054-1.509.962-3.159-.34-.758 2.336-2.722 3.676.733z"
  }, {
    id: "AUT",
    d: "M522.861 309.853l-.213 1.704-1.579.008.544.899-.931 2.647-.535.689-2.452.101-1.415.922-2.316-.314-4.009-1.051-.626-1.424-2.771.712-.327.777-1.698-.58-1.431-.111-1.269-.747.429-1.007-.108-.734.846-.228 1.419 1.148.399-1.091 2.473.177 2.004-.744 1.345.127.874.849.261-.704-.397-2.72 1.007-.534.989-1.951 2.083 1.364 1.577-1.735.987-.319 2.177 1.298 1.317-.22 1.292.8-.225.535z"
  }, {
    id: "AUS",
    d: "M882.928 588.16l2.709 1.277 1.526-.508 2.188-.71 1.682.248.199 4.425-.961 1.3-.289 3.064-.98-1.047-1.946 2.675-.58-.208-1.725-.12-1.729-3.276-.384-2.496-1.617-3.254.071-1.695 1.836.325zm-5.149-86.063l1.01 2.254 1.799-1.084.929 1.218 1.346 1.125-.288 1.28.598 2.484.426 1.452.706.355.761 2.495-.271 1.52.908 1.995 3.038 1.542 1.98 1.407 1.881 1.292-.367.721 1.604 1.872 1.09 3.249 1.119-.662 1.137 1.306.686-.464.483 3.208 1.989 1.871 1.302 1.167 2.191 2.488.788 2.487.072 1.774-.193 1.937 1.336 2.676-.16 2.811-.485 1.48-.757 2.871.057 1.859-.555 2.34-1.238 2.996-2.077 1.631-1.023 2.59-.936 1.666-.831 2.932-1.082 1.707-.709 2.583-.362 2.401.144 1.109-1.607 1.224-3.139.128-2.588 1.454-1.288 1.38-1.694 1.539-2.322-1.584-1.718-.629.436-1.851-1.533.67-2.455 2.582-2.424-.97-1.59-.564-1.604-.254-2.714-1.027-1.813-2.175-.521-2.655-.651-1.752-1.378-1.398-2.697-.414.922-1.661-.679-2.522-1.369 2.351-2.495.627 1.467-1.885.425-1.953 1.083-1.646-.225-2.472-2.28 2.849-1.752 1.15-1.074 2.693-2.189-1.396.087-1.791-1.754-2.43-1.479-1.247.527-.766-3.598-2.001-1.971-.094-2.696-1.597-5.021.31-3.631 1.175-3.19 1.1-2.676-.219-2.972 1.696-2.432.766-.54 1.75-1.035 1.363-2.38.082-1.761.299-2.478-.613-2.017.367-1.925.154-1.668 1.801-.817-.153-1.406.959-1.348 1.082-2.046-.134-1.879-.001-2.975-2.168-1.507-.642.061-1.927 1.393-.456.476-.761-.1-1.196.343-2.302-.313-1.948-1.482-3.294-.46-1.845.121-1.83-1.116-2.079-.071-.934-1.242-1.262-.35-2.468-1.603-2.477-.388-1.327 1.231 1.346-.946-2.881 1.391.898.83 1.203-.047-1.59-1.388-2.43-.269-.968-.65-.917.305-1.767.574-.75.383-1.519-.3-1.768 1.159-2.165.211 2.292 1.185-2.071 2.278-1.002 1.366-1.276 2.143-1.095 1.274-.232.772.367 2.209-1.109 1.701-.33.425-.65.742-.271 1.55.07 2.947-.867 1.524-1.313.716-1.575 1.645-1.491.126-1.169.073-1.589 1.962-2.474 1.181 2.514 1.193-.582-.998-1.375.88-1.409 1.237.629.34-2.205 1.532-1.421.676-1.138 1.41-.491.044-.804 1.232.335.049-.722 1.233-.412 1.355-.387 2.071 1.318 1.556 1.705 1.755.02 1.783.271-.594-1.582 1.343-2.303 1.264-.749-.437-.715 1.218-1.632 1.698-1.006 1.435.339 2.355-.537-.051-1.455-2.054-.936 1.493-.413 1.857.704 1.489 1.167 2.361.729.801-.288 1.738.875 1.638-.815 1.054.248.656-.547 1.287 1.41-.747 1.528-1.064 1.155-.964.096.325 1.146-.824 1.435-.996 1.414.201.814 2.229 1.596 2.16.928 1.443.999 2.027 1.722.79-.003 1.468.746.426.901 2.677.992 1.852-.999.549-1.566.568-1.289.349-1.59.853-2.3-.39-1.394.202-.837-.324-1.643.367-2.157.538-.581-.437-.953.678-1.511.532-1.563.07-.81 1.042-1.063.791 1.388.194 1.783.699.344.119 1.197 1.02 1.452.21 1.62-.096 1.034z"
  }, {
    id: "AZE",
    d: "M601.432 342.462l.831.973 1.239-.008-.013.558 1.145 2.08-1.923-.477-1.417-1.661-.445-1.366.583-.099zm6.649-5.433l1.241.253.481-.945 1.674-1.506 1.474 1.965 1.426 2.623 1.307.172.863.988-2.31.294-.487 2.823-.482 1.263-1.028.839.075 1.769-.698.178-1.749-1.869.967-1.779-.829-1.062-1.051.268-3.307 2.656-.062-2.496-1.259-.593-1.19-.988.791-1.162-1.494-1.258.564-.924-1.068-.64-.581-.974.687-.607 2.089 1.068 1.511.22.382-.435-1.381-2.017.728-.517.788.126 1.928 2.267z"
  }, {
    id: "BIH",
    d: "M528.542 323.106l1.016-.01-.702 1.727 1.352 1.5-.409 1.821-.66.17-.524.352-.912.893-.411 2.099-2.481-1.443-1.059-1.602-1.068-.853-1.289-1.447-.608-1.209-1.373-1.834.586-1.641 1.007.91.607-.822 1.31-.088 2.411.658 1.938-.055z"
  }, {
    id: "BGD",
    d: "M735.094 400.405l-.058 2.152-.978-.453.183 2.403-.802-1.556-.161-1.525-.534-1.447-1.171-1.756-2.583-.121.255 1.245-.88 1.674-1.193-.609-.407.546-.794-.327-1.085-.269-.437-2.485-.971-2.281.476-1.839-1.725-.819.622-1.119 1.753-1.147-2.024-1.635.99-2.107 2.221 1.343 1.339.153.247 2.15 2.668.423 2.601-.046 1.616.526-1.292 2.594-1.255.177-.865 1.734 1.535 1.572.458-1.94.774-.01z"
  }, {
    id: "BEL",
    d: "M484.548 295.906l2.053.352 2.598-.931 1.775 1.956 1.541 1.036-.318 2.968-.731.165-.304 2.43-2.453-1.973-1.438.338-1.958-2.057-1.303-1.768-1.303-.072-.406-1.562z"
  }, {
    id: "BFA",
    d: "M467.325 436.401l-1.919-.729-1.314.107-.98.711-1.261-.596-.49-.936-1.261-.617-.186-1.646.765-1.204-.065-.963 2.226-2.361.411-1.96.769-.699 1.355.386 1.176-.583.381-.737 2.175-1.287.536-.899 2.62-1.196 1.544-.41.699.553 1.798-.013-.222 1.396.376 1.309 1.579 1.872.088 1.385 3.232.648-.063 1.952-.613.851-1.37.266-.572 1.242-.964.321-2.455-.06-1.297-.226-.905.458-1.239-.207-4.871.134-.066 1.608z"
  }, {
    id: "BGR",
    d: "M538.78 325.558l.807 1.598 1.086-.284 2.155.604 4.117.204 1.391-.988 3.301-.904 2.04 1.412 1.649.406-1.455 1.596-1.024 2.729.904 2.155-2.414-.505-2.856 1.183-.03 1.859-2.549.351-1.975-1.301-2.245 1.024-2.074-.108-.199-2.473-1.404-1.209.461-.534-.304-.451.471-1.21 1.069-1.195-1.362-1.661-.252-1.415z"
  }, {
    id: "BDI",
    d: "M557.518 475.931l-.178-3.367-.705-1.268 1.702.219.859-1.587 1.49.182.162 1.098.604.632.026.907-.692.584-1.091 1.455-1.018 1.012z"
  }, {
    id: "BEN",
    d: "M482.8 445.918l-2.317.328-.691-1.934.128-6.46-.565-.582-.106-1.386-.974-.991-.857-.836.357-1.493.964-.321.572-1.242 1.37-.266.613-.851.941-.834 1.005-.008 2.138 1.639-.109.944.63 1.684-.552 1.141.296.761-1.361 1.75-.864.865-.528 1.778.071 1.791z"
  }, {
    id: "BRN",
    d: "M795.464 450.767l1.11-1.046 2.386-1.532-.126 1.378-.164 1.785-1.34-.089-.589.951z"
  }, {
    id: "BOL",
    d: "M299.041 526.346l-3.198-.124-1.093 2.425-1.649-2.178-3.669-.732-2.336 2.722-2.023.415-1.098-4.15-1.507-3.348.883-2.868-1.471-1.25-.374-2.122-1.374-1.992 1.768-3.146-1.206-2.437.643-.972-.502-1.07 1.096-1.44.054-2.443.139-2.012.602-.967-2.424-4.58 2.085.24 1.444-.062.625-.858 2.452-1.148 1.477-1.063 3.669-.478-.299 2.12.345 1.09-.225 1.904 3.044 2.552 3.14.471 1.104 1.067 1.895.567 1.16.832 1.764-.029 1.629.85.123 1.661.547.84.036 1.243-.817.048 1.078 3.37 5.375.12-.411 1.679.3 1.151 1.532.819.662 1.821-.498 2.316-.768 1.293.27 1.687-.877.613-.048-.914-2.612-1.514-2.604-.041-4.886.86-1.345 2.611-.07 1.604-1.105 3.591z"
  }, {
    id: "BRA",
    d: "M313.681 551.79l3.74-4.372 3.165-3.078 1.883-1.282 2.361-1.728.057-2.49-1.407-1.788-1.388.593.55-1.783.38-1.817.001-1.682-1.008-.553-1.052.493-1.046-.136-.327-1.172-.261-2.778-.525-.902-1.894-.815-1.144.59-2.96-.578.186-4.065-.829-1.654.877-.613-.27-1.687.768-1.293.498-2.316-.662-1.821-1.532-.819-.3-1.151.411-1.679-5.375-.12-1.078-3.37.817-.048-.036-1.243-.547-.84-.123-1.661-1.629-.85-1.764.029-1.16-.832-1.895-.567-1.104-1.067-3.14-.471-3.044-2.552.225-1.904-.345-1.09.299-2.12-3.669.478-1.477 1.063-2.452 1.148-.625.858-1.444.062-2.085-.24-1.582.488-1.275-.326.187-4.3-2.3 1.666-2.475-.073-1.06-1.508-1.861-.164.593-1.212-1.558-1.714-1.167-2.533.739-.514-.002-1.185 1.694-.81-.279-1.516.715-.974.204-1.306 3.206-1.902 2.298-.538.376-.42 2.527.131 1.26-7.647.066-1.208-.439-1.595-1.244-1.016.014-2.024 1.58-.459.56.289.095-1.067-1.643-.288-.034-1.744 5.462.063.928-.961.779.884.546 1.643.53-.343 1.543 1.473 2.18-.18.543-.853 2.085-.65 1.155-.457.325-1.18 2.003-.793-.151-.586-2.376-.239-.389-1.757.113-1.87-1.255-.724.526-.257 2.076.357 2.229.698.809-.66 2.017-.433 3.136-1.046 1.025-1.066-.371-.789 1.458-.124.652.644-.365 1.228.964.423.643 1.298-.777.983-.447 2.374.718 1.41.203 1.29 1.725 1.307 1.376.138.31-.545.887-.121 1.268-.489.912-.741 1.55.237.683-.1 1.525.228.252-.57-.47-.554.28-.807 1.131.248 1.325-.285 1.606.591 1.224.575.868-.756.627.116.383.785 1.342-.199 1.075-1.059.86-2.053 1.659-2.555.955-.132.694 1.544 1.572 4.877 1.5.46.075 1.923-2.108 2.293.872.84 4.956.437.101 2.792 2.13-1.828 3.528 1.001 4.657 1.702 1.368 1.632-.459 1.543 3.26-.859 5.457 1.475 4.189-.109 4.145 2.309 3.58 3.129 2.16.806 2.398.113 1.016.882.952 3.566.465 1.699-1.116 4.652-1.427 1.843-3.952 3.94-1.786 3.215-2.076 2.475-.701.056-.783 2.108.199 5.398-.782 4.478-.298 1.927-.886 1.157-.497 3.939-2.843 3.878-.477 3.093-2.269 1.304-.657 1.811-3.046-.007-4.411 1.165-1.975 1.353-3.14.891-3.3 2.44-2.373 3.061-.408 2.322.466 1.727-.524 3.182-.636 1.548-1.96 1.754-3.111 5.676-2.465 2.593-1.907 1.539-1.278 3.154-1.855 1.914-.776-1.895 1.236-1.578-1.622-2.248-2.199-1.815-2.886-2.089-1.041.095-2.813-2.504z"
  }, {
    id: "BHS",
    d: "M257.857 395.204l-.688.151-.712-1.758-1.05-.887.61-1.951.844.124.981 2.549.015 1.772zm-.8-8.69l-3.056.499-.196-1.154 1.318-.25 1.851.094.083.811zm2.299-.032l-.484 2.21-.516-.397.046-1.625-1.256-1.234-.006-.359 2.216 1.405z"
  }, {
    id: "BTN",
    d: "M732.356 382.777l1.142 1.005-.197 1.925-2.287.093-2.368-.21-1.762.489-2.549-1.187-.06-.629 1.855-2.341 1.515-.803 2.003.733 1.481.077z"
  }, {
    id: "BWA",
    d: "M547.169 515.946l.564.525.882 1.706 3.173 3.255 1.201.32.007 1.051.825 1.895 2.168.46 1.787 1.358-3.967 2.221-2.517 2.265-.934 2.032-.843 1.151-1.526.245-.492 1.471-.284.963-1.793.72-2.282-.153-1.34-.866-1.181-.375-1.368.716-.686 1.483-1.328.934-1.402 1.391-2.009.319-.625-1.096.258-1.893-1.662-2.933-.757-.462-.001-8.861 2.764-.105.082-10.57 2.088-.097 4.322-1.026 1.072 1.208 1.79-1.149.85-.006 1.581-.66.504.219z"
  }, {
    id: "BLR",
    d: "M541.099 284.075l2.71.032 3.044-1.797.651-2.724 2.299-1.562-.264-2.207 1.705-.835 3.012-1.929 2.952 1.256.398 1.236 1.472-.593 2.741 1.183.274 2.308-.6 1.314 1.757 3.153 1.142.869-.169.858 1.89.831.808 1.254-1.091 1.022-2.262-.162-.54.435.659 1.54.689 2.937-2.407.27-.864.995-.18 2.265-1.115-.433-2.531.215-.735-1.05-1.051.783-1.055-.649-2.208-.09-3.129-1.084-2.832-.355-2.173.101-1.536 1.225-1.341.175-.053-2.013-.865-2.117 1.681-.94.017-1.848-.778-1.779z"
  }, {
    id: "BLZ",
    d: "M225.309 412.958l-.022-.431.339-.134.509.346 1.005-1.771.533-.038.01.431.531.013-.046.798-.454 1.266.245.453-.293 1.044.176.279-.324 1.471-.551.77-.507.093-.555 1.004-.837.001.219-3.28z"
  }, {
    id: "CAN",
    d: "M198.925 96.233l-.222-5.902 3.63.579 1.634.955 3.351 4.925-.76 4.97-4.148 2.771-2.284-3.123-1.201-5.175zm13.215 12.643l.334-1.49-1.968-2.448-5.646-.194.748 3.676 5.254.827 1.278-.371zm36.348 46.956l3.085 5.103.812.574 3.069-1.275 3.021.201 2.98.276-.248-2.643-4.835-5.381-6.417-1.077-1.349.666-.118 3.556zm-65.425-62.7l-2.708 4.188 6.242.516 4.615 4.438 4.579 1.498-1.092-5.68-2.145-6.726-7.582-5.353-5.504-2.044.204 5.687 3.391 3.476zm25.897-10.237l5.127-.116-2.216 4.002-.043 5.297 3.013 5.756 5.811 1.766 4.96-.99 5.181-10.729 3.85-4.447-3.38-4.97-2.215-10.648-4.599-3.188-4.718-3.682-3.581-9.561-6.521.937 1.225 4.149-2.874 1.246-1.943 5.322-1.944 7.458 1.776 7.261 3.091 5.137zm-63.75 53.377l3.92 1.953 12.667-1.298-5.824 4.771.357 3.431 4.264-.236 7.074-4.58 9.495-1.673 1.706-5.218-.493-5.569-2.938-.502-2.497 1.929-1.099-4.133-.945-5.699-2.895-1.415-2.569 4.411 4.01 11.049-4.898-.851-4.981-6.788-7.891-3.998-2.639 3.321-3.824 11.095zm22.563-42.066l-3.646-2.897-1.504-.659-2.876 4.284-.045 2.002 4.656.014 3.415-2.744zm-1.468 12.358l.932-3.985-3.954-2.125-4.094 1.385-2.271 4.261 4.159 4.207 5.228-3.743zm29.099 33.239l4.623-1.106 1.277-8.252-.087-5.945-2.144-5.56-.216 1.596-3.943-.699-4.223 4.087-3.017-.37.178 8.924 4.596-.868-.058 6.465 3.014 1.728zm-3.286 45.603l-5.06-3.927-4.709-4.208-.869-6.18-1.76-8.925-3.141-3.839-2.787-1.547-2.467 1.417 1.992 9.586-1.409 3.731-2.294-8.979-2.562-3.105-3.168 4.814-3.899-4.76-6.239 2.868 1.399-4.463-2.865-1.875-7.507 5.838-1.952 3.711-2.354 6.771 4.896 2.317 4.325-.122-6.503 3.461 1.479 3.129 3.976.169 5.991-.669 5.422 1.959-3.66 1.445-3.953-.372-4.328 1.409-1.865.874 3.455 6.354 2.489-.883 3.828 2.145 1.519 3.651 4.988-.725 7.105-1.157 5.264-2.646 3.26-.479 4.823 2.115 5.074 1.219.945-2.859-1.789-3.049 4.604-.645.306-3.569zm7.745-.981l-1.96 3.539-2.468 2.486 3.829 3.541 2.284-.854 3.779 2.358 1.743-2.732-1.709-3.03-.841-1.526-1.682-1.458-2.975-2.324zm-17.613-29.443l-2.131-2.175-3.757.397-.953 1.384 4.374 6.752 2.467-6.358zm28.687 13.172l3.008-6.927 3.343-1.848 4.189-8.743-5.356-2.47-5.842-.357-2.782 2.77-1.465 4.231-.043 4.817 1.75 8.188 3.198.339zm17.155-23.005l5.756-.185 8.043-1.614 3.589 1.275 4.181-2.26 1.749-2.84-.626-4.519-3.003-4.229-4.556-.801-5.709.969-4.457 2.441-4.091-.939-3.782-.495-1.781-2.702-3.217-2.614.639-4.433-2.42-3.982-5.52.027-3.113-3.988-5.779-.799-1.055 5.096 3.25 3.745 5.8 1.454 2.815 5.095.341 5.602.97 5.99 7.452 3.417 4.524 1.289zm-89.019-18.269l5.212-5.053 2.62-.587 2.16-4.228.385-9.769-3.846 1.914-4.3-.18-5.758 8.189-4.759 8.977 3.799 2.51 4.487-1.773zm72.178 16.173l1.525-4.14-1.023-3.458-2.448-3.918-4.031 3.018-1.493 4.924 3.399 2.787 4.071.787zm-8.308 11.437l-.729-2.881-5.002 1.264-3.344-2.107-3.318 4.804 3.089 6.282-5.725-1.174-.056 3.011 6.968 7.046 1.94 3.38 2.701.731 4.598-3.413.504-8.211-4.244-4.074 2.618-4.658zm-73.994 153.738l-1.157-2.344-2.799-1.769-1.386-2.053-.954-1.505-2.635-.464-1.721-.667-2.943-.962-.242 1.021 1.08 2.38 2.886.781.505 1.231 2.509 1.502.841 1.513 4.604 1.92 1.412-.584zm121.706-77.629l-2.002-2.109-2.063.498-.249-3.062-3.212-2.035-3.07-2.267-1.63-1.753-1.435 1.034-.521-2.963-2.026-.555-.956 6.134-.358 5.107-2.438 3.136 3.8-.604.963 3.65 3.99-3.225 2.78-3.379 1.575 2.863 4.363 1.511 2.489-1.981zm-120.534-52.544l7.38-4.179v-3.874l3.477-6.407 6.875-6.689 3.525-2.467-3.01-4.199-2.723-2.953-7.162-.572-4.004-2.156-9.477 1.625 2.742 6.225-2.432 6.431-1.942 6.866-1.203 3.858 6.474 4.694 1.48 3.797zm134.237 27.303l.316-1.009-.031-3.175-2.189-2.084-2.57 1.047-1.191 4.167.7 3.559 3.143-.361 1.822-2.144zm23.819 7.546l4.408 6.601 3.45 2.855 4.921-7.87.873-4.933-4.41-.474-4.03-6.696-4.451-1.64-6.604-4.968 5.148-3.634-2.652-7.542-2.442-3.354-6.769-3.352-2.922-5.549-5.207 1.991-.363-3.863-3.862-4.322-6.221-4.714-2.652 3.714-5.547 2.662.417-6.064-4.81-10.052-7.106 4.063-2.591 7.701-2.209-5.923 2.063-6.371-7.24 2.651-2.883 3.991-2.155 8.421.889 9.051 3.983.038-2.932 3.924 2.332 2.961 4.547 1.255 5.931 2.417 10.204 1.818 5.083-1.044 1.501-2.42 2.211 2.788 2.471.462 2.968 4.965-1.796 1.98 5.68 2.626 4.295 3.678 1.081 2.55.771 3.239-3.627 6.925-.979 3.443.937 2.423-5.772.859-5.269.119-1.847 4.869 2.372 2.226 8.107-1.031-.045-1.889 4.083 3.148 4.183 3.276-.979 1.773 3.398 3.021 6.017 3.535 7.604 2.391-.456-2.089-2.92-3.672-3.963-5.373 7.033 4.997 3.536 1.66.966-4.438-1.825-6.298-1.155-1.729-3.806-3.035-2.949-3.911.354-3.942 3.629-.875zM222.346 51.338l2.336 7.293 4.957 5.88 9.811-1.088 6.313 1.968-4.375 6.053-2.214-1.776-7.664-.712 1.19 8.314 3.96 6.036-.795 5.201-4.972 3.462-2.271 5.471 4.548 2.646 3.823 8.549-7.497-5.703-1.71.941 1.381 9.377-5.184 2.833.352 5.851 5.301.626 4.173 1.438 8.236-1.845 7.327 3.269 7.492-7.191-.061-3.019-4.791.482-.392-2.841 3.917-3.829 1.33-5.151 4.332-3.829 2.664-4.762-2.319-7.103 1.938-2.649-3.865-1.887 8.489-1.628 1.787-3.147 5.784-2.604 4.795-13.473 4.569-4.943 6.616-11.124-6.104.098 2.535-4.303 6.784-3.993 6.841-8.903.123-5.731-5.131-6.042-6.021-2.93-7.494-1.819-6.072-1.489-6.073-1.503-8.095 3.977-1.49-2.527-8.57.976-5.028 2.571-3.701 3.65-2.133 11.744L239 24.517l-3.477-1.142-4.122 7.97-5.501 3.348-3.274.664-4.169 3.837.614 6.646 3.275 5.498zm74.401 265.006l-.982-1.984-1.059 1.262.701 1.361 3.556 1.713 1.039-.262 1.379-1.656-2.6.111-2.034-.545zm-57-77.867l.614 1.63 1.979.138 3.282-3.337.06-1.188-3.851-.059-2.084 2.816zm62.128 66.44l-2.867-1.799-3.687-1.087-.97.365 2.607 2.039 3.634 1.343 1.365-.076-.082-.785zm24.89 4.795l-.357-2.235-1.962.723.868-3.113-2.796-1.321-1.293 1.047-2.488-1.179.984-1.509-1.883-.933-1.83 1.469 1.855-3.825 1.497-2.8.542-1.217-1.301-.197-2.433 1.547-1.738 2.529-2.897 6.917-2.354 2.558 1.22 1.144-1.747 1.473.43 1.231 5.442.126 3.013-.248 2.69 1.005-1.98 1.932 1.673.142 3.253-3.576.781.528-.608 3.367 1.843.77 1.269-.151 1.18-3.614-.873-2.59zm-21.196 4.763l-2.811 4.56-4.633.581-3.642-2.009-.915-3.07-.889-4.462 2.648-2.829-2.482-2.089-4.195.426-5.881 3.53-4.501 5.452-2.381.672 3.227-3.804 4.044-5.574 3.575-1.899 2.348-3.112 2.904-.303 4.208.031 5.997.919 4.74-.708 3.528-3.624 4.621-1.587 2.012-1.58 2.035-1.706-.205-5.188-1.126-1.772-2.184-.628-1.111-4.047-1.8-1.548-4.471-1.264-2.521-2.822-3.729-2.826 1.127-3.197-3.101-6.26-3.651-6.893-2.184-4.983-1.855 2.611-2.682 6.053-4.06 2.973-2.032-3.155-2.561-.847-.932-6.99.084-4.797-5-.438-.851-2.266-3.453-3.436-2.611-2.039-2.322 1.583-2.883-.585-4.807-1.646-1.952 1.397.937 9.177 1.222 5.116-3.309 5.751 3.406 4.022 1.904 4.44.229 3.422-1.554 3.504-3.177 3.461-4.489 2.281 1.978 2.529 1.464 7.402-1.517 4.676-2.159 1.458-4.172-4.283-2.031-5.168-.872-4.759.458-4.194-3.05-.474-4.63-.283-2.971-2.082-3.513-1.373-2.006-2.379-2.803-1.935-5.21-2.229-3.923 1.02-1.311-3.947-1.263-4.99-4.12-.902.155-6.411 1.087-4.483 3.041-6.6 3.431-4.902 3.262-.769.186-4.048 2.213-2.682 4.014-.424 3.252-4.392.818-2.897 2.703-5.725.836-3.5 2.899 2.107 3.899-1.076 5.49-4.964.357-3.539-1.977-3.98 2.086-4.057-.169-3.865-3.763-3.953-4.145-1.19-3.985-.624-.153 8.714-2.045 6.555-2.928 5.304-2.712-4.946.835-5.606-3.352-5.018-3.747 6.09.012-7.991-5.214-1.626 2.488-4.014-3.809-9.586-2.836-3.904-3.698-1.442-3.315 6.428-.225 9.343 3.272 3.292 3.004 4.906-1.268 7.708-2.255-.202-1.785 5.884.017-7.004-4.345-2.583-2.493 1.335.324 4.672-4.09-.178-4.353 1.173-4.954-3.353-3.131.598-2.818-4.114-2.263-1.84-2.243.773-3.413.355-1.811 2.614 2.862 3.187-3.05 3.725-2.989-4.423-2.388 1.302-7.568.873-5.068-1.589 3.945-3.736-3.782-3.902-2.747.5-3.859-1.323-6.562-2.891-4.288-3.373-3.396-.469-1.059 2.357-3.445 1.311-.379-6.15-3.733 5.505-4.741-7.321-1.938-.892-.626 3.905-2.092 1.904-1.926-3.393-4.589 2.048-4.2 3.551-4.165-.98-3.396 2.495-2.461 3.276-2.924-.717-4.414-3.8-5.23-1.936-.019 27.648-.015 35.43 2.761.167 2.731 1.556 1.958 2.436 2.491 3.596 2.728-3.054 2.815-1.793 1.488 2.855 1.889 2.229 2.567 2.424 1.753 3.794 2.867 5.881 4.767 3.204.078 3.124-1.559 2.355.059 2.484 3.392 3.449.492 3.761 3.587 1.958-.399 2.79 1.562 3.958 5.078 1.825 2.003 1.887 5.428 4.227.376.011h62.217l9.593-.003 5.803.003.008-1.644.949-.021.498 2.345.872.718 1.958.26 2.863.672 2.72 1.303 2.271-.545 3.449 1.089 1.138-1.659 1.591-.663.623-1.032.632-.554 2.607.856 1.932.102.67.566.938 2.382 3.147.627-.495 1.182 1.109 1.212-.478 1.56 1.177.513-.587 1.372.752.125.527-.597.55.898 2.103.501 2.132.042 2.273.412 2.508.779.915 1.256 1.816 3.037-.903 1.299-2.279-.54-1.415-2.441.355 2.486-1.337 2.17.147 1.838-.231 1.074-1.815 1.267-1.318 2.091-.617 1.321 1.539.237 2.081-1.201 1.225-1.059.833-.173 1.542.382.746-.591 1.368-.481 2.443-.469v.002-.002l-.249-1.15-.134.044-.856.198-1.118-.363.839-1.317.855-.457 1.979-.565 2.37-.528 1.244.734.782-.851.889-.54.596.286.032.061 2.87-2.73 1.265-.726 4.26-.027 5.167-.003.281-.978.897-.2 1.191-.616.995-1.82.855-3.148 2.139-3.097.932 1.083 1.88-.7 1.245 1.187-.002 5.525 1.833 2.251 3.116-.483 4.488-.13-4.868 3.261.107 3.291 2.129.283 3.133-2.793 2.781-1.584 6.21-2.351 3.469-2.616-1.811-1.46-.194-2.95zm-53.664-71.103l1.098-3.124-.713-1.233-1.148-.132-1.082 1.804-.131.413.736 1.771 1.24.501zM109.249 279.8h0l1.559-2.354-1.559 2.354z"
  }, {
    id: "COD",
    d: "M561.707 453.605l-.17 3.262 1.124.377-.902.989-1.077.741-1.072 1.452-.589 1.295-.159 2.236-.649 1.064-.024 2.1-.806.777-.104 1.658-.385.215-.259 1.525.705 1.268.178 3.367.504 2.572-.28 1.455.561 1.626 1.626 1.57 1.514 3.542-1.104-.286-3.766.475-.752.337-.799 1.799.628 1.246-.498 3.351-.347 2.851.757.507 1.96 1.108.77-.518.234 3.08-2.146-.024-1.151-1.573-1.033-1.216-2.149-.398-.629-1.492-1.714.898-2.246-.397-.937-1.291-1.78-.262-1.314.069-.16-.883-.968-.071-1.277-.167-1.736.425-1.219-.07-.694.26.15-3.371-.935-1.049-.206-1.735.413-1.698-.568-1.086-.052-1.768-3.402.024.245-1.011-1.431.011-.151.486-1.739.109-.704 1.637-.42.704-1.549-.397-.925.395-1.854.228-1.074-1.471-.645-.908-.804-1.682-.692-2.088-8.274-.037-.983.336-.813-.052-1.157.376-.392-.868.713-.296.087-1.22.459-.719 1.02-.587.737.284.959-1.069 1.527.027.18.791 1.048.495 1.649-1.751 1.634-1.364.708-.893-.094-2.295 1.218-2.708 1.285-1.435 1.846-1.342.322-.889.07-1.021.457-.966-.147-1.579.349-2.469.549-1.739.839-1.49.167-1.685.252-1.947 1.091-1.418 1.502-.9 2.307.95 1.786 1.03 2.051.275 2.092.545.838-1.687.385-.215 1.278.281 3.121-1.395 1.107.591.907-.084.421-.68 1.042-.239 2.109.294 1.799.064.925-.296 1.699 2.307 1.259.339.75-.469 1.297.183 1.561-.59.666 1.192z"
  }, {
    id: "CAF",
    d: "M518.094 442.656l2.319-.212.516-.722.465.054.7.637 3.53-1.076 1.19-1.098 1.463-.984-.278-.992.791-.26 2.708.176 2.638-1.308 2.027-3.086 1.423-1.148 1.775-.485.318 1.215 1.617 1.771.008 1.153-.455 1.175.179.877.973.812 2.135 1.231 1.535 1.136.026.914 1.886 1.462 1.168 1.214.708 1.681 2.096 1.108.451.887-.925.296-1.799-.064-2.109-.294-1.042.239-.421.68-.907.084-1.107-.591-3.121 1.395-1.278-.281-.385.215-.838 1.687-2.092-.545-2.051-.275-1.786-1.03-2.307-.95-1.502.9-1.091 1.418-.252 1.947-1.804-.156-1.897-.469-1.671 1.479-1.471 2.595-.295-.808-.126-1.272-1.282-.897-1.035-1.441-.239-1.002-1.325-1.459.226-.833-.279-1.178.216-2.17.673-.509z"
  }, {
    id: "COG",
    d: "M511.69 476.717l-1.05-.959-.848.47-1.131 1.207-2.303-2.959 2.135-1.541-1.057-1.844.961-.701 1.892-.342.223-1.235 1.498 1.338 2.475.118.861-1.317.354-1.853-.306-2.175-1.327-1.647 1.214-3.226-.699-.553-2.086.227-.784-1.44.204-1.216 3.538.11 2.267.735 2.228.659.201-1.505 1.471-2.595 1.671-1.479 1.897.469 1.804.156-.167 1.685-.839 1.49-.549 1.739-.349 2.469.147 1.579-.457.966-.07 1.021-.322.889-1.846 1.342-1.285 1.435-1.218 2.708.094 2.295-.708.893-1.634 1.364-1.649 1.751-1.048-.495-.18-.791-1.527-.027-.959 1.069z"
  }, {
    id: "CHE",
    d: "M502.154 312.344l.108.734-.429 1.007 1.269.747 1.431.111-.222 1.67-1.236.684-2.075-.508-.607 1.63-1.335.128-.486-.639-1.572 1.364-1.352.191-1.207-.86-.962-1.771-1.339.634.041-1.838 2.05-2.303-.09-1.05 1.278.381.769-.707 2.385.029.576-.903z"
  }, {
    id: "CIV",
    d: "M467.245 449.457l-1.276.029-1.956-.547-1.798.032-3.321.488-1.947.807-2.776 1.025-.542-.073.216-2.302.268-.351-.086-1.102-1.187-1.173-.891-.187-.817-.77.609-1.245-.28-1.358.129-.816.445-.004.165-1.226-.217-.544.268-.391 1.042-.339-.693-2.257-.646-1.168.225-.96.559-.219.366-.258.776.426 2.165.023.516-.827.484.056.809-.32.435 1.211.654-.357 1.157-.419 1.261.617.49.936 1.261.596.98-.711 1.314-.107 1.919.729.744 4.012-1.182 2.361-.731 3.168 1.216 2.412z"
  }, {
    id: "CHL",
    d: "M282.813 636.726l.002 10.568 3.002.003 1.689.13-.929 1.978-2.404 1.532-1.378-.157-1.66-.4-2.036-1.479-2.937-.707-3.528-2.71-2.864-2.573-3.862-5.254 2.312.974 3.937 3.133 3.719 1.704 1.447-2.174.909-3.202 2.584-1.907 1.997.541zm1.162-112.002l1.098 4.15 2.023-.415.34.758-.962 3.159-3.054 1.509.089 5.143-.585 1.001.839 1.225-1.979 1.95-1.836 2.963-1.002 2.896.265 3.115-1.728 3.343 1.292 5.694.728.609-.007 3.086-1.6 3.313.065 2.868-2.123 2.263.009 3.217.853 3.462-1.679 1.3-.75 3.223-.659 3.751.474 4.543-1.127.767.655 4.395 1.266 1.462-.924 1.63 1.301.782.3 1.478-1.224.748.301 2.331-1.024 5.35-1.486 3.52.326 2.112-.889 2.68-2.151 1.878.245 4.599.988 1.596 1.867-.284-.054 3.332 1.162 2.632 6.775.608 2.599.715-2.495-.034-1.35 1.128-2.53 1.669-.452 4.378-1.187.11-3.164-1.535-3.209-3.251h0l-3.488-2.632-.878-2.874.794-2.623-1.411-2.937-.359-7.344 1.192-4.033 2.961-3.187-4.256-1.19 2.67-3.569.955-6.557 3.116 1.374 1.465-7.97-1.881-1.003-.876 4.749-1.769-.541.881-5.42.956-6.843 1.288-2.478-.807-3.495-.231-3.977 1.182-.114 1.72-5.596 1.938-5.432 1.187-4.968-.646-4.912.837-2.671-.336-3.955 1.64-3.867.505-6.038.9-6.374.877-6.747-.205-4.874-.584-4.153 1.442-.749.751-1.501 1.374 1.992.375 2.122 1.471 1.25-.883 2.868 1.503 3.347z"
  }, {
    id: "CMR",
    d: "M511.916 457.069l-.35-.152-1.659.359-1.704-.373-1.332.183-4.563-.064.409-2.201-1.095-1.844-1.28-.474-.57-1.251-.718-.4.032-.773.722-1.979 1.334-2.702.811-.025 1.67-1.642 1.063-.046 1.574 1.153 1.927-.945.262-1.167.63-1.132.434-1.424 1.499-1.16.566-1.975.595-.629.395-1.47.742-1.808 2.361-2.197.149-.946.305-.514-1.11-1.136.09-.909.792-.164 1.115 1.828.187 1.889-.102 1.886 1.526 2.575-1.566-.028-.791.202-1.278-.284-.61 1.334 1.656 1.647 1.221.478.394 1.166.885 1.94-.44.761-1.41 2.843-.673.509-.216 2.17.279 1.178-.226.833 1.325 1.459.239 1.002 1.035 1.441 1.282.897.126 1.272.295.808-.201 1.505-2.228-.659-2.267-.735z"
  }, {
    id: "CHN",
    d: "M784.628 410.405l-2.423 1.412-2.299-.91-.081-2.535 1.382-1.341 3.063-.831 1.612.071.627 1.131-1.232 1.301-.649 1.702zm48.558-107.52l4.88 1.379 3.321 3.035 1.135 3.945 4.261.005 2.431-1.647 4.634-1.239-1.474 3.761-1.089 1.512-.961 4.462-1.886 3.888-3.402-.703-2.407 1.4.739 3.357-.404 4.553-1.432.103.017 1.929-1.811-2.244-1.114 2.13-4.33 1.625.438 1.975-2.424-.136-1.331-1.172-1.927 2.644-3.09 1.984-2.283 2.347-3.92 1.057-2.064 1.689-3.02.981 1.49-1.668-.587-1.411 2.221-2.454-1.481-1.93-2.444 1.302-3.165 2.544-1.728 2.34-2.75.173-1.431 1.676 1.479 2.409 2.294.582.095 1.583 2.218 1.025 3.143-2.513 2.489 1.374 1.813.093.455 1.836-3.97.974-1.311 1.872-2.727 1.728-1.439 2.393 3.019 1.864 1.102 3.307 1.706 3.046 1.904 2.529-.046 2.426-1.76.887.671 1.725 1.65 1-.431 2.609-.712 2.518-1.567.284-2.047 3.407-2.271 4.086-2.604 3.676-3.855 2.818-3.9 2.553-3.159.347-1.714 1.34-.97-.979-1.586 1.498-3.919 1.504-2.967.459-.957 3.151-1.554.174-.735-2.162.664-1.157-3.762-.959-1.325.488-2.823-.778-1.335-1.222.443-1.738-2.563-.553-1.352-1.138-2.39 1.615-2.726.349-2.236-.016-1.505.737-1.453.442.424 3.433-1.495-.082-.252-.703-.085-1.24-2.057.874-1.214-.552-2.082-1.128.816-2.507-1.775-.587-.669-2.801-2.96.506.337-3.635 2.655-2.58.113-2.566-.083-2.398-1.224-.75-.937-1.86-1.641.235-3.023-.474.947-1.334-1.314-1.986-1.999 1.346-2.352-.785-3.232 2.03-2.552 2.355-2.262.395-1.228-.849-1.48-.077-2.004-.732-1.515.803-1.854 2.341-.235-2.481-1.71.665-3.27-.309-3.172-.725-2.275-1.393-2.179-.627-.941-1.533-1.575-.459-2.831-2.094-2.248-.993-1.162.773-3.896-2.265-2.755-2.065-.786-3.629 2.012.445.092-1.694-1.115-1.708.284-2.744-3.014-3.989-4.611-1.39-.83-2.661-2.071-1.627-.499-1.007-.421-2.012.098-1.381-1.703-.812-.921.359-.711-3.324.798-.829-.387-.85 2.677-1.726 1.938-.718 2.968.492 1.061-2.354 3.597-.44.999-1.478 4.419-2.031.394-.853-.224-2.165 1.924-.995-2.524-6.754 5.555-1.582 1.436-.886 2.022-7.262 5.563 1.353 1.56-1.86.134-4.186 2.329-.395 2.134-2.831 1.098-.352.736 2.97 2.356 2.23 3.999 1.565 1.935 3.319-1.079 4.728 1.009 1.729 3.332.678 3.776.552 3.388 2.448 1.732.433 1.277 3.568 1.646 2.269 3.091-.088 5.787.852 3.729-.528 2.768.565 4.148 2.291 3.393-.003 1.241 1.164 3.265-2.014 4.529-1.312 4.202-.144 3.276-1.337 2.012-2.051 1.963-1.297-.454-1.28-.896-1.499 1.473-2.538 1.577.358 2.882.8 2.794-2.101 4.275-1.546 2.055-2.662 1.974-1.156 4.072-.541 2.213.459.307-1.453-2.541-2.887-2.25-1.333-2.155 1.538-2.766-.647-1.587.528-.723-1.706 1.981-4.228 1.365-3.247 3.365 1.632 3.952-2.739-.026-1.929 2.531-4.725 1.56-1.45-.035-2.522-1.538-1.095 2.315-2.313 3.484-.845 3.718-.127 4.196 1.394 2.462 1.711 1.733 4.611 1.051 1.937.977 2.731 1.033 4.288z"
  }, {
    id: "COL",
    d: "M263.917 463.809l-1.2-.66-1.376-.922-.797.442-2.379-.386-.684-1.198-.522.044-2.805-1.59-.38-.865 1.046-.209-.124-1.396.658-1.01 1.391-.187 1.18-1.752 1.073-1.465-1.033-.664.529-1.621-.633-2.558.601-.735-.442-2.37-1.135-1.495.359-1.365.903.201.529-.835-.651-1.658.341-.412 1.448.089 2.104-1.968 1.155-.301.027-.934.517-2.392 1.608-1.316 1.767-.054.223-.592 2.194.237 2.206-1.435 1.093-.637 1.357-1.373.994.175.735.75-.544.959-1.801.477-.712 1.42-1.085.814-.815 1.053-.343 2.019-.777 1.652 1.447.189.359 1.296.619.619.222 1.133-.333 1.041.098.586.69.235.668.979 3.606-.27 1.629.357 1.973 2.413 1.133-.3 2.02.15 1.598-.319.992.481-.505 1.508-.626.939-.22 2.005.564 1.856.797.829.097.625-1.421 1.388 1.017.615.746.974.855 2.779-.53.343-.546-1.643-.779-.884-.928.961-5.462-.063.034 1.744 1.643.288-.095 1.067-.56-.289-1.58.459-.014 2.024 1.244 1.016.439 1.595-.066 1.208-1.26 7.647-1.404-1.484-.837-.066 1.809-2.839-2.147-1.306-1.683.24-1.013-.482-1.545.737-2.087-.35-1.652-2.921-1.298-.718-.895-1.314-1.865-1.32z"
  }, {
    id: "CRI",
    d: "M242.629 440.397l-1.522-.624-.568-.591.322-.49-.102-.623-.777-.675-1.103-.555-.965-.362-.185-.827-.735-.505.18.822-.56.675-.64-.784-.901-.279-.384-.571.017-.862.371-.892-.792-.4.643-.548.422-.366 1.847.752.645-.37.889.237.465.584.827.189.672-.602.71 1.541 1.084 1.139 1.317 1.206-1.085.253.016 1.136.584.419-.42.334.11.51-.234.571z"
  }, {
    id: "CUB",
    d: "M244.585 396.94l2.422.216 2.203.034 2.633 1.032 1.116 1.105 2.619-.341.993.709 2.375 1.862 1.745 1.35.923-.041 1.673.61-.204.839 2.066.123 2.12 1.218-.333.696-1.864.377-1.887.146-1.932-.234-4.015.289 1.88-1.657-1.143-.773-1.808-.199-.968-.861-.665-1.704-1.584.117-2.615-.805-.841-.63-3.655-.467-.979-.587 1.052-.754-2.75-.155-2.015 1.567-1.162.042-.402.734-1.388.328-1.199-.284 1.48-.929.607-1.088 1.268-.672 1.432-.59 2.123-.29z"
  }, {
    id: "CYP",
    d: "M570.306 358.286l1.894-1.459-2.549 1.024-2.02-.047-.405.825-.198.018-1.332.126.655 1.367 1.373.44 2.874-1.38-.088-.274z"
  }, {
    id: "CZE",
    d: "M522.807 307.861l-1.292-.8-1.317.22-2.177-1.298-.987.319-1.577 1.735-2.083-1.364-1.583-1.836-1.431-1.033-.297-1.825-.491-1.296 2.038-.954 1.041-1.098 2.014-.858.703-.846.739.511 1.251-.464 1.33 1.429 2.096.385-.175 1.211 1.523.905.418-1.131 1.924.491.265 1.367 2.085.264 1.29 2.13-.836.005-.434.774-.644.186-.183.973-.537.202-.076.396-.957.439-1.242-.071z"
  }, {
    id: "DEU",
    d: "M503.072 278.923l.05 1.875 2.834 1.122-.03 1.697 2.85-.896 1.577-1.314 3.166 1.892 1.323 1.513.656 2.393-.782 1.244 1.018 1.649.694 2.449-.219 1.563 1.149 2.864-1.251.464-.739-.511-.703.846-2.014.858-1.041 1.098-2.038.954.491 1.296.297 1.825 1.431 1.033 1.583 1.836-.989 1.951-1.007.534.397 2.72-.261.704-.874-.849-1.345-.127-2.004.744-2.473-.177-.399 1.091-1.419-1.148-.846.228-3.005-1.269-.576.903-2.385-.029.356-2.975 1.418-2.9-4.04-.786-1.323-1.123.158-1.895-.56-.983.318-2.968-.471-4.69 1.685-.002.71-1.711.699-4.225-.524-1.583.548-.998 2.343-.257.52 1.04 1.904-2.333-.641-1.793-.129-2.745 2.119.642z"
  }, {
    id: "DJI",
    d: "M596.046 427.719l.664.883-.088 1.183-1.6.681 1.204.779-1.033 1.519-.622-.506-.675.202-1.566-.048-.045-.864-.219-.784.949-1.335.985-1.261 1.201.248z"
  }, {
    id: "DNK",
    d: "M510.834 275.843l-1.683 3.971-2.934-2.761-.391-2.054 4.113-1.656.895 2.5zm-4.985-4.251l-.685 1.901-.835-.545-2.019 3.587.762 2.389-1.794.741-2.119-.642-1.138-2.723-.085-5.12.467-1.375.804-1.54 2.47-.32.984-1.429 2.256-1.473-.095 2.676-.83 1.676.336 1.429 1.521.768z"
  }, {
    id: "DOM",
    d: "M274.182 407.348l.351-.505 2.188.013 1.661.763.739-.075.509 1.049 1.535-.059-.091.879 1.247.107 1.379 1.08-1.042 1.195-1.333-.638-1.287.123-.923-.14-.505.536-1.077.18-.427-.711-.926.421-1.123 2.006-.722-.465-.142-.842.058-.797-.722-.882.684-.496.214-1.133z"
  }, {
    id: "DZA",
    d: "M508.898 396.081l-9.608 5.752-8.118 5.85-3.954 1.317-3.11.289-.032-1.88-1.299-.481-1.745-.849-.667-1.393-9.458-6.547-9.458-6.654-10.546-7.525.054-.608-.001-.211-.024-3.752 4.528-2.359 2.8-.489 2.295-.865 1.072-1.617 3.278-1.284.121-2.417 1.622-.286 1.269-1.216 3.669-.555.514-1.285-.739-.705-.968-3.529-.167-2.053-1.057-2.178 2.695-1.873 3.032-.598 1.77-1.425 2.7-1.057 4.752-.62 4.638-.284 1.414.518 2.64-1.376 2.996-.027 1.141.814 1.917-.213-.57 1.787.445 3.288-.66 2.812-1.728 1.887.247 2.527 2.293 1.984.024.802 1.729 1.332 1.195 5.857.908 2.84.152 1.485-.494 2.59.203 1.44-.357 1.719.245 1.965-1.113 1.3 1.658 2.256.105 1.32.998 1.711 1.31-.561 2.213 1.421z"
  }, {
    id: "ECU",
    d: "M250.097 472.874l1.492-2.085-.607-1.217-1.071 1.294-1.68-1.221.569-.786-.473-2.528.982-.421.516-1.735 1.061-1.793-.195-1.137 1.536-.598 1.927-1.108 2.805 1.59.522-.044.684 1.198 2.379.386.797-.442 1.376.922 1.2.66.392 2.115-.873 1.811-3.058 2.918-3.371 1.1-1.718 2.428-.531 1.883-1.585 1.15-1.177-1.411-1.132-.302-1.159.223-.076-1.024.8-.665z"
  }, {
    id: "EST",
    d: "M543.423 264.71l.325-3.124-1.031.672-1.779-1.9-.244-3.113 3.546-1.528 3.532-.802 3.042.912 2.894-.163.422.96-1.995 3.132.831 4.962-1.201 1.659-2.312-.009-2.413-1.942-1.229-.646z"
  }, {
    id: "EGY",
    d: "M573.171 377.28l-.788 1.286-.603 2.403-.763 1.646-.654.55-.934-1.018-1.265-1.412-2.001-4.578-.288.292 1.162 3.373 1.721 3.182 2.119 4.872 1.036 1.685.9 1.742 2.516 3.392-.557.532.09 1.974 3.266 2.712.493.616h-33.272v-22.408l-.841-2.586.722-1.996-.434-1.39 1.016-1.567 3.73-.055 2.698.865 2.784.964 1.298.506 2.159-1.031 1.154-.936 2.473-.27 1.994.413.763 1.618.651-1.065 2.247.77 2.186.185 1.379-.821z"
  }, {
    id: "ESH",
    d: "M438.411 383.192l-1.778 3.2-1.867 1.135-1.013 1.917-.066 1.644-.742 1.792-.944.494-1.561 1.941-.964 2.143.181 1.024-.918 1.571-1.076.82-.133 1.39-.12 1.263.611-.997 10.98.019-.531-4.344.686-1.556 2.627-.273-.091-7.851 9.203.163.008-4.727.054-.608-.001-.204-12.51.014z"
  }, {
    id: "ERI",
    d: "M594 428.168l-.958-.924-1.153-1.678-1.243-.92-.725-.992-2.441-1.153-1.922-.034-.676-.602-1.644.677-1.702-1.308-.876 2.149-3.264-.601-.298-1.153 1.207-4.251.277-1.932.883-.894 2.065-.48 1.419-1.67 1.628 3.381.773 2.666 1.536 1.41 3.827 2.724 1.558 1.639 1.52 1.654.877.983 1.378.86-.845.697z"
  }, {
    id: "ESP",
    d: "M449.921 334.562l.141-2.687-1.145-1.652 3.966-2.775 3.431.697 3.765-.024 2.984.657 2.327-.202 4.532.128 1.118 1.49 5.161 1.731 1.019-.821 3.155 1.715 3.25-.49.15 2.19-2.657 2.486-3.593.784-.25 1.242-1.723 2.033-1.08 2.956 1.093 2.054-1.622 1.592-.606 2.302-2.117.702-1.986 2.69-3.558.053-2.673-.066-1.756 1.226-1.071 1.306-1.372-.286-1.038-1.169-.795-2.001-2.617-.542-.234-1.161 1.039-1.322.385-.963-.967-1.057.774-2.35-1.123-2.165 1.211-.299.113-1.721.455-.536.036-2.875 1.296-1.006-.784-1.874-1.634-.132-.48.474-1.656.004-.702-1.841-1.145.55z"
  }, {
    id: "ETH",
    d: "M581.536 421.234l1.702 1.308 1.644-.677.676.602 1.922.034 2.441 1.153.725.992 1.243.92 1.153 1.678.958.924-.985 1.261-.949 1.335.219.784.045.864 1.566.048.675-.202.622.506-.611 1.005 1.035 1.559 1.034 1.361 1.071 1.007 9.167 3.344 2.359-.018-7.924 8.416-3.652.123-2.499 1.969-1.798.052-.767.88-1.916-.001-1.13-.943-2.562 1.168-.828 1.163-1.87-.22-.621-.322-.657.077-.886-.028-3.549-2.371h-1.951l-.958-.92v-1.569l-1.456-.47-1.658-3.047-1.28-.651-.492-1.122-1.42-1.369-1.723-.202.955-1.602 1.489-.069.419-.86-.037-2.537.829-2.961 1.328-.794.282-1.161 1.202-2.173 1.691-1.413 1.14-2.817.447-2.466 3.264.601z"
  }, {
    id: "FIN",
    d: "M555.42 193.099l-.409 5.404 4.294 4.99-2.587 5.478 3.261 7.957-1.888 5.763 2.524 4.855-1.146 4.145 4.151 4.256-1.055 3.105-2.605 3.452-6.003 7.406-5.088.451-4.931 2.068-4.562 1.179-1.623-3.065-2.715-1.869.624-5.728-1.362-5.408 1.337-3.579 2.542-3.942 6.415-7.02 1.871-1.386-.291-2.837-3.9-3.225-.946-2.7-.074-11.12-4.377-5.153-3.737-3.802 1.681-2.088 3.116 4.153 3.661-.384 3.01 1.869 2.674-3.439 1.375-5.855 4.353-2.775 3.598 3.252z"
  }, {
    id: "FJI",
    d: "M980.525 508.605l-.348 1.396-.231.155-1.782.716-1.792.613-.36-1.085 1.401-.596.889-.16 1.645-.905.578-.134zm-5.835 4.319l-1.274-.361-1.082 1.004.271 1.288 1.546.363 1.738-.403.463-1.529-.965-.843-.697.481z"
  }, {
    id: "FLK",
    d: "M303.657 633.134l3.365-2.698 2.383 1.12 1.682-1.789 2.244 2.013-.842 1.58-3.785 1.365-1.262-1.591-2.383 2.048z"
  }, {
    id: "FRA",
    d: "M502.058 333.54l-.926 2.893-1.273-.759-.649-2.526.566-1.407 1.806-1.455.476 3.254zm-16.745-33.35l1.957 2.057 1.439-.338 2.453 1.973.627.374.809-.091 1.323 1.123 4.04.787-1.417 2.899-.356 2.975-.77.707-1.278-.381.09 1.05-2.051 2.303-.041 1.838 1.339-.634.963 1.771-.116 1.134.825 1.498-.972 1.208.723 3.039 1.52.494-.321 1.684-2.54 2.173-5.53-1.039-4.083 1.244-.321 2.292-3.25.49-3.155-1.716-1.02.821-5.161-1.73-1.118-1.491 1.45-2.319.534-7.877-2.894-4.264-2.068-2.086-4.285-1.599-.283-3.066 3.636-.923 4.708 1.091-.889-4.845 2.647 1.849 6.528-3.374.842-3.605 2.452-.898.406 1.562 1.303.073 1.305 1.767z"
  }, {
    id: "GAB",
    d: "M506.358 474.476l-2.881-2.817-1.853-2.301-1.703-2.878.09-.925.613-.89.681-2.028.565-2.065.945-.161 4.08.028-.024-3.353 1.332-.183 1.704.373 1.659-.359.35.152-.204 1.216.784 1.44 2.086-.227.699.553-1.214 3.226 1.327 1.647.306 2.175-.354 1.853-.861 1.317-2.475-.118-1.498-1.338-.223 1.235-1.892.342-.961.701 1.057 1.844z"
  }, {
    id: "GBR",
    d: "M459.378 281.001l-1.503 3.287-2.119-.98-1.734.065.578-2.571-.578-2.604 2.351-.202 3.005 3.005zm7.449-20.762l-2.997 5.729 2.856-.716 3.072.027-.731 4.218-2.521 4.535 2.899.318.223.524 2.497 5.787 1.919.774 1.726 5.409.799 1.841 3.397.882-.341 2.933-1.428 1.331 1.12 2.327-2.522 2.328-3.751-.041-4.773 1.212-1.308-.867-1.854 2.058-2.594-.497-1.97 1.667-1.491-.87 4.112-4.636 2.51-.966-.022-.004-4.379-.749-.793-1.799 2.93-1.413-1.536-2.479.533-3.056 4.167.425h.005l.413-2.743-1.878-2.952-.042-.068-3.405-.852-.668-1.318 1.019-2.195-.922-1.366-1.51 2.338-.164-4.797-1.416-2.587 1.018-5.356 2.178-4.311 2.239.425 3.384-.45z"
  }, {
    id: "GEO",
    d: "M591.765 335.853l.418-1.6-.701-2.577-1.62-1.404-1.554-.439-1.027-1.176.342-.455 2.37.658 4.128.621 3.817 1.832.492.706 1.7-.597 2.615.794.859 1.55 1.762.871-.728.516 1.381 2.017-.382.434-1.512-.22-2.089-1.068-.687.607-3.896.579-2.701-1.827z"
  }, {
    id: "GUF",
    d: "M327.893 456.407l-1.075 1.059-1.342.199-.382-.785-.627-.117-.868.756-1.225-.575.711-1.19.244-1.27.484-1.195-1.088-1.647-.222-1.912 1.459-2.405.952.308 2.065.662 2.968 2.36.464 1.144-1.659 2.554-.859 2.054z"
  }, {
    id: "GHA",
    d: "M478.226 446.843l-4.396 1.638-1.559.959-2.527.811-2.499-.794.127-1.103-1.216-2.412.731-3.168 1.182-2.361-.744-4.012-.383-2.13.066-1.608 4.871-.134 1.239.207.905-.458 1.297.226-.207.884 1.171 1.461-.005 2.053.267 2.222.704 1.027-.621 2.533.223 1.397.748 1.778z"
  }, {
    id: "GRL",
    d: "M344.134 23.907l9.414-13.605 9.838 1.066 3.576-8.952L376.872 0l22.395 3.147 17.539 18.588-5.178 8.31-10.726.923-15.092 2.03 1.412 3.645 9.925-2.243 8.446 6.913 5.443-6.124 2.331 7.15-3.078 10.967 7.138-6.925 13.615-7.55 8.405 3.813 1.575 8.111-11.431 12.668-1.583 3.893-8.962 2.866 6.494.786-3.28 11.508-2.257 9.598.088 15.257 3.367 8.334-4.38.513-4.611 3.88 5.174 6.3.659 9.626-2.998 1.016 3.633 9.154-6.229.742 3.252 4.14-.919 3.509-3.954 1.518-3.907.028 3.512 6.481.039 4.128-5.549-3.833-1.443 2.489 3.785 2.293 3.674 5.476 1.063 6.955-4.998 1.623-2.161-3.263-3.467-4.98.959 5.869-3.257 4.411 7.39.351 3.865.451-7.515 7.029-7.621 6.126-8.205 2.616-3.093.033-2.9 2.872-3.901 7.635-6.03 4.889-1.937.283-3.733 1.679-4.03 1.583-2.402 4.122-.038 4.558-1.419 4.166-4.572 4.949 1.129 4.705-1.26 4.85-1.437 5.565-3.951.342-4.138-4.634-5.606-.029-2.721-3.18-1.87-5.805-4.859-7.671-1.421-4.156-.383-5.892-3.884-6.267 1.01-5.17-1.871-2.528 2.772-8.656 4.22-2.848 1.107-3.261.587-6.262-3.203 2.867-1.527 1.19-2.518 1.133-3.441-2.605-.187-5.551 1.097-4.478 2.6-.123 5.724 2.255-4.821-5.435-2.509-3.004-2.792 1.241-2.34-2.193 3.13-8.506-1.705-3.523-2.225-6.743-3.375-10.906-3.57-4.179.033-4.627-7.524-6.69-5.953-.852-7.493.472-6.842.857-3.254-3.746-4.872-7.66 7.362-3.969 5.644-.676-11.998-3.369-6.32-5.433.386-5.343 10.615-6.868 10.27-7.159 1.084-5.637-7.568-5.762 2.445-6.644 9.707-12.333 4.079-1.979-1.169-8.57 6.642-5.239 8.622-3.21 8.616-.183 3.059 6.306 7.438-11.324 6.692 7.78 3.937 1.593 5.823 6.412-6.667-10.77z"
  }, {
    id: "GM",
    d: "M428.032 426.427l.358-1.27 3.054-.082.633-.679.889-.046 1.107.706.87.013.924-.483.567.829-1.214.643-1.218-.051-1.203-.605-1.039.661-.502.024-.674.401z"
  }, {
    id: "GIN",
    d: "M451.59 441.914l-.793-.073-.571 1.132-.793-.014-.546-.598.186-1.129-1.173-1.724-.732.317-.599.063-.772.161.032-1.033-.451-.737.091-.821-.608-1.187-.78-1.011-2.242-.003-.654.533-.772.064-.479.61-.324.783-1.498 1.241-1.23-1.67-1.09-1.106-.718-.366-.7-.563-.319-1.251-.41-.625-.815-.465 1.247-1.384.85.052.732-.477.618-.005.442-.377-.239-.943.308-.298.051-.968 1.353.03 2.016.696.618-.064.21-.318 1.529.226.405-.161.161 1.044.445-.003.732-.38.465.095.778.723 1.2.228.769-.616.906-.382.674-.399.561.075.623.626.334.786 1.149 1.191-.575.731-.109.923.597-.279.35.331-.148.844.856.817-.559.219-.225.96.646 1.168.693 2.257-1.042.339-.268.391.217.544-.165 1.226z"
  }, {
    id: "GNQ",
    d: "M501.87 460.572l-.525-.42.963-3.13 4.563.064.024 3.353-4.08-.028z"
  }, {
    id: "GRC",
    d: "M541.704 356.712l1.533 1.156 2.182-.195 2.086.243-.067.595 1.528-.41-.351 1.007-4.038.29.028-.563-3.421-.666.52-1.457zm8.143-20.958l-.868 2.325-.666.414-1.708-.104-1.463-.35-3.396.959 1.944 2.062-1.424.594-1.562.004-1.483-1.884-.526.804.626 2.176 1.403 1.697-1.057.788 1.562 1.65 1.388 1.033.042 2-1.358-1.146-1.236.209.827 1.799-.917.19-1-.694 1.2 3.952-.583.014-.446-1.263-.573-.025-.26 1.318-.454-.299.102-.739-.561-1.045h-.637l.118.843-.25.267-.616-.54-.383-1.021.519-.569-.357-.74-.408-.382-.423-.094-.491-.943.583-.519.357-.484.561.102.251-.41.59-.163.683.461.553.169.386-.622-.938-.084-.555-.194-1.25.28-1.219.048-1.093-1.641-.181-.254.167-.642-1.423-1.155-.19-1.03 1.304-1.765.168-1.19.911-.533.056-.968 1.834-.327 1.069-.81 1.52.072.461-.647.534-.124 2.074.107 2.245-1.024 1.976 1.301 2.548-.351.031-1.859 1.362.996z"
  }, {
    id: "GTM",
    d: "M222.638 424.754l-1.438-.5-1.749-.052-1.283-.57-1.508-1.186.069-.839.325-.676-.398-.54 1.349-2.359 3.599-.009.072-.988-.454-.176-.312-.63-1.036-.672-1.044-.974 1.266-.007.002-1.645 2.618-.005 2.593.032-.022 2.315-.219 3.28.837-.001.914.524.242-.431.822.369-1.278 1.103-1.329.808-.197.554.223.566-.583.731-.656.177.149.339-.526.317-.961.725z"
  }, {
    id: "GNB",
    d: "M432.83 432.442l-1.497-1.187-1.181-.189-.643-.801.016-.433-.855-.605-.178-.61 1.485-.465.929.092.751-.321 5.182.119-.051.968-.308.298.239.943-.442.377-.618.005-.732.477-.85-.052z"
  }, {
    id: "GUY",
    d: "M307.7 439.998l1.841 1.035 1.734 1.831.079 1.446 1.057.066 1.502 1.368 1.107.975-.448 2.517-1.702.73.151.659-.517 1.441 1.243 2.027.898.003.368 1.574 1.712 2.424-.683.1-1.55-.237-.912.741-1.268.489-.887.121-.31.545-1.376-.138-1.725-1.307-.203-1.29-.718-1.41.447-2.374.777-.983-.643-1.298-.964-.423.365-1.228-.652-.644-1.458.124-1.898-2.124.76-.771-.056-1.294 1.726-.45.696-.526-.96-1.042.245-1.025z"
  }, {
    id: "HND",
    d: "M230.43 426.904l-.484-.895-.852-.249.195-1.148-.381-.311-.577-.204-1.23.341-.104-.386-.847-.461-.604-.573-.827-.242.583-.731-.223-.566.197-.554 1.329-.808 1.278-1.103.291.113.615-.509.802-.041.261.236.435-.144 1.302.261 1.296-.076.902-.32.329-.325.894.15.671.198.733-.068.557-.252 1.281.402.445.064.856.541.81.649 1.019.442.739.794-.962-.059-.388.393-.974.376-.708.002-.619.367-.562-.131-.478-.44-.293.084-.36.688-.269-.025-.046.593-.979.791-.516.341-.288.356-.827-.58-.605.766-.585-.02-.658.067.06 1.409-.411.026-.351.654z"
  }, {
    id: "HRV",
    d: "M528.049 318.934l.681 1.55.891 1.134-1.079 1.488-1.269-.874-1.938.055-2.411-.658-1.31.088-.607.822-1.007-.91-.586 1.641 1.373 1.834.608 1.209 1.289 1.447 1.068.853 1.059 1.602 2.481 1.443-.308.645-2.636-1.407-1.626-1.375-2.564-1.142-2.358-2.853.566-.292-1.279-1.648-.052-1.332-1.803-.625-.859 1.706-.828-1.322.063-1.38.1-.064 1.954.136.513-.674.954.652 1.1.077-.01-1.116.974-.41.273-1.627 2.232-1.076.891.5 2.096 1.731 2.316.771z"
  }, {
    id: "HTI",
    d: "M270.04 406.751l1.71.131 2.432.466.245 1.609-.214 1.133-.684.496.722.882-.058.797-1.862-.498-1.323.203-1.711-.212-1.312.548-1.502-.914.247-.947 2.582.408 2.115.236 1.01-.654-1.281-1.277.021-1.128-1.769-.461z"
  }, {
    id: "HUN",
    d: "M520.682 315.111l.931-2.647-.544-.899 1.579-.008.213-1.704 1.427 1.069 1.034.454 2.353-.51.226-.839 1.114-.124 1.365-.651.304.269 1.316-.524.658-.992.919-.258 3.003 1.281.598-.43 1.556 1.143.196 1.12-1.713.872-1.326 2.798-1.696 2.761-2.248.762-1.75-.179-2.148 1.059-1.048.599-2.316-.771-2.096-1.731-.891-.5-.545-1.375z"
  }, {
    id: "IDN",
    d: "M813.722 492.058l-1.18.054-3.721-1.981 2.614-.555 1.474.86.98.858-.167.764zm10.431-.282l-2.4.623-.336-.34.252-.962 1.206-1.724 2.771-1.12.284.556.052.856-1.829 2.111zm-18.326-5.767l1.011.75 1.732-.23.695 1.197-3.241.566-1.942.378-1.507-.022.963-1.623 1.538-.022.751-.994zm14.029-.004l-.411 1.564-4.213.8-3.729-.348-.01-1.03 2.228-.585 1.757.844 1.866-.214 2.512-1.031zm-40.039-3.699l5.371.28.618-1.156 5.201 1.349 1.021 1.82 4.207.513 3.438 1.672-3.199 1.073-3.083-1.135-2.538.077-2.909-.208-2.624-.505-3.248-1.074-2.059-.278-1.166.352-5.113-1.157-.486-1.207-2.565-.206 1.924-2.678 3.401.166 2.264 1.095 1.162.214.383.993zm73.184-1.578l-1.442 1.909-.273-2.11.498-1.007.587-.946.638.819-.008 1.335zm-20.96-7.703l-1.05.926-1.938-.513-.546-1.2 2.836-.134.698.921zm9.034-1.019l1.02 2.134-2.367-1.15-2.343-.233-1.582.184-1.94-.098.665-1.534 3.463-.116 3.084.813zm10.296-5.413l.783 4.507 2.901 1.669 2.344-2.958 3.217-1.682 2.493-.002 2.397.972 2.08.997 3.01.533.047 9.103.048 9.157-2.497-2.313-2.848-.566-.69.802-3.553.086 1.19-2.289 1.766-.78-.731-3.05-1.346-2.35-5.436-2.368-2.313-.233-4.21-2.58-.828 1.356-1.076.246-.637-1.024-.009-1.212-2.142-1.37 3.02-1.004 2 .054-.235-.74-4.104-.005-1.11-1.659-2.505-.514-1.187-1.378 3.779-.675 1.438-.908 4.501 1.144.443 1.034zm-24.962-7.162l-2.253 2.763-2.107.536-2.698-.544-4.673.139-2.449.401-.398 2.108 2.51 2.477 1.514-1.262 5.229-.948-.23 1.283-1.222-.405-1.218 1.632-2.468 1.08 2.653 3.573-.513.958 2.521 3.223-.024 1.837-1.497.822-1.1-.984 1.355-2.289-2.752 1.082-.697-.773.363-1.079-2.021-1.637.208-2.718-1.87.848.237 3.253.114 3.999-1.778.406-1.204-.821.804-2.573-.434-2.694-1.18-.021-.871-1.911 1.159-1.826.399-2.212 1.409-4.199.588-1.148 2.384-2.069 2.189.823 3.535.387 3.225-.117 2.771-2.023.49.623zm9.667.8l-.146 2.434-1.446-.272-.427 1.695 1.155 1.47-.785.334-1.132-1.764-.833-3.561.564-2.226.93-1.014.202 1.522 1.655.244.263 1.138zm-30.317-1.937l3.144 2.578-3.322.329-.936 1.898.122 2.524-2.696 1.905-.074 2.775-1.081 4.266-.413-.993-3.186 1.256-1.11-1.707-1.999-.158-1.398-.894-3.333 1.003-1.023-1.35-1.836.154-2.312-.322-.429-3.738-1.399-.774-1.346-2.383-.391-2.437.326-2.581 1.666-1.852.469 1.862 1.917 1.574 1.809-.566 1.79.201 1.634-1.409 1.345-.244 2.652.781 2.287-.594 1.438-3.876 1.079-.97.972-3.175 3.224.001 2.43.471-1.595 2.521 2.062 2.64-.487 1.284zm-33.809 21.419l-3.104.059-2.361-2.339-3.601-2.283-1.2-1.692-2.122-2.271-1.393-2.089-2.133-3.9-2.462-2.321-.824-2.395-1.033-2.175-2.528-1.755-1.466-2.386-2.111-1.563-2.925-3.078-.246-1.424 1.806.113 4.34.541 2.479 2.733 2.169 1.893 1.546 1.161 2.656 2.997 2.851.043 2.355 1.909 1.623 2.333 2.135 1.272-1.123 2.274 1.606.967 1.007.071.476 1.943.977 1.555 2.059.247 1.364 1.765-.704 3.471-.113 4.324z"
  }, {
    id: "IRL",
    d: "M457.875 284.288l.462 3.36-2.119 4.123-4.97 2.682-3.969-.683 2.273-4.78-1.464-4.767 3.814-3.753 2.119-2.272.579 2.604-.579 2.571 1.735-.065z"
  }, {
    id: "ISR",
    d: "M575.406 366.825l-.488 1.043-1.015-.458-.586 2.196.704.369-.716.451-.121.861 1.318-.443.066 1.27-1.397 5.166-1.843-5.555.816-1.077-.191-.186.741-1.535.569-2.494.401-.843.077-.034.939.006.258-.584.752-.044.043 1.363-.38.505z"
  }, {
    id: "IND",
    d: "M693.498 357.437l3.014 3.989-.284 2.743 1.115 1.708-.092 1.694-2.012-.445.786 3.63 2.755 2.065 3.897 2.265-1.78 1.461-1.088 2.991 2.716 1.202 2.644 1.552 3.657 1.767 3.843.406 1.617 1.593 2.167.296 3.373.727 2.335-.052.321-1.235-.369-1.991.217-1.356 1.71-.665.235 2.481.06.629 2.549 1.187 1.762-.489 2.368.21 2.287-.093.197-1.925-1.142-1.005 2.262-.394 2.552-2.356 3.232-2.03 2.352.785 1.999-1.346 1.314 1.985-.947 1.335 3.024.473.211 1.199-.983.578.231 1.933-2.004-.567-3.63 2.162.085 1.779-1.547 2.594-.143 1.498-1.25 2.522-2.191-.696-.109 3.148-.633 1.031.296 1.281-1.383.714-1.477-4.799-.774.01-.458 1.94-1.535-1.572.865-1.734 1.255-.177 1.292-2.594-1.616-.526-2.601.046-2.668-.423-.247-2.15-1.339-.153-2.221-1.343-.99 2.107 2.024 1.635-1.753 1.147-.622 1.119 1.725.819-.476 1.839.971 2.281.437 2.485-.402 1.096-1.908-.037-3.456.622.161 2.248-1.497 1.76-4.035 1.994-3.138 3.466-2.108 1.848-2.794 1.912-.004 1.338-1.397.716-2.526 1.039-1.31.154-.84 2.205.583 3.743.149 2.376-1.188 2.712-.013 4.825-1.451.137-1.276 2.157.853.931-2.557.799-.944 1.916-1.125.809-2.654-2.629-1.298-3.957-1.076-2.86-.983-1.346-1.489-2.738-.696-3.582-.485-1.796-2.55-3.968-1.161-5.646-.839-3.762.01-3.589-.544-2.794-4.08 1.788-1.976-.357-3.663-3.631 1.348-1.089-.828-1.186-3.289-2.575 1.867-2.037 6.17.008-.556-2.637-1.576-1.566-.319-2.391-1.835-1.402 3.09-3.295 3.256.24 2.933-3.326 1.757-3.251 2.723-3.249-.044-2.328 2.392-1.903-2.264-1.634-.974-2.254-.993-2.946 1.374-1.461 4.254.828 3.125-.504z"
  }, {
    id: "IRQ",
    d: "M602.605 355.773l1.839 1.034.212 2-1.411 1.175-.65 2.638 1.942 3.181 3.435 1.819 1.443 2.503-.459 2.366.895-.001.028 1.729 1.551 1.697-1.663-.158-1.885-.269-2.057 3.08-5.213-.255-7.906-6.491-4.178-2.292-3.377-.892-1.13-4.041 6.207-3.499 1.06-4.121-.265-2.521 1.535-.857 1.437-2.18 1.204-.545 3.261.453.985.892 1.344-.591z"
  }, {
    id: "IRN",
    d: "M626.441 351.527l2.464-.679 1.994-2.017 1.875.103 1.231-.661 1.994.327 3.101 1.791 2.239.384 3.204 3.095 2.09.125.246 2.906-1.143 4.247-.77 2.451 1.221.495-1.2 1.827.918 2.644.22 2.085 2.124.552.23 2.096-2.543 2.93 1.387 1.686 1.129 1.926 2.681 1.396.077 2.777 1.342.508.231 1.442-4.044 1.609-1.056 3.595-5.275-.931-3.057-.71-3.164-.402-1.197-3.816-1.342-.556-2.154.56-2.828 1.511-3.427-1.035-2.83-2.41-2.699-.897-1.873-3.007-2.069-4.273-1.509.523-1.782-1.069-1.047 1.259-1.551-1.697-.028-1.729-.895.001.459-2.366-1.443-2.503-3.435-1.819-1.942-3.181.65-2.638 1.411-1.175-.212-2-1.839-1.034-1.816-4.147-1.534-2.821.549-1.1-.875-4.112 1.92-1.032.444 1.365 1.417 1.661 1.923.477 1.015-.106 3.307-2.656 1.051-.267.829 1.061-.967 1.779 1.749 1.869.697-.178.887 2.612 2.659.733 1.948 1.756 3.986.602 4.379-.924z"
  }, {
    id: "ISL",
    d: "M434.573 212.429l-.648 4.48 3.168 4.601-3.645 5.006-8.088 4.381-2.417 1.148-3.691-.926-7.823-2.008 2.76-2.841-6.103-3.199 4.965-1.283-.12-1.963-5.885-1.571 1.894-4.474 4.25-1.032 4.37 4.684 4.26-3.75 3.528 1.957 4.573-3.707z"
  }, {
    id: "ITA",
    d: "M518.77 347.883l-1.01 2.783.419 1.087-.588 1.795-2.145-1.313-1.426-.377-3.914-1.786.393-1.816 3.281.324 2.86-.387 2.13-.31zm-17.693-10.818l1.682 2.622-.394 4.811-1.275-.228-1.144 1.201-1.062-.954-.112-4.384-.64-2.105 1.542.185 1.403-1.148zm8.878-21.607l4.01 1.051-.304 1.991.671 1.707-2.232-.583-2.28 1.417.155 1.966-.343 1.121.919 1.989 2.629 1.951 1.41 3.167 3.12 3.047 2.197-.023.683.829-.787.745 2.511 1.345 2.059 1.12 2.404 1.919.291.683-.524 1.306-1.556-1.704-2.436-.603-1.18 2.362 2.026 1.344-.333 1.879-1.171.213-1.498 3.057-1.168.272.011-1.084.572-1.913.609-.766-1.095-2.09-.855-1.833-1.164-.455-.828-1.583-1.802-.67-1.213-1.487-2.075-.241-2.191-1.683-2.565-2.448-1.906-2.188-.875-3.803-1.395-.452-2.281-1.287-1.291.528-1.62 1.802-1.165.284.321-1.684-1.52-.494-.723-3.039.972-1.208-.825-1.498.116-1.134 1.207.86 1.352-.19 1.572-1.364.486.639 1.335-.128.607-1.63 2.075.508 1.235-.684.222-1.67 1.699.581.326-.777 2.771-.712.628 1.425z"
  }, {
    id: "JAM",
    d: "M257.759 410.958l1.887.263 1.49.705.465.803-1.972.054-.851.489-1.57-.47-1.603-1.068.337-.671 1.179-.205z"
  }, {
    id: "JOR",
    d: "M574.918 367.868l.488-1.043 3.124 1.311 5.491-3.54 1.13 4.041-.534.497-5.616 1.646 2.795 3.256-.927.549-.462 1.081-2.139.445-.671 1.157-1.212.984-3.12-.508-.094-.464 1.397-5.166-.066-1.27.415-.962z"
  }, {
    id: "JPN",
    d: "M852.76 362.009l.358 1.154-1.579 2.025-1.15-1.072-1.438.777-.744 1.946-1.827-.946.022-1.583 1.551-2.003 1.595.39 1.152-1.417 2.06.729zm17.77-10.283l-1.057 2.781.489 1.731-1.461 2.416-3.582 1.602-4.929.208-3.995 3.844-1.884-1.288-.116-2.523-4.877.747-3.318 1.588-3.282.064 2.843 2.463-1.871 5.611-1.813 1.373-1.356-1.268.688-2.961-1.774-.962-1.139-2.281 2.65-1.03 1.471-2.114 2.82-1.75 2.057-2.333 5.581-1.023 2.998.702 2.934-6.168 1.869 1.671 4.113-3.512 1.595-1.377 1.763-4.383-.481-4.1 1.185-2.333 2.981-.682 1.528 5.108-.083 2.938-2.594 3.602.047 3.639zm8.226-25.931l1.972.829 1.983-1.651.623 4.348-4.159 1.048-2.455 3.763-4.409-2.583-1.525 4.122-3.119.056-.386-3.741 1.387-2.937 2.996-.213.817-5.381.829-3.089 3.295 4.117 2.151 1.312z"
  }, {
    id: "KEN",
    d: "M590.191 465.775l1.661 2.299-1.964 1.113-.693 1.163-1.05.204-.398 1.965-.9 1.126-.548 1.857-1.129.923-4.024-2.792-.191-1.618-10.167-5.678-.474-.306-.028-2.952.803-1.128 1.379-1.844 1.021-2.031-1.234-3.2-.328-1.4-1.329-1.938 1.725-1.669 1.901-1.843 1.456.47v1.569l.958.92h1.951l3.549 2.371.886.028.657-.077.621.322 1.87.22.828-1.163 2.562-1.168 1.13.943 1.916.001-2.45 3.165z"
  }, {
    id: "KGZ",
    d: "M674.221 333.111l.628-1.66 1.845-.537 4.614 1.309.435-2.247 1.592-.794 3.993 1.609 1.019-.421 4.649.105 4.16.399 1.407 1.365 1.727.555-.394.853-4.418 2.032-.999 1.478-3.597.44-1.061 2.354-2.967-.492-1.938.718-2.677 1.726.387.85-.798.829-5.302.547-3.463-1.174-3.041.281.266-2.096 3.052.61 1.026-1.126 2.133.36 3.591-2.645-3.323-1.954-1.997.927-2.07-1.401 2.354-2.429z"
  }, {
    id: "KHM",
    d: "M765.444 433.599l-1.14-1.478-1.418-2.939-.664-3.45 1.796-2.385 3.625-.55 2.628.413 2.314 1.126 1.269-1.982 2.484 1.059.65 1.914-.345 3.426-4.713 2.191 1.231 1.721-2.943.206-2.427 1.142z"
  }, {
    id: "PRK",
    d: "M841.548 332.624l.392.661-1.065-.226-1.217 1.275-.837 1.274.106 2.668-1.449.816-.499.648-1.057 1.083-1.867.601-1.217.977-.088 1.568-.327.399 1.116.585 1.588 1.572-.404.863-1.194.235-1.981.172-1.093 1.6-1.251-.126-.176.32-1.361-.672-.339.664-.821.293-.099-.665-.726-.324-.754-.565.767-1.567.661-.42-.249-.654.711-1.941-.183-.592-1.637-.394-1.322-.975 2.283-2.347 3.09-1.984 1.927-2.644 1.331 1.172 2.423.136-.437-1.975 4.33-1.624 1.114-2.131z"
  }, {
    id: "KOR",
    d: "M835.127 346.525l2.42 4.182.694 2.27.022 3.985-1.057 1.882-2.539.654-2.241 1.408-2.526.29-.313-1.848.519-2.566-1.239-3.601 2.083-.587-1.922-3.005.176-.32 1.251.126 1.093-1.6 1.981-.172 1.194-.235z"
  }, {
    id: "YUG",
    d: "M533.467 333.918l-.126.77-.356-.031-.189-1.364-.671-.386-.597-1.016.524-.852.671-.274.388-1.27.503-.212.398.541.524.238.367.607.461.18.545.705.398-.021-.314.924-.336.45.093.283-.627.145z"
  }, {
    id: "KWT",
    d: "M609.767 375.756l.585 1.418-.251.731.903 2.404-1.983.082-.698-1.516-2.498-.308 2.057-3.08z"
  }, {
    id: "KAZ",
    d: "M674.221 333.111l-1.608.697-3.698 2.609-1.227 2.649-1.044.024-.769-1.751-3.565-.12-.571-3.059-1.366-.026.209-3.801-3.356-2.807-4.809.302-3.288.561-2.678-3.498-2.294-1.484-4.346-2.837-.524-.346-7.218 2.347.111 14.127-1.439.182-1.962-2.932-1.895-1.056-3.183.785-1.239 1.25-.157-.915.689-1.573-.535-1.322-3.249-1.301-1.266-3.464-1.548-.985-.093-1.276 2.727.373.108-2.883 2.384-.646 2.45.594.505-3.907-.5-2.514-2.806.198-2.384-.999-3.246 1.797-2.616.851-1.424-.656.285-2.102-1.787-2.76-2.081.116-2.38-2.837 1.618-3.215-.819-.874 2.238-4.77 2.883 2.532.349-3.193 5.788-4.849 4.38-.117 6.18 3.102 3.32 1.791 2.975-1.868 4.445-.089 3.586 2.292.815-1.31 3.938.191.703-2.106-4.544-3.097 2.691-2.223-.525-1.254 2.692-1.204-2.024-3.208 1.285-1.618 10.492-1.663 1.369-1.19 7.016-1.791 2.521-2.032 5.039 1.058.883 5.012 2.927-1.165 3.601 1.631-.232 2.583 2.689-.268 7.027-4.494-1.026 1.504 3.578 3.659 6.265 11.576 1.494-2.333 3.863 2.565 4.029-1.14 1.548.799 1.349 2.546 1.96.848 1.194 1.843 3.612-.579 1.487 2.634-2.134 2.831-2.329.394-.133 4.186-1.56 1.86-5.562-1.353-2.023 7.262-1.435.886-5.555 1.582 2.524 6.754-1.924.995.224 2.165-1.727-.555-1.407-1.365-4.16-.399-4.649-.105-1.019.421-3.993-1.609-1.592.794-.435 2.247-4.614-1.309-1.845.537z"
  }, {
    id: "LAO",
    d: "M770.271 423.21l.913-1.297.125-2.443-2.27-2.527-.175-2.875-2.133-2.378-2.12-.201-.565 1.02-1.642.085-.84-.517-2.955 1.746-.066-2.626.689-3.104-1.894-.136-.161-1.78-1.213-.917.597-1.096 2.386-1.944.252.703 1.495.081-.423-3.433 1.453-.442 1.638 2.376 1.259 2.717 3.452.023 1.087 2.592-1.792.776-.805 1.063 3.36 1.762 2.33 3.465 1.768 2.568 2.121 2.019.706 2.043-.51 2.88-2.484-1.059-1.269 1.982z"
  }, {
    id: "LBN",
    d: "M575.69 364.934l-.752.044-.258.584-.939-.006.999-2.726 1.394-2.379.053-.119 1.261.173.459 1.327-1.529 1.269z"
  }, {
    id: "LKA",
    d: "M704.574 442.372l-.422 2.922-1.175.797-2.439.641-1.335-2.228-.497-4.038 1.27-4.578 1.937 1.569 1.306 1.985z"
  }, {
    id: "LBR",
    d: "M453.629 451.218l-.734.024-2.89-1.332-2.548-2.129-2.389-1.531-1.888-1.809.671-.898.148-.816 1.265-1.526 1.305-1.313.599-.063.732-.317 1.173 1.724-.186 1.129.546.598.793.014.571-1.132.793.073-.129.816.28 1.358-.609 1.245.817.77.891.187 1.187 1.173.086 1.102-.268.351z"
  }, {
    id: "LSO",
    d: "M556.504 547.746l.973.963-.861 1.559-.476 1.05-1.563.504-.515 1.033-1.004.323-2.103-2.485 1.495-2.031 1.519-1.248 1.311-.649z"
  }, {
    id: "LTU",
    d: "M538.988 282.094l-.225-1.228.3-1.327-1.24-.773-2.936-.856-.596-4.164 3.211-1.543 4.702.324 2.754-.499.394 1.048 1.492.322 2.695 2.419.264 2.207-2.299 1.562-.651 2.724-3.044 1.797-2.71-.032-.673-1.469z"
  }, {
    id: "LUX",
    d: "M492.197 301.287l.56.983-.158 1.895-.809.09-.628-.373.304-2.43z"
  }, {
    id: "LVA",
    d: "M534.291 273.746l.096-3.808 1.378-3.235 2.643-1.783 2.226 3.879 2.25-.1.539-3.989 2.388-.93 1.229.646 2.413 1.942 2.312.009 1.351 1.195.239 2.491.901 2.99-3.012 1.929-1.705.835-2.695-2.419-1.492-.322-.394-1.048-2.754.499-4.702-.324z"
  }, {
    id: "LBY",
    d: "M516.894 397.927l-1.984 1.123-1.577-1.661-4.435-1.308-1.231-1.909-2.213-1.421-1.31.561-.998-1.711-.105-1.32-1.658-2.256 1.113-1.3-.245-1.965.357-1.719-.203-1.44.494-2.59-.152-1.485-.908-2.84 1.369-.75.242-1.372-.298-1.351 1.925-1.262.863-1.053 1.367-.947.159-2.549 3.293 1.145 1.178-.285 2.342.553 3.721 1.479 1.313 2.918 2.517.634 3.951 1.362 2.988 1.61 1.367-.839 1.343-1.493-.653-2.503.88-1.601 2.02-1.549 1.93-.453 3.793.679.956 1.478 1.044.013.893.562 2.786.386.684 1.084-1.016 1.567.434 1.39-.722 1.996.841 2.586V406.492l-3.224.009-.035 1.243-11.183-5.699-11.182-5.776z"
  }, {
    id: "MAR",
    d: "M471.361 366.311l-.968-3.529-.167-2.053-1.057-2.178-1.218-.037-2.904-.755-2.667.237-1.69-1.456-2.064-.017-.881 2.104-1.874 3.513-2.079 1.39-2.813 1.528-1.804 2.246-.376 1.738-1.065 2.819.701 4.031-2.341 2.676-1.406.85-2.209 2.169-2.607.35-1.41 1.211-.016.014 12.51-.014v-.007l-.024-3.752 4.528-2.359 2.8-.489 2.295-.865 1.072-1.617 3.278-1.284.121-2.417 1.622-.286 1.269-1.216 3.669-.555.514-1.285z"
  }, {
    id: "MDA",
    d: "M549.89 309.445l.669-.619 1.863-.417 2.067 1.309 1.153.157 1.267 1.124-.201 1.407 1.021.676.405 1.717.979 1.038-.198.607.523.411-.743.3-1.652-.119-.276-.561-.586.324.198.724-.768 1.286-.489 1.375-.706.433-.502-1.826.295-1.724-.089-1.785-1.618-2.442-.889-1.748-.869-1.238z"
  }, {
    id: "MNE",
    d: "M530.774 332.227l-.178-.715-1.216 1.865.188 1.196-.587-.29-.785-1.23-1.212-.751.308-.644.411-2.099.912-.893.524-.352.744.661.409.531.922.413 1.069.793-.231.327-.524.852z"
  }, {
    id: "MDG",
    d: "M614.166 498.396l.744 1.215.694 1.89.452 3.457.725 1.349-.278 1.386-.496.853-.952-1.696-.528.856.536 2.148-.25 1.233-.773.673-.177 2.476-1.104 3.427-1.383 4.082-1.732 5.675-1.074 4.214-1.267 3.55-2.281.729-2.447 1.305-1.615-.788-2.226-1.103-.774-1.619-.185-2.707-.987-2.418-.257-2.169.503-2.163 1.29-.518.008-.994 1.34-2.255.253-1.886-.651-1.398-.531-1.855-.224-2.698.98-1.631.376-1.844 1.397-.107 1.564-.594 1.038-.524 1.231-.039 1.599-1.648 2.307-1.776.842-1.446-.382-1.227 1.191.345 1.545-1.991.052-1.718.929-1.275z"
  }, {
    id: "FYR",
    d: "M532.985 334.657l.356.031.126-.77 1.656-.583.627-.145.955-.22 1.3-.063 1.404 1.209.199 2.473-.534.124-.462.647-1.519-.072-1.069.81-1.834.327-1.163-.901-.399-1.594z"
  }, {
    id: "MLI",
    d: "M441.128 422.221l.944-.525.471-1.7.889-.066 1.958.804 1.581-.571 1.084.191.421-.642 11.25-.044.624-2.028-.486-.358-1.353-12.685-1.353-13.056 4.291-.056 9.458 6.654 9.458 6.547.667 1.393 1.745.849 1.299.481.032 1.88 3.11-.289.008 6.75-1.533 1.941-.239 1.785-2.491.459-3.825.248-1.037 1.025-1.797.114-1.798.013-.699-.553-1.544.41-2.62 1.196-.536.899-2.175 1.287-.381.737-1.176.583-1.355-.386-.769.699-.411 1.96-2.226 2.361.065.963-.765 1.204.186 1.646-1.157.419-.654.357-.435-1.211-.809.32-.484-.056-.516.827-2.165-.023-.776-.426-.366.258-.856-.817.148-.844-.35-.331-.597.279.109-.923.575-.731-1.149-1.191-.334-.786-.623-.626-.561-.075-.674.399-.906.382-.769.616-1.2-.228-.778-.723-.465-.095-.732.38-.445.003-.161-1.044.129-.889-.24-1.106-1.049-.804-.554-1.642z"
  }, {
    id: "MMR",
    d: "M754.357 405.947l-1.635 1.286-1.98.133-1.278 3.19-1.184.534 1.356 2.572 1.779 2.13 1.148 1.917-1.026 2.518-.968.533.669 1.446 1.87 2.284.321 1.6-.044 1.328 1.096 2.601-1.54 2.65-1.358 2.911-.27-2.102.861-2.174-.943-1.684.228-3.11-1.138-1.484-.914-3.44-.507-3.652-1.212-2.408-1.847 1.459-3.187 2.068-1.572-.258-1.737-.68.966-3.604-.585-2.74-2.198-3.395.343-1.065-1.641-.38-1.989-2.424-.183-2.403.978.453.058-2.152 1.383-.714-.296-1.281.633-1.031.109-3.148 2.191.696 1.25-2.522.143-1.498 1.547-2.594-.085-1.779 3.63-2.162 2.004.567-.231-1.933.983-.578-.211-1.199 1.64-.235.937 1.86 1.223.751.083 2.398-.113 2.567-2.655 2.58-.337 3.635 2.96-.507.669 2.801 1.775.587-.816 2.507 2.082 1.128 1.214.553 2.056-.874.085 1.24-2.386 1.944-.597 1.096z"
  }, {
    id: "MNG",
    d: "M721.295 304.88l2.956-.744 5.35-3.74 4.264-2.07 2.439 1.353 2.925.065 1.874 2.043 2.798.156 4.054 1.09 2.726-3.033-1.139-2.6 2.904-4.659 3.141 1.871 2.545.527 3.297 1.152.535 3.321 3.982 1.841 2.651-.809 3.547-.573 2.809.577 2.746 2.092 1.702 2.203 2.6-.045 3.532.697 2.577-1.062 3.692-.712 4.106-3.059 1.682.472 1.468 1.456 3.345-.361-1.365 3.247-1.981 4.227.722 1.706 1.587-.528 2.766.647 2.155-1.538 2.25 1.333 2.541 2.887-.307 1.453-2.212-.46-4.073.541-1.973 1.156-2.055 2.662-4.275 1.546-2.794 2.101-2.882-.8-1.577-.358-1.473 2.538.896 1.499.454 1.28-1.963 1.297-2.012 2.051-3.276 1.337-4.202.144-4.53 1.311-3.264 2.014-1.242-1.164-3.392.003-4.149-2.291-2.767-.565-3.73.528-5.787-.851-3.091.088-1.645-2.269-1.278-3.568-1.732-.433-3.388-2.448-3.776-.552-3.332-.679-1.009-1.729 1.079-4.727-1.934-3.319-3.999-1.565-2.357-2.231z"
  }, {
    id: "MRT",
    d: "M441.128 422.221l-1.85-1.981-1.697-2.129-1.861-.768-1.34-.855-1.566.033-1.368.633-1.393-.251-.96.931-.243-1.565.783-1.437.348-2.753-.31-2.906-.338-1.468.279-1.478-.724-1.413-1.478-1.288.611-.997 10.98.019-.531-4.344.686-1.556 2.627-.273-.091-7.851 9.203.163.008-4.727 10.546 7.525-4.291.056 1.353 13.056 1.353 12.685.486.358-.624 2.028-11.25.044-.421.642-1.084-.191-1.581.571-1.958-.804-.889.066-.471 1.7z"
  }, {
    id: "MWI",
    d: "M572.154 495.69l-.785 2.164.785 3.716.973-.041 1.012.925 1.174 2.078.239 3.714-1.214.61-.856 2.017-1.829-1.796-.208-2.041.59-1.343-.162-1.155-1.107-.728-.772.264-1.614-1.379-1.474-.744.851-2.659.882-.993-.538-2.361.563-2.302.478-.768-.713-2.402-1.324-1.259 2.749.526.564.781.951 1.319z"
  }, {
    id: "MEX",
    d: "M202.887 388.721l-1.088 2.711-.491 2.207-.204 4.077-.271 1.475.486 1.643.869 1.462.561 2.316 1.86 2.213.655 1.688 1.097 1.452 2.977.78 1.159 1.229 2.46-.821 2.137-.297 2.1-.528 1.764-.505 1.784-1.203.668-1.725.23-2.497.485-.872 1.899-.783 2.965-.694 2.483.104 1.7-.254.673.635-.095 1.44-1.507 1.769-.666 1.805.516.515-.42 1.277-.703 2.295-.71-.754-.587.049-.533.038-1.005 1.771-.509-.346-.339.134.022.431-2.593-.032-2.618.005-.002 1.645-1.266.007 1.044.974 1.036.672.312.63.454.176-.072.988-3.599.009-1.349 2.359.398.54-.325.676-.069.839-3.173-3.107-1.446-.94-2.29-.756-1.565.21-2.252 1.09-1.414.286-1.98-.763-2.101-.552-2.621-1.332-2.102-.407-3.174-1.355-2.346-1.396-.708-.781-1.569-.175-2.868-.928-1.167-1.341-3.013-1.674-1.405-1.866-.668-1.447.935-.291-.288-.849.644-.775.014-1.034-.946-1.346-.253-1.197-.94-1.524-2.471-3.016-2.819-2.388-1.364-1.915-2.407-1.26-.515-.757.427-1.919-1.429-.728-1.655-1.52-.699-2.193-1.509-.257-1.627-1.667-1.314-1.548-.123-.997-1.507-2.421-.994-2.477.043-1.25-2.028-1.297-.936.143-1.6-.903-.45 1.33.464 1.565.273 2.432.962 1.327 2.081 2.207.462.75.426.227.37 1.091.498-.044.563 2.039.852.802.597 1.112 1.762 1.591.93 2.891.833 1.354.778 1.442.155 1.617 1.352.101 1.124 1.387 1.017 1.359-.068.543-1.18 1.113-.497-.015-.739-1.843-1.835-1.735-2.022-1.479-1.434-.779.093-2.253-.426-1.678-1.336-.963-1.927-1.391-.37.402-.708-.814-1.729-.758-1.653-1.824.205-.238 1.155.179 1.04-1.18.105-1.429-2.159-2.274-1.646-.886-1.033-2.009-1.04-2.123-1.299-2.609-1.139-2.963 3.186-.254 3.561-.36-.262.648 4.234 1.605 6.396 2.309 5.576-.023 2.223-.001.006-1.351 4.858.001 1.022 1.161 1.434 1.032 1.666 1.429.929 1.689.698 1.769 1.449.967 2.328.958 1.766-2.529 2.293-.062 1.976 1.279 1.407 2.184.969 1.858 1.654 1.798.618 2.195.785 1.466 2.187.963 1.99.682z"
  }, {
    id: "MYS",
    d: "M758.654 446.07l.22 1.438 1.852-.334.916-1.15.645.262 1.656 1.69 1.177 1.873.16 1.881-.298 1.27.272.959.205 1.651.987.768 1.103 2.465-.054.942-1.988.186-2.652-2.064-3.317-2.212-.328-1.421-1.621-1.866-.387-2.313-1.012-1.524.308-2.038-.618-1.188.487-.5 2.287 1.225zm49.187 4.83l-2.064.952-2.43-.471-3.224-.001-.972 3.175-1.079.97-1.438 3.876-2.287.594-2.652-.781-1.345.244-1.634 1.409-1.79-.201-1.809.566-1.917-1.574-.469-1.862 2.055.955 2.167-.521.564-2.36 1.196-.526 3.361-.604 2.011-2.207 1.377-1.766 1.277 1.447.589-.952 1.34.089.164-1.785.126-1.377 2.159-1.947 1.414-2.191 1.134-.009 1.44 1.419.128 1.218 1.847.78 2.34.842-.2 1.095-1.881.139.502 1.365z"
  }, {
    id: "MOZ",
    d: "M572.154 495.69l2.11-.229 3.369.801.732-.36 1.952-.073.999-.852 1.682.046 3.066-1.102 2.231-1.643.454 1.27-.116 2.83.346 2.501.109 4.476.494 1.41-.837 2.062-1.088 2.01-1.785 1.802-2.563 1.107-3.161 1.417-3.168 3.147-1.079.538-1.957 2.096-1.155.685-.237 2.117 1.33 2.259.553 1.758.035.899.495-.15-.08 2.961-.455 1.41.661.521-.417 1.269-1.172 1.089-2.313 1.036-3.372 1.667-1.23 1.142.241 1.307.716.209-.24 1.64-2.127-.026-.24-1.378-.416-1.392-.239-1.111.5-3.428-.73-2.169-1.343-4.261 2.954-3.405.739-2.15.424-.271.317-1.746-.451-.876.121-2.203.546-2.035-.006-3.695-1.457-.934-1.334-.211-.605-.718-1.299-.612-2.339.058-.181-1.08-.266-2.055 8.508-2.37 1.614 1.379.772-.264 1.107.728.162 1.155-.59 1.343.208 2.041 1.829 1.796.856-2.017 1.214-.61-.239-3.714-1.174-2.078-1.012-.925-.973.041-.785-3.716z"
  }, {
    id: "NAM",
    d: "M521.082 546.54l-2.084-2.391-1.097-2.295-.619-3.037-.691-2.243-.94-4.723-.063-3.631-.359-1.644-1.09-1.239-1.448-2.472-1.473-3.564-.613-1.855-2.281-2.87-.17-2.244 1.349-.555 1.679-.497 1.818.087 1.671 1.32.424-.206 11.365-.126 1.943 1.401 6.788.414 5.154-1.192 2.296-.664 1.817.168 1.107.659.021.242-1.581.66-.85.006-1.79 1.149-1.072-1.208-4.322 1.026-2.088.097-.082 10.57-2.764.105.001 8.861-.003 11.524-2.503 1.626-1.506.233-1.763-.602-1.258-.232-.473-1.358-1.107-.867z"
  }, {
    id: "NCL",
    d: "M940.075 523.484l2.3 1.856 1.458 1.382-1.065.723-1.543-.814-2.006-1.352-1.808-1.587-1.855-2.102-.388-1.007 1.206.042 1.571 1.011 1.234 1.012z"
  }, {
    id: "NER",
    d: "M481.294 429.884l.063-1.952-3.232-.648-.088-1.385-1.579-1.872-.376-1.309.222-1.396 1.797-.114 1.037-1.025 3.825-.248 2.491-.459.239-1.785 1.533-1.941-.008-6.75 3.954-1.317 8.118-5.85 9.608-5.752 4.435 1.308 1.577 1.661 1.984-1.123.689 4.677 1.049.777.045.949 1.166 1.02-.61 1.278-1.08 5.98-.148 3.796-3.576 2.736-1.211 3.8 1.168 1.064-.007 1.845 1.798.066-.28 1.347-.792.164-.09.909-.521.063-1.897-3.13-.659-.115-2.192 1.601-2.171-.835-1.509-.167-.809.402-1.644-.087-1.654 1.219-1.43.069-3.393-1.478-1.329.703-1.431-.049-1.051-1.081-2.81-1.07-3.014.34-.73.62-.395 1.646-.803 1.152-.195 2.543-2.138-1.639-1.005.008z"
  }, {
    id: "NGA",
    d: "M499.086 450.079l-2.91 1.006-1.065-.147-1.078.626-2.242-.061-1.501-1.748-.924-2.025-1.985-1.845-2.107.035-2.474-.002.161-4.523-.071-1.791.528-1.778.864-.865 1.361-1.75-.296-.761.552-1.141-.63-1.684.109-.944.195-2.543.803-1.152.395-1.646.73-.62 3.014-.34 2.81 1.07 1.051 1.081 1.431.049 1.329-.703 3.393 1.478 1.43-.069 1.654-1.219 1.644.087.809-.402 1.509.167 2.171.835 2.192-1.601.659.115 1.897 3.13.521-.063 1.11 1.136-.305.514-.149.946-2.361 2.197-.742 1.808-.395 1.47-.595.629-.566 1.975-1.499 1.16-.434 1.424-.63 1.132-.262 1.167-1.927.945-1.574-1.153-1.063.046-1.67 1.642-.811.025-1.334 2.702z"
  }, {
    id: "NIC",
    d: "M234.928 432.306l-.97-.895-1.311-1.147-.617-.96-1.182-.896-1.405-1.29.312-.442.463.43.212-.202.872-.117.351-.654.411-.026-.06-1.409.658-.067.585.02.605-.766.827.58.288-.356.516-.341.979-.791.046-.593.269.025.36-.688.293-.084.478.44.562.131.619-.367.708-.002.974-.376.388-.393.962.059-.242.277-.143.643.286 1.053-.646.979-.3 1.154-.091 1.262.15.737.071 1.286-.428.279-.262 1.219.192.752-.573.727.13.767.43.466-.672.602-.827-.189-.465-.584-.889-.237-.645.37-1.847-.752z"
  }, {
    id: "NLD",
    d: "M489.078 287.613l-.171.908.484.158.212.408.085.371.39.139.03.197-.348.265-.385.024v.292l.267.465-.385.452.389.125.792-.771.479-.708v-.48l-.167-.333-.458-.229.105-.521-.105-.458.416-1 .412-.521 1.164-.421 2.33.133.524 1.583-.699 4.225-.71 1.711-1.685.002.471 4.69-1.541-1.036-1.775-1.956-2.598.931-2.053-.352.702-1.239.917-1.209 1.279-1.249.757-2.092.245-2.182z"
  }, {
    id: "NOR",
    d: "M554.225 175.606l8.77 6.24-3.611 2.226 3.072 5.115-4.771 3.188-2.265.724 1.188-5.592-3.598-3.252-4.354 2.775-1.375 5.854-2.673 3.439-3.011-1.87-3.661.384-3.116-4.153-1.681 2.088-1.739.323-.412 5.083-5.284-1.224-.742 4.217-2.692-.025-1.851 5.243-2.805 7.867-4.354 9.5 1.021 2.232-.976 2.554-2.781-.109-1.821 5.906.172 8.044 1.792 2.978-.928 6.727-2.333 3.812-1.236 3.145-1.881-3.351-5.536 6.266-3.738 1.245-3.877-2.715-1.002-5.864-.887-13.256 2.582-3.875 7.403-5.184 5.536-6.586 5.133-9.301 6.737-13.762 4.696-5.674 7.705-9.893 6.153-3.592 4.613.44 4.27-6.995 5.113.381 5.035-1.723z"
  }, {
    id: "NPL",
    d: "M722.33 382.447l-.217 1.356.369 1.991-.321 1.235-2.335.052-3.373-.727-2.167-.296-1.617-1.593-3.843-.406-3.657-1.767-2.644-1.552-2.716-1.202 1.088-2.991 1.78-1.461 1.162-.773 2.248.993 2.831 2.094 1.575.46.942 1.533 2.178.628 2.276 1.392 3.172.725z"
  }, {
    id: "NZL",
    d: "M960.377 588.627l.636 1.531 1.994-1.503.811 1.567.003 1.571-1.043 1.741-1.833 2.797-1.435 1.541 1.034 1.856-2.163.048-2.399 1.465-.751 2.568-1.594 4.027-2.201 1.802-1.399 1.159-2.583-.086-1.815-1.338-3.048-.284-.47-1.479 1.507-2.957 3.525-3.875 1.81-.731 2.015-1.472 2.403-2.01 1.683-1.975 1.247-2.808 1.063-.946.416-2.074 1.967-1.703.62 1.568zm4.462-17.013l2.032 3.665.059-2.383 1.266.949.419 2.651 2.257 1.15 1.895.283 1.603-1.347 1.421.407-.68 3.151-.854 2.093-2.141-.074-.749 1.097.261 1.561-.412.678-1.06 1.974-1.39 2.532-2.167 1.487-.481-.979-1.169-.536 1.617-3.039-.918-2.012-3.018-1.452.079-1.308 2.026-1.253.473-2.744-.13-2.282-1.136-2.344.075-.613-1.34-1.43-2.206-3.041-1.173-2.409 1.04-.266 1.526 1.887 2.182.885.793 3.062z"
  }, {
    id: "OMN",
    d: "M640.291 403.185l-1.047 2.042-1.271-.156-.583.708-.45 1.504.345 1.975-.265.362-1.29-.01-1.751 1.1-.273 1.43-.642.618-1.744-.023-1.098.737.014 1.18-1.356.81-1.547-.275-1.875.982-1.296.165-.915-2.036-2.192-4.841 8.411-2.957 1.869-5.972-1.285-2.135.073-1.219.817-1.256.008-1.245 1.269-.601-.496-.425.229-1.997 1.433-.012 1.257 2.095 1.565 1.108 2.057.398 1.66.555 1.266 1.74.756 1.005 1.004.382-.006.673-1.021 1.792-.448.841-1.182.958zm-6.925-14.545l-.365.562-.534-1.057.817-1.059.347.271-.265 1.283z"
  }, {
    id: "PAN",
    d: "M256.885 443.212l-.935-.81-.601-1.518.693-.751-.71-.194-.524-.93-1.397-.783-1.226.179-.569.98-1.133.708-.611.098-.275.586 1.338 1.526-.766.359-.405.416-1.305.143-.485-1.678-.365.478-.925-.166-.565-1.131-1.15-.187-.728-.329-1.203.004-.087.611-.322-.426.148-.558.234-.571-.11-.51.42-.334-.584-.419-.016-1.136 1.085-.253 1.007 1.013-.058.598 1.119.127.265-.23.77.693 1.38-.204 1.192-.712 1.703-.569.957-.844 1.548.166-.104.278 1.563.096 1.248.488.915.848 1.055.779-.341.412.651 1.658-.529.835-.903-.201z"
  }, {
    id: "PER",
    d: "M280.132 513.144l-.752 1.501-1.442.749-2.811-1.683-.243-1.199-5.559-2.924-5.028-3.168-2.163-1.777-1.161-2.375.46-.827-2.374-3.75-2.765-5.242-2.649-5.622-1.146-1.282-.883-2.069-2.178-1.831-1.998-1.135.908-1.25-1.359-2.667.872-1.957 2.236-1.762.332 1.161-.8.665.076 1.024 1.159-.223 1.132.302 1.177 1.411 1.585-1.15.531-1.883 1.718-2.428 3.371-1.1 3.058-2.918.873-1.811-.392-2.115.748-.265 1.865 1.32.895 1.314 1.298.718 1.652 2.921 2.087.35 1.545-.737 1.013.482 1.683-.24 2.147 1.306-1.809 2.839.837.066 1.404 1.484-2.527-.131-.376.42-2.298.538-3.206 1.902-.204 1.306-.715.974.279 1.516-1.694.81.002 1.185-.739.514 1.167 2.533 1.558 1.714-.593 1.212 1.861.164 1.06 1.508 2.475.073 2.3-1.666-.187 4.3 1.275.326 1.582-.488 2.424 4.58-.602.967-.139 2.012-.054 2.443-1.096 1.44.502 1.07-.643.972 1.206 2.437z"
  }, {
    id: "PNG",
    d: "M912.317 482.425l-.785.281-1.214-1.077-1.228-1.779-.604-2.131.389-.271.301.832.85.635 1.359 1.775 1.324.951-.392.784zm-10.926-3.759l-1.469.23-.442.785-1.533.681-1.439.655-1.489-.003-2.299-.813-1.602-.781.232-.866 2.514.409 1.534-.219.423-1.341.402-.069.272 1.485 1.6-.214.791-.957 1.565-.997-.309-1.646 1.68-.053.566.458-.057 1.55-.94 1.706zm-13.434 5.354l2.504 1.844 1.82 2.987 1.606-.094-.113 1.25 2.165.48-.841.533 2.979 1.19-.311.819-1.857.198-.689-.734-2.409-.318-2.832-.426-2.181-1.804-1.591-1.552-1.457-2.465-3.657-1.229-2.375.802-1.712.929.357 2.078-2.202.97-1.57-.472-2.9-.118-.048-9.157-.047-9.103 4.865 1.921 5.184 1.597 1.932 1.43 1.562 1.405.426 1.647 4.672 1.73.682 1.486-2.58.302.618 1.874zm16.678-8.089l-.877.745-.528-1.649-.652-1.079-1.27-.915-1.596-1.19-2.024-.82.779-.673 1.514.781.953.613 1.178.669 1.122 1.172 1.065.894.336 1.452z"
  }, {
    id: "PHL",
    d: "M829.595 439.864l.285 1.869.165 1.576-.955 2.566-1.024-2.859-1.311 1.424.896 2.065-.804 1.312-3.3-1.625-.788-2.029.855-1.334-1.776-1.329-.881 1.165-1.319-.108-2.075 1.566-.464-.822 1.101-2.368 1.766-.792 1.529-1.062.991 1.275 2.132-.771.457-1.257 1.982-.075-.167-2.184 2.273 1.34.235 1.42.197 1.037zm-6.713-5.263l-1.008.93-.878 1.785-.881.835-1.727-1.952.577-.757.704-.792.31-1.759 1.546-.167-.451 1.908 2.075-2.737-.267 2.706zm-15.36 2.721l-3.73 2.675 1.375-1.971 2.025-1.743 1.684-1.957 1.47-2.818.499 2.314-1.851 1.559-1.472 1.941zm9.474-7.3l1.684.881 1.784-.004-.055 1.187-1.298 1.205-1.781.851-.099-1.317.199-1.448-.434-1.355zm10.148-.772l.788 3.175-2.164-.753.059.953.687 1.749-1.334.634-.116-1.992-.845-.147-.438-1.719 1.649.227-.036-1.077-1.714-2.176 2.692.063.772 1.063zm-11.146-2.589l-.744 2.467-1.2-1.423-1.432-2.179 2.402.105.974 1.03zm-.578-15.743l1.729.838.864-.764.255.746-.456 1.215.957 2.094-.738 2.417-1.653.961-.441 2.332.627 2.294 1.486.317 1.24-.34 3.502 1.592-.267 1.56.915.687-.292 1.316-2.185-1.402-1.036-1.504-.722 1.051-1.785-1.715-2.547.424-1.396-.634.143-1.187.876-.732-.837-.666-.362 1.038-1.384-1.655-.42-1.257-.104-2.774 1.129.955.29-4.555.914-2.656 1.698.004z"
  }, {
    id: "PAK",
    d: "M685.985 351.758l2.072 1.627.83 2.661 4.611 1.391-2.708 2.866-3.125.504-4.254-.828-1.374 1.461.993 2.946.974 2.254 2.264 1.634-2.392 1.903.044 2.328-2.723 3.249-1.757 3.251-2.933 3.326-3.256-.24-3.09 3.295 1.835 1.402.319 2.391 1.576 1.566.556 2.637-6.17-.008-1.867 2.037-2.055-.771-.836-2.199-2.166-2.344-5.166.58-4.556.057-3.948.433 1.056-3.595 4.044-1.609-.231-1.442-1.342-.508-.077-2.777-2.681-1.396-1.129-1.926-1.387-1.686 4.698 1.637 2.804-.479 1.676.408.568-.702 1.953.282 3.643-1.335.099-2.75 1.562-1.843 2.088.005.307-.914 2.143-.428 1.037.306 1.095-.924-.154-1.98 1.191-2.004 1.784-.844-1.102-2.219 2.667.105.771-1.214-.117-1.302 1.397-1.43-.321-1.704-.662-1.46 1.636-1.508 3.011-.731 3.218-.405 1.425-.645z"
  }, {
    id: "POL",
    d: "M517.358 296.974l-1.149-2.864.219-1.563-.694-2.449-1.018-1.649.782-1.244-.656-2.393 1.916-1.395 4.376-2.216 3.531-1.638 2.798.82.211 1.177 2.704.06 3.454.546 5.156-.072 1.438.512.673 1.469.122 2.09.778 1.779-.017 1.848-1.681.94.865 2.117.053 2.013 1.41 3.891-.3 1.235-1.391.511-2.546 3.609.723 1.925-.613-.248-2.664-1.648-2.018.608-1.324-.441-1.657.919-1.414-1.523-1.153.585-.158-.26-1.29-2.13-2.085-.264-.265-1.367-1.924-.491-.418 1.131-1.523-.905.175-1.211-2.096-.385z"
  }, {
    id: "PRI",
    d: "M289.407 410.886l1.433.259.506.584-.719.739-2.11-.018-1.639.104-.163-1.256.397-.429z"
  }, {
    id: "PSE",
    d: "M574.918 367.868l-.001 2.014-.415.962-1.318.443.121-.861.716-.451-.704-.369.586-2.196z"
  }, {
    id: "PRT",
    d: "M449.921 334.562l1.017-.955 1.145-.55.702 1.841 1.656-.004.48-.474 1.634.132.784 1.874-1.296 1.006-.036 2.875-.455.536-.113 1.721-1.211.299 1.123 2.165-.774 2.35.967 1.057-.385.963-1.039 1.322.234 1.161-1.127.907-1.478-.491-1.447.385.428-2.745-.263-2.178-1.255-.328-.67-1.353.223-2.355 1.118-1.315.199-1.473.585-2.207-.063-1.568-.56-1.336z"
  }, {
    id: "PRY",
    d: "M299.493 526.99l1.105-3.591.07-1.604 1.345-2.611 4.886-.86 2.604.041 2.612 1.514.048.914.829 1.654-.186 4.065 2.96.578 1.144-.59 1.894.815.525.902.261 2.778.327 1.172 1.046.136 1.052-.493 1.008.553-.001 1.682-.38 1.817-.55 1.783-.459 2.742-2.543 2.398-2.217.505-3.149-.479-2.828-.854 2.761-4.732-.403-1.362-2.888-1.202-3.426-2.262-2.292-.464z"
  }, {
    id: "QAT",
    d: "M617.717 392.161l-.186-2.241.756-1.624.766-.334.848.972.049 1.809-.608 1.809-.778.218z"
  }, {
    id: "ROU",
    d: "M538.93 310.861l1.211-.895 1.734.464 1.798.015 1.302 1.018.957-.639 2.069-.401.706-.979 1.183.001.854.409.869 1.238.889 1.748 1.618 2.442.089 1.785-.295 1.724.502 1.826 1.251.733 1.317-.64 1.272.683.065 1.022-1.359.849-.852-.369-.784 4.711-1.649-.406-2.04-1.412-3.301.904-1.391.988-4.117-.204-2.155-.604-1.086.284-.807-1.598-.513-.681.65-.661-.692-.488-.88.878-1.635-1.14-.22-1.628-1.709-.935-.314-1.27-1.52-1.579 2.248-.762 1.696-2.761 1.326-2.798z"
  }, {
    id: "SRB",
    d: "M533.781 320.903l1.709.935.22 1.628 1.635 1.14.88-.878.692.488-.65.661.513.681-.692.883.252 1.415 1.362 1.661-1.069 1.195-.471 1.21.304.451-.461.534-1.3.063-.955.22-.093-.283.336-.45.314-.924-.398.021-.545-.705-.461-.18-.367-.607-.524-.238-.398-.541-.503.212-.388 1.27-.671.274.231-.327-1.069-.793-.922-.413-.409-.531-.744-.661.66-.17.409-1.821-1.352-1.5.702-1.727-1.016.01 1.079-1.488-.891-1.134-.681-1.55 2.148-1.059 1.75.179 1.52 1.579z"
  }, {
    id: "RUS",
    d: "M1008.267 215.754l-2.78 2.973-4.596.698-.069 6.463-1.123 1.347-2.625-.193-2.138-2.264-3.728-1.917-.627-2.89-2.848-1.102-3.188.875-1.523-2.369.609-2.552-3.358 1.635 1.265 3.194-1.591 2.833-.021.036-3.604 2.885-3.634-.478 2.529 3.442 1.669 5.201 1.295 1.668.325 2.532-.724 1.602-5.226-1.317-7.837 4.511-2.493.688-4.29 4.096-4.07 3.505-1.03 2.553-4.011-3.9-7.306 4.419-1.275-2.078-2.701 2.394-3.75-.763-.903 3.631-3.364 5.218.101 2.137 3.193 1.174-.376 7.458-2.603.186-1.201 4.154 1.167 2.104-4.903 2.467-.973 5.405-4.181 1.135-.84 4.663-4.042 4.183-1.036-3.085-1.201-6.693-1.564-10.647 1.348-6.954 2.365-3.071.146-2.441 4.357-1.18 5.009-6.781 4.826-5.727 5.04-4.57 2.254-8.366-3.406.511-1.685 4.922-7.111 6.361-2.297-7.138-7.238 1.999-7.018 9.56 2.315 3.377-6.258 1.419-4.335.557.203-3.946-4.358-.839-3.474 2.702-8.573-.941-9.223 1.62-9.083 10.33-10.745 11.777 4.417.61 1.379 3.001 2.724 1.055 1.794-2.378 3.076.311 4.048 5.191.095 3.924-2.191 4.512-.237 5.266-1.265 6.848-4.226 6.013-.939 2.817-3.806 4.662-3.777 4.528-1.811 2.283-3.736 2.245-1.769.049-1.761-1.858-3.764 2.792-.438 1.258-.393-.661-.017-1.929 1.432-.103.404-4.553-.739-3.358 2.407-1.399 3.402.703 1.886-3.888.961-4.462 1.089-1.511 1.474-3.761-4.634 1.239-2.431 1.647-4.261-.005-1.135-3.945-3.321-3.035-4.88-1.379-1.037-4.284-.977-2.731-1.051-1.937-1.733-4.611-2.462-1.711-4.196-1.394-3.718.127-3.484.845-2.315 2.313 1.538 1.095.035 2.522-1.56 1.45-2.531 4.725.026 1.929-3.952 2.739-3.365-1.632-3.346.361-1.468-1.457-1.682-.472-4.106 3.059-3.691.712-2.577 1.062-3.532-.697-2.6.045-1.702-2.203-2.746-2.092-2.81-.577-3.547.573-2.65.809-3.983-1.841-.534-3.322-3.297-1.151-2.545-.527-3.141-1.871-2.904 4.659 1.139 2.6-2.726 3.034-4.054-1.09-2.799-.156-1.874-2.042-2.925-.065-2.438-1.354-4.265 2.071-5.35 3.739-2.956.744-1.098.352-1.487-2.634-3.612.579-1.193-1.843-1.96-.848-1.35-2.545-1.548-.799-4.029 1.14-3.862-2.565-1.494 2.333-6.266-11.576-3.577-3.659 1.025-1.504-7.026 4.494-2.689.268.232-2.583-3.602-1.631-2.927 1.166-.883-5.012-5.039-1.059-2.521 2.033-7.016 1.791-1.369 1.189-10.492 1.663-1.285 1.618 2.024 3.208-2.692 1.204.525 1.254-2.691 2.223 4.544 3.098-.702 2.106-3.938-.191-.814 1.31-3.586-2.293-4.445.089-2.976 1.868-3.319-1.791-6.181-3.102-4.38.117-5.788 4.849-.349 3.193-2.883-2.532-2.237 4.77.819.874-1.618 3.215 2.38 2.837 2.081-.116 1.787 2.76-.284 2.102 1.424.656-1.278 2.391-2.718.66-2.787 4.088 2.548 3.695-.276 2.586 3.062 4.456-1.674 1.506-.481.945-1.241-.253-1.927-2.266-.788-.126-1.763-.871-.858-1.55-2.615-.794-1.7.597-.491-.706-3.818-1.831-4.128-.622-2.37-.658-.342.455-3.575-3.274-3.199-1.477-2.422-2.319 2.041-.636 2.327-3.354-1.568-1.605 4.132-1.667-.074-.899-2.517.663.088-1.832 1.445-1.159 2.713-.306.441-1.395-.62-2.327 1.139-2.233-.033-1.263-4.133-1.409-1.639.047-1.73-2.043-2.151.693-3.561-1.542.061-.868-.997-1.926-2.236-.216-.232-1.392.7-.913-1.792-2.575-2.907.442-.852-.229-.708 1.037-1.047-.184-.689-2.937-.658-1.54.54-.435 2.262.162 1.091-1.022-.808-1.253-1.891-.832.169-.857-1.141-.87-1.758-3.153.601-1.314-.274-2.308-2.741-1.183-1.471.593-.398-1.236-2.952-1.256-.901-2.989-.239-2.492-1.351-1.194 1.201-1.659-.832-4.962 1.995-3.133-.422-.959 3.187-3.071-2.938-2.684 6.003-7.405 2.604-3.453 1.055-3.104-4.15-4.256 1.146-4.145-2.524-4.854 1.888-5.764-3.261-7.957 2.587-5.478-4.294-4.99.409-5.404 2.265-.724 4.771-3.188 2.893-2.813 4.606 4.86 7.678 1.876 10.594 8.646 2.152 3.508.185 4.796-3.113 3.695-4.578 1.846-12.517-5.313-2.059.9 4.571 5.097.179 3.154.183 6.753 3.61 1.966 2.191 1.657.362-3.107-1.689-2.801 1.785-2.505 6.778 4.099 2.361-1.593-1.887-4.877 6.535-6.742 2.588.404 2.618 2.43 1.633-4.811-2.338-4.283 1.373-4.406-2.061-4.692 7.843 2.442 1.602 4.183-3.55.908.019 4.038 2.207 2.438 4.332-1.541.686-4.611 5.857-3.525 9.785-6.543 2.114.382-2.764 4.64 3.478.785 2.009-2.584 5.255-.211 4.164-3.193 3.195 4.621 3.186-5.087-2.938-4.577 1.458-2.663 8.282 2.443 3.881 2.488 10.161 8.799 1.875-3.975-2.85-4.111-.082-1.677-3.379-.782.925-3.827-1.5-6.491-.085-2.737 5.175-7.99 1.84-8.419 2.085-1.878 7.423 2.514.585 5.183-2.658 7.283 1.744 2.779.902 5.938-.637 11.073 3.093 4.73-1.203 5.008-5.492 10.198 3.205 1.024 1.115-2.514 3.085-1.815.744-3.553 2.427-3.489-1.634-4.26 1.309-5.083-3.066-.644-.674-4.418 2.237-8.278-3.642-7.033 5.018-6.042-.648-6.619 1.398-.216 1.473 5.189-1.105 8.667 3 1.592-1.278-6.373 4.692-3.579 5.819-.488 5.181 5.18-2.493-7.622-.279-10.282 4.876-2.021 6.744.444 6.075-1.321-2.278-5.381 3.245-7.016 3.221-.3 5.452-5.513 7.403-1.514.936-3.153 7.362-1.082 2.294 2.606 6.293-6.237 5.151.199.772-5.238 2.68-5.334 6.619-5.312 4.809 4.208-3.818 3.131 6.352 1.917.757 6.034 2.562-2.943 8.197.163 6.32 5.843 2.251 4.351-.698 5.854-3.102 3.242-7.368 5.917-2.106 3.079 3.477 1.433 4.148 2.552 2.523-1.91 1.431 6.393 1.231-2.559 4.483-1.575 8.996 1.646.684 4.576 11.722 1.43.16-7.473 5.95 1.742 4.477-.054 4.527 5.138 1.291 6.038-1.659 3.836 3.521 6.982 4.41 3.493 2.705-9.178 4.498 3.996 4.778-2.376 5.427 2.716 2.065-2.475 4.587 1.242-2.024-8.398 3.702-4.067 25.323 6.061 2.387 5.355 7.34 6.653 11.322-1.623 5.582 1.414 2.334 3.498-.341 6.016 3.454 2.286 3.753-1.641 4.973-.211 5.293 1.575 5.314-.887 4.884 6.994 3.475-2.483-2.268-5.074 1.249-3.618 8.945 2.286 5.832-.486 8.064 3.843 3.925 3.44 6.869 5.858 7.352 7.341-.241 4.437 1.891 1.745-.65-5.146 7.611 1.068 5.489 6.555zm-127.425 90.497l-2.821-7.684-1.157-4.509.072-4.496-.971-4.503-.729-3.15-1.248.673 1.113 2.205-2.592 2.166-.248 6.296 1.643 4.411-.123 5.852-.649 3.237.32 4.537-.313 4.015.52 3.4 1.838-3.134 2.125 2.445.078-2.836-2.732-4.229 1.725-6.107 4.149 1.411zm-343.019-27.485l-2.936-.856-3.869 1.583-.639 2.127 3.453.545 5.156-.072-.225-1.228.299-1.327-1.239-.772zm442.123-100.118l3.662-.52 2.889-2.065.24-1.188-4.056-2.515-2.376-.019-.359.371-3.574 3.645.5 2.726 3.074-.435zm-109.878-27.089l-2.66 3.915.491.518 5.746 1.084 4.251-.068-.339-2.569-3.983-3.81-3.506.93zm24.574-9.528l3.241-4.248-7.036-2.875-5.227-1.681-.671 3.585 5.211 4.267 4.482.952zm-25.128-1.694l10.335.296 2.205-8.145-10.135-6.071-7.404-.512-3.699 2.18-1.507 7.752 5.555 7.013 4.65-2.513zm-247.119 25.947l-2.867 1.958.41 4.832 5.075 2.348.744 3.818 9.161 1.102 1.656-.743-5.363-7.106-.57-7.516 4.395-9.143 4.179-9.819 8.71-10.168 8.563-5.338 9.935-5.74 1.884-3.706-1.949-4.827-5.457 1.604-4.802 4.492-9.332 2.222-9.257 7.409-6.271 5.849.759 4.87-6.713 9.029 2.578 1.22-5.562 8.271.094 5.082zm147.474-67.946l.833-5.72-7.107-8.343-2.106-.985-2.304 1.696-5.122 18.604 15.806-5.252zM605.64 69.025l3.037 3.876 3.277-2.693.391-2.719 2.521-1.272 3.764-2.235 1.085-2.624-4.159-3.847-2.643 2.903-1.61 4.125-.573-4.649-4.26.211-5.474 3.152 6.24.521-1.596 5.251zm131.249 13.046l4.653 5.73 7.81 4.202 6.118-1.803.691-13.623-6.456-16.04-5.448-9.023-6.065 4.109-7.28 11.834 3.825 3.27 2.152 11.344z"
  }, {
    id: "RWA",
    d: "M560.543 466.545l1.114 1.573-.162 1.639-.809.353-1.49-.182-.859 1.587-1.702-.219.259-1.525.385-.215.104-1.658.806-.777.679.284z"
  }, {
    id: "SAU",
    d: "M595.2 417.216l-.364-1.24-.846-.878-.216-1.164-1.448-1.048-1.494-2.461-.791-2.403-1.939-2.039-1.251-.488-1.857-2.842-.324-2.084.119-1.786-1.608-3.362-1.315-1.19-1.514-.632-.922-1.757.153-.695-.779-1.6-.819-.691-1.095-2.312-1.707-2.523-1.43-2.164-1.396.015.436-1.739.124-1.114.348-1.275 3.12.508 1.212-.984.671-1.157 2.139-.445.462-1.081.927-.549-2.795-3.256 5.616-1.646.534-.497 3.377.892 4.178 2.292 7.906 6.491 5.213.255 2.498.308.698 1.516 1.983-.082 1.098 2.727 1.379.719.481 1.102 1.911 1.314.17 1.286-.279 1.034.354 1.041.806.865.374 1.011.419.753.847.609.778-.218.532 1.17.107.706 1.075 3.08 8.428 1.524.565-.638 1.285 2.135-1.869 5.972-8.411 2.957-8.085 1.129-2.617 1.321-2.009 3.071-1.309.486-.701-.972-1.075.146-2.71-.292-.514-.292-3.236.067-.76.264-1.152-.76-.742 1.435.287 1.228z"
  }, {
    id: "SLB",
    d: "M929.811 492.747l.784.974-1.959-.018-1.065-1.743 1.675.685.565.102zm-3.552-1.726l-1.093.063-1.719-.286-.587-.436.176-1.121 1.851.444.913.593.459.743zm2.321-.771l-.423.521-2.078-2.447-.583-1.683h.953l1.009 2.254 1.122 1.355zm-5.061-3.561l.119.566-2.197-1.194-1.535-1.01-1.052-.936.418-.286 1.289.674 2.3 1.293.658.893zm-6.551-2.782l-.559.16-1.226-.64-1.152-1.153.145-.467 1.675 1.185 1.117.915z"
  }, {
    id: "SDN",
    d: "M570.481 436.904l-.388-.056.048-1.407-.337-.972-1.444-1.118-.337-2.047.337-2.101-1.299-.196-.193.636-1.684.147.673.831.241 1.707-1.54 1.558-1.396 2.041-1.444.291-2.359-1.652-1.059.584-.289.825-1.444.534-.096.582h-2.792l-.385-.582-2.022-.097-1.01.484-.771-.242-1.444-1.65-.481-.777-2.022.388-.77 1.312-.722 2.52-.963.532-.86.307-.228-.131-.973-.812-.179-.877.455-1.175-.008-1.153-1.617-1.771-.318-1.215.034-.688-1.031-.838-.031-1.654-.588-1.1-.984.165.282-1.05.727-1.192-.318-1.187.922-.88-.585-.672.741-1.779 1.281-2.127 2.418.203-.139-11.609.035-1.243 3.224-.009v-5.963h33.272l.903 2.94-.614.542.407 3.059 1.029 3.524 1.069.724 1.534 1.084-1.419 1.67-2.065.48-.883.894-.276 1.933-1.208 4.25.298 1.153-.447 2.466-1.14 2.817-1.691 1.413-1.202 2.173-.282 1.161-1.328.794-.829 2.961z"
  }, {
    id: "SWE",
    d: "M537.451 217.489l-2.719 4.69.438 4.016-4.46 5.139-5.415 5.338-2.041 8.412 1.996 4.067 2.681 3.14-2.576 6.226-2.916 1.265-1.069 8.838-1.593 4.758-3.401-.485-1.587 3.949-3.246.226-.891-4.71-2.347-5.811-2.133-7.501 1.236-3.145 2.333-3.812.928-6.727-1.792-2.978-.172-8.044 1.82-5.906 2.782.109.975-2.554-1.021-2.232 4.354-9.5 2.804-7.867 1.852-5.243 2.692.025.742-4.217 5.284 1.224.412-5.082 1.739-.323 3.737 3.802 4.377 5.153.074 11.12.946 2.7z"
  }, {
    id: "SVN",
    d: "M513.964 316.509l2.316.314 1.415-.922 2.452-.101.535-.689.471.045.545 1.375-2.232 1.076-.273 1.627-.974.41.01 1.116-1.1-.077-.954-.652-.513.674-1.954-.136.624-.362-.671-1.707z"
  }, {
    id: "SJM",
    d: "M544.576 104.488l-6.263 5.359-4.947-3.021 1.935-3.424-1.694-4.343 5.811-2.782 1.113 5.175 4.045 3.036zm-18.148-26.676l9.23 11.292-7.056 5.66-1.558 10.086-2.46 2.49-1.335 10.505-3.379.478-6.03-7.644 2.543-4.623-4.203-3.862-5.463-11.823-2.181-11.786 7.644-5.686 1.536 5.561 3.993-.217 1.065-5.435 4.117-.563 3.537 5.567zm20.176-11.458l5.495 5.799-4.158 8.517-8.132 1.806-8.269-2.562-.499-4.322-4.023-.279-3.068-7.478 8.658-4.723 4.071 4.075 2.835-5.091 7.09 4.258z"
  }, {
    id: "SVK",
    d: "M528.114 304.025l.158.26 1.153-.585 1.414 1.523 1.657-.919 1.324.441 2.018-.608 2.664 1.648-.777 1.108-.547 1.705-.598.43-3.003-1.281-.919.258-.658.992-1.316.524-.304-.269-1.365.651-1.114.124-.226.839-2.353.51-1.034-.454-1.427-1.069-.279-1.457.225-.535.398-.932 1.242.071.957-.439.076-.396.537-.202.183-.973.644-.186.434-.774z"
  }, {
    id: "SLE",
    d: "M443.18 444.441l-.755-.208-2.019-1.131-1.46-1.505-.491-1.028-.343-2.081 1.498-1.241.324-.783.479-.61.772-.064.654-.533 2.242.003.78 1.011.608 1.187-.091.821.451.737-.032 1.033.772-.161-1.305 1.313-1.265 1.526-.148.816z"
  }, {
    id: "SEN",
    d: "M428.39 425.157l-1.156-2.236-1.399-1.025 1.233-.547 1.359-2.028.666-1.487.96-.931 1.393.251 1.368-.633 1.566-.033 1.34.855 1.861.768 1.697 2.129 1.85 1.981.128 1.789.554 1.642 1.049.804.24 1.106-.129.889-.405.161-1.529-.226-.21.318-.618.064-2.016-.696-1.353-.03-5.182-.119-.751.321-.929-.092-1.485.465-.46-2.19 2.552.061.674-.401.502-.024 1.039-.661 1.203.605 1.218.051 1.214-.643-.567-.829-.924.483-.87-.013-1.107-.706-.889.046-.633.679z"
  }, {
    id: "SOM",
    d: "M618.625 430.431l-.063-.787-1.064.007-1.327.975-1.486.286-1.292.422-.896.057-1.597.099-1.002.519-1.39.187-2.468.881-3.052.336-2.643.725-1.392-.009-1.265-1.187-.55-1.173-.912-.524-1.033 1.519-.611 1.005 1.035 1.559 1.034 1.361 1.071 1.007 9.167 3.344 2.359-.018-7.924 8.416-3.652.123-2.499 1.969-1.798.052-.767.88-2.45 3.165.033 10.148 1.661 2.299.633-.66.646-1.469 3.069-3.374 2.613-2.118 4.195-2.766 2.805-2.257 3.298-3.807 2.394-3.129 2.406-4.106 1.734-3.587 1.349-3.147.79-3.055.593-1.024-.011-1.491z"
  }, {
    id: "SUR",
    d: "M315.02 446.719l3.359.561.302-.505 2.267-.202 3.014.752-1.459 2.405.222 1.912 1.101 1.654-.491 1.201-.246 1.275-.715 1.173-1.606-.591-1.325.285-1.131-.248-.28.807.47.554-.252.57-1.525-.228-1.712-2.424-.368-1.574-.898-.003-1.243-2.027.517-1.441-.151-.659 1.702-.73z"
  }, {
    id: "SSD",
    d: "M570.481 436.904l.033 2.2-.419.86-1.489.069-.955 1.602 1.723.202 1.42 1.369.492 1.122 1.28.651 1.658 3.047-1.901 1.843-1.725 1.669-1.724 1.284-1.973-.007-2.257.654-1.783-.624-1.154.76-2.469-1.855-.666-1.192-1.561.59-1.297-.183-.75.469-1.259-.339-1.699-2.307-.451-.887-2.096-1.108-.708-1.681-1.168-1.214-1.886-1.462-.026-.914-1.535-1.136-1.907-1.1.86-.307.963-.532.722-2.52.77-1.312 2.022-.388.481.777 1.444 1.65.771.242 1.01-.484 2.022.097.385.582h2.792l.096-.582 1.444-.534.289-.825 1.059-.584 2.359 1.652 1.444-.291 1.396-2.041 1.54-1.558-.241-1.707-.673-.831 1.684-.147.193-.636 1.299.196-.337 2.101.337 2.047 1.444 1.118.337.972-.048 1.407z"
  }, {
    id: "SLV",
    d: "M229.094 425.76l-.311.674-1.624-.043-1.01-.274-1.159-.569-1.558-.178-.794-.616.087-.42.961-.725.526-.317-.149-.339.656-.177.827.242.604.573.847.461.104.386 1.23-.341.577.204.381.311z"
  }, {
    id: "SYR",
    d: "M584.021 364.596l-5.491 3.54-3.124-1.311-.053-.023.38-.505-.043-1.363.688-1.833 1.529-1.269-.459-1.327-1.261-.173-.262-2.608.686-1.412.751-.756.751-.757.152-1.939.918.678 3.087-.97 1.492.657 2.306-.011 3.227-1.31 1.511.059 3.189-.545-1.437 2.18-1.535.857.265 2.521-1.06 4.121z"
  }, {
    id: "SWZ",
    d: "M565.177 540.737l-.571 1.389-1.641.339-1.673-1.697-.026-1.078.765-1.167.265-.902.81-.221 1.415.567.416 1.392z"
  }, {
    id: "TCD",
    d: "M515.897 427.262l.28-1.347-1.798-.066.007-1.845-1.168-1.064 1.211-3.8 3.576-2.736.148-3.796 1.08-5.98.61-1.278-1.166-1.02-.046-.949-1.048-.777-.689-4.677 2.831-1.658 11.182 5.776 11.183 5.699.139 11.609-2.418-.203-1.281 2.127-.741 1.779.585.672-.922.88.318 1.187-.727 1.192-.282 1.05.984-.165.588 1.1.031 1.654 1.031.838-.034.688-1.775.485-1.423 1.148-2.027 3.086-2.638 1.308-2.708-.176-.791.26.278.992-1.463.984-1.19 1.098-3.53 1.076-.7-.637-.465-.054-.516.722-2.319.212.44-.761-.885-1.94-.394-1.166-1.221-.478-1.656-1.647.61-1.334 1.278.284.791-.202 1.566.028-1.526-2.575.102-1.886-.187-1.889z"
  }, {
    id: "ATF",
    d: "M668.536 619.028l1.809 1.336 2.649.533.099.813-.785 1.958-4.304.281-.07-2.293.414-1.76z"
  }, {
    id: "TGO",
    d: "M480.483 446.246l-2.257.597-.626-.984-.748-1.778-.223-1.397.621-2.533-.704-1.027-.267-2.222.005-2.053-1.171-1.461.207-.884 2.455.06-.357 1.493.857.836.974.991.106 1.386.565.582-.128 6.46z"
  }, {
    id: "THA",
    d: "M762.886 429.182l-2.517-1.309-2.398.053.411-2.247-2.47.017-.222 3.143-1.513 4.154-.911 2.502.192 2.044 1.826.089 1.138 2.572.504 2.434 1.564 1.608 1.699.326 1.453 1.455-.916 1.15-1.852.335-.22-1.438-2.288-1.228-.487.5-1.108-1.076-.48-1.39-1.489-1.586-1.359-1.335-.461 1.653-.531-1.562.306-1.758.826-2.708 1.358-2.911 1.54-2.65-1.096-2.601.044-1.328-.321-1.6-1.87-2.284-.669-1.446.968-.533 1.026-2.518-1.148-1.917-1.779-2.13-1.356-2.572 1.184-.534 1.278-3.19 1.98-.133 1.635-1.286 1.607-.687 1.213.917.161 1.78 1.894.136-.689 3.104.066 2.626 2.955-1.746.84.517 1.642-.085.565-1.02 2.12.201 2.133 2.378.175 2.875 2.27 2.527-.125 2.443-.913 1.297-2.628-.413-3.625.55-1.796 2.385z"
  }, {
    id: "TJK",
    d: "M674.366 340.624l-1.026 1.126-3.052-.61-.266 2.096 3.041-.281 3.463 1.174 5.302-.547.711 3.323.921-.359 1.703.812-.098 1.381.421 2.012-2.892-.006-1.931-.259-1.747 1.571-1.244.347-.978.733-1.109-1.143.261-2.956-.848-.169.305-1.084-1.518-.81-1.207 1.238-.297 1.428-.431.518-1.676-.074-.904 1.609-.946-.677-2.029 1.126-.857-.427 1.576-3.569-.606-2.658-2.057-.857.727-1.591 2.341.17 1.332-2.009.892-2.353 3.749-.858-.584 1.709.401 1.019z"
  }, {
    id: "TLS",
    d: "M825.646 488.254l.331-.665 2.413-.633 1.956-.096.877-.351 1.061.348-1.031.764-2.923 1.234-2.348.811-.051-.856z"
  }, {
    id: "TKM",
    d: "M646.879 356.901l-.246-2.906-2.09-.125-3.204-3.095-2.239-.384-3.101-1.791-1.994-.327-1.231.661-1.875-.103-1.994 2.017-2.464.679-.521-2.491.407-3.728-2.186-1.219.719-2.483-1.861-.212.62-3.094 2.645.905 2.463-1.181-2.042-2.229-.804-2.145-2.257.959-.286 2.733-.876-2.415 1.239-1.25 3.183-.785 1.895 1.056 1.962 2.932 1.439-.182 3.163-.051-.46-1.88 2.395-1.295 2.362-2.201 3.778 2.002.3 2.992 1.073.761 3.031-.171.941.674 1.379 3.791 3.206 2.507 1.829 1.695 2.932 1.751 3.73 1.52-.077 2.159-.845-.109-1.323-.941-.44 1.252-2.363.678-.56 2.785-1.58 1.052-2.213.519-.585 1.557-2.115.456z"
  }, {
    id: "TUN",
    d: "M501.839 374.686l-1.195-5.857-1.729-1.332-.024-.802-2.293-1.984-.247-2.527 1.728-1.887.66-2.812-.445-3.288.57-1.787 3.053-1.413 1.963.421-.082 1.768 2.378-1.285.2.672-1.402 1.705-.019 1.599.971.856-.369 2.959-1.846 1.704.533 1.836 1.45.057.705 1.592 1.067.521-.159 2.549-1.367.947-.863 1.053-1.925 1.262.298 1.351-.242 1.372z"
  }, {
    id: "TUR",
    d: "M578.752 336.599l4.022 1.435 3.266-.571 2.414.33 3.311-1.94 2.987-.177 2.701 1.827.476 1.301-.27 1.788 2.085.908 1.104 1.063-1.92 1.032.875 4.112-.549 1.1 1.534 2.822-1.344.591-.985-.892-3.261-.453-1.204.545-3.189.544-1.511-.059-3.227 1.31-2.307.011-1.492-.656-3.087.969-.917-.677-.152 1.938-.751.757-.751.755-1.031-1.566 1.062-1.304-1.71.296-2.345-.801-1.928 1.999-4.255.389-2.27-1.861-3.022-.117-.646 1.44-1.938.411-2.711-1.847-3.061.063-1.661-3.484-2.048-1.964 1.364-2.778-1.777-1.723 3.11-3.484 4.318-.147 1.178-2.806 5.344.491 3.371-2.416 3.267-1.061 4.639-.08 4.892 2.637zm-27.255 2.387l-2.34 1.976-.882-1.708.039-.761.666-.414.868-2.325-1.366-.99 2.856-1.183 2.414.505.333 1.441 2.447 1.204-.51.909-3.33.204-1.195 1.142z"
  }, {
    id: "TTO",
    d: "M302.312 433.238l1.611-.369.589.099-.112 2.111-2.341.311-.505-.255.813-.778z"
  }, {
    id: "TWN",
    d: "M816.7 393.266l-1.688 4.879-1.202 2.473-1.478-2.546-.319-2.249 1.65-2.998 2.244-2.328 1.28.918z"
  }, {
    id: "TZA",
    d: "M570.314 466.031l.474.306 10.167 5.678.191 1.618 4.024 2.792-1.294 3.447.166 1.587 1.795 1.022.084.73-.772 1.696.161.855-.184 1.344.979 1.767 1.161 2.786 1.029.619-2.231 1.643-3.066 1.102-1.682-.046-.999.852-1.952.073-.732.36-3.369-.801-2.11.229-.785-3.857-.951-1.319-.564-.781-2.749-.526-1.591-.848-1.782-.474-1.117-.472-1.172-.717-1.514-3.541-1.626-1.571-.561-1.626.28-1.455-.504-2.572 1.159-.133 1.018-1.012 1.091-1.455.692-.584-.026-.907-.604-.632-.162-1.098.809-.353.162-1.639-1.114-1.573.984-.334 3.074.036z"
  }, {
    id: "UKR",
    d: "M564.376 292.494l1.047.184.709-1.037.851.229 2.908-.442 1.791 2.575-.7.913.232 1.392 2.236.216.997 1.927-.061.868 3.561 1.542 2.152-.693 1.73 2.043 1.639-.046 4.133 1.408.033 1.263-1.139 2.233.619 2.327-.441 1.395-2.713.306-1.445 1.159-.089 1.832-2.238.328-1.866 1.322-2.625.215-2.415 1.513-1.324 1.03 1.488 1.47 1.372.963 2.86-.24-.548 1.418-3.069.685-3.807 2.272-1.559-.796.618-1.851-3.063-1.16.495-.763 3.163-1.636-.393-.816-.452.411-.446-.21-4.358-1.021-.193-1.514-2.598.501-1.041 2.228-2.171 2.956-1.272-.683-1.317.64-1.251-.733.706-.433.489-1.375.768-1.286-.198-.724.586-.324.276.561 1.652.119.743-.3-.523-.411.198-.607-.979-1.038-.405-1.717-1.021-.676.201-1.407-1.267-1.124-1.153-.157-2.067-1.309-1.863.417-.669.619-1.183-.001-.706.979-2.069.401-.957.639-1.302-1.018-1.798-.015-1.734-.464-1.211.895-.196-1.12-1.556-1.143.547-1.705.777-1.108.613.248-.723-1.925 2.546-3.609 1.391-.511.3-1.235-1.41-3.891 1.341-.175 1.536-1.225 2.173-.101 2.832.355 3.129 1.084 2.208.09 1.055.649 1.051-.783.735 1.05 2.531-.215 1.115.433.18-2.265.864-.995z"
  }, {
    id: "UGA",
    d: "M564.601 466.247l-3.074-.036-.984.334-1.675.86-.679-.284.024-2.1.649-1.064.159-2.236.589-1.295 1.072-1.452 1.077-.741.902-.989-1.124-.377.17-3.262 1.154-.76 1.783.624 2.257-.654 1.973.007 1.724-1.284 1.329 1.938.328 1.4 1.234 3.2-1.021 2.031-1.379 1.844-.803 1.128.028 2.952z"
  }, {
    id: "USA",
    d: "M109.249 279.8h0l-1.542-1.834-2.471-1.569-.793-4.356-3.615-4.131-1.511-4.938-2.692-.343-4.458-.13-3.286-1.535-5.797-5.643-2.685-1.05-4.905-1.993-3.882.478-5.514-2.59-3.333-2.435-3.112 1.213.578 3.928-1.55.358-3.244 1.161-2.468 1.863-3.107 1.163-.401-3.245 1.261-5.531 2.979-1.771-.769-1.456-3.574 3.218-1.914 3.771-4.04 3.947 2.052 2.647-2.65 3.849-3.014 2.207-2.806 1.592-.694 2.287-4.377 2.634-.886 2.363-3.281 2.127-1.924-.381-2.617 1.377-2.845 1.669-2.332 1.626-4.812 1.377-.439-.809 3.067-2.268 2.743-1.513 2.989-2.71 3.478-.565 1.383-2.063 3.886-3.053.626-1.032 2.07-1.833.484-4 1.426-3.174-3.233 1.636-.904-.927-1.518 1.954-1.831-2.73-.756 1.936-1.048-2.695-2.803 2.167-1.721-.004-.242-3.232.507-2.02-1.806-1.982-3.646 1.07-2.366-2.631-1.918-1.359-.012-3.25-2.161-2.483 1.085-3.405 2.286-3.368 1-3.154 2.269-.454 1.924.992 2.262-3.007 2.036.541 2.137-1.955-.521-2.917-1.57-1.163 2.076-2.519-1.722.075-2.975 1.426-.854 1.434-2.211-1.432-3.966.729-4.106-1.563-1.177-2.654-3.548-3.906 3.94-2.867 6.254-3.407h2.305l-.382 3.484 5.918-.269-2.276-4.339-3.449-2.722-1.994-3.639-2.69-3.166-3.853-2.385 1.569-4.028 4.974-.253 3.539-3.585.667-3.917 2.864-3.911 2.731-.955 5.315-3.758 2.578.572 4.315-4.609 4.242 1.831 2.029 3.869 1.246-1.648 4.738.513-.168 1.951 4.29 1.428 2.86-.838 5.907 2.635 5.393.776 2.159 1.068 3.731-1.335 4.253 2.462 3.046 1.135-.019 27.648-.015 35.43 2.761.167 2.731 1.556 1.958 2.436 2.491 3.596 2.728-3.054 2.815-1.793 1.488 2.855 1.889 2.229 2.567 2.424 1.753 3.794 2.867 5.881 4.767 3.204.078 3.124-1.559 2.356zm175.93 34.435l-1.245-1.187-1.88.7-.932-1.083-2.139 3.097-.855 3.148-.995 1.82-1.191.616-.897.2-.281.978-5.167.003-4.26.027-1.265.726-2.87 2.73.287.544.166 1.506-2.103 1.27-2.297-.318-2.204-.143-1.328.439.249 1.15v.002l.055.373-2.416 2.265-2.115 1.089-1.443.506-1.661 1.035-2.03.496-1.398-.191-1.729-.772.961-1.449.617-1.321 1.318-2.091-.14-1.571-.505-2.241-1.037-.388-1.738 1.705-.557-.032-.144-.974 1.542-1.556.256-1.786-.228-1.794-2.075-1.552-2.383-.8-.392 1.518-.618.405-.496 1.953-.26-1.325-1.121.947-.7 1.321-.731 1.916-.14 1.645.93 2.376-.077 2.508-1.138 1.836-.568.518-.757.412-.953.021-.258-.253-.755-1.975-.022-.982.075-.937-.352-1.87.533-2.181.633-2.713 1.455-3.035-.422.014-2.06 2.543-.38-.464 1.099-1.422 1.672-2.573 1.907-.361 2.187-.804 2.205.424.094.018 2.47-.363-1.395-1.609-.752-.125-.855-.164-.589-1.14-2.755.356-2.488.905-1.975-1.551-1.589-.521.901-2.17-2.475 1.365-2.25 1.328-2.165 1.037-1.719-1.401-2.809.851.009-.599 1.903-1.73 1.991-1.654 2.86-1.375-3.449-1.089-2.271.545-2.72-1.303-2.863-.672-1.958-.26-.872-.718-.498-2.345-.949.021-.008 1.644-5.803-.003-9.593.003h-62.217l.954 3.466.448 3.41-.693 1.087-1.494-3.911-4.055-1.425-.339.82.817 1.938.886 3.525.506 5.416-.341 3.591-.341 3.535-1.096 3.614.895 2.898.098 3.202-.615 3.055 1.494 1.992.387 2.945 2.17 2.991 1.237 1.169-.1.817 2.335 4.851 2.72 3.452.341 1.866.715.547 2.605.333 1.003.913 1.573.169.307.965 1.308.401 1.817 1.92.472 1.696 3.186-.255 3.561-.359-.263.648 4.234 1.604 6.396 2.31 5.576-.023 2.223-.001.006-1.351 4.857.001 1.022 1.162 1.434 1.032 1.666 1.429.93 1.689.698 1.769 1.449.967 2.328.958 1.766-2.528 2.292-.063 1.976 1.279 1.407 2.184.969 1.859 1.654 1.797.617 2.195.785 1.466 2.187.963 1.991.682 1.093-.093-.533-1.055-.14-1.495.028-2.161.645-1.416 1.531-1.509 2.787-1.369 2.552-2.367 2.359-.75 1.744-.225 2.04.743 2.445-.4 2.093 1.692 2.035.1 1.052-.606 1.041.472.534-.42-.595-.632.045-1.302-.505-.856 1.159-.504 2.138-.223 2.488.357 3.169-.406 1.758.799 1.361 1.502.502.16 2.829-1.46 1.094.494 2.186 2.682.785 1.751-.576 2.101.421 1.232 1.304 2.397 1.486 2.675 1.065.712.442 1.354 1.38.374.838-.389.699-1.887.122-1.207.088-2.102-1.328-3.646-.016-1.369-1.246-2.253-.936-2.745-.496-2.246.433-2.315 1.321-1.945 1.581-1.571 3.078-2.156.401-1.121 1.419-1.232 1.4-.215 1.843-1.98 2.901-1.006 1.782-2.534-.394-3.455-.291-1.205-.805-.241-.12-3.346-1.93-1.143 1.853.557-.598-2.26.54-1.552.329 2.974 1.432 1.356-.867 2.398.255.139 1.578-2.815.899-1.381-.042-1.35-.696-.639-.583-1.941.92.903.616.188.208.924 2.04-2.779.605-2.622-.825-.168.854-1.02-.083.452 1.786-.007 3.925-1.106-.831-.702-4.118.697 2.337-1.073 1.63-.184 1.22-.186 2.074-.65 1.347.073 1.893-.605.224-1.07-.841-.835.294 1.372-1.164-.094-.925-1.995.028-2.013.475-.859 1.484-2.283 2.961-1.146 2.881-1.344 2.994-1.9-.484-1.295-1.833-2.251.011-5.528zM45.622 263.786l-1.497.802-2.547 1.858.434 2.421 1.434 1.321 2.8-1.955 2.426-2.465-1.188-1.627-1.862-.355zM0 235.225l2.042-1.258.231-.677L0 232.608v2.617zm8.502 15.362l-2.769.967 1.702 1.524 1.838 1.042 1.721-.867-.268-2.154-2.224-.512zm97.343 32.5l-2.691.381-1.318-.62-.167 1.518.519 2.074 1.415 1.456 1.036 2.133 1.689 2.097 1.118.009-2.44-3.702.839-5.346zM37.131 403.772l-.997-.284-.274.256.025.186.322.243.483.627.94-.213.234-.357-.733-.458zm-2.995-.539l1.502.087.087-.323-1.38-.128-.209.364zm5.89 3.289l-.498-.257-1.074-.501-.213-.055-.163.277.193.583-.487.483-.14.33.464 1.077-.08.825.696.422.41-.493.897-.461 1.096-.631.067-.164-.714-1.037-.454-.398zm-7.852-5.143l-.75.414.109.12.356.679.976.105.201.039.152-.173-.81-.99-.234-.194zm-4.405-1.561l-.428.295-.145.219.944.548.333-.297-.058-.701-.646-.064z"
  }, {
    id: "URY",
    d: "M313.681 551.79l1.819-.344 2.813 2.504 1.041-.095 2.886 2.089 2.199 1.815 1.622 2.248-1.236 1.578.776 1.895-1.213 2.118-3.167 1.886-2.07-.68-1.517.364-2.592-1.457-1.902.109-1.708-1.866.217-2.165.609-.742-.028-3.297.75-3.366z"
  }, {
    id: "UZB",
    d: "M661.762 350.952l.077-2.159-3.73-1.52-2.932-1.751-1.829-1.695-3.206-2.507-1.379-3.791-.941-.674-3.031.171-1.073-.761-.3-2.992-3.778-2.002-2.362 2.201-2.395 1.295.46 1.88-3.163.051-.111-14.127 7.218-2.347.524.346 4.346 2.837 2.294 1.484 2.678 3.498 3.288-.561 4.809-.302 3.356 2.807-.209 3.801 1.366.026.571 3.059 3.565.12.769 1.751 1.044-.024 1.227-2.649 3.698-2.609 1.608-.697.833.371-2.354 2.429 2.07 1.401 1.997-.927 3.323 1.954-3.591 2.645-2.133-.36-1.157.095-.401-1.019.584-1.709-3.749.858-.892 2.353-1.332 2.009-2.341-.17-.727 1.591 2.057.857.606 2.658-1.576 3.569-2.115-.741z"
  }, {
    id: "VEN",
    d: "M275.25 430.351l-.08.672-1.646.331.914 1.29-.034 1.482-1.237 1.644 1.062 2.241 1.209-.184.629-2.041-.869-.996-.142-2.145 3.492-1.155-.389-1.34.984-.899 1.006 2 1.966.046 1.822 1.584.11.939 2.517.025 2.996-.292 1.606 1.269 2.144.349 1.573-.884.032-.713 3.473-.171 3.36-.04-2.381.837.958 1.337 2.242.212 2.126 1.389.447 2.259 1.461-.063 1.099.664-2.222 1.652-.245 1.025.96 1.042-.696.526-1.726.45.056 1.294-.76.771 1.898 2.124.371.789-1.025 1.066-3.136 1.046-2.017.433-.809.66-2.229-.698-2.076-.357-.526.257 1.255.724-.113 1.87.389 1.757 2.376.239.151.586-2.003.793-.325 1.18-1.155.457-2.085.65-.543.853-2.18.18-1.543-1.473-.855-2.779-.746-.974-1.017-.615 1.421-1.388-.097-.625-.797-.829-.564-1.856.22-2.005.626-.939.505-1.508-.992-.481-1.598.319-2.02-.15-1.133.3-1.973-2.413-1.629-.357-3.606.27-.668-.979-.69-.235-.098-.586.333-1.041-.222-1.133-.619-.619-.359-1.296-1.447-.189.777-1.652.343-2.019.815-1.053 1.085-.814.712-1.42z"
  }, {
    id: "VNM",
    d: "M778.21 401.873l-3.744 2.557-2.336 2.806-.616 2.051 2.144 3.098 2.622 3.815 2.544 1.794 1.704 2.324 1.285 5.323-.379 5.021-2.338 1.871-3.211 1.825-2.287 2.358-3.496 2.626-1.019-1.808.788-1.913-2.08-1.608 2.427-1.142 2.943-.206-1.231-1.721 4.713-2.191.345-3.426-.65-1.914.51-2.88-.706-2.043-2.121-2.019-1.768-2.568-2.33-3.465-3.36-1.762.805-1.063 1.792-.776-1.087-2.592-3.452-.023-1.259-2.717-1.638-2.376 1.505-.736 2.236.015 2.725-.349 2.39-1.615 1.352 1.138 2.563.552-.443 1.739 1.335 1.222z"
  }, {
    id: "VUT",
    d: "M945.865 509.898l-.925.382-.939-1.272.104-.777 1.76 1.667zm-2.066-4.435l.455 2.329-.754-.363-.584.157-.401-.799-.059-2.21 1.343.886z"
  }, {
    id: "YEM",
    d: "M624.161 416.335l-2.027.781-.543 1.288-.067.987-2.791 1.22-4.48 1.346-2.511 2.029-1.234.158-.841-.17-1.639 1.191-1.787.551-2.354.149-.708.163-.613.755-.735.209-.434.727-1.388-.063-.896.387-1.94-.145-.73-1.67.08-1.566-.458-.847-.548-2.128-.806-1.186.561-.14-.288-1.321.34-.559-.124-1.265 1.231-.927-.287-1.228.742-1.435 1.152.76.76-.264 3.236-.067.514.292 2.71.292 1.075-.146.701.972 1.309-.486 2.009-3.071 2.617-1.321 8.085-1.129 2.192 4.841z"
  }, {
    id: "ZAF",
    d: "M563.633 548.709l-.548.462-1.188 1.631-.782 1.658-1.59 2.327-3.169 3.382-1.979 1.984-2.117 1.514-2.931 1.297-1.429.174-.362.933-1.704-.497-1.388.64-3.039-.648-1.699.41-1.161-.176-2.892 1.33-2.394.535-1.732 1.282-1.275.082-1.187-1.209-.947-.062-1.208-1.507-.133.467-.373-.905.016-1.964-.911-2.229.905-.603-.073-2.527-1.836-3.053-1.409-2.737-.004-.009-2.013-4.153 1.343-1.567 1.107.867.473 1.358 1.258.232 1.763.603 1.506-.233 2.502-1.626.003-11.524.757.461 1.662 2.933-.258 1.893.625 1.096 2.008-.319 1.402-1.391 1.328-.935.687-1.482 1.368-.716 1.182.375 1.339.865 2.282.153 1.793-.72.284-.962.493-1.471 1.526-.246.843-1.15.934-2.032 2.517-2.265 3.967-2.222 1.141.033 1.357.51.945-.361 1.49.301 1.343 4.261.729 2.168-.5 3.428.239 1.111-1.415-.567-.811.221-.265.902-.766 1.167.026 1.078 1.673 1.697 1.641-.338.571-1.39 2.126.026-.701 2.281-.331 2.622-.726 1.433-1.908 1.613zm-7.129-.963l-1.224-.98-1.311.649-1.519 1.248-1.495 2.031 2.103 2.484 1.003-.322.516-1.033 1.563-.504.477-1.05.86-1.559-.973-.964z"
  }, {
    id: "ZMB",
    d: "M567.105 489.207l1.324 1.259.713 2.402-.478.768-.563 2.302.538 2.361-.882.993-.851 2.659 1.474.744-8.508 2.37.266 2.055-2.124.396-1.597 1.154-.341 1.006-1.003.228-2.439 2.395-1.552 1.893-.947.068-.911-.338-3.134-.32-.504-.219-.021-.242-1.107-.659-1.817-.168-2.296.664-1.83-1.823-1.892-2.377.129-9.158 5.839.036-.239-.986.418-1.068-.493-1.336.319-1.379-.297-.881.968.071.16.883 1.314-.069 1.78.262.937 1.291 2.246.397 1.714-.898.629 1.492 2.149.398 1.033 1.216 1.151 1.573 2.146.024-.234-3.08-.77.518-1.96-1.108-.757-.507.347-2.851.498-3.351-.628-1.246.799-1.799.752-.337 3.766-.475 1.104.286 1.172.717 1.117.472 1.782.474z"
  }, {
    id: "ZWE",
    d: "M562.709 526.998l-1.49-.301-.945.362-1.357-.511-1.141-.032-1.787-1.358-2.168-.46-.825-1.895-.007-1.051-1.201-.32-3.173-3.255-.882-1.706-.564-.525-1.079-2.344 3.134.32.911.338.947-.068 1.552-1.893 2.439-2.395 1.003-.228.341-1.006 1.597-1.154 2.124-.396.181 1.08 2.339-.058 1.299.612.605.718 1.334.211 1.457.934.006 3.695-.546 2.035-.121 2.203.451.876-.317 1.746-.424.271-.739 2.15z"
  }];
  var MAPPER = {
    ARE: "United Arab Emirates",
    AFG: "Afghanistan",
    ALB: "Albania",
    ARM: "Armenia",
    AGO: "Angola",
    ARG: "Argentina",
    AUT: "Austria",
    AUS: "Australia",
    AZE: "Azerbaijan",
    BIH: "Bosnia and Herzegovina",
    BGD: "Bangladesh",
    BEL: "Belgium",
    BFA: "Burkina Faso",
    BGR: "Bulgaria",
    BDI: "Burundi",
    BEN: "Benin",
    BRN: "Brunei Darussalam",
    BOL: "Bolivia",
    BRA: "Brazil",
    BHS: "Bahamas",
    BTN: "Bhutan",
    BWA: "Botswana",
    BLR: "Belarus",
    BLZ: "Belize",
    CAN: "Canada",
    COD: "Democratic Republic of Congo",
    CAF: "Central African Republic",
    COG: "Republic of Congo",
    CHE: "Switzerland",
    CIV: "Côte d'Ivore",
    CHL: "Chile",
    CMR: "Cameroon",
    CHN: "China",
    COL: "Colombia",
    CRI: "Costa Rica",
    CUB: "Cuba",
    CYP: "Cyprus",
    CZE: "Czech Republic",
    DEU: "Germany",
    DJI: "Djibouti",
    DNK: "Denmark",
    DOM: "Dominican Republic",
    DZA: "Algeria",
    ECU: "Ecuador",
    EST: "Estonia",
    EGY: "Egypt",
    ESH: "Western Sahara",
    ERI: "Eritrea",
    ESP: "Spain",
    ETH: "Ethiopia",
    FIN: "Finland",
    FJI: "Fiji",
    FLK: "Falkland Islands",
    FRA: "France",
    GAB: "Gabon",
    GBR: "United Kingdom",
    GEO: "Georgia",
    GUF: "French Guinea",
    GHA: "Ghana",
    GRL: "Greenland",
    GM: " Gambia",
    GIN: "Guinea",
    GNQ: "Equatorial Guinea",
    GRC: "Greece",
    GTM: "Guatemala",
    GNB: "Guinea-Bissau",
    GUY: "Guyana",
    HND: "Honduras",
    HRV: "Croatia",
    HTI: "Haiti",
    HUN: "Hungary",
    IDN: "Indonesia",
    IRL: "Ireland",
    ISR: "Israel",
    IND: "India",
    IRQ: "Iraq",
    IRN: "Iran",
    ISL: "Iceland",
    ITA: "Italy",
    JAM: "Jamaica",
    JOR: "Jordan",
    JPN: "Japan",
    KEN: "Kenya",
    KGZ: "Kyrgyzstan",
    KHM: "Cambodia",
    PRK: "Democratic People's Republic of Korea",
    KOR: "Republic of Korea",
    YUG: "Federal Republic of Yugoslavia",
    KWT: "Kuwait",
    KAZ: "Kazakhstan",
    LAO: "Laos",
    LBN: "Lebanon",
    LKA: "Sri Lanka",
    LBR: "Liberia",
    LSO: "Lesotho",
    LTU: "Lithuania",
    LUX: "Luxembourg",
    LVA: "Latvia",
    LBY: "Libya",
    MAR: "Morocco",
    MDA: "Republic of Moldova",
    MNE: "Montenegro",
    MDG: "Madagascar",
    FYR: "The Former Yugoslav Republic of Macedonia",
    MLI: "Mali",
    MMR: "Myanmar",
    MNG: "Mongolia",
    MRT: "Mauritania",
    MWI: "Malawi",
    MEX: "Mexico",
    MYS: "Malaysia",
    MOZ: "Mozambique",
    NAM: "Namibia",
    NCL: "New Caledonia",
    NER: "Niger",
    NGA: "Nigeria",
    NIC: "Nicaragua",
    NLD: "Netherlands",
    NOR: "Norway",
    NPL: "Nepal",
    NZL: "New Zealand",
    OMN: "Oman",
    PAN: "Panama",
    PER: "Peru",
    PNG: "Papua New Guinea",
    PHL: "Philippines",
    PAK: "Pakistan",
    POL: "Poland",
    PRI: "Puerto Rico",
    PSE: "Palestinian Territories",
    PRT: "Portugal",
    PRY: "Paraguay",
    QAT: "Qatar",
    ROU: "Romania",
    SRB: "Serbia",
    RUS: "Russia",
    RWA: "Rwanda",
    SAU: "Saudi Arabia",
    SLB: "Solomon Islands",
    SDN: "Sudan",
    SWE: "Sweden",
    SVN: "Slovenia",
    SJM: "Svalbard and Jan Mayen",
    SVK: "Slovakia",
    SLE: "Sierra Leone",
    SEN: "Senegal",
    SOM: "Somalia",
    SUR: "Suriname",
    SSD: "South Sudan",
    SLV: "El Salvador",
    SYR: "Syria",
    SWZ: "Swaziland",
    TCD: "Chad",
    ATF: "French Southern Territories",
    TGO: "Togo",
    THA: "Thailand",
    TJK: "Tajikistan",
    TLS: "Timor-Leste",
    TKM: "Turkmenistan",
    TUN: "Tunisia",
    TUR: "Turkey",
    TTO: "Trinidad and Tobago",
    TWN: "Taiwan",
    TZA: "Tanzania",
    UKR: "Ukraine",
    UGA: "Uganda",
    USA: "United States",
    URY: "Uruguay",
    UZB: "Uzbekistan",
    VEN: "Venezuela",
    VNM: "Vietnam",
    VUT: "Vanuatu",
    YEM: "Yemen",
    ZAF: "South Africa",
    ZMB: "Zambia",
    ZWE: "Zimbabwe"
  };
  var COUNTRY_COLORS = {
    USA: "#6969B3",
    AUS: "#7FB7BE",
    NZL: "#7FB7BE",
    KOR: "#7FB7BE",
    JPN: "#7FB7BE",
    PHL: "#7FB7BE",
    ALB: "#7FB7BE",
    BEL: "#7FB7BE",
    BGR: "#7FB7BE",
    CAN: "#7FB7BE",
    HRV: "#7FB7BE",
    CZE: "#7FB7BE",
    DNK: "#7FB7BE",
    EST: "#7FB7BE",
    FRA: "#7FB7BE",
    DEU: "#7FB7BE",
    GRC: "#7FB7BE",
    HUN: "#7FB7BE",
    ISL: "#7FB7BE",
    ITA: "#7FB7BE",
    LVA: "#7FB7BE",
    LTU: "#7FB7BE",
    LUX: "#7FB7BE",
    NLD: "#7FB7BE",
    NOR: "#7FB7BE",
    POL: "#7FB7BE",
    PRT: "#7FB7BE",
    ROU: "#7FB7BE",
    SVK: "#7FB7BE",
    ESP: "#7FB7BE",
    TUR: "#7FB7BE",
    GBR: "#7FB7BE",
    RUS: "#DD614A",
    CHN: "#DD614A",
    PRK: "#DD614A",
    VEN: "#DD614A",
    IRN: "#DD614A",
    SYR: "#DD614A",
    CUB: "#DD614A",
    LBN: "#DD614A",
    YEM: "#DD614A",
    BOL: "#DD614A",
    NIC: "#DD614A",
    default: "#CECAAE",
    border: "#F0F7EE",
    active: "#ffc40b",
    disabled: "#5a5a5a"
  };

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n  ", "\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: ", ";\n  left: ", ";\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  ", "\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n  ", "\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n  ", "\n  position:relative;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var props$1 = {
    transform: {
      type: String,
      default: "none"
    },
    height: {
      type: String,
      default: "400px"
    },
    textFlavor: {
      type: String,
      default: "Dark"
    },
    width: {
      type: String,
      default: "100%"
    },
    mapMarginBottom: {
      type: String,
      default: "25px"
    },
    textBottom: {
      type: String,
      default: "2px"
    },
    textLeft: {
      type: String,
      default: "5px"
    },
    border: {
      type: String,
      default: "1px solid black"
    },
    backgroundColor: {
      type: String,
      default: "#3a3a3a"
    },
    fill: {
      type: String,
      default: "white"
    },
    stroke: {
      type: String,
      default: "white"
    }
  };
  var ComponentContainer = styled("div", props$1)(_templateObject$1(), function (props) {
    return "\n    height: ".concat(props.height, ";\n    width: ").concat(props.width, ";\n    margin-bottom: ").concat(props.mapMarginBottom, ";\n  ");
  });
  var MapPath = styled("path", props$1)(_templateObject2$1(), function (props) {
    return "\n        fill: ".concat(props.fill, ";\n        stroke: ").concat(props.stroke, ";\n    ");
  });
  var MapSvg = styled("svg", props$1)(_templateObject3$1(), function (props) {
    return "\n    background-color: ".concat(props.backgroundColor, ";\n    border: ").concat(props.border, "\n  ");
  });
  var MapTextContainer = styled("div", props$1)(_templateObject4(), function (props) {
    return props.textBottom;
  }, function (props) {
    return props.textLeft;
  });
  var MapContainer = styled("div", props$1)(_templateObject5(), function (props) {
    return "\n        height: ".concat(props.height, ";\n        width: ").concat(props.width, ";\n        margin-bottom: ").concat(props.mapMarginBottom, ";\n    ");
  });
  var MapFilter = {
    components: {
      MapSvg: MapSvg,
      ComponentContainer: ComponentContainer,
      SectionTitle: SectionTitle,
      CategoryTitle: CategoryTitle,
      MapTextContainer: MapTextContainer,
      MapContainer: MapContainer,
      MapPath: MapPath
    },
    data: function data() {
      return {
        countries: COUNTRIES,
        defaultColors: COUNTRY_COLORS,
        mapper: MAPPER,
        selectedCountries: [],
        hoveredCountry: {
          id: ""
        },
        viewBox: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        svgPZ: null
      };
    },
    props: {
      height: {
        type: String,
        default: "400px"
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      colors: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      enabledCountries: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      disabledCountries: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      width: {
        type: String,
        default: "100%"
      },
      mapMarginBottom: {
        type: String,
        default: "25px"
      },
      textBottom: {
        type: String,
        default: "2px"
      },
      textFlavor: {
        type: String,
        default: "Dark"
      },
      textLeft: {
        type: String,
        default: "5px"
      },
      border: {
        type: String,
        default: "1px solid black"
      },
      backgroundColor: {
        type: String,
        default: "#3a3a3a"
      },
      mapLabel: {
        type: String,
        default: "Map Label"
      },
      mapId: {
        type: String,
        required: true
      }
    },
    watch: {
      value: function value(newVal, oldVal) {
        this.selectedCountries = newVal;
        this.$forceUpdate();
      }
    },
    mounted: function mounted() {
      var _this = this;

      var self = this;
      this.selectedCountries = this.value;
      self.$nextTick(function () {
        self.$forceUpdate();
        self.svgPZ = svgPanZoom(_this.$refs.svg.$el, {
          dblClickZoomEnabled: false,
          zoomScaleSensitivity: 0.5,
          minZoom: 1,
          maxzoom: 10,
          beforePan: self.beforePan
        });
      });
    },
    methods: {
      testDisabled: function testDisabled(country) {
        if (this.enabledCountries.length != 0) {
          return this.enabledCountries.indexOf(country) == -1;
        }

        return this.disabledCountries.indexOf(country) != -1;
      },
      preventMenu: function preventMenu(event) {
        event.preventDefault();
      },

      /**
       * Handles panning in the map to avoid having the SVG pan out of view.
       * Pulled from: https://stackoverflow.com/questions/50837341/svg-gets-a-different-size-after-appling-svgpanzoom
       * @param {Object} oldPan
       * @param {Object} newPan
       * @listens on-pan SvgPanZoom
       * @returns {Object}
       */
      beforePan: function beforePan(oldPan, newPan) {
        var gutterWidth = this.$refs.svgContent.getBBox().width / 2,
            gutterHeight = this.$refs.svgContent.getBBox().height / 2,
            // Computed variables
        sizes = this.svgPZ.getSizes(),
            leftLimit = -((sizes.viewBox.x + this.$refs.svgContent.getBBox().width) * sizes.realZoom) + gutterWidth,
            rightLimit = this.$refs.svg.$el.getBoundingClientRect().width - gutterWidth - sizes.viewBox.x * sizes.realZoom,
            topLimit = -((sizes.viewBox.y + this.$refs.svgContent.getBBox().height) * sizes.realZoom) + gutterHeight,
            bottomLimit = this.$refs.svg.$el.getBoundingClientRect().height - gutterHeight - sizes.viewBox.y * sizes.realZoom;
        var customPan = {};
        customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
        customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));
        return customPan;
      },
      selectColor: function selectColor(color) {
        var c = this.colors[color];

        if (typeof c == "undefined") {
          c = this.defaultColors[color];
        }

        if (typeof c == "undefined") {
          c = this.defaultColors.default;
        }

        return c;
      },
      calculateColor: function calculateColor(id) {
        var color = this.selectColor(id);

        if (this.testDisabled(id)) {
          color = this.selectColor("disabled");
        } else {
          if (this.selectedCountries.indexOf(id) != -1) {
            color = this.selectColor("active");
          }

          if (this.hoveredCountry.id == id) {
            color = this.LightenDarkenColor(color, 30);
          }
        }

        return color;
      },
      calculateStroke: function calculateStroke(id) {
        var border = this.colors.border;

        if (typeof border == "undefined") {
          border = this.defaultColors.border;
        }

        return border;
      },
      handleCountryClick: function handleCountryClick(id) {
        if (this.testDisabled(id) || this.readOnly) {
          return;
        }

        if (this.selectedCountries.indexOf(id) == -1) {
          this.selectedCountries.push(id);
          this.$emit("input", this.selectedCountries);
          this.$emit("change", this.selectedCountries);
        } else {
          this.selectedCountries.splice(this.selectedCountries.indexOf(id), 1);
          this.$emit("input", this.selectedCountries);
          this.$emit("change", this.selectedCountries);
        }

        this.$forceUpdate();
      },
      hoverCountry: function hoverCountry(country) {
        this.hoveredCountry = country;
      },

      /**
       * Darkens or Lightens a color by the amount passed to it. Positive amt lightens.
       * Pulled from: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
       * @param {Color Hex} col
       * @param {Integer} amt
       */
      LightenDarkenColor: function LightenDarkenColor(col, amt) {
        var usePound = false;

        if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
        }

        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;else if (r < 0) r = 0;
        var b = (num >> 8 & 0x00ff) + amt;
        if (b > 255) b = 255;else if (b < 0) b = 0;
        var g = (num & 0x0000ff) + amt;
        if (g > 255) g = 255;else if (g < 0) g = 0;
        return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
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
  const __vue_script__$1 = MapFilter;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "component-container",
      {
        attrs: {
          width: _vm.width,
          height: _vm.height,
          "map-margin-bottom": _vm.mapMarginBottom
        }
      },
      [
        _c(
          "section-title",
          { staticClass: "map-title", attrs: { flavor: _vm.textFlavor } },
          [_vm._v(_vm._s(_vm.mapLabel))]
        ),
        _vm._v(" "),
        _c(
          "map-container",
          [
            _c(
              "map-text-container",
              {
                attrs: {
                  "text-bottom": _vm.textBottom,
                  "text-left": _vm.textLeft
                }
              },
              [
                _c(
                  "category-title",
                  { staticClass: "map-text", attrs: { flavor: _vm.textFlavor } },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.mapper[_vm.hoveredCountry.id]) +
                        "\n        "
                    ),
                    _vm.testDisabled(_vm.hoveredCountry.id)
                      ? _c("span", [_vm._v("(Disabled)")])
                      : _vm._e()
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "map-svg",
              {
                ref: "svg",
                attrs: {
                  id: _vm.mapId,
                  border: _vm.border,
                  "background-color": _vm.backgroundColor
                },
                on: { contextmenu: _vm.preventMenu }
              },
              [
                _c(
                  "g",
                  { ref: "svgContent" },
                  _vm._l(_vm.countries, function(country) {
                    return _c("map-path", {
                      key: country.id,
                      attrs: {
                        fill: _vm.calculateColor(country.id),
                        stroke: _vm.calculateStroke(country.id),
                        id: _vm.mapId + "-" + country.id,
                        title: _vm.mapper[country.id],
                        d: country.d
                      },
                      on: {
                        click: function($event) {
                          return _vm.handleCountryClick(country.id, $event)
                        },
                        mouseover: function($event) {
                          return _vm.hoverCountry(country)
                        }
                      }
                    })
                  }),
                  1
                )
              ]
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
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-4adc860f_0", { source: "\n.map-title {\r\n  padding: 2px 5px;\r\n  position: absolute;\n}\n.map-text {\r\n  margin-bottom: 0px;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\pedro\\Documents\\Personal Projects\\GitHub\\storybook\\src\\components\\MapFilter\\src\\MapFilter.vue"],"names":[],"mappings":";AA2XA;EACA,gBAAA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;AACA","file":"MapFilter.vue","sourcesContent":["<template>\r\n  <component-container\r\n    :width=\"width\"\r\n    :height=\"height\"\r\n    :map-margin-bottom=\"mapMarginBottom\"\r\n  >\r\n    <section-title :flavor=\"textFlavor\" class=\"map-title\">{{\r\n      mapLabel\r\n    }}</section-title>\r\n    <map-container>\r\n      <map-text-container :text-bottom=\"textBottom\" :text-left=\"textLeft\">\r\n        <category-title class=\"map-text\" :flavor=\"textFlavor\">\r\n          {{ mapper[hoveredCountry.id] }}\r\n          <span v-if=\"testDisabled(hoveredCountry.id)\">(Disabled)</span>\r\n        </category-title>\r\n      </map-text-container>\r\n      <map-svg\r\n        :id=\"mapId\"\r\n        :border=\"border\"\r\n        :background-color=\"backgroundColor\"\r\n        ref=\"svg\"\r\n        @contextmenu=\"preventMenu\"\r\n      >\r\n        <g ref=\"svgContent\">\r\n          <map-path\r\n            v-for=\"country in countries\"\r\n            :key=\"country.id\"\r\n            :fill=\"calculateColor(country.id)\"\r\n            :stroke=\"calculateStroke(country.id)\"\r\n            :id=\"`${mapId}-${country.id}`\"\r\n            :title=\"mapper[country.id]\"\r\n            @click=\"handleCountryClick(country.id, $event)\"\r\n            @mouseover=\"hoverCountry(country)\"\r\n            :d=\"country.d\"\r\n          ></map-path>\r\n        </g>\r\n      </map-svg>\r\n    </map-container>\r\n  </component-container>\r\n</template>\r\n\r\n<script>\r\nimport \"./svg-pan-zoom.js\";\r\nimport { SectionTitle, CategoryTitle } from \"@IntusFacultas/typography\";\r\nimport styled from \"vue-styled-components\";\r\nimport { COUNTRIES, MAPPER, COUNTRY_COLORS } from \"./data.js\";\r\nconst props = {\r\n  transform: {\r\n    type: String,\r\n    default: \"none\",\r\n  },\r\n  height: {\r\n    type: String,\r\n    default: \"400px\",\r\n  },\r\n  textFlavor: {\r\n    type: String,\r\n    default: \"Dark\",\r\n  },\r\n  width: {\r\n    type: String,\r\n    default: \"100%\",\r\n  },\r\n  mapMarginBottom: {\r\n    type: String,\r\n    default: \"25px\",\r\n  },\r\n  textBottom: {\r\n    type: String,\r\n    default: \"2px\",\r\n  },\r\n  textLeft: {\r\n    type: String,\r\n    default: \"5px\",\r\n  },\r\n  border: {\r\n    type: String,\r\n    default: \"1px solid black\",\r\n  },\r\n  backgroundColor: {\r\n    type: String,\r\n    default: \"#3a3a3a\",\r\n  },\r\n  fill: {\r\n    type: String,\r\n    default: \"white\",\r\n  },\r\n  stroke: {\r\n    type: String,\r\n    default: \"white\",\r\n  },\r\n};\r\nconst ComponentContainer = styled(\"div\", props)`\r\n  ${(props) => `\r\n    height: ${props.height};\r\n    width: ${props.width};\r\n    margin-bottom: ${props.mapMarginBottom};\r\n  `}\r\n  position:relative;\r\n`;\r\nconst MapPath = styled(\"path\", props)`\r\n  ${(props) => `\r\n        fill: ${props.fill};\r\n        stroke: ${props.stroke};\r\n    `}\r\n`;\r\nconst MapSvg = styled(\"svg\", props)`\r\n  width: 100%;\r\n  height: 100%;\r\n  ${(props) => `\r\n    background-color: ${props.backgroundColor};\r\n    border: ${props.border}\r\n  `}\r\n`;\r\nconst MapTextContainer = styled(\"div\", props)`\r\n  position: absolute;\r\n  bottom: ${(props) => props.textBottom};\r\n  left: ${(props) => props.textLeft};\r\n`;\r\nconst MapContainer = styled(\"div\", props)`\r\n  ${(props) => `\r\n        height: ${props.height};\r\n        width: ${props.width};\r\n        margin-bottom: ${props.mapMarginBottom};\r\n    `}\r\n`;\r\nexport const MapFilter = {\r\n  components: {\r\n    MapSvg,\r\n    ComponentContainer,\r\n    SectionTitle,\r\n    CategoryTitle,\r\n    MapTextContainer,\r\n    MapContainer,\r\n    MapPath,\r\n  },\r\n  data() {\r\n    return {\r\n      countries: COUNTRIES,\r\n      defaultColors: COUNTRY_COLORS,\r\n      mapper: MAPPER,\r\n      selectedCountries: [],\r\n      hoveredCountry: { id: \"\" },\r\n      viewBox: {\r\n        x: 0,\r\n        y: 0,\r\n        width: 0,\r\n        height: 0,\r\n      },\r\n      svgPZ: null,\r\n    };\r\n  },\r\n  props: {\r\n    height: {\r\n      type: String,\r\n      default: \"400px\",\r\n    },\r\n    readOnly: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    colors: {\r\n      type: Object,\r\n      default() {\r\n        return {};\r\n      },\r\n    },\r\n    value: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    enabledCountries: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    disabledCountries: {\r\n      type: Array,\r\n      default() {\r\n        return [];\r\n      },\r\n    },\r\n    width: {\r\n      type: String,\r\n      default: \"100%\",\r\n    },\r\n    mapMarginBottom: {\r\n      type: String,\r\n      default: \"25px\",\r\n    },\r\n    textBottom: {\r\n      type: String,\r\n      default: \"2px\",\r\n    },\r\n    textFlavor: {\r\n      type: String,\r\n      default: \"Dark\",\r\n    },\r\n    textLeft: {\r\n      type: String,\r\n      default: \"5px\",\r\n    },\r\n    border: {\r\n      type: String,\r\n      default: \"1px solid black\",\r\n    },\r\n    backgroundColor: {\r\n      type: String,\r\n      default: \"#3a3a3a\",\r\n    },\r\n    mapLabel: {\r\n      type: String,\r\n      default: \"Map Label\",\r\n    },\r\n    mapId: {\r\n      type: String,\r\n      required: true,\r\n    },\r\n  },\r\n  watch: {\r\n    value(newVal, oldVal) {\r\n      this.selectedCountries = newVal;\r\n      this.$forceUpdate();\r\n    },\r\n  },\r\n  mounted() {\r\n    var self = this;\r\n    this.selectedCountries = this.value;\r\n    self.$nextTick(() => {\r\n      self.$forceUpdate();\r\n      self.svgPZ = svgPanZoom(this.$refs.svg.$el, {\r\n        dblClickZoomEnabled: false,\r\n        zoomScaleSensitivity: 0.5,\r\n        minZoom: 1,\r\n        maxzoom: 10,\r\n        beforePan: self.beforePan,\r\n      });\r\n    });\r\n  },\r\n  methods: {\r\n    testDisabled(country) {\r\n      if (this.enabledCountries.length != 0) {\r\n        return this.enabledCountries.indexOf(country) == -1;\r\n      }\r\n      return this.disabledCountries.indexOf(country) != -1;\r\n    },\r\n    preventMenu(event) {\r\n      event.preventDefault();\r\n    },\r\n    /**\r\n     * Handles panning in the map to avoid having the SVG pan out of view.\r\n     * Pulled from: https://stackoverflow.com/questions/50837341/svg-gets-a-different-size-after-appling-svgpanzoom\r\n     * @param {Object} oldPan\r\n     * @param {Object} newPan\r\n     * @listens on-pan SvgPanZoom\r\n     * @returns {Object}\r\n     */\r\n    beforePan: function(oldPan, newPan) {\r\n      let stopHorizontal = false,\r\n        stopVertical = false,\r\n        gutterWidth = this.$refs.svgContent.getBBox().width / 2,\r\n        gutterHeight = this.$refs.svgContent.getBBox().height / 2,\r\n        // Computed variables\r\n        sizes = this.svgPZ.getSizes(),\r\n        leftLimit =\r\n          -(\r\n            (sizes.viewBox.x + this.$refs.svgContent.getBBox().width) *\r\n            sizes.realZoom\r\n          ) + gutterWidth,\r\n        rightLimit =\r\n          this.$refs.svg.$el.getBoundingClientRect().width -\r\n          gutterWidth -\r\n          sizes.viewBox.x * sizes.realZoom,\r\n        topLimit =\r\n          -(\r\n            (sizes.viewBox.y + this.$refs.svgContent.getBBox().height) *\r\n            sizes.realZoom\r\n          ) + gutterHeight,\r\n        bottomLimit =\r\n          this.$refs.svg.$el.getBoundingClientRect().height -\r\n          gutterHeight -\r\n          sizes.viewBox.y * sizes.realZoom;\r\n      let customPan = {};\r\n      customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));\r\n      customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));\r\n\r\n      return customPan;\r\n    },\r\n    selectColor(color) {\r\n      let c = this.colors[color];\r\n      if (typeof c == \"undefined\") {\r\n        c = this.defaultColors[color];\r\n      }\r\n      if (typeof c == \"undefined\") {\r\n        c = this.defaultColors.default;\r\n      }\r\n      return c;\r\n    },\r\n    calculateColor(id) {\r\n      let color = this.selectColor(id);\r\n      if (this.testDisabled(id)) {\r\n        color = this.selectColor(\"disabled\");\r\n      } else {\r\n        if (this.selectedCountries.indexOf(id) != -1) {\r\n          color = this.selectColor(\"active\");\r\n        }\r\n        if (this.hoveredCountry.id == id) {\r\n          color = this.LightenDarkenColor(color, 30);\r\n        }\r\n      }\r\n      return color;\r\n    },\r\n    calculateStroke(id) {\r\n      let border = this.colors.border;\r\n      if (typeof border == \"undefined\") {\r\n        border = this.defaultColors.border;\r\n      }\r\n      return border;\r\n    },\r\n    handleCountryClick(id) {\r\n      if (this.testDisabled(id) || this.readOnly) {\r\n        return;\r\n      }\r\n      if (this.selectedCountries.indexOf(id) == -1) {\r\n        this.selectedCountries.push(id);\r\n        this.$emit(\"input\", this.selectedCountries);\r\n        this.$emit(\"change\", this.selectedCountries);\r\n      } else {\r\n        this.selectedCountries.splice(this.selectedCountries.indexOf(id), 1);\r\n        this.$emit(\"input\", this.selectedCountries);\r\n        this.$emit(\"change\", this.selectedCountries);\r\n      }\r\n      this.$forceUpdate();\r\n    },\r\n    hoverCountry(country) {\r\n      this.hoveredCountry = country;\r\n    },\r\n    /**\r\n     * Darkens or Lightens a color by the amount passed to it. Positive amt lightens.\r\n     * Pulled from: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors\r\n     * @param {Color Hex} col\r\n     * @param {Integer} amt\r\n     */\r\n    LightenDarkenColor: function(col, amt) {\r\n      var usePound = false;\r\n\r\n      if (col[0] == \"#\") {\r\n        col = col.slice(1);\r\n        usePound = true;\r\n      }\r\n\r\n      var num = parseInt(col, 16);\r\n\r\n      var r = (num >> 16) + amt;\r\n\r\n      if (r > 255) r = 255;\r\n      else if (r < 0) r = 0;\r\n\r\n      var b = ((num >> 8) & 0x00ff) + amt;\r\n\r\n      if (b > 255) b = 255;\r\n      else if (b < 0) b = 0;\r\n\r\n      var g = (num & 0x0000ff) + amt;\r\n\r\n      if (g > 255) g = 255;\r\n      else if (g < 0) g = 0;\r\n\r\n      return (usePound ? \"#\" : \"\") + (g | (b << 8) | (r << 16)).toString(16);\r\n    },\r\n  },\r\n};\r\nexport default MapFilter;\r\n</script>\r\n\r\n<style>\r\n.map-title {\r\n  padding: 2px 5px;\r\n  position: absolute;\r\n}\r\n.map-text {\r\n  margin-bottom: 0px;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = normalizeComponent$1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      createInjector$1,
      undefined,
      undefined
    );

  // Import vue component

  var install = function installMapFilter(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("MapFilter", __vue_component__$1);
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


  __vue_component__$1.install = install; // Export component by default
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.MapFilter = __vue_component__$1;
  exports.default = __vue_component__$1;

  return exports;

}({}));
//# sourceMappingURL=MapFilter.iife.js.map
