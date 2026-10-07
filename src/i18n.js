import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      nav_brand: 'Mickey.DEV',
      nav_about: 'About',
      nav_services: 'Services',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      nav_hire_cta: 'Hire Me',

      // Hero
      hero_badge: 'Available for freelance & full-time projects',
      hero_greeting_prefix: 'Hi, I am',
      hero_name: 'Mikiyas Shiferaw',
      hero_role: 'Full-Stack Software Engineer & Mobile Specialist',
      hero_subtitle: 'I engineer fast, scalable web applications and high-impact React Native mobile apps for businesses and ambitious startups. Delivering clean code, elegant interfaces, and measurable results.',
      hero_cta_projects: 'View Selected Works',
      hero_cta_contact: 'Start a Project',
      
      // Stats
      stat_exp_val: '5+',
      stat_exp_lbl: 'Years Experience',
      stat_proj_val: '15+',
      stat_proj_lbl: 'Projects Built',
      stat_commit_val: '100%',
      stat_commit_lbl: 'On-Time Delivery',
      stat_speed_val: '<24h',
      stat_speed_lbl: 'Response Time',

      // Services
      services_badge: 'What I Offer',
      services_title: 'Tailored Software Solutions for Clients',
      services_subtitle: 'Everything you need to turn an idea into a secure, production-ready digital product.',
      service_web_title: 'Full-Stack Web Development',
      service_web_desc: 'Custom, blazing-fast web applications built with modern React, responsive UI, secure state management, and optimized SEO.',
      service_mobile_title: 'Mobile App Engineering',
      service_mobile_desc: 'Native-feel iOS and Android applications developed with React Native. Smooth animations, offline support, and intuitive user experiences.',
      service_api_title: 'Backend & Cloud Architecture',
      service_api_desc: 'Robust RESTful APIs, microservices, and databases (PostgreSQL, MongoDB) designed for heavy traffic, authentication, and security.',
      service_audit_title: 'Performance Optimization & Audit',
      service_audit_desc: 'Auditing, redesigning, and accelerating existing web applications to improve load times, user retention, and conversion rates.',

      // About
      about_badge: 'About Me',
      about_title: 'Crafting Reliable Software That Solves Real Problems',
      about_bio: "I am a dedicated software engineer with a proven track record of building production systems across web and mobile. Whether engineering high-concurrency real-time gaming platforms (like Yabello & Ahadu Bingo), modern e-commerce web applications, or healthcare mobile solutions, I combine engineering precision with user-centered design to help clients achieve their business goals.",
      about_tech_title: 'Core Technologies & Tools',

      // Projects
      projects_badge: 'Selected Portfolio',
      projects_title: 'Featured Client & Production Works',
      projects_subtitle: 'Explore recent applications that demonstrate clean architecture, responsiveness, and performance.',
      filter_all: 'All Projects',
      filter_web: 'Web & E-Commerce',
      filter_mobile: 'Mobile & Enterprise',
      project_yabellobingo_title: 'Yabello Bingo',
      project_yabellobingo_desc: 'Dynamic and interactive virtual bingo game platform featuring real-time number draws, live game lobbies, and fast-paced gameplay.',
      project_ahadubingo_title: 'Ahadu Bingo',
      project_ahadubingo_desc: 'Next-gen virtual bingo gaming app with live player rooms, real-time ticket validation, and interactive multiplayer mechanics.',
      project_lotterybingo_title: 'lotteryBingo',
      project_lotterybingo_desc: 'High-energy, real-time virtual bingo gaming application with interactive mechanics and instant feedback.',
      project_skillup_title: 'Skill-Up',
      project_skillup_desc: 'Comprehensive modern e-learning platform with dynamic course directories, video lessons, and student progress tracking.',
      project_shifebooks_title: 'Shife-Books',
      project_shifebooks_desc: 'Lightweight, modern e-commerce storefront designed for fast e-book browsing and digital purchases.',
      project_hilupharma_title: 'HiluPharma',
      project_hilupharma_desc: 'Cross-boundary pharmaceutical supply chain and equipment mobile application built with React Native.',
      project_link_live: 'Live Preview',
      project_link_source: 'GitHub Code',

      // Contact
      contact_badge: "Let's Connect",
      contact_title: 'Ready to build your next project?',
      contact_subtitle: 'Let us discuss how I can help bring your software idea to life with speed, quality, and precision.',
      contact_email_title: 'Email Address',
      contact_email_copy: 'Click to copy email',
      contact_phone_title: 'Direct Phone / Call',
      contact_phone_call: 'Call',
      contact_copied: 'Copied!',
      contact_telegram_chat: 'Telegram Chat',
      contact_qr_prompt: 'Scan to connect instantly on Telegram',
      contact_direct_telegram: 'Message on Telegram',
      
      // Footer
      footer_text: '© {{year}} Mikiyas Shiferaw (Mickey.DEV). Engineered with passion & precision.',
    },
  },
  am: {
    translation: {
      // Header
      nav_brand: 'Mickey.DEV',
      nav_about: 'ስለ እኔ',
      nav_services: 'አገልግሎቶች',
      nav_projects: 'ፕሮጀክቶች',
      nav_contact: 'እውቂያ',
      nav_hire_cta: 'አብረን እንስራ',

      // Hero
      hero_badge: 'ለአዳዲስ ፕሮጀክቶች እና ኮንትራቶች ዝግጁ',
      hero_greeting_prefix: 'ሰላም፣ እኔ',
      hero_name: 'ሚኪያስ ሽፈራው',
      hero_role: 'የሙሉ-ስታክ ሶፍትዌር መሃንዲስ እና የሞባይል ባለሙያ',
      hero_subtitle: 'ለድርጅቶች እና ለጀማሪ ቢዝነሶች ፈጣን፣ አስተማማኝ የድር መተግበሪያዎችን እና ተጽዕኖ ፈጣሪ የReact Native ሞባይል መተግበሪያዎችን እገነባለሁ። ጥራት ያለው ኮድ፣ ውብ ዲዛይን እና ተጨባጭ ውጤት።',
      hero_cta_projects: 'ስራዎቼን ይመልከቱ',
      hero_cta_contact: 'ፕሮጀክት ይጀምሩ',

      // Stats
      stat_exp_val: '5+',
      stat_exp_lbl: 'የስራ ልምድ (ዓመታት)',
      stat_proj_val: '15+',
      stat_proj_lbl: 'የተጠናቀቁ ፕሮጀክቶች',
      stat_commit_val: '100%',
      stat_commit_lbl: 'በሰዓቱ ማጠናቀቅ',
      stat_speed_val: '<24h',
      stat_speed_lbl: 'የምላሽ ፍጥነት',

      // Services
      services_badge: 'የማቀርበው',
      services_title: 'ለደንበኞች የተበጁ የሶፍትዌር መፍትሄዎች',
      services_subtitle: 'ሃሳብዎን ወደ አስተማማኝ እና ገበያ ላይ ወደሚሰራ ዲጂታል ምርት ለመቀየር የሚያስፈልጉ ነገሮች በሙሉ!',
      service_web_title: 'የሙሉ-ስታክ ድር መተግበሪያ ግንባታ',
      service_web_desc: 'በዘመናዊ React የተገነቡ፣ ለተጠቃሚ ምቹ፣ ፈጣን እና በጉግል በቀላሉ የሚገኙ (SEO) ዘመናዊ የድር መተግበሪያዎች።',
      service_mobile_title: 'የሞባይል መተግበሪያ ግንባታ',
      service_mobile_desc: 'በReact Native ለiOS እና ለአንድሮይድ የተሰሩ ጥራት ያላቸው፣ ፈጣን እና ኦፍላይን የሚሰሩ ዘመናዊ መተግበሪያዎች።',
      service_api_title: 'የጀርባ (Backend) እና ዳታቤዝ አርክቴክቸር',
      service_api_desc: 'አስተማማኝ የኤፒአይ (RESTful API)፣ የማይክሮ ሰርቪስ እና የዳታቤዝ (PostgreSQL፣ MongoDB) አስተማማኝ አሰራር።',
      service_audit_title: 'የአፈጻጸም ማሻሻል እና እድሳት',
      service_audit_desc: 'ያሉዎትን የቆዩ መተግበሪያዎች ፍጥነት፣ ዲዛይን እና ደህንነት በመመርመር ዘመናዊ እና ፈጣን ማድረግ።',

      // About
      about_badge: 'ስለ እኔ',
      about_title: 'ውስብስብ ሃሳቦችን ወደ አስተማማኝ ሶፍትዌር መቀየር',
      about_bio: 'በዌብ እና በሞባይል ኢንጂነሪንግ ዘርፍ ከ5 ዓመታት በላይ የተግባር ልምድ ያለኝ መሃንዲስ ነኝ። የቀጥታ ምናባዊ የቢንጎ ጨዋታዎች (እንደ ያቤሎ እና አሃዱ ቢንጎ)፣ የኢ-ኮሜርስ እና የጤና ጥበቃ መተግበሪያዎችን ገንብቻለሁ። ንፁህ ኮድ፣ ምርጥ የተጠቃሚ ተሞክሮ እና አስተማማኝ ውጤት ዋነኛ መርሆቼ ናቸው።',
      about_tech_title: 'ዋና ቴክኖሎጂዎች እና መሳሪያዎች',

      // Projects
      projects_badge: 'የተመረጡ ስራዎች',
      projects_title: 'የቅርብ ጊዜ የምርት እና የደንበኛ ስራዎቼ',
      projects_subtitle: 'ጥራት፣ ፍጥነት እና ከፍተኛ ደረጃ ያላቸውን የተሰሩ ስራዎች ይመልከቱ።',
      filter_all: 'ሁሉም ስራዎች',
      filter_web: 'የድር መተግበሪያዎች',
      filter_mobile: 'የሞባይል እና ሲስተሞች',
      project_yabellobingo_title: 'ያቤሎ ቢንጎ (Yabello Bingo)',
      project_yabellobingo_desc: 'የቀጥታ ቁጥሮች እጣ ማውጫ፣ የተጫዋቾች ሎቢ እና ፈጣን ምላሽ ያለው በይነተገናኝ ምናባዊ የቢንጎ ጨዋታ መድረክ።',
      project_ahadubingo_title: 'አሃዱ ቢንጎ (Ahadu Bingo)',
      project_ahadubingo_desc: 'የቀጥታ ጨዋታ ክፍሎች፣ የቲኬት ማረጋገጫ እና ባለብዙ ተጫዋች ስርዓት ያለው ዘመናዊ ምናባዊ የቢንጎ መተግበሪያ።',
      project_lotterybingo_title: 'lotteryBingo',
      project_lotterybingo_desc: 'በይነተገናኝ እና አዝናኝ ምናባዊ የቢንጎ ጨዋታ ከፈጣን ምላሽ ጋር።',
      project_skillup_title: 'ስኪል-አፕ (Skill-Up)',
      project_skillup_desc: 'ኮርሶችን የሚያስተዳድር፣ የተማሪዎችን እድገት የሚከታተል እና ለተጠቃሚ ምቹ የሆነ ዘመናዊ የኢ-ትምህርት መድረክ።',
      project_shifebooks_title: 'Shife-Books',
      project_shifebooks_desc: 'ለኢ-መጽሐፍት ሽያጭ እና ንባብ የተሰራ ፈጣን እና ቀላል የኢ-ኮሜርስ መድረክ።',
      project_hilupharma_title: 'HiluPharma',
      project_hilupharma_desc: 'ድንበር ተሻጋሪ የፋርማሲዩቲካል መሣሪያዎችን ሽያጭ ለማመቻቸት በReact Native የተሰራ የሞባይል መተግበሪያ።',
      project_link_live: 'ላይቭ ይመልከቱ',
      project_link_source: 'የምንጭ ኮድ',

      // Contact
      contact_badge: 'እንገናኝ',
      contact_title: 'አዲስ ፕሮጀክት አለዎት? አብረን እንስራ!',
      contact_subtitle: 'አዲስ የድር ወይም የሞባይል መተግበሪያ መገንባት ይፈልጋሉ? በጋራ እንወያይ እና ሃሳብዎን እውን እናድርገው።',
      contact_email_title: 'የኢሜይል አድራሻ',
      contact_email_copy: 'ኢሜይሉን ለመቅዳት ይጫኑ',
      contact_phone_title: 'ስልክ ቁጥር',
      contact_phone_call: 'ይደውሉ',
      contact_copied: 'ተቀድቷል!',
      contact_telegram_chat: 'የቴሌግራም ውይይት',
      contact_qr_prompt: 'በቴሌግራም በፍጥነት ለመገናኘት ይቃኙ',
      contact_direct_telegram: 'በቴሌግራም ይጻፉልኝ',

      // Footer
      footer_text: '© {{year}} ሚኪያስ ሽፈራው (Mickey.DEV)። በከፍተኛ ጥንቃቄ እና ፍቅር የተሰራ።',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

