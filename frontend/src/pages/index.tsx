import { useEffect, useState } from "react";
import Listing from "@/components/product/index";
import { instance } from "@/components/service/api";

function Index() {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/product");
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    
    <div>
      <Listing products={products}/>
    </div>
  );
}

export default Index;
