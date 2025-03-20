import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useState, lazy, Suspense } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

// Lazy load components
const Projects = lazy(() => import("./components/Projects"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const Blogs = lazy(() => import("./components/Blogs"));
const BlogDetails = lazy(() => import("./components/BlogDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`

const LoadingFallback = () => <div>Loading...</div>;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
            </Routes>
          </Suspense>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;

