<template>
  <div class="color-swatch" :style="style">
    <div class="color-bar">
      <span>{{color}}</span>
      <span>{{name}}</span>
    </div>
  </div>
</template>

<script>
export const ColorSwatch = {
  props: {
    color: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    style: function() {
      var self = this;
      return {
        "background-color": self.color
      };
    }
  }
};
export default ColorSwatch;
</script>

<style>
.color-swatch {
  box-shadow: 0 0 4px 4px #ededed;
  margin: 10px;
  border-radius: 3px;
  min-width: 120px;
  max-width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 5px;
  min-width: 120px;
  max-width: 150px;
  height: 30px;
  word-wrap: break-word;
  font-size: 12px;
  font-family: monospace;
}
</style>