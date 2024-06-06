import { useEffect, useState } from "react";

const useFetch = (url)=>{
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(()=>{
  const fetchData = async()=>{
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
  
      setData(data.recipes);
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
      
    }
  }

  fetchData();

},[url])

return { data, loading, error };

}

export default useFetch;