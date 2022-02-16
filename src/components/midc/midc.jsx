import React from 'react';
import Column from '../column/column';
import "./midc.scss";
const img1 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158686/assing/6-trillion_nkeahb.png";
const img2 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/2-trillion_l0bbwc.png";
const img3 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/100-Billion_gdls12.png";
const img4 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/70-billion_eciojo.png";
const img5 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/50-billion_lqxn6g.png";
const img6 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/30-billion_wddnkg.png";
const img7 = "https://res.cloudinary.com/jonty-mern/image/upload/v1644158771/assing/2-billion_t758ku.png";



const Midc = () => {
    return <div className="midc">
    <Column />

<div className="content">
<div className="item">
<div className="left">
<span><strong>$6 Trillion</strong></span>
<p className="p">In Cumulative assets under Management (currently) of public and private  enterprises that our  shareholders 
represent  as senior  executive  leadeship of those
</p>
</div>
    <div className="right">
        <img src={img1} alt="img" />
    </div>
</div>
<div className="item">
<div className="left">
<img src={img2} alt="img" />
 </div>
    <div className="right">
    <span><strong>$2 Trillion</strong></span>
<p>In market capitalization value  as active board membersof U.S. publicly  traded entities.
</p>
        
    </div>
</div>
<div className="item">
<div className="left">
<span><strong>$100 Billion</strong></span>
<p>In financial investments related expereince. 
</p>
</div>
    <div className="right">
    <img src={img3} alt="img" />
            </div>
</div>
<div className="item">
<div className="left">
<img src={img4} alt="img" />


</div>
    <div className="right">
    <span><strong>$70 Billion</strong></span>
<p> In M&A
</p>
        
    </div>



</div>
<div className="item">
<div className="left">
<span><strong>$50 Billion</strong></span>
<p>In education sector  investments and operations
</p>
</div>
    <div className="right">
    <img src={img5} alt="img" />
            </div>
</div>
<div className="item">
<div className="left">

<img src={img6} alt="img" />

</div>
    <div className="right">
    <span><strong>$30 Billion</strong></span>
<p>In technology sector  investments and operations
</p>
        
    </div>



</div>
<div className="item">
<div className="left">
<span><strong>$2 Billion</strong></span>
<p>In impact investment related expereince
</p>
</div>
    <div className="right">
    <img src={img7} alt="img" />
            </div>
</div>
</div>
    </div>
};

export default Midc;