import PageLayout from "../../layouts/page";
import { useState } from "react";
import FirstPageData from "../../fixtures/firstPage.json";
import Card from "../../components/Card";

const FirstPage = () => {
  return (
    <PageLayout title="Перша сторінка">
      {FirstPageData.map((object) => {
        return (
          <Card title={object.title} buttonText={object.buttonName}>
            <div className="description">
              <ul>
                {object.list.map(item => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </Card>
        );
      })}
    </PageLayout>
  );
};

export default FirstPage;
