import { BASE_URL } from '../global'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Description from './hiddenDivFunc'

const Pizza = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`${BASE_URL}games/`);
      setGames(response.data);
    };
    getGames();
  }, []);

  return (
    <div className="pizza-container">
      <div className='pizza-header'>
        <h1> G  A  M  E  S </h1>
      </div>
      <div className='pizza-map'>
        {games.map((game, key) => (
          <div className='pizza-link' key={game._id}>
            <div className='pizza-card'>
              <img className='pizza-card-image' src={game.image} alt={game.title}/>
              <h4>{game.title} ${game.price}</h4>
              <Description
                description={game.description}
                itemId={game._id}
                price={game.price}
                userData={props.userData}
                setUserData={props.setUserData}
                setUpdateUser={props.setUpdateUser}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizza;