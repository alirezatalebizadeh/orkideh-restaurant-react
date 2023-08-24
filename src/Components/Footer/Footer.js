import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer-area bg-f">
      <div className="container">
        <Row>
          <Col md={6} lg={3}>
            <h3 className="text-right">اشتراک </h3>
            <div className="subscribe_form text-right" dir="rtl">
              <form className="subscribe_form">
                <input
                  name="EMAIL"
                  id="subs-email"
                  className="form_input"
                  placeholder="ادرس ایمیل شما"
                  type="email"
                />
                <button type="submit" className="submit">
                  اشتراک
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
            <ul className="list-inline f-social">
              <li className="list-inline-item">
                <a
                  className="facebook"
                  href="https://www.facebook.com/ORRestaurant/"
                ></a>
              </li>
              <li className="list-inline-item">
                <a
                  className="linkdin"
                  href="https://www.linkedin.com/in/orkideh-restaurant-822328140"
                ></a>
              </li>
              <li className="list-inline-item">
                <a
                  className="insta"
                  href="https://www.instagram.com/orkideh_restaurant/"
                ></a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="text-right">
            <h3 className="text-right">شعبه ها</h3>
            <p className="lead"> سعادت اباد-جاده چالوش</p>
            <p className="lead"> اقدسیه-متل قو</p>
            <p>ارژانتین-مهستان-شهریار</p>
          </Col>
          <Col md={6} lg={3} className="text-right">
            <h3>ساعات کار</h3>
            <p>
              <span className="text-color">شنبه-یک شنبه :</span> 12:00 - 24:00{" "}
            </p>
            <p>
              <span className="text-color">دو شنبه-سه شنبه : </span>12:00 -
              24:00{" "}
            </p>
            <p>
              <span className="text-color">چهار شنبه-پنج شنبه :</span> 12:00 -
              24:00{" "}
            </p>
            <p>
              <span className="text-color">جمعه :</span> 12:00 - 24:00{" "}
            </p>
          </Col>
          <Col md={6} lg={3}>
            <h3 className="text-right">درباره ما</h3>
            <p className="text-right">
              رستوران‌های زنجیره‌ای ارکیده با بیش از ۶۵ سال تجربه، افتخار آن را
              دارد که در ۸ شعبه در سراسر کشور، میزبان محافل دوستانه و کاری،
              جشن‌ها و مراسم‌های شما عزیزان باشد.
            </p>
          </Col>
        </Row>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="company-name">
                تمامی حقوق مادی و معنوی سایت متعلق به رستوران ارکیده می باشد
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
