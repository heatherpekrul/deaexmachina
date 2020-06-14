import React from 'react';
import Blizzard from './img/blizzard.svg';
import NintendoSwitch from './img/nintendo-switch.svg';
import Steam from './img/steam.svg';
import Twitch from './img/twitch.svg';

const Platforms = () => {
  return (
    <section className="app__platforms container">
      <h1>
        Platforms
      </h1>
      <ul className="app__platforms__list">
        <li>
          <img src={Steam} alt="" />
          <h2>Steam</h2>
          <p>
            <a href="https://steamcommunity.com/id/dea-ex-machina/" className="btn">Link to Profile</a>
          </p>
        </li>

        <li>
          <img src={Blizzard} alt="" />
          <h2>Battle.net</h2>
          <p>DEAEXMACHINA#11426</p>
        </li>

        <li>
          <img src={NintendoSwitch} alt="" />
          <h2>Nintendo Switch</h2>
          <p>SW-2690-5166-3424</p>
        </li>

        <li>
          <img src={Twitch} alt="" />
          <h2>Twitch</h2>
          <p>
            <a href="https://www.twitch.tv/DeaExMachina13" className="btn">Link to Profile</a>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Platforms;