import React from 'react';
import { CardProps } from '../models/CardProps';


const Card: React.FC<CardProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default Card;