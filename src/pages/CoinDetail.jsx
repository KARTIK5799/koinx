import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCoinDetail } from '../api/CoinData';

const CoinDetail = () => {
  const { coin } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchCoinDetail(coin);
      setCoinData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [coin]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h2>{coinData?.name}</h2>
          <p>{coinData?.symbol}</p>
          {/* Add more data rendering as needed */}
        </div>
      )}
    </div>
  );
};

export default CoinDetail;
