import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { 
    Container,
    Image,
    Info,
} from './styles';

interface ICard {
    name: string;
    status: string;
    species: string;
    location: {
        name: string;
    };
    image: string;
    episode: [];
}

interface IEpisode {
    name: string;
}

interface Props {
    card: ICard;
    episode: IEpisode;
}

const Card: React.FC<Props> = ( { card, episode }) => {
    
    return (
        <Container>
            <Image>
                <img src={card.image} alt="Imagem"/>
            </Image>

            <Info  alive={card.status === 'Alive'}>
                <div className="name">
                    <p>
                        {card.name}
                    </p>
                </div>

                <div className="status">
                    <p>
                        { card.status}
                    </p>
                </div>

                <div className="species">
                    <span>Specie</span>
                    <p>
                        { card.species }
                    </p>
                </div>

                <div className="location">
                    <span>Last known location</span>
                    <p>
                        { card.location.name }
                    </p>
                </div>

                <div className="first-seen">
                    <span>First seen in</span>
                    <p>
                        { episode.name }
                    </p>
                </div>
            </Info>
        </Container>
    );
};

export default Card;