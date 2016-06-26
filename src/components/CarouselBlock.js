import React from 'react';
import AppBar from 'material-ui/AppBar';
import Carousel from 'nuka-carousel';

export default ({title, icon, children}) => (
  <div className="card">
    <AppBar title={title} iconClassNameLeft={"fa fa-"+icon} />
    <Carousel dragging={true} slideWidth={0.88} slidesToShow={1} cellAlign="center" cellSpacing={50}>
      {children}
    </Carousel>
  </div>
);
