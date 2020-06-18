import React from "react";
import pm1 from '../assets/img/payment-method/1.jpg'
import pm2 from '../assets/img/payment-method/4.jpg'
import pm3 from '../assets/img/payment-method/5.jpg'

export const Footer = () => {
  return (
    <footer className="ps-footer ps-footer--3">
      <div className="container">
        <div className="ps-block--site-features ps-block--site-features-2">
          <div className="ps-block__item">
            <div className="ps-block__left">
              <i className="icon-rocket"></i>
            </div>
            <div className="ps-block__right">
              <h4>Free Delivery</h4>
              <p>For all oders over $99</p>
            </div>
          </div>
          <div className="ps-block__item">
            <div className="ps-block__left">
              <i className="icon-sync"></i>
            </div>
            <div className="ps-block__right">
              <h4>90 Days Return</h4>
              <p>If goods have problems</p>
            </div>
          </div>
          <div className="ps-block__item">
            <div className="ps-block__left">
              <i className="icon-credit-card"></i>
            </div>
            <div className="ps-block__right">
              <h4>Secure Payment</h4>
              <p>100% secure payment</p>
            </div>
          </div>
          <div className="ps-block__item">
            <div className="ps-block__left">
              <i className="icon-bubbles"></i>
            </div>
            <div className="ps-block__right">
              <h4>24/7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
        <div className="ps-footer__widgets">
          <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
              <p>Call us 24/7</p>
              <h3>1800 97 97 69</h3>
              <p>
                502 New Design Str, Melbourne, Australia <br />
                <a href="#">
                  <span
                    className="__cf_email__"
                    data-cfemail="3f5c50514b5e5c4b7f525e4d4b594a4d46115c50"
                  >
                    email
                  </span>
                </a>
              </p>
              <ul className="ps-list--social">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="google-plus" href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Term & Condition</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="faqs.html">FAQs</a>
              </li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="#">Affilate</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="contact-us.html">Contact</a>
              </li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
              <li>
                <a href="#">Our Press</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="my-account.html">My account</a>
              </li>
              <li>
                <a href="shop-default.html">Shop</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="ps-footer__links">
          <p>
            <strong>Consumer Electric:</strong>
            <a href="#">Air Conditioners</a>
            <a href="#">Audios &amp; Theaters</a>
            <a href="#">Car Electronics</a>
            <a href="#">Office Electronics</a>
            <a href="#">TV Televisions</a>
            <a href="#">Washing Machines</a>
          </p>
          <p>
            <strong>Clothing &amp; Apparel:</strong>
            <a href="#">Printers</a>
            <a href="#">Projectors</a>
            <a href="#">Scanners</a>
            <a href="#">Store &amp; Business</a>
            <a href="#">4K Ultra HD TVs</a>
            <a href="#">LED TVs</a>
            <a href="#">OLED TVs</a>
          </p>
          <p>
            <strong>Home, Garden &amp; Kitchen:</strong>
            <a href="#">Cookware</a>
            <a href="#">Decoration</a>
            <a href="#">Furniture</a>
            <a href="#">Garden Tools</a>
            <a href="#">Garden Equipments</a>
            <a href="#">Powers And Hand Tools</a>
            <a href="#">Utensil &amp; Gadget</a>
          </p>
          <p>
            <strong>Health &amp; Beauty:</strong>
            <a href="#">Hair Care</a>
            <a href="#">Decoration</a>
            <a href="#">Hair Care</a>
            <a href="#">Makeup</a>
            <a href="#">Body Shower</a>
            <a href="#">Skin Care</a>
            <a href="#">Cologine</a>
            <a href="#">Perfume</a>
          </p>
          <p>
            <strong>Jewelry &amp; Watches:</strong>
            <a href="#">Necklace</a>
            <a href="#">Pendant</a>
            <a href="#">Diamond Ring</a>
            <a href="#">Sliver Earing</a>
            <a href="#">Leather Watcher</a>
            <a href="#">Gucci</a>
          </p>
          <p>
            <strong>Computer &amp; Technologies:</strong>
            <a href="#">Desktop PC</a>
            <a href="#">Laptop</a>
            <a href="#">Smartphones</a>
            <a href="#">Tablet</a>
            <a href="#">Game Controller</a>
            <a href="#">Audio &amp; Video</a>
            <a href="#">Wireless Speaker</a>
            <a href="#">Done</a>
          </p>
        </div>
        <div className="ps-footer__copyright">
          <p>© 2018 Martfury. All Rights Reserved</p>
          <p>
            <span>We Using Safe Payment For:</span>
            <img src={pm1} alt="pm1" />
            <img src={pm2} alt="pm2" />
            <img src={pm3} alt="pm3" />
          </p>
        </div>
      </div>
    </footer>
  );
};
