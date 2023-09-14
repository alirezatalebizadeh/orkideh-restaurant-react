const articles = [
  {
    id: 1,
    img: '/images/aghdasieh.jpg',
    title: 'مدرن ترین رستوران زنجیره ای',
    desc: `  مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ارکیده همواره
  تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار
  طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه
  دهیم.مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث
  افتخار ماست که بیش از ۶۰ سال است خدمت‌گزار مردم شریف ایران هستیم.`
  },
  {
    id: 2,
    img: '/images/قهوه.png',
    title: 'مناسب برای انواع مراسمات',
    desc: `  در تمامی شعب مجموعه رستوران‌های ارکیده، موجبات برگزاری مراسم عروسی
    به مجلل‌ترین شکل ممکن فراهم شده است. خدمات رفاهی چون پارکینگ
    اختصاصی و خانه بازی کودکان در کنار انواع تشریفات عروسی مانند گل
    آرایی و دکور‌های مختلف روزی به یاد ماندنی را برای شما عزیزان رقم
    خواهد زد. در مجموعه رستوران‌های ارکیده برآنیم تا با ارائه بهترین
    خدمات و تشریفات مراسم عروسی، لحظاتی رویایی و در عین حال فراموش
    نشدنی برای شما عروس و داماد‌های گرامی بسازیم`
  },
  {
    id: 3,
    img: '/images/17.png',
    title: 'مدرن ترین رستوران زنجیره ای',
    desc: ` مجموعه رستوران‌های ارکیده با سال‌ها تجربه در برگزاری مراسم‌هایی
    چون جشن تولد، شام عقد، مجلس ختم و ... میزبان شما عزیزان خواهد بود.
    همچنین جهت برگزاری مراسم شما به صورت هر چه باشکوه‌تر، انواع خدمات
    تشریفاتی مانند گل‌آرایی و اجرای تم‌ در سالن‌های VIP شعب مختلف،
    ارائه می‌گردد. در مجموعه ارکیده، همه‌ی کارکنان ما در تلاش‌اند تا
    تک تک لحظات مراسم شما را به خاطره‌ای شیرین و ماندگار تبدیل کنند.`
  }
]

const imgSrcGallery = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'images/گالری - رستوران ارکیده1_files/1-3.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  '',
  'images/گالری - رستوران ارکیده1_files/1-4.jpg',
  'images/گالری - رستوران ارکیده1_files/10-1.jpg',
  'images/گالری - رستوران ارکیده1_files/10.jpg',
  'images/گالری - رستوران ارکیده1_files/11-1.jpg',
  'images/گالری - رستوران ارکیده1_files/12.jpg',
  'images/گالری - رستوران ارکیده1_files/13.jpg',
  'images/گالری - رستوران ارکیده1_files/14-1.jpg',
  'images/گالری - رستوران ارکیده1_files/15.jpg',
  'images/گالری - رستوران ارکیده1_files/17.jpg',
  'images/گالری - رستوران ارکیده1_files/18.jpg',
  'images/گالری - رستوران ارکیده1_files/19(1).jpg',
  'images/گالری - رستوران ارکیده1_files/2.jpg',
  'images/گالری - رستوران ارکیده1_files/222.jpg',
  'images/گالری - رستوران ارکیده1_files/19.jpg',
  'images/گالری - رستوران ارکیده1_files/5.jpg'
]

const MarasemData = [
  {
    id: 1,
    title: 'مراسم عقد و ازدواج ',
    desc1: ` روز عروسی، یکی از به‌یادماندنی‌ترین روز‌های زندگی ماست اما
شیرینی ازدواج نمی‌تواند استرس و نگرانی زوجین برای برگزاری
مراسمی بی‌نقص را کم کند`,
    desc2: ` در تمامی شعب مجموعه رستوران‌های ارکیده، موجبات برگزاری مراسم
    عروسی به مجلل‌ترین شکل ممکن فراهم شده است. خدمات رفاهی چون
    پارکینگ اختصاصی و خانه بازی کودکان در کنار انواع تشریفات عروسی
    مانند گل آرایی و دکور‌های مختلف روزی به یاد ماندنی را برای شما
    عزیزان رقم خواهد زد. در مجموعه رستوران‌های ارکیده برآنیم تا با
    ارائه بهترین خدمات و تشریفات مراسم عروسی، لحظاتی رویایی و در
    عین حال فراموش نشدنی برای شما عروس و داماد‌های گرامی بسازیم.`,
    src: '/images/عروسی.jpg',
    reverse: true
  },
  {
    id: 2,
    title: 'جشن تولد و ازدواج',
    desc1: `در ذهن همه‌ی ما روزها و تاریخ‌های خاصی وجود دارد که از آن
    انتظار متفاوت بودن داریم. هر ساله در روز‌های تولد یا سالگرد
    ازدواج، خود یا عزیزان‌مان، بهترین و با شکوه‌ترین مراسم‌ها را
    طلب می‌کنیم. در مجموعه رستوران‌های ارکیده با بهره‌مندی از
    کادری مجرب، متشکل از آشپزها و مهمانداران آموزش‌دیده آماده‌ی
    برگزاری انواع مراسم تولد و سالگرد برای شما خواهیم بود و
    میزبانی جشن‌های مجلل در محیطی اصیل بر پایه معماری و طراحی
    مدرن، متناسب با سلیقه‌ی شما را بر عهده خواهیم گرفت. همچنین
    تمامی امکانات رفاهی همچون: پارکینگ اختصاصی، سالن VIPو خانه
    بازی کودکان، در قالب سالن‌های کلاسیک، آلاچیق در فضای باز مجزا
    و کافی شاپ برای پذیرایی از شما و مهمانان عزیزتان مهیا شده است.`,
    src: '/images/تولد.jpg',
    reverse: false
  },
  {
    id: 3,
    title: 'سوگواری',
    desc1: `  غم از دست دادن عزیزان برای همه ما دشوار است؛ حال در کنار آن
    دغده‌ی پذیرایی از مهمانان، ابراز همدردی با اقوام و آشنایان و
    دیگر مسائل نیز بر دشواری مدیریت شرایط می‌افزاید؛ در این شرایط
    چه باید کرد؟ همه ما تمایل داریم به‌عنوان آخرین کاری که از
    دستمان برمی‌آید، یک مجلس ترحیم آبرومندانه برای متوفی خود
    برگزار کنیم. بنابراین در حالیکه غم عظیمی به دوش می‌کشیم
    می‌بایست بر خود مسلط بوده و تمرکز خود را جهت برنامه‌ریزی مراسم
    ختم حفظ کنیم. با واگذاری مراسم خود به مجموعه رستوران‌های
    ارکیده، خیالتان از بابت پذیرایی، آسوده است چراکه میزبانی از
    مهمانان شما بی‌کم‌وکاست انجام می‌شود. تلاش ما، در تمامی شعب
    این مجموعه، بر این است که داغداران عزیز بتوانند در کمال آرامش
    مراسمی بی‌نقص برای عزیز از دست رفته‌شان برگزار کنند و مراتب
    سپاس‌گزاری از همدردی اطرافیان را به‌جا آورند.`,
    src: '/images/عزاداری.jpg',
    reverse: true
  },
  {
    id: 4,
    title: 'روز عشق',
    desc1: ` مجموعه رستوران‌های ارکیده با سال‌ها تجربه در برگزاری
    مراسم‌هایی چون جشن تولد، شام عقد، مجلس ختم و ... میزبان شما
    عزیزان خواهد بود. همچنین جهت برگزاری مراسم شما به صورت هر چه
    باشکوه‌تر، انواع خدمات تشریفاتی مانند گل‌آرایی و اجرای تم‌ در
    سالن‌های VIP شعب مختلف، ارائه می‌گردد. در مجموعه ارکیده، همه‌ی
    کارکنان ما در تلاش‌اند تا تک تک لحظات مراسم شما را به خاطره‌ای
    شیرین و ماندگار تبدیل کنند.`,
    src: '/images/ولنتاین.jpg',
    reverse: false
  }
]

