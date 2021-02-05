import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import Header from "../src/components/Header";

import GlobalStyle from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/Themes";

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme) {
      setTimeout(() => {
        setTheme(String(storageTheme));
      }, 200);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggler = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header theme={theme} themeToggler={themeToggler} />

      <main>
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
