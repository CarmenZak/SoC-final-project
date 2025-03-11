import { Route, Routes } from "react-router-dom";
import Lobby from "./Pages/QuizLobbyPage/Lobby";
import QuizPage from "./Pages/QuizPage/QuizPage";
import EndPage from "./Pages/EndPage/EndPage";
import HomePage from "./Pages/HomePage/HomePage";
/* import LoginPage from "./Pages/LoginPage/LoginPage"; */
import QuizPageMulti from "./Pages/QuizPageMulti/QuizPageMulti";

/* import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react"; */

// commenting out authentication form for now
/* function App() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { session } = authContext;

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={session ? <HomePage /> : <Navigate to="/" />}
      />
      <Route
        path="/quiz-lobby"
        element={session ? <Lobby /> : <Navigate to="/" />}
      />
      <Route
        path="/quiz"
        element={session ? <QuizPage /> : <Navigate to="/" />}
      />

      <Route
        path="/quiz-multi"
        element={session ? <QuizPageMulti /> : <Navigate to="/" />}
      />
      <Route
        path="/end"
        element={session ? <EndPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App; */

function App() {
  /*  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  } */

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz-lobby" element={<Lobby />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz-multi" element={<QuizPageMulti />} />
      <Route path="/end" element={<EndPage />} />
    </Routes>
  );
}

export default App;
