
import './App.css';
import Resize from './EventListener';
import SecondComp from './Usestatehook';
import ThirdComp from './ThirdComp';
import FourthComp from './Useeffecthook';
import Usestatehook from './Usestatehook';
import Useeffecthook from './Useeffecthook';
import Events from './Events';
import MouseEvents from './MouseEvents';

const add={
  newname : 'Krishna',
  city: 'Chennai',
  work: 'Developer'
}

function App() {
  return (
    <div className="App">
      <Resize/> 
      {/* <Usestatehook />  */}
      {/* <ThirdComp country='USA'/> */}
      {/* <Useeffecthook/> */}
      {/* <MouseEvents/> */}
      {/* <Events/> */}
    </div>
  );
}

export default App;


