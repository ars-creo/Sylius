import './js/app';
import './scss/style.scss';
import './bootstrap';

const imagesContext = require.context('./images', true, /\.(jpg|jpeg|png|svg|gif)$/);
imagesContext.keys().forEach(imagesContext);
