import React, { useState, useEffect } from 'react';

import './Player.scss';

const Player = ({ id, scores, onScore, onScoreMinuse }) => {

    const [scoresView, setScoresView] = useState({ twenty: 0, nineteen: 0, eighteen: 0, seventeen: 0, sixteen: 0, fifteen: 0, bullseye: 0 });
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        // Na promjenu skora azuriramo vrijednost totalScore-a
        setTotalScore(scores.total);
    }, [scores.total]);

    const handleAddScore = (number) => {
        setScoresView(prevScores => {
            const newScores = { ...prevScores, [number]: prevScores[number] + 1 };
            return newScores;
        });
    };

    const handleSubtractScore = (number) => {
        setScoresView(prevScores => {
            // Skor ne moze da bude manji od 0
            const newScore = Math.max(0, prevScores[number] - 1);

            // Kreiranje novog objekata skorova sa ažuriranom vrednoscu
            const newScores = { ...prevScores, [number]: newScore };

            // Vracanje azuriranih skorova
            return newScores;
        });
    };

    const updateScoreStylePlus = (playerId, number, hit) => {
        const playerElement = document.getElementById(`player-${playerId}`);
        const numberElement = playerElement.querySelector(`.${number}`);
        const scoreElement = numberElement.querySelector(`.score-${scoresView[number] + 1}`);

        if (scoreElement) {
            scoreElement.style.backgroundColor = "#e31b23"; 
        }
    };

    const updateScoreStyleMinuse = (playerId, number, hit) => {
        const playerElement = document.getElementById(`player-${playerId}`);
        const numberElement = playerElement.querySelector(`.${number}`);
        const scoreElement = numberElement.querySelector(`.score-${scoresView[number]}`);

        if (scoreElement) {
            scoreElement.style.backgroundColor = "#44080A"; 
        }
    };

    const handleHitPlus = (number, hit) => {
        updateScoreStylePlus(id, number, hit);
        onScore(id, number);
    };

    const handleHitMinuse = (number, hit) => {
        updateScoreStyleMinuse(id, number, hit);
        onScoreMinuse(id, number);
    };

    return (
        <div className="player" id={`player-${id}`}>
            <h4 className="player-header">{`Player-${id}`}</h4>
            <div className="player-scoreboard">
                <div className="score twenty">
                    <span>20</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('twenty');
                            handleHitPlus('twenty', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('twenty');
                            handleHitMinuse('twenty', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score nineteen">
                    <span>19</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('nineteen');
                            handleHitPlus('nineteen', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('nineteen');
                            handleHitMinuse('nineteen', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score eighteen">
                    <span>18</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('eighteen');
                            handleHitPlus('eighteen', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('eighteen');
                            handleHitMinuse('eighteen', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score seventeen">
                    <span>17</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('seventeen');
                            handleHitPlus('seventeen', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('seventeen');
                            handleHitMinuse('seventeen', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score sixteen">
                    <span>16</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('sixteen');
                            handleHitPlus('sixteen', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('sixteen');
                            handleHitMinuse('sixteen', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score fifteen">
                    <span>15</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('fifteen');
                            handleHitPlus('fifteen', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('fifteen');
                            handleHitMinuse('fifteen', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score bullseye">
                    <span>B</span>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleAddScore('bullseye');
                            handleHitPlus('bullseye', '1');
                        }}>
                        add_circle
                    </span>
                    <div className="scores score-3"></div>
                    <div className="scores score-2"></div>
                    <div className="scores score-1"></div>
                    <span className="material-symbols-outlined icon-style-1"
                        onClick={() => {
                            handleSubtractScore('bullseye');
                            handleHitMinuse('bullseye', '1');
                        }}>
                        do_not_disturb_on
                    </span>
                </div>
                <div className="score-score">
                    <span>result</span>
                    <span className="result" id="result-1">{totalScore}</span>
                </div>
            </div>

        </div >
    );
};

export default Player;