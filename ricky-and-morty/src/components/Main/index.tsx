import { format } from 'path';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../Card';

import { 
    Container
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

const Main: React.FC = () => {
    const [card, setCard] = useState<ICard>({
        name: "",
        status: "",
        species: "",
        location: {
            name:""
        },
        image: "",
        episode: [],
    });

    const [episode, setEpisode] = useState<IEpisode>({
        name: "",
    });

    const api = axios.create();

    useEffect(() => {
        api.get<ICard>(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random()*671)}`).then(response => {
            setCard(response.data);
        });
    }, [])

    useEffect(() => {
        api.get<IEpisode>(`${card.episode.reverse().pop()}`).then(response => {
            setEpisode(response.data);
        });
    }, [card])

    return (
        <Container>
            <Card card={card} episode={episode}/>
        </Container>
    );
};

export default Main;