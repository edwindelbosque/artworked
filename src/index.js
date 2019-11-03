import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
	saveState({
		results: store.getState().results,
		favorites: store.getState().favorites
	});
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
