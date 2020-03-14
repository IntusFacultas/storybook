import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import VuePlugin from "rollup-plugin-vue";
const npmConfig = {
  input: "src/entry.js",
  output: {
    name: "ParametricFilter",
    sourcemap: true
  },
  plugins: [
    VuePlugin(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.VUE_ENV": JSON.stringify("compiler")
    }),
    commonjs()
  ]
};
const commonConfig = {
  input: "src/entry.js",
  output: {
    name: "ParametricFilter",
    sourcemap: true
  },
  plugins: [
    VuePlugin(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.VUE_ENV": JSON.stringify("compiler")
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    commonjs()
  ]
};

// ESM config
const esmConfig = Object.assign({}, npmConfig);
esmConfig.output = Object.assign({}, npmConfig.output, {
  file: "dist/ParametricFilter.esm.js",
  format: "esm"
});

// ESM prod config
const esmProdConfig = Object.assign({}, esmConfig);
esmProdConfig.output = Object.assign({}, esmConfig.output, {
  file: "dist/ParametricFilter.esm.min.js",
  sourcemap: false
});
esmProdConfig.plugins = [...esmConfig.plugins, terser()];

// UMD config
const umdConfig = Object.assign({}, commonConfig);
umdConfig.output = Object.assign({}, commonConfig.output, {
  file: "dist/ParametricFilter.umd.js",
  format: "umd"
});

umdConfig.plugins = [
  ...commonConfig.plugins,
  babel({
    // exclude: 'node_modules/**'
  })
];

// UMD Production config
const umdProdConfig = Object.assign({}, umdConfig);
umdProdConfig.output = Object.assign({}, umdConfig.output, {
  file: "dist/ParametricFilter.umd.min.js",
  sourcemap: false
});
umdProdConfig.plugins = [...umdConfig.plugins, terser()];

// iife config
const iifeConfig = Object.assign({}, commonConfig);
iifeConfig.output = Object.assign({}, commonConfig.output, {
  file: "dist/ParametricFilter.iife.js",
  format: "iife"
});
iifeConfig.plugins = [
  ...commonConfig.plugins,
  babel({
    // exclude: 'node_modules/**'
  })
];

// UMD Production config
const iifeProdConfig = Object.assign({}, iifeConfig);
iifeProdConfig.output = Object.assign({}, iifeConfig.output, {
  file: "dist/ParametricFilter.iife.min.js",
  sourcemap: false
});
iifeProdConfig.plugins = [...iifeConfig.plugins, terser()];

let configurations = [];
if (process.env.SERVE) {
  const serveConfig = Object.assign({}, commonConfig);
  serveConfig.input = "render/index.js";
  serveConfig.output = Object.assign({}, commonConfig.output, {
    file: "dist/render/ParametricFilter.iife.js",
    format: "iife"
  });
  serveConfig.plugins = [
    eslint({
      exclude: ["node_modules/**", "json/**"],
      throwOnError: true
    }),
    ...umdConfig.plugins
  ];
  serveConfig.plugins.push(
    serve({
      open: true,
      contentBase: ["dist"],
      host: "localhost",
      port: "3030"
    }),
    livereload({
      watch: "dist",
      verbose: false
    })
  );
  configurations.push(serveConfig);
} else {
  configurations.push(
    esmConfig,
    esmProdConfig,
    umdConfig,
    umdProdConfig,
    iifeConfig,
    iifeProdConfig
  );
}

export default configurations;
