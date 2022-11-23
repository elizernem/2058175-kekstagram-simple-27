import {onUploadButtonClick} from './form.js';
import {getData} from './api.js';
import { showSuccess, showFail } from './message.js';
import {initListenerAlertOpen} from './init-listener.js';
import {loadPicture} from './picture-loading.js';

getData();
onUploadButtonClick();
loadPicture();

initListenerAlertOpen(showSuccess, showFail);
