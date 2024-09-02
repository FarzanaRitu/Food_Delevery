import React from 'react'
import './ExploreMenue.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id ="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-test">Choose from a diverse menu.Choose from a diverse menuChoose from a diverse menuChoose from a diverse menuChoose from a diverse menuChoose from a diverse menuChoose from a diverse menu</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          console.log(index);
        
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name) } key={index} className="explore-menu-list-items">
              <img className={category==item.menu_name?"active":""}src={item.menu_image} alt=''/>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
