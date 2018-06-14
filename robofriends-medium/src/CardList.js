import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  // รับค่า robots ทั้งหมด
   return(
     <div>
     {
       /*ทำการวนลูปออกมาแต่ละอัน โดยการใช้ฟังก์ชัย map แล้วเรียกใช้ component Card
       เพื่อให้เพื่อให้ออกเป็นรูป Card*/
       robots.map((user, i) => {
         return (
           <Card key={i} id={user.id} name={user.name} email={user.email} />
         );
       })
     }
   </div>
   )
}

export default CardList;
