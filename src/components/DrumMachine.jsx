import { useEffect, useState, useCallback } from 'react';
import drumPad from '../assets/data/drumPadData';
import '../styles/DrumMachine.css';

function DrumMachine() {
  const [padPlaying, setPadPlaying] = useState('');

  const playSample = useCallback((sampleId) => {
    const audio = document.getElementById(sampleId);
    if (audio) {
      audio.play();
      setPadPlaying(sampleId);
      animatePad(sampleId);
    }
  }, []);

  const animatePad = (sampleId) => {
    const pad = document.getElementById(`pad: ${sampleId}`);
    if (pad) {
      pad.classList.add('clicked');
      setTimeout(() => pad.classList.remove('clicked'), 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      playSample(event.key.toUpperCase());
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [playSample]);

  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <p>{padPlaying}</p>
        </div>
        <div className="drum-pads">
          {drumPad.map((pad) => (
            <div
              onClick={() => {
                playSample(pad.char);
              }}
              key={pad.char}
              className="drum-pad"
              id={`pad: ${pad.char}`}
            >
              <p>{pad.char}</p>
              <audio id={pad.char} className="clip" src={pad.src}></audio>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DrumMachine;
