import ParametricFilter from "Components/components/Storefront/ParametricFilter/src/ParametricFilter.vue";
import NumericFilter from "Components/components/Storefront/NumericFilter/src/NumericFilter.vue";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { FlexRow, FlexColumn } from "@IntusFacultas/layout";
import markdown from "Components/components/Storefront/ParametricFilter/Usage.md";
import numericmarkdown from "Components/components/Storefront/NumericFilter/Usage.md";

export default {
  title: "Composite Components/Storefront",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      "Parametric Filter": markdown,
      "Numeric Filter": numericmarkdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

const actionsData = {
  onInput: action("@input")
};

export const ConfigurableParametricFilter = () => ({
  components: { FlexRow, FlexColumn, ParametricFilter },
  methods: actionsData,
  props: {
    filter: {
      default: object("Filter Object", {
        display: "Parametric Filter",
        selected_values: [],
        quickSelects: [
          {
            text: "United States - 1",
            value: "USA"
          },
          {
            text: "Russia - 2",
            value: "RUS"
          },
          {
            text: "China - 3",
            value: "CHN"
          }
        ],
        items: [
          {
            text: "United States - 1",
            value: "USA"
          },
          {
            text: "Russia - 2",
            value: "RUS"
          },
          {
            text: "China - 3",
            value: "CHN"
          },
          {
            text: "Canada - 0",
            value: "CAN"
          },
          {
            text: "Mexico - 2",
            value: "MEX"
          },
          {
            text: "Japan- 4",
            value: "JPN"
          },
          {
            text: "North Korea - 0",
            value: "NKA"
          },
          {
            text: "South Korea - 0",
            value: "SKA"
          }
        ]
      })
    },
    flavor: {
      default: text("Flavor", "Primary")
    },
    badgeFlavor: {
      default: text("Badge Flavor", "Secondary")
    },
    activeBadgeFlavor: {
      default: text("Active Badge Flavor", "Light")
    },
    quickSelectFlavor: {
      default: text("Quick Select Flavor", "Secondary")
    }
  },
  template: `
        <flex-row>
            <flex-column :col="4">
                <parametric-filter 
                    :flavor="flavor"
                    :filter="filter"
                    name="parametricFilter"
                    :badge-flavor="badgeFlavor"
                    :active-badge-flavor="activeBadgeFlavor"
                    :quick-select-flavor="quickSelectFlavor"
                    @input="onInput">
                </parametric-filter>
            </flex-column>
            <flex-column :col='8'></flex-column>
        </flex-row>
    `
});

export const RangeNumericFilter = () => ({
  components: { FlexRow, FlexColumn, NumericFilter },
  methods: {
    onInput: action("@input"),
    onChange: action("@change")
  },
  data() {
    return {
      value: {
        lowerValue: 0,
        upperValue: 100
      }
    };
  },
  mounted() {
    this.value.lowerValue = this.filter.min;
    this.value.upperValue = this.filter.max;
  },
  props: {
    filter: {
      default: object("Filter Object", {
        display: "Range Numeric Filter",
        numeric_type: "range",
        max: 100,
        min: 0,
        step: 2,
        value: 0
      })
    },
    activeBadgeFlavor: {
      default: text("Active Badge Flavor", "Light")
    },
    flavor: {
      default: text("Flavor", "Primary")
    },
    textFlavor: {
      default: text("Text Flavor", "Normal")
    },
    helpText: {
      default: text("Help Text", "This is a help text")
    }
  },
  template: `
    <flex-row>
        <flex-column :col="4">
            <numeric-filter
                :text-flavor="textFlavor"
                :help-text="helpText"
                :flavor="flavor"
                :filter="filter"
                :active-badge-flavor="activeBadgeFlavor"
                v-model="value"
                @change="onChange"
                @input="onInput">
            </numeric-filter>
        </flex-column>
        <flex-column :col='8'>
        </flex-column>
    </flex-row>
    `
});
