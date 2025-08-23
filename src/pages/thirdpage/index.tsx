import PageLayout from "../../layouts/page";
import { useState } from "react";
import ThirdPageData from "../../fixtures/thirdPage.json";
import Card from "../../components/Card";
import './style.css';

const ThirdPage = () => {
  return (
    <PageLayout title="Третя сторінка">
      <div className="third-page">
        <div className="container">
          {ThirdPageData.map((object) => {
            return (
              <Card title={object.title} buttonText={object.buttonName}>
                <div className="price">${object.price}</div>
                <div className="description">{object.description}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default ThirdPage;
