import PageLayout from "../../layouts/page";
import { useState } from "react";
import SecondPageData from "../../fixtures/secondPage.json";
import Card from "../../components/Card";
import '../../pages/secondpage/style.css';

const SecondPage = () => {
  return (
    <PageLayout title="Друга сторінка">
      <div className="second-page">
        <div className="container">
          {SecondPageData.map((object) => {
            return (
              <Card title={object.title} buttonText={object.buttonName}>
                <div className="description">
                  <img src={object.img} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default SecondPage;
