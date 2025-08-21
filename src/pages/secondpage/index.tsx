import PageLayout from "../../layouts/page";
import { useState } from "react";
import FirstPageData from "../../fixtures/firstPage.json";
import Card from "../../components/Card";

const SecondPage = () => {
  return (
    <PageLayout title="Перша сторінка">
      {FirstPageData.map((object) => {
        return (
          <Card title={object.title} buttonText={object.buttonname}>
            <div class="description">{object.list.join(", ")}</div>
          </Card>
        );
      })}
    </PageLayout>
  );
};

export default SecondPage;
