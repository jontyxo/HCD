import React from 'react';
import Firstc from '../firstc/firstc';
import Lastc from '../lastc/lastc';
import Midc from '../midc/midc';
import Navbar from '../navbar/navbar';
// import Test from '../test/test';

import "./home.scss";


const Home = () => {
    return <div className="home">
<Navbar />
<Firstc />
<Midc />
<Lastc />
{/* <Test /> */}
    </div>
};

export default Home;