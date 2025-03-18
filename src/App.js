import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import './App.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;