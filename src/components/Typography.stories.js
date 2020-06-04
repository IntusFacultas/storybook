import {
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  SubCategoryTitle,
  Keyword,
  TextContent,
  NLabel,
  SmallText,
  Paragraph,
  WebLink,
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import titlemarkdown from "Components/components/StyledHTML/StyledTitleUsage.md";
import textmarkdown from "Components/components/StyledHTML/StyledBodyUsage.md";

import {
  List,
  ListItem,
} from "Components/components/StyledHTML/List/src/StyledList.vue";
import { TextTheme as Theme } from "Components/components/DesignSystem/theme.js";
let formattedTheme = [];
Object.keys(Theme).forEach((key) =>
  formattedTheme.push({ text: key, value: Theme[key].color })
);

export default {
  title: "IntusFacultas HTML/Typography",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Title: titlemarkdown,
      text: textmarkdown,
    },
  },
  excludeStories: /.*Data$/,
};

export const WebTitle = () => ({
  components: { PageTitle, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <page-title>This is a web title</page-title>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});
export const WebSectionTitle = () => ({
  components: { SectionTitle, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <section-title>This is a web section title</section-title>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});
export const WebSubSectionTitle = () => ({
  components: { SubSectionTitle, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <sub-section-title>This is a web subsection title</sub-section-title>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});
export const WebCategoryTitle = () => ({
  components: { CategoryTitle, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <category-title>This is a web category title</category-title>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});
export const WebSubCategoryTitle = () => ({
  components: { SubCategoryTitle, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <sub-category-title>This is a web subcategory title</sub-category-title>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});
export const WebKeyword = () => ({
  components: { Keyword, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
  },
  template: `
    <div>
      <keyword>This is a web keyword</keyword>
      <hr>
      <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
      <text-content :size="16">Available Flavors</text-content>
      <list style="background-color: gray">
      <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
          {{themeFlavor.text}}
      </list-item>
      </list>
    </div>
  `,
});

export const NormalText = () => ({
  components: { TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    dark: {
      default: boolean("Dark Mode", false),
    },
    bold: {
      default: boolean("Text Bold", false),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    size: {
      default: number("Font Size", 14),
    },
  },
  /**
   * Size prop must be a Number, and controls the font size of the body
   * Any number less than 14 will be set to 14, and number greater than 16 will be set to 16
   */
  template: `
  <div>
    <text-content :flavor="flavor" :size="size" :bold="bold" :dark="dark">lorem ipsum dolor sit amet consectetur adipisicing elit sed do </text-content>
    <hr>
    <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
    <text-content :size="16">Available Flavors</text-content>
    <list style="background-color: gray">
    <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
        {{themeFlavor.text}}
    </list-item>
    </list>
  </div>`,
});

export const Label = () => ({
  components: { NLabel, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
  },
  template: `
  <div>
    <n-label :flavor="flavor" :dark="dark">Label</n-label>
    <hr>
    <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
    <text-content :size="16">Available Flavors</text-content>
    <list style="background-color: gray">
    <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
        {{themeFlavor.text}}
    </list-item>
    </list>
  </div>`,
});

export const Small = () => ({
  components: { SmallText, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
  },
  template: `
  <div>
    <small-text :flavor="flavor" :dark="dark">small</small-text>
    <hr>
    <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
    <text-content :size="16">Available Flavors</text-content>
    <list style="background-color: gray">
    <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
        {{themeFlavor.text}}
    </list-item>
    </list>
  </div>`,
});

export const ParagraphText = () => ({
  components: { Paragraph, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    size: {
      default: number("Font Size", 14),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
  },
  template: `
  <div>
    <paragraph :flavor="flavor" :dark="dark" :size="size">paragraph</paragraph>
    <hr>
    <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
    <text-content :size="16">Available Flavors</text-content>
    <list style="background-color: gray">
    <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
        {{themeFlavor.text}}
    </list-item>
    </list>
  </div>`,
});

export const Link = () => ({
  components: { WebLink, TextContent, List, ListItem },
  data() {
    return {
      formattedTheme,
    };
  },
  props: {
    size: {
      default: number("Font Size", 14),
    },
    flavor: {
      default: text("Flavor", ""),
    },
    dark: {
      default: boolean("Dark Mode", false),
    },
  },
  template: `
  <div>
    <weblink :flavor="flavor" :dark="dark" :size="size" href="#">Link</weblink>
    <hr>
    <text-content :size="16">Design system information can be found <a href="/?path=/story/design-system--colors">here</a></text-content><br>
    <text-content :size="16">Available Flavors</text-content>
    <list style="background-color: gray">
    <list-item v-for="themeFlavor in formattedTheme" :key="themeFlavor.text" :style="{color: themeFlavor.value}">
        {{themeFlavor.text}}
    </list-item>
    </list>
  </div>`,
});
