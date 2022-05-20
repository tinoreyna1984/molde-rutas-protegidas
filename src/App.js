import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/ui/NavBar";
import { AppRouter } from "./routers/AppRouter";

function App() {
  
  return (
    <>
      <Router>
          <NavBar />
          <AppRouter />
        </Router>
    </>
  );
}

export default App;
