"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Header from "../_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../_components/Footer";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import React, { useState, useEffect, Suspense } from 'react';

const Dashboard = ({ cat, brnd, subbrnd }) => {
  const [allTemp, setTemp] = useState([]); 
  const [allBrands, setBrands] = useState([]);
  const [allsubBrands, setsubBrands] = useState([]);
  const [allCategories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({
    Category: false,
    subbrands: false,
    Brands: false,
  }); // Initialize with all categories expanded
  const [loading, setLoading] = useState(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState(12);  // Number of items to show
  const [totalItemsCount, setTotalItemsCount] = useState(0); // Total number of items

  const router = useRouter();


  // Fetch "allTemp" (Default Data) - All Products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (Array.isArray(data)) {
          setTemp(data);
          setFilteredData(data); // Initially display allTemp
          setTotalItemsCount(data.length); // Set the total number of items
          console.log("data: ",data);
          
        } else {
          console.error("Expected an array, but got:", data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  // Fetch based on "cat" parameter
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
  
        // Fetch all products, brands, and subbrands in parallel
        const [productsRes, brandsRes, subbrandsRes] = await Promise.all([
          fetch(`/api/products`),
          fetch(`/api/brand`),
          fetch(`/api/subbrand`)
        ]);
  
        if (!productsRes.ok || !brandsRes.ok || !subbrandsRes.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const [products, brands, subbrands] = await Promise.all([
          productsRes.json(),
          brandsRes.json(),
          subbrandsRes.json()
        ]);
  
        let filteredData = [];
  
        if (cat) {
          filteredData = products.filter(product => product.category === cat);
        } else if (brnd) {
          filteredData = products.filter(product => product.brand === brnd);
        } else if (subbrnd) {
          filteredData = products.filter(product => product.subbrand === subbrnd);
        } else {
          filteredData = allTemp; // Fallback to allTemp if no filters are applied
        }
  
        setFilteredData(filteredData);
        setTotalItemsCount(filteredData.length);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setFilteredData([]);
        setTotalItemsCount(0);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategoryData();
  }, [cat, brnd, subbrnd, allTemp]);
  

 

  // Fetch brands 
  useEffect(() => {
    const fetchB = async () => {
      try {
        const response = await fetch("/api/brand");
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };
    fetchB();
  }, []);

  useEffect(() => {
    const fetchB = async () => {
      try {
        const response = await fetch("/api/subbrand");
        const data = await response.json();
        setsubBrands(data);
      } catch (error) {
        console.error("Failed to fetch subbrands:", error);
      }
    };
    fetchB();
  }, []);

  useEffect(() => {
    const fetchB = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch category:", error);
      }
    };
    fetchB();
  }, []);

  // Handle Search Functionality
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = searchQuery.toLowerCase().trim();
      const filtered = allTemp.filter(item =>
        item.title.toLowerCase().includes(query)  
      );
      setFilteredData(query ? filtered : allTemp);
      setTotalItemsCount(query ? filtered.length : allTemp.length);
    }
  };

  // Handle Category Expansion
  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle Show More Button Click
  const handleShowMore = () => {
    setVisibleItemsCount((prevCount) => {
      // Don't allow visibleItemsCount to exceed totalItemsCount
      const newCount = prevCount + 12;
      return newCount > totalItemsCount ? totalItemsCount : newCount;
    });
  };

  const allItemsLoaded = visibleItemsCount >= totalItemsCount; // Check if all items are displayed

  return (
    <>
       
      <div className="p-4 flex justify-center items-center mt-[100px] " >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap   ">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-2 md:p-4 bg-gray-100">

          <div >
            <h3
              onClick={() => handleCategoryClick('Brands')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Brands
              {expandedCategories['Brands'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Brands'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allBrands.map((item, index) => (
                  <li key={index}>
                    <a href={`?brand=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>


          
          <div>
            <h3
              onClick={() => handleCategoryClick('subbrands')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Sub brands
              {expandedCategories['subbrands'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['subbrands'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allsubBrands.map((item, index) => (
                  <li key={index}>
                    <a href={`?subbrnd=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

           
          <div className="mt-4">
            <h3
              onClick={() => handleCategoryClick('Category')}
              className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-800"
            >
              Category
              {expandedCategories['Category'] ? <AiOutlineUp /> : <AiOutlineDown />}
            </h3>
            {expandedCategories['Category'] && (
              <ul className="pl-4 mt-2 space-y-1">
                {allCategories.map((item, index) => (
                  <li key={index}>
                    <a href={`?cat=${item.name}`} className="text-gray-600 hover:text-blue-500 transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4">
          {loading ? (
            <p>Loading...</p>
          ) : filteredData.length === 0 ? (
            <p>No data available for this category.</p> // Show this message if no data is available
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(filteredData) && filteredData.slice(0, visibleItemsCount).map((item, index) => (
                <a href={`/product?id=${item._id}`} className="text-black hover:text-[#0b5cad] transition">
                  <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
                    {item.img && (
                      <div className="relative">
                        <img
                          src={item.img[0]}
                          alt={item.title}
                          className="w-full aspect-[1/1] object-cover mb-4 transition-all duration-300"
                        />
                        <img
                          src={item.img[1]}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                        /> 
                      </div>

                    )}
                    <h2 style={{ textAlign: 'center' }} className="font-semibold text-lg text-[#0b5cad] mt-4">{item.title || `Item ${index + 1}`}</h2>
                    <p style={{ textAlign: 'center' }} className="text-gray-600">{item.category || "No type available."}</p> 
                  </div>
                </a>
              ))}
            </div>
          )}

          {!allItemsLoaded && (
            <div className="mt-4 text-center">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>
      <style
  dangerouslySetInnerHTML={{ __html: "\n  header{\n    top:0;\n  }\n" }}
/>

    </>
  );
};


const PageWrapper = () => {
  const searchParams = useSearchParams();
  const cat = searchParams.get('cat');
  const brnd = searchParams.get('brand');
  const subbrnd = searchParams.get('subbrnd');

  return <Dashboard cat={cat} brnd={brnd} subbrnd={subbrnd} />;
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
