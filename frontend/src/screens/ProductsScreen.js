import React, {useEffect,useState}from "react";
import axios from "axios";

const ProductsScreen = () => {

    const [product,setproduct]=useState([])
  const userInfoFromLocalStarage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : [];
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
      setproduct(data.products)
    } catch (error) {}
  };

  useEffect(() => {
    console.log(
      "userInfoFromLocalStarage",
      userInfoFromLocalStarage.token
    );
    fetchData();
  }, []);
  return <div>
      <table className="boarder border-1p" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>brand</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        
{product && product.map(item=>
   <tbody>
     <td>{item.id}</td>
     <td>{item.title}</td>
     <td>{item.brand}</td>
     <td>{item.price}</td>
     <td>{item.category}</td>

         
   </tbody>
)}
        
      </table>
  </div>;
};

export default ProductsScreen;
