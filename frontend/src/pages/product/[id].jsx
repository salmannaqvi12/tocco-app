import LandingPage from "@/components/landingpage/index";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { instance } from '@/components/service/api';
function DetailProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await instance.get(`/product/${id}`);
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if(id){ fetchProduct();}
    
  }, [id]);

  return (
    <div>
      <LandingPage productData = {productData} />
    </div>
  );
}

export default DetailProduct;
