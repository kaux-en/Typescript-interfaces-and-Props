import React from 'react';
import { UserInfoProps } from '../models/UserInfoProps';


const UserInfo: React.FC<UserInfoProps> = (props) => {
    return (
        <div>
        name: {props.name} <br />
        age: {props.age} <br />
        email: {props.email} <hr />
        </div>
    )
};

export default UserInfo;