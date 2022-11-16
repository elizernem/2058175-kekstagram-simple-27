import './util.js';
import './data.js';
import './form.js';
import './photo-editor.js';
import './picture.js';
import './slider.js';
import './server.js';

import {getData} from './server.js';
import {setFormSubmit} from './server.js';
import {successDataSend, failDataSend} from './server.js';

getData();
setFormSubmit(successDataSend, failDataSend);
