import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, SetData] = useState([]);
  const [ApiError, SetHandleError] = useState(null);
  const [isloading, SetLoading] = useState(true);

  useEffect(() => {
    //  I make it clear that this function will be asynchronous by declaring the async function in my callback
    const fetchData = async () => {
      try {
        let data = await fetch(url);
        //  we await the data that is being fetched
        let response = await data.json();

        SetData(response.data);

        console.log(response.data);

        SetLoading(false);
      } catch (error) {
        SetHandleError(error);
        SetLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return [data, ApiError, isloading];
};
export default useFetch;
