import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const { id } = useParams();
  const paramId = id;
  const [product, setproduct] = useState([]);
  const userInfoFromLocalStarage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : [];

  const productData = product.find((item) => item.id == paramId);
  console.log("productsss", productData);
  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${userInfoFromLocalStarage.token}`,
        },
      };
      const { data } = await axios.get(
        `https://dummyjson.com/products`,
        config
      );
      console.log("data.v", data.products);
      setproduct(data.products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <>{productData ? 
    <div style={{padding:"20px"}}>
        <h1>{productData.title}</h1>
        <h4>{productData.brand}</h4>
        <p>{productData.description}</p>
        <h3>{productData.price}</h3>
        <p>{productData.rating}</p>
        <h2>{productData.stock}</h2>
    </div>
    
   : "no data"}</>;
};

export default SingleProduct;
