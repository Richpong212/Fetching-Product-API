import React from 'react';
import Products from './components/Products';
import useFetch from './hooks/useFetch';
const App = () => {
  const { products, loading, error } = useFetch();
  // STEP1: define all the states here
  // STEP3: render products / error message / loading message conditionally
  let contentElement = <Products products={products} />;
  {
    /*  if (check products length is more than 0) {
  }
  if (check there is error) {
    
  }
  if (check isLaoding is true) {
    
  }
*/
  }
  // Conditional Rendering Below
  return (
    <div>
      <h1 className="title">BD Store</h1>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {/* Rending the products conditionally */}
      {products.length > 0 && contentElement}
    </div>
  );
};

export default App;
