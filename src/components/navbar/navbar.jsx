import React from "react";
import "./navbar.scss";

const Navbar = () => {
  function toggleBurgerMenu(x){
    let target = (x.target).closest('.burger-menu');
    target.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
  }

  return (
    <div className="navbar">
      <div className="flex-container">
        <div className="flex-left">
          <img
            src="https://res.cloudinary.com/jonty-mern/image/upload/v1644157997/assing/logo_rgxhma.jpg"
            alt="logo image"
          />
        </div>
        <div className="right">
          <a href="#">Home</a>
          <a href="#">Who we are</a>
          <a href="#">Our Raison D'etre</a>
          <a href="#">Portfolio</a>

          
        </div>
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div> 
      </div>
      <div className="menu hide">
          <div className="menu-item">Home</div>
          <div className="menu-item">Who we are</div>
          <div className="menu-item">Our Raison D'etre</div>
          <div className="menu-item">Portfolio</div>
      </div>
    </div>
  );
};

export default Navbar;
