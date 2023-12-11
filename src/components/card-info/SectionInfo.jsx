import React from 'react';
import { cardInfo01, cardInfo02, cardInfo03 } from '../../images/Images';
import Card from './card/Card';

const SectionInfo = () => {
  return (
    <div className="pt-10 w-full max-w-[1100px] mx-auto p-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card 
        src={cardInfo01} 
        title={"Sun, Out 8, BOGO's"} 
        subtitle={"Throught 8/26"} 
      />
      <Card 
        src={cardInfo02} 
        title={"Brazillian Food"} 
        subtitle={"Street Palmer 128"} 
      />
      <Card 
        src={cardInfo03} 
        title={"Indian Barbecue"} 
        subtitle={"Without location here"} 
      />
    </div>
  )
}

export default SectionInfo;