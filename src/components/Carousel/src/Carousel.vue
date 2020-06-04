<template>
  <carousel-container :height="height" :width="width">
    <carousel-left-toggler @click="step(-1)">
      <span class="sr-only">Move Carousel Left</span>
      <svg
        class="carousel-left-toggle-svg carousel-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </carousel-left-toggler>
    <image-container
      :height="height"
      :width="width"
      v-for="(image, index) in shownImages"
      :key="index"
      :index="index"
      :direction="direction"
      :selectable="selectable"
      @click="selectImage(image)"
    >
      <carousel-image
        tabindex="0"
        :height="height"
        :width="width"
        :src="image.src"
        :alt="
          typeof image.alt != 'undefined'
            ? `${image.alt}${selectable ? ' Can be selected.' : ''}`
            : `An image in a carousel.${selectable ? ' Can be selected.' : ''}`
        "
      ></carousel-image>
    </image-container>
    <carousel-right-toggler @click="step(1)">
      <span class="sr-only">Move Carousel Right</span>
      <svg
        class="carousel-right-toggle-svg carousel-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </carousel-right-toggler>
    <image-selector-circle-container class="carousel-control-bar" v-if="showControlBar">
      <svg
        v-for="(image, index) in priorImages"
        :key="image.src"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="white"
        stroke="white"
        @click="step(index - currentIndex)"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        stroke="white"
        fill="white"
      >
        <circle cx="12" cy="12" r="12" />
      </svg>
      <svg
        v-for="(image, index) in postImages"
        :key="image.src"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="white"
        stroke="white"
        @click="step(index + 1)"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
        />
      </svg>
    </image-selector-circle-container>
  </carousel-container>
</template>

