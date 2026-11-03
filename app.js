/* AURELLE Invitations — vanilla JS. No dependencies, no backend. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var WA_NUMBER = '201069711151';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- Translations ---------------- */
  var T = {
    ar: {
      skip: 'تخطَّ إلى المحتوى', menu: 'القائمة',
      nav_home: 'الرئيسية', nav_invitations: 'الدعوات', nav_occasions: 'المناسبات', nav_how: 'كيف نعمل', nav_about: 'من نحن', nav_contact: 'تواصل معنا', nav_order: 'اطلب دعوتك',
      hero_kicker: 'AURELLE Invitations',
      hero_h1: 'كل لحظة مميزة تستحق دعوة استثنائية.',
      hero_p: 'دعوات إلكترونية مصممة بعناية، بتفاصيل تعكس ذوقك وتحكي حكايتك.',
      hero_browse: 'تصفحوا التصاميم', hero_create: 'صمموا دعوتي',
      tagline: 'دعوات تليق بلحظاتكِ',
      cat_eyebrow: 'المناسبات', cat_title: 'لكل مناسبة حكايتها', cat_sub: 'اختاروا مناسبتكم وابدؤوا من التصميم الأقرب لذوقكم.',
      explore: 'استكشفوا',
      gal_eyebrow: 'المجموعة', gal_title: 'مجموعة تصاميم الدعوات', gal_sub: 'تصاميم أصلية كنقطة انطلاق — كل دعوة نهائية تُصمَّم خصيصًا لصاحبها.',
      search_label: 'بحث', search_ph: 'ابحث عن تصميم…', filter_all: 'الكل',
      no_results: 'لا توجد تصاميم مطابقة. جرّبوا كلمة أخرى أو اختاروا «الكل».',
      count_n: function (n) { return n + (n === 1 ? ' تصميم' : n === 2 ? ' تصميمان' : n <= 10 ? ' تصاميم' : ' تصميمًا'); },
      preview: 'معاينة الدعوة', customize: 'خصّصوا هذا التصميم',
      cust_eyebrow: 'دعوات مخصصة', cust_title: 'مش مجرد دعوة... دي حكايتكم بتفاصيلها.',
      cust_sub: 'التصاميم المعروضة أمثلة وبداية للإلهام، وكل دعوة نهائية تُصمَّم لصاحبها حسب ذوقه واتفاقنا معه.',
      c1t: 'ألوان وثيمات مخصصة', c1d: 'نختار الألوان والأسلوب والأجواء والتفاصيل الزخرفية حسب ذوقكم.',
      c2t: 'صور وفيديوهات شخصية', c2d: 'ندمج صوركم وفيديوهاتكم في الدعوة. دمج الفيديو خدمة اختيارية.',
      c3t: 'أغنية أصلية للعروسين', c3d: 'خدمة مميزة اختيارية: أغنية رومانسية أصلية بأسمائكما، ويمكن أن تتضمن تفاصيل من قصتكما إن اتفقنا على ذلك، وتُدمج في الدعوة الرقمية.',
      c3tag: 'إضافة مميزة — باتفاق وسعر منفصلين',
      c4t: 'حركات وانتقالات مخصصة', c4d: 'نخصّص حركة الافتتاح والانتقالات والتأثيرات البصرية والخطوط والخلفيات والزخارف.',
      c5t: 'صياغة شخصية للدعوة', c5d: 'الأسماء ونص الدعوة والرسائل والعبارات بالصياغة التي تعبّر عنكم.',
      c6t: 'ميزات تفاعلية', c6d: 'بحسب الباقة المتفق عليها، قد تشمل الدعوة عدًّا تنازليًا، وخريطة الموقع، ونموذج تأكيد الحضور، ومعرض صور، وفيديو، وموسيقى خلفية يتحكم بها الزائر.',
      cust_cta: 'صمموا دعوتي',
      cust_note: 'الميزات النهائية ومدة التسليم وعدد التعديلات والسعر يُتفق عليها مع العميل قبل بدء التنفيذ. ليست كل الميزات المميزة مشمولة تلقائيًا، وبعض الإضافات (مثل الأغنية الأصلية) خدمات مدفوعة بشكل منفصل.',
      how_eyebrow: 'الخطوات', how_title: 'كيف نعمل',
      s1t: 'اختاروا إلهامكم', s1d: 'تصفحوا التصاميم النموذجية واختاروا الأسلوب الذي يعجبكم.',
      s2t: 'شاركونا التفاصيل', s2d: 'أرسلوا الأسماء وتفاصيل المناسبة والألوان والصور والفيديوهات وأي تفضيلات شخصية.',
      s3t: 'استلموا دعوتكم المخصصة', s3d: 'نصمم دعوتكم وفق التصميم والميزات المتفق عليها.',
      about_eyebrow: 'من نحن', about_title: 'استوديو دعوات رقمية بروح بوتيك',
      about_p1: 'AURELLE استوديو بوتيك للدعوات الرقمية، نحوّل فيه المناسبات الخاصة إلى تجارب رقمية أنيقة ومخصصة بعناية.',
      about_p2: 'نؤمن أن الدعوة هي أول ما يلمسه ضيوفكم من حكايتكم، لذلك نعمل على كل دعوة بإنصات لتفضيلاتكم وتفاصيلها الصغيرة.',
      v1: 'اهتمام بالتفاصيل', v2: 'إبداع شخصي', v3: 'سرد بصري أنيق', v4: 'دعوات تُصمَّم حسب الطلب',
      contact_eyebrow: 'تواصل معنا', contact_title: 'لنبدأ حكايتكم', contact_sub: 'راسلونا على واتساب لنناقش تصميمكم وتفاصيله، أو اكتبوا لنا من النموذج وسنجهّز لكم رسالة جاهزة.',
      wa_btn: 'تواصلوا عبر واتساب', wa_label: 'واتساب',
      f_name: 'الاسم', f_occ: 'المناسبة', f_msg: 'رسالتكم', f_send: 'أرسلوا عبر واتساب',
      f_note: 'هذا النموذج لا يحفظ بياناتكم على أي خادم؛ عند الإرسال تُفتح محادثة واتساب برسالة جاهزة تراجعونها وترسلونها بأنفسكم.',
      f_err: 'من فضلكم اكتبوا اسمكم أولًا.',
      foot_tag: 'دعوات تليق بلحظاتكِ', foot_nav: 'روابط', foot_occ: 'المناسبات', foot_contact: 'تواصل', rights: 'جميع الحقوق محفوظة.',
      pv_close: 'إغلاق', pv_music_on: 'تشغيل الموسيقى', pv_music_off: 'إيقاف الموسيقى',
      pv_open_hint: 'اضغطوا على الختم لفتح الدعوة',
      pv_when: 'التاريخ', pv_time: 'الوقت', pv_where: 'المكان',
      pv_cd_title: 'العدّ التنازلي', pv_d: 'يوم', pv_h: 'ساعة', pv_m: 'دقيقة', pv_s: 'ثانية',
      pv_cd_note: 'تاريخ تجريبي لعرض الفكرة.',
      pv_more_title: 'ما يمكن إضافته إلى دعوتكم',
      pv_more_note: 'هذه معاينة نموذجية بأسماء وتفاصيل تجريبية. الميزات التالية تُضاف حسب الباقة المتفق عليها.',
      pv_f: ['عدّ تنازلي', 'رابط الموقع على الخرائط', 'معرض صور', 'فيديو', 'تأكيد الحضور', 'موسيقى مخصصة'],
      pv_music_note: 'موسيقى المعاينة لحن تجريبي بسيط؛ الموسيقى الحقيقية تُتفق عليها معكم.',
      pv_cta_note: 'الأسماء والنص والألوان والميزات والسعر تُحدَّد معكم قبل التنفيذ.',
      f_occ_pick: 'اختاروا المناسبة', f_occ_other: 'أخرى'
    },
    en: {
      skip: 'Skip to content', menu: 'Menu',
      nav_home: 'Home', nav_invitations: 'Invitations', nav_occasions: 'Occasions', nav_how: 'How It Works', nav_about: 'About', nav_contact: 'Contact', nav_order: 'Order Now',
      hero_kicker: 'AURELLE Invitations',
      hero_h1: 'Every Special Moment Deserves an Extraordinary Invitation.',
      hero_p: 'Thoughtfully designed digital invitations, personalized to tell your story.',
      hero_browse: 'Browse Designs', hero_create: 'Create My Invitation',
      tagline: 'Every Special Moment Begins with an Invitation.',
      cat_eyebrow: 'Occasions', cat_title: 'A Story for Every Occasion', cat_sub: 'Choose your occasion and begin with the design closest to your taste.',
      explore: 'Explore',
      gal_eyebrow: 'The Collection', gal_title: 'Invitation Design Collection', gal_sub: 'Original sample designs as a starting point — every final invitation is created specifically for its owner.',
      search_label: 'Search', search_ph: 'Search designs…', filter_all: 'All',
      no_results: 'No matching designs. Try another word or choose “All”.',
      count_n: function (n) { return n + (n === 1 ? ' design' : ' designs'); },
      preview: 'Preview Invitation', customize: 'Customize / Order This Design',
      cust_eyebrow: 'Custom-Made', cust_title: 'More Than an Invitation. Your Story, Beautifully Told.',
      cust_sub: 'The designs shown are examples and starting points. Every final invitation is customized for its owner, according to their preferences and our agreement.',
      c1t: 'Custom Colors & Themes', c1d: 'Choose colors, style, atmosphere and decorative details according to your taste.',
      c2t: 'Personal Photos & Videos', c2d: 'Your own photographs and videos woven into the invitation. Custom video integration is an optional service.',
      c3t: 'Original Couple Songs', c3d: 'An optional premium service: an original romantic song written for the bride and groom. It can include your names and, if agreed, details of your story, and can be integrated into the digital invitation.',
      c3tag: 'Premium add-on — separate agreement & price',
      c4t: 'Personalized Animations', c4d: 'Customize opening animations, transitions, visual effects, typography, backgrounds and decorative elements.',
      c5t: 'Personal Invitation Wording', c5d: 'Names, invitation text, messages and wording that sound like you.',
      c6t: 'Interactive Features', c6d: 'Depending on the agreed package, invitations may include countdowns, location maps, RSVP forms, photo galleries, video sections and user-controlled background music.',
      cust_cta: 'Create My Invitation',
      cust_note: 'Final features, delivery time, revisions and pricing are agreed with you before production begins. Premium features are not automatically included, and some add-ons (such as the original song) are separate paid services.',
      how_eyebrow: 'The Process', how_title: 'How It Works',
      s1t: 'Choose Your Inspiration', s1d: 'Browse the sample designs and select the style you like.',
      s2t: 'Share Your Details', s2d: 'Send names, event information, colors, photos, videos, and any personal preferences.',
      s3t: 'Receive Your Personalized Invitation', s3d: 'We create your invitation according to the agreed design and features.',
      about_eyebrow: 'About', about_title: 'A Boutique Digital Invitation Studio',
      about_p1: 'AURELLE is a boutique digital invitation studio dedicated to transforming special occasions into beautiful, personalized digital experiences.',
      about_p2: 'An invitation is the first part of your story your guests hold in their hands. We listen closely to your preferences and shape every small detail around them.',
      v1: 'Attention to detail', v2: 'Personalized creativity', v3: 'Elegant visual storytelling', v4: 'Bespoke invitation experiences',
      contact_eyebrow: 'Contact', contact_title: 'Let’s Begin Your Story', contact_sub: 'Message us on WhatsApp to discuss your design and its details, or fill in the short form and we’ll prepare a ready message for you.',
      wa_btn: 'Chat on WhatsApp', wa_label: 'WhatsApp',
      f_name: 'Name', f_occ: 'Occasion', f_msg: 'Your message', f_send: 'Send via WhatsApp',
      f_note: 'This form does not store your data on any server. On sending, a WhatsApp chat opens with a ready message that you review and send yourself.',
      f_err: 'Please enter your name first.',
      foot_tag: 'Every Special Moment Begins with an Invitation.', foot_nav: 'Links', foot_occ: 'Occasions', foot_contact: 'Contact', rights: 'All rights reserved.',
      pv_close: 'Close', pv_music_on: 'Play music', pv_music_off: 'Stop music',
      pv_open_hint: 'Tap the seal to open your invitation',
      pv_when: 'Date', pv_time: 'Time', pv_where: 'Venue',
      pv_cd_title: 'Countdown', pv_d: 'Days', pv_h: 'Hours', pv_m: 'Min', pv_s: 'Sec',
      pv_cd_note: 'Sample date, shown to demonstrate the feature.',
      pv_more_title: 'What can be added to your invitation',
      pv_more_note: 'This is a sample preview with placeholder names and details. The features below are added according to the agreed package.',
      pv_f: ['Countdown', 'Map location link', 'Photo gallery', 'Video', 'RSVP', 'Custom music'],
      pv_music_note: 'Preview music is a simple sample melody; real music is agreed with you.',
      pv_cta_note: 'Names, wording, colors, features and pricing are agreed with you before production.',
      f_occ_pick: 'Choose an occasion', f_occ_other: 'Other'
    }
  };

  var CATS = [
    { id: 'wedding', ar: 'زفاف', en: 'Wedding', art: 'ca-wedding', big: 'rings',
      dAr: 'دعوات زفاف تروي بداية الحكاية بأناقة.', dEn: 'Wedding invitations that open your story with elegance.',
      eyeAr: 'بكل الحب يدعوكم', eyeEn: 'Together with their families',
      msgAr: 'بقلوب يملؤها الفرح ندعوكم لمشاركتنا أجمل لحظات العمر. حضوركم يكمل فرحتنا.',
      msgEn: 'With hearts full of joy, we invite you to share the most beautiful day of our lives. Your presence completes our happiness.' },
    { id: 'engagement', ar: 'خطوبة', en: 'Engagement', art: 'ca-engagement', big: 'star',
      dAr: 'دعوات خطوبة عصرية بلمسات رقيقة.', dEn: 'Modern engagement invitations with a delicate touch.',
      eyeAr: 'يسعدنا دعوتكم لحفل خطوبتنا', eyeEn: 'Celebrate our engagement',
      msgAr: 'يسعدنا أن نشارككم فرحة خطوبتنا، وننتظر حضوركم لنحتفل معًا.',
      msgEn: 'We are delighted to share the joy of our engagement and look forward to celebrating with you.' },
    { id: 'henna', ar: 'حنة', en: 'Henna', art: 'ca-henna', big: 'flower',
      dAr: 'دعوات ليلة الحنة بروح تراثية دافئة.', dEn: 'Henna night invitations with a warm, traditional spirit.',
      eyeAr: 'ليلة الحنة', eyeEn: 'The Henna Night',
      msgAr: 'ليلة من الفرح والأغاني والتراث، ندعوكم لتشاركونا ليلة الحنة.',
      msgEn: 'An evening of joy, music and heritage. Join us for the henna night.' },
    { id: 'birthday', ar: 'عيد ميلاد', en: 'Birthday', art: 'ca-birthday', big: 'star',
      dAr: 'دعوات أعياد ميلاد للكبار والصغار.', dEn: 'Birthday invitations for grown-ups and little ones.',
      eyeAr: 'ندعوكم للاحتفال', eyeEn: 'You are invited to celebrate',
      msgAr: 'يوم مميز يحلو بوجودكم. تعالوا نحتفل معًا بالحلوى والضحك واللحظات الحلوة.',
      msgEn: 'A special day made sweeter by your company. Come celebrate with cake, laughter and good moments.' },
    { id: 'newborn', ar: 'سبوع ومولود', en: 'Newborn & Sebou', art: 'ca-newborn', big: 'moon',
      dAr: 'دعوات استقبال المولود وحفل السبوع.', dEn: 'Invitations to welcome a newborn and celebrate the Sebou.',
      eyeAr: 'أهلًا بك في الدنيا', eyeEn: 'Welcome to the world',
      msgAr: 'بكل الحب نستقبل فرحتنا الصغيرة، وندعوكم لمشاركتنا هذه اللحظات الغالية.',
      msgEn: 'With all our love we welcome our little joy, and invite you to share these precious moments.' }
  ];
  var CAT = {}; CATS.forEach(function (c) { CAT[c.id] = c; });

  /* Original sample designs. Names/dates/venues are placeholders. */
  var TPL = [
    { id: 'royal-gold', cat: 'wedding', style: 'royal', ar: 'الذهبي الملكي', en: 'Royal Gold',
      dAr: 'إطار ذهبي مزدوج وقوس ملكي على خلفية بنية عميقة.', dEn: 'A double gold frame and royal arch on deep brown.',
      nAr: 'ليلى & عمر', nEn: 'Layla & Omar', date: '2027-06-18T19:30', vAr: 'قاعة الياسمين', vEn: 'Jasmine Ballroom' },
    { id: 'blush-garden', cat: 'wedding', style: 'floral', ar: 'الحديقة الوردية', en: 'Blush Garden',
      dAr: 'أغصان وورود ناعمة بألوان الوردي الباهت.', dEn: 'Soft sprigs and blossoms in blush tones.',
      nAr: 'ملك & ياسين', nEn: 'Malak & Yassin', date: '2027-05-07T18:00', vAr: 'حديقة الورد', vEn: 'The Rose Garden' },
    { id: 'ivory-line', cat: 'wedding', style: 'minimal', ar: 'خط العاج', en: 'Ivory Line',
      dAr: 'تصميم عاجي هادئ بخط رفيع وحروف كبيرة.', dEn: 'Calm ivory with a fine line and generous type.',
      nAr: 'نور & كريم', nEn: 'Nour & Karim', date: '2027-09-24T20:00', vAr: 'فيلا اللؤلؤ', vEn: 'Pearl Villa' },
    { id: 'soiree-moderne', cat: 'engagement', style: 'modern', ar: 'سواريه عصري', en: 'Soirée Moderne',
      dAr: 'دوائر متقاطعة بلون الشمبانيا، عصرية وأنيقة.', dEn: 'Interlocking champagne circles, modern and refined.',
      nAr: 'هدى & آدم', nEn: 'Huda & Adam', date: '2027-03-12T19:00', vAr: 'صالة الأفق', vEn: 'Horizon Lounge' },
    { id: 'henna-nights', cat: 'henna', style: 'henna', ar: 'ليالي الحنة', en: 'Henna Nights',
      dAr: 'أشرطة هندسية تراثية بدرجات الطين والذهب.', dEn: 'Traditional geometric bands in clay and gold.',
      nAr: 'سلمى', nEn: 'Salma', date: '2027-06-16T20:00', vAr: 'بيت العائلة', vEn: 'The Family Home' },
    { id: 'pastel-whisper', cat: 'birthday', style: 'pastel', ar: 'همس الباستيل', en: 'Pastel Whisper',
      dAr: 'نقاط باستيل ناعمة لعيد ميلاد مرح وهادئ.', dEn: 'Soft pastel dots for a gentle, playful birthday.',
      nAr: 'ياسمين', nEn: 'Yasmine', date: '2027-02-20T17:00', vAr: 'مقهى الحديقة', vEn: 'Garden Café' },
    { id: 'little-star', cat: 'birthday', style: 'kids', ar: 'النجمة الصغيرة', en: 'Little Star Gold',
      dAr: 'نجوم ذهبية على أخضر عميق لعيد ميلاد طفل أنيق.', dEn: 'Gold stars on deep green for a refined child’s birthday.',
      nAr: 'آدم', nEn: 'Adam', age: '5', date: '2027-04-09T16:30', vAr: 'نادي الأطفال', vEn: 'Kids’ Club' },
    { id: 'moonlit-welcome', cat: 'newborn', style: 'newborn', ar: 'ترحيب القمر', en: 'Moonlit Welcome',
      dAr: 'هلال ونجوم هادئة بدرجات الأخضر الباهت.', dEn: 'A crescent and quiet stars in pale sage.',
      nAr: 'الصغيرة ملاك', nEn: 'Baby Malak', date: '2027-01-29T18:00', vAr: 'منزلنا', vEn: 'Our Home' },
    { id: 'petal-sebou', cat: 'newborn', style: 'sebou', ar: 'سبوع البتلات', en: 'Petal Sebou',
      dAr: 'إطار بيضاوي من الزهور بألوان الخوخ لحفل السبوع.', dEn: 'An oval frame of blossoms in peach for the Sebou.',
      nAr: 'سبوع يوسف', nEn: 'Youssef’s Sebou', date: '2027-02-05T17:30', vAr: 'حديقة المنزل', vEn: 'Home Garden' },
    { id: 'quiet-celebration', cat: 'birthday', style: 'quiet', ar: 'احتفال هادئ', en: 'Quiet Celebration',
      dAr: 'تصميم بسيط عصري بخط جانبي ومربع واحد.', dEn: 'Modern minimal with a side rule and a single square.',
      nAr: 'سارة تتم الثلاثين', nEn: 'Sara turns 30', date: '2027-03-26T20:30', vAr: 'سطح الأفق', vEn: 'Skyline Terrace' }
  ];
  /* Extra search keywords per style (both languages) */
  var KW = { royal: 'royal gold luxury ملكي ذهبي فاخر', floral: 'floral romantic flowers رومانسي زهور ورد', minimal: 'minimal ivory simple بسيط عاج هادئ', modern: 'modern elegant عصري أنيق', henna: 'traditional heritage تراثي تقليدي', pastel: 'pastel soft باستيل ناعم', kids: 'kids children child luxury أطفال طفل', newborn: 'baby moon elegant مولود طفل قمر', sebou: 'baby floral flowers سبوع زهور', quiet: 'minimalist modern celebration بسيط عصري احتفال' };
  var TPL_BY_ID = {}; TPL.forEach(function (t) { TPL_BY_ID[t.id] = t; });

  /* ---------------- State ---------------- */
  var lang = 'ar';
  try { var saved = localStorage.getItem('aurelle-lang'); if (saved === 'ar' || saved === 'en') lang = saved; } catch (e) {}
  var filterCat = 'all', query = '';

  function t(key) { var v = T[lang][key]; return v === undefined ? key : v; }
  function pick(o, k) { return o[k + (lang === 'ar' ? 'Ar' : 'En')] || o[lang === 'ar' ? 'ar' : 'en']; }
  function dateObj(tp) { return new Date(tp.date); }
  function fmtDate(d) {
    try { return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d); }
    catch (e) { return d.toDateString(); }
  }
  function fmtTime(d) {
    try { return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', { hour: 'numeric', minute: '2-digit' }).format(d); }
    catch (e) { return d.toTimeString().slice(0, 5); }
  }

  /* ---------------- WhatsApp ---------------- */
  function waUrl(msg) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg); }
  function msgDesign(tp) {
    var cat = CAT[tp.cat];
    return lang === 'ar'
      ? 'مرحباً AURELLE Invitations، أرغب في تصميم دعوة مخصصة بناءً على تصميم ' + tp.ar + ' (المناسبة: ' + cat.ar + '). أود مناقشة الألوان والصور والفيديوهات والتفاصيل والإضافات المتاحة. (اللغة المختارة: العربية)'
      : "Hello AURELLE Invitations! I'm interested in customizing the " + tp.en + ' invitation (occasion: ' + cat.en + "). I'd like to discuss colors, personal photos/videos, and available customization options. (Selected language: English)";
  }
  function msgGeneral(kind) {
    if (kind === 'custom') {
      return lang === 'ar'
        ? 'مرحباً AURELLE Invitations، أرغب في تصميم دعوة مخصصة وأود مناقشة الألوان والصور والفيديوهات والتفاصيل والإضافات المتاحة. (اللغة المختارة: العربية)'
        : "Hello AURELLE Invitations! I'd like to create a personalized invitation and discuss colors, photos/videos, and available options. (Selected language: English)";
    }
    return lang === 'ar'
      ? 'مرحباً AURELLE Invitations، أرغب في الاستفسار عن طلب دعوة إلكترونية مخصصة. (اللغة المختارة: العربية)'
      : "Hello AURELLE Invitations! I'd like to ask about ordering a custom digital invitation. (Selected language: English)";
  }
  function refreshWaLinks() {
    $$('[data-wa]').forEach(function (a) { a.href = waUrl(msgGeneral(a.getAttribute('data-wa'))); });
  }

  /* ---------------- Invitation mockup ---------------- */
  function decoHtml(tp) {
    var s = tp.style;
    if (s === 'royal') return '<svg class="deco arch" aria-hidden="true"><use href="#arch"/></svg>';
    if (s === 'floral') return '<svg class="deco s1" aria-hidden="true"><use href="#sprig"/></svg><svg class="deco s2" aria-hidden="true"><use href="#sprig"/></svg><svg class="deco f1" aria-hidden="true"><use href="#flower"/></svg><svg class="deco f2" aria-hidden="true"><use href="#flower"/></svg>';
    if (s === 'minimal') return '<i class="deco line"></i>';
    if (s === 'modern') return '<i class="deco ring"></i><i class="deco ring2"></i>';
    if (s === 'henna') return '<i class="deco band top"></i><i class="deco band bot"></i><svg class="deco fl" aria-hidden="true"><use href="#flower"/></svg>';
    if (s === 'pastel') return '<i class="deco dots"></i>';
    if (s === 'kids') return ['a', 'b', 'c', 'd'].map(function (k) { return '<svg class="deco st ' + k + '" aria-hidden="true"><use href="#star"/></svg>'; }).join('');
    if (s === 'newborn') return '<svg class="deco mn" aria-hidden="true"><use href="#moon"/></svg>' + ['a', 'b', 'c'].map(function (k) { return '<svg class="deco st ' + k + '" aria-hidden="true"><use href="#star"/></svg>'; }).join('');
    if (s === 'sebou') return ['a', 'b', 'c', 'd'].map(function (k) { return '<svg class="deco fl ' + k + '" aria-hidden="true"><use href="#flower"/></svg>'; }).join('');
    if (s === 'quiet') return '<i class="deco sq"></i>';
    return '';
  }
  function mock(tp, extra) {
    var cat = CAT[tp.cat], d = dateObj(tp);
    var eye = lang === 'ar' ? cat.eyeAr : cat.eyeEn;
    var age = tp.age ? '<div class="age" dir="ltr">' + (lang === 'ar' ? tp.age.replace(/\d/g, function (n) { return '٠١٢٣٤٥٦٧٨٩'[n]; }) : tp.age) + '</div>' : '';
    return '<div class="inv inv--' + tp.style + ' t-' + tp.style + (extra ? ' ' + extra : '') + '" role="img" aria-label="' + pick(tp, '').replace(/"/g, '') + '">' +
      decoHtml(tp) +
      '<svg class="orn" aria-hidden="true"><use href="#orn"/></svg>' +
      '<p class="inv-eye">' + eye + '</p>' +
      '<h4 class="inv-names">' + pick(tp, 'n') + '</h4>' + age +
      '<p class="inv-date">' + fmtDate(d) + '</p>' +
      '<p class="inv-place">' + pick(tp, 'v') + '</p></div>';
  }
  function byId(id) { return TPL_BY_ID[id]; }

  /* ---------------- Renderers ---------------- */
  function renderHero() {
    $('#heroArt').innerHTML = mock(byId('blush-garden'), 'h1') + mock(byId('royal-gold'), 'h2') + mock(byId('ivory-line'), 'h3');
  }
  function renderCats() {
    var big = { rings: 'rings', star: 'star', flower: 'flower', moon: 'moon' };
    $('#catGrid').innerHTML = CATS.map(function (c) {
      var sm = c.big === 'flower' ? 'flower' : 'star';
      return '<article class="cat reveal in"><div class="cat-art ' + c.art + '" aria-hidden="true">' +
        '<svg class="big"><use href="#' + big[c.big] + '"/></svg>' +
        '<svg class="sm a"><use href="#' + sm + '"/></svg><svg class="sm b"><use href="#' + sm + '"/></svg><svg class="sm c"><use href="#star"/></svg></div>' +
        '<div class="cat-body"><h3>' + (lang === 'ar' ? c.ar : c.en) + '</h3><p>' + (lang === 'ar' ? c.dAr : c.dEn) + '</p>' +
        '<button type="button" class="btn btn-line btn-sm" data-cat="' + c.id + '">' + t('explore') + '</button></div></article>';
    }).join('');
  }
  function renderChips() {
    var items = [{ id: 'all', label: t('filter_all') }].concat(CATS.map(function (c) { return { id: c.id, label: lang === 'ar' ? c.ar : c.en }; }));
    $('#chips').innerHTML = items.map(function (i) {
      return '<button type="button" class="chip" data-chip="' + i.id + '" aria-pressed="' + (filterCat === i.id) + '">' + i.label + '</button>';
    }).join('');
  }
  function matches(tp) {
    if (filterCat !== 'all' && tp.cat !== filterCat) return false;
    if (!query) return true;
    var hay = [tp.ar, tp.en, tp.dAr, tp.dEn, CAT[tp.cat].ar, CAT[tp.cat].en, tp.id, KW[tp.style] || ''].join(' ').toLowerCase();
    return query.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }
  function renderGallery() {
    var list = TPL.filter(matches);
    $('#galGrid').innerHTML = list.map(function (tp, i) {
      var n = (TPL.indexOf(tp) + 1); n = (n < 10 ? '0' : '') + n;
      return '<article class="gcard" style="animation-delay:' + (i * 50) + 'ms"><div class="gstage"><span class="gidx" dir="ltr">' + n + '</span>' + mock(tp) + '</div>' +
        '<div class="gmeta"><span class="gtag">' + (lang === 'ar' ? CAT[tp.cat].ar : CAT[tp.cat].en) + '</span>' +
        '<h3>' + pick(tp, '') + '</h3><p>' + pick(tp, 'd') + '</p>' +
        '<div class="gbtns"><button type="button" class="btn btn-line btn-sm" data-preview="' + tp.id + '">' + t('preview') + '</button>' +
        '<a class="btn btn-gold btn-sm" target="_blank" rel="noopener" href="' + waUrl(msgDesign(tp)) + '">' + t('customize') + '</a></div></div></article>';
    }).join('');
    $('#count').textContent = t('count_n')(list.length);
    $('#empty').hidden = list.length > 0;
  }
  function renderFooterCats() {
    var box = $('#footCats');
    $$('a', box).forEach(function (a) { a.remove(); });
    CATS.forEach(function (c) {
      var a = document.createElement('a'); a.href = '#gallery'; a.setAttribute('data-cat', c.id); a.textContent = lang === 'ar' ? c.ar : c.en; box.appendChild(a);
    });
  }
  function renderForm() {
    var sel = $('#fOcc'), cur = sel.value;
    sel.innerHTML = CATS.map(function (c) { return '<option value="' + c.id + '">' + (lang === 'ar' ? c.ar : c.en) + '</option>'; }).join('') + '<option value="other">' + t('f_occ_other') + '</option>';
    if (cur) sel.value = cur;
  }
  function filterTo(id) {
    filterCat = id; query = ''; $('#search').value = '';
    renderChips(); renderGallery();
    var g = $('#gallery'); if (g) g.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- Language ---------------- */
  function applyStatic() {
    $$('[data-i18n]').forEach(function (el) { var v = T[lang][el.getAttribute('data-i18n')]; if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
  }
  function setLang(l, silent) {
    lang = l;
    var h = document.documentElement;
    h.lang = l; h.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.title = l === 'ar' ? 'AURELLE Invitations | دعوات تليق بلحظاتكِ' : 'AURELLE Invitations | Every Special Moment Begins with an Invitation';
    try { localStorage.setItem('aurelle-lang', l); } catch (e) {}
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l)); });
    applyStatic(); renderHero(); renderCats(); renderChips(); renderGallery(); renderFooterCats(); renderForm(); refreshWaLinks();
    if (current) { renderPreview(); }
    updateMusicLabel();
  }

  /* ---------------- Preview ---------------- */
  var current = null, opened = false, cdTimer = null, lastFocus = null;

  function envelopeHtml(tp) {
    return '<div class="env-stage"><div class="env" id="env"><div class="env-back"></div>' +
      '<div class="env-card"><span>' + pick(tp, 'n') + '</span></div><div class="env-front"></div><div class="env-flap"></div>' +
      '<button type="button" class="env-seal" id="envSeal" aria-label="' + t('pv_open_hint') + '">A</button></div>' +
      '<p class="env-hint">' + t('pv_open_hint') + '</p></div>';
  }
  /* Preview is assembled from section builders so new sections (maps, gallery, video, RSVP) can be appended later. */
  var SECTIONS = [
    function cover(tp) { return '<section class="pv-hero">' + mock(tp) + '</section>'; },
    function message(tp) {
      var c = CAT[tp.cat];
      return '<section class="pv-sec"><svg class="orn" aria-hidden="true"><use href="#orn"/></svg><h3>' + pick(tp, 'n') + '</h3><p>' + (lang === 'ar' ? c.msgAr : c.msgEn) + '</p></section>';
    },
    function details(tp) {
      var d = dateObj(tp);
      return '<section class="pv-sec"><div class="pv-det"><div><small>' + t('pv_when') + '</small><b>' + fmtDate(d) + '</b></div><div><small>' + t('pv_time') + '</small><b>' + fmtTime(d) + '</b></div><div><small>' + t('pv_where') + '</small><b>' + pick(tp, 'v') + '</b></div></div></section>';
    },
    function countdown() {
      return '<section class="pv-sec"><h3>' + t('pv_cd_title') + '</h3><div class="cd" id="cd"><div><b data-u="d">0</b><span>' + t('pv_d') + '</span></div><div><b data-u="h">0</b><span>' + t('pv_h') + '</span></div><div><b data-u="m">0</b><span>' + t('pv_m') + '</span></div><div><b data-u="s">0</b><span>' + t('pv_s') + '</span></div></div><p class="fine" style="margin-top:14px">' + t('pv_cd_note') + '</p></section>';
    },
    function more() {
      return '<section class="pv-sec"><h3>' + t('pv_more_title') + '</h3><p>' + t('pv_more_note') + '</p><div class="pv-feats">' + t('pv_f').map(function (f) { return '<span>' + f + '</span>'; }).join('') + '</div><p class="fine" style="margin:16px auto 0">' + t('pv_music_note') + '</p></section>';
    }
  ];
  function cardHtml(tp) {
    return '<div class="pv-card t-' + tp.style + '">' + SECTIONS.map(function (s) { return s(tp); }).join('') +
      '<div class="pv-end"><a class="btn btn-gold btn-lg" target="_blank" rel="noopener" href="' + waUrl(msgDesign(tp)) + '">' + t('customize') + '</a>' +
      '<p class="fine">' + t('pv_cta_note') + '</p><button type="button" class="btn btn-line btn-sm" id="pvReplay">↺ ' + (lang === 'ar' ? 'إعادة العرض' : 'Replay') + '</button></div></div>';
  }
  function renderPreview() {
    var tp = current, pv = $('#pv');
    pv.className = 'pv t-' + tp.style;
    $('#pvTitle').textContent = pick(tp, '');
    stopCountdown();
    $('#pvBody').innerHTML = opened ? cardHtml(tp) : envelopeHtml(tp);
    if (opened) startCountdown(tp);
    else {
      $('#envSeal').addEventListener('click', openEnvelope);
      $('#envSeal').focus();
    }
    var rp = $('#pvReplay'); if (rp) rp.addEventListener('click', function () { opened = false; renderPreview(); });
  }
  function openEnvelope() {
    var env = $('#env'); if (!env) return;
    env.classList.add('open');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(function () {
      var stage = $('.env-stage'); if (stage) stage.classList.add('leaving');
      setTimeout(function () { opened = true; if (current) { renderPreview(); $('#pvBody').scrollTop = 0; $('#pvClose').focus(); } }, reduce ? 0 : 550);
    }, reduce ? 0 : 1700);
  }
  function startCountdown(tp) {
    var target = dateObj(tp).getTime();
    function tick() {
      var box = $('#cd'); if (!box) return;
      var diff = Math.max(0, target - Date.now()), s = Math.floor(diff / 1000);
      var v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
      $$('[data-u]', box).forEach(function (b) { b.textContent = v[b.getAttribute('data-u')]; });
    }
    tick(); cdTimer = setInterval(tick, 1000);
  }
  function stopCountdown() { if (cdTimer) { clearInterval(cdTimer); cdTimer = null; } }
  function openPreview(id) {
    var tp = byId(id); if (!tp) return;
    lastFocus = document.activeElement; current = tp; opened = false;
    $('#pv').hidden = false; document.body.classList.add('lock');
    renderPreview();
  }
  function closePreview() {
    stopMusic(); stopCountdown(); current = null; opened = false;
    $('#pv').hidden = true; document.body.classList.remove('lock'); $('#pvBody').innerHTML = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------------- Optional music (manual only, generated with WebAudio, no files) ---------------- */
  var ac = null, musicTimer = null, musicOn = false, step = 0;
  var MELODY = [261.63, 392.0, 329.63, 440.0, 392.0, 329.63, 293.66, 349.23];
  function tone(f, when, dur, vol) {
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(vol, when + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(g); g.connect(ac.destination); o.start(when); o.stop(when + dur + 0.05);
  }
  function startMusic() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    musicOn = true; step = 0;
    function play() {
      var f = MELODY[step % MELODY.length], now = ac.currentTime;
      tone(f, now, 2.4, 0.05); tone(f / 2, now, 3, 0.03);
      step++;
    }
    play(); musicTimer = setInterval(play, 1100);
    return true;
  }
  function stopMusic() { musicOn = false; if (musicTimer) { clearInterval(musicTimer); musicTimer = null; } updateMusicLabel(); }
  function updateMusicLabel() {
    var b = $('#pvMusic'); if (!b) return;
    b.setAttribute('aria-pressed', String(musicOn));
    $('#pvMusicTxt').textContent = t(musicOn ? 'pv_music_off' : 'pv_music_on');
  }

  /* ---------------- Events ---------------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-lang],[data-chip],[data-cat],[data-preview]');
    if (el) {
      if (el.hasAttribute('data-lang')) { if (el.getAttribute('data-lang') !== lang) setLang(el.getAttribute('data-lang')); return; }
      if (el.hasAttribute('data-chip')) { filterCat = el.getAttribute('data-chip'); renderChips(); renderGallery(); return; }
      if (el.hasAttribute('data-cat')) { e.preventDefault(); filterTo(el.getAttribute('data-cat')); closeNav(); return; }
      if (el.hasAttribute('data-preview')) { openPreview(el.getAttribute('data-preview')); return; }
    }
    if (e.target.closest('#nav a')) closeNav();
  });
  $('#search').addEventListener('input', function (e) { query = e.target.value.trim().toLowerCase(); renderGallery(); });
  $('#pvClose').addEventListener('click', closePreview);
  $('#pvMusic').addEventListener('click', function () {
    if (musicOn) { stopMusic(); return; }
    if (!startMusic()) { $('#pvMusic').hidden = true; return; }
    updateMusicLabel();
  });
  document.addEventListener('keydown', function (e) {
    if ($('#pv').hidden) { if (e.key === 'Escape') closeNav(); return; }
    if (e.key === 'Escape') { closePreview(); return; }
    if (e.key === 'Tab') {
      var f = $$('#pv button, #pv a[href]').filter(function (x) { return !x.hidden && x.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Mobile nav */
  var burger = $('#burger'), nav = $('#nav');
  function closeNav() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open));
  });

  /* Header shadow on scroll */
  var header = $('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Inquiry form -> WhatsApp (no server involved) */
  $('#inquiry').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('#fName').value.trim(), occ = $('#fOcc').value, msg = $('#fMsg').value.trim();
    if (!name) { $('#formErr').hidden = false; $('#fName').focus(); return; }
    $('#formErr').hidden = true;
    var occLabel = CAT[occ] ? (lang === 'ar' ? CAT[occ].ar : CAT[occ].en) : t('f_occ_other');
    var text = lang === 'ar'
      ? 'مرحباً AURELLE Invitations،\nالاسم: ' + name + '\nالمناسبة: ' + occLabel + (msg ? '\nالرسالة: ' + msg : '') + '\n(اللغة المختارة: العربية)'
      : 'Hello AURELLE Invitations,\nName: ' + name + '\nOccasion: ' + occLabel + (msg ? '\nMessage: ' + msg : '') + '\n(Selected language: English)';
    window.open(waUrl(text), '_blank', 'noopener');
  });

  /* Scroll reveal */
  function initReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 4000); /* safety net */
  }

  $('#year').textContent = new Date().getFullYear();
  setLang(lang, true);
  initReveal();
})();
