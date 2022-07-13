import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  // Declare a new state variable for the filtered products
  const [products, setProducts] = useState([]);

  // Declare a new state variable for the categories
  const [filterProdcuts, setFilterProdcuts] = useState([]);

  /**
   * Function for fetch the products
   */
  const getProducts = () => {
    try {
      axios
        .get(
          cat
            // ? `http://localhost:5000/api/products?category=${cat}`
             `http://localhost:5000/api/products`
        )
        .then((res) => {
          setProducts(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, [cat]);
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
