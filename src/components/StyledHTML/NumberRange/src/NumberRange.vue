<template>
  <number-container>
    <input-container>
      <input-group-container class="number-range-min-input-container">
        <input-field-container>
          <n-label :flavor="labelFlavor" :for="name + 'LowerValue'"
            >{{ label }} Lower</n-label
          >
          <n-input
            @keydown.up="increment($event, 'lowerValue')"
            @keydown.down="decrement($event, 'lowerValue')"
            type="number"
            v-model="lowerValue"
            @change="validateValue"
            :name="name + 'LowerValue'"
            :id="name + 'LowerValue'"
            ref="minInput"
            :min="min"
            :max="upperValue"
            class="number-range number-range"
          ></n-input>
        </input-field-container>
        <button-container>
          <increment-button
            @keydown.space="increment($event, 'lowerValue')"
            @click="increment($event, 'lowerValue')"
          >
            <span>&#8250;</span>
          </increment-button>
          <decrement-button
            @keydown.space="decrement($event, 'lowerValue')"
            @click="decrement($event, 'lowerValue')"
          >
            <span>&#8250;</span>
          </decrement-button>
        </button-container>
      </input-group-container>
      <input-group-container>
        <input-field-container>
          <n-label
            :flavor="labelFlavor"
            class="number-range-max-label"
            :for="name + 'UpperValue'"
            >{{ label }} Upper</n-label
          >
          <n-input
            @keydown.up="increment($event, 'upperValue')"
            @keydown.down="decrement($event, 'upperValue')"
            class="number-range"
            type="number"
            v-model="upperValue"
            @change="validateValue"
            :name="name + 'UpperValue'"
            :id="name + 'UpperValue'"
            ref="maxInput"
            :min="lowerValue"
            :max="max"
          ></n-input>
        </input-field-container>
        <button-container>
          <increment-button
            @keydown.space="increment($event, 'upperValue')"
            @click="increment($event, 'upperValue')"
          >
            <span>&#8250;</span>
          </increment-button>
          <decrement-button
            @keydown.space="decrement($event, 'upperValue')"
            @click="decrement($event, 'upperValue')"
          >
            <span>&#8250;</span>
          </decrement-button>
        </button-container>
      </input-group-container>
    </input-container>
  </number-container>
</template>

