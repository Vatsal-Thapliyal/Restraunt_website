import React, { useState } from 'react';
import Card from './card';
import Menu from './menuApi';
import Navbar from './navbar';

const uniqueList = [
  ...new Set(Menu.map((currItem) => {             //Spread operator ...
    return currItem.category
}))];
console.log(uniqueList);



const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    const updatedList = Menu.filter((currentItem) => {
      return currentItem.category === category;
    });

    setMenuData(updatedList);
  };



  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>

      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 absolute top-16 z-0'>
        {menuData.map((currentEle) => (
          <Card key={currentEle.id} item={currentEle} />
        ))}
      </div>
    </>
  );
};

export default Restaurant;
