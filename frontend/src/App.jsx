import "./index.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProtectedPage from "./pages/ProtectedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <ProtectedPage>
              <ChatPage />
            </ProtectedPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
