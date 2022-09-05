import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import "./ProductComponent.css";
const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id, title, image, price, category} = product;
      return(
        
        <div className='grid-item' key={id}>
        <Link to={`/product/${id}`}>
        <div className='ui link cards'>
          <div className='card'>
            <div className='img-contain'>
                <img className='image' src={image} alt= {title} />
            </div>
            <div className='content'>
              <div className='title'>{title}</div>
              <div className='meta-price'>$ {price}</div>
              <div className='meta'>{category}</div>
            </div>
          </div>
        </div>
        </Link>
        
    </div>
    );
  });
  return (
    <>{renderList}</>
  );
};

export default ProductComponent;
