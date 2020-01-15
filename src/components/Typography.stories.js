// import { action } from '@storybook/addon-actions';
import { NH1, NH2, NH3, NH4, NH5, NH6 } from './Typography/StyledTitle';
import { NText, PortionMarking } from "./Typography/StyledBody";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Typography',
  decorators: [withA11y, withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};



// H1 Title
export const Example = () => ({
  components: { NH1, NText, PortionMarking },
  template: `
  <div>
    <n-h1>
      <portion-marking>(U)</portion-marking> 
      H1 Example Product Title
    </n-h1>
    <n-text>This is a text text that defaults to 16px</n-text>
  </div>`,
});

// H1 Title
export const TitleH1 = () => ({
  components: { NH1 },
  template: `<n-h1>H1 Example Product Title</n-h1>`,
});

// H2 Title
export const TitleH2 = () => ({
  components: { NH2 },
  template: `<n-h2>H2 Example Product Title</n-h2>`,
});

// H3 Title
export const TitleH3 = () => ({
  components: { NH3 },
  template: `<n-h3>H3 Example Product Title</n-h3>`,
});

// H4 Title
export const TitleH4 = () => ({
  components: { NH4 },
  template: `<n-h4>H4 Example Product Title</n-h4>`,
});

// H5 Title
export const TitleH5 = () => ({
  components: { NH5 },
  template: `<n-h5>H5 Example Product Title</n-h5>`,
});

// H6 Title
export const TitleH6 = () => ({
  components: { NH6 },
  template: `<n-h6>H6 Example Product Title</n-h6>`,
});

// body
export const Body = () => ({
  components: { NText },
  props: {
    size: {
      default: number("Font Size", 14)
    }
  },
  /**
   * Size prop must be a Number, and controls the font size of the body
   * Any number less than 14 will be set to 14, and number greater than 16 will be set to 16
   */
  template: `<n-text :size="size">lorem ipsum dolor sit amet consectetur adipisicing elit sed do </n-text>`,
});

// portion marking
export const PortionMarkingText = () => ({
  components: { PortionMarking },
  template: `<portion-marking>(TS/SCI/HSG)</portion-marking>`
})