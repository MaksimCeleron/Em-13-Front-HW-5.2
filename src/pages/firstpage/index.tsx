import PageLayout from "../../layouts/page"
import { useState } from "react";
import FirstPageData from './fixtures/firstPage.json'
import Card from './components/Card'

const FirstPage = () =>{
  return (
    <PageLayout title="Перша сторінка">
      FirstPageData.forEach(object => {
        FirstPageData.map(object => {
          <Card title=object.title buttonText=object.buttonname>
            <div class="description">object.list.join(' ')</div>
          </Card>
        })
      })
    </PageLayout>
  )
}

export default FirstPage