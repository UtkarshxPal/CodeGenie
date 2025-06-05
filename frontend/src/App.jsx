import "./index.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProtectedPage from "./pages/ProtectedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="bg-white text-black text-sm md:text-base px-4 py-2 shadow-md rounded-md max-w-[90vw] sm:max-w-sm"
        bodyClassName="flex items-center"
      />
    </Router>
  );
}

export default App;
