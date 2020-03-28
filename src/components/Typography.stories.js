// import { action } from '@storybook/addon-actions';
import {
  NLabel,
  NSmall,
  Paragraph,
  PageTitle,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  WebLink,
  WebText,
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
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <page-title :flavor="flavor" :bold="bold">This is a  title</page-title>
  `
});
export const WebSectionTitle = () => ({
  components: { SectionTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <section-title :flavor="flavor" :bold="bold">This is a  section title</section-title>
  `
});
export const WebSubSectionTitle = () => ({
  components: { SubSectionTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <sub-section-title :flavor="flavor" :bold="bold">This is a  subsection title</sub-section-title>
  `
});
export const WebCategoryTitle = () => ({
  components: { CategoryTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <category-title :flavor="flavor" :bold="bold">This is a  category title</category-title>
  `
});
export const WebSubCategoryTitle = () => ({
  components: { SubCategoryTitle },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <sub-category-title :flavor="flavor" :bold="bold">This is a  subcategory title</sub-category-title>
  `
});
export const WebKeyword = () => ({
  components: { Keyword },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `
    <keyword :flavor="flavor" :bold="bold">This is a  keyword</keyword>
  `
});

// body
export const Text = () => ({
  components: { WebText },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    size: {
      default: number("Font Size", 14)
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  /**
   * Size prop must be a Number, and controls the font size of the body
   * Any number less than 14 will be set to 14, and number greater than 16 will be set to 16
   */
  template: `<web-text :bold="bold" :flavor="flavor" :size="size">lorem ipsum dolor sit amet consectetur adipisicing elit sed do </web-text>`
});

export const Label = () => ({
  components: { "n-label": NLabel },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `<n-label :bold="bold" :flavor="flavor">Label</n-label>`
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
  template: `<web-link href="#" :flavor="flavor">Label</web-link>`
});

export const Small = () => ({
  components: { NSmall },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `<n-small :flavor="flavor">small</n-small>`
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
    bold: {
      default: boolean("Text Bold", false)
    }
  },
  template: `<paragraph :bold="bold" :flavor="flavor" :size="size">paragraph</paragraph>`
});
