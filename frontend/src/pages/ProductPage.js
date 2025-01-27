import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ReviewsSection from '../components/ReviewsSection';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // Fix for selectedImage state

  useEffect(() => {
    // Fetch product details from API
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.images[0]); // Initialize selectedImage with the first image
        if (response.data.availableSizes.length > 0) {
          setSelectedSize(response.data.availableSizes[0]); // Set default size if available
        }
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>; // Loading state

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Product Page Container */}
      <div className="bg-zinc-900 text-white min-h-screen px-4 py-12">
        {/* Product Details Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Slider Section */}
          <div className="flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full max-w-md bg-zinc-800 p-4 rounded-lg shadow-lg">
              <img
                src={selectedImage} // Display the selected image
                alt={product.name}
                className="w-full object-cover rounded-md"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex mt-4 gap-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name}-${index}`}
                  className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === image ? 'border-blue-500' : 'border-zinc-700'
                  }`}
                  onClick={() => setSelectedImage(image)} // Update selectedImage on click
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">{product.name}</h2>
            <p className="text-gray-400 mb-6">{product.fullDescription}</p>
            <h4 className="text-3xl font-bold text-green-500 mb-6">
              ${product.price.toFixed(2)}
            </h4>

            {/* Size Selector */}
            <div className="mb-8 w-2/3">
              <label className="block text-lg font-medium mb-2">Available Sizes</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-2"
              >
                <option value="" disabled>
                  Select a size
                </option>
                {product.availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-800 transition">
                Add to Cart
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:scale-105 transition"
              >
                <Facebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:scale-105 transition"
              >
                <Twitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-105 transition"
              >
                <Instagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 container mx-auto">
          <div className="reviews-section">
            <ReviewsSection productId={product._id} reviews={product.reviews} />
          </div>
        </div>  
      </div>
    </>
  );
}

export default ProductPage;
