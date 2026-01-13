
import { Card } from './Card';

const CardList = () => {
    return (
        <div className="card-container">
        <Card to="/project1">
          <h2>Project 1</h2>
        </Card>
        <Card to="/project2">
          <h2>Project 2</h2>
        </Card>
        <Card to="/project3">
          <h2>Project 3</h2>
        </Card>
      </div>
    )
}

export default CardList;
