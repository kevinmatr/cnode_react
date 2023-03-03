import "./App.css";
import { routes } from "./routers";
import { NavLink, Route, Routes, useRoutes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="top">
        <div className="top_container wrap">
          <div>
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" />
          </div>
          <div>
            {routes
              .filter((item) => !item.hidden)
              .map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {item.title}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
      <div className="main wrap">
        <div className="main_left">{useRoutes(routes)}</div>
        <div className="main_ right"></div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default App;
