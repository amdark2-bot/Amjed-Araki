import { LanguageCode } from '../types/i18n';

export const LANGUAGE_OPTIONS: Array<{
  code: LanguageCode;
  nativeLabel: string;
  dir: 'rtl' | 'ltr';
}> = [
  { code: 'ar', nativeLabel: 'العربية', dir: 'rtl' },
  { code: 'en', nativeLabel: 'English', dir: 'ltr' },
  { code: 'fr', nativeLabel: 'Français', dir: 'ltr' },
  { code: 'es', nativeLabel: 'Español', dir: 'ltr' },
];

export interface UiCopy {
  brandWordmark: string;
  brandTitleFull: string;
  consultantTitle: string;
  domainName: string;
  nav: {
    overview: string;
    services: string;
    pillars: string;
    founder: string;
    contact: string;
    cta: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    welcomeNote: string;
    primaryCta: string;
    secondaryCta: string;
    imageCaption: string;
    imageLocation: string;
    stats: Array<{ value: string; label: string; context: string }>;
  };
  servicesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    allDivisionsLabel: string;
    searchPlaceholder: string;
    clearFilter: string;
    showingCount: string;
    requestAction: string;
    noResultsTitle: string;
    noResultsHint: string;
  };
  pillarsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: Array<{
      index: string;
      category: string;
      title: string;
      description: string;
      metricValue: string;
      metricLabel: string;
      divisionId: 'media' | 'digital' | 'education' | 'advisory';
      exploreLabel: string;
    }>;
  };
  founderSection: {
    kicker: string;
    title: string;
    role: string;
    quote: string;
    philosophyBody: string;
    headquartersTitle: string;
    addressLine: string;
    correspondenceNote: string;
    copyAddressBtn: string;
    copiedLabel: string;
    domainLabel: string;
    languagesLabel: string;
    languagesValue: string;
    mobileLabel: string;
    whatsappLabel: string;
    whatsappCta: string;
    emailLabel: string;
    blogLabel: string;
    mapBox: {
      title: string;
      subtitle: string;
      openInMaps: string;
      shareLink: string;
      copyLink: string;
      linkCopied: string;
      loadingMap: string;
      fallbackNote: string;
      placeLabel: string;
    };
  };
  contactSection: {
    kicker: string;
    title: string;
    subtitle: string;
    labels: {
      fullName: string;
      fullNamePlaceholder: string;
      contactInfo: string;
      contactInfoPlaceholder: string;
      preferredLanguage: string;
      deliveryMode: string;
      remoteOption: string;
      officeOption: string;
      selectedService: string;
      generalConsultation: string;
      projectBrief: string;
      projectBriefPlaceholder: string;
      submitBtn: string;
      resetBtn: string;
    };
    errors: {
      nameRequired: string;
      contactRequired: string;
      contactInvalid: string;
      briefRequired: string;
    };
    confirmation: {
      title: string;
      subtitle: string;
      refLabel: string;
      summaryService: string;
      summaryMode: string;
      summaryLang: string;
      copyReceipt: string;
      copiedReceipt: string;
      sendWhatsapp: string;
      newRequest: string;
    };
  };
  footer: {
    tagline: string;
    addressShort: string;
    copyright: string;
    availableNote: string;
    downloadHtmlLabel: string;
    downloadPromptLabel: string;
  };
}

