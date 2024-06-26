import React, { useState } from 'react'
import InfoText from './InfoText/InfoText'
import SliderText from './SliderText/SliderText'
import './MainContentHome.css'





export default function MainContentHome() {
  const [txt1, setTxt1] = useState([
    'رستوران‌های زنجیره‌ای ارکیده',
    ` مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
  ماست که بیش از ۶۰ سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
  رستوران‌های زنجیره‌ای ارکیده همواره تلاش کردیم که در محیطی اصیل بر
  پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
  شان شما عزیزان ارائه دهیم.مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های
  ایرانیان است و باعث افتخار ماست که بیش از ۶۰ سال است خدمت‌گزار
  مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ارکیده همواره
  تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار
  طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.`
  ])
  const [txt2, setTxt2] = useState([
    ' درباره رستوران',
    `  لذت صرف غذای سالم و اصیل ایرانی در محیطی درخور شان، یکی از حس‌هایی
    است که می‌تواند خستگی یک هفته سخت و پر دغدغه را رفع کند و انرژی
    مورد نیاز برای روزهای پیشرو رو برای ما فراهم سازد. ما در
    رستوران‌های زنجیره‌ای ارکیده با بیش از ۶۰ سال تجربه به همراه شش
    شعبه در استان های تهران، البرز و مازندران همواره افتخار داریم در
    محیطی اصیل بر پایه معماری و طراحی مدرن، متناسب با هر نوع سلیقه و
    ذائقه‌ای با تکیه بر مهارت آشپزان و مهمانداران آموزش دیده و امکانات
    رفاهی کم نظیر همچون، پارکینگ اختصاصی، سالن VIP، خانه بازی کودکان و
    ... در قالب سالن های پذیرایی کلاسیک، آلاچیق در فضای باز مجزا و
    کافی شاپ، میزبان محافل دوستانه و کاری، جشن ها و مراسم های شما
    عزیزان باشیم تا اوقاتی خوش را در کنار یکدیگر تجربه نمایید.`
  ])
  const [txt3, setTxt3] = useState([
    ' ارکیده گردی',
    ` شما دوست دارید در چه محیطی غذای خود را میل کنید؟ عاشق طبیعت و
    آلاچیق‌های دل‌باز و تخت‌های سنتی هستید که بر روی آن‌های بنشینید و
    مثل دوران گذشته غذای خود را نوش جان کنید یا از طرفداران تکنولوژی
    هستید و دوست دارید در پنت‌هاوسی مشرف به کلان‌شهر از غذای خود لذت
    ببرید؟ ما مطمئن هستیم که حداقل یکی از شعب رستوران‌های زنجیره‌ای
    ارکیده مطابق سلیقه شما خواهد بود و از صرف غذا در آن‌جا نهایت لذت
    را خواهید برد. در این قسمت می‌توانید نمایی از شعب مختلف
    رستوران‌های زنجیره‌ای ارکیده را مشاهده کنید و متوجه بشید که هر
    شعبه چه حال و هوایی دارد. البته با مشاهده عکس و ویدیو نمی‌توان به
    صورت کامل حس شعب رستوران‌های زنجیره‌ای ارکیده را درک کنید، باعث
    افتخار ماست که میزبان شما باشیم.`
  ])

  const [srcImg1, setSrcImg1] = useState([
    '/images/بستنی.jpg',
    '/images/کافه.jpg',
    'images/کافه 2.jpg'
  ])
  const [srcImg2, setSrcImg2] = useState([
    '/images/منوی-سرد-کافی-شاپ.jpg',
    '/images//ماالشعیر.jpg',
    '/images/قهوه.png'
  ])
  const [srcImg3, setSrcImg3] = useState([
    '/images/ماالشعیر.jpg',
    '/images/بستنی.jpg',
    '/images/منوی-سرد-کافی-شاپ.jpg'
  ])




  return (
    <div className='home_content'>
      <section>
        <div className='description'>
          <div className='sliderText'>
            <SliderText img1={srcImg1[0]} img2={srcImg1[1]} img3={srcImg1[2]} />
          </div>
          <InfoText title={txt1[0]} text={txt1[1]} />
        </div>

        <div className='description reverse'>
          <InfoText title={txt2[0]} text={txt2[1]} />
          <div className='sliderText'>
            <SliderText img1={srcImg2[0]} img2={srcImg2[1]} img3={srcImg2[2]} />
          </div>
        </div>

        <div className='description'>
          <div className='sliderText'>
            <SliderText img1={srcImg3[0]} img2={srcImg3[1]} img3={srcImg3[2]} />
          </div>
          <InfoText title={txt3[0]} text={txt3[1]} />
        </div>
      </section>
    </div>
  )
}
