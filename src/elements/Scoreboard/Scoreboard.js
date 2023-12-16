import React from 'react';
import './Scoreboard.scss';
import Players from '../../components/Players/Players';

const Scoreboard = () => {



    return (
        <div className="scoreboard">
            <h1 className="header-1">Don't miss the game</h1>
            <div className="cricket-scoreboard-wrapper">
                <Players />
            </div>

        </div>
    );
};

export default Scoreboard;