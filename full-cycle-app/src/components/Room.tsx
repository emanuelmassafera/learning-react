import React, { useEffect, useState, MouseEvent } from 'react';
import axios from 'axios';

type Props = {

}

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: {
      name: string,
    }
}

export const Room = (props: Props) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data));
    }, []);   
    
    function handleClick(event: MouseEvent<HTMLLIElement>) {
        alert('Clicou');
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={handleClick}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}