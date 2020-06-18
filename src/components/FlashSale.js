import React from "react";
import imgProduct from "../assets/img/products/home/1.jpg";
import OwlCarousel from "react-owl-carousel";

export const FlashSale = (props) => {
  return (
    <div className="ps-section__content">
      <OwlCarousel
        items={5}
        className="ps-carousel--nav owl-slider"
        loop
        nav
        margin={8}
      >
        <div class="ps-product ps-product--inner">
          <div class="ps-product__thumbnail">
            <a href="product-default.html">
              <img src={imgProduct} alt="product-1" />
            </a>
            <div class="ps-product__badge">-16%</div>
            <ul class="ps-product__actions">
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Read More"
                >
                  <i class="icon-bag2"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Quick View"
                >
                  <i class="icon-eye"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Whishlist"
                >
                  <i class="icon-heart"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Compare"
                >
                  <i class="icon-chart-bars"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="ps-product__container">
            <p class="ps-product__price sale">
              $567.99 <del>$670.00 </del>
              <small>18% off</small>
            </p>
            <div class="ps-product__content">
              <a class="ps-product__title" href="product-default.html">
                Korea Long Sofa Fabric In Blue Navy Color
              </a>
              <p>
                Sold by:<a href="product-default.html"> Global Shop</a>
              </p>
              <div class="ps-product__rating">
                <select class="ps-rating" data-read-only="true">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="2">5</option>
                </select>
                <span>01</span>
              </div>
              <div
                class="ps-product__progress-bar ps-progress"
                data-value="22"
              >
                <div class="ps-progress__value">
                  <span></span>
                </div>
                <p>Sold:67</p>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
}
