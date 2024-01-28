const mix = require('laravel-mix');
const assetPath = __dirname;

mix.styles(
    [
        `${assetPath}/styles/css/frontend.css`,
        //`${assetPath}/styles/css/custom.css`,
    ],
    `${assetPath}/public/css/styles.min.css`
);

mix.combine(
    [
        `${assetPath}/styles/js/frontend.js`,
        //'vendor/juzaweb/modules/resources/assets/js/recaptcha.js',
    ],
    `${assetPath}/public/js/styles.min.js`
);
