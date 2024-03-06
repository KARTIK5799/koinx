import React from "react";
import style from "./Crousal.module.css";


const Crousal = () => {
 
  
 return(
<div className={style.CarouselContainer}>

<div className={`${style.crouselCards} ${style.redCard}`}>
      <div className={style.cardimg}>
       <span className="material-symbols-outlined">
        newspaper
       </span>
      </div>
      <div className={style.crouselTaxt}>
       <div className={style.crouselTaxtHeading}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
       </div>
        <div className={style.crouselPlaneTaxt}>
          Lorem ipsum dolor sit ame sint qui ratione ipsum, adipisci sapiente voluptates nostrum? Dolorum maxime in quae. Nulla sed quas doloremque, delectus laborum inventore.
        </div>
     </div>
   </div>

   <div className={`${style.crouselCards} ${style.greenCard}`}>
      <div className={style.cardimg}>
       <span className="material-symbols-outlined">
       moving
       </span>
      </div>
      <div className={style.crouselTaxt}>
       <div className={style.crouselTaxtHeading}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
       </div>
        <div className={style.crouselPlaneTaxt}>
          Lorem ipsum dolor sit ame sint qui ratione ipsum, adipisci sapiente voluptates nostrum? Dolorum maxime in quae. Nulla sed quas doloremque, delectus laborum inventore.
        </div>
     </div>
   </div>


   <div className={`${style.crouselCards} ${style.blueCard}`}>
      <div className={style.cardimg}>
       <span className="material-symbols-outlined">
        newspaper
       </span>
      </div>
      <div className={style.crouselTaxt}>
       <div className={style.crouselTaxtHeading}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
       </div>
        <div className={style.crouselPlaneTaxt}>
          Lorem ipsum dolor sit ame sint qui ratione ipsum, adipisci sapiente voluptates nostrum? Dolorum maxime in quae. Nulla sed quas doloremque, delectus laborum inventore.
        </div>
     </div>
   </div>

     
       

</div>
 )
};

export default Crousal;

