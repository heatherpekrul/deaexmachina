import React from 'react';
import Axios from 'axios';

class Overwatch extends React.Component {
  constructor() {
    super();
    this.state = { stats: false };
  }

  componentDidMount() {
    this.getStats();
  }

  getStats = async () => {
    let stats = false;
  
    await Axios.get('https://ow-api.com/v1/stats/pc/us/DeaExMachina-11426/complete')
    .then(function (response) {
      stats = response.data;

      Object.keys(stats.quickPlayStats.topHeroes).forEach((v, i) => {
        const timeElements = stats.quickPlayStats.topHeroes[v].timePlayed.split(':');

        if (timeElements.length === 2) {
          stats.quickPlayStats.topHeroes[v].timePlayed = `00:${stats.quickPlayStats.topHeroes[v].timePlayed}`;
        } else if (timeElements.length === 1) {
          stats.quickPlayStats.topHeroes[v].timePlayed = `00:00:${stats.quickPlayStats.topHeroes[v].timePlayed}`;
        }
      });

      stats.topHeroesByPlayTime = Object.keys(stats.quickPlayStats.topHeroes).sort((a, b) => {
        const [aHours, aMinutes] = stats.quickPlayStats.topHeroes[a].timePlayed.split(':');
        const [bHours, bMinutes] = stats.quickPlayStats.topHeroes[b].timePlayed.split(':');

        const aTotalPlayTime = parseInt(aHours) + Number(aMinutes / 60);
        const bTotalPlayTime = parseInt(bHours) + Number(bMinutes / 60);

        if (aTotalPlayTime > bTotalPlayTime) {
          return -1; // a has more play time
        }

        return 1; // b has more play time
      }).slice(0, 10);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    this.setState({ stats: stats });
  }

  render() {
    if (this.state.stats) {
      return (
        <section className="app__overwatch">
          <h1>Overwatch</h1>
          <img src={this.state.stats.ratingIcon} alt="Rating" />

          <h2>Quick Play Heroes by Time Played</h2>
          <ul>
            {this.state.stats.topHeroesByPlayTime.map((v, i) => {
              return (
                <li key={i}>
                  { v } ({ this.state.stats.quickPlayStats.topHeroes[v].timePlayed })
                </li>
              )
            })}
          </ul>

          <h2>Best Competitive Stats</h2>
          <ul>
            <li>
              Most Healing: { this.state.stats.competitiveStats.careerStats.allHeroes.best.healingDoneMostInGame }
            </li>
            <li>
              Most Eliminations: { this.state.stats.competitiveStats.careerStats.allHeroes.best.eliminationsMostInGame }
            </li>
            <li>
              Best Kill Streak: { this.state.stats.competitiveStats.careerStats.allHeroes.best.killsStreakBest}
            </li>
            <li>
              Most Defensive Assists: { this.state.stats.competitiveStats.careerStats.allHeroes.best.defensiveAssistsMostInGame }
            </li>
          </ul>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Overwatch;