import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/main";
import Jurnal from "./Pages/Jurnal";
import Devices from "./Pages/Devices";
import ModalPerson from "./component/ModalPerson";
import ModalDevice from "./component/ModalDevice";
import PersonList from "./Pages/PersonList";
import Statistics from "./Pages/Statistics";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jurnal" element={<Jurnal />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/personlist" element={<PersonList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path={`/modalPerson/:id`} element={<ModalPerson />} />
          <Route path={`/modalDevice/:id`} element={<ModalDevice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
