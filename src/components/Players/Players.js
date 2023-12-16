import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Players.scss'
import Player from '../Player/Player';

const Players = () => {

    const {numberOfPlayers}  = useParams();

    const numberMap = {
        twenty: 20,
        nineteen: 19,
        eighteen: 18,
        seventeen: 17,
        sixteen: 16,
        fifteen: 15,
        bullseye: 25
    };

    const createInitialScores = () => {
        let initialScores = {};
        for (let i = 1; i <= numberOfPlayers; i++) {
            initialScores[`player${i}`] = {
                twenty: 0, nineteen: 0, eighteen: 0, seventeen: 0, sixteen: 0, fifteen: 0, bullseye: 0,
                total: 0 
            };
        }
        return initialScores;
    };

    const [playersScores, setPlayersScores] = useState(createInitialScores());
    useEffect(() => {
        setPlayersScores(createInitialScores());
    }, [numberOfPlayers]);

    const handleScore = (playerId, number) => {
        setPlayersScores(prevScores => {
            const newScores = { ...prevScores };
            newScores[`player${playerId}`][number] += 1;
            console.log(newScores[`player${playerId}`][number]);
            if (newScores[`player${playerId}`][number] > 3) {
                // Provjera i azuriranje skorova ostalih igraca
                Object.keys(newScores).forEach(id => {
                    if (id !== playerId && newScores[id][number] < 3) {
                        newScores[id].total += numberMap[number]; // Dodavanje ukupnom skoru
                    }
                });
            }
            return newScores;
        });
    };

    const handleScoreMinuse = (playerId, number) => {
        setPlayersScores(prevScores => {
            const newScores = { ...prevScores };
            if (newScores[`player${playerId}`][number] === 0)
                newScores[`player${playerId}`][number] = 0;
            else
                newScores[`player${playerId}`][number] -= 1;



            console.log(newScores[`player${playerId}`][number]);
            return newScores;
        })
    }


    return (
        <>
            {Array.from({ length: numberOfPlayers }).map((_, index) => (
                <Player
                    key={index}
                    id={index + 1}
                    scores={playersScores[`player${index + 1}`]}
                    onScore={handleScore}
                    onScoreMinuse={handleScoreMinuse}
                />
            ))}
        </>
    );
};

export default Players;