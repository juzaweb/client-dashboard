const mix = require('laravel-mix');

const baseAsset = 'plugins/client-dashboard/assets';
const basePublish = baseAsset + '/public';

mix.setPublicPath(basePublish);

mix.ts(`${baseAsset}/js/app.tsx`, 'js/app.js')
    .react()
    .extract(['react']);
