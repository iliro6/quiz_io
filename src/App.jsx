import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QuizContainer, Navbar, Quiz, Error } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLocalItems, updateLocalStorage } from "./features/catSlice";
function App() {
  const { selected } = useSelector((store) => store.category);
  const { localStorageUpdating } = (store) => store.category;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    
      
      dispatch(getLocalItems())
  
  },[])


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizContainer data={"hi"} />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
