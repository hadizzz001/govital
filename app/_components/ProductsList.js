// components/ProductsList.js
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const ProductsList = ({ subbrand }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products`);
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const data = await response.json();
  
        // Filter products based on subbrand if subbrand is provided
        const filteredProducts = subbrand
          ? data.filter(product => product.subbrand === subbrand)
          : data;
  
        setProducts(filteredProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, [subbrand]);
  

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  if (products.length === 0) return <p>No products found for subbrand "{subbrand}".</p>;

  return (
    <div className="relative w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="product-slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <Link href={`/product?id=${product._id}`} passHref>
              <div className="cursor-pointer border p-4 transition relative">
                <img
                  src={product.img?.[0] }
                  alt={product.title}
                  className="w-full h-full object-cover mb-3" 
                />
                <h3 className="text-lg font-bold mb-2" style={{textAlign:'center', color:'#6dbe33'}}>{product.title}</h3>
              </div>

            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
