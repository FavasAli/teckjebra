import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsScreen = () => {
  const [filter, setFilter] = useState("");

  const [product, setproduct] = useState([]);
  const [categories, setCategories] = useState([]);

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
      setproduct(data.products);
    } catch (error) {}
  };

  const fetchCategory = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${userInfoFromLocalStarage.token}`,
        },
      };
      const { data } = await axios.get(
        `https://dummyjson.com/products/categories`,
        config
      );
      console.log("data. sscateov", data);
      setCategories(data);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("userInfoFromLocalStarage", userInfoFromLocalStarage.token);
    fetchData();
  }, []);

  useEffect(() => {
    console.log("userInfoFromLocalStarage", userInfoFromLocalStarage.token);
    fetchCategory();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <br />
      <label>Choose a </label>
      <select value={categories}>
        {categories &&
          categories.map((item) => (
            <>
              <option>{item}</option>
            </>
          ))}
      </select>

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
        {product
          ? product
              .filter((item) => {
                if (filter === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(filter.toLowerCase())
                ) {
                  return item;
                }
              })

              .map((item) => (
                <tbody>
                  <td>{item.id}</td>
                  <Link to={`/product/${item.id}`}>
                    <td>{item.title}</td>
                  </Link>
                  <td>{item.brand}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tbody>
              ))
          : "no data"}
      </table>
    </div>
  );
};

export default ProductsScreen;
