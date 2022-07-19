import React, { useState, useEffect, useCallback } from "react";

import ProductList from "./ProductList";
/* import AddProduct from "./AddProduct"; */
import "./ProductListContent.scss";

function ProductListContent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/Local_documents/GitHub/tedis-project/be/controller/Products.php");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          sku: data[key].sku,
          name: data[key].name,
          price: data[key].price,
          specificAttribute: data[key].weight,
        });
      }

      setProducts(loadedProducts);
      console.log(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  async function addMovieHandler(movie) {
    // Course author used firebase API, but I didn't.
    // So I didn't try post option
    const response = await fetch("http://localhost:8000/be/index.php", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        //Would work even if not following line would be added, but
        // many API's might require this API
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no products.</p>;

  if (products.length > 0) {
    content = <ProductList products={products} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="content">
{/*       <section>
        <ProductAdd onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchProductsHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section> */}
    </div>
  );
}

export default ProductListContent;
