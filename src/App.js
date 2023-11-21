import Main from "./component/Main";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Question from "./component/Question/Question";

function App() {
  return (
    <div className="App">
      {/* <Main/> */}

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/question" element={<Question/>}>
      {/* <Route path="/" element={<Main/>}> */}

      </Route>
    </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
