import React from 'react'
import "./Recipedonuts.css"
import img1 from "../../asset/Recipedonuts1.png"
import img2 from "../../asset/Recipedonuts2.png"
import img3 from "../../asset/Recipedonuts3.png"
import img4 from "../../asset/Recipedonuts4.png"
import bigimg from "../../asset/bigimg.png"


const Recipedonuts = () => {
  return (
    <div className='recipedonuts container'>
        <div className="recipedonuts-title text-pcl">We Love What We Do</div>
        <h1 className='recipedonuts-h1'>How We Make Dunuts</h1>
        <p className='text-p-all'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae libero eaque.accusamus placeat nulla officia veritatis iusto, sed illum</p>

        <div className="recipedonuts-cards">
            <div className="recipedonuts-box1">
                <div className="recipedonut-card flex-cl-fe">
                    <img className='recipedonut-card_img' src={img1} alt="" />
                    <div className="recipedonut-card_title">1. Ingredients</div>
                    <p className="recipedonut-card_text text-r">Chances are there wasn't collaboration, cummunication.</p>
                    <div className="more-btn">READ MORE</div>
                </div>
                <div className="recipedonut-card flex-cl-fe">
                    <img className='recipedonut-card_img' src={img2} alt="" />
                    <div className="recipedonut-card_title">2. Stuffing</div>
                    <p className="recipedonut-card_text text-r">There wasn't a process agreed upon or specified with.</p>
                    <div className="more-btn">READ MORE</div>
                </div>
            </div>
            <div className="img-big">
                <img src={bigimg} alt="" />
            </div>
            <div className="recipedonut-box2">
                <div className="recipedonut-card">
                    <img className='recipedonut-card_img' src={img3} alt="" />
                    <div className="recipedonut-card_title">3. Cooking</div>
                    <p className="recipedonut-card_text">But that's not all that it takes to get things back on track.</p>
                    <div className="more-btn">READ MORE</div>
                </div>
                <div className="recipedonut-card">
                    <img className='recipedonut-card_img' src={img4} alt="" />
                    <div className="recipedonut-card_title">4. Dis Ready</div>
                    <p className="recipedonut-card_text">This villagers are out there with a vengeance to get that.</p>
                    <div className="more-btn">READ MORE</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Recipedonuts