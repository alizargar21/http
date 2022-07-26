import Discussion from "./components/Discussion.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout.jsx";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Layout>
        <ToastContainer />
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
