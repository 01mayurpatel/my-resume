import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import "./Videos.css"
import Container from 'react-bootstrap/Col'
function Videos() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className="item" data-value="1">

<iframe width="350" height="195" src="https://www.youtube.com/embed/aArb68OBFPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>,
        <div className="item" data-value="2">
           <iframe width="350" height="195" src="https://www.youtube.com/embed/UP-S9rvAYYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>,
        <div className="item" data-value="3">
            <iframe width="350" height="195" src="https://www.youtube.com/embed/KZehm-meGMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>,
        <div className="item" data-value="4">
            <iframe width="350" height="195" src="https://www.youtube.com/embed/-5lNHML16JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>,
        <div className="item" data-value="5">
             <iframe width="350" height="195"  src="https://www.youtube.com/embed/Tt08KmFfIYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>,
         <div className="item" data-value="5">
         <iframe width="350" height="195" src="https://www.youtube.com/embed/BYUy1yvjHxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>,
    <div className="item" data-value="5">
    <iframe width="350" height="195" src="https://www.youtube.com/embed/aHB8bx4P7TE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>,
<div className="item" data-value="5">
    <iframe width="350" height="195" src="https://www.youtube.com/embed/pjqi_M3SPwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>,
    ];
  return (
    <Container className=' p-5'>
       
      <AliceCarousel
        // mouseTracking
        items={items}
        responsive={responsive}
        // controlsStrategy="alternate"
        autoPlay={true}
        // autoPlayControls={true}
        autoPlayInterval={1500}
        autoPlayStrategy='all'
        touchTracking={true}
        infinite={true}
        
        
    />
    
    </Container>
  )
}

export default Videos
