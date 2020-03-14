import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { TableOfContents } from "Components/components/TableOfContents/src/TableOfContents.vue";
import markdown from "Components/components/TableOfContents/Usage.md";

export default {
  title: "Table of Contents", // Folder/ is unnecessary but you can group stories by a folder by doing so
  decorators: [withA11y, withKnobs],
  parameters: {
    notes: {
      markdown
    }
  },
  excludeStories: /.*Data$/
};

export const AutomaticTableOfContents = () => ({
  components: { TableOfContents },
  props: {
    flavor: {
      default: text("Flavor", "")
    },
    offset: {
      default: number("Offset", 0)
    }
  },
  template: `
        <div>
            <div style='position: sticky; margin-top: 100px; max-width:200px;'>
                <table-of-contents style="position:fixed" width="200px" :offset="offset" :flavor='flavor'></table-of-contents>
            </div>
            <div style="margin-left: 200px">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle4</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h1>Title1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle11</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle11</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle11</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle21</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle21</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle21</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle31</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle31</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle31</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h2>Subtitle41</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h3>Subsubtitle41</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
            <h4>Subsubsubtitle41</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl
              condimentum id venenatis a. Urna neque viverra justo nec ultrices dui
              sapien eget. Enim praesent elementum facilisis leo vel fringilla est
              ullamcorper. Tincidunt id aliquet risus feugiat in ante metus. Proin
              sagittis nisl rhoncus mattis rhoncus. Suscipit tellus mauris a diam
              maecenas sed enim ut sem. Vulputate sapien nec sagittis aliquam. Arcu
              non sodales neque sodales ut. Nec tincidunt praesent semper feugiat nibh
              sed. Quam nulla porttitor massa id.
            </p>
        </div>
    `
});

