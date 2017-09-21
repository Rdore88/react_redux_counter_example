import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {counter} from './reducers/counter'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter)

function render(){
  ReactDOM.render(<App value={store.getState()} store={store}/>, document.getElementById('root'));
}

render()
store.subscribe(render)

registerServiceWorker();
