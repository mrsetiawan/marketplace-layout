import React from "react";
import { 
  Banner, 
  FlashSale,
  CategoriesProduct
} from "../components";
import { Layout } from "./";

export const Home = () => {
  return (
    <Layout>
      <div id="homepage-4">
        <Banner />
        <div className="ps-deal-of-day">
          <div className="container">
            <div className="ps-section__header">
              <div className="ps-block--countdown-deal">
                <div className="ps-block__left">
                  <h3>Deal of the day</h3>
                </div>
                <div className="ps-block__right">
                  <figure>
                    <figcaption>End in:</figcaption>
                    <ul
                      className="ps-countdown"
                      data-time="July 21, 2020 15:37:25"
                    >
                      <li>
                        <span className="days" />
                      </li>
                      <li>
                        <span className="hours" />
                      </li>
                      <li>
                        <span className="minutes" />
                      </li>
                      <li>
                        <span className="seconds" />
                      </li>
                    </ul>
                  </figure>
                </div>
              </div>
              View all
            </div>

            <FlashSale />

            <div class="ps-home-categories">
              <br />
              <CategoriesProduct />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
