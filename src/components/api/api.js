import axios from "axios";
import { useEffect, useState } from "react";

const GetAllData = (urlParam) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    if (urlParam === undefined) {
        urlParam = '';
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products${urlParam}`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [urlParam]);

    return { data, error }; 
};

export default GetAllData