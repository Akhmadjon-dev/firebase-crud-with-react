import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db, fireStore } from '../config/firebase-config';
import { getUsers, addUser, updateUser, deleteUser } from '../db/userQueries';

const initialData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
}

function Users() {
    const [users, setUsers] = useState([]);
    const [isUpdateOn, setIsUpdateOn] = useState(false);
    const [user, setUser] = useState(initialData);
    const usersColletionRef = collection(db, 'users');

    useEffect(() => {
        (async () => {
            const users = await getUsers(usersColletionRef);
            setUsers(users);
        })();
        fireStore.collection('users').onSnapshot(snapshot => console.log(snapshot));
    }, []);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if(isUpdateOn) {
            await updateUser(usersColletionRef, user.id, user);
            setIsUpdateOn(false);
        }else{
            addUser(usersColletionRef, user);
        }
        setUser(initialData);
    }

    const updateTrigger = (id) => {
        const user = users.find(user => user.id === id);
        setUser(user);
        setIsUpdateOn(true);
    }

    const deleteHandler = (id) => {
        deleteUser(usersColletionRef, id);
    }
    
    console.log(users, 'data');
  return (
    <div>
        <h1>Users</h1>
        <form onSubmit={submitHandler}>
            <input value={user.name} onChange={inputHandler} type="text" name="name" placeholder='Enter name' />
            <input value={user.email} onChange={inputHandler} type="text" name="email" placeholder='Enter email' />
            <input value={user.phone} onChange={inputHandler} type="tel" name="phone" placeholder='Enter phone' />
            <input value={user.age} onChange={inputHandler} type="number" name="age" placeholder='Enter age' />
            <input value={user.password} onChange={inputHandler} type="text" name="password" placeholder='Enter password' />
            <button type="submit">Create User</button>
        </form>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <div>
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <span>{user.phone}</span>
                    </div>
                    <div>
                        <span>{user.age}</span>
                    </div>
                    <div>
                        <span>{user.password}</span>
                    </div>
                    <div>
                        <button onClick={() => updateTrigger(user.id)} >Update</button>
                    </div>
                    <div>
                        <button onClick={() => deleteHandler(user.id)} >Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users