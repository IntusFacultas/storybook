import { withA11y } from "@storybook/addon-a11y";
import {
  FlexRow,
  FlexColumn
} from "Components/components/Layout/src/Layout.vue";
import { ProductTitle } from "Components/components/StyledHTML/Typography/src/Typography.vue";
import ColorSwatch from "Components/components/DesignSystem/colorSwatch.vue";
import {
  TextTheme,
  NIWSTheme,
  Theme,
  AlertTheme
} from "Components/components/DesignSystem/theme.js";
import markdown from "Components/components/DesignSystem/Usage.md";
export default {
  title: "Design System",
  decorators: [withA11y],
  parameters: {
    notes: {
      markdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Colors = () => ({
  components: {
    ColorSwatch,
    FlexRow,
    ProductTitle,
    FlexColumn
  },
  data: function() {
    return {
      nasic: Theme,
      text: TextTheme,
      niws: NIWSTheme,
      toast: AlertTheme,
      count: 0,
      limit: 3
    };
  },
  methods: {
    splitArray: function(theme, limit) {
      let self = this;
      let colors = [];
      let count = 0;
      let row = 0;
      for (const key in theme) {
        if (count == 0) {
          colors.push([
            {
              name: key,
              color: theme[key].background
            }
          ]);
        } else {
          colors[row].push({
            name: key,
            color: theme[key].background
          });
        }
        count++;
        if (count == limit) {
          row += 1;
          count = 0;
        }
      }
      return colors;
    }
  },
  computed: {
    keys: function() {
      var self = this;
      return Object.keys(self.nasic);
    }
  },
  template: `
        <div>
            <product-title>Available Colors</product-title>
            <hr>
            <flex-row v-for="list in splitArray(nasic, limit)" style="padding-top:10px">
                <flex-column>
                    <div v-for="obj in list" style="display: flex">
                        <color-swatch
                            :name="obj.name"
                            :color="obj.color.color">
                            <color-swatch
                        </color-swatch>
                        <color-swatch
                            :name="obj.name + ':Hover'"
                            :color="obj.color.hover">
                            <color-swatch
                        </color-swatch>
                    </div>
                </flex-row>
                </flex-column>
            <product-title>NIWS Colors</product-title>
            <hr/>
            <flex-row v-for="list in splitArray(niws, 5)" style="padding-top:10px">
                <flex-column>
                    <div v-for="obj in list" style="display: flex">
                        <color-swatch
                            :name="obj.name"
                            :color="obj.color.color">
                            <color-swatch
                        </color-swatch>
                    </div>
                </flex-column>
            </flex-row>
            <product-title>WebText Colors</product-title>
            <hr/>
            <flex-row style="padding-top:10px">
                <flex-column>
                    <color-swatch 
                        v-for="obj in Object.keys(text)"
                        :key="obj"
                        :name="obj"
                        :color="text[obj].color">
                    </color-swatch>
                </flex-column>
            </flex-row>
            <product-title>Toast Colors</product-title>
            <hr/>
            <flex-row v-for="list in splitArray(toast, 4)" style="padding-top:10px">
                <flex-column>
                    <div v-for="obj in list" style="display: flex">
                        <color-swatch
                            :name="obj.name"
                            :color="obj.color.color">
                            <color-swatch
                        </color-swatch>
                    </div>
                </flex-column>
            </flex-row>
        </div>
    `
});
