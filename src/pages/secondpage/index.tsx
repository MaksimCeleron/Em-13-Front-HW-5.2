import PageLayout from "../../layouts/page";
import { useState } from "react";
import SecondPageData from "../../fixtures/secondPage.json";
import Card from "../../components/Card";
import './style.css';

const SecondPage = () => {
  return (
    <PageLayout title="Друга сторінка">
      <div className="container">
        {SecondPageData.map((item, index) => {
          return (
            <Card key={index} title={item.title} buttonText={item.buttonName}>
              <div className="description">
                <img src={item.img} />
              </div>
            </Card>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default SecondPage;
