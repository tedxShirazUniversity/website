import React from "react";

import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";

const HeaderCarousel = (props) => {
    // const [classes
        // ,setClasses
    // ]=React.useState("");

    
    // React.useEffect(()=>{
    //     setTimeout(() => {
    //         setClasses("alizimg")        
    //     }, 100);
    // },[])
    
    return (
        <Carousel
            autoPlay={true}
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
            infiniteLoop={true}
            axis="horizontal"
            stopOnHover={false}
            transitionTime={500}
            swipeable={true}
            dynamicHeight={false}
        >
            <div className="imgContainer">
                <img src={require("../../assets/images/slide/p1-remake-c.jpg")} alt=""/>
            </div>
        </Carousel>
    );
};

export default HeaderCarousel;


// React responsive carousel DOCS:
//https://www.npmjs.com/package/react-responsive-carousel