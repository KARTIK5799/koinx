import React, { useEffect, useState } from 'react';
import styles from './Pages.module.css'
import { useParams } from 'react-router';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import Cards from '../components/Cards/Cards';
import style from './CoinDetail.module.css'
import Anime from '../../src/assets/animated.png'
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
    <div className={styles.pageContainer}>
      <BreadCrums coin={coin} />
      <div className={style.cardSection}>
        <div className={style.primaryCardsSection}>
          <Cards charted={true} />
          <Cards performance={true} />
          <Cards sentiment={true} />
          <Cards about={true} />
          <Cards tokonomics={true} />
          <Cards team={true} />
        </div>
        <div className={style.secondaryCardSection}>
          <div className={style.cardOne}>
            <h2>Get Started With KoinX for Free</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              cupiditate sit amet repellat deleniti voluptas, consequatur
              recusandae soluta cumque quo, asperiores eius, unde iusto dolore.
            </p>
            <img src={Anime} alt="" />
            <p className={style.joinfree}>Get Started for Free 
            <span class="material-symbols-outlined">trending_flat</span>
            </p>
          </div>

          <div className={style.cardTwo}>
            <h2>Trending Coins (24H)</h2>
            <div> Etheriam</div>
            <div> bitcoin</div>
            <div>polygon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
