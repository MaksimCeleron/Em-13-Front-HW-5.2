import React, { ReactNode } from 'react';
import "./style.css";

interface CardProps {
  title: string;
  buttonText: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, buttonText, children }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="title">{title}</div>
        {children}
        {/*<div className="price">$39.99</div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>*/}
      </div>
      <button>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
