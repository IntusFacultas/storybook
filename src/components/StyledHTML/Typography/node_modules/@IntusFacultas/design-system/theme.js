if (typeof Object.assign !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      "use strict";
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
  Normal: { color: "#444" },
  Dark: { color: "#e0e0e0" },
  LightBlue: { color: "#41BEE8" }
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
export default Theme;
export { NIWSTheme, TextTheme, AlertTheme, Theme };
