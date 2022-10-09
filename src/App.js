import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";
import Home from "./components/pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const color = "#481F04";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);


  return (
    <>
      {loading ? (
        <InitailSpinner>
          <PacmanLoader color={color} loading={loading} size={80} />
        </InitailSpinner>
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      )}
    </>
  );
}

const InitailSpinner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-1);
`;

export default App;
