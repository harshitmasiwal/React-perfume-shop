// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';
import Footer from '../components/Footer';

// import './Home.css'; // Import the custom CSS for Home page

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner />
      <Container
        id="products"
        className="bg-zinc-900 flex flex-col items-center px-4 py-8 w-full"
      >
        <h2 className="text-center max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          Our Top Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Home;
