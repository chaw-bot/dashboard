import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configStore';
import { Dashboard } from "./components/Dashboard";
import { SalvagePage } from "./components/SalvagePage";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/salvages" element={<SalvagePage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
