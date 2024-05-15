import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/item/Item';


export const ShopCategogry = (props) => {
  
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
         <img className='shopcategory-banner' src={props.banner} alt="" />
         <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
          </div>
         </div>
         <div className="shopcategory-products">
          {all_product.map((item,i) => props.category === item.category ? <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} /> : null )}
         </div>
         <div className="shopcategory-loadmore">
          Explore More
         </div>
    </div>
  )
}
