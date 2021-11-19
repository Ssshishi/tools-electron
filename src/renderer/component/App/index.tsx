import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from '../../pages/home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
