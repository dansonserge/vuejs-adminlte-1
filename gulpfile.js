const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
elixir(mix => {
    mix.sass('app.scss','public/app/css/app.css')
    .styles([
            "admin_lte.css",
            "font-awesome.css",
            "ionicons.css",
            "jquery-jvectormap-1.2.2.css",
            "main.css",
            "datepicker.css",
            "nprogress.css",
            "bootstrap-formhelpers-countries.flags.css"
          ],'public/app/css/main.css')
    .webpack('main.js','public/app/js/main.js');
});




