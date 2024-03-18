import React from 'react';
import './css/App-header.css';
import { navOptions } from '../nav/nav';
import { Link } from 'react-router-dom';
//function NewPage


function Header() {
  return (
    <div className='in-body'>
      <header className='App-header'>
        <h1 className='h1'>
          Golf Betting
        </h1>
      <div className='nav'>
        {/*need to figgure out why my nav buttons arent working as i want them to nav to individual files */}
        <Link to={navOptions[0].href}>
          <button>
           <span>
            Home
           </span>
         </button>
        </Link>

        <Link to={navOptions[1].href}
        <button>
          <span>
            Betting Tips
          </span>
        </button>
        <a href='/livegolfodds.js-LiveOdds'>
          <span>
            Live Odds
          </span>
        </a>
        <button onClick={() => {window.location.href = './Betsoftheweek.jsBetsoftheweek'}}>
          <span>
            Bets of the Week
          </span>
        </button>
        <button onClick={() => {window.location.href = './golfbettingsites.js-bettingsites'}}>
          <span>
            Betting Sites
          </span>
        </button>
      </div>  
      </header>
    </div> 
  );

}


export default Header;

