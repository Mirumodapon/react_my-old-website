import React from 'react';
import { hydrate, render } from 'react-dom';

// Root Component
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
	hydrate(<App />, rootElement);
} else {
	render(<App />, rootElement);
}
