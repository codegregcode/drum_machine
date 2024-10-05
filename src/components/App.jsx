import { Route, Routes } from 'react-router-dom';
import Land from './Land';
import DrumMachine from './DrumMachine';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/drum_machine" element={<DrumMachine />} />
      </Routes>
    </>
  );
}

export default App;
