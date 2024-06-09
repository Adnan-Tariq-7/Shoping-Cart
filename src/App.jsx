import { useEffect, useState } from "react";
import { About, Cart, Contact, Footer, Header, Hero, Product } from "./sections";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components";

const App = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const Home = () => {
    return (
      <>
   
        <Hero />
        <Product />
        <About />
        <Contact/>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <div className="max-w-screen-2xl mx-auto dark:bg-dark-background">
          <ScrollToTop/>
          <Header setTheme={setTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
