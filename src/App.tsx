import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ground from './components/Ground/Ground';
import FuncBar from './components/FuncBar/FuncBar';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Ground/>
        <FuncBar/>
      </Provider>
    </div>
  );
}

export default App;
