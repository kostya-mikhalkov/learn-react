import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Welcome } from './App';
import Profile from './components/profile';
import reportWebVitals from './reportWebVitals';
import Clock from './components/clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const elem = <h1>Ai la lala lala lala</h1>
// root.render(elem);

// const elem = React.createElement('h1', {className: 'greet'}, 'Hello world')

// function Welcome(prop) {
//   return <h1> Hello, {prop.name} and {prop.age}</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const el = <Welcome name="Bill" age='5' />;
// console.log(el)
// root.render(el)

const root = ReactDOM.createRoot(document.getElementById('root'));
// function tik(){
//   root.render(<Clock/>);
// }
// setInterval(tik, 1000);
root.render(
  <React.StrictMode>
    <Clock />
    </React.StrictMode> );

// function tik() {
//   const elem = (
//     <div>
//         <h1>Time</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(elem)
// }
// setInterval(tik, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
