<template>
  <component-container
    :width="width"
    :height="height"
    :map-margin-bottom="mapMarginBottom"
  >
    <section-title :flavor="textFlavor" class="map-title">{{
      mapLabel
    }}</section-title>
    <map-container>
      <map-text-container :text-bottom="textBottom" :text-left="textLeft">
        <category-title class="map-text" :flavor="textFlavor">
          {{ mapper[hoveredCountry.id] }}
          <span v-if="testDisabled(hoveredCountry.id)">(Disabled)</span>
        </category-title>
      </map-text-container>
      <map-svg
        :id="mapId"
        :border="border"
        :background-color="backgroundColor"
        ref="svg"
        @contextmenu="preventMenu"
      >
        <g ref="svgContent">
          <map-path
            v-for="country in countries"
            :key="country.id"
            :fill="calculateColor(country.id)"
            :stroke="calculateStroke(country.id)"
            :id="`${mapId}-${country.id}`"
            :title="mapper[country.id]"
            @click="handleCountryClick(country.id, $event)"
            @mouseover="hoverCountry(country)"
            :d="country.d"
          ></map-path>
        </g>
      </map-svg>
    </map-container>
  </component-container>
</template>

<script>
import "./svg-pan-zoom.js";
import { SectionTitle, CategoryTitle } from "@IntusFacultas/typography";
import styled from "vue-styled-components";
import { COUNTRIES, MAPPER, COUNTRY_COLORS } from "./data.js";
const props = {
  transform: {
    type: String,
    default: "none",
  },
  height: {
    type: String,
    default: "400px",
  },
  textFlavor: {
    type: String,
    default: "Dark",
  },
  width: {
    type: String,
    default: "100%",
  },
  mapMarginBottom: {
    type: String,
    default: "25px",
  },
  textBottom: {
    type: String,
    default: "2px",
  },
  textLeft: {
    type: String,
    default: "5px",
  },
  border: {
    type: String,
    default: "1px solid black",
  },
  backgroundColor: {
    type: String,
    default: "#3a3a3a",
  },
  fill: {
    type: String,
    default: "white",
  },
  stroke: {
    type: String,
    default: "white",
  },
};
const ComponentContainer = styled("div", props)`
  ${(props) => `
    height: ${props.height};
    width: ${props.width};
    margin-bottom: ${props.mapMarginBottom};
  `}
  position:relative;
`;
const MapPath = styled("path", props)`
  ${(props) => `
        fill: ${props.fill};
        stroke: ${props.stroke};
    `}
`;
const MapSvg = styled("svg", props)`
  width: 100%;
  height: 100%;
  ${(props) => `
    background-color: ${props.backgroundColor};
    border: ${props.border}
  `}
`;
const MapTextContainer = styled("div", props)`
  position: absolute;
  bottom: ${(props) => props.textBottom};
  left: ${(props) => props.textLeft};
`;
const MapContainer = styled("div", props)`
  ${(props) => `
        height: ${props.height};
        width: ${props.width};
        margin-bottom: ${props.mapMarginBottom};
    `}
`;
export const MapFilter = {
  components: {
    MapSvg,
    ComponentContainer,
    SectionTitle,
    CategoryTitle,
    MapTextContainer,
    MapContainer,
    MapPath,
  },
  data() {
    return {
      countries: COUNTRIES,
      defaultColors: COUNTRY_COLORS,
      mapper: MAPPER,
      selectedCountries: [],
      hoveredCountry: { id: "" },
      viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
      svgPZ: null,
    };
  },
  props: {
    height: {
      type: String,
      default: "400px",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    colors: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    enabledCountries: {
      type: Array,
      default() {
        return [];
      },
    },
    disabledCountries: {
      type: Array,
      default() {
        return [];
      },
    },
    width: {
      type: String,
      default: "100%",
    },
    mapMarginBottom: {
      type: String,
      default: "25px",
    },
    textBottom: {
      type: String,
      default: "2px",
    },
    textFlavor: {
      type: String,
      default: "Dark",
    },
    textLeft: {
      type: String,
      default: "5px",
    },
    border: {
      type: String,
      default: "1px solid black",
    },
    backgroundColor: {
      type: String,
      default: "#3a3a3a",
    },
    mapLabel: {
      type: String,
      default: "Map Label",
    },
    mapId: {
      type: String,
      required: true,
    },
  },
  watch: {
    value(newVal, oldVal) {
      this.selectedCountries = newVal;
      this.$forceUpdate();
    },
  },
  mounted() {
    var self = this;
    this.selectedCountries = this.value;
    self.$nextTick(() => {
      self.$forceUpdate();
      self.svgPZ = svgPanZoom(this.$refs.svg.$el, {
        dblClickZoomEnabled: false,
        zoomScaleSensitivity: 0.5,
        minZoom: 1,
        maxzoom: 10,
        beforePan: self.beforePan,
      });
    });
  },
  methods: {
    testDisabled(country) {
      if (this.enabledCountries.length != 0) {
        return this.enabledCountries.indexOf(country) == -1;
      }
      return this.disabledCountries.indexOf(country) != -1;
    },
    preventMenu(event) {
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
    beforePan: function(oldPan, newPan) {
      let stopHorizontal = false,
        stopVertical = false,
        gutterWidth = this.$refs.svgContent.getBBox().width / 2,
        gutterHeight = this.$refs.svgContent.getBBox().height / 2,
        // Computed variables
        sizes = this.svgPZ.getSizes(),
        leftLimit =
          -(
            (sizes.viewBox.x + this.$refs.svgContent.getBBox().width) *
            sizes.realZoom
          ) + gutterWidth,
        rightLimit =
          this.$refs.svg.$el.getBoundingClientRect().width -
          gutterWidth -
          sizes.viewBox.x * sizes.realZoom,
        topLimit =
          -(
            (sizes.viewBox.y + this.$refs.svgContent.getBBox().height) *
            sizes.realZoom
          ) + gutterHeight,
        bottomLimit =
          this.$refs.svg.$el.getBoundingClientRect().height -
          gutterHeight -
          sizes.viewBox.y * sizes.realZoom;
      let customPan = {};
      customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
      customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));

      return customPan;
    },
    selectColor(color) {
      let c = this.colors[color];
      if (typeof c == "undefined") {
        c = this.defaultColors[color];
      }
      if (typeof c == "undefined") {
        c = this.defaultColors.default;
      }
      return c;
    },
    calculateColor(id) {
      let color = this.selectColor(id);
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
    calculateStroke(id) {
      let border = this.colors.border;
      if (typeof border == "undefined") {
        border = this.defaultColors.border;
      }
      return border;
    },
    handleCountryClick(id) {
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
    hoverCountry(country) {
      this.hoveredCountry = country;
    },
    /**
     * Darkens or Lightens a color by the amount passed to it. Positive amt lightens.
     * Pulled from: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
     * @param {Color Hex} col
     * @param {Integer} amt
     */
    LightenDarkenColor: function(col, amt) {
      var usePound = false;

      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }

      var num = parseInt(col, 16);

      var r = (num >> 16) + amt;

      if (r > 255) r = 255;
      else if (r < 0) r = 0;

      var b = ((num >> 8) & 0x00ff) + amt;

      if (b > 255) b = 255;
      else if (b < 0) b = 0;

      var g = (num & 0x0000ff) + amt;

      if (g > 255) g = 255;
      else if (g < 0) g = 0;

      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    },
  },
};
export default MapFilter;
</script>

<style>
.map-title {
  padding: 2px 5px;
  position: absolute;
}
.map-text {
  margin-bottom: 0px;
}
</style>
