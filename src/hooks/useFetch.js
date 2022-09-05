/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
const API_URL = 'https://fakestoreapi.com/products';

const useFetch = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // STEP2: fetch data here
  useEffect(() => {
    // fetch data from API_URL
    // set the data to products state

    //Using setTimeout to simulate a slow network for 2 sec to show loading state
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          setProducts(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
          setProducts([]);
        });
    }, 2000);
  }, []);
  return {products, loading, error}
}

export default useFetch
