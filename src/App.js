import {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// class Welcome extends Component {
//   render() {
//     return <h1>Welcome my friends {this.name}</h1>
//   }
// }
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}

function Avatar({name, img}) {
  console.log(name, img)
  return (
    <img src={name} 
          alt={img}
          width={100}
    />
  )
}
function Test() {
  return (
    <Avatar
      person= {{
                name: 'Chris',
                age: 25
                }}
      img= "picureses"
    />
  )
}
console.log(<Test />)
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <Welcome name='Grak' />
      <Welcome name='Clark' />
    </div>
  );
}

export default App;
export {Welcome};