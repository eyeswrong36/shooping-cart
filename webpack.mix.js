const mix = require("laravel-mix");

const path = require("path");
const fs = require("fs");

const Clean = require("clean-webpack-plugin");

var Obfuscator = require("webpack-obfuscator");

const ejs = require("ejs-html");

var pretty = require("pretty");

const publicPath = "public";

let plugins = [new Clean([publicPath], { allowExternal: true })];

const vueFilename = 'myApp.js'
const jsFilename = 'assets.js'
const cssFilename = 'assets.css'

if (process.env.ENV == "production")
  plugins.push(
    new Obfuscator(
      {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: "hexadecimal",
        log: false,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        shuffleStringArray: true,
        splitStrings: false,
        stringArray: true,
        stringArrayEncoding: false,
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
      },
      [jsFilename]
    )
  );

mix.setPublicPath(publicPath);

mix.webpackConfig({
  plugins
});

mix.scripts(
  [
    "assets/js/jquery.min.js",
    "assets/js/bootstrap.bundle.min.js",
    "assets/js/jquery-confirm.min.js",
    "assets/js/jquery.cookie.js",
    "assets/js/owl.carousel.min.js",
    "assets/js/owl.carousel2.thumbs.js",
    "assets/js/front.js"
  ],
  publicPath + '/js/assets.js'
);

mix.styles(
  [
    "assets/css/bootstrap.min.css",
    "assets/css/font-awesome.min.css",
    "assets/css/jquery-confirm.min.css",
    "assets/css/owl.carousel.css",
    "assets/css/owl.theme.default.css",
    "assets/css/style.default.css",
    "assets/css/custom.css"
  ],
  publicPath + '/css/assets.css'
);

mix.copyDirectory('assets/img', publicPath + '/img')
mix.copyDirectory('assets/fonts', publicPath + '/fonts'); 

mix.js("vuesrc/app.js", publicPath + '/js').extract(["vue"]);

mix.version();

mix.then(() => {
  try {
    const manifest_path = path.join(__dirname, publicPath + '/mix-manifest.json');
    const ejs_path = path.join(__dirname, '/template/index.ejs');
    const output_path = path.join(__dirname, publicPath + '/index.html');

    const manifest = require(manifest_path);

    const html = fs.readFileSync(ejs_path, "utf-8");

    let manifest_data_js = [];
    let manifest_data_css = [];
    let vendors = [];

    for (var key in manifest) {
      const key_name = key.split("/").pop();

      if (/\.js/i.test(manifest[key])) {
        if (key_name == 'app.js') {
            vendors.splice(2, 0, manifest[key].substring(1));
        } else if (key_name == 'manifest.js') {
            vendors.splice(0, 0, manifest[key].substring(1));
        } else if (key_name == 'vendor.js') {
            vendors.splice(1, 0, manifest[key].substring(1));
        } else {
          manifest_data_js.push(manifest[key].substring(1))
        }
      } else {
        manifest_data_css.push(manifest[key].substring(1))
      }
    }

    vendors.forEach(vendor => {
      manifest_data_js.push(vendor)
    })

    let output = ejs.render(
      html,
      {
        baseUrl: process.env.BASE_URL,
        assetsUrl: process.env.ASSETS_URL,
        title: 'Shopping Cart',
        icon: process.env.ICON,
        js_files: manifest_data_js,
        css_files: manifest_data_css,
      },
      {
        vars: ['js_files', 'icon', 'css_files', 'baseUrl', 'assetsUrl', 'title']
      }
    );

    output = pretty(output);

    fs.writeFileSync(output_path, output);
  } catch (e) {
    console.log(e);
  }
});

