import React from 'react';
import "./firstc.scss";
const img1 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158113/assing/orange-boy_jfwfb0.jpg";


const Firstc = () => {
    return <div className="firstc">
<div className="container">
<div className="left">
<p>    Investing in <br />
Human Side <br />
 of Capital </p>
</div>
<div className="right">
    <img src={img1} alt="img"/>
</div>
</div>
    </div>
};

export default Firstc;