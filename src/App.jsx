import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizContainer, Navbar, Quiz, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizContainer data={'hi'} />}/>
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