<script>
import styled from "vue-styled-components";
import Theme from "@IntusFacultas/design-system";
import { NInput } from "@IntusFacultas/input";
import { NLabel } from "@IntusFacultas/typography";
const props = {
  flavor: String,
  defaultTheme: {
    type: Object,
    default: function() {
      return Theme;
    }
  }
};
const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputGroupContainer = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  position: relative;
  min-width: calc(50% - 4px);
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputFieldContainer = styled.div`
  min-width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: -22px;
`;
const IncrementButton = styled.button`
  height: 18px;
  & span {
    display: inline-block;
    transform: rotate(-90deg);
    margin-right: 3px;
  }
  border-radius: 0px 5px 0px 0px;
  border: 1px solid transparent;
  border-top-color: #222;
  border-right-color: #222;
  font-weight: bold;
  font-size: 16px;
  background-color: #f0f0f0;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  &:hover {
    background-color: #e1e1e1;
    cursor: pointer;
  }
`;
const DecrementButton = styled.button`
  height: 17px;
  & span {
    display: inline-block;
    transform: rotate(90deg);
  }
  border-radius: 0px 0px 5px 0px;
  border: 1px solid transparent;
  border-bottom-color: #222;
  border-right-color: #222;
  font-weight: bold;
  font-size: 16px;
  line-height: 0;
  background-color: #f0f0f0;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
    border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  &:hover {
    background-color: #e1e1e1;
    cursor: pointer;
  }
`;
export const NumberRange = {
  components: {
    NumberContainer,
    InputContainer,
    InputGroupContainer,
    NLabel,
    NInput,
    ButtonContainer,
    IncrementButton,
    DecrementButton,
    InputFieldContainer
  },
  data() {
    return {
      lowerValue: 0,
      upperValue: 0,
      internalSteps: []
    };
  },
  props: {
    value: {
      type: Object,
      default() {
        return {
          lowValue: 0,
          highValue: 0
        };
      }
    },
    labelFlavor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      default() {
        return [1];
      }
    }
  },
  watch: {
    steps() {
      this.internalSteps = this.steps.slice().sort((x, y) => x >= y);
    }
  },
  mounted() {
    this.lowerValue = this.min;
    this.upperValue = this.max;
    let self = this;
    self.$watch(
      "value",
      function() {
        if (self.lowerValue != self.value.lowerValue) {
          self.lowerValue = self.value.lowerValue;
          self.validateValue();
        }
        if (self.upperValue != self.value.upperValue) {
          self.upperValue = self.value.upperValue;
          self.validateValue();
        }
      },
      { deep: true }
    );
    if (this.steps.length == 0) {
      throw "Steps must have at least one value";
    }
    if (this.steps.length > 1) {
      if (this.steps[0] != this.min) {
        throw "Discrete steps must have a first value equal to the minimum";
      }
      if (this.steps[this.steps.length - 1] != this.max) {
        throw "Discrete steps must have a last value equal to the maximum";
      }
    }
    this.internalSteps = this.steps.slice().sort((x, y) => x >= y);
    if (!Array.prototype.findIndex) {
      Object.defineProperty(Array.prototype, "findIndex", {
        value: function(predicate) {
          // 1. Let O be ? ToObject(this value).
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          var o = Object(this);

          // 2. Let len be ? ToLength(? Get(O, "length")).
          var len = o.length >>> 0;

          // 3. If IsCallable(predicate) is false, throw a TypeError exception.
          if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
          }

          // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
          var thisArg = arguments[1];

          // 5. Let k be 0.
          var k = 0;

          // 6. Repeat, while k < len
          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kValue be ? Get(O, Pk).
            // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
            // d. If testResult is true, return k.
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
              return k;
            }
            // e. Increase k by 1.
            k++;
          }

          // 7. Return -1.
          return -1;
        },
        configurable: true,
        writable: true
      });
    }
  },
  beforeDestroy() {},
  methods: {
    increment(event, value) {
      event.preventDefault();
      if (this[value] == this.max) {
        return;
      }
      if (this.internalSteps.length > 1) {
        let nextIndex = this.internalSteps.findIndex(x => x == this[value]) + 1;
        if (nextIndex >= this.internalSteps.length) {
          nextIndex = this.internalSteps.length - 1;
        }
        this[value] = parseFloat(this.internalSteps[nextIndex]);
      } else {
        this[value] += parseFloat(this.internalSteps[0]);
      }
      this.validateValue();
    },
    decrement(event, value) {
      event.preventDefault();
      if (this[value] == this.min) {
        return;
      }
      if (this.internalSteps.length > 1) {
        let nextIndex = this.internalSteps.findIndex(x => x == this[value]) - 1;
        if (nextIndex <= 0) {
          nextIndex = 0;
        }
        this[value] = parseFloat(this.internalSteps[nextIndex]);
      } else {
        this[value] -= parseFloat(this.internalSteps[0]);
      }
      this.validateValue();
    },
    roundValues(value) {
      let copy = this.internalSteps.slice();
      copy.push(parseFloat(value));
      copy.sort((x, y) => x >= y);
      let index = copy.findIndex(x => x == parseFloat(value));
      let lowerBound = index - 1;
      let upperBound = index + 1;
      if (lowerBound < 0) {
        lowerBound = 0;
      }
      if (upperBound >= copy.length) {
        upperBound = copy.length - 1;
      }
      copy = copy.slice(lowerBound, upperBound + 1);
      return copy;
    },
    roundToNearestDiscreteStep(values, value) {
      let lowerDelta = Math.abs(values[0] - value);
      let upperDelta = Math.abs(values[values.length - 1] - value);
      if (upperDelta < lowerDelta) {
        // round up
        return values[values.length - 1];
      } else {
        return values[0];
      }
    },
    roundToNearestBasicStep(value, base) {
      let distanceToBottom = 0;
      let distanceToTop = 0;
      let tracker = value;
      let bottom = 0;
      let top = 0;
      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {
        distanceToBottom++;
        tracker--;
      }
      bottom = tracker;
      tracker = value;
      while (Math.abs(tracker - base) % this.internalSteps[0] != 0) {
        distanceToTop++;
        tracker++;
      }
      top = tracker;
      if (distanceToBottom <= distanceToTop) {
        return bottom;
      }
      return top;
    },
    validateValue() {
      if (this.internalSteps.length != 1) {
        if (this.internalSteps.indexOf(this.lowerValue) == -1) {
          let copy = this.roundValues(this.lowerValue);
          this.lowerValue = parseFloat(
            this.roundToNearestDiscreteStep(copy, this.lowerValue)
          );
        }
        if (this.internalSteps.indexOf(this.upperValue) == -1) {
          let copy = this.roundValues(this.upperValue);
          this.upperValue = parseFloat(
            this.roundToNearestDiscreteStep(copy, this.upperValue)
          );
        }
      } else {
        if (Math.abs(this.lowerValue - this.min) % this.internalSteps[0] != 0) {
          this.lowerValue = this.roundToNearestBasicStep(
            this.lowerValue,
            this.min
          );
        }
        if (Math.abs(this.upperValue - this.max) % this.internalSteps[0] != 0) {
          this.upperValue = this.roundToNearestBasicStep(
            this.upperValue,
            this.max
          );
        }
      }
      if (this.upperValue > this.max) {
        this.upperValue = this.max;
      }
      if (this.lowerValue < this.min) {
        this.lowerValue = this.min;
      }
      if (this.lowerValue > this.upperValue) {
        this.lowerValue = parseFloat(this.upperValue);
      }
      this.lowerValue = parseFloat(this.lowerValue);
      this.upperValue = parseFloat(this.upperValue);
      this.$emit("change", {
        lowerValue: this.lowerValue,
        upperValue: this.upperValue
      });
    }
  }
};
export default NumberRange;
</script>

<style>
.number-range-max-label {
  float: right;
  text-align: end;
}
.number-range {
  border-right-color: transparent;
}
/* Chrome, Safari, Edge, Opera */
input.number-range::-webkit-outer-spin-button,
input.number-range::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"].number-range {
  -moz-appearance: textfield;
}
</style>