export const OverridenQueryTableOfContents = () => ({
  components: { TableOfContents },
  props: {
    flavor: {
      default: text("Flavor", "")
    }
  },
  template: `
        <div>
            <div style='position: sticky; margin-top: 100px; max-width:200px;'>
                <table-of-contents width="200px" :flavor='flavor' query-override="span.title"></table-of-contents>
            </div>
            <div style="margin-left: 200px">
                <h1>I won't show up</h1>
                <h2>I won't show up either!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacus efficitur, placerat turpis feugiat, aliquet lorem. Vivamus eleifend tellus leo, non dapibus tortor aliquam vel. Cras tristique justo sit amet risus posuere, non feugiat dui elementum. Pellentesque sit amet eros sapien. Nunc eu orci convallis, porta erat luctus, ornare urna. Phasellus condimentum in mi et mattis. Aliquam erat volutpat. Fusce ultrices blandit sodales. Aenean et convallis lorem. Nunc non imperdiet erat, vitae hendrerit ex. Aliquam sagittis justo nec tellus imperdiet, et ultrices odio pretium. Quisque non euismod ipsum. Nulla facilisi. Aenean consequat id odio eu rutrum. Quisque eu lorem non sapien posuere consequat. Fusce nisl libero, ultricies quis tellus sit amet, vulputate rhoncus justo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacus efficitur, placerat turpis feugiat, aliquet lorem. Vivamus eleifend tellus leo, non dapibus tortor aliquam vel. Cras tristique justo sit amet risus posuere, non feugiat dui elementum. Pellentesque sit amet eros sapien. Nunc eu orci convallis, porta erat luctus, ornare urna. Phasellus condimentum in mi et mattis. Aliquam erat volutpat. Fusce ultrices blandit sodales. Aenean et convallis lorem. Nunc non imperdiet erat, vitae hendrerit ex. Aliquam sagittis justo nec tellus imperdiet, et ultrices odio pretium. Quisque non euismod ipsum. Nulla facilisi. Aenean consequat id odio eu rutrum. Quisque eu lorem non sapien posuere consequat. Fusce nisl libero, ultricies quis tellus sit amet, vulputate rhoncus justo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend lacus efficitur, placerat turpis feugiat, aliquet lorem. Vivamus eleifend tellus leo, non dapibus tortor aliquam vel. Cras tristique justo sit amet risus posuere, non feugiat dui elementum. Pellentesque sit amet eros sapien. Nunc eu orci convallis, porta erat luctus, ornare urna. Phasellus condimentum in mi et mattis. Aliquam erat volutpat. Fusce ultrices blandit sodales. Aenean et convallis lorem. Nunc non imperdiet erat, vitae hendrerit ex. Aliquam sagittis justo nec tellus imperdiet, et ultrices odio pretium. Quisque non euismod ipsum. Nulla facilisi. Aenean consequat id odio eu rutrum. Quisque eu lorem non sapien posuere consequat. Fusce nisl libero, ultricies quis tellus sit amet, vulputate rhoncus justo.</p>
                <span class="title" data-rank="1" style="font-size:30px">I'm a span that matches! I show up!</span>
                <p>Vivamus convallis maximus commodo. Praesent suscipit justo magna, nec hendrerit purus facilisis non. Nullam dictum urna quis augue condimentum, eu pulvinar erat posuere. Nunc non nibh at lacus iaculis vulputate. Cras pellentesque tellus sapien, vel sodales massa finibus sit amet. Pellentesque ultrices pellentesque nisi, ut vestibulum ante dignissim eu. Fusce metus nisl, ornare a suscipit a, facilisis vel nunc. Quisque ut libero magna. Aenean purus justo, accumsan feugiat sem nec, rutrum viverra felis. Pellentesque sit amet bibendum lorem. Donec a turpis ut libero convallis venenatis quis venenatis mauris. Donec vestibulum quam risus. Donec ut vehicula nulla, at euismod tortor.</p>
                <p>Vivamus convallis maximus commodo. Praesent suscipit justo magna, nec hendrerit purus facilisis non. Nullam dictum urna quis augue condimentum, eu pulvinar erat posuere. Nunc non nibh at lacus iaculis vulputate. Cras pellentesque tellus sapien, vel sodales massa finibus sit amet. Pellentesque ultrices pellentesque nisi, ut vestibulum ante dignissim eu. Fusce metus nisl, ornare a suscipit a, facilisis vel nunc. Quisque ut libero magna. Aenean purus justo, accumsan feugiat sem nec, rutrum viverra felis. Pellentesque sit amet bibendum lorem. Donec a turpis ut libero convallis venenatis quis venenatis mauris. Donec vestibulum quam risus. Donec ut vehicula nulla, at euismod tortor.</p>
                <p>Vivamus convallis maximus commodo. Praesent suscipit justo magna, nec hendrerit purus facilisis non. Nullam dictum urna quis augue condimentum, eu pulvinar erat posuere. Nunc non nibh at lacus iaculis vulputate. Cras pellentesque tellus sapien, vel sodales massa finibus sit amet. Pellentesque ultrices pellentesque nisi, ut vestibulum ante dignissim eu. Fusce metus nisl, ornare a suscipit a, facilisis vel nunc. Quisque ut libero magna. Aenean purus justo, accumsan feugiat sem nec, rutrum viverra felis. Pellentesque sit amet bibendum lorem. Donec a turpis ut libero convallis venenatis quis venenatis mauris. Donec vestibulum quam risus. Donec ut vehicula nulla, at euismod tortor.</p>
                <span>I don't show up but am a span...</span>
                <p>Sed scelerisque sapien a nibh placerat ultrices. Fusce sit amet aliquet augue. Etiam eu luctus massa. Aenean finibus enim sit amet tortor efficitur maximus. Phasellus quis risus eu diam faucibus euismod ac quis elit. Quisque vestibulum mi at enim vulputate blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna risus, imperdiet at augue nec, finibus semper urna. Nullam quis enim imperdiet, vulputate dui quis, euismod magna. In lacinia sed est a accumsan. Sed bibendum ultrices metus, et ultricies mauris. Suspendisse dolor nibh, porta nec pretium sed, sollicitudin ac metus. Aenean non libero malesuada, pulvinar odio consequat, tincidunt lacus. Phasellus at eros eu tortor tincidunt dignissim sit amet in neque.</p>
                <p>Sed scelerisque sapien a nibh placerat ultrices. Fusce sit amet aliquet augue. Etiam eu luctus massa. Aenean finibus enim sit amet tortor efficitur maximus. Phasellus quis risus eu diam faucibus euismod ac quis elit. Quisque vestibulum mi at enim vulputate blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna risus, imperdiet at augue nec, finibus semper urna. Nullam quis enim imperdiet, vulputate dui quis, euismod magna. In lacinia sed est a accumsan. Sed bibendum ultrices metus, et ultricies mauris. Suspendisse dolor nibh, porta nec pretium sed, sollicitudin ac metus. Aenean non libero malesuada, pulvinar odio consequat, tincidunt lacus. Phasellus at eros eu tortor tincidunt dignissim sit amet in neque.</p>
                <p>Sed scelerisque sapien a nibh placerat ultrices. Fusce sit amet aliquet augue. Etiam eu luctus massa. Aenean finibus enim sit amet tortor efficitur maximus. Phasellus quis risus eu diam faucibus euismod ac quis elit. Quisque vestibulum mi at enim vulputate blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna risus, imperdiet at augue nec, finibus semper urna. Nullam quis enim imperdiet, vulputate dui quis, euismod magna. In lacinia sed est a accumsan. Sed bibendum ultrices metus, et ultricies mauris. Suspendisse dolor nibh, porta nec pretium sed, sollicitudin ac metus. Aenean non libero malesuada, pulvinar odio consequat, tincidunt lacus. Phasellus at eros eu tortor tincidunt dignissim sit amet in neque.</p>
                <h1>Another ArticleTitle</h1>
                <p>Nulla ornare, arcu quis sodales dapibus, augue elit mollis justo, non lobortis sem risus sit amet purus. Donec pulvinar iaculis purus, interdum pretium nisi sollicitudin non. Maecenas urna velit, venenatis ac malesuada nec, eleifend hendrerit tellus. Cras blandit accumsan turpis vel efficitur. Phasellus eu ornare nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec dapibus arcu vitae tincidunt convallis. Cras scelerisque non dui ac euismod.</p>
                <p>Nulla ornare, arcu quis sodales dapibus, augue elit mollis justo, non lobortis sem risus sit amet purus. Donec pulvinar iaculis purus, interdum pretium nisi sollicitudin non. Maecenas urna velit, venenatis ac malesuada nec, eleifend hendrerit tellus. Cras blandit accumsan turpis vel efficitur. Phasellus eu ornare nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec dapibus arcu vitae tincidunt convallis. Cras scelerisque non dui ac euismod.</p>
                <p>Nulla ornare, arcu quis sodales dapibus, augue elit mollis justo, non lobortis sem risus sit amet purus. Donec pulvinar iaculis purus, interdum pretium nisi sollicitudin non. Maecenas urna velit, venenatis ac malesuada nec, eleifend hendrerit tellus. Cras blandit accumsan turpis vel efficitur. Phasellus eu ornare nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec dapibus arcu vitae tincidunt convallis. Cras scelerisque non dui ac euismod.</p>
                <h3>Jumped one!</h3>
                <h4>NESTED</h4>
                <p>Cras tincidunt, diam a dapibus tempus, ligula sapien ultricies enim, eu vehicula nisl ligula at odio. Aliquam volutpat arcu enim, a bibendum purus finibus sit amet. Etiam consectetur felis sit amet leo cursus interdum. Ut vitae lorem eget tellus congue finibus. Sed id blandit ante, vitae gravida mi. Vestibulum ullamcorper bibendum lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nisi lectus, dictum et mauris id, posuere egestas velit. Praesent malesuada nunc sit amet sapien consectetur, vitae convallis quam tristique. Morbi nulla metus, cursus nec libero et, ultrices dictum velit. Suspendisse lacinia, est in faucibus aliquam, enim neque posuere leo, sed mattis libero augue ac mi. Vestibulum imperdiet justo in mauris blandit malesuada. Nullam rhoncus est ut dolor porta, eu ultricies nisl porta. Sed fermentum neque id neque dignissim, eu ultricies quam convallis. Aliquam fringilla eros in urna pellentesque, sit amet feugiat risus interdum.</p>
            </div>
        </div>
    `
});
