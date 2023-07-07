import './style.css';

import Logo from './asset/logo-img.gif';
import { logoContainer } from './modules/DomValues.js';
import loadOnPage from './modules/loder.js';

const myIcon = new Image();
myIcon.src = Logo;

logoContainer.appendChild(myIcon);

loadOnPage();
