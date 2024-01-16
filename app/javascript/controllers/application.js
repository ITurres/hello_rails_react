// eslint-disable-next-line
import { Application } from '@hotwired/stimulus';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

// eslint-disable-next-line
export { application };
