/*
DragResize v1.0@74147644ad1f26597f1c8d1c42a065f57d9b2e8b
(c) 2005-2013 Angus Turnbull, TwinHelix Designs http://www.twinhelix.com

Licensed under the GNU LGPL, version 3 or later:
https://www.gnu.org/copyleft/lesser.html
This is distributed WITHOUT ANY WARRANTY; without even the implied
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

MODIFIED BY Pedro Del Moral Lopez TO RESOLVE ISSUES WITH STRICT MODE
*/
if (typeof addEvent != "function") {
  var addEvent = function(o, t, f, l) {
    var d = "addEventListener",
      n = "on" + t,
      rO = o,
      rT = t,
      rF = f,
      rL = l;
    if (o[d] && !l) return o[d](t, f, false);
    if (!o._evts) o._evts = {};
    if (!o._evts[t]) {
      o._evts[t] = o[n] ? { b: o[n] } : {};
      o[n] = new Function(
        "e",
        'var r=true,o=this,a=o._evts["' +
          t +
          '"],i;for(i in a){o._f=a[i];r=o._f(e||window.event)!=false&&r;o._f=null}return r'
      );
      if (t != "unload")
        addEvent(window, "unload", function() {
          removeEvent(rO, rT, rF, rL);
        });
    }
    if (!f._i) f._i = addEvent._i++;
    o._evts[t][f._i] = f;
  };
  addEvent._i = 1;
  var removeEvent = function(o, t, f, l) {
    var d = "removeEventListener";
    if (o[d] && !l) return o[d](t, f, false);
    if (o._evts && o._evts[t] && f._i) delete o._evts[t][f._i];
  };
}
function cancelEvent(e, c) {
  e.returnValue = false;
  if (e.preventDefault) e.preventDefault();
  if (c) {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
}
function DragResize(myName, config) {
  var props = {
    myName: myName,
    enabled: true,
    handles: ["tl", "tm", "tr", "ml", "mr", "bl", "bm", "br"],
    isElement: null,
    isHandle: null,
    element: null,
    handle: null,
    minWidth: 10,
    minHeight: 10,
    minLeft: 0,
    maxLeft: 9999,
    minTop: 0,
    maxTop: 9999,
    gridX: 1,
    gridY: 1,
    zIndex: 1,
    mouseX: 0,
    mouseY: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    mOffX: 0,
    mOffY: 0,
    elmX: 0,
    elmY: 0,
    elmW: 0,
    elmH: 0,
    allowBlur: true,
    ondragfocus: null,
    ondragstart: null,
    ondragmove: null,
    ondragend: null,
    ondragblur: null
  };
  for (var p in props)
    this[p] = typeof config[p] == "undefined" ? props[p] : config[p];
}
DragResize.prototype.apply = function(node) {
  var obj = this;
  addEvent(node, "mousedown", function(e) {
    obj.mouseDown(e);
  });
  addEvent(node, "mousemove", function(e) {
    obj.mouseMove(e);
  });
  addEvent(node, "mouseup", function(e) {
    obj.mouseUp(e);
  });
  addEvent(node, "touchstart", function(e) {
    obj.mouseDown(e);
  });
  addEvent(node, "touchmove", function(e) {
    obj.mouseMove(e);
  });
  addEvent(node, "touchend", function(e) {
    obj.mouseUp(e);
  });
};
DragResize.prototype.select = function(newElement) {
  if (!document.getElementById || !this.enabled) return;
  if (newElement && newElement != this.element && this.enabled) {
    this.element = newElement;
    this.element.style.zIndex = ++this.zIndex;
    if (this.resizeHandleSet) this.resizeHandleSet(this.element, true);
    var eCS =
      this.element.currentStyle || window.getComputedStyle(this.element, null);
    if (eCS.right) {
      this.element.style.left = this.element.offsetLeft + "px";
      this.element.style.right = "";
    }
    if (eCS.bottom) {
      this.element.style.top = this.element.offsetTop + "px";
      this.element.style.bottom = "";
    }
    this.elmX = parseInt(this.element.style.left);
    this.elmY = parseInt(this.element.style.top);
    this.elmW = this.element.clientWidth || this.element.offsetWidth;
    this.elmH = this.element.clientHeight || this.element.offsetHeight;
    if (this.ondragfocus) this.ondragfocus();
  }
};
DragResize.prototype.deselect = function(delHandles) {
  if (!document.getElementById || !this.enabled) return;
  if (delHandles) {
    if (this.ondragblur) this.ondragblur();
    if (this.resizeHandleSet) this.resizeHandleSet(this.element, false);
    this.element = null;
  }
  this.handle = null;
  this.mOffX = 0;
  this.mOffY = 0;
};
DragResize.prototype.mouseDown = function(e) {
  if (!document.getElementById || !this.enabled) return true;
  if (e.touches && e.touches.length) this.mouseMove(e);
  var elm = e.target || e.srcElement,
    newElement = null,
    newHandle = null,
    hRE = new RegExp(this.myName + "-([trmbl]{2})", "");
  while (elm) {
    if (elm.className) {
      if (!newHandle && (hRE.test(elm.className) || this.isHandle(elm)))
        newHandle = elm;
      if (this.isElement(elm)) {
        newElement = elm;
        break;
      }
    }
    elm = elm.parentNode;
  }
  if (this.element && this.element != newElement && this.allowBlur)
    this.deselect(true);
  if (newElement && (!this.element || newElement == this.element)) {
    if (newHandle) cancelEvent(e);
    this.select(newElement, newHandle);
    this.handle = newHandle;
    if (this.handle && this.ondragstart)
      this.ondragstart(hRE.test(this.handle.className));
  }
};
DragResize.prototype.mouseMove = function(e) {
  if (!document.getElementById || !this.enabled) return true;
  var mt = e.touches && e.touches.length ? e.touches[0] : e;
  this.mouseX = mt.pageX || mt.clientX + document.documentElement.scrollLeft;
  this.mouseY = mt.pageY || mt.clientY + document.documentElement.scrollTop;
  var diffX = this.mouseX - this.lastMouseX + this.mOffX;
  var diffY = this.mouseY - this.lastMouseY + this.mOffY;
  this.mOffX = this.mOffY = 0;
  this.lastMouseX = this.mouseX;
  this.lastMouseY = this.mouseY;
  if (!this.handle) return true;
  var isResize = false;
  if (this.resizeHandleDrag && this.resizeHandleDrag(diffX, diffY)) {
    isResize = true;
  } else {
    var dX = diffX,
      dY = diffY;
    if (this.elmX + dX < this.minLeft)
      this.mOffX = dX - (diffX = this.minLeft - this.elmX);
    else if (this.elmX + this.elmW + dX > this.maxLeft)
      this.mOffX = dX - (diffX = this.maxLeft - this.elmX - this.elmW);
    if (this.elmY + dY < this.minTop)
      this.mOffY = dY - (diffY = this.minTop - this.elmY);
    else if (this.elmY + this.elmH + dY > this.maxTop)
      this.mOffY = dY - (diffY = this.maxTop - this.elmY - this.elmH);
    this.elmX += diffX;
    this.elmY += diffY;
  }
  this.element.style.left =
    Math.round(this.elmX / this.gridX) * this.gridX + "px";
  this.element.style.top =
    Math.round(this.elmY / this.gridY) * this.gridY + "px";
  if (isResize) {
    this.element.style.width =
      Math.round(this.elmW / this.gridX) * this.gridX + "px";
    this.element.style.height =
      Math.round(this.elmH / this.gridY) * this.gridY + "px";
  }
  if (window.opera && document.documentElement) {
    var oDF = document.getElementById("op-drag-fix");
    if (!oDF) {
      var oDF = document.createElement("input");
      oDF.id = "op-drag-fix";
      oDF.style.display = "none";
      document.body.appendChild(oDF);
    }
    oDF.focus();
  }
  if (this.ondragmove) this.ondragmove(isResize);
  cancelEvent(e);
};
DragResize.prototype.mouseUp = function(e) {
  if (!document.getElementById || !this.enabled) return;
  var hRE = new RegExp(this.myName + "-([trmbl]{2})", "");
  if (this.handle && this.ondragend)
    this.ondragend(hRE.test(this.handle.className));
  this.deselect(false);
};
DragResize.prototype.resizeHandleSet = function(elm, show) {
  if (!elm._handle_tr) {
    for (var h = 0; h < this.handles.length; h++) {
      var hDiv = document.createElement("div");
      hDiv.className = this.myName + " " + this.myName + "-" + this.handles[h];
      elm["_handle_" + this.handles[h]] = elm.appendChild(hDiv);
    }
  }
  for (var h = 0; h < this.handles.length; h++) {
    elm["_handle_" + this.handles[h]].style.visibility = show
      ? "inherit"
      : "hidden";
  }
};
DragResize.prototype.resizeHandleDrag = function(diffX, diffY) {
  var hClass =
    this.handle &&
    this.handle.className &&
    this.handle.className.match(new RegExp(this.myName + "-([tmblr]{2})"))
      ? RegExp.$1
      : "";
  var dY = diffY,
    dX = diffX,
    processed = false;
  if (hClass.indexOf("t") >= 0) {
    if (this.elmH - dY < this.minHeight)
      this.mOffY = dY - (diffY = this.elmH - this.minHeight);
    else if (this.elmY + dY < this.minTop)
      this.mOffY = dY - (diffY = this.minTop - this.elmY);
    this.elmY += diffY;
    this.elmH -= diffY;
    processed = true;
  }
  if (hClass.indexOf("b") >= 0) {
    if (this.elmH + dY < this.minHeight)
      this.mOffY = dY - (diffY = this.minHeight - this.elmH);
    else if (this.elmY + this.elmH + dY > this.maxTop)
      this.mOffY = dY - (diffY = this.maxTop - this.elmY - this.elmH);
    this.elmH += diffY;
    processed = true;
  }
  if (hClass.indexOf("l") >= 0) {
    if (this.elmW - dX < this.minWidth)
      this.mOffX = dX - (diffX = this.elmW - this.minWidth);
    else if (this.elmX + dX < this.minLeft)
      this.mOffX = dX - (diffX = this.minLeft - this.elmX);
    this.elmX += diffX;
    this.elmW -= diffX;
    processed = true;
  }
  if (hClass.indexOf("r") >= 0) {
    if (this.elmW + dX < this.minWidth)
      this.mOffX = dX - (diffX = this.minWidth - this.elmW);
    else if (this.elmX + this.elmW + dX > this.maxLeft)
      this.mOffX = dX - (diffX = this.maxLeft - this.elmX - this.elmW);
    this.elmW += diffX;
    processed = true;
  }
  return processed;
};

/*
 * resize-polyfill 1.1.0
 * (c) 2005-2013 Cezary Daniel Nowak
 * https://github.com/CezaryDanielNowak/css-resize-polyfill
 * Licenced under the MIT
 */

var resizeSupported =
  document.createElement("textarea").style.resize !== undefined;
var resizeHandlerPolyfill = function(target, force) {
  if (!target) {
    return resizeSupported ? "native" : "polyfill";
  }

  if (target.length) {
    //this.element list provided
    for (var i = target.length; i--; ) {
      resizeHandlerPolyfill(target[i], force);
    }
  } else {
    if (target.tagName === "TEXTAREA") {
      target = target.parentNode;
    }
    target.className += " resize-polyfill-wrapper";
    if (resizeSupported && !force) {
      return;
    }

    var dragresize = new DragResize("resize-polyfill", {
      handles: ["br"],
      minWidth: 50,
      minHeight: 50,
      allowBlur: false
    });

    dragresize.isElement = function(elm) {
      return elm === target;
    };
    dragresize.isHandle = function(elm) {
      return false;
    };

    dragresize.ondragfocus = function() {};
    dragresize.ondragstart = function(isResize) {};
    dragresize.ondragmove = function(isResize) {};
    dragresize.ondragend = function(isResize) {};
    dragresize.ondragblur = function() {};

    var child = target.children[0];
    if (child && child.tagName === "TEXTAREA") {
      target.style.width = child.offsetWidth + "px";
      target.style.height = child.offsetHeight + "px";
      child.style.resize = "none";
    } else {
      target.style.resize = "none";
    }

    dragresize.apply(document);
    dragresize.select(target); // required to show handler on bottom-right
    target.className += " resize-polyfill-polyfilled";
  }
};

if (typeof window !== "undefined") {
  var css =
      '.resize-polyfill-wrapper {position: relative;top: auto !important;left: auto !important;}\n\
    .resize-polyfill-polyfilled textarea {width: 100%;height: 100%;}\n\
    .resize-polyfill-br {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVR42mNgwAH279//H4QZyFYAAv///5fBqQurCQQVEHQMVjaMAQQc2BQAABXMU79BvB5bAAAAAElFTkSuQmCC") no-repeat center center;border: 2px solid transparent;bottom: 0px;cursor: se-resize;height: 8px;position: absolute;right: 0px;width: 8px;}',
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}
export default resizeHandlerPolyfill;
