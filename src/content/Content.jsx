import s from "./Content.module.css";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Route } from "react-router-dom";
import { Portfolio } from "./portfolio/Portfolio";

export const Content = () => {
  return (
    <div className={s.content_container}>
      <Route path="/home" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/portfolio" render={() => <Portfolio />} />
    </div>
  );
};
