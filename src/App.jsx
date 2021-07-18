import "./App.css";
import { Content } from "./content/Content";
import { Sidebar } from "./sidebar/Sidebar";
import { HashRouter } from "react-router-dom";
// import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Sidebar />
        <Content />
      </HashRouter>
    </div>
  );
}

export default App;
