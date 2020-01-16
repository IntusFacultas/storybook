import MiniNav from "./Navbars/Navbar.vue"
import { withA11y } from '@storybook/addon-a11y';
import markdown from './Navbars/USAGE.md';

export default {
  title: 'Navbars',
  decorators: [withA11y],
  parameters: {
    notes: {
      "Mini Navbar": markdown,
    }
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


// Mini Navbar
export const MiniNavbar = () => ({
  components: { MiniNav },
  template: `
    <mini-nav>
      <b>
        DYNAMIC CONTENT - May be classified up to TOP SECRET//HCS-P/SI-G/TK//ORCON/NOFORN/FISA
      </b>
    </mini-nav>
  `
})