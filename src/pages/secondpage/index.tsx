import PageLayout from "../../layouts/page";
import { useState } from "react";
import SecondPageData from "../../fixtures/secondPage.json";
import Card from "../../components/Card";

const SecondPage = () => {
  return (
    <PageLayout title="Друга сторінка">
      {SecondPageData.map((object) => {
        return (
          <Card title={object.title} buttonText={object.buttonName}>
            <div className="description">
              <img src={object.img} />
            </div>
          </Card>
        );
      })}
    </PageLayout>
  );
};

export default SecondPage;
