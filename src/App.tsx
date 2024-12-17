import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/layouts/Header";

import { Routers } from "./routers";
export const App = () => {
  return (
    <Router>
      <Header />
      <Routers />
    </Router>
  );
};
