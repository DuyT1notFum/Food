
import React from 'react';// eslint-disable-line no-unused-vars
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';
import PropTypes from 'prop-types';
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu" >
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'> Choose from a diverse menu futuring a delectable array of dishes</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prey=>prey===item.menu_name?"all":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                    
                )
            })}
        </div>
        <hr />
    </div>
    
  )
}
    ExploreMenu.propTypes = {
        category: PropTypes.string.isRequired,  
        setCategory: PropTypes.func.isRequired, 
    };

export default ExploreMenu