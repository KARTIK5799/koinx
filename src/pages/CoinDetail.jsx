import React, { useEffect, useState } from 'react';
import style from './Pages.module.css'
import { useParams } from 'react-router';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import Cards from '../components/Cards/Cards';
// import { fetchCoinDetail } from '../api/CoinData';

const CoinDetail = () => {
  const { coin } = useParams();
  // const [coinData, setCoinData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetchCoinDetail(coin);
  //     setCoinData(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching coin data:", error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData();
  // }, [coin]);

  useEffect(()=>{
    document.title = `Coin Detail - ${coin}`;
  })
  return (
    <div className={style.pageContainer}>
      <BreadCrums coin={coin}/>
      <div className={style.cardSection}>
        <div className={style.primaryCardsSection}>
          <Cards charted={true}/>
          <Cards performance={true}/>
          <Cards sentiment={true}/>
        </div>
        <div className={style.secondaryCardSection}>

        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
