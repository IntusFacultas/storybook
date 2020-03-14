// import { action } from '@storybook/addon-actions';
import {
  Text,
  NLabel,
  NSmall,
  Paragraph,
  Title,
  SectionTitle,
  SubSectionTitle,
  CategoryTitle,
  SubCategoryTitle,
  Keyword
} from "Components/components/StyledHTML/Typography/src/Typography.vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs";
import titlemarkdown from "Components/components/StyledHTML/StyledTitleUsage.md";
import textmarkdown from "Components/components/StyledHTML/StyledBodyUsage.md";

export default {
  title: "NASIC HTML/Typography",
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

export const PageTitle = () => ({
  components: { Title },
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
    <title>This is a  title</title>
  `
});
export const SectionTitle = () => ({
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
    <section-title>This is a  section title</section-title>
  `
});
export const SubSectionTitle = () => ({
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
    <sub-section-title>This is a  subsection title</sub-section-title>
  `
});
export const CategoryTitle = () => ({
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
    <category-title>This is a  category title</category-title>
  `
});
export const SubCategoryTitle = () => ({
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
    <sub-category-title>This is a  subcategory title</sub-category-title>
  `
});
export const Keyword = () => ({
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
    <keyword>This is a  keyword</keyword>
  `
});

// body
export const Text = () => ({
  components: { NText },
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
  template: `<text :flavor="flavor" :size="size" :dark="dark">lorem ipsum dolor sit amet consectetur adipisicing elit sed do </text>`
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

export const Paragraph = () => ({
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
