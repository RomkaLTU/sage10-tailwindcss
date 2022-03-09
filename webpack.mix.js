const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./public')
    .browserSync({
        proxy: 'https://sage10tw.test', // change this to match your local dev URL
        open: false,
        cors: true,
    });

mix
  .options({processCssUrls: false,})
  .postCss('resources/assets/styles/app.pcss', 'styles', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ]);

// mix.webpackConfig({
//   stats: {
//     children: true
//   }
// });

mix
  .js('resources/assets/scripts/app.js', 'scripts')
  //.js('resources/assets/scripts/app.js', 'scripts').vue({version: 2}) // if using vuejs
  .extract();

mix
  .copyWatched('resources/assets/images/**', 'public/images')
  .copyWatched('resources/assets/fonts/**', 'public/fonts');

if (mix.inProduction()) {
  mix.sourceMaps();
  mix.version();
}

mix.autoload({
  jquery: ['$', 'window.jQuery'],
});
