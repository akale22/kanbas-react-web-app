import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Navigate, Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kanbas"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
   </div>
  </HashRouter>
);}
