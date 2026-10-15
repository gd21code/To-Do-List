import './styles.css';

import { defaultProject } from './defaultProject.js';
import { initialLoadDOM } from './initialLoadDOM.js';

// call initialLoad upon website open

// call defaultProject for first project block
defaultProject();

// call initialDOM for user interface
initialLoadDOM();