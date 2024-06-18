// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionRenComp from './components/ConditionRenComp';
import FunctionComp from './components/FunctionComp';
import MethodEventComp from './components/MethodAndEvent';
import MyImagesComp from './components/MyImagesComp';
import ParentComp from './components/ParentComp';
import SetStateComp from './components/SetStateComp';
import ToggleImg from './components/ToggleImg';
import Mydetails from './components/myDetails';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>wlcome ro react session</h1>
      <FunctionComp myName="Sandeep" post="Software developer"/> */}
      {/* <ClassComp myName="Sandeep Rao" post="Fullstack developer"/> */}
      {/* <Mydetails fname="sandeep" lname="Rao" email="sandeep003.mnmn@gmaul.com" contact="8610036988"/> */}
      {/* <MethodEventComp/> */}
      {/* <SetStateComp/> */}
      {/* <ConditionRenComp/> */}
      {/* <MyImagesComp/> */}
      {/* <ToggleImg/> // doubt */} 
      <ParentComp/>
    </div>
  );
}

export default App;
