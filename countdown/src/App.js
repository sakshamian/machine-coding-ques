
import './App.css';
import Timerwrapper from './Timer/Timerwrapper';

function App() {
  const onExpire = () => {
    console.log('expired');
  }

  return (
    <div className="App">
      <Timerwrapper onExpire={onExpire} duration={5 * 1000} />
    </div>
  );
}

export default App;
