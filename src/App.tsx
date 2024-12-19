import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";

import { Routers } from "./routers";
import { useRef } from "react";
export const App = () => {
  const footerRef = useRef<HTMLElement | null>(null)

  return (
    <Router>
      <Header footerRef={footerRef}/>
      <main>
        <Routers />
      </main>
      <Footer ref={footerRef} />
    </Router>
  );
};
