import React, { useEffect } from 'react';
import './CategoryItemList.scss';
import HorizontalScroll from 'react-scroll-horizontal';
const CategoryItemList = () => {
  const child = {
    width: '480px',
    height: '360px',
    margin: '100px 300px 20px 80px',
    padding:'1em'
  };
  const parent = {
    width: `65em`,
    height: '60em',
    position: 'relative',
    marginTop: '20em',
  };
  useEffect(() => {});
  return (
    <>
      <section className="item-list" style={{ position: 'relative' }}>
        <div className="menu-header">
          <h4>VEG PIZZA</h4>
        </div>
        <div className="checkout-btn">
          <a>CHECK OUT</a>
        </div>
        <div className="container" style={parent}>
          <HorizontalScroll reverseScroll="true">
            <div className="block block-1" style={child}>
              <h3>margherita.</h3>
              <div className="user-selection">
                <div className="pizza-size">
                  <h6>S</h6>
                </div>
                <div className="pizza-size">
                  <h6>M</h6>
                </div>
                <div className="pizza-size">
                  <h6>L</h6>
                </div>
                <div className="pizza-add-to-cart">
                <span>ADD TO CART</span>
                </div>
              </div>
            </div>
            <div className="block block-2" style={child}>
              <h3>farmhouse.</h3>
              <div className="user-selection">
                <div className="pizza-size">
                  <h6>S</h6>
                </div>
                <div className="pizza-size">
                  <h6>M</h6>
                </div>
                <div className="pizza-size">
                  <h6>L</h6>
                </div>
                <div className="pizza-add-to-cart">
                <span>ADD TO CART</span>
                </div>
              </div>
            </div>
            <div className="block block-3" style={child}>
              <h3>marinara.</h3>
              <div className="user-selection">
                <div className="pizza-size">
                  <h6>S</h6>
                </div>
                <div className="pizza-size">
                  <h6>M</h6>
                </div>
                <div className="pizza-size">
                  <h6>L</h6>
                </div>
                <div className="pizza-add-to-cart">
                <span>ADD TO CART</span>
                </div>
              </div>
            </div>
            <div className="block block-4" style={child}>
              <h3>napoletana.</h3>
              <div className="user-selection">
                <div className="pizza-size">
                  <h6>S</h6>
                </div>
                <div className="pizza-size">
                  <h6>M</h6>
                </div>
                <div className="pizza-size">
                  <h6>L</h6>
                </div>
                <div className="pizza-add-to-cart">
                <span>ADD TO CART</span>
                </div>
              </div>
            </div>
            <div className="block block-5" style={child}>
              <h3>crudo.</h3>
              <div className="user-selection">
                <div className="pizza-size">
                  <h6>S</h6>
                </div>
                <div className="pizza-size">
                  <h6>M</h6>
                </div>
                <div className="pizza-size">
                  <h6>L</h6>
                </div>
                <div className="pizza-add-to-cart">
                  <span>ADD TO CART</span>
                </div>
              </div>
            </div>
          </HorizontalScroll>
        </div>
      </section>
    </>
  );
};

export default CategoryItemList;
