import drumPad from '../assets/data/drumPadData';
import '../styles/DrumMachine.css';

function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drum-pads">
        {drumPad.map((pad) => (
          <div key={pad.char} className="drum-pad" id={pad.char}>
            <p>{pad.char}</p>
            <audio id={pad.char} className="clip" src={pad.src}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
