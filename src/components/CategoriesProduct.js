import React from "react";
import imgCategories from "../assets/img/categories/shop/5.jpg";
export const CategoriesProduct = () => {
  return (
    <>
      <div class="ps-section__header">
        <h3>Top Categories Of The Month</h3>
      </div>
      <div class="ps-section__content">
        <div class="row align-content-lg-stretch">
          {[0, 1, 2, 3, 4, 5].map(ele => {
            return (
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={EvalError}>
                <div class="ps-block--category-2" data-mh="categories">
                  <div class="ps-block__thumbnail">
                    <img src={imgCategories} alt="cat" />
                  </div>
                  <div class="ps-block__content">
                    <h4>Electronics</h4>
                    <ul>
                      <li>
                        <a href="#">TV Televisions</a>
                      </li>
                      <li>
                        <a href="#">Air Conditioners</a>
                      </li>
                      <li>
                        <a href="#">Washing Machines</a>
                      </li>
                      <li>
                        <a href="#">Audio & Theaters</a>
                      </li>
                      <li>
                        <a href="#">Office Electronics</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
