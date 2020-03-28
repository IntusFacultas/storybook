// import { action } from '@storybook/addon-actions';
import {
  Text,
  NLabel,
  NSmall,
  Paragraph,
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  WebLink,
  SubCategoryTitle,
  Keyword
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import titlemarkdown from "Components/components/StyledHTML/StyledTitleUsage.md";
import textmarkdown from "Components/components/StyledHTML/StyledBodyUsage.md";

export default {
  title: "Styled HTML/Typography",
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      Title: titlemarkdown,
      Text: textmarkdown
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Title = () => ({
  components: { PageTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <page-title :flavor="flavor" :dark="dark" :bold="bold">This is a  title</page-title>
  `
});
export const WebSectionTitle = () => ({
  components: { SectionTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <section-title :flavor="flavor" :dark="dark" :bold="bold">This is a  section title</section-title>
  `
});
export const WebSubSectionTitle = () => ({
  components: { SubSectionTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <sub-section-title :flavor="flavor" :dark="dark" :bold="bold">This is a  subsection title</sub-section-title>
  `
});
export const WebCategoryTitle = () => ({
  components: { CategoryTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <category-title :flavor="flavor" :dark="dark" :bold="bold">This is a  category title</category-title>
  `
});
export const WebSubCategoryTitle = () => ({
  components: { SubCategoryTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <sub-category-title :flavor="flavor" :dark="dark" :bold="bold">This is a  subcategory title</sub-category-title>
  `
});
export const WebKeyword = () => ({
  components: { Keyword },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <keyword :flavor="flavor" :dark="dark" :bold="bold">This is a  keyword</keyword>
  `
});

// body
export const WebText = () => ({
  components: { WebText },
  props: {
    dark: {
      default: boolean("Dark Mode", false)
    },
    flavor: {
      default: text("Flavor", "")
    },
    size: {
      default: number("Font Size", 14)
    }
  },
  /**
   * Size prop must be a Number, and controls the font size of the body
   * Any number less than 14 will be set to 14, and number greater than 16 will be set to 16
   */
  template: `<web-text :flavor="flavor" :size="size" :dark="dark">lorem ipsum dolor sit amet consectetur adipisicing elit sed do </web-text>`
});

export const Label = () => ({
  components: { "n-label": NLabel },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    }
  },
  template: `<n-label :flavor="flavor" :dark="dark">Label</n-label>`
});

export const Link = () => ({
  components: { "web-link": WebLink },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    }
  },
  template: `<web-link href="#" :flavor="flavor" :dark="dark">Label</web-link>`
});

export const Small = () => ({
  components: { NSmall },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    }
  },
  template: `<n-small :flavor="flavor" :dark="dark">small</n-small>`
});

export const WebParagraph = () => ({
  components: { Paragraph },
  props: {
    size: {
      default: number("Font Size", 14)
    },
    flavor: {
      default: text("Flavor", "")
    },
    dark: {
      default: boolean("Dark Mode", false)
    }
  },
  template: `<paragraph :flavor="flavor" :dark="dark" :size="size">paragraph</paragraph>`
});
