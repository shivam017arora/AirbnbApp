import './App.css';
import bannImage from './bann.png';
import card1Image from './card1.png';
import card2Image from './card2.png';
import card3Image from './card3.png';
import data from './data.js';
import GradeIcon from '@mui/icons-material/Grade';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' alt='logo' />
    </nav>
  );
}

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bannImage} alt='airbng' />

      <div className='banner_text'>
        <h1>Online Experiences</h1>
        <h4>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home</h4>
      </div>
    </div>
  );
}

const Card = ({ title, rating, reviewCounts, price, imgSrc, desc }) => {

  var source = imgSrc[Math.floor(Math.random() * imgSrc.length)];
  return (
    <div className='card'>
      <div className='card_badge'>
        {title === 0 && <span>Sold Out</span>}
        {title !== 0 && <span>{title} Openings</span>}
      </div>
      <img src={source} alt='cardImage' />
      <div className='card_rating'>
        <GradeIcon className='airbnb_red' />
        <span> {rating} </span>
        <p> ({reviewCounts}) : USA </p>
      </div>
      <p> {desc} </p>
      <span> <strong> From ${price} </strong> / Person </span>
    </div >
  );
}

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <div className="cards">
        {data.map((card) => (
          <Card
            key={card.id}
            rating={card.stats.rating}
            reviewCounts={card.stats.reviewCount}
            price={card.price}
            title={card.openSpots}
            desc={card.title}
            imgSrc={[card1Image, card2Image, card3Image]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
