import React, { ReactNode } from 'react';
import "./style.css";

const Card = (title: string, buttonText: string, children: ReactNode) => {
  return (
    <div class="card">
      <div class="content">
        <div class="title">{title}</div>
        {children}
        <!--<div class="price">$39.99</div>
        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>-->
      </div>
        <button>
          {buttonText}
        </button>
  </div>
  );
};

export default Card;
