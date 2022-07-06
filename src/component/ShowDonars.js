import React from 'react'
import DonarsData from './DonarsData.js.js';
import DonarsCard from './DonarsCard.js';
import {Row} from "react-bootstrap"

function ShowDonars() {

  let Donars = DonarsData.map((data) => {
    return <DonarsCard data={data} />

  });

  return (
    <div>
       <br></br>
      <h1>شكراً لعطائكم</h1>
      <br></br>
      <h4>نشكر لكم عطائكم وسخائكم بأغلى ما تملكون وهي قطرات الدم لإحياء أشخاص مجهولين لكم يحتاجون قطرات الدم لتعود لهم حياتهم .</h4>
    <Row xs={1} md={3} className="g-4">  
    {Donars}
        </Row>
        </div>
  )
}

export default ShowDonars