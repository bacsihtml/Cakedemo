import React from 'react'
import "./Ourarticle.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const datas = [
    {
        id:1,
        day: 23,
        moth: "Jul",
        img: require("../../asset/cakecaffe.jpg"),
        des: "DESIGN TRENDS, FURNTURE",
        title: "Seating collection inspiration",
        other: "Posted by",
        avartar: require("../../asset/avartar.png"),
        name: "S.Rogers",
    },
    {
        id:2,
        day: 23,
        moth: "Jul",
        img: require("../../asset/cakeChocolate.jpg"),
        des: "DESIGN TRENDS, FURNTURE",
        title: "Seating collection inspiration",
        other: "Posted by",
        avartar: require("../../asset/avartar.png"),
        name: "S.Rogers",
    },
    {
        id:3,
        day: 23,
        moth: "Jul",
        img: require("../../asset/cakeChocobay.jpg"),
        des: "DESIGN TRENDS, FURNTURE",
        title: "Seating collection inspiration",
        other: "Posted by",
        avartar: require("../../asset/avartar.png"),
        name: "S.Rogers",
    },
]
    

const Ourarticle = () => {
  return (
    <div className='OurArticle container'>
        <div className='OurArticle-wrapper'>
            <div className="OurArticle-title text-pcl">Share Best News</div>
            <h1>Our New Articles</h1>
            <p className='text-p-all'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit in quasi facilis perspiciatis deserunt odit qui eveniet officiis eaque labore.</p>
        </div>

        <div className="articles">
            {datas.map((data) => {
                return (
                    <div className="articles-card" key={data.id}>
                        <img className='articles-img' src={data.img} alt="" />
                        <div className="articles-date">
                            <div className="articles-day">{data.day}</div>
                            <div className="articles-moth">{data.moth}</div>
                        </div>
                        <div className="articles-information">
                            <div className="articles-des">{data.des}</div>
                            <div className="articles-title">{data.title}</div>
                            <div className="articles-others">
                                <div className="articles-other">{data.other}</div>
                                <img className='articles-avartar' src={data.avartar} alt="" />
                                <div className="articles-name">{data.name}</div>
                                <div className="articles-notification">
                                    <ChatBubbleOutlineIcon className='articles-iconcoment'/>
                                    <span className='notification'>1</span>
                                </div>
                                <ShareIcon/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Ourarticle