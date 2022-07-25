import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrance from './components/Entrance';
import Room1 from './components/Room1';
import Room2 from './components/Room2';
import Room3 from './components/Room3';
import Room4 from './components/Room4';
import Room5 from './components/Room5';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="room1" element={<Room1 />} />
        <Route path="/room2" element={<Room2 />} />
        <Route path="/room3" element={<Room3 />} />
        <Route path="/room4" element={<Room4 />} />
        <Route path="/room5" element={<Room5 />} />
        <Route path="/room-end" element={<Entrance />} />
      </Routes>
    </BrowserRouter>
  );
}
