import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './WelcomePage.scss'

const WelcomePage = () => {

    const navigate = useNavigate();
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);

    const handleInputChange = (event) => {
        setNumberOfPlayers(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/scoreboard-screen/${numberOfPlayers}`);
    };


    return (
        <div className="welcome-page">
            <div className="form-container">
                <h1>WELCOME TO DART CRICKET GAME</h1>
                <Form className='form-box' onSubmit={handleSubmit}>
                    <h2>Please set number of the players</h2>
                    <Form.Control
                        type='number'
                        id='num'
                        max={4} min={2}
                        value={numberOfPlayers}
                        onChange={handleInputChange} />

                    <Button className='btn-play' type="submit">
                        Play
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default WelcomePage;