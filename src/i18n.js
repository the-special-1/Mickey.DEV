import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      nav_about: 'About',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      // Hero
      hero_greeting: "Hi, I'm Mikiyas",
      hero_subtitle: "I'm a passionate software engineer specializing in building exceptional digital experiences. My mission is to craft clean, efficient, and user-friendly applications.",
      hero_button: 'View My Work',
      // About
      about_title: 'About Me',
      about_bio: "I'm a dedicated software engineer with a passion for building elegant and efficient solutions. I thrive on turning complex problems into beautiful, intuitive, and highly performant web and mobile applications.",
      // Projects
      projects_title: 'My Recent Works',
      project_skillup_title: 'Skill-up',
      project_skillup_desc: 'E-learning platform with various functions',
      project_shifebooks_title: 'Shife-Books',
      project_shifebooks_desc: 'simple and light-weight e-commerce platform for e-books',
      project_lotterybingo_title: 'lotteryBingo',
      project_lotterybingo_desc: 'interactive and fun virtual bingo game',
      project_amitpsm_title: 'AmitPSM',
      project_amitpsm_desc: 'Position and scholarship management system build using latest secure technologies for Arbaminch university institute of technology(AMIT)',
      project_hilupharma_title: 'HiluPharma',
      project_hilupharma_desc: 'a mobile app designed to facilitate cross-boundary pharamaceutical equipment sales build using latest frameworks including react-native',
      project_link_live: 'View Live',
      project_link_source: 'Source Code',
      // Contact
      contact_title: 'Connect With Me',
      contact_qr_prompt: 'Or scan to connect on Telegram',
      // Footer
      footer_text: '© {{year}} Mikiyas Shiferaw. All rights reserved.',
    },
  },
  am: {
    translation: {
      // Header
      nav_about: 'ስለ እኔ',
      nav_projects: 'ፕሮጀክቶች',
      nav_contact: 'እውቂያ',
      // Hero
      hero_greeting: 'ሰላም፣ እኔ ሚኪያስ ነኝ',
      hero_subtitle: 'ልዩ የዲጂታል ልምዶችን በመገንባት ላይ ያተኮረ የሶፍትዌር መሃንዲስ ነኝ። የእኔ ተልዕኮ ንፁህ፣ ቀልጣፋ እና ለተጠቃሚ ምቹ የሆኑ መተግበሪያዎችን መፍጠር ነው።',
      hero_button: 'ስራዎቼን ይመልከቱ',
      // About
      about_title: 'ስለ እኔ',
      about_bio: 'ውብ እና ቀልጣፋ መፍትሄዎችን የመገንባት ፍላጎት ያለኝ የሶፍትዌር መሃንዲስ ነኝ። ውስብስብ ችግሮችን ወደ ቆንጆ፣ ሊታወቅ የሚችል እና ከፍተኛ አፈጻጸም ያላቸው የድር መተግበሪያዎች መለወጥ ያስደስተኛል።',
      // Projects
      projects_title: 'የቅርብ ጊዜ ስራዎቼ',
      project_skillup_title: 'Skill-up',
      project_skillup_desc: 'የተለያዩ ተግባራት ያሉት የኢ-ትምህርት መድረክ',
      project_shifebooks_title: 'Shife-Books',
      project_shifebooks_desc: 'ለኢ-መጽሐፍት ቀላል እና ቀላል ክብደት ያለው የኢ-ኮሜርስ መድረክ',
      project_lotterybingo_title: 'lotteryBingo',
      project_lotterybingo_desc: 'በይነተገናኝ እና አዝናኝ ምናባዊ የቢንጎ ጨዋታ',
      project_amitpsm_title: 'AmitPSM',
      project_amitpsm_desc: 'ለአርባምንጭ ዩኒቨርሲቲ የቴክኖሎጂ ኢንስቲትዩት (AMIT) ዘመናዊ አስተማማኝ ቴክኖሎጂዎችን በመጠቀም የተገነባ የስራ መደብ እና የስኮላርሺፕ አስተዳደር ስርዓት',
      project_hilupharma_title: 'HiluPharma',
      project_hilupharma_desc: 'ድንበር ተሻጋሪ የፋርማሲዩቲካል መሣሪያዎችን ሽያጭ ለማመቻቸት የተነደፈ የሞባይል መተግበሪያ react-nativeን ጨምሮ ዘመናዊ ማዕቀፎችን በመጠቀም የተገነባ',
      project_link_live: 'ላይቭ ይመልከቱ',
      project_link_source: 'የምንጭ ኮድ',
      // Contact
      contact_title: 'ከእኔ ጋር ይገናኙ',
      contact_qr_prompt: 'ወይም በቴሌግራም ለመገናኘት ይቃኙ',
      // Footer
      footer_text: '© {{year}} ሚኪያስ ሽፈራው። ሁሉም መብቶች የተጠበቁ ናቸው።',
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
