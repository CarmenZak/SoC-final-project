import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lobby from "./Pages/QuizLobbyPage/Lobby";
import QuizPage from "./Pages/QuizPage/QuizPage";
import EndPage from "./Pages/EndPage/EndPage";
import HomePage from "./Pages/Homepage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
// serge branch
/* import Lobby from "./Components/Lobbypage/Lobby"; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quiz-lobby" element={<Lobby />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
}
export default App;
