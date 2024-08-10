import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>This is my noteapp</h1>
        <Header />
        <Routes>
          <Route path="/" element={<NotesPage />}></Route>
          <Route path="/single-note/:id" element={<NotePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
