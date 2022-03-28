

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from "./ProductComponent"
import { setProducts } from "../redux/actions/product"
import axios from 'axios'

const ProductListing = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response= await axios
    .get(`https://fakestoreapi.com/products`)
    .catch((error) => {
      console.log('Error: ', error);
    });
    dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
  },[])
  // console.log("Products: ", products);
  return(
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing