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

mix.setPublicPath('./dist')
    .browserSync({
        proxy: 'https://sage.test',
        open: false,
        cors: true,
    });

mix
  .options({processCssUrls: false,})
  .postCss('resources/assets/styles/app.css', 'styles', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ]);

mix
  .js('resources/assets/scripts/app.js', 'scripts')
  //.js('resources/assets/scripts/app.js', 'scripts').vue({version: 2}) // if using vuejs
  .js('resources/assets/scripts/customizer.js', 'scripts')
  .blocks('resources/assets/scripts/editor.js', 'scripts')
  .extract();

mix
  .copy('resources/assets/images', 'dist/images')
  .copy('resources/assets/fonts', 'dist/fonts');

mix.autoload({
  jquery: ['$', 'window.jQuery'],
});