export const UI_COPY: Record<LanguageCode, UiCopy> = {
  ar: {
    brandWordmark: 'أمجويد ماركت',
    brandTitleFull: 'أمجويد ذكاء إبداعي ماركت',
    consultantTitle: 'مستشار المستشارين · د. أمجد العركي',
    domainName: 'Amjoid AI Market',
    nav: {
      overview: 'الرئيسية',
      services: 'الخدمات',
      pillars: 'القطاعات',
      founder: 'د. أمجد العركي',
      contact: 'التواصل',
      cta: 'طلب استشارة',
    },
    hero: {
      kicker: 'القاهرة والجيزة · متاح بالمراسلة حول العالم',
      headline: 'أمجويد ذكاء إبداعي ماركت',
      subheadline: 'مستشار المستشارين د. أمجد العركي — استشارات وأعمال مقروءة ومرئية ومسموعة بأحدث ما توصلت إليه التكنولوجيا.',
      welcomeNote:
        'سلام، ومن الموقع الجديد المؤقت ... وربنا يبارك. نرحب بكم في منظومة خدماتنا المطورة من الإعلام العام والتسويق، وحتى التعليم والتدريب النظري والعملي، والاستثمار والتحول الرقمي — مع توفر غالبيتها بالمراسلة.',
      primaryCta: 'استكشف 32 خدمة متخصصة',
      secondaryCta: 'تواصل مباشر مع د. أمجد',
      imageCaption: 'مقر الاستشارات والأعمال الإبداعية',
      imageLocation: '166 شارع الملك فيصل الرئيسي · أبراج سعودي 1، 2 · الجيزة',
      stats: [
        { value: '06', label: 'قطاعات استشارية وتنفيذية', context: 'من التحرير إلى الاستثمار والأزمات' },
        { value: '32', label: 'خدمة متخصصة ومطورة', context: 'مقروءة ومرئية ومسموعة' },
        { value: '04', label: 'لغات عمل وترجمة فورية', context: 'العربية · الإنجليزية · الفرنسية · الإسبانية' },
        { value: '100%', label: 'تنفيذ محلي وبالمراسلة', context: 'القاهرة والجيزة ولكافة أنحاء العالم' },
      ],
    },
    servicesSection: {
      kicker: 'دليل الخدمات المطورة والشاملة',
      title: 'كل الخدمات والاستشارات والأعمال في متناول أيديكم',
      subtitle:
        'نقدم الأحدث وآخر ما توصلت إليه التكنولوجيا عموماً عبر ستة قطاعات متكاملة، مع إمكانية طلب أي خدمة مباشرة أو بالمراسلة.',
      allDivisionsLabel: 'كافة القطاعات',
      searchPlaceholder: 'ابحث في الخدمات (مثل: ترجمة، موشن، سيو، جدوى، تلحين، ديكور...)',
      clearFilter: 'إعادة ضبط البحث',
      showingCount: 'خدمة معروضة',
      requestAction: 'اطلب هذه الخدمة',
      noResultsTitle: 'لم يتم العثور على خدمة مطابقة لعبارة البحث',
      noResultsHint: 'جرّب كلمات أوسع أو اعرض كافة القطاعات الستة.',
    },
    pillarsSection: {
      kicker: 'القطاعات التنفيذية الرئيسية',
      title: 'منظومة متكاملة تجمع الفكر الاستشاري بالتنفيذ التكنولوجي والفني',
      subtitle:
        'صُممت قطاعاتنا لتخدم المؤسسات والأفراد والطلاب والمستثمرين بأعلى معايير الدقة والابتكار.',
      cards: [
        {
          index: '01',
          category: 'الإعلام والصوتيات والموسيقى والفعاليات',
          title: 'الإنتاج المرئي والمسموع والتلحين وتنظيم المؤتمرات',
          description:
            'فيديو موشن جرافيك، تعليق صوتي ودوبلاج عربي وإنجليزي، تلحين وتوزيع موسيقي متكامل، عروض استعراضية فردية، وتنظيم الاحتفالات والمهرجانات منذ الافتتاح حتى الختام.',
          metricValue: '7',
          metricLabel: 'خدمات إعلامية وفنية متكاملة',
          divisionId: 'media',
          exploreLabel: 'عرض خدمات الإعلام والموسيقى',
        },
        {
          index: '02',
          category: 'التحول الرقمي وإنترنت الأشياء',
          title: 'تصميم المواقع والبرمجيات الإدارية والأتمتة والسيو',
          description:
            'تطوير المواقع والمدونات والتطبيقات الإدارية، حلول إنترنت الأشياء والأتمتة الرقمية، رفع الظهور في محركات البحث (SEO)، والدعم الفني وشبكات الاجتماعات.',
          metricValue: '5',
          metricLabel: 'مسارات تقنية ورقمية',
          divisionId: 'digital',
          exploreLabel: 'عرض خدمات التحول الرقمي',
        },
        {
          index: '03',
          category: 'التعليم والتدريب والرياضة والمحاضرات',
          title: 'تمكين الطلاب والأكاديميين وتأهيل وتطوير الأنشطة الرياضية',
          description:
            'شرح وتلخيص مقررات الجامعات، محاضرات وأوراق مؤتمرات، تدريب نظري وعملي، وتوجيه وتدريب وتأهيل وتطوير كل الأنشطة الرياضية والألعاب.',
          metricValue: '5',
          metricLabel: 'برامج تعليمية وتدريبية ورياضية',
          divisionId: 'education',
          exploreLabel: 'عرض خدمات التعليم والرياضة',
        },
        {
          index: '04',
          category: 'الاستثمار والإدارة وتحليل النظم والأزمات',
          title: 'الاستشارات الإدارية والمالية والتجارية ومعالجة الأزمات',
          description:
            'استشارات إدارية ومالية وتجارية واستثمارية، حساب تكلفة التأسيس ودراسات الجدوى والتسويق، وإشراف وتحليل نظم ومعالجة أزمات وشراكات عالمية.',
          metricValue: '6',
          metricLabel: 'محاور استشارية وإدارية',
          divisionId: 'advisory',
          exploreLabel: 'عرض الاستشارات والأزمات',
        },
      ],
    },
    founderSection: {
      kicker: 'القيادة والرؤية والمقر',
      title: 'د. أمجد العركي — مستشار المستشارين',
      role: 'مؤسس أمجويد ذكاء إبداعي وأمجويد ماركت',
      quote: '«ومعنا لا حدود للعطاء وللطموح .. وطالبوا المزيد .. وخدماتنا في متناول أيديكم.»',
      philosophyBody:
        'سعيد بالتواصل معكم دائماً مع تقديري واحترامي. نحرص في أمجويد ذكاء إبداعي ماركت على تقديم أحدث ما توصلت إليه التكنولوجيا والمعرفة في الخدمات العامة والاستشارات الهامة لكل ما يُرام ويُرجى، سواء بالحضور المباشر في مقرنا بالجيزة أو عبر المراسلة والعمل عن بُعد لجميع أنحاء العالم.',
      headquartersTitle: 'عنوان المقر الرئيسي — القاهرة / الجيزة',
      addressLine: '166 شارع الملك فيصل الرئيسي · أبراج سعودي 1، 2 · مقابل هارموني للتكييف · الممر التحت',
      correspondenceNote: 'تتوفر غالبية الخدمات والاستشارات بالمراسلة والاجتماعات الإلكترونية.',
      copyAddressBtn: 'نسخ العنوان',
      copiedLabel: 'تم نسخ العنوان',
      domainLabel: 'النطاق الرسمي',
      languagesLabel: 'لغات الخدمة',
      languagesValue: 'العربية · الإنجليزية · الفرنسية · الإسبانية',
      mobileLabel: 'موبايل',
      whatsappLabel: 'واتساب',
      whatsappCta: 'تواصل عبر واتساب',
      emailLabel: 'البريد الإلكتروني',
      blogLabel: 'الموقع والمدونة',
      mapBox: {
        title: 'موقع المقر على خرائط قوقل (Google Maps)',
        subtitle: 'الأديب والفنان والمطور د. أمجد العركي — 166 شارع الملك فيصل الرئيسي، الجيزة',
        openInMaps: 'فتح في خرائط قوقل',
        shareLink: 'مشاركة الرابط',
        copyLink: 'نسخ رابط الموقع',
        linkCopied: 'تم نسخ الرابط',
        loadingMap: 'جارٍ تحميل الخريطة التفاعلية...',
        fallbackNote: 'افتح الموقع مباشرة على خرائط قوقل أو شارك الرابط مع فريقك.',
        placeLabel: 'مقر أمجويد ذكاء إبداعي ماركت · د. أمجد العركي',
      },
    },
    contactSection: {
      kicker: 'بوابة الطلبات والاستشارات المباشرة',
      title: 'اطلب خدمتك أو احجز جلسة استشارية',
      subtitle:
        'اختر الخدمة المطلوبة وطريقة التنفيذ المناسبة وسجّل تفاصيل مشروعك لإعداد ملخص تنفيذي منظم للتواصل المباشر.',
      labels: {
        fullName: 'الاسم الكامل / الجهة',
        fullNamePlaceholder: 'أدخل اسمك أو اسم المؤسسة',
        contactInfo: 'البريد الإلكتروني أو رقم الهاتف / واتساب',
        contactInfoPlaceholder: 'name@domain.com أو رقم الهاتف',
        preferredLanguage: 'لغة التواصل المفضلة',
        deliveryMode: 'أسلوب تقديم الخدمة',
        remoteOption: 'بالمراسلة وأونلاين (عن بُعد)',
        officeOption: 'مقر القاهرة / الجيزة (شارع الملك فيصل)',
        selectedService: 'الخدمة أو الاستشارة المطلوبة',
        generalConsultation: 'استشارة عامة شاملة مع د. أمجد العركي',
        projectBrief: 'تفاصيل الطلب أو المشروع',
        projectBriefPlaceholder: 'اشرح احتياجك، الموعد المستهدف، أو اللغة المطلوبة...',
        submitBtn: 'إرسال وتأكيد ملخص الطلب',
        resetBtn: 'مسح النموذج',
      },
      errors: {
        nameRequired: 'يرجى كتابة الاسم الكامل أو اسم الجهة.',
        contactRequired: 'يرجى إدخال البريد الإلكتروني أو رقم الهاتف للتواصل.',
        contactInvalid: 'يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف لا يقل عن 7 أرقام.',
        briefRequired: 'يرجى كتابة نبذة مختصرة عن الخدمة أو الاستشارة المطلوبة.',
      },
      confirmation: {
        title: 'تم تجهيز ملخص طلبك بنجاح',
        subtitle:
          'نشكرك على تواصلك مع أمجويد ذكاء إبداعي ماركت — د. أمجد العركي. يمكنك نسخ المرجع التالي للاحتفاظ بتفاصيل طلبك أو إرساله مباشرة.',
        refLabel: 'رقم المرجع',
        summaryService: 'الخدمة المختارة',
        summaryMode: 'طريقة التنفيذ',
        summaryLang: 'لغة التواصل',
        copyReceipt: 'نسخ ملخص الطلب',
        copiedReceipt: 'تم نسخ الملخص',
        sendWhatsapp: 'إرسال الملخص عبر واتساب',
        newRequest: 'تقديم طلب آخر',
      },
    },
    footer: {
      tagline: 'أمجويد ذكاء إبداعي ماركت · مستشار المستشارين د. أمجد العركي',
      addressShort: 'القاهرة · الجيزة · 166 شارع الملك فيصل الرئيسي · أبراج سعودي 1، 2 · الممر التحت',
      copyright: '© 2026 أمجويد ذكاء إبداعي ماركت — جميع الحقوق محفوظة.',
      availableNote: 'معنا لا حدود للعطاء وللطموح · معظم الخدمات متاحة بالمراسلة.',
      downloadHtmlLabel: 'تنزيل ملف HTML كامل (CSS + JS)',
      downloadPromptLabel: 'تنزيل ملف البرومبت الكامل (Prompt)',
    },
  },
  en: {
    brandWordmark: 'Amjoid AI Market',
    brandTitleFull: 'Amjoid Creative Intelligence Market',
    consultantTitle: 'Consultant of Consultants · Dr. Amjed El Araki',
    domainName: 'Amjoid AI Market',
    nav: {
      overview: 'Overview',
      services: 'Services',
      pillars: 'Divisions',
      founder: 'Dr. El Araki',
      contact: 'Contact',
      cta: 'Request Consultation',
    },
    hero: {
      kicker: 'Cairo & Giza · Available Worldwide via Correspondence',
      headline: 'Amjoid AI Market',
      subheadline:
        'Consultant of Consultants Dr. Amjed El Araki — Comprehensive written, visual, and audio advisory powered by the latest technology.',
      welcomeNote:
        'Peace and blessings from our new flagship portal. Welcome to our upgraded suite of multidisciplinary services—spanning general media and marketing, theoretical and practical training, digital transformation, and investment advisory—most available remotely via correspondence.',
      primaryCta: 'Explore All 32 Services',
      secondaryCta: 'Consult Dr. Amjed',
      imageCaption: 'Executive Consultancy & Creative Studio',
      imageLocation: '166 King Faisal Main St. · Saudi Towers 1 & 2 · Giza, Cairo',
      stats: [
        { value: '06', label: 'Integrated Practice Divisions', context: 'From editorial to crisis advisory' },
        { value: '32', label: 'Specialized Services', context: 'Written, visual & audio formats' },
        { value: '04', label: 'Working Languages', context: 'Arabic · English · French · Spanish' },
        { value: '100%', label: 'Remote & On-Site Delivery', context: 'Giza HQ & global correspondence' },
      ],
    },
    servicesSection: {
      kicker: 'Comprehensive Service Directory',
      title: 'All Services, Consultations & Creative Works Within Reach',
      subtitle:
        'We deliver the latest technological and creative advancements across six specialized divisions, ready for direct execution or international correspondence.',
      allDivisionsLabel: 'All Divisions',
      searchPlaceholder: 'Search services (e.g., translation, motion, SEO, feasibility, music, decor...)',
      clearFilter: 'Reset Search',
      showingCount: 'services shown',
      requestAction: 'Request This Service',
      noResultsTitle: 'No matching services found for your query',
      noResultsHint: 'Try broader keywords or view all six practice divisions.',
    },
    pillarsSection: {
      kicker: 'Core Practice Divisions',
      title: 'Strategic Advisory Paired with Modern Technological & Artistic Execution',
      subtitle:
        'Built to serve institutions, entrepreneurs, academics, and international partners with clarity, neutrality, and craftsmanship.',
      cards: [
        {
          index: '01',
          category: 'Media, Audio, Music & Events',
          title: 'Motion Graphics, Dubbing, Music Composition & Live Events',
          description:
            'Broadcast-grade motion graphics, bilingual Arabic/English voiceover and dubbing, full music composition and arrangement, solo musical showcases, and end-to-end festival and conference management.',
          metricValue: '7',
          metricLabel: 'Media & artistic capabilities',
          divisionId: 'media',
          exploreLabel: 'View Media & Music Services',
        },
        {
          index: '02',
          category: 'Digital Transformation & IoT',
          title: 'Web Engineering, Admin Software, Automation & SEO',
          description:
            'Custom websites, blogs, and administrative applications, IoT and workflow automation for full digital transformation, search engine visibility (SEO), and technical conferencing networks.',
          metricValue: '5',
          metricLabel: 'Digital & technical tracks',
          divisionId: 'digital',
          exploreLabel: 'View Digital Services',
        },
        {
          index: '03',
          category: 'Education, Training, Sports & Lectures',
          title: 'Academic Coaching, Curriculum Analysis & Sports Development',
          description:
            'University coursework coaching, visiting lectures, theoretical and practical skill training, plus specialized guidance, conditioning, rehabilitation, and development for all sports and games.',
          metricValue: '5',
          metricLabel: 'Academic, training & sports programs',
          divisionId: 'education',
          exploreLabel: 'View Education & Sports Services',
        },
        {
          index: '04',
          category: 'Management, Finance, Investment & Crisis',
          title: 'Corporate Advisory, Systems Analysis & Crisis Resolution',
          description:
            'Administrative, financial, commercial, and investment consulting, neutral startup costing, feasibility and market studies, executive supervision, systems analysis, and crisis management.',
          metricValue: '6',
          metricLabel: 'Advisory & systems pillars',
          divisionId: 'advisory',
          exploreLabel: 'View Advisory & Systems',
        },
      ],
    },
    founderSection: {
      kicker: 'Leadership, Philosophy & Headquarters',
      title: 'Dr. Amjed El Araki — Consultant of Consultants',
      role: 'Founder of Amjoid Creative Intelligence & Amjoid Market',
      quote: '“With us, there are no limits to generosity and ambition. Demand more—our services are always within your reach.”',
      philosophyBody:
        'Always delighted to connect with you with utmost appreciation and respect. At Amjoid AI Market, we deliver the forefront of technology and multidisciplinary consulting for every worthwhile endeavor—available both at our Giza headquarters and globally by correspondence.',
      headquartersTitle: 'Cairo / Giza Headquarters',
      addressLine: '166 King Faisal Main Street · Saudi Towers 1 & 2 · Opposite Harmony Air Conditioning · Lower Passage',
      correspondenceNote: 'Most services and consultations are fully available via correspondence and online sessions.',
      copyAddressBtn: 'Copy Address',
      copiedLabel: 'Address Copied',
      domainLabel: 'Official Domain',
      languagesLabel: 'Service Languages',
      languagesValue: 'Arabic · English · French · Spanish',
      mobileLabel: 'Mobile',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Chat on WhatsApp',
      emailLabel: 'Email',
      blogLabel: 'Website & Blog',
      mapBox: {
        title: 'Headquarters on Google Maps',
        subtitle: 'Dr. Amjed El Araki Studio — 166 King Faisal Main St., Giza, Cairo',
        openInMaps: 'Open in Google Maps',
        shareLink: 'Share Link',
        copyLink: 'Copy Map Link',
        linkCopied: 'Link Copied',
        loadingMap: 'Loading interactive map...',
        fallbackNote: 'Open the headquarters pin directly on Google Maps or share the link.',
        placeLabel: 'Amjoid AI Market · Dr. Amjed El Araki',
      },
    },
    contactSection: {
      kicker: 'Direct Consultation Desk',
      title: 'Request a Service or Schedule Advisory',
      subtitle:
        'Select your required service and delivery preference to prepare a structured consultation brief for Dr. Amjed El Araki.',
      labels: {
        fullName: 'Full Name / Organization',
        fullNamePlaceholder: 'Enter your name or organization',
        contactInfo: 'Email Address or Phone / WhatsApp',
        contactInfoPlaceholder: 'name@domain.com or phone number',
        preferredLanguage: 'Preferred Language',
        deliveryMode: 'Delivery Format',
        remoteOption: 'Remote / Correspondence & Online',
        officeOption: 'Cairo / Giza Office (King Faisal St.)',
        selectedService: 'Requested Service or Consultation',
        generalConsultation: 'Comprehensive General Consultation with Dr. Amjed El Araki',
        projectBrief: 'Project Scope & Requirements',
        projectBriefPlaceholder: 'Describe your goals, timeline, or language requirements...',
        submitBtn: 'Confirm & Generate Request Brief',
        resetBtn: 'Clear Form',
      },
      errors: {
        nameRequired: 'Please enter your full name or organization.',
        contactRequired: 'Please provide an email address or phone number.',
        contactInvalid: 'Please enter a valid email address or a phone number with at least 7 digits.',
        briefRequired: 'Please include a brief description of your requested service.',
      },
      confirmation: {
        title: 'Consultation Brief Prepared',
        subtitle:
          'Thank you for reaching out to Amjoid AI Market — Dr. Amjed El Araki. Keep or copy your structured reference summary below.',
        refLabel: 'Reference Code',
        summaryService: 'Selected Service',
        summaryMode: 'Delivery Mode',
        summaryLang: 'Preferred Language',
        copyReceipt: 'Copy Request Summary',
        copiedReceipt: 'Summary Copied',
        sendWhatsapp: 'Send via WhatsApp',
        newRequest: 'Submit Another Request',
      },
    },
    footer: {
      tagline: 'Amjoid AI Market · Consultant of Consultants Dr. Amjed El Araki',
      addressShort: 'Cairo · Giza · 166 King Faisal Main St. · Saudi Towers 1 & 2 · Lower Passage',
      copyright: '© 2026 Amjoid AI Market — All rights reserved.',
      availableNote: 'No limits to generosity and ambition · Most services available by correspondence.',
      downloadHtmlLabel: 'Download Standalone HTML (CSS + JS)',
      downloadPromptLabel: 'Download Full Prompt File (.txt)',
    },
  },
  fr: {
    brandWordmark: 'Amjoid AI Market',
    brandTitleFull: 'Amjoid Intelligence Créative Market',
    consultantTitle: 'Consultant des Consultants · Dr. Amjed El Araki',
    domainName: 'Amjoid AI Market',
    nav: {
      overview: 'Accueil',
      services: 'Services',
      pillars: 'Pôles',
      founder: 'Dr. El Araki',
      contact: 'Contact',
      cta: 'Consultation',
    },
    hero: {
      kicker: 'Le Caire & Gizeh · Disponible à distance dans le monde entier',
      headline: 'Amjoid AI Market',
      subheadline:
        'Consultant des Consultants Dr. Amjed El Araki — Conseil et réalisations écrites, visuelles et audio portés par les dernières technologies.',
      welcomeNote:
        'Paix et bénédictions depuis notre nouveau portail. Bienvenue dans notre offre complète de services : communication et marketing, formation théorique et pratique, transformation numérique et conseil en investissement — la majorité disponible par correspondance.',
      primaryCta: 'Explorer les 32 Services',
      secondaryCta: 'Contacter Dr. Amjed',
      imageCaption: 'Cabinet de Conseil & Studio Créatif',
      imageLocation: '166 Rue Principale King Faisal · Tours Saudi 1 & 2 · Gizeh, Le Caire',
      stats: [
        { value: '06', label: 'Pôles d’Expertise Intégrés', context: 'De l’éditorial à la gestion de crise' },
        { value: '32', label: 'Services Spécialisés', context: 'Formats écrits, visuels et audio' },
        { value: '04', label: 'Langues de Travail', context: 'Arabe · Anglais · Français · Espagnol' },
        { value: '100%', label: 'Sur Place & à Distance', context: 'Siège de Gizeh et correspondance' },
      ],
    },
    servicesSection: {
      kicker: 'Répertoire Complet des Services',
      title: 'Tous Nos Services, Conseils et Réalisations à Votre Portée',
      subtitle:
        'Nous mettons les avancées technologiques et créatives les plus récentes au service de vos projets à travers six pôles spécialisés.',
      allDivisionsLabel: 'Tous les Pôles',
      searchPlaceholder: 'Rechercher un service (traduction, motion, SEO, faisabilité, musique...)',
      clearFilter: 'Réinitialiser',
      showingCount: 'services affichés',
      requestAction: 'Demander ce service',
      noResultsTitle: 'Aucun service correspondant trouvé',
      noResultsHint: 'Essayez des termes plus généraux ou affichez les six pôles.',
    },
    pillarsSection: {
      kicker: 'Pôles d’Exécution Stratégique',
      title: 'Une Alliance entre Conseil Stratégique, Technologie et Création Artistique',
      subtitle:
        'Conçu pour accompagner les institutions, entreprises, chercheurs, étudiants et investisseurs avec rigueur et créativité.',
      cards: [
        {
          index: '01',
          category: 'Médias, Audio, Musique & Événements',
          title: 'Motion Design, Doublage, Composition Musicale & Congrès',
          description:
            'Vidéos motion design professionnelles, voix off et doublage arabe/anglais, composition et arrangement musical, spectacles artistiques et organisation intégrale de festivals et conférences.',
          metricValue: '7',
          metricLabel: 'Services médias & artistiques',
          divisionId: 'media',
          exploreLabel: 'Voir les Services Médias',
        },
        {
          index: '02',
          category: 'Transformation Numérique & IoT',
          title: 'Développement Web, Logiciels de Gestion, IoT & SEO',
          description:
            'Création de sites, blogs et applications administratives, automatisation IoT, référencement SEO sur les moteurs de recherche, support technique et réseaux de visioconférence.',
          metricValue: '5',
          metricLabel: 'Solutions digitales & IoT',
          divisionId: 'digital',
          exploreLabel: 'Voir les Services Digitaux',
        },
        {
          index: '03',
          category: 'Éducation, Formation, Sport & Conférences',
          title: 'Accompagnement Universitaire, Programmes & Coaching Sportif',
          description:
            'Synthèse des cours universitaires, conférences, formation pratique et théorique, ainsi que l’orientation, la préparation et le développement pour tous sports et jeux.',
          metricValue: '5',
          metricLabel: 'Programmes éducatifs & sportifs',
          divisionId: 'education',
          exploreLabel: 'Voir Éducation & Sport',
        },
        {
          index: '04',
          category: 'Gestion, Finance, Investissement & Crise',
          title: 'Conseil Administratif & Financier, Systèmes & Gestion de Crises',
          description:
            'Conseil administratif, financier, commercial et d’investissement, études de faisabilité et marketing, supervision, analyse des systèmes et résolution de crises.',
          metricValue: '6',
          metricLabel: 'Axes de conseil & systèmes',
          divisionId: 'advisory',
          exploreLabel: 'Voir Conseil & Systèmes',
        },
      ],
    },
    founderSection: {
      kicker: 'Direction, Vision & Siège Social',
      title: 'Dr. Amjed El Araki — Consultant des Consultants',
      role: 'Fondateur d’Amjoid Creative Intelligence & Amjoid Market',
      quote: '« Avec nous, il n’y a aucune limite au don ni à l’ambition. Demandez davantage : nos services sont à votre portée. »',
      philosophyBody:
        'Toujours heureux d’échanger avec vous avec estime et respect. Chez Amjoid AI Market, nous mobilisons le meilleur de la technologie et du conseil multidisciplinaire pour répondre à chaque objectif, sur place à Gizeh ou à distance par correspondance.',
      headquartersTitle: 'Siège Social — Le Caire / Gizeh',
      addressLine: '166 Rue Principale King Faisal · Tours Saudi 1 & 2 · Face à Harmony Climatisation · Passage Inférieur',
      correspondenceNote: 'La majorité des services et consultations sont assurés par correspondance et en ligne.',
      copyAddressBtn: 'Copier l’adresse',
      copiedLabel: 'Adresse copiée',
      domainLabel: 'Domaine Officiel',
      languagesLabel: 'Langues de Service',
      languagesValue: 'Arabe · Anglais · Français · Espagnol',
      mobileLabel: 'Mobile',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Contacter sur WhatsApp',
      emailLabel: 'E-mail',
      blogLabel: 'Site & Blog',
      mapBox: {
        title: 'Localisation sur Google Maps',
        subtitle: 'Dr. Amjed El Araki — 166 Rue King Faisal, Gizeh, Le Caire',
        openInMaps: 'Ouvrir dans Google Maps',
        shareLink: 'Partager le lien',
        copyLink: 'Copier le lien',
        linkCopied: 'Lien copié',
        loadingMap: 'Chargement de la carte interactive...',
        fallbackNote: 'Ouvrez la fiche directement sur Google Maps ou partagez le lien.',
        placeLabel: 'Amjoid AI Market · Dr. Amjed El Araki',
      },
    },
    contactSection: {
      kicker: 'Bureau de Consultation Directe',
      title: 'Demander un Service ou Planifier une Consultation',
      subtitle:
        'Sélectionnez le service souhaité et votre mode d’accompagnement pour préparer un dossier structuré à l’attention du Dr. Amjed El Araki.',
      labels: {
        fullName: 'Nom Complet / Organisation',
        fullNamePlaceholder: 'Votre nom ou celui de votre structure',
        contactInfo: 'E-mail ou Téléphone / WhatsApp',
        contactInfoPlaceholder: 'nom@domaine.com ou numéro',
        preferredLanguage: 'Langue Souhaitée',
        deliveryMode: 'Modalité de Prestation',
        remoteOption: 'À distance / Par correspondance',
        officeOption: 'Bureau Le Caire / Gizeh (King Faisal)',
        selectedService: 'Service ou Conseil Demandé',
        generalConsultation: 'Consultation générale avec Dr. Amjed El Araki',
        projectBrief: 'Détails du Projet ou Besoin',
        projectBriefPlaceholder: 'Précisez vos objectifs, délais ou langues requises...',
        submitBtn: 'Valider la Demande',
        resetBtn: 'Effacer',
      },
      errors: {
        nameRequired: 'Veuillez saisir votre nom complet ou organisation.',
        contactRequired: 'Veuillez indiquer un e-mail ou un numéro de téléphone.',
        contactInvalid: 'Veuillez saisir un e-mail valide ou un numéro d’au moins 7 chiffres.',
        briefRequired: 'Veuillez décrire brièvement votre besoin.',
      },
      confirmation: {
        title: 'Dossier de Demande Préparé',
        subtitle:
          'Merci d’avoir contacté Amjoid AI Market — Dr. Amjed El Araki. Conservez ou copiez votre récapitulatif ci-dessous.',
        refLabel: 'Référence',
        summaryService: 'Service Choisi',
        summaryMode: 'Modalité',
        summaryLang: 'Langue',
        copyReceipt: 'Copier le Récapitulatif',
        copiedReceipt: 'Récapitulatif Copié',
        sendWhatsapp: 'Envoyer via WhatsApp',
        newRequest: 'Nouvelle Demande',
      },
    },
    footer: {
      tagline: 'Amjoid AI Market · Consultant des Consultants Dr. Amjed El Araki',
      addressShort: 'Le Caire · Gizeh · 166 Rue King Faisal · Tours Saudi 1 & 2 · Passage Inférieur',
      copyright: '© 2026 Amjoid AI Market — Tous droits réservés.',
      availableNote: 'Aucune limite au don ni à l’ambition · Services disponibles par correspondance.',
      downloadHtmlLabel: 'Télécharger HTML autonome (CSS + JS)',
      downloadPromptLabel: 'Télécharger le fichier Prompt (.txt)',
    },
  },
  es: {
    brandWordmark: 'Amjoid AI Market',
    brandTitleFull: 'Amjoid Inteligencia Creativa Market',
    consultantTitle: 'Consultor de Consultores · Dr. Amjed El Araki',
    domainName: 'Amjoid AI Market',
    nav: {
      overview: 'Inicio',
      services: 'Servicios',
      pillars: 'Áreas',
      founder: 'Dr. El Araki',
      contact: 'Contacto',
      cta: 'Solicitar Consulta',
    },
    hero: {
      kicker: 'El Cairo y Guiza · Disponible en todo el mundo por correspondencia',
      headline: 'Amjoid AI Market',
      subheadline:
        'Consultor de Consultores Dr. Amjed El Araki — Consultoría integral escrita, visual y sonora impulsada por la tecnología más avanzada.',
      welcomeNote:
        'Paz y bendiciones desde nuestro nuevo portal. Bienvenido a nuestra cartera renovada de servicios: desde medios de comunicación y marketing hasta formación teórica y práctica, transformación digital e inversión — la mayoría disponibles por correspondencia.',
      primaryCta: 'Explorar 32 Servicios',
      secondaryCta: 'Consultar al Dr. Amjed',
      imageCaption: 'Estudio Creativo y Consultoría Ejecutiva',
      imageLocation: '166 Calle Principal King Faisal · Torres Saudi 1 y 2 · Guiza, El Cairo',
      stats: [
        { value: '06', label: 'Áreas de Práctica Integrada', context: 'De redacción a manejo de crisis' },
        { value: '32', label: 'Servicios Especializados', context: 'Formatos escritos, visuales y audio' },
        { value: '04', label: 'Idiomas de Atención', context: 'Árabe · Inglés · Francés · Español' },
        { value: '100%', label: 'Presencial y por Correspondencia', context: 'Sede en Guiza y alcance global' },
      ],
    },
    servicesSection: {
      kicker: 'Catálogo Completo de Servicios',
      title: 'Todos Nuestros Servicios, Consultorías y Obras a Su Alcance',
      subtitle:
        'Ofrecemos lo más reciente en tecnología y creatividad a través de seis divisiones especializadas, con atención presencial o por correspondencia.',
      allDivisionsLabel: 'Todas las Áreas',
      searchPlaceholder: 'Buscar servicio (traducción, motion, SEO, viabilidad, música...)',
      clearFilter: 'Restablecer',
      showingCount: 'servicios mostrados',
      requestAction: 'Solicitar este servicio',
      noResultsTitle: 'No se encontraron servicios para su búsqueda',
      noResultsHint: 'Pruebe palabras más generales o explore las seis áreas.',
    },
    pillarsSection: {
      kicker: 'Divisiones Estratégicas de Trabajo',
      title: 'Consultoría de Alto Nivel Unida a Ejecución Tecnológica y Artística',
      subtitle:
        'Diseñado para servir a instituciones, empresas, estudiantes, académicos e inversores con precisión, neutralidad y excelencia.',
      cards: [
        {
          index: '01',
          category: 'Medios, Audio, Música y Eventos',
          title: 'Motion Graphics, Doblaje, Composición Musical y Congresos',
          description:
            'Videos motion graphics, locución y doblaje en árabe e inglés, composición y arreglos musicales completos, presentaciones artísticas en vivo y organización integral de festivales y congresos.',
          metricValue: '7',
          metricLabel: 'Capacidades de medios y arte',
          divisionId: 'media',
          exploreLabel: 'Ver Servicios de Medios',
        },
        {
          index: '02',
          category: 'Transformación Digital e IoT',
          title: 'Diseño Web, Software Administrativo, Automatización y SEO',
          description:
            'Sitios web, blogs y aplicaciones de gestión, automatización e Internet de las Cosas (IoT), posicionamiento SEO en buscadores, soporte técnico y redes para reuniones online.',
          metricValue: '5',
          metricLabel: 'Soluciones digitales y técnicas',
          divisionId: 'digital',
          exploreLabel: 'Ver Servicios Digitales',
        },
        {
          index: '03',
          category: 'Educación, Deportes y Conferencias',
          title: 'Apoyo Universitario, Ponencias y Desarrollo Deportivo',
          description:
            'Explicación de asignaturas universitarias, ponencias, capacitación práctica, además de orientación, entrenamiento, rehabilitación y desarrollo para todo deporte y juego.',
          metricValue: '5',
          metricLabel: 'Programas educativos y deportivos',
          divisionId: 'education',
          exploreLabel: 'Ver Educación y Deportes',
        },
        {
          index: '04',
          category: 'Gestión, Finanzas, Inversión y Crisis',
          title: 'Consultoría Integral, Análisis de Sistemas y Gestión de Crisis',
          description:
            'Asesoría administrativa, financiera, comercial y de inversión, estudios de viabilidad y mercado, supervisión ejecutiva, análisis de sistemas y manejo de crisis.',
          metricValue: '6',
          metricLabel: 'Pilares de asesoría y sistemas',
          divisionId: 'advisory',
          exploreLabel: 'Ver Asesoría y Sistemas',
        },
      ],
    },
    founderSection: {
      kicker: 'Liderazgo, Filosofía y Sede',
      title: 'Dr. Amjed El Araki — Consultor de Consultores',
      role: 'Fundador de Amjoid Inteligencia Creativa y Amjoid Market',
      quote: '«Con nosotros no hay límites para el aporte ni para la ambición. Exija más: nuestros servicios están al alcance de su mano.»',
      philosophyBody:
        'Siempre encantado de comunicarme con usted con aprecio y respeto. En Amjoid AI Market reunimos lo último en tecnología y consultoría multidisciplinaria para cada proyecto de valor, tanto en nuestra sede de Guiza como por correspondencia internacional.',
      headquartersTitle: 'Sede Principal — El Cairo / Guiza',
      addressLine: '166 Calle Principal King Faisal · Torres Saudi 1 y 2 · Frente a Harmony Aire Acondicionado · Pasaje Inferior',
      correspondenceNote: 'La mayoría de los servicios están disponibles por correspondencia y sesiones en línea.',
      copyAddressBtn: 'Copiar dirección',
      copiedLabel: 'Dirección copiada',
      domainLabel: 'Dominio Oficial',
      languagesLabel: 'Idiomas de Servicio',
      languagesValue: 'Árabe · Inglés · Francés · Español',
      mobileLabel: 'Móvil',
      whatsappLabel: 'WhatsApp',
      whatsappCta: 'Escribir por WhatsApp',
      emailLabel: 'Correo',
      blogLabel: 'Sitio y Blog',
      mapBox: {
        title: 'Ubicación en Google Maps',
        subtitle: 'Dr. Amjed El Araki — 166 Calle King Faisal, Guiza, El Cairo',
        openInMaps: 'Abrir en Google Maps',
        shareLink: 'Compartir enlace',
        copyLink: 'Copiar enlace',
        linkCopied: 'Enlace copiado',
        loadingMap: 'Cargando mapa interactivo...',
        fallbackNote: 'Abra la ubicación directamente en Google Maps o comparta el enlace.',
        placeLabel: 'Amjoid AI Market · Dr. Amjed El Araki',
      },
    },
    contactSection: {
      kicker: 'Mesa de Solicitud Directa',
      title: 'Solicite un Servicio o Programe su Consultoría',
      subtitle:
        'Seleccione el servicio deseado y la modalidad de atención para generar su resumen de solicitud dirigido al Dr. Amjed El Araki.',
      labels: {
        fullName: 'Nombre Completo / Organización',
        fullNamePlaceholder: 'Ingrese su nombre o entidad',
        contactInfo: 'Correo Electrónico o Teléfono / WhatsApp',
        contactInfoPlaceholder: 'nombre@dominio.com o teléfono',
        preferredLanguage: 'Idioma Preferido',
        deliveryMode: 'Modalidad de Atención',
        remoteOption: 'Por correspondencia y en línea (remoto)',
        officeOption: 'Oficina El Cairo / Guiza (King Faisal)',
        selectedService: 'Servicio o Consultoría Solicitada',
        generalConsultation: 'Consultoría general integral con el Dr. Amjed El Araki',
        projectBrief: 'Detalles del Proyecto o Consulta',
        projectBriefPlaceholder: 'Describa sus objetivos, plazos o idioma requerido...',
        submitBtn: 'Confirmar y Generar Resumen',
        resetBtn: 'Limpiar Formulario',
      },
      errors: {
        nameRequired: 'Por favor ingrese su nombre completo u organización.',
        contactRequired: 'Por favor ingrese un correo electrónico o número telefónico.',
        contactInvalid: 'Ingrese un correo válido o un número telefónico de al menos 7 dígitos.',
        briefRequired: 'Por favor describa brevemente el servicio requerido.',
      },
      confirmation: {
        title: 'Resumen de Solicitud Generado',
        subtitle:
          'Gracias por contactar con Amjoid AI Market — Dr. Amjed El Araki. Puede copiar o conservar su comprobante de referencia a continuación.',
        refLabel: 'Código de Referencia',
        summaryService: 'Servicio Elegido',
        summaryMode: 'Modalidad',
        summaryLang: 'Idioma',
        copyReceipt: 'Copiar Resumen',
        copiedReceipt: 'Resumen Copiado',
        sendWhatsapp: 'Enviar por WhatsApp',
        newRequest: 'Enviar Otra Solicitud',
      },
    },
    footer: {
      tagline: 'Amjoid AI Market · Consultor de Consultores Dr. Amjed El Araki',
      addressShort: 'El Cairo · Guiza · 166 Calle King Faisal · Torres Saudi 1 y 2 · Pasaje Inferior',
      copyright: '© 2026 Amjoid AI Market — Todos los derechos reservados.',
      availableNote: 'Sin límites para el aporte ni la ambición · Servicios disponibles por correspondencia.',
      downloadHtmlLabel: 'Descargar HTML autónomo (CSS + JS)',
      downloadPromptLabel: 'Descargar archivo Prompt (.txt)',
    },
  },
};
