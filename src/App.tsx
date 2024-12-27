import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo.tsx';
import { UserInfoProps } from './models/UserInfoProps';
import { CardProps } from './models/CardProps.tsx';
import Card from './components/Card.tsx';


function App() {

  const users: UserInfoProps[] = [
    {name: 'Alex', age: 20, email: 'alex@email.com'},
    {name: 'Lisa', age: 32, email: 'lisa@email.com'},
    {name: 'Bob', age: 29, email: 'bob@email.com'}
  ]


  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <UserInfo {...user} />
        ))}
      </ul>
      <br />

      <Card>
        <h1>Children components</h1>
        <p>Numbers: 5, 7, 2, 0</p>
      </Card>
    </div>
  );
}

export default App;
