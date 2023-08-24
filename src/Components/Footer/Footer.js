import React from 'react'
import './Footer.ss'
export default function Footer() {
    return (
        <>
            <footer class="footer-area bg-f">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-right">اشتراک </h3>
                            <div class="subscribe_form text-right" dir="rtl">
                                <form class="subscribe_form">
                                    <input name="EMAIL" id="subs-email" class="form_input" placeholder="ادرس ایمیل شما" type="email" />
                                    <button type="submit" class="submit">اشتراک</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                            <ul class="list-inline f-social">
                                <li class="list-inline-item"><a class="facebook" href="https://www.facebook.com/ORRestaurant/"></a></li>
                                <li class="list-inline-item"><a class="linkdin" href="https://www.linkedin.com/in/orkideh-restaurant-822328140"></a></li>
                                <li class="list-inline-item"><a class="insta" href="https://www.instagram.com/orkideh_restaurant/"></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 text-right">
                            <h3 class="text-right">شعبه ها</h3>
                            <p class="lead"> سعادت اباد-جاده چالوش</p>
                            <p class="lead"> اقدسیه-متل قو</p>
                            <p>ارژانتین-مهستان-شهریار</p>
                        </div>
                        <div class="col-lg-3 col-md-6 text-right">
                            <h3>ساعات کار</h3>
                            <p><span class="text-color">شنبه-یک شنبه :</span> 12:00 - 24:00 </p>
                            <p><span class="text-color">دو شنبه-سه شنبه : </span>12:00 - 24:00 </p>
                            <p><span class="text-color">چهار شنبه-پنج شنبه :</span> 12:00 - 24:00 </p>
                            <p><span class="text-color">جمعه :</span> 12:00 - 24:00 </p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h3 class="text-right">درباره ما</h3>
                            <p class="text-right">رستوران‌های زنجیره‌ای ارکیده با بیش از ۶۵ سال تجربه، افتخار آن را دارد که در ۸ شعبه در سراسر کشور، میزبان محافل دوستانه و کاری، جشن‌ها و مراسم‌های شما عزیزان باشد.</p>
                        </div>
                    </div>
                </div>

                <div class="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="company-name">تمامی حقوق مادی و معنوی سایت متعلق به رستوران ارکیده می باشد</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
