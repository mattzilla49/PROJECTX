import React from "react";

function Carousel()
{
    return(
        <>
<div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
  <a href="https://www.kfc.com.au/menu/new-products">
  <img src="https://d3ozfb9rlfoktf.cloudfront.net/cms/a-panel.jpg" alt="" height="400" width="100%"/>
  </a>
    
  </div>
 
  <div className="carousel-item">
  <a href="https://www.kfc.com.au/menu/new-products">
  <img src="https://d3ozfb9rlfoktf.cloudfront.net/cms/ZingerPopcornBox_APanel_Desktop-7-2.jpg" alt="" height="400" width="100%"/>
  </a>
   
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>
      </>
    );
}
export default Carousel;
