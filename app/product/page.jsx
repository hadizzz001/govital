"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../_components/Footer";
import ProductsList from "../_components/ProductsList";


const PageContent = ({ search }) => {
  const [productData, setProductData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("details");
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`/api/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
  
      // Filter the product by ID
      const product = data.find(product => product._id === id) || null;
  
      return product;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetchProductData(search).then((data) => {
        setProductData(data);
        setLoading(false);
      });
    }
  }, [search]);

  useEffect(() => {
    if (productData) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const exists = cart.some((item) => item._id === productData._id);
      setIsInCart(exists);
    }
  }, [productData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productData) {
    return <p>No data found</p>;
  }

  const { id, img: imgs, title, subbrand, description, brand, category } = productData;

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollDown = () => {
    if (startIndex + visibleCount < imgs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleScrollLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentImageIndex < imgs.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const updateCartQuantity = (id, qty) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!currentCart.some((item) => item._id === product._id)) {
      currentCart.push({ ...product, quantity });
      localStorage.setItem("cart", JSON.stringify(currentCart));
      setIsInCart(true);
    } else {
      updateCartQuantity(product._id, quantity);
    }
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      const newQty = type === "increase" ? prev + 1 : Math.max(prev - 1, 1);
      if (isInCart && productData) {
        updateCartQuantity(productData._id, newQty);
      }
      return newQty;
    });
  };


  return (
    <>

 
      <div className="min-h-screen flex flex-col items-center  py-12 ">
        <div className="flex flex-col lg:flex-row w-full p-6 bg-white rounded-lg mt-20 ">
          {/* Image Slider */}

          <div>
            {/* PC Version */}
            <div className="hidden lg:flex space-x-4">
              {/* Thumbnail Slider */}
              <div className="relative flex flex-col">
                <div
                  className="relative overflow-hidden h-96"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="flex flex-col transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${startIndex * 100}px)`,
                    }}
                  >
                    {imgs.map((img, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg transition-transform duration-500 ease-in-out ${currentImageIndex === index
                          ? "scale-105  "
                          : "scale-95  "
                          }`}
                        style={{
                          transformOrigin: "center",
                          opacity:
                            startIndex <= index && index < startIndex + visibleCount
                              ? 1
                              : 0.5,
                        }}
                      >
                        <img
                          src={img}
                          alt={`thumbnail-${index}`}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => handleThumbnailClick(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={handleScrollUp}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 15l-7.5-7.5L4.5 15"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleScrollDown}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                    disabled={startIndex + visibleCount >= imgs.length}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 9l7.5 7.5L19.5 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="relative w-full h-[700px] overflow-hidden"
              >
                {imgs && imgs.length > 0 ? (
                  <>
                    <img
                      src={imgs[currentImageIndex]}
                      alt={`image-${currentImageIndex}`}
                      className="w-full h-full object-cover rounded-lg transition-all ease-in-out relative"
                      id="mainImage"
                    /> 
                  </>
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>

            {/* Mobile Version */}
            <div className="block lg:hidden flex flex-col items-center space-y-4">
              <div className="relative flex items-center w-full">
                {/* Left Arrow */}
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.5L7.5 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Thumbnails */}
                <div className="flex justify-center overflow-x-auto space-x-4 mx-8">
                  {imgs.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`thumbnail-${index}`}
                      className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out ${currentImageIndex === index
                        ? "scale-105 border-2 border-blue-600"
                        : "scale-95 border-2 border-transparent"
                        }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleScrollRight}
                  className="absolute right-0 bg-gray-200 hover:bg-gray-300 rounded-full p-2 disabled:opacity-50"
                  disabled={currentImageIndex === imgs.length - 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19.5l7.5-7.5L9 4.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Main Image */}
              <div className="relative w-full">
                {imgs && imgs.length > 0 ? (
                  <img
                    src={imgs[currentImageIndex]}
                    alt={`image-${currentImageIndex}`}
                    className="w-full h-64 object-cover rounded-lg transition-all duration-100 ease-in-out"
                  />
                ) : (
                  <div className="text-center text-gray-500">No main image available</div>
                )}
              </div>
            </div>
          </div>


          {/* Product Info */}
          <div className="flex-1 px-6 py-4">
            <h1 className="section--title"> {title}</h1>
            <h4  >Brand: {brand}</h4>
            <h4  >Sub brand: {subbrand}</h4>
            <h4  >Category: {category}</h4> 





            {/* <div className="flex items-center mt-6">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 text-center border border-gray-300"
              />
              <button
                onClick={() => handleQuantityChange("increase")}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-300"
              >
                +
              </button>
            </div> */}




            {/* {isInCart ? (
              <p className="block bg-green-100 text-green-600 text-center py-3 px-8 rounded-lg mt-6">
                Item added to cart successfully!
              </p>
            ) : (
              <a
                onClick={() => addToCart(productData)}
                className="block text-white text-center py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 mt-6 cursor-pointer"
                style={{backgroundColor:'#6dbe33', width:'50%'}}
              >
                Add to Cart
              </a>
            )} */}

<a
                href="https://wa.me/+96181949590"
                target="_blank"
                className="block text-white text-center py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 mt-6 cursor-pointer"
                style={{backgroundColor:'#6dbe33', width:'50%'}}
              >
                More info
              </a>
           



          </div>
        </div>


        <div className=" container  ">
          <div className=" "> </div>







          <div className="col-1"> </div>
        </div>
        {/* Full-Width Sections */}
        <div className="w-full bg-white mt-8 px-8 py-6 ">
          <h3 className="section--title">Product Details</h3>
          {activeSection === "details" && (
            <div
              className="prose lg:prose-xl max-w-[500px] custom-list"
              style={{ maxWidth: '500px' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

        </div>




        <h1 className="section--title">Related Products</h1>

        {subbrand ? <ProductsList subbrand={subbrand} /> : <p>Loading...</p>}



      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: "\n    .section--title {\ntext-align: left !important;\n}\n"
        }}
      />



    </>
  );
};

const PageWrapper = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  return <PageContent search={search} />;
};

const Page = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading parameters...</div>}>
        <PageWrapper />
      </Suspense>
      <Footer />
    </>
  );
};

export default Page;
