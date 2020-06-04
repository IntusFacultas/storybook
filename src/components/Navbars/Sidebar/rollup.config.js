import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
import VuePlugin from "rollup-plugin-vue";
const npmConfig = {
  input: "src/entry.js",
  output: {
    name: "Sidebar",
    sourcemap: true,
  },
  plugins: [
    VuePlugin(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.VUE_ENV": JSON.stringify("compiler"),
    }),
    commonjs(),
    babel({
      // exclude: "node_modules/**"
    }),
  ],
};
const commonConfig = {
  input: "src/entry.js",
  output: {
    name: "Sidebar",
    sourcemap: true,
  },
  plugins: [
    VuePlugin(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.VUE_ENV": JSON.stringify("compiler"),
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    commonjs(),
  ],
};

// ESM config
const esmConfig = Object.assign({}, npmConfig);
esmConfig.output = Object.assign({}, npmConfig.output, {
  file: "dist/Sidebar.esm.js",
  format: "esm",
});

// ESM prod config
const esmProdConfig = Object.assign({}, esmConfig);
esmProdConfig.output = Object.assign({}, esmConfig.output, {
  file: "dist/Sidebar.esm.min.js",
  sourcemap: false,
});
esmProdConfig.plugins = [...esmConfig.plugins, terser()];

// iife config
const iifeConfig = Object.assign({}, commonConfig);
iifeConfig.output = Object.assign({}, commonConfig.output, {
  file: "dist/Sidebar.iife.js",
  format: "iife",
});
iifeConfig.plugins = [
  ...commonConfig.plugins,
  babel({
    // exclude: 'node_modules/**'
  }),
];

// iife Production config
const iifeProdConfig = Object.assign({}, iifeConfig);
iifeProdConfig.output = Object.assign({}, iifeConfig.output, {
  file: "dist/Sidebar.iife.min.js",
  sourcemap: false,
});
iifeProdConfig.plugins = [...iifeConfig.plugins, terser()];

let configurations = [];
configurations.push(esmConfig, esmProdConfig, iifeConfig, iifeProdConfig);

export default configurations;