<script>
import styled from "vue-styled-components";
const props = {
  height: String,
  width: String,
  direction: Number, // 2 right, 1 left, 0 none
  index: Number,
  selectable: Boolean
};
const CarouselLeftToggler = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
`;
const CarouselRightToggler = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
`;
const ImageContainer = styled("div", props)`
  display: flex;
  justify-content: center;
  min-width: 100%;
  ${props => (props.selectable ? `cursor: pointer;` : "")}
  height: ${props => props.height};
  ${props =>
    props.direction == 1 && props.index == 1
      ? `
        -webkit-animation: CarouselSlideLeftIn 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: CarouselSlideLeftIn 0.5s; /* Firefox < 16 */
        -ms-animation: CarouselSlideLeftIn 0.5s; /* Internet Explorer */
        -o-animation: CarouselSlideLeftIn 0.5s; /* Opera < 12.1 */
        animation: CarouselSlideLeftIn 0.5s;
        animation-iteration-count: 1;
    `
      : props.direction == 1 && props.index == 0
      ? `
        -webkit-animation: CarouselSlideLeftOut 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: CarouselSlideLeftOut 0.5s; /* Firefox < 16 */
        -ms-animation: CarouselSlideLeftOut 0.5s; /* Internet Explorer */
        -o-animation: CarouselSlideLeftOut 0.5s; /* Opera < 12.1 */
        animation: CarouselSlideLeftOut 0.5s;
        animation-iteration-count: 1;
    `
      : props.direction == 2 && props.index == 0
      ? `
        -webkit-animation: CarouselSlideRightIn 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: CarouselSlideRightIn 0.5s; /* Firefox < 16 */
        -ms-animation: CarouselSlideRightIn 0.5s; /* Internet Explorer */
        -o-animation: CarouselSlideRightIn 0.5s; /* Opera < 12.1 */
        animation: CarouselSlideRightIn 0.5s;
        animation-iteration-count: 1;
    `
      : props.direction == 2 && props.index == 1
      ? `
        -webkit-animation: CarouselSlideRightOut 0.5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: CarouselSlideRightOut 0.5s; /* Firefox < 16 */
        -ms-animation: CarouselSlideRightOut 0.5s; /* Internet Explorer */
        -o-animation: CarouselSlideRightOut 0.5s; /* Opera < 12.1 */
        animation: CarouselSlideRightOut 0.5s;
        animation-iteration-count: 1;
    `
      : ``}
  ${props =>
    props.index == 0 && props.direction == 1
      ? `transform: translateX(-50px);`
      : props.index == 1 && props.direction == 2
      ? `transform: translateX(50px);`
      : ``}
`;
const ImageSelectorCircleContainer = styled("div")`
  position: absolute;
  left: 40px;
  right: 40px;
  height: 25px;
  bottom: 0px;
  background-color: rgba(124, 124, 124, 0.5);
  align-items: center;
  display: flex;
  justify-content: center;
  & svg {
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
  }
`;
const CarouselContainer = styled("div", props)`
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 0 40px;
  margin-bottom: 25px;
  width: ${props => props.width};
  height: ${props => props.height};
`;
const CarouselImage = styled("img", props)`
  display: block;
  max-width: ${props => props.width};
  max-height: ${props => props.height};
  width: auto;
  height: auto;
`;
const RIGHT = 2;
const LEFT = 1;
const NONE = 0;
export const Carousel = {
  components: {
    CarouselRightToggler,
    CarouselLeftToggler,
    CarouselContainer,
    ImageContainer,
    CarouselImage,
    ImageSelectorCircleContainer
  },
  data() {
    return {
      shownImages: [],
      currentIndex: 0,
      direction: 0,
      intervalID: null
    };
  },
  computed: {
    priorImages() {
      return this.images.slice(0, this.currentIndex);
    },
    postImages() {
      if (this.currentIndex != this.images.length - 1)
        return this.images.slice(this.currentIndex + 1, this.images.length);
      return [];
    }
  },
  beforeDestroy() {
    if (this.intervalID != null) {
      clearInterval(this.intervalID);
    }
  },
  watch: {
    automated() {
      if (this.automated && this.intervalID == null) {
        this.intervalID = setInterval(() => {
          this.step(1);
        }, this.delay);
      } else if (!this.automated && this.intervalID != null) {
        clearInterval(this.intervalID);
      }
    },
    delay() {
      if (this.intervalID != null) {
        clearInterval(this.intervalID);
      }
      this.intervalID = setInterval(() => {
        this.step(1);
      }, this.delay);
    }
  },
  mounted() {
    if (this.images.length > 0) {
      this.shownImages.push(this.images[this.currentIndex]);
    }
    if (this.automated) {
      this.intervalID = setInterval(() => {
        this.step(1);
      }, this.delay);
    }
  },
  methods: {
    selectImage(image) {
      if (!this.selectable) {
        return;
      } else {
        this.$emit("select", image);
      }
    },
    step(amount) {
      if (this.currentIndex + amount >= this.images.length) {
        this.currentIndex = 0;
      } else if (this.currentIndex + amount < 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex += amount;
      }
      if (amount < 0) {
        // stepping backwards
        this.shownImages.unshift(this.images[this.currentIndex]);
        this.direction = RIGHT;
        setTimeout(() => {
          this.direction = NONE;
          this.shownImages.splice(1, 1);
        }, 455);
      } else if (amount > 0) {
        // stepping
        this.shownImages.push(this.images[this.currentIndex]);
        this.direction = LEFT;
        setTimeout(() => {
          this.direction = NONE;
          this.shownImages.splice(0, 1);
        }, 455);
      }
    }
  },
  props: {
    height: {
      type: String,
      default: "500px"
    },
    width: {
      type: String,
      default: "100%"
    },
    automated: Boolean,
    images: {
      type: Array,
      required: true
    },
    selectable: {
      type: Boolean,
      default: true
    },
    showControlBar: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 5000
    }
  }
};
export default Carousel;
</script>

<style>
@keyframes CarouselSlideLeftIn {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes CarouselSlideLeftOut {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-100%) translateX(-50px);
  }
}

@keyframes CarouselSlideRightIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes CarouselSlideRightOut {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px) translateX(50px);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.carousel-svg {
  transition: 0.25s all;
  opacity: 0.2;
}
.carousel-svg:hover {
  opacity: 1;
}
</style>
