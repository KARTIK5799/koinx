import React, { useState } from "react";
import style from "./Cards.module.css";
import { Button } from "@mui/material";
import coinImg from "../../assets/Bitcoin.svg.webp";
// import TradingViewWidget from "../TradingChart/TradingViewWidget";
import PriceIndicator from "../PriceIndicator/PriceIndicator";
import Crousal from "../Crousal/Crousal";






const Cards = ({
  charted,
  performance,
  sentiment,
  about,
  tokonomics,
  team,
}) => {
  return (
    <div>
      <div className={style.cardContainer}>
        {charted && <CharterdCard />}
        {performance && <PerformanceCard/>}
        {sentiment && <SentimentCard/>}
        </div>
    </div>
  );
};

const CharterdCard = ({ data }) => {
  const [positive, setPositive] = useState(false);
  return (
    <div className={`${style.primaryCards} ${style.chartedCard}`}>
      <section className={style.cardTitleCharted}>
        <img src={coinImg} alt="" className={style.coinImg} />
        <h2>Bitcoin</h2>
        <p>BTC</p>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#768396",
            borderRadius: "7px",
            height: "43px",
            fontSize: "18px",
            textTransform: "none",
          }}
        >
          Rank #1
        </Button>
      </section>

      <section className={style.cardPriceCharted}>
        <div className={style.priceCharted}>
          <h2 className={style.usdPrice}>$46,953.04</h2>
          <p className={style.inrPrice}>₹39,42,343</p>
        </div>
        <div className={style.growthChangePill}>
          <p className={positive ? style.positiveGrowth : style.negativeGrowth}>
            <div className={positive ? style.positiveGrowthIndicator : style.negativeGrowthIndicator}>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            </div>
            2.51%
          </p>
        </div>
        <div className={style.chartedTime}>(24H)</div>
      </section>

      <section className={style.timespanCharted}>
        <h2>Bitcoin Price Chart (USD)</h2>

        <div className={style.timeSpanCharted}>
          <ul className={style.timeSpanLinks}>
            <li className={style.timeSpanLink}>1H</li>
            <li className={style.timeSpanLink}>24H</li>
            <li className={style.timeSpanLink}>1M</li>
            <li className={style.timeSpanLink}>3M</li>
            <li className={style.timeSpanLink}>6M</li>
            <li className={style.timeSpanLink}>1Y</li>
            <li className={style.timeSpanLink}>All</li>
          </ul>
        </div>
      </section>

      <section className={style.chartCharted}>
        {/* <TradingViewWidget /> */}
      </section>
    </div>
  );
};

const PerformanceCard=({data})=>{
    return(
        <div className={`${style.primaryCards} ${style.performanceCard}`}>
          <section className={style.performanceTitle}>
          <h2>Performance</h2>
          </section>

           <section className={style.performanceIndicators}>
            <PriceIndicator low={46930.22} high={49343.83} curr={48637.83} timespan={true}/>
            <PriceIndicator low={16930.22} high={493743.83} timespan={false}/>
           </section>

            <section className={style.performanceFundamentals}>

            <section className={style.performanceFundamentalsTitle}>
                <h3>Fundamentals</h3>
                <span className="material-symbols-outlined">
info
</span>
            </section>

            <section className={style.performanceFundamentalsData}>

                <div className={style.performanceFundamentalsDataSection1}>
                        <div className={style.performanceFundamentalsDataSection1Data}>
                            <p>Bitcoin Price</p>
                            <p>$16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection1Data}>
                            <p>24h Low / 24h High</p>
                            <p>$16,815/16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection1Data}>
                        <p>7d Low / 7d High</p>
                            <p>$16,815/16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection1Data}>
                            <p>Trading Volume</p>
                            <p>$16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection1Data}>
                            <p>Market Cap Rank</p>
                            <p>$16,815</p>
                        </div>
                </div>

                <div className={style.performanceFundamentalsDataSection2}>
                        <div className={style.performanceFundamentalsDataSection2Data}>
                            <p>Market Cap</p>
                            <p>$16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection2Data}>
                            <p>Market Cap Dominance</p>
                            <p>$16,815/16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection2Data}>
                        <p>Volume / Market Cap</p>
                            <p>$16,815/16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection2Data}>
                            <p>All Time High</p>
                            <p>$16,815</p>
                        </div>

                        <div className={style.performanceFundamentalsDataSection2Data}>
                            <p>All Time low</p>
                            <p>$16,815</p>
                        </div>
                </div>
            </section>
            </section>
        </div>
    )
    
}

const SentimentCard=({data})=>{
    var settings = {
       
      };
    
    return (
      <div className={`${style.primaryCards} ${style.sentimentCard}`}>
        <section className={style.sentimentTitle}>
          <h2>Sentiment</h2>
        </section>

        <section className={style.sentimentCrousal}>
          <div className={style.sentimenrCrousalsubTitle}>
            <h3>Key Events</h3>
            <span className="material-symbols-outlined">info</span>
          </div>



                 
             <section className={style.crousalcomponent}>
              <Crousal/>
             </section>

             <section className={style.sentimentEstimate}>
             <div className={style.sentimenrCrousalsubTitle}>
            <h3>Analyst Estimates</h3>
            <span className="material-symbols-outlined">info</span>
          </div>

          <div className={style.sentimentEstimatePercentages}>
            <div className={style.sentimentEstimatePercentage}>
              76%
            </div>
            <div className={style.sentimentEstimatePercentageList}>
                <div className={style.sentimentEstimatePercentagebuysell}>
                  Buy
                  <div className={style.buyBar}></div>
                  76%
                  </div>
                  <div className={style.sentimentEstimatePercentagebuysell}>
                  Hold
                  <div className={style.HoldBar}></div>
                  8%
                  </div>
                  <div className={style.sentimentEstimatePercentagebuysell}>
                  Sell
                  <div className={style.SellBar}></div>
                  16%
                  </div>
            </div>
          </div>
             </section>

        </section>
      </div>
    );

}

export default Cards;
