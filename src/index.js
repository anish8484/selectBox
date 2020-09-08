import React from 'react';
import ReactDOM from 'react-dom';
import SelectBox from './select-box/select';
import airportList from './airports.json';
import './style.css';

const App = () => {
  return (
    <div>
      <div className="select">
        <h1>Select Destination</h1>
        <SelectBox lists = {airportList} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
