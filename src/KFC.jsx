import React from "react";

function KFC()
{
    return(
        <>
         <div className="row">
    <div className="col-sm-8" style={{backgroundColor:"lavender"}}>
    <a href="https://www.kfc.com.au/">
    <img src="https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png" height="100" width="100"/>
    </a>
      
    </div>
    <div className="col-sm-2" style={{backgroundColor:"lavender"}}>
    <a href="https://www.kfc.com.au/login">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANBVBeA43gwIdrWOoHGdf_zLhwXUjnnm89Q&usqp=CAU" height="100" width="100"/>
    </a>
    
    </div>
    <div className="col-sm-2" style={{backgroundColor:"lavender"}}>
    <a href="https://www.askideas.com/25-very-funny-camel-pictures/">
<img src="data:image/png;base64,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" height="100" width="100"/>
    </a>
    

    </div>
  </div>

  

<nav className="navbar navbar-expand-sm bg-danger navbar-light text-center">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="https://www.kfc.com.au/delivery">Delivery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.kfc.com.au/menu">Pickup</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.kfc.com.au/catering/chicken-pieces">Catering</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.kfc.com.au/about-us">About Us</a>
    </li>
  </ul>
</nav>
  

        

        </>
    );
}
export default KFC;

