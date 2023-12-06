import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizContainer, Categories, Navbar, Quiz, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizContainer />}></Route>
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
