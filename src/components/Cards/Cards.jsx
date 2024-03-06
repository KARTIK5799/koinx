import React, { useState } from "react";
import style from "./Cards.module.css";
import { Button } from "@mui/material";
import coinImg from "../../assets/Bitcoin.svg.webp";
// import TradingViewWidget from "../TradingChart/TradingViewWidget";
import PriceIndicator from "../PriceIndicator/PriceIndicator";
import Crousal from "../Crousal/Crousal";
import PieChartWithCenterLabel from "../PieChart/PieChart";







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
        {about && <AboutCart/>}
        {tokonomics && <TokonomicsCard/>}
        {team && <TeamCard/>}
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

const AboutCart=({data})=>{
  return (
    <div className={`${style.primaryCards} ${style.aboutCard}`}>
      <section className={style.aboutTitle}>
        <h2>About Bitcoin</h2>
      </section>

      <section className={style.aboutcoin}>
        <h3>What is Bitcoin?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          dolores? Voluptate quidem delectus libero adipisci ratione quis
          voluptatum autem, ea ducimus non, dignissimos cupiditate laborum at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam praesentium. Quae, sed molestias similique magni unde
          exercitationem itaque sint atque, non quidem, tenetur ut!
        </p>
      </section>

      <section className={style.aboutcoin}>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          dolores? Voluptate quidem delectus libero adipisci ratione quis
          voluptatum autem, ea ducimus non, dignissimos cupiditate laborum at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam praesentium. Quae, sed molestias similique magni unde
          exercitationem itaque sint atque, non quidem, tenetur ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          dolores? Voluptate quidem delectus libero adipisci ratione quis
          voluptatum autem, ea ducimus non, dignissimos cupiditate laborum at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam praesentium. Quae, sed molestias similique magni unde
          exercitationem itaque sint atque, non quidem, tenetur ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          dolores? Voluptate quidem delectus libero adipisci ratione quis
          voluptatum autem, ea ducimus non, dignissimos cupiditate laborum at!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam praesentium. Quae, sed molestias similique magni unde
          exercitationem itaque sint atque, non quidem, tenetur ut!
        </p>
      </section>

      <section className={style.aboutCards}>
        <h3>Already Holding Bitcoin?</h3>
        <div className={style.aboutcard}>
          <div className={style.card}>
            <img
              src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className={style.cardDetail}>
              <h4>Calculate your profits</h4>
              <p>
                Check Now{" "}
                <span class="material-symbols-outlined">trending_flat</span>
              </p>
            </div>
          </div>
      
          <div className={style.card} style={{ background: "linear-gradient(130deg, #fe9565, #f13e38)" }}>

            <img
              src="https://images.pexels.com/photos/20230232/pexels-photo-20230232/free-photo-of-tulips-in-a-vase-against-a-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className={style.cardDetail}>
              <h4>Calculate your taxes</h4>
              <p>
                Check Now{" "}
                <span class="material-symbols-outlined">trending_flat</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const TokonomicsCard = () => {
 

  return (
    <div className={`${style.primaryCards} ${style.tokonomicsCard}`}>
      <section className={style.tokonomicsTitle}>
        <h2>Tokonomics</h2>
      </section>

      <section className={style.pieChartCard}>
        <div>
          <h4>Initial Distribution</h4>
        </div>
        <div className={style.pieChart}>
          <PieChartWithCenterLabel />
        </div>
        <div>
          <p className={style.pieChartText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quis, possimus maiores necessitatibus voluptas non dignissimos
            tempora adipisci esse tempore sit odio rem, hic porro error ipsum ad
            accusantium consequuntur quibusdam voluptatum enim eos velit.
            Soluta, velit molestiae quas assumenda id, reiciendis vel quasi
            explicabo obcaecati consectetur error aliquam repellendus omnis.
            Porro vitae mollitia assumenda doloremque qui aut optio odit labore
            harum delectus aperiam, iure at voluptatibus quod eos libero id
            saepe veritatis vero. Magni, nihil praesentium! Voluptatibus,
            dolorem consequatur sequi fuga minima labore architecto harum porro,
            dolore quae, quas officia magnam quaerat nihil quam aperiam
            consectetur voluptate dolor nobis in cupiditate obcaecati. Error
            inventore quisquam alias, maxime nostrum incidunt, non dicta quasi
            tempora odio recusandae. 
          </p>
        </div>
      </section>
    </div>
  );
};

const TeamCard=({data})=>{
  return (
    <div className={`${style.primaryCards} ${style.teamCard}`}>
      <section className={style.tokonomicsTitle}>
        <h2>Team</h2>
      </section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        accusantium, officiis corporis, deleniti at pariatur, magni saepe a
        accusamus itaque nesciunt tempora? Dolorum iure ut pariatur vitae nisi
        nesciunt eligendi id maxime, voluptates quidem consequatur voluptas rem
        voluptatibus neque accusamus itaque, quos expedita deleniti blanditiis.
        Accusamus ex sit tenetur animi neque atque labore aliquid odio commodi!
        Sapiente similique.
      </div>
      <section className={style.teamMembers}>
        <div className={style.memberCard}>
          <div className={style.userDetail}>
          <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h3>Jonh Smith</h3>
          <p>Designer Ui/Ux</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            architecto possimus expedita nulla debitis ex facilis porro id,
            laudantium odit rem nesciunt a sed placeat quo quis natus culpa
            adipisci earum iusto nihil dolorem aperiam rerum. Aliquam ex quidem
            doloribus repudiandae ab delectus rem tenetur, nam fuga
            exercitationem impedit sunt! Unde esse vero, consequatur debitis
            voluptate culpa maiores non optio.
          </p>
        </div>

        <div className={style.memberCard}>
          <div className={style.userDetail}>
          <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h3>Alen Kim</h3>
          <p>Web developer</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            architecto possimus expedita nulla debitis ex facilis porro id,
            laudantium odit rem nesciunt a sed placeat quo quis natus culpa
            adipisci earum iusto nihil dolorem aperiam rerum. Aliquam ex quidem
            doloribus repudiandae ab delectus rem tenetur, nam fuga
            exercitationem impedit sunt! Unde esse vero, consequatur debitis
            voluptate culpa maiores non optio.
          </p>
        </div>

        <div className={style.memberCard}>
          <div className={style.userDetail}>
          <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h3>Ally Jonson</h3>
          <p>Graphic Designer </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            architecto possimus expedita nulla debitis ex facilis porro id,
            laudantium odit rem nesciunt a sed placeat quo quis natus culpa
            adipisci earum iusto nihil dolorem aperiam rerum. Aliquam ex quidem
            doloribus repudiandae ab delectus rem tenetur, nam fuga
            exercitationem impedit sunt! Unde esse vero, consequatur debitis
            voluptate culpa maiores non optio.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cards;
