import React from 'react';
import History from './History';
import NumberForces from './Numbers';
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <div className="row">
      <style jsx>{`
    div.splash img {
      height: 400px;
      width: 600px;
      margin-top: 10%;
      margin-left: 5%;
    }

    .centerText {
      text-align: center;
    }

    .imgDescription {
      width: 600px;
      margin-left: 5%;
      text-align: center;
    }

    #preludeImg {
      margin-top: 10%;
    }

    #armyImg{
      margin-top: 600%;
    }

    #parleyImg{
      margin-top: 400%;
    }

    #battleImg{
      margin-top: 950%;
    }

    #endImg{
      margin-top: 800%
    }

    #afterImg{
      margin-top: 630%
    }

    #ramsayImg{
      margin-top: 790%
    }

    .row{
      padding: 5% 3%;
    }

    
  `}
      </style>
      <h1>Welcome to Game of Thrones: Battle of the bastards</h1>
      <Link to="/houses">
        <h2 className="centerText">Click Here to view the families that participated</h2>
      </Link>
      <div className="col-md-5 col-sm-4">
        <History/>
        <NumberForces/>
      </div>
      <div className="col-md-3 splash">
        <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/25/1466442687-game-of-thrones-1.jpg" id="preludeImg"/>
        <h4 id="splashImg " className="imgDescription">Overview shot of The Battle of the Bastards</h4>
        <img src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/06/20160602_ep609_publicity_still_051.001540061-h_2016.jpg" id="armyImg"/>
        <h4 className="imgDescription">Jon Snow in a sea of dead bodies</h4>
        <img src="https://media.giphy.com/media/xT8qAXuVTsspW55AlO/giphy.gif" id="parleyImg"/>
        <h4 className="imgDescription">Jon Snow preparing for war</h4>
        <img src="https://cdn-images-1.medium.com/max/1920/1*9oWlcJlGtzLulno5tlSGhg.jpeg" id="battleImg"/>
        <h4 className="imgDescription">Ongoing war at The Battle of the Bastards</h4>
        <img src="http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/6/59/ep59-ss08-1920.jpg" id="endImg"/>
        <h4 className="imgDescription">Arryn Forces arrive to assist in finishing the war</h4>
        <img src="https://i1.wp.com/joel-linger.com/wp-content/uploads/2016/06/game_of_thrones-battle_of_the_bastards13.png?fit=1366%2C768&ssl=1" id="afterImg"/>
        <h4 className="imgDescription">Jon and Sansa defending Winterfell</h4>
        <img src="https://wallpapersite.com/images/wallpapers/ramsay-bolton-3155x2100-rickon-stark-battle-of-the-bastards-game-of-952.jpg" id="ramsayImg"/>
        <h4 className="imgDescription">Ramsey telling Rickon that he can go back</h4>
      </div>
    </div>    
  );
};
 
export default Home;