import './App.css';
import { Riccardo } from './User';
import CardList from './CardList';
import TechStack from './TechStack';

function LandingPage() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Riccardo />
      <CardList />
      <TechStack />
    </div>
  );
}

export default LandingPage;