const menusSliderData = [
  { id: 1, src: '/images/bg-classy-restaurant.jpg' },
  { id: 2, src: '/images/bg-restoarant.jpg' },
  { id: 3, src: '/images/bg-restorant1.jpg' },
  { id: 4, src: '/images/bg-restorant2.jpg' }
]

const menuData = {
  mahestan: {
    appetizers: [
      {
        nameEng: 'Milk mushroom soup',
        name: 'سوپ شیر و قارچ',
        src: '/images/menuPictures/soup.jpg',
        price: 95000
      },
      {
        nameEng: 'Barley soup',
        name: 'سوپ جو',
        src: '/images/menuPictures/soup2.jpg',
        price: 80000
      },
      {
        nameEng: 'French fries',
        name: 'سیب زمینی سرخ کرده',
        src: '/images/menuPictures/sib1.jpg',
        price: 95000
      },
      {
        nameEng: 'Kashke Bademjan',
        name: 'کشک بادمجان',
        src: '/images/menuPictures/kashk.jpg',
        price: 195000
      },
      {
        nameEng: 'Mirza Ghasemi',
        name: 'میرزا قاسمی',
        src: '/images/menuPictures/mirza.jpg',
        price: 160000
      },
      {
        nameEng: 'Tornado',
        name: 'تورنیدو',
        src: '/images/menuPictures/sib2.jpg',
        price: 110000
      }
    ],
    Salads: [
      {
        nameEng: 'Special Salad',
        name: 'سالاد اسپشیال',
        src: '/images/menuPictures/salad1.jpg',
        price: 320000,
        desc: 'بیس سالاد، برگ قیسی، جوانه ماش، مخلوط میوه',
        descEng: 'Salad base, Armenian plum, mung bean sprouts and mixed fruit'
      },
      {
        nameEng: 'Meat Steak Salad',
        name: 'سالاد استیک گوشت',
        src: '/images/menuPictures/salad5.jpg',
        price: 300000,
        desc: 'سبزیجات مدیترانه‌ای، بیس سالاد، فیله گوساله، کیپرز',
        descEng: 'Mediterranean vegetables, salad base, veal fillet and capers'
      },
      {
        nameEng: 'Choopan Salad',
        name: 'سالاد چوپان',
        src: '/images/menuPictures/salad2.jpg',
        price: 195000,
        desc: 'پنیر کوزه‌ای، پیاز بنفش، گوجه گیلاسی، خیار',
        descEng: 'Cottage cheese, purple onion, cherry tomato and cucumber'
      },
      {
        nameEng: 'Chicken steak Salad',
        name: 'سالاد استیک مرغ',
        src: '/images/menuPictures/salad6.jpg',
        price: 265000,
        desc: 'بیس سالاد، فیله مرغ گریل، نان تست، پنیر پارمزان',
        descEng: 'Salad base, grilled chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Caesar Salad with grilled chicken',
        name: 'سالاد سزار با مرغ گریل',
        src: '/images/menuPictures/salad3.jpg',
        price: 250000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Diet Salad',
        name: 'سالاد رژیمی',
        src: '/images/menuPictures/salad7.jpg',
        price: 235000,
        desc: 'سبزیجات مدیترانه‌ای، سس ارده، بیس سالاد، مخلوط میوه، آجیل مخلوط',
        descEng:
          'Mediterranean vegetables, Arde sauce, salad base, mixed fruit and nuts'
      },
      {
        nameEng: 'Caesar Salad with fried chicken',
        name: 'سالاد سزار با مرغ سوخاری',
        src: '/images/menuPictures/salad4.jpg',
        price: 260000,
        desc: 'بیس سالاد، فیله مرغ سوخاری، نان تست، پنیر پارمزان',
        descEng: 'Salad base, fried chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Seasons Salad',
        name: 'سالاد فصل',
        src: '/images/menuPictures/salad8.jpg',
        price: 110000,
        desc: '',
        descEng: ''
      }
    ],
    MainFood: [
      {
        nameEng: 'Orkideh Special Kabab Shishlik',
        name: 'شیشلیک مخصوص ارکیده',
        src: '/images/menuPictures/shishlik.jpg',
        price: 460000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Chenjeh',
        name: 'کباب چنجه مخصوص',
        src: '/images/menuPictures/chenje.jpg',
        price: 445000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Barg',
        name: 'کباب برگ مخصوص',
        src: '/images/menuPictures/barg.jpg',
        price: 425000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Koobideh (two skewers)',
        name: 'کباب کوبیده دوسیخ',
        src: '/images/menuPictures/koobideh.jpg',
        price: 248000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab (Bone-in chicken)',
        name: 'جوجه کباب با استخوان',
        src: '/images/menuPictures/joojeh1.jpg',
        price: 295000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Bakhtiari',
        name: 'کباب بختیاری',
        src: '/images/menuPictures/bakhtiari.jpg',
        price: 390000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: ' Kabab Vaziri',
        name: 'کباب وزیری',
        src: '/images/menuPictures/vaziri.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Ghezel Ala fish (Grilled trout)',
        name: 'ماهی قزل آلا کبابی',
        src: '/images/menuPictures/ghezel1.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kebab (Boneless chicken)',
        name: 'جوجه کباب بدون استخوان',
        src: '/images/menuPictures/joojeh2.jpg',
        price: 235000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab Fesenjani',
        name: 'جوجه کباب فسنجانی',
        src: '/images/menuPictures/fesenjani.jpg',
        price: 360000,
        desc: 'سس مرغ، گردو و انار',
        descEng: '(Chicken, walnut and pomegranate sauce)'
      },
      {
        nameEng: 'Ghezel Ala fish (Fried trout)',
        name: 'ماهی قزل آلا سرخ شده',
        src: '/images/menuPictures/ghezel2.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      }
    ],
    sini: [
      {
        nameEng: 'ORKIDEH Royal platter',
        name: 'سینی رویال ارکیده',
        src: '/images/menuPictures/sini1.jpg',
        price: 2_330_000,
        desc: `(مناسب برای 7 تا 8 نفر),
          1 پرس خوراک ماهیچه,
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `Mahicheh - ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh -Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH first class Kabab platter',
        name: 'سینی ممتاز کباب ارکیده',
        src: '/images/menuPictures/sini2.jpg',
        price: 1940000,
        desc: `
          (مناسب برای 6 تا 7نفر),
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1 سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh Kabab Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH Special Kabab platter',
        name: 'سینی مخصوص کباب ارکیده',
        src: '/images/menuPictures/sini3.jpg',
        price: 1380000,
        desc: `(مناسب برای 4 الی 5 نفر)
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب چنجه مخصوص,
          2 سیخ کباب کوبیده,
          1 سیخ جوجه کباب بدون استخوان`,
        descEng: `ORKIDEH Special Kabab Shishlik, Special Kabab Chenjeh. Kabab Koobideh,Joojeh Kabab
          `
      }
    ],
    Platters: [
      {
        nameEng: 'Lamb shank',
        name: 'خوراک ماهیچه گوسفندی',
        src: '/images/menuPictures/kh-mahicheh (1).jpg',
        price: 390_000
      },
      {
        nameEng: 'Lamb neck',
        name: 'خوراک گردن گوسفند',
        src: '/images/menuPictures/kh-gardan.jpg',
        price: 380_000
      },
      {
        nameEng: 'Rice and butter',
        name: 'چلو کره',
        src: '/images/menuPictures/cholo1.jpg',
        price: 90_000
      },
      {
        nameEng: 'Rice, favas and dill',
        name: 'بـاقـالی پــلو',
        src: '/images/menuPictures/sini1.jpg',
        price: 110_000
      },
      {
        nameEng: 'Chicken',
        name: 'خوراک مرغ',
        src: '/images/menuPictures/kh-morgh.jpg',
        price: 130_000
      },
      {
        nameEng: 'Rice and barberry',
        name: 'زرشک پلو',
        src: '/images/menuPictures/cholo3.jpg',
        price: 110_000
      }
    ],
    SpecialFoods: [
      {
        nameEng: 'Rice with lamb neck',
        name: 'چلو گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 470_000
      },
      {
        nameEng: 'Rice and favas with lamb neck',
        name: 'باقالی پلو با گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 490_000
      },
      {
        nameEng: 'Rice with lamb shank',
        name: 'چلو ماهیچه',
        src: '/images/menuPictures/ch3.jpg',
        price: 480_000
      },
      {
        nameEng: 'Rice and favas with lamb shank',
        name: 'باقالی پلو با ماهیچه',
        src: '/images/menuPictures/ch4.jpg',
        price: 500_000
      }
    ],
    Sides: [
      {
        nameEng: 'Pickled garlic',
        name: 'سیر ترشی ',
        src: '/images/menuPictures/sir.jpg',
        price: 55_000
      },
      {
        nameEng: 'Olive, special vegetables and walnut',
        name: 'زیتون پرورده',
        src: '/images/menuPictures/zeytoon.jpg',
        price: 95_000
      },
      {
        nameEng: 'Yoghurt and cucumber',
        name: 'ماست و خیار',
        src: '/images/menuPictures/mast1.jpg',
        price: 60_000
      },
      {
        nameEng: 'Strained yoghurt and shallot',
        name: 'ماست چکیده موسیر',
        src: '/images/menuPictures/mast2.jpg',
        price: 60_000
      }
    ]
  },

  chaloos: {
    appetizers: [
      {
        nameEng: 'Milk mushroom soup',
        name: 'سوپ شیر و قارچ',
        src: '/images/menuPictures/soup.jpg',
        price: 95000
      },
      {
        nameEng: 'Barley soup',
        name: 'سوپ جو',
        src: '/images/menuPictures/soup2.jpg',
        price: 80000
      },
      {
        nameEng: 'French fries',
        name: 'سیب زمینی سرخ کرده',
        src: '/images/menuPictures/sib1.jpg',
        price: 95000
      },
      {
        nameEng: 'Kashke Bademjan',
        name: 'کشک بادمجان',
        src: '/images/menuPictures/kashk.jpg',
        price: 195000
      },
      {
        nameEng: 'Mirza Ghasemi',
        name: 'میرزا قاسمی',
        src: '/images/menuPictures/mirza.jpg',
        price: 160000
      },
      {
        nameEng: 'Tornado',
        name: 'تورنیدو',
        src: '/images/menuPictures/sib2.jpg',
        price: 110000
      }
    ],
    Salads: [
      {
        nameEng: 'Special Salad',
        name: 'سالاد اسپشیال',
        src: '/images/menuPictures/salad1.jpg',
        price: 320000,
        desc: 'بیس سالاد، برگ قیسی، جوانه ماش، مخلوط میوه',
        descEng: 'Salad base, Armenian plum, mung bean sprouts and mixed fruit'
      },
      {
        nameEng: 'Meat Steak Salad',
        name: 'سالاد استیک گوشت',
        src: '/images/menuPictures/salad5.jpg',
        price: 300000,
        desc: 'سبزیجات مدیترانه‌ای، بیس سالاد، فیله گوساله، کیپرز',
        descEng: 'Mediterranean vegetables, salad base, veal fillet and capers'
      },
      {
        nameEng: 'Choopan Salad',
        name: 'سالاد چوپان',
        src: '/images/menuPictures/salad2.jpg',
        price: 195000,
        desc: 'پنیر کوزه‌ای، پیاز بنفش، گوجه گیلاسی، خیار',
        descEng: 'Cottage cheese, purple onion, cherry tomato and cucumber'
      },
      {
        nameEng: 'Chicken steak Salad',
        name: 'سالاد استیک مرغ',
        src: '/images/menuPictures/salad6.jpg',
        price: 265000,
        desc: 'بیس سالاد، فیله مرغ گریل، نان تست، پنیر پارمزان',
        descEng: 'Salad base, grilled chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Caesar Salad with grilled chicken',
        name: 'سالاد سزار با مرغ گریل',
        src: '/images/menuPictures/salad3.jpg',
        price: 250000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Diet Salad',
        name: 'سالاد رژیمی',
        src: '/images/menuPictures/salad7.jpg',
        price: 235000,
        desc: 'سبزیجات مدیترانه‌ای، سس ارده، بیس سالاد، مخلوط میوه، آجیل مخلوط',
        descEng:
          'Mediterranean vegetables, Arde sauce, salad base, mixed fruit and nuts'
      },
      {
        nameEng: 'Caesar Salad with fried chicken',
        name: 'سالاد سزار با مرغ سوخاری',
        src: '/images/menuPictures/salad4.jpg',
        price: 260000,
        desc: 'بیس سالاد، فیله مرغ سوخاری، نان تست، پنیر پارمزان',
        descEng: 'Salad base, fried chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Seasons Salad',
        name: 'سالاد فصل',
        src: '/images/menuPictures/salad8.jpg',
        price: 110000,
        desc: '',
        descEng: ''
      }
    ],
    MainFood: [
      {
        nameEng: 'Orkideh Special Kabab Shishlik',
        name: 'شیشلیک مخصوص ارکیده',
        src: '/images/menuPictures/shishlik.jpg',
        price: 460000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Chenjeh',
        name: 'کباب چنجه مخصوص',
        src: '/images/menuPictures/chenje.jpg',
        price: 445000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Barg',
        name: 'کباب برگ مخصوص',
        src: '/images/menuPictures/barg.jpg',
        price: 425000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Koobideh (two skewers)',
        name: 'کباب کوبیده دوسیخ',
        src: '/images/menuPictures/koobideh.jpg',
        price: 248000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab (Bone-in chicken)',
        name: 'جوجه کباب با استخوان',
        src: '/images/menuPictures/joojeh1.jpg',
        price: 295000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Bakhtiari',
        name: 'کباب بختیاری',
        src: '/images/menuPictures/bakhtiari.jpg',
        price: 390000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: ' Kabab Vaziri',
        name: 'کباب وزیری',
        src: '/images/menuPictures/vaziri.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Ghezel Ala fish (Grilled trout)',
        name: 'ماهی قزل آلا کبابی',
        src: '/images/menuPictures/ghezel1.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kebab (Boneless chicken)',
        name: 'جوجه کباب بدون استخوان',
        src: '/images/menuPictures/joojeh2.jpg',
        price: 235000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab Fesenjani',
        name: 'جوجه کباب فسنجانی',
        src: '/images/menuPictures/fesenjani.jpg',
        price: 360000,
        desc: 'سس مرغ، گردو و انار',
        descEng: '(Chicken, walnut and pomegranate sauce)'
      },
      {
        nameEng: 'Ghezel Ala fish (Fried trout)',
        name: 'ماهی قزل آلا سرخ شده',
        src: '/images/menuPictures/ghezel2.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      }
    ],
    sini: [
      {
        nameEng: 'ORKIDEH Royal platter',
        name: 'سینی رویال ارکیده',
        src: '/images/menuPictures/sini1.jpg',
        price: 2_330_000,
        desc: `(مناسب برای 7 تا 8 نفر),
          1 پرس خوراک ماهیچه,
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `Mahicheh - ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh -Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH first class Kabab platter',
        name: 'سینی ممتاز کباب ارکیده',
        src: '/images/menuPictures/sini2.jpg',
        price: 1940000,
        desc: `
          (مناسب برای 6 تا 7نفر),
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1 سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh Kabab Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH Special Kabab platter',
        name: 'سینی مخصوص کباب ارکیده',
        src: '/images/menuPictures/sini3.jpg',
        price: 1380000,
        desc: `(مناسب برای 4 الی 5 نفر)
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب چنجه مخصوص,
          2 سیخ کباب کوبیده,
          1 سیخ جوجه کباب بدون استخوان`,
        descEng: `ORKIDEH Special Kabab Shishlik, Special Kabab Chenjeh. Kabab Koobideh,Joojeh Kabab
          `
      }
    ],
    Platters: [
      {
        nameEng: 'Lamb shank',
        name: 'خوراک ماهیچه گوسفندی',
        src: '/images/menuPictures/kh-mahicheh (1).jpg',
        price: 390_000
      },
      {
        nameEng: 'Lamb neck',
        name: 'خوراک گردن گوسفند',
        src: '/images/menuPictures/kh-gardan.jpg',
        price: 380_000
      },
      {
        nameEng: 'Rice and butter',
        name: 'چلو کره',
        src: '/images/menuPictures/cholo1.jpg',
        price: 90_000
      },
      {
        nameEng: 'Rice, favas and dill',
        name: 'بـاقـالی پــلو',
        src: '/images/menuPictures/sini1.jpg',
        price: 110_000
      },
      {
        nameEng: 'Chicken',
        name: 'خوراک مرغ',
        src: '/images/menuPictures/kh-morgh.jpg',
        price: 130_000
      },
      {
        nameEng: 'Rice and barberry',
        name: 'زرشک پلو',
        src: '/images/menuPictures/cholo3.jpg',
        price: 110_000
      }
    ],
    SpecialFoods: [
      {
        nameEng: 'Rice with lamb neck',
        name: 'چلو گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 470_000
      },
      {
        nameEng: 'Rice and favas with lamb neck',
        name: 'باقالی پلو با گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 490_000
      },
      {
        nameEng: 'Rice with lamb shank',
        name: 'چلو ماهیچه',
        src: '/images/menuPictures/ch3.jpg',
        price: 480_000
      },
      {
        nameEng: 'Rice and favas with lamb shank',
        name: 'باقالی پلو با ماهیچه',
        src: '/images/menuPictures/ch4.jpg',
        price: 500_000
      }
    ],
    dizi: [
      {
        nameEng: 'Dizi',
        name: 'دیزی ',
        src: '/images/menuPictures/dizi.jpg',
        price: 290_000
      }
    ],
    Sides: [
      {
        nameEng: 'Pickled garlic',
        name: 'سیر ترشی ',
        src: '/images/menuPictures/sir.jpg',
        price: 55_000
      },
      {
        nameEng: 'Olive, special vegetables and walnut',
        name: 'زیتون پرورده',
        src: '/images/menuPictures/zeytoon.jpg',
        price: 95_000
      },
      {
        nameEng: 'Yoghurt and cucumber',
        name: 'ماست و خیار',
        src: '/images/menuPictures/mast1.jpg',
        price: 60_000
      },
      {
        nameEng: 'Strained yoghurt and shallot',
        name: 'ماست چکیده موسیر',
        src: '/images/menuPictures/mast2.jpg',
        price: 60_000
      }
    ]
  },
  aghdasieh: {
    appetizers: [
      {
        nameEng: 'Milk mushroom soup',
        name: 'سوپ شیر و قارچ',
        src: '/images/menuPictures/soup.jpg',
        price: 95000
      },
      {
        nameEng: 'Barley soup',
        name: 'سوپ جو',
        src: '/images/menuPictures/soup2.jpg',
        price: 80000
      },
      {
        nameEng: 'French fries',
        name: 'سیب زمینی سرخ کرده',
        src: '/images/menuPictures/sib1.jpg',
        price: 95000
      },
      {
        nameEng: 'Kashke Bademjan',
        name: 'کشک بادمجان',
        src: '/images/menuPictures/kashk.jpg',
        price: 195000
      },
      {
        nameEng: 'Mirza Ghasemi',
        name: 'میرزا قاسمی',
        src: '/images/menuPictures/mirza.jpg',
        price: 160000
      },
      {
        nameEng: 'Tornado',
        name: 'تورنیدو',
        src: '/images/menuPictures/sib2.jpg',
        price: 110000
      }
    ],
    Salads: [
      {
        nameEng: 'Special Salad',
        name: 'سالاد اسپشیال',
        src: '/images/menuPictures/salad1.jpg',
        price: 320000,
        desc: 'بیس سالاد، برگ قیسی، جوانه ماش، مخلوط میوه',
        descEng: 'Salad base, Armenian plum, mung bean sprouts and mixed fruit'
      },
      {
        nameEng: 'Meat Steak Salad',
        name: 'سالاد استیک گوشت',
        src: '/images/menuPictures/salad5.jpg',
        price: 300000,
        desc: 'سبزیجات مدیترانه‌ای، بیس سالاد، فیله گوساله، کیپرز',
        descEng: 'Mediterranean vegetables, salad base, veal fillet and capers'
      },
      {
        nameEng: 'Choopan Salad',
        name: 'سالاد چوپان',
        src: '/images/menuPictures/salad2.jpg',
        price: 195000,
        desc: 'پنیر کوزه‌ای، پیاز بنفش، گوجه گیلاسی، خیار',
        descEng: 'Cottage cheese, purple onion, cherry tomato and cucumber'
      },
      {
        nameEng: 'Chicken steak Salad',
        name: 'سالاد استیک مرغ',
        src: '/images/menuPictures/salad6.jpg',
        price: 265000,
        desc: 'بیس سالاد، فیله مرغ گریل، نان تست، پنیر پارمزان',
        descEng: 'Salad base, grilled chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Caesar Salad with grilled chicken',
        name: 'سالاد سزار با مرغ گریل',
        src: '/images/menuPictures/salad3.jpg',
        price: 250000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Diet Salad',
        name: 'سالاد رژیمی',
        src: '/images/menuPictures/salad7.jpg',
        price: 235000,
        desc: 'سبزیجات مدیترانه‌ای، سس ارده، بیس سالاد، مخلوط میوه، آجیل مخلوط',
        descEng:
          'Mediterranean vegetables, Arde sauce, salad base, mixed fruit and nuts'
      },
      {
        nameEng: 'Caesar Salad with fried chicken',
        name: 'سالاد سزار با مرغ سوخاری',
        src: '/images/menuPictures/salad4.jpg',
        price: 260000,
        desc: 'بیس سالاد، فیله مرغ سوخاری، نان تست، پنیر پارمزان',
        descEng: 'Salad base, fried chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Seasons Salad',
        name: 'سالاد فصل',
        src: '/images/menuPictures/salad8.jpg',
        price: 110000,
        desc: '',
        descEng: ''
      }
    ],
    MainFood: [
      {
        nameEng: 'Orkideh Special Kabab Shishlik',
        name: 'شیشلیک مخصوص ارکیده',
        src: '/images/menuPictures/shishlik.jpg',
        price: 460000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Chenjeh',
        name: 'کباب چنجه مخصوص',
        src: '/images/menuPictures/chenje.jpg',
        price: 445000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Barg',
        name: 'کباب برگ مخصوص',
        src: '/images/menuPictures/barg.jpg',
        price: 425000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Koobideh (two skewers)',
        name: 'کباب کوبیده دوسیخ',
        src: '/images/menuPictures/koobideh.jpg',
        price: 248000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab (Bone-in chicken)',
        name: 'جوجه کباب با استخوان',
        src: '/images/menuPictures/joojeh1.jpg',
        price: 295000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Bakhtiari',
        name: 'کباب بختیاری',
        src: '/images/menuPictures/bakhtiari.jpg',
        price: 390000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: ' Kabab Vaziri',
        name: 'کباب وزیری',
        src: '/images/menuPictures/vaziri.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Ghezel Ala fish (Grilled trout)',
        name: 'ماهی قزل آلا کبابی',
        src: '/images/menuPictures/ghezel1.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kebab (Boneless chicken)',
        name: 'جوجه کباب بدون استخوان',
        src: '/images/menuPictures/joojeh2.jpg',
        price: 235000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab Fesenjani',
        name: 'جوجه کباب فسنجانی',
        src: '/images/menuPictures/fesenjani.jpg',
        price: 360000,
        desc: 'سس مرغ، گردو و انار',
        descEng: '(Chicken, walnut and pomegranate sauce)'
      },
      {
        nameEng: 'Ghezel Ala fish (Fried trout)',
        name: 'ماهی قزل آلا سرخ شده',
        src: '/images/menuPictures/ghezel2.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      }
    ],
    sini: [
      {
        nameEng: 'ORKIDEH Royal platter',
        name: 'سینی رویال ارکیده',
        src: '/images/menuPictures/sini1.jpg',
        price: 2_330_000,
        desc: `(مناسب برای 7 تا 8 نفر),
          1 پرس خوراک ماهیچه,
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `Mahicheh - ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh -Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH first class Kabab platter',
        name: 'سینی ممتاز کباب ارکیده',
        src: '/images/menuPictures/sini2.jpg',
        price: 1940000,
        desc: `
          (مناسب برای 6 تا 7نفر),
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1 سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh Kabab Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH Special Kabab platter',
        name: 'سینی مخصوص کباب ارکیده',
        src: '/images/menuPictures/sini3.jpg',
        price: 1380000,
        desc: `(مناسب برای 4 الی 5 نفر)
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب چنجه مخصوص,
          2 سیخ کباب کوبیده,
          1 سیخ جوجه کباب بدون استخوان`,
        descEng: `ORKIDEH Special Kabab Shishlik, Special Kabab Chenjeh. Kabab Koobideh,Joojeh Kabab
          `
      }
    ],
    Platters: [
      {
        nameEng: 'Lamb shank',
        name: 'خوراک ماهیچه گوسفندی',
        src: '/images/menuPictures/kh-mahicheh (1).jpg',
        price: 390_000
      },
      {
        nameEng: 'Lamb neck',
        name: 'خوراک گردن گوسفند',
        src: '/images/menuPictures/kh-gardan.jpg',
        price: 380_000
      },
      {
        nameEng: 'Rice and butter',
        name: 'چلو کره',
        src: '/images/menuPictures/cholo1.jpg',
        price: 90_000
      },
      {
        nameEng: 'Rice, favas and dill',
        name: 'بـاقـالی پــلو',
        src: '/images/menuPictures/sini1.jpg',
        price: 110_000
      },
      {
        nameEng: 'Chicken',
        name: 'خوراک مرغ',
        src: '/images/menuPictures/kh-morgh.jpg',
        price: 130_000
      },
      {
        nameEng: 'Rice and barberry',
        name: 'زرشک پلو',
        src: '/images/menuPictures/cholo3.jpg',
        price: 110_000
      }
    ],
    SpecialFoods: [
      {
        nameEng: 'Rice with lamb neck',
        name: 'چلو گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 470_000
      },
      {
        nameEng: 'Rice and favas with lamb neck',
        name: 'باقالی پلو با گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 490_000
      },
      {
        nameEng: 'Rice with lamb shank',
        name: 'چلو ماهیچه',
        src: '/images/menuPictures/ch3.jpg',
        price: 480_000
      },
      {
        nameEng: 'Rice and favas with lamb shank',
        name: 'باقالی پلو با ماهیچه',
        src: '/images/menuPictures/ch4.jpg',
        price: 500_000
      }
    ],
    dizi: [
      {
        nameEng: 'Dizi',
        name: 'دیزی ',
        src: '/images/menuPictures/dizi.jpg',
        price: 290_000
      }
    ],
    Sides: [
      {
        nameEng: 'Pickled garlic',
        name: 'سیر ترشی ',
        src: '/images/menuPictures/sir.jpg',
        price: 55_000
      },
      {
        nameEng: 'Olive, special vegetables and walnut',
        name: 'زیتون پرورده',
        src: '/images/menuPictures/zeytoon.jpg',
        price: 95_000
      },
      {
        nameEng: 'Yoghurt and cucumber',
        name: 'ماست و خیار',
        src: '/images/menuPictures/mast1.jpg',
        price: 60_000
      },
      {
        nameEng: 'Strained yoghurt and shallot',
        name: 'ماست چکیده موسیر',
        src: '/images/menuPictures/mast2.jpg',
        price: 60_000
      }
    ]
  },
  motelGho: {
    appetizers: [
      {
        nameEng: 'Milk mushroom soup',
        name: 'سوپ شیر و قارچ',
        src: '/images/menuPictures/soup.jpg',
        price: 95000
      },
      {
        nameEng: 'Barley soup',
        name: 'سوپ جو',
        src: '/images/menuPictures/soup2.jpg',
        price: 80000
      },
      {
        nameEng: 'French fries',
        name: 'سیب زمینی سرخ کرده',
        src: '/images/menuPictures/sib1.jpg',
        price: 95000
      },
      {
        nameEng: 'Kashke Bademjan',
        name: 'کشک بادمجان',
        src: '/images/menuPictures/kashk.jpg',
        price: 195000
      },
      {
        nameEng: 'Mirza Ghasemi',
        name: 'میرزا قاسمی',
        src: '/images/menuPictures/mirza.jpg',
        price: 160000
      },
      {
        nameEng: 'Tornado',
        name: 'تورنیدو',
        src: '/images/menuPictures/sib2.jpg',
        price: 110000
      }
    ],
    Salads: [
      {
        nameEng: 'Special Salad',
        name: 'سالاد اسپشیال',
        src: '/images/menuPictures/salad1.jpg',
        price: 320000,
        desc: 'بیس سالاد، برگ قیسی، جوانه ماش، مخلوط میوه',
        descEng: 'Salad base, Armenian plum, mung bean sprouts and mixed fruit'
      },
      {
        nameEng: 'Meat Steak Salad',
        name: 'سالاد استیک گوشت',
        src: '/images/menuPictures/salad5.jpg',
        price: 300000,
        desc: 'سبزیجات مدیترانه‌ای، بیس سالاد، فیله گوساله، کیپرز',
        descEng: 'Mediterranean vegetables, salad base, veal fillet and capers'
      },
      {
        nameEng: 'Choopan Salad',
        name: 'سالاد چوپان',
        src: '/images/menuPictures/salad2.jpg',
        price: 195000,
        desc: 'پنیر کوزه‌ای، پیاز بنفش، گوجه گیلاسی، خیار',
        descEng: 'Cottage cheese, purple onion, cherry tomato and cucumber'
      },
      {
        nameEng: 'Chicken steak Salad',
        name: 'سالاد استیک مرغ',
        src: '/images/menuPictures/salad6.jpg',
        price: 265000,
        desc: 'بیس سالاد، فیله مرغ گریل، نان تست، پنیر پارمزان',
        descEng: 'Salad base, grilled chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Caesar Salad with grilled chicken',
        name: 'سالاد سزار با مرغ گریل',
        src: '/images/menuPictures/salad3.jpg',
        price: 250000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Diet Salad',
        name: 'سالاد رژیمی',
        src: '/images/menuPictures/salad7.jpg',
        price: 235000,
        desc: 'سبزیجات مدیترانه‌ای، سس ارده، بیس سالاد، مخلوط میوه، آجیل مخلوط',
        descEng:
          'Mediterranean vegetables, Arde sauce, salad base, mixed fruit and nuts'
      },
      {
        nameEng: 'Caesar Salad with fried chicken',
        name: 'سالاد سزار با مرغ سوخاری',
        src: '/images/menuPictures/salad4.jpg',
        price: 260000,
        desc: 'بیس سالاد، فیله مرغ سوخاری، نان تست، پنیر پارمزان',
        descEng: 'Salad base, fried chicken fillet, toast and parmesan cheese'
      },
      {
        nameEng: 'Seasons Salad',
        name: 'سالاد فصل',
        src: '/images/menuPictures/salad8.jpg',
        price: 110000,
        desc: '',
        descEng: ''
      }
    ],
    MainFood: [
      {
        nameEng: 'Orkideh Special Kabab Shishlik',
        name: 'شیشلیک مخصوص ارکیده',
        src: '/images/menuPictures/shishlik.jpg',
        price: 460000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Chenjeh',
        name: 'کباب چنجه مخصوص',
        src: '/images/menuPictures/chenje.jpg',
        price: 445000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Special Kabab Barg',
        name: 'کباب برگ مخصوص',
        src: '/images/menuPictures/barg.jpg',
        price: 425000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Koobideh (two skewers)',
        name: 'کباب کوبیده دوسیخ',
        src: '/images/menuPictures/koobideh.jpg',
        price: 248000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab (Bone-in chicken)',
        name: 'جوجه کباب با استخوان',
        src: '/images/menuPictures/joojeh1.jpg',
        price: 295000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Kabab Bakhtiari',
        name: 'کباب بختیاری',
        src: '/images/menuPictures/bakhtiari.jpg',
        price: 390000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: ' Kabab Vaziri',
        name: 'کباب وزیری',
        src: '/images/menuPictures/vaziri.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Ghezel Ala fish (Grilled trout)',
        name: 'ماهی قزل آلا کبابی',
        src: '/images/menuPictures/ghezel1.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kebab (Boneless chicken)',
        name: 'جوجه کباب بدون استخوان',
        src: '/images/menuPictures/joojeh2.jpg',
        price: 235000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Joojeh Kabab Fesenjani',
        name: 'جوجه کباب فسنجانی',
        src: '/images/menuPictures/fesenjani.jpg',
        price: 360000,
        desc: 'سس مرغ، گردو و انار',
        descEng: '(Chicken, walnut and pomegranate sauce)'
      },
      {
        nameEng: 'Ghezel Ala fish (Fried trout)',
        name: 'ماهی قزل آلا سرخ شده',
        src: '/images/menuPictures/ghezel2.jpg',
        price: 290000,
        desc: '',
        descEng: ''
      }
    ],
    LocalDishes: [
      {
        nameEng: 'Boiled rice with lamb',
        name: 'کته کباب مخصوص',
        src: '/images/menuPictures/kate.jpg',
        price: 198000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Lamb, Special vegetables, walnut and pomegranate sauce',
        name: 'کباب ترش',
        src: '/images/menuPictures/torsh.jpg',
        price: 319000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Chicken, Special vegetables, walnut and pomegranate sauce',
        name: 'مرغ ترش',
        src: '/images/menuPictures/torsh2.jpg',
        price: 198000,
        desc: '',
        descEng: ''
      },
      {
        nameEng:
          'Bonless chicken, Special vegetables, walnut and pomegranate sauce',
        name: 'جوجه کباب ترش بدون استخوان',
        src: '/images/menuPictures/torsh (1).jpg',
        price: 320000,
        desc: '',
        descEng: ''
      },
      {
        nameEng:
          'Caspian Whitefish, Bonless chicken, Special vegetables, walnut and pomegranate sauce',
        name: 'ماهی سفید ترش',
        src: '/images/menuPictures/mahisefid-torsh.jpg',
        price: 395000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Salmon Trout',
        name: 'ماهی قزل آلا سالمون',
        src: '/images/menuPictures/ghezel.jpg',
        price: 330000,
        desc: '',
        descEng: ''
      },
      {
        nameEng:
          'Trout, Bonless chicken, Special vegetables, walnut and pomegranate sauce',
        name: 'ماهی قزل آلا ترش',
        src: '/images/menuPictures/ghezel-torsh.jpg',
        price: 330000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: ' Kabab Vaziri',
        name: 'کباب وزیری',
        src: '/images/menuPictures/vaziri.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Favas, special vegetables and egg',
        name: 'باقلاقاتوق',
        src: '/images/menuPictures/baghela.jpg',
        price: 95000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Caspian whitefish',
        name: 'ماهی سفید',
        src: '/images/menuPictures/mahisefid.jpg',
        price: 360000,
        desc: '',
        descEng: ''
      },
      {
        nameEng: 'Rice and special vegetables',
        name: 'سبزی پلو',
        src: '/images/menuPictures/sabzipolo.jpg',
        price: 195000,
        desc: 'سس مرغ، گردو و انار',
        descEng: ''
      }
    ],
    sini: [
      {
        nameEng: 'ORKIDEH Royal platter',
        name: 'سینی رویال ارکیده',
        src: '/images/menuPictures/sini1.jpg',
        price: 2_330_000,
        desc: `(مناسب برای 7 تا 8 نفر),
          1 پرس خوراک ماهیچه,
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `Mahicheh - ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh -Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH first class Kabab platter',
        name: 'سینی ممتاز کباب ارکیده',
        src: '/images/menuPictures/sini2.jpg',
        price: 1940000,
        desc: `
          (مناسب برای 6 تا 7نفر),
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب بختیاری,
          1 سیخ جوجه کباب با استخوان,
          1 سیخ جوجه کباب فسنجانی,
          2 سیخ کباب لقمه`,
        descEng: `ORKIDEH Special Kabab Shishlik - Kabab Bakhtiari - Joojeh Kabab - Joojeh Kabab Fesenjani - Kabab Loghmeh`
      },
      {
        nameEng: 'ORKIDEH Special Kabab platter',
        name: 'سینی مخصوص کباب ارکیده',
        src: '/images/menuPictures/sini3.jpg',
        price: 1380000,
        desc: `(مناسب برای 4 الی 5 نفر)
          1 سیخ شیشلیک مخصوص ارکیده,
          1 سیخ کباب چنجه مخصوص,
          2 سیخ کباب کوبیده,
          1 سیخ جوجه کباب بدون استخوان`,
        descEng: `ORKIDEH Special Kabab Shishlik, Special Kabab Chenjeh. Kabab Koobideh,Joojeh Kabab
          `
      }
    ],
    Platters: [
      {
        nameEng: 'Lamb shank',
        name: 'خوراک ماهیچه گوسفندی',
        src: '/images/menuPictures/kh-mahicheh (1).jpg',
        price: 390_000
      },
      {
        nameEng: 'Lamb neck',
        name: 'خوراک گردن گوسفند',
        src: '/images/menuPictures/kh-gardan.jpg',
        price: 380_000
      },
      {
        nameEng: 'Rice and butter',
        name: 'چلو کره',
        src: '/images/menuPictures/cholo1.jpg',
        price: 90_000
      },
      {
        nameEng: 'Rice, favas and dill',
        name: 'بـاقـالی پــلو',
        src: '/images/menuPictures/sini1.jpg',
        price: 110_000
      },
      {
        nameEng: 'Chicken',
        name: 'خوراک مرغ',
        src: '/images/menuPictures/kh-morgh.jpg',
        price: 130_000
      },
      {
        nameEng: 'Rice and barberry',
        name: 'زرشک پلو',
        src: '/images/menuPictures/cholo3.jpg',
        price: 110_000
      }
    ],
    SpecialFoods: [
      {
        nameEng: 'Rice with lamb neck',
        name: 'چلو گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 470_000
      },
      {
        nameEng: 'Rice and favas with lamb neck',
        name: 'باقالی پلو با گردن',
        src: '/images/menuPictures/ch-gardan.jpg',
        price: 490_000
      },
      {
        nameEng: 'Rice with lamb shank',
        name: 'چلو ماهیچه',
        src: '/images/menuPictures/ch3.jpg',
        price: 480_000
      },
      {
        nameEng: 'Rice and favas with lamb shank',
        name: 'باقالی پلو با ماهیچه',
        src: '/images/menuPictures/ch4.jpg',
        price: 500_000
      }
    ],
    dizi: [
      {
        nameEng: 'Dizi',
        name: 'دیزی ',
        src: '/images/menuPictures/dizi.jpg',
        price: 290_000
      }
    ],
    Sides: [
      {
        nameEng: 'Pickled garlic',
        name: 'سیر ترشی ',
        src: '/images/menuPictures/sir.jpg',
        price: 55_000
      },
      {
        nameEng: 'Olive, special vegetables and walnut',
        name: 'زیتون پرورده',
        src: '/images/menuPictures/zeytoon.jpg',
        price: 95_000
      },
      {
        nameEng: 'Yoghurt and cucumber',
        name: 'ماست و خیار',
        src: '/images/menuPictures/mast1.jpg',
        price: 60_000
      },
      {
        nameEng: 'Strained yoghurt and shallot',
        name: 'ماست چکیده موسیر',
        src: '/images/menuPictures/mast2.jpg',
        price: 60_000
      }
    ]
  }
}

export { menuData }
export { menusSliderData }
export { MarasemData }
export { imgSrcGallery }
export default articles
