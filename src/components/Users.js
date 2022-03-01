import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase-config';
import { getUsers } from '../db/readQueries';

function Users() {
    const [users, setUsers] = useState([]);
    const usersColletionRef = collection(db, 'users');

    useEffect(() => {
        (async () => {
            const users = await getUsers(usersColletionRef);
            setUsers(users);
        })();
    }, []);
    
    
    console.log(users, 'data');
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users