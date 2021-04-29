import logo from './logo.svg';
import './App.css';

function App() {

  function buttonClick(freq, offset = 1) {
    var context = new AudioContext()
    var o = context.createOscillator()
    var  g = context.createGain()
    o.connect(g)
    o.frequency.value = freq
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + offset)
    g.connect(context.destination)
    o.start(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Adele
        </p>
        <button onClick={() => { buttonClick(70, 1000)}}>FART</button>
        <button onClick={() => { buttonClick(440)}}>CLICK ME</button>
        <button onClick={() => { buttonClick(660)}}>CLICK ME</button>
        <button onClick={() => { buttonClick(880)}}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
