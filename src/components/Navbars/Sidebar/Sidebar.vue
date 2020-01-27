<template>
  <n-sidebar-container :flavor="flavor">
    <n-h4 :flavor="sidebarTitle.flavor">{{sidebarTitle.text}}</n-h4>
    <sidebar-content :class="computedClass"></sidebar-content>
    <slot></slot>
  </n-sidebar-container>
</template>
<script>
import styled from "vue-styled-components";
import Theme from "Components/components/DesignSystem/theme.js";
import {
  NText,
  NH4
} from "Components/components/StyledHTML/Typography/Typography.vue";

const props = {
  flavor: String,
  topOffset: {
    type: String,
    default: "0px"
  },
  bottomOffset: {
    type: String,
    default: "0px"
  },
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};

export const NSidebarContainer = styled("aside", props)`
  background-color: ${props =>
    props.theme && props.theme[props.flavor]
      ? props.theme[props.flavor].background.color
      : props.defaultTheme[props.flavor]
      ? props.defaultTheme[props.flavor].background.color
      : "#dfdfdf"};
  width: 200px;
  position: fixed;
  margin-left: -15px;
  padding-top: 10px;
  padding-left: 15px;
  top: ${props => props.topOffset};
  bottom: ${props => props.bottomOffset};

  @media (max-width: 576px) {
    position: relative;
    width: 100%;
    margin-left: auto;
    padding-left: auto;
  }
`;
export const SidebarContent = styled.div`
  transition: 0.3s ease all;
  overflow: scroll;
  max-height: 100%;
`;
export const NSidebar = {
  components: {
    NSidebarContainer,
    SidebarContent,
    NH4
  },
  data: {
    windowWidth: 0,
    open: false
  },
  mounted: function() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize: function() {
      this.windowWidth = window.innerHeight;
    }
  },
  computed: {
    computedClass: function() {
      if (this.windowWidth > 575) {
        return {};
      } else {
        if (this.open) {
          return {};
        }
        return ["closed"];
      }
    }
  },
  props: {
    sidebarTitle: {
      type: Object,
      default: function() {
        return {
          text: "Sidebar",
          flavor: ""
        };
      }
    },
    flavor: {
      type: String,
      default: ""
    },
    bottomOffset: {
      type: String,
      default: "0px"
    },
    topOffset: {
      type: String,
      default: ""
    }
  }
};
export const SidebarOffsetContent = styled.main`
  margin-left: 0px;
  margin-top: 25px;
  @media (min-width: 576px) {
    margin-left: 200px;
    margin-top: 0px;
  }

  padding-left: 15px;
  width: 75%;
`;
export default NSidebar;
</script>

<style>
.closed {
  max-height: 0px;
}
</style>