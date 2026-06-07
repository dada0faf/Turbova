window.siteData = {
  languages: [
    { code: "en", label: "English", short: "EN" },
    { code: "cs", label: "Čeština", short: "CZ" },
    { code: "ru", label: "Русский", short: "RU" },
    { code: "fr", label: "Français", short: "FR" },
  ],
  navigation: [
    { slug: "home", href: "index.html" },
    { slug: "story", href: "story.html" },
    { slug: "residences", href: "residences.html" },
    { slug: "wellness", href: "wellness.html" },
    { slug: "grounds", href: "grounds.html" },
    { slug: "location", href: "location.html" },
    { slug: "contact", href: "contact.html" },
  ],
  // Enquiries are saved as rows in a private Google Sheet via a Google Apps
  // Script web app — nothing is emailed. Paste your deployed web-app URL here
  // (see CONTACT_SETUP.md). While this is empty the form still validates and
  // shows the success state, but submissions are not stored anywhere yet.
  contactEndpoint: "https://script.google.com/macros/s/AKfycbzvzHpDx1CMopVkYzUMsQ7Fe_SDF1HIVdzyVPDo2yBXt-mYwcmEmv1rTAWFJY8FqLh1/exec",
  // Shared country dial codes for the phone field (Czech Republic default).
  countries: [
    { iso: "CZ", name: "Czech Republic", dial: "+420" },
    { iso: "SK", name: "Slovakia", dial: "+421" },
    { iso: "DE", name: "Germany", dial: "+49" },
    { iso: "AT", name: "Austria", dial: "+43" },
    { iso: "PL", name: "Poland", dial: "+48" },
    { iso: "GB", name: "United Kingdom", dial: "+44" },
    { iso: "IE", name: "Ireland", dial: "+353" },
    { iso: "FR", name: "France", dial: "+33" },
    { iso: "ES", name: "Spain", dial: "+34" },
    { iso: "IT", name: "Italy", dial: "+39" },
    { iso: "PT", name: "Portugal", dial: "+351" },
    { iso: "NL", name: "Netherlands", dial: "+31" },
    { iso: "BE", name: "Belgium", dial: "+32" },
    { iso: "CH", name: "Switzerland", dial: "+41" },
    { iso: "LU", name: "Luxembourg", dial: "+352" },
    { iso: "DK", name: "Denmark", dial: "+45" },
    { iso: "SE", name: "Sweden", dial: "+46" },
    { iso: "NO", name: "Norway", dial: "+47" },
    { iso: "FI", name: "Finland", dial: "+358" },
    { iso: "HU", name: "Hungary", dial: "+36" },
    { iso: "RO", name: "Romania", dial: "+40" },
    { iso: "GR", name: "Greece", dial: "+30" },
    { iso: "HR", name: "Croatia", dial: "+385" },
    { iso: "SI", name: "Slovenia", dial: "+386" },
    { iso: "UA", name: "Ukraine", dial: "+380" },
    { iso: "RU", name: "Russia", dial: "+7" },
    { iso: "TR", name: "Türkiye", dial: "+90" },
    { iso: "US", name: "United States", dial: "+1" },
    { iso: "CA", name: "Canada", dial: "+1" },
    { iso: "AE", name: "United Arab Emirates", dial: "+971" },
    { iso: "SA", name: "Saudi Arabia", dial: "+966" },
    { iso: "QA", name: "Qatar", dial: "+974" },
    { iso: "IL", name: "Israel", dial: "+972" },
    { iso: "CN", name: "China", dial: "+86" },
    { iso: "HK", name: "Hong Kong", dial: "+852" },
    { iso: "SG", name: "Singapore", dial: "+65" },
    { iso: "JP", name: "Japan", dial: "+81" },
    { iso: "KR", name: "South Korea", dial: "+82" },
    { iso: "IN", name: "India", dial: "+91" },
    { iso: "AU", name: "Australia", dial: "+61" },
    { iso: "BR", name: "Brazil", dial: "+55" },
    { iso: "ZA", name: "South Africa", dial: "+27" },
  ],
  global: {
    en: {
      brand: "Turbová",
      strap: "Heritage of Silence",
      menuLabel: "Navigate",
      closeLabel: "Close",
      languageLabel: "Language",
      chapterLabel: "Chapters",
      availableLabel: "Project completion",
      availableValue: "2026",
      byline:
        "A boutique residence in Prague 5 where limestone, brass, gardens, and silence shape a new urban estate.",
      menu: {
        home: "Home",
        story: "Story",
        residences: "Residences",
        wellness: "Wellness",
        grounds: "Grounds",
        location: "Location",
        contact: "Contact",
      },
      footerTitle: "Private presentation by appointment",
      footerText:
        "An intimate collection of 22 residences, private park grounds, curated wellness, and a highly discreet address in Smíchov.",
      footerPrimary: "Explore residences",
      footerSecondary: "Read the story",
      footerNote: "Two buildings, one protected world.",
    },
    cs: {
      brand: "Turbová",
      strap: "Dědictví ticha",
      menuLabel: "Navigace",
      closeLabel: "Zavřít",
      languageLabel: "Jazyk",
      chapterLabel: "Kapitoly",
      availableLabel: "Dokončení projektu",
      availableValue: "2026",
      byline:
        "Komorní rezidence na Praze 5, kde vápenec, mosaz, zahrady a ticho vytvářejí nový městský statek.",
      menu: {
        home: "Domů",
        story: "Příběh",
        residences: "Rezidence",
        wellness: "Wellness",
        grounds: "Zahrady",
        location: "Lokalita",
        contact: "Kontakt",
      },
      footerTitle: "Soukromá prezentace na vyžádání",
      footerText:
        "Intimní kolekce 22 rezidencí, soukromý park, kurátorované wellness a mimořádně diskrétní adresa na Smíchově.",
      footerPrimary: "Prozkoumat rezidence",
      footerSecondary: "Číst příběh",
      footerNote: "Dvě budovy, jeden chráněný svět.",
    },
    ru: {
      brand: "Turbová",
      strap: "Наследие тишины",
      menuLabel: "Навигация",
      closeLabel: "Закрыть",
      languageLabel: "Язык",
      chapterLabel: "Главы",
      availableLabel: "Завершение проекта",
      availableValue: "2026",
      byline:
        "Бутиковая резиденция в Праге 5, где известняк, латунь, сады и тишина создают новое городское поместье.",
      menu: {
        home: "Главная",
        story: "История",
        residences: "Резиденции",
        wellness: "Велнес",
        grounds: "Сады",
        location: "Локация",
        contact: "Контакты",
      },
      footerTitle: "Частная презентация по записи",
      footerText:
        "Камерная коллекция из 22 резиденций, собственный парк, продуманный велнес и исключительно приватный адрес в Смихове.",
      footerPrimary: "Смотреть резиденции",
      footerSecondary: "Читать историю",
      footerNote: "Два здания, один защищённый мир.",
    },
    fr: {
      brand: "Turbová",
      strap: "Héritage du silence",
      menuLabel: "Naviguer",
      closeLabel: "Fermer",
      languageLabel: "Langue",
      chapterLabel: "Chapitres",
      availableLabel: "Achèvement du projet",
      availableValue: "2026",
      byline:
        "Une résidence boutique à Prague 5 où la pierre calcaire, le laiton, les jardins et le silence façonnent un nouveau domaine urbain.",
      menu: {
        home: "Accueil",
        story: "Histoire",
        residences: "Résidences",
        wellness: "Bien-être",
        grounds: "Jardins",
        location: "Emplacement",
        contact: "Contact",
      },
      footerTitle: "Présentation privée sur rendez-vous",
      footerText:
        "Une collection intime de 22 résidences, un parc privé, un espace bien-être soigné et une adresse d'une grande discrétion à Smíchov.",
      footerPrimary: "Découvrir les résidences",
      footerSecondary: "Lire l'histoire",
      footerNote: "Deux bâtiments, un monde protégé.",
    },
  },
  pages: {
    home: {
      en: {
        title: "Turbová | Home",
        hero: {
          eyebrow: "Boutique Residence | Prague 5",
          title: "A quiet estate hidden inside the city.",
          lead:
            "A quiet estate hidden inside Prague 5, where status meets intimacy and silence becomes the rarest luxury of all.",
          description:
            "An intimate boutique residence of just 22 homes, framed by limestone, brass, and a private park — an urban estate composed for those who value calm above spectacle.",
          primary: { label: "Read our story", href: "story.html" },
          secondary: { label: "View the residences", href: "residences.html" },
          badges: [
            "22 residences",
            "110–299 m²",
            "Shell & Core freedom",
            "Private wellness",
          ],
          media: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Turbová entrance lobby",
            },
            {
              src: "assets/images/front-view.jpg",
              alt: "Front view of the buildings",
            },
          ],
        },
        stats: [
          { value: "18th", label: "century estate origins" },
          { value: "22", label: "exclusive apartments" },
          { value: "3", label: "parking spaces per residence" },
          { value: "24/7", label: "concierge presence" },
        ],
        chaptersTitle: "Choose a chapter",
        chapters: [
          {
            number: "01",
            title: "Story",
            text:
              "From royal advisor František of Turba to the creative legacy of Jiří Trnka.",
            href: "story.html",
          },
          {
            number: "02",
            title: "Residences",
            text:
              "Two buildings, intimate proportions, panoramic glazing, and authorial interiors on a blank canvas.",
            href: "residences.html",
          },
          {
            number: "03",
            title: "Wellness",
            text:
              "A heated pool, hammam, sauna, terrace lounge, and calm ritual space for residents only.",
            href: "wellness.html",
          },
          {
            number: "04",
            title: "Grounds",
            text:
              "A cascading private garden, outdoor fitness, a wine house, and landscape that shields the city away.",
            href: "grounds.html",
          },
          {
            number: "05",
            title: "Location",
            text:
              "At the heart of Prague 5, close to schools, Anděl, healthcare, and major city routes.",
            href: "location.html",
          },
        ],
        legacy: {
          title: "Past and future occupy the same hillside.",
          text:
            "Historic memory is not treated as décor. It becomes the emotional groundwork for a residence that is contemporary, discreet, and materially grounded.",
          cards: [
            {
              title: "Natural limestone",
              text: "A pale, calm façade language that catches changing Prague light with restraint.",
            },
            {
              title: "Brass details",
              text: "Warm metallic carving and paneling that turn communal circulation into a signature ritual.",
            },
            {
              title: "Garden acoustics",
              text: "Centenary trees and cascading planting create a natural acoustic buffer around the estate.",
            },
          ],
          mediaLeft: "assets/images/turbova-old.jpg",
          mediaRight: "assets/images/waterfall.jpg",
        },
      },
      cs: {
        title: "Turbová | Domů",
        hero: {
          eyebrow: "Butiková rezidence | Praha 5",
          title: "Tiché sídlo ukryté uvnitř města.",
          lead:
            "Tiché sídlo ukryté uvnitř Prahy 5, kde se status setkává s komorností a ticho se stává tím nejvzácnějším luxusem.",
          description:
            "Komorní butiková rezidence pouhých 22 domovů, rámovaná vápencem, mosazí a soukromým parkem — městský statek pro ty, kdo cení klid nad okázalostí.",
          primary: { label: "Číst náš příběh", href: "story.html" },
          secondary: { label: "Zobrazit rezidence", href: "residences.html" },
          badges: [
            "22 rezidencí",
            "110–299 m²",
            "Svoboda Shell & Core",
            "Soukromé wellness",
          ],
          media: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Lobby Turbová",
            },
            {
              src: "assets/images/front-view.jpg",
              alt: "Čelní pohled na budovy",
            },
          ],
        },
        stats: [
          { value: "18.", label: "století původu areálu" },
          { value: "22", label: "exkluzivních apartmánů" },
          { value: "3", label: "parkovací stání na rezidenci" },
          { value: "24/7", label: "concierge servis" },
        ],
        chaptersTitle: "Vyberte kapitolu",
        chapters: [
          {
            number: "01",
            title: "Příběh",
            text:
              "Od královského rady Františka z Turby po tvůrčí odkaz Jiřího Trnky.",
            href: "story.html",
          },
          {
            number: "02",
            title: "Rezidence",
            text:
              "Dvě budovy, komorní měřítko, panoramatické prosklení a autorské interiéry na čistém plátně.",
            href: "residences.html",
          },
          {
            number: "03",
            title: "Wellness",
            text:
              "Vyhřívaný bazén, hammam, sauna, terasa a klidný rituální prostor pouze pro rezidenty.",
            href: "wellness.html",
          },
          {
            number: "04",
            title: "Zahrady",
            text:
              "Kaskádová soukromá zahrada, outdoor fitness, viniční domek a krajina, která odfiltruje město.",
            href: "grounds.html",
          },
          {
            number: "05",
            title: "Lokalita",
            text:
              "V centru Prahy 5, blízko škol, Anděla, zdravotnictví i hlavních městských tras.",
            href: "location.html",
          },
        ],
        legacy: {
          title: "Minulost a budoucnost obývají stejný svah.",
          text:
            "Historická paměť zde nefunguje jako dekorace. Stává se emocionálním základem pro rezidenci, která je současná, diskrétní a materiálově ukotvená.",
          cards: [
            {
              title: "Přírodní vápenec",
              text: "Světlý a klidný fasádní jazyk, který s jemností zachycuje proměnlivé pražské světlo.",
            },
            {
              title: "Mosazné detaily",
              text: "Teplý kovový reliéf a panely, které proměňují společné prostory v charakteristický rituál.",
            },
            {
              title: "Akustika zahrady",
              text: "Stoleté stromy a kaskádová výsadba vytvářejí přirozený zvukový val kolem areálu.",
            },
          ],
          mediaLeft: "assets/images/turbova-old.jpg",
          mediaRight: "assets/images/waterfall.jpg",
        },
      },
      ru: {
        title: "Turbová | Главная",
        hero: {
          eyebrow: "Бутиковая резиденция | Прага 5",
          title: "Тихое поместье, скрытое в сердце города.",
          lead:
            "Тихое поместье, скрытое в Праге 5, где статус встречается с камерностью, а тишина становится самой редкой роскошью.",
          description:
            "Камерная бутиковая резиденция всего из 22 домов в обрамлении известняка, латуни и собственного парка — городское поместье для тех, кто ценит покой выше зрелищности.",
          primary: { label: "Читать нашу историю", href: "story.html" },
          secondary: { label: "Смотреть резиденции", href: "residences.html" },
          badges: [
            "22 резиденции",
            "110–299 м²",
            "Свобода Shell & Core",
            "Приватный велнес",
          ],
          media: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Лобби Turbová",
            },
            {
              src: "assets/images/front-view.jpg",
              alt: "Вид зданий спереди",
            },
          ],
        },
        stats: [
          { value: "XVIII", label: "век истоков поместья" },
          { value: "22", label: "эксклюзивных апартамента" },
          { value: "3", label: "парковочных места на резиденцию" },
          { value: "24/7", label: "консьерж-сервис" },
        ],
        chaptersTitle: "Выберите главу",
        chapters: [
          {
            number: "01",
            title: "История",
            text:
              "От королевского советника Франтишека из Турбы до творческого наследия Иржи Трнки.",
            href: "story.html",
          },
          {
            number: "02",
            title: "Резиденции",
            text:
              "Два здания, камерные пропорции, панорамное остекление и авторские интерьеры на чистом холсте.",
            href: "residences.html",
          },
          {
            number: "03",
            title: "Велнес",
            text:
              "Подогреваемый бассейн, хаммам, сауна, лаунж-терраса и спокойное ритуальное пространство только для резидентов.",
            href: "wellness.html",
          },
          {
            number: "04",
            title: "Сады",
            text:
              "Каскадный частный сад, открытый фитнес, винный дом и ландшафт, отгораживающий город.",
            href: "grounds.html",
          },
          {
            number: "05",
            title: "Локация",
            text:
              "В сердце Праги 5, рядом со школами, Анделом, медициной и главными городскими магистралями.",
            href: "location.html",
          },
        ],
        legacy: {
          title: "Прошлое и будущее занимают один и тот же склон.",
          text:
            "Историческая память здесь не декорация. Она становится эмоциональной основой резиденции — современной, сдержанной и материально укоренённой.",
          cards: [
            {
              title: "Природный известняк",
              text: "Светлый, спокойный язык фасада, сдержанно улавливающий переменчивый пражский свет.",
            },
            {
              title: "Латунные детали",
              text: "Тёплая металлическая резьба и панели, превращающие общие пространства в фирменный ритуал.",
            },
            {
              title: "Акустика сада",
              text: "Столетние деревья и каскадные посадки создают естественный звуковой барьер вокруг поместья.",
            },
          ],
          mediaLeft: "assets/images/turbova-old.jpg",
          mediaRight: "assets/images/waterfall.jpg",
        },
      },
      fr: {
        title: "Turbová | Accueil",
        hero: {
          eyebrow: "Résidence boutique | Prague 5",
          title: "Un domaine paisible caché au cœur de la ville.",
          lead:
            "Un domaine paisible caché dans Prague 5, où le statut rencontre l'intimité et où le silence devient le plus rare des luxes.",
          description:
            "Une résidence boutique intime de seulement 22 logements, encadrée de pierre calcaire, de laiton et d'un parc privé — un domaine urbain composé pour ceux qui valorisent le calme plutôt que le spectacle.",
          primary: { label: "Lire notre histoire", href: "story.html" },
          secondary: { label: "Voir les résidences", href: "residences.html" },
          badges: [
            "22 résidences",
            "110–299 m²",
            "Liberté Shell & Core",
            "Bien-être privé",
          ],
          media: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Hall d'entrée Turbová",
            },
            {
              src: "assets/images/front-view.jpg",
              alt: "Vue de face des bâtiments",
            },
          ],
        },
        stats: [
          { value: "XVIIIe", label: "origines du domaine" },
          { value: "22", label: "appartements exclusifs" },
          { value: "3", label: "places de parking par résidence" },
          { value: "24/7", label: "présence de conciergerie" },
        ],
        chaptersTitle: "Choisissez un chapitre",
        chapters: [
          {
            number: "01",
            title: "Histoire",
            text:
              "Du conseiller royal František de Turba à l'héritage créatif de Jiří Trnka.",
            href: "story.html",
          },
          {
            number: "02",
            title: "Résidences",
            text:
              "Deux bâtiments, des proportions intimes, des baies panoramiques et des intérieurs d'auteur sur une toile vierge.",
            href: "residences.html",
          },
          {
            number: "03",
            title: "Bien-être",
            text:
              "Une piscine chauffée, un hammam, un sauna, un salon-terrasse et un espace rituel paisible réservé aux résidents.",
            href: "wellness.html",
          },
          {
            number: "04",
            title: "Jardins",
            text:
              "Un jardin privé en cascade, du fitness en plein air, une maison du vin et un paysage qui tient la ville à distance.",
            href: "grounds.html",
          },
          {
            number: "05",
            title: "Emplacement",
            text:
              "Au cœur de Prague 5, proche des écoles, d'Anděl, des soins de santé et des grands axes de la ville.",
            href: "location.html",
          },
        ],
        legacy: {
          title: "Le passé et l'avenir occupent le même coteau.",
          text:
            "La mémoire historique n'est pas traitée comme un décor. Elle devient le socle émotionnel d'une résidence contemporaine, discrète et ancrée dans la matière.",
          cards: [
            {
              title: "Pierre calcaire naturelle",
              text: "Un langage de façade pâle et calme qui capte avec retenue la lumière changeante de Prague.",
            },
            {
              title: "Détails en laiton",
              text: "Une ciselure et des panneaux métalliques chaleureux qui font des circulations communes un rituel signature.",
            },
            {
              title: "Acoustique du jardin",
              text: "Des arbres centenaires et des plantations en cascade créent un tampon acoustique naturel autour du domaine.",
            },
          ],
          mediaLeft: "assets/images/turbova-old.jpg",
          mediaRight: "assets/images/waterfall.jpg",
        },
      },
    },
    story: {
      en: {
        title: "Turbová | Story",
        hero: {
          eyebrow: "Our story",
          title: "You'll be hearing less from the city.",
          lead:
            "Behind the gates of Turbová, an 18th-century estate is being recast as a private residence where history, greenery, and silence shape a rarer way of living in Prague 5.",
          description:
            "The story starts with a hillside retreat, passes through the creative legacy of Jiří Trnka, and arrives at two contemporary buildings, 22 residences, wellness rituals, and a park that feels more like a secluded estate than an address in the city.",
          button: { label: "Read our story", href: "#story-intro" },
          media: [
            "assets/images/turbova-old.jpg",
            "assets/images/birds-eye-view.jpg",
            "assets/images/birds-eye-view-2.jpg",
            "assets/images/front-view.jpg",
          ],
          collage: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Turbová lobby",
            },
            {
              src: "assets/images/turbova-old.jpg",
              alt: "Historic Turbová estate",
            },
            {
              src: "assets/images/two-buildings-side-view.jpeg",
              alt: "Turbová residences in the garden",
            },
          ],
          badges: [
            { label: "18th c", note: "estate origins" },
            { label: "22", note: "private residences" },
            { label: "2026", note: "project completion" },
          ],
        },
        metrics: [
          { value: "18th", label: "century lineage" },
          { value: "Jiří", label: "Trnka creative legacy" },
          { value: "Smíchov", label: "urban context" },
        ],
        story: {
          title: "A secluded world with a public memory",
          paragraphs: [
            "The site has always attracted people who valued retreat without withdrawal. Vineyards shaped the hillside first; later, artists and patrons gave it another life.",
            "That sense of selective privacy drives the project philosophy: an urban estate for residents who want the rhythm of Prague close by, but silence to be the first thing they feel at home.",
          ],
        },
        pillars: [
          {
            title: "History of the place",
            text: "A former estate with aristocratic provenance and a quiet artistic afterlife.",
          },
          {
            title: "Project philosophy",
            text: "Status without noise. A rare asset defined by intimacy rather than spectacle.",
          },
          {
            title: "Urban estate",
            text: "City energy on the outside, private park stillness on the inside.",
          },
        ],
        gallery: [
          {
            src: "assets/images/turbova-old.jpg",
            alt: "Historic Turbová image",
          },
          {
            src: "assets/images/waterfall.jpg",
            alt: "Contemporary waterfall courtyard",
          },
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Aerial view of the Turbová grounds",
          },
        ],
        intro: {
          eyebrow: "Legacy",
          title: "František of Turba and Jiří Trnka, two chapters in the estate's legacy. This is where the story begins.",
          cards: [
            {
              title: "Historic estate",
              subtitle: "18th-century origins",
              text:
                "The site belonged to royal advisor František of Turba and developed the poise of a secluded hillside estate long before Prague expanded around it.",
              image: "assets/images/turbova-old.jpg",
              alt: "Historic Turbová estate",
            },
            {
              title: "Creative refuge",
              subtitle: "Jiří Trnka's afterlife",
              text:
                "Later, the grounds became part of the creative orbit of Jiří Trnka, reinforcing the idea that this address has always attracted private, imaginative lives.",
              image: "assets/images/birds-eye-view.jpg",
              alt: "Aerial view of Turbová in Prague 5",
            },
          ],
        },
        timeline: [
          { year: "18th c", label: "Estate of František of Turba" },
          { year: "Vineyards", label: "Hillside cultivation and retreat" },
          { year: "Trnka", label: "Creative memory enters the grounds" },
          { year: "Prague 5", label: "Urban energy gathers around the site" },
          { year: "22 homes", label: "Two boutique buildings take shape" },
          { year: "Wellness", label: "Pool, hammam, sauna, terrace" },
          { year: "2026", label: "Project completion" },
          { year: "Beyond", label: "A new chapter of private living" },
        ],
        beats: [
          {
            number: "01",
            title: "Vineyards, hillside air, and a place made for retreat",
            paragraphs: [
              "Long before the current residence, the hillside offered exactly what it still offers now: elevation, greenery, and a feeling of being slightly removed from the city's noise.",
              "That origin story matters. Turbová is not inventing privacy from scratch; it is continuing a relationship between the land and the people drawn to it.",
            ],
            points: [
              "Former 18th-century estate",
              "Selective privacy from the start",
              "A setting shaped by greenery and slope",
            ],
            media: [
              {
                src: "assets/images/turbova-old.jpg",
                alt: "Historic Turbová estate",
              },
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Aerial view of Turbová",
              },
            ],
            badge: "Origin",
          },
          {
            number: "02",
            title: "The city grew around it. The quiet held.",
            paragraphs: [
              "Smíchov became one of Prague's most connected districts, yet the Turbová grounds kept a different pace. The private park filters sound, softens views, and turns proximity into advantage rather than pressure.",
              "This is the central paradox of the residence: you remain minutes from schools, healthcare, Anděl, and key routes, while home feels detached from the city's urgency.",
            ],
            points: [
              "Prague 5 connectivity",
              "Private park acoustics",
              "Minutes to Anděl and international schools",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Aerial view over Prague 5 and Turbová",
              },
              {
                src: "assets/images/waterfall.jpg",
                alt: "Waterfall courtyard at Turbová",
              },
            ],
            badge: "Context",
          },
          {
            number: "03",
            title: "Two buildings. No spectacle.",
            paragraphs: [
              "The architecture refuses overstatement. Two buildings, 11 residences each, step into the site with calm proportions, natural limestone façades, and terraces that keep every apartment connected to the park.",
              "The scale is deliberate. Turbová behaves more like a private estate than a conventional development, where intimacy becomes the real marker of status.",
            ],
            points: [
              "22 residences total",
              "110-299 m² homes",
              "Balcony or terrace for every residence",
            ],
            media: [
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Two Turbová buildings beside the garden",
              },
              {
                src: "assets/images/main-lobby-entrance-and-logo.jpg",
                alt: "Turbová arrival lobby",
              },
            ],
            badge: "22 Homes",
          },
          {
            number: "04",
            title: "Then the materials started to speak.",
            paragraphs: [
              "Prestige here is built through restraint rather than decoration. Limestone, terrazzo, carved brass, and carefully managed light give the shared spaces a tactile, collected identity.",
              "Even the garage is treated as part of the experience. Art, pattern, and crafted detail carry the narrative into places that most projects leave anonymous.",
            ],
            points: [
              "Natural limestone facade",
              "Terrazzo circulation floors",
              "Carved brass and curated garage art",
            ],
            media: [
              {
                src: "assets/images/corridor.jpg",
                alt: "Decorative corridor at Turbová",
              },
              {
                src: "assets/images/garage-parking.jpg",
                alt: "Curated underground parking at Turbová",
              },
            ],
            badge: "Stone + Brass",
          },
          {
            number: "05",
            title: "A ritual floor beneath the residence",
            paragraphs: [
              "The wellness level is designed as a private ritual rather than an add-on amenity: heated pool, sauna, hammam, changing rooms, kitchenette, and a terrace lounge.",
              "Residents can move from water to heat to open air without leaving the protected world of the estate. The experience feels slow, inward, and complete.",
            ],
            points: [
              "Heated pool",
              "Sauna and hammam",
              "Terrace lounge and private refreshments",
            ],
            media: [
              {
                src: "assets/images/spa-pool.jpg",
                alt: "Private Turbová pool",
              },
              {
                src: "assets/images/spa-sitting-pool.jpg",
                alt: "Spa lounge at Turbová",
              },
            ],
            badge: "Wellness",
          },
          {
            number: "06",
            title: "A park that turns prestige into privacy",
            paragraphs: [
              "Outside, the grounds extend the same logic. Cascading planting, mature trees, outdoor fitness, a wine house, and children's play space turn the landscape into something you inhabit rather than merely look at.",
              "The park is not ornamental. It is what makes the residence emotionally distinct, giving every day a slower edge and a quieter frame.",
            ],
            points: [
              "Residents-only private garden",
              "Outdoor fitness and wine house",
              "A safe, sheltered world for families",
            ],
            media: [
              {
                src: "assets/images/waterfall.jpg",
                alt: "Waterfall and private garden at Turbová",
              },
              {
                src: "assets/images/terrace.jpg",
                alt: "Terrace overlooking the grounds",
              },
            ],
            badge: "Private Park",
          },
          {
            number: "07",
            title: "22 private worlds in Prague 5",
            paragraphs: [
              "Each residence is delivered in Shell & Core, leaving room for authorship. High ceilings, panoramic glazing, contactless access, Loxone integration, Schindler lifts, strong insulation, and concierge service make the technical layer as considered as the aesthetic one.",
              "What emerges is not simply an apartment purchase, but a rare urban estate for people who want Prague close, yet never inside the home.",
            ],
            points: [
              "Shell & Core freedom",
              "Smart home and contactless access",
              "Concierge, storage, EV-ready parking",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Aerial view of Turbová in Prague 5",
              },
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Turbová residences and terraces",
              },
            ],
            badge: "2026",
          },
        ],
        mission: {
          eyebrow: "Mission",
          title: "Mission",
          paragraphs: [
            "Turbová translates historic memory into a contemporary form of prestige: quiet, authorship, and private greenery at the center of Prague 5.",
            "Its mission is not to overwhelm, but to shelter. To offer a residence where status is expressed through calm materials, controlled scale, and the daily privilege of silence.",
          ],
          note: "Project completion: 2026",
        },
        cta: {
          eyebrow: "Next steps",
          title: "Ready to experience Turbová?",
          text: "Choose how you want to continue the story.",
          cards: [
            {
              eyebrow: "Chapter 02",
              title: "Explore the residences",
              text: "Review the architecture, layouts, and material approach across the two buildings.",
              label: "Open residences",
              href: "residences.html",
            },
            {
              eyebrow: "Chapter 04",
              title: "See the private grounds",
              text: "Discover the park, waterfall courtyard, outdoor fitness, and the slower rhythm around the estate.",
              label: "Open the grounds",
              href: "grounds.html",
            },
          ],
        },
        quote:
          "A residence shaped less by display and more by the privilege of hearing leaves before traffic.",
        next: { href: "residences.html", label: "Continue to residences" },
      },
      cs: {
        title: "Turbová | Příběh",
        hero: {
          eyebrow: "Náš příběh",
          title: "Z města uslyšíte méně.",
          lead:
            "Za branami Turbové se proměňuje panství z 18. století v soukromou rezidenci, kde historii, zeleň a ticho přetvářejí vzácnější způsob bydlení na Praze 5.",
          description:
            "Příběh začíná svahovým útočištěm, prochází tvůrčím odkazem Jiřího Trnky a ústí do dvou současných budov, 22 rezidencí, wellness rituálů a parku, který působí spíš jako skryté městské sídlo než další adresa ve městě.",
          button: { label: "Číst náš příběh", href: "#story-intro" },
          media: [
            "assets/images/turbova-old.jpg",
            "assets/images/birds-eye-view.jpg",
            "assets/images/birds-eye-view-2.jpg",
            "assets/images/front-view.jpg",
          ],
          collage: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Lobby Turbová",
            },
            {
              src: "assets/images/turbova-old.jpg",
              alt: "Historické panství Turbová",
            },
            {
              src: "assets/images/two-buildings-side-view.jpeg",
              alt: "Rezidence Turbová v zahradě",
            },
          ],
          badges: [
            { label: "18. stol.", note: "původ areálu" },
            { label: "22", note: "soukromých rezidencí" },
            { label: "2026", note: "dokončení projektu" },
          ],
        },
        metrics: [
          { value: "18.", label: "století původu" },
          { value: "Jiří", label: "Trnka a tvůrčí odkaz" },
          { value: "Smíchov", label: "městský kontext" },
        ],
        story: {
          title: "Skrytý svět s veřejnou pamětí",
          paragraphs: [
            "Místo odjakživa přitahovalo ty, kdo chtěli ústraní bez odtržení od světa. Nejprve svah formovaly vinice, později mu další život dali umělci a mecenáši.",
            "Tento pocit selektivního soukromí určuje i filozofii projektu: městský statek pro rezidenty, kteří chtějí mít rytmus Prahy nablízku, ale doma cítit především ticho.",
          ],
        },
        pillars: [
          {
            title: "Historie místa",
            text: "Bývalé panství s aristokratickým původem a tichým uměleckým pokračováním.",
          },
          {
            title: "Filozofie projektu",
            text: "Status bez hluku. Vzácné aktivum definované komorností namísto okázalosti.",
          },
          {
            title: "Městský statek",
            text: "Městská energie venku, soukromý parkový klid uvnitř.",
          },
        ],
        gallery: [
          {
            src: "assets/images/turbova-old.jpg",
            alt: "Historická fotografie Turbové",
          },
          {
            src: "assets/images/waterfall.jpg",
            alt: "Současné nádvoří s vodním prvkem",
          },
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Letecký pohled na areál Turbová",
          },
        ],
        intro: {
          eyebrow: "Odkaz",
          title: "František z Turby a Jiří Trnka, dvě kapitoly v odkazu tohoto areálu. Tady příběh začíná.",
          cards: [
            {
              title: "Historické panství",
              subtitle: "Původ v 18. století",
              text:
                "Místo patřilo královskému rádci Františku z Turby a získalo klidnou noblesu svahového panství dávno předtím, než se Praha rozrostla až sem.",
              image: "assets/images/turbova-old.jpg",
              alt: "Historické panství Turbová",
            },
            {
              title: "Tvůrčí útočiště",
              subtitle: "Odkaz Jiřího Trnky",
              text:
                "Později se areál stal součástí tvůrčího světa Jiřího Trnky a potvrdil, že tato adresa vždy přitahovala soukromé, imaginativní a kultivované životy.",
              image: "assets/images/birds-eye-view.jpg",
              alt: "Letecký pohled na Turbovou na Praze 5",
            },
          ],
        },
        timeline: [
          { year: "18. stol.", label: "Panství Františka z Turby" },
          { year: "Vinice", label: "Svahové hospodaření a ústraní" },
          { year: "Trnka", label: "Do areálu vstupuje tvůrčí paměť" },
          { year: "Praha 5", label: "Městská energie obklopuje místo" },
          { year: "22 domovů", label: "Vznikají dvě butikové budovy" },
          { year: "Wellness", label: "Bazén, hammam, sauna, terasa" },
          { year: "2026", label: "Dokončení projektu" },
          { year: "Dál", label: "Nová kapitola soukromého bydlení" },
        ],
        beats: [
          {
            number: "01",
            title: "Vinice, svahový vzduch a místo stvořené pro ústraní",
            paragraphs: [
              "Dávno před současnou rezidencí nabízel tento svah přesně to, co nabízí i dnes: nadhled, zeleň a pocit jemného odstupu od městského hluku.",
              "Tento původní příběh je důležitý. Turbová si soukromí nevymýšlí, ale navazuje na dlouhodobý vztah mezi místem a lidmi, které sem přitahovalo.",
            ],
            points: [
              "Bývalé panství z 18. století",
              "Selektivní soukromí od samého začátku",
              "Prostředí formované svahem a zelení",
            ],
            media: [
              {
                src: "assets/images/turbova-old.jpg",
                alt: "Historické panství Turbová",
              },
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Letecký pohled na Turbovou",
              },
            ],
            badge: "Původ",
          },
          {
            number: "02",
            title: "Město se přiblížilo. Ticho zůstalo.",
            paragraphs: [
              "Smíchov se stal jednou z nejlépe napojených částí Prahy, přesto si areál Turbová zachoval jiné tempo. Soukromý park filtruje zvuk, změkčuje výhledy a mění blízkost města ve výhodu, nikoli tlak.",
              "Právě v tom spočívá hlavní paradox rezidence: školy, zdravotnictví, Anděl i hlavní trasy máte na dosah, zatímco domov působí odpojeně od městské naléhavosti.",
            ],
            points: [
              "Napojení na Prahu 5",
              "Akustika soukromého parku",
              "Minuty od Anděla i mezinárodních škol",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Letecký pohled na Prahu 5 a Turbovou",
              },
              {
                src: "assets/images/waterfall.jpg",
                alt: "Vodní prvek v areálu Turbová",
              },
            ],
            badge: "Kontext",
          },
          {
            number: "03",
            title: "Dvě budovy. Žádná okázalost.",
            paragraphs: [
              "Architektura odmítá přehnaná gesta. Dvě budovy po jedenácti rezidencích vstupují do místa klidnou proporcí, fasádou z přírodního kamene a terasami, které drží každý byt v přímém kontaktu s parkem.",
              "Měřítko je záměrně komorní. Turbová se chová spíš jako soukromé městské sídlo než běžný developerský projekt, kde se právě intimita stává skutečným znakem statusu.",
            ],
            points: [
              "Celkem 22 rezidencí",
              "Byty od 110 do 299 m²",
              "Balkon nebo terasa ke každému bytu",
            ],
            media: [
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Dvě budovy Turbové vedle zahrady",
              },
              {
                src: "assets/images/main-lobby-entrance-and-logo.jpg",
                alt: "Lobby a příjezd Turbová",
              },
            ],
            badge: "22 Domovů",
          },
          {
            number: "04",
            title: "A pak začaly mluvit materiály.",
            paragraphs: [
              "Prestige se zde staví na zdrženlivosti, ne na dekoru. Vápenec, terrazzo, reliéfní mosaz a precizně vedené světlo dávají společným prostorům hmatovou, kultivovanou identitu.",
              "Dokonce i garáž je součástí zážitku. Umění, vzor a řemeslný detail nesou vyprávění i do míst, která většina projektů nechává anonymní.",
            ],
            points: [
              "Fasáda z přírodního kamene",
              "Terrazzo v komunikačních prostorách",
              "Reliéfní mosaz a kurátorovaná garáž",
            ],
            media: [
              {
                src: "assets/images/corridor.jpg",
                alt: "Dekorativní chodba Turbová",
              },
              {
                src: "assets/images/garage-parking.jpg",
                alt: "Kurátorované podzemní parkování Turbová",
              },
            ],
            badge: "Kámen + Mosaz",
          },
          {
            number: "05",
            title: "Rituální patro uvnitř rezidence",
            paragraphs: [
              "Wellness úroveň je navržena jako soukromý rituál, nikoli jako doplňková služba: vyhřívaný bazén, sauna, hammam, šatny, kuchyňka a terasa lounge.",
              "Rezidenti mohou přecházet z vody do tepla a na čerstvý vzduch, aniž by opustili chráněný svět areálu. Celý zážitek působí pomalu, niterně a kompletně.",
            ],
            points: [
              "Vyhřívaný bazén",
              "Sauna a hammam",
              "Terasový lounge a soukromé občerstvení",
            ],
            media: [
              {
                src: "assets/images/spa-pool.jpg",
                alt: "Soukromý bazén Turbová",
              },
              {
                src: "assets/images/spa-sitting-pool.jpg",
                alt: "Spa lounge Turbová",
              },
            ],
            badge: "Wellness",
          },
          {
            number: "06",
            title: "Park, který mění prestiž v soukromí",
            paragraphs: [
              "Venku pokračuje stejná logika. Kaskádová výsadba, vzrostlé stromy, outdoor fitness, viniční domek a dětská zóna mění krajinu v něco, co skutečně obýváte, ne jen sledujete z okna.",
              "Park není ornament. Je to vrstva, která činí rezidenci emocionálně jedinečnou a dodává každému dni pomalejší rytmus i tišší rámec.",
            ],
            points: [
              "Soukromá zahrada jen pro rezidenty",
              "Outdoor fitness a viniční domek",
              "Bezpečný a chráněný svět pro rodiny",
            ],
            media: [
              {
                src: "assets/images/waterfall.jpg",
                alt: "Vodní prvek a soukromá zahrada Turbová",
              },
              {
                src: "assets/images/terrace.jpg",
                alt: "Terasa nad parkem",
              },
            ],
            badge: "Soukromý Park",
          },
          {
            number: "07",
            title: "22 soukromých světů na Praze 5",
            paragraphs: [
              "Každá rezidence je předávána ve standardu Shell & Core, takže zůstává prostor pro autorský rukopis. Vysoké stropy, panoramatické prosklení, bezkontaktní vstup, Loxone, výtahy Schindler, důsledná izolace a concierge servis dávají technické vrstvě stejnou váhu jako té estetické.",
              "Nevzniká tak jen koupě apartmánu, ale vzácné městské sídlo pro lidi, kteří chtějí mít Prahu nablízku, ale nikdy uvnitř domova.",
            ],
            points: [
              "Svoboda Shell & Core",
              "Smart home a bezkontaktní přístup",
              "Concierge, sklady a EV-ready parkování",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Letecký pohled na Turbovou na Praze 5",
              },
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Rezidence Turbová a terasy",
              },
            ],
            badge: "2026",
          },
        ],
        mission: {
          eyebrow: "Mise",
          title: "Mise",
          paragraphs: [
            "Turbová převádí historickou paměť do současné podoby prestiže: ticha, autorství a soukromé zeleně v samém srdci Prahy 5.",
            "Její ambicí není ohromovat, ale chránit. Nabídnout rezidenci, kde se status vyjadřuje klidnými materiály, kontrolovaným měřítkem a každodenním privilegiem ticha.",
          ],
          note: "Dokončení projektu: 2026",
        },
        cta: {
          eyebrow: "Další kroky",
          title: "Jste připraveni zažít Turbovou?",
          text: "Vyberte, jak chcete v příběhu pokračovat.",
          cards: [
            {
              eyebrow: "Kapitola 02",
              title: "Prozkoumat rezidence",
              text: "Podívejte se na architekturu, dispozice a materiálový přístup obou budov.",
              label: "Otevřít rezidence",
              href: "residences.html",
            },
            {
              eyebrow: "Kapitola 04",
              title: "Poznat soukromé zahrady",
              text: "Objevte park, vodní dvůr, outdoor fitness i pomalejší rytmus kolem celého areálu.",
              label: "Otevřít zahrady",
              href: "grounds.html",
            },
          ],
        },
        quote:
          "Rezidence tvarovaná méně efektem a více privilegiem slyšet dříve listí než dopravu.",
        next: { href: "residences.html", label: "Pokračovat k rezidencím" },
      },
      ru: {
        title: "Turbová | История",
        hero: {
          eyebrow: "Наша история",
          title: "Города вы будете слышать меньше.",
          lead:
            "За воротами Turbová поместье XVIII века превращается в частную резиденцию, где история, зелень и тишина формируют более редкий образ жизни в Праге 5.",
          description:
            "История начинается с уединения на склоне, проходит через творческое наследие Иржи Трнки и приводит к двум современным зданиям, 22 резиденциям, велнес-ритуалам и парку, который ощущается скорее как укромное поместье, чем адрес в городе.",
          button: { label: "Читать нашу историю", href: "#story-intro" },
          media: [
            "assets/images/turbova-old.jpg",
            "assets/images/birds-eye-view.jpg",
            "assets/images/birds-eye-view-2.jpg",
            "assets/images/front-view.jpg",
          ],
          collage: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Лобби Turbová",
            },
            {
              src: "assets/images/turbova-old.jpg",
              alt: "Историческое поместье Turbová",
            },
            {
              src: "assets/images/two-buildings-side-view.jpeg",
              alt: "Резиденции Turbová в саду",
            },
          ],
          badges: [
            { label: "XVIII в.", note: "истоки поместья" },
            { label: "22", note: "частные резиденции" },
            { label: "2026", note: "завершение проекта" },
          ],
        },
        metrics: [
          { value: "XVIII", label: "век родословной" },
          { value: "Иржи", label: "Трнка, творческое наследие" },
          { value: "Смихов", label: "городской контекст" },
        ],
        story: {
          title: "Укромный мир с публичной памятью",
          paragraphs: [
            "Это место всегда притягивало тех, кто ценил уединение без отрешённости. Сначала склон формировали виноградники; позже художники и меценаты дали ему другую жизнь.",
            "Это чувство избирательной приватности определяет философию проекта: городское поместье для резидентов, которые хотят, чтобы ритм Праги был рядом, но первым ощущением дома была тишина.",
          ],
        },
        pillars: [
          {
            title: "История места",
            text: "Бывшее поместье с аристократическим происхождением и тихим художественным продолжением.",
          },
          {
            title: "Философия проекта",
            text: "Статус без шума. Редкий актив, определяемый камерностью, а не зрелищностью.",
          },
          {
            title: "Городское поместье",
            text: "Энергия города снаружи, тишина частного парка внутри.",
          },
        ],
        gallery: [
          {
            src: "assets/images/turbova-old.jpg",
            alt: "Историческое изображение Turbová",
          },
          {
            src: "assets/images/waterfall.jpg",
            alt: "Современный двор с водопадом",
          },
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Вид с высоты на территорию Turbová",
          },
        ],
        intro: {
          eyebrow: "Наследие",
          title: "Франтишек из Турбы и Иржи Трнка — две главы в наследии поместья. Здесь начинается история.",
          cards: [
            {
              title: "Историческое поместье",
              subtitle: "Истоки XVIII века",
              text:
                "Участок принадлежал королевскому советнику Франтишеку из Турбы и обрёл осанку уединённого поместья на склоне задолго до того, как Прага разрослась вокруг.",
              image: "assets/images/turbova-old.jpg",
              alt: "Историческое поместье Turbová",
            },
            {
              title: "Творческое убежище",
              subtitle: "Наследие Иржи Трнки",
              text:
                "Позже территория вошла в творческую орбиту Иржи Трнки, укрепив идею, что этот адрес всегда притягивал частные, наполненные воображением жизни.",
              image: "assets/images/birds-eye-view.jpg",
              alt: "Вид с высоты на Turbová в Праге 5",
            },
          ],
        },
        timeline: [
          { year: "XVIII в.", label: "Поместье Франтишека из Турбы" },
          { year: "Виноградники", label: "Возделывание склона и уединение" },
          { year: "Трнка", label: "Творческая память входит в территорию" },
          { year: "Прага 5", label: "Городская энергия собирается вокруг места" },
          { year: "22 дома", label: "Обретают форму два бутиковых здания" },
          { year: "Велнес", label: "Бассейн, хаммам, сауна, терраса" },
          { year: "2026", label: "Завершение проекта" },
          { year: "Далее", label: "Новая глава частной жизни" },
        ],
        beats: [
          {
            number: "01",
            title: "Виноградники, воздух склона и место, созданное для уединения",
            paragraphs: [
              "Задолго до нынешней резиденции склон предлагал ровно то, что предлагает и сейчас: высоту, зелень и ощущение лёгкой отстранённости от городского шума.",
              "Эта изначальная история важна. Turbová не изобретает приватность с нуля; она продолжает отношения между землёй и людьми, которых она притягивала.",
            ],
            points: [
              "Бывшее поместье XVIII века",
              "Избирательная приватность с самого начала",
              "Среда, сформированная зеленью и склоном",
            ],
            media: [
              {
                src: "assets/images/turbova-old.jpg",
                alt: "Историческое поместье Turbová",
              },
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Вид с высоты на Turbová",
              },
            ],
            badge: "Истоки",
          },
          {
            number: "02",
            title: "Город приблизился. Тишина осталась.",
            paragraphs: [
              "Смихов стал одним из самых связанных районов Праги, и всё же территория Turbová сохранила иной ритм. Частный парк фильтрует звук, смягчает виды и превращает близость в преимущество, а не давление.",
              "В этом главный парадокс резиденции: вы в минутах от школ, медицины, Андела и ключевых магистралей, тогда как дом ощущается отстранённым от городской спешки.",
            ],
            points: [
              "Связь с Прагой 5",
              "Акустика частного парка",
              "Минуты до Андела и международных школ",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Вид с высоты на Прагу 5 и Turbová",
              },
              {
                src: "assets/images/waterfall.jpg",
                alt: "Двор с водопадом в Turbová",
              },
            ],
            badge: "Контекст",
          },
          {
            number: "03",
            title: "Два здания. Без зрелищности.",
            paragraphs: [
              "Архитектура отказывается от преувеличений. Два здания по 11 резиденций входят в участок спокойными пропорциями, фасадами из природного известняка и террасами, удерживающими каждую квартиру в связи с парком.",
              "Масштаб выбран намеренно. Turbová ведёт себя скорее как частное поместье, чем как обычный девелопмент, где именно камерность становится подлинным маркером статуса.",
            ],
            points: [
              "Всего 22 резиденции",
              "Дома 110–299 м²",
              "Балкон или терраса у каждой резиденции",
            ],
            media: [
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Два здания Turbová рядом с садом",
              },
              {
                src: "assets/images/main-lobby-entrance-and-logo.jpg",
                alt: "Лобби и прибытие Turbová",
              },
            ],
            badge: "22 дома",
          },
          {
            number: "04",
            title: "А затем заговорили материалы.",
            paragraphs: [
              "Престиж здесь строится сдержанностью, а не декором. Известняк, терраццо, резная латунь и тщательно выверенный свет придают общим пространствам тактильную, собранную идентичность.",
              "Даже гараж воспринимается как часть впечатления. Искусство, узор и ремесленная деталь несут повествование туда, где большинство проектов оставляет анонимность.",
            ],
            points: [
              "Фасад из природного известняка",
              "Полы из терраццо в коммуникациях",
              "Резная латунь и кураторское искусство в гараже",
            ],
            media: [
              {
                src: "assets/images/corridor.jpg",
                alt: "Декоративный коридор Turbová",
              },
              {
                src: "assets/images/garage-parking.jpg",
                alt: "Кураторская подземная парковка Turbová",
              },
            ],
            badge: "Камень + латунь",
          },
          {
            number: "05",
            title: "Ритуальный этаж под резиденцией",
            paragraphs: [
              "Велнес-уровень задуман как частный ритуал, а не дополнительная опция: подогреваемый бассейн, сауна, хаммам, раздевалки, кухонька и лаунж-терраса.",
              "Резиденты могут переходить от воды к теплу и к открытому воздуху, не покидая защищённого мира поместья. Впечатление ощущается медленным, обращённым внутрь и завершённым.",
            ],
            points: [
              "Подогреваемый бассейн",
              "Сауна и хаммам",
              "Лаунж-терраса и приватное угощение",
            ],
            media: [
              {
                src: "assets/images/spa-pool.jpg",
                alt: "Частный бассейн Turbová",
              },
              {
                src: "assets/images/spa-sitting-pool.jpg",
                alt: "Спа-лаунж Turbová",
              },
            ],
            badge: "Велнес",
          },
          {
            number: "06",
            title: "Парк, превращающий престиж в приватность",
            paragraphs: [
              "Снаружи территория продолжает ту же логику. Каскадные посадки, зрелые деревья, открытый фитнес, винный дом и детская площадка превращают ландшафт в то, что обживаешь, а не просто разглядываешь.",
              "Парк не декоративен. Именно он делает резиденцию эмоционально особенной, придавая каждому дню более медленный темп и более тихую рамку.",
            ],
            points: [
              "Частный сад только для резидентов",
              "Открытый фитнес и винный дом",
              "Безопасный, укрытый мир для семей",
            ],
            media: [
              {
                src: "assets/images/waterfall.jpg",
                alt: "Водопад и частный сад Turbová",
              },
              {
                src: "assets/images/terrace.jpg",
                alt: "Терраса над территорией",
              },
            ],
            badge: "Частный парк",
          },
          {
            number: "07",
            title: "22 частных мира в Праге 5",
            paragraphs: [
              "Каждая резиденция передаётся в формате Shell & Core, оставляя место для авторства. Высокие потолки, панорамное остекление, бесконтактный доступ, интеграция Loxone, лифты Schindler, мощная изоляция и консьерж-сервис делают техническую часть столь же продуманной, сколь и эстетическую.",
              "В результате возникает не просто покупка квартиры, а редкое городское поместье для людей, которые хотят, чтобы Прага была рядом, но никогда — внутри дома.",
            ],
            points: [
              "Свобода Shell & Core",
              "Умный дом и бесконтактный доступ",
              "Консьерж, кладовые, парковка с зарядкой EV",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Вид с высоты на Turbová в Праге 5",
              },
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Резиденции и террасы Turbová",
              },
            ],
            badge: "2026",
          },
        ],
        mission: {
          eyebrow: "Миссия",
          title: "Миссия",
          paragraphs: [
            "Turbová переводит историческую память в современную форму престижа: тишину, авторство и частную зелень в самом сердце Праги 5.",
            "Её миссия — не поражать, а укрывать. Предложить резиденцию, где статус выражается спокойными материалами, выверенным масштабом и ежедневной привилегией тишины.",
          ],
          note: "Завершение проекта: 2026",
        },
        cta: {
          eyebrow: "Дальнейшие шаги",
          title: "Готовы почувствовать Turbová?",
          text: "Выберите, как продолжить историю.",
          cards: [
            {
              eyebrow: "Глава 02",
              title: "Исследовать резиденции",
              text: "Рассмотрите архитектуру, планировки и материальный подход обоих зданий.",
              label: "Открыть резиденции",
              href: "residences.html",
            },
            {
              eyebrow: "Глава 04",
              title: "Увидеть частную территорию",
              text: "Откройте парк, двор с водопадом, открытый фитнес и более медленный ритм вокруг поместья.",
              label: "Открыть сады",
              href: "grounds.html",
            },
          ],
        },
        quote:
          "Резиденция, сформированная меньше показным эффектом и больше привилегией услышать листву раньше, чем транспорт.",
        next: { href: "residences.html", label: "Продолжить к резиденциям" },
      },
      fr: {
        title: "Turbová | Histoire",
        hero: {
          eyebrow: "Notre histoire",
          title: "Vous entendrez moins la ville.",
          lead:
            "Derrière les grilles de Turbová, un domaine du XVIIIe siècle se réinvente en résidence privée où l'histoire, la verdure et le silence façonnent une manière plus rare de vivre à Prague 5.",
          description:
            "L'histoire commence par une retraite sur le coteau, traverse l'héritage créatif de Jiří Trnka et aboutit à deux bâtiments contemporains, 22 résidences, des rituels de bien-être et un parc qui tient davantage du domaine retiré que d'une adresse en ville.",
          button: { label: "Lire notre histoire", href: "#story-intro" },
          media: [
            "assets/images/turbova-old.jpg",
            "assets/images/birds-eye-view.jpg",
            "assets/images/birds-eye-view-2.jpg",
            "assets/images/front-view.jpg",
          ],
          collage: [
            {
              src: "assets/images/main-lobby-entrance-and-logo.jpg",
              alt: "Hall Turbová",
            },
            {
              src: "assets/images/turbova-old.jpg",
              alt: "Domaine historique Turbová",
            },
            {
              src: "assets/images/two-buildings-side-view.jpeg",
              alt: "Les résidences Turbová dans le jardin",
            },
          ],
          badges: [
            { label: "XVIIIe s.", note: "origines du domaine" },
            { label: "22", note: "résidences privées" },
            { label: "2026", note: "achèvement du projet" },
          ],
        },
        metrics: [
          { value: "XVIIIe", label: "lignée séculaire" },
          { value: "Jiří", label: "héritage créatif de Trnka" },
          { value: "Smíchov", label: "contexte urbain" },
        ],
        story: {
          title: "Un monde retiré à la mémoire publique",
          paragraphs: [
            "Le lieu a toujours attiré ceux qui valorisaient la retraite sans le retrait. Les vignes ont d'abord façonné le coteau ; plus tard, artistes et mécènes lui ont donné une autre vie.",
            "Ce sens d'une intimité choisie guide la philosophie du projet : un domaine urbain pour des résidents qui veulent le rythme de Prague à portée, mais le silence comme première sensation chez eux.",
          ],
        },
        pillars: [
          {
            title: "Histoire du lieu",
            text: "Un ancien domaine à la provenance aristocratique et à la postérité artistique discrète.",
          },
          {
            title: "Philosophie du projet",
            text: "Le statut sans le bruit. Un bien rare défini par l'intimité plutôt que par le spectacle.",
          },
          {
            title: "Domaine urbain",
            text: "L'énergie de la ville à l'extérieur, la quiétude du parc privé à l'intérieur.",
          },
        ],
        gallery: [
          {
            src: "assets/images/turbova-old.jpg",
            alt: "Image historique de Turbová",
          },
          {
            src: "assets/images/waterfall.jpg",
            alt: "Cour contemporaine avec cascade",
          },
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Vue aérienne du domaine Turbová",
          },
        ],
        intro: {
          eyebrow: "Héritage",
          title: "František de Turba et Jiří Trnka, deux chapitres de l'héritage du domaine. C'est ici que l'histoire commence.",
          cards: [
            {
              title: "Domaine historique",
              subtitle: "Origines du XVIIIe siècle",
              text:
                "Le site appartenait au conseiller royal František de Turba et avait acquis l'allure d'un domaine retiré sur le coteau bien avant que Prague ne s'étende autour.",
              image: "assets/images/turbova-old.jpg",
              alt: "Domaine historique Turbová",
            },
            {
              title: "Refuge créatif",
              subtitle: "La postérité de Jiří Trnka",
              text:
                "Plus tard, le domaine est entré dans l'orbite créative de Jiří Trnka, confirmant que cette adresse a toujours attiré des vies privées et imaginatives.",
              image: "assets/images/birds-eye-view.jpg",
              alt: "Vue aérienne de Turbová à Prague 5",
            },
          ],
        },
        timeline: [
          { year: "XVIIIe s.", label: "Domaine de František de Turba" },
          { year: "Vignes", label: "Culture du coteau et retraite" },
          { year: "Trnka", label: "La mémoire créative entre dans le domaine" },
          { year: "Prague 5", label: "L'énergie urbaine se rassemble autour du site" },
          { year: "22 logements", label: "Deux bâtiments boutique prennent forme" },
          { year: "Bien-être", label: "Piscine, hammam, sauna, terrasse" },
          { year: "2026", label: "Achèvement du projet" },
          { year: "Au-delà", label: "Un nouveau chapitre de vie privée" },
        ],
        beats: [
          {
            number: "01",
            title: "Vignes, air du coteau et un lieu fait pour la retraite",
            paragraphs: [
              "Bien avant la résidence actuelle, le coteau offrait exactement ce qu'il offre encore aujourd'hui : l'altitude, la verdure et le sentiment d'être légèrement à l'écart du bruit de la ville.",
              "Cette histoire d'origine compte. Turbová n'invente pas l'intimité de toutes pièces ; elle prolonge une relation entre la terre et ceux qu'elle a attirés.",
            ],
            points: [
              "Ancien domaine du XVIIIe siècle",
              "Une intimité choisie dès le départ",
              "Un cadre façonné par la verdure et la pente",
            ],
            media: [
              {
                src: "assets/images/turbova-old.jpg",
                alt: "Domaine historique Turbová",
              },
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Vue aérienne de Turbová",
              },
            ],
            badge: "Origine",
          },
          {
            number: "02",
            title: "La ville s'est approchée. Le calme est resté.",
            paragraphs: [
              "Smíchov est devenu l'un des quartiers les mieux reliés de Prague, et pourtant le domaine de Turbová a gardé un autre rythme. Le parc privé filtre le son, adoucit les vues et transforme la proximité en avantage plutôt qu'en pression.",
              "C'est le paradoxe central de la résidence : vous restez à quelques minutes des écoles, des soins, d'Anděl et des grands axes, tandis que le foyer semble détaché de l'urgence de la ville.",
            ],
            points: [
              "Connectivité de Prague 5",
              "Acoustique du parc privé",
              "À quelques minutes d'Anděl et des écoles internationales",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Vue aérienne de Prague 5 et de Turbová",
              },
              {
                src: "assets/images/waterfall.jpg",
                alt: "Cour à cascade à Turbová",
              },
            ],
            badge: "Contexte",
          },
          {
            number: "03",
            title: "Deux bâtiments. Aucun spectacle.",
            paragraphs: [
              "L'architecture refuse l'emphase. Deux bâtiments, 11 résidences chacun, s'inscrivent dans le site avec des proportions calmes, des façades de calcaire naturel et des terrasses qui gardent chaque appartement relié au parc.",
              "L'échelle est délibérée. Turbová se comporte davantage comme un domaine privé que comme un projet classique, où l'intimité devient le véritable marqueur du statut.",
            ],
            points: [
              "22 résidences au total",
              "Logements de 110 à 299 m²",
              "Un balcon ou une terrasse pour chaque résidence",
            ],
            media: [
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Deux bâtiments Turbová près du jardin",
              },
              {
                src: "assets/images/main-lobby-entrance-and-logo.jpg",
                alt: "Hall et arrivée Turbová",
              },
            ],
            badge: "22 logements",
          },
          {
            number: "04",
            title: "Puis les matériaux se sont mis à parler.",
            paragraphs: [
              "Le prestige se construit ici par la retenue plutôt que par la décoration. Calcaire, terrazzo, laiton ciselé et lumière maîtrisée donnent aux espaces communs une identité tactile et soignée.",
              "Même le garage est traité comme une partie de l'expérience. L'art, le motif et le détail artisanal portent le récit là où la plupart des projets laissent l'anonymat.",
            ],
            points: [
              "Façade en calcaire naturel",
              "Sols de circulation en terrazzo",
              "Laiton ciselé et art de garage soigné",
            ],
            media: [
              {
                src: "assets/images/corridor.jpg",
                alt: "Couloir décoratif Turbová",
              },
              {
                src: "assets/images/garage-parking.jpg",
                alt: "Parking souterrain soigné de Turbová",
              },
            ],
            badge: "Pierre + laiton",
          },
          {
            number: "05",
            title: "Un étage rituel sous la résidence",
            paragraphs: [
              "Le niveau bien-être est conçu comme un rituel privé plutôt qu'un équipement annexe : piscine chauffée, sauna, hammam, vestiaires, kitchenette et salon-terrasse.",
              "Les résidents peuvent passer de l'eau à la chaleur puis au plein air sans quitter le monde protégé du domaine. L'expérience est lente, intérieure et complète.",
            ],
            points: [
              "Piscine chauffée",
              "Sauna et hammam",
              "Salon-terrasse et rafraîchissements privés",
            ],
            media: [
              {
                src: "assets/images/spa-pool.jpg",
                alt: "Piscine privée de Turbová",
              },
              {
                src: "assets/images/spa-sitting-pool.jpg",
                alt: "Salon spa de Turbová",
              },
            ],
            badge: "Bien-être",
          },
          {
            number: "06",
            title: "Un parc qui transforme le prestige en intimité",
            paragraphs: [
              "À l'extérieur, le domaine prolonge la même logique. Plantations en cascade, arbres matures, fitness en plein air, maison du vin et espace de jeu transforment le paysage en quelque chose que l'on habite plutôt qu'on ne regarde.",
              "Le parc n'est pas ornemental. C'est lui qui rend la résidence émotionnellement singulière, donnant à chaque journée un rythme plus lent et un cadre plus calme.",
            ],
            points: [
              "Jardin privé réservé aux résidents",
              "Fitness en plein air et maison du vin",
              "Un monde sûr et abrité pour les familles",
            ],
            media: [
              {
                src: "assets/images/waterfall.jpg",
                alt: "Cascade et jardin privé de Turbová",
              },
              {
                src: "assets/images/terrace.jpg",
                alt: "Terrasse surplombant le domaine",
              },
            ],
            badge: "Parc privé",
          },
          {
            number: "07",
            title: "22 mondes privés à Prague 5",
            paragraphs: [
              "Chaque résidence est livrée en Shell & Core, laissant place à l'écriture personnelle. Hauteurs sous plafond, baies panoramiques, accès sans contact, intégration Loxone, ascenseurs Schindler, forte isolation et conciergerie rendent la couche technique aussi soignée que l'esthétique.",
              "Il n'en résulte pas un simple achat d'appartement, mais un rare domaine urbain pour ceux qui veulent Prague à proximité, jamais à l'intérieur du foyer.",
            ],
            points: [
              "Liberté Shell & Core",
              "Domotique et accès sans contact",
              "Conciergerie, rangements, parking prêt pour VE",
            ],
            media: [
              {
                src: "assets/images/birds-eye-view.jpg",
                alt: "Vue aérienne de Turbová à Prague 5",
              },
              {
                src: "assets/images/two-buildings-side-view.jpeg",
                alt: "Résidences et terrasses de Turbová",
              },
            ],
            badge: "2026",
          },
        ],
        mission: {
          eyebrow: "Mission",
          title: "Mission",
          paragraphs: [
            "Turbová traduit la mémoire historique en une forme contemporaine de prestige : le silence, l'écriture personnelle et la verdure privée au cœur de Prague 5.",
            "Sa mission n'est pas d'impressionner, mais d'abriter. Offrir une résidence où le statut s'exprime par des matériaux calmes, une échelle maîtrisée et le privilège quotidien du silence.",
          ],
          note: "Achèvement du projet : 2026",
        },
        cta: {
          eyebrow: "Prochaines étapes",
          title: "Prêt à vivre Turbová ?",
          text: "Choisissez comment poursuivre l'histoire.",
          cards: [
            {
              eyebrow: "Chapitre 02",
              title: "Explorer les résidences",
              text: "Découvrez l'architecture, les plans et l'approche matérielle des deux bâtiments.",
              label: "Ouvrir les résidences",
              href: "residences.html",
            },
            {
              eyebrow: "Chapitre 04",
              title: "Voir le parc privé",
              text: "Découvrez le parc, la cour à cascade, le fitness en plein air et le rythme plus lent autour du domaine.",
              label: "Ouvrir les jardins",
              href: "grounds.html",
            },
          ],
        },
        quote:
          "Une résidence façonnée moins par l'apparat que par le privilège d'entendre les feuilles avant la circulation.",
        next: { href: "residences.html", label: "Continuer vers les résidences" },
      },
    },
    residences: {
      en: {
        title: "Turbová | Residences",
        hero: {
          eyebrow: "02 | Residences",
          title: "Two buildings. Twenty-two private worlds.",
          lead:
            "Each building holds 11 residences, all with terraces or balconies, panoramic glazing, and the freedom of Shell & Core handover.",
          media: [
            "assets/images/two-buildings-side-view.jpeg",
            "assets/images/corridor.jpg",
            "assets/images/corridor-2.jpg",
          ],
        },
        metrics: [
          { value: "22", label: "apartments in total" },
          { value: "110–299", label: "m² residences" },
          { value: "3", label: "parking spaces each" },
        ],
        story: {
          title: "Architecture that keeps its voice low",
          paragraphs: [
            "The project is intentionally compact. Its value comes from proportion, daylight, privacy, and the ability to make each interior entirely your own.",
            "High ceilings and expansive windows connect the residences to surrounding greenery, while separate storage and premium vertical circulation keep practical life effortlessly hidden.",
          ],
        },
        pillars: [
          {
            title: "Shell & Core delivery",
            text: "A blank canvas for fully bespoke living rather than pre-packaged luxury.",
          },
          {
            title: "Natural material palette",
            text: "Natural limestone façades, terrazzo circulation floors, and carved brass communal details.",
          },
          {
            title: "Smart living systems",
            text: "Loxone integration, contactless access, advanced heat recovery, and strong sound insulation.",
          },
          {
            title: "Direct quiet movement",
            text: "Schindler elevators connect underground arrival with apartment entry in near silence.",
          },
        ],
        gallery: [
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Side view of the Turbová buildings",
          },
          {
            src: "assets/images/corridor.jpg",
            alt: "Decorative corridor",
          },
          {
            src: "assets/images/main-lobby-entrance-and-logo.jpg",
            alt: "Lobby entrance with Turbová logo",
          },
          {
            src: "assets/images/garage-parking.jpg",
            alt: "Parking gallery",
          },
        ],
        quote:
          "Private living here is not about excess. It is about authorship, calm proportions, and materials that age with dignity.",
        next: { href: "wellness.html", label: "Continue to wellness" },
      },
      cs: {
        title: "Turbová | Rezidence",
        hero: {
          eyebrow: "02 | Rezidence",
          title: "Dvě budovy. Dvacet dva soukromých světů.",
          lead:
            "Každá budova obsahuje 11 rezidencí, všechny s terasou nebo balkonem, panoramatickým prosklením a svobodou předání ve standardu Shell & Core.",
          media: [
            "assets/images/two-buildings-side-view.jpeg",
            "assets/images/corridor.jpg",
            "assets/images/corridor-2.jpg",
          ],
        },
        metrics: [
          { value: "22", label: "apartmánů celkem" },
          { value: "110–299", label: "m² rezidencí" },
          { value: "3", label: "parkovací místa každé" },
        ],
        story: {
          title: "Architektura, která mluví tiše",
          paragraphs: [
            "Projekt je záměrně kompaktní. Jeho hodnota stojí na proporci, denním světle, soukromí a možnosti vytvořit si každý interiér zcela po svém.",
            "Vysoké stropy a velkorysá okna propojují rezidence s okolní zelení, zatímco samostatné sklady a prémiová vertikální komunikace udržují praktický život nenápadně v pozadí.",
          ],
        },
        pillars: [
          {
            title: "Předání Shell & Core",
            text: "Čisté plátno pro skutečně autorské bydlení místo předem zabaleného luxusu.",
          },
          {
            title: "Přírodní materiály",
            text: "Fasády z přírodního vápence, terazzo ve společných prostorech a reliéfní mosazné detaily.",
          },
          {
            title: "Systémy chytrého bydlení",
            text: "Integrace Loxone, bezkontaktní vstup, pokročilá rekuperace a důsledná zvuková izolace.",
          },
          {
            title: "Tichý pohyb",
            text: "Výtahy Schindler propojují podzemní příjezd s bytem téměř beze zvuku.",
          },
        ],
        gallery: [
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Boční pohled na budovy Turbová",
          },
          {
            src: "assets/images/corridor.jpg",
            alt: "Dekorativní chodba",
          },
          {
            src: "assets/images/main-lobby-entrance-and-logo.jpg",
            alt: "Lobby se znakem Turbová",
          },
          {
            src: "assets/images/garage-parking.jpg",
            alt: "Parkovací galerie",
          },
        ],
        quote:
          "Soukromé bydlení zde nestojí na přebytku. Stojí na autorství, klidných proporcích a materiálech, které stárnou s důstojností.",
        next: { href: "wellness.html", label: "Pokračovat k wellness" },
      },
      ru: {
        title: "Turbová | Резиденции",
        hero: {
          eyebrow: "02 | Резиденции",
          title: "Два здания. Двадцать два частных мира.",
          lead:
            "Каждое здание вмещает 11 резиденций, все с террасами или балконами, панорамным остеклением и свободой передачи в формате Shell & Core.",
          media: [
            "assets/images/two-buildings-side-view.jpeg",
            "assets/images/corridor.jpg",
            "assets/images/corridor-2.jpg",
          ],
        },
        metrics: [
          { value: "22", label: "апартамента всего" },
          { value: "110–299", label: "м² резиденций" },
          { value: "3", label: "парковочных места каждой" },
        ],
        story: {
          title: "Архитектура, говорящая тихо",
          paragraphs: [
            "Проект намеренно компактен. Его ценность — в пропорции, дневном свете, приватности и возможности сделать каждый интерьер полностью своим.",
            "Высокие потолки и просторные окна связывают резиденции с окружающей зеленью, а отдельные кладовые и премиальные вертикальные коммуникации легко скрывают практическую сторону жизни.",
          ],
        },
        pillars: [
          {
            title: "Передача Shell & Core",
            text: "Чистый холст для по-настоящему авторского жилья вместо готового luxury.",
          },
          {
            title: "Палитра природных материалов",
            text: "Фасады из природного известняка, полы из терраццо в коммуникациях и резные латунные детали общих зон.",
          },
          {
            title: "Системы умного жилья",
            text: "Интеграция Loxone, бесконтактный доступ, продвинутая рекуперация тепла и сильная звукоизоляция.",
          },
          {
            title: "Прямое тихое движение",
            text: "Лифты Schindler соединяют подземное прибытие со входом в квартиру почти бесшумно.",
          },
        ],
        gallery: [
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Боковой вид зданий Turbová",
          },
          {
            src: "assets/images/corridor.jpg",
            alt: "Декоративный коридор",
          },
          {
            src: "assets/images/main-lobby-entrance-and-logo.jpg",
            alt: "Вход в лобби с логотипом Turbová",
          },
          {
            src: "assets/images/garage-parking.jpg",
            alt: "Парковочная галерея",
          },
        ],
        quote:
          "Частная жизнь здесь не про избыток. Она про авторство, спокойные пропорции и материалы, которые стареют достойно.",
        next: { href: "wellness.html", label: "Продолжить к велнесу" },
      },
      fr: {
        title: "Turbová | Résidences",
        hero: {
          eyebrow: "02 | Résidences",
          title: "Deux bâtiments. Vingt-deux mondes privés.",
          lead:
            "Chaque bâtiment compte 11 résidences, toutes avec terrasses ou balcons, baies panoramiques et la liberté d'une livraison Shell & Core.",
          media: [
            "assets/images/two-buildings-side-view.jpeg",
            "assets/images/corridor.jpg",
            "assets/images/corridor-2.jpg",
          ],
        },
        metrics: [
          { value: "22", label: "appartements au total" },
          { value: "110–299", label: "m² de résidences" },
          { value: "3", label: "places de parking chacune" },
        ],
        story: {
          title: "Une architecture qui garde la voix basse",
          paragraphs: [
            "Le projet est volontairement compact. Sa valeur vient de la proportion, de la lumière du jour, de l'intimité et de la possibilité de faire de chaque intérieur le vôtre.",
            "De hauts plafonds et de larges fenêtres relient les résidences à la verdure environnante, tandis que des rangements séparés et une circulation verticale haut de gamme dissimulent sans effort le quotidien pratique.",
          ],
        },
        pillars: [
          {
            title: "Livraison Shell & Core",
            text: "Une toile vierge pour un habitat sur mesure plutôt qu'un luxe préemballé.",
          },
          {
            title: "Palette de matériaux naturels",
            text: "Façades en calcaire naturel, sols de circulation en terrazzo et détails communs en laiton ciselé.",
          },
          {
            title: "Systèmes de maison intelligente",
            text: "Intégration Loxone, accès sans contact, récupération de chaleur avancée et forte isolation phonique.",
          },
          {
            title: "Un déplacement direct et feutré",
            text: "Les ascenseurs Schindler relient l'arrivée souterraine à l'entrée de l'appartement dans un quasi-silence.",
          },
        ],
        gallery: [
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Vue latérale des bâtiments Turbová",
          },
          {
            src: "assets/images/corridor.jpg",
            alt: "Couloir décoratif",
          },
          {
            src: "assets/images/main-lobby-entrance-and-logo.jpg",
            alt: "Entrée du hall avec le logo Turbová",
          },
          {
            src: "assets/images/garage-parking.jpg",
            alt: "Galerie de stationnement",
          },
        ],
        quote:
          "L'habitat privé ici n'est pas affaire d'excès. Il est affaire d'écriture, de proportions calmes et de matériaux qui vieillissent avec dignité.",
        next: { href: "wellness.html", label: "Continuer vers le bien-être" },
      },
    },
    wellness: {
      en: {
        title: "Turbová | Wellness",
        hero: {
          eyebrow: "03 | Wellness",
          title: "A ritual zone reserved for residents.",
          lead:
            "The internal wellness floor is designed as a slow, atmospheric sequence: heated pool, sauna, hammam, changing rooms, private kitchenette, and a terrace lounge.",
          media: [
            "assets/images/spa-pool.jpg",
            "assets/images/spa-sitting-pool.jpg",
            "assets/images/spa-sitting.jpg",
            "assets/images/spa-sitting-window.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "heated pool sanctuary" },
          { value: "2", label: "deep-heat rituals" },
          { value: "1", label: "terrace lounge retreat" },
        ],
        story: {
          title: "Well-being without leaving home",
          paragraphs: [
            "The wellness layer is conceived less like a gym annex and more like a private members' retreat. Lighting is warm, surfaces are tactile, and the water sequence becomes part of the identity.",
            "Residents can move from swim to steam to terrace without crossing public space, turning restoration into a daily habit rather than a planned outing.",
          ],
        },
        pillars: [
          {
            title: "Heated pool",
            text: "For morning laps, evening decompression, and year-round calm.",
          },
          {
            title: "Sauna and hammam",
            text: "A complete thermal ritual embedded inside the residence itself.",
          },
          {
            title: "Private refreshments",
            text: "Changing rooms and a kitchenette support longer, more social stays.",
          },
          {
            title: "Outdoor release",
            text: "The terrace lounge extends the experience into planted open air.",
          },
        ],
        gallery: [
          {
            src: "assets/images/spa-pool.jpg",
            alt: "Pool interior",
          },
          {
            src: "assets/images/spa-sitting-pool.jpg",
            alt: "Spa lounge",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Terrace seating",
          },
        ],
        quote:
          "Luxury here is the ability to restore your energy inside the same protected world you call home.",
        next: { href: "grounds.html", label: "Continue to grounds" },
      },
      cs: {
        title: "Turbová | Wellness",
        hero: {
          eyebrow: "03 | Wellness",
          title: "Rituální zóna vyhrazená rezidentům.",
          lead:
            "Interní wellness patro je navrženo jako pomalá, atmosférická sekvence: vyhřívaný bazén, sauna, hammam, šatny, soukromá kuchyňka a odpočinková terasa.",
          media: [
            "assets/images/spa-pool.jpg",
            "assets/images/spa-sitting-pool.jpg",
            "assets/images/spa-sitting.jpg",
            "assets/images/spa-sitting-window.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "vyhřívaný bazén" },
          { value: "2", label: "hluboké tepelné rituály" },
          { value: "1", label: "terasový retreat" },
        ],
        story: {
          title: "Péče o sebe bez opuštění domova",
          paragraphs: [
            "Wellness vrstva není pojata jako doplněk ke cvičení, ale jako soukromý klubový retreat. Osvětlení je teplé, povrchy hmatové a vodní sekvence se stává součástí identity projektu.",
            "Rezidenti mohou přejít z plavání do páry a na terasu bez průchodu veřejným prostorem, takže obnova sil se mění v denní návyk místo plánovaného výletu.",
          ],
        },
        pillars: [
          {
            title: "Vyhřívaný bazén",
            text: "Pro ranní plavání, večerní uvolnění i celoroční klid.",
          },
          {
            title: "Sauna a hammam",
            text: "Kompletní tepelný rituál přímo uvnitř rezidence.",
          },
          {
            title: "Soukromé občerstvení",
            text: "Šatny a kuchyňka podporují delší a společenské pobyty.",
          },
          {
            title: "Venkovní uvolnění",
            text: "Odpočinková terasa přenáší wellness i do vysazeného exteriéru.",
          },
        ],
        gallery: [
          {
            src: "assets/images/spa-pool.jpg",
            alt: "Interiér bazénu",
          },
          {
            src: "assets/images/spa-sitting-pool.jpg",
            alt: "Spa lounge",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Terasové sezení",
          },
        ],
        quote:
          "Luxus zde znamená možnost obnovit energii uvnitř stejného chráněného světa, který nazýváte domovem.",
        next: { href: "grounds.html", label: "Pokračovat k zahradám" },
      },
      ru: {
        title: "Turbová | Велнес",
        hero: {
          eyebrow: "03 | Велнес",
          title: "Ритуальная зона, отведённая резидентам.",
          lead:
            "Внутренний велнес-этаж задуман как медленная атмосферная последовательность: подогреваемый бассейн, сауна, хаммам, раздевалки, приватная кухонька и лаунж-терраса.",
          media: [
            "assets/images/spa-pool.jpg",
            "assets/images/spa-sitting-pool.jpg",
            "assets/images/spa-sitting.jpg",
            "assets/images/spa-sitting-window.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "подогреваемый бассейн-святилище" },
          { value: "2", label: "ритуала глубокого тепла" },
          { value: "1", label: "ретрит на террасе" },
        ],
        story: {
          title: "Забота о себе, не покидая дома",
          paragraphs: [
            "Велнес-слой задуман не как пристройка к спортзалу, а как частный клубный ретрит. Свет тёплый, поверхности тактильны, а водная последовательность становится частью идентичности.",
            "Резиденты могут переходить от плавания к пару и к террасе, не пересекая общественных зон, превращая восстановление в ежедневную привычку, а не запланированный выход.",
          ],
        },
        pillars: [
          {
            title: "Подогреваемый бассейн",
            text: "Для утренних заплывов, вечерней разгрузки и круглогодичного спокойствия.",
          },
          {
            title: "Сауна и хаммам",
            text: "Полный термальный ритуал, встроенный в саму резиденцию.",
          },
          {
            title: "Приватное угощение",
            text: "Раздевалки и кухонька поддерживают более долгие и общительные визиты.",
          },
          {
            title: "Выход наружу",
            text: "Лаунж-терраса продолжает впечатление в озеленённый открытый воздух.",
          },
        ],
        gallery: [
          {
            src: "assets/images/spa-pool.jpg",
            alt: "Интерьер бассейна",
          },
          {
            src: "assets/images/spa-sitting-pool.jpg",
            alt: "Спа-лаунж",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Сиденья на террасе",
          },
        ],
        quote:
          "Роскошь здесь — это возможность восстановить силы внутри того же защищённого мира, который вы называете домом.",
        next: { href: "grounds.html", label: "Продолжить к садам" },
      },
      fr: {
        title: "Turbová | Bien-être",
        hero: {
          eyebrow: "03 | Bien-être",
          title: "Une zone rituelle réservée aux résidents.",
          lead:
            "L'étage bien-être intérieur est conçu comme une séquence lente et atmosphérique : piscine chauffée, sauna, hammam, vestiaires, kitchenette privée et salon-terrasse.",
          media: [
            "assets/images/spa-pool.jpg",
            "assets/images/spa-sitting-pool.jpg",
            "assets/images/spa-sitting.jpg",
            "assets/images/spa-sitting-window.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "sanctuaire de piscine chauffée" },
          { value: "2", label: "rituels de chaleur profonde" },
          { value: "1", label: "retraite en salon-terrasse" },
        ],
        story: {
          title: "Le bien-être sans quitter son foyer",
          paragraphs: [
            "La couche bien-être est pensée moins comme une annexe de salle de sport que comme une retraite privée de club. La lumière est chaude, les surfaces tactiles, et la séquence aquatique devient part de l'identité.",
            "Les résidents peuvent passer de la nage à la vapeur puis à la terrasse sans traverser d'espace public, faisant de la récupération une habitude quotidienne plutôt qu'une sortie planifiée.",
          ],
        },
        pillars: [
          {
            title: "Piscine chauffée",
            text: "Pour les longueurs du matin, la décompression du soir et le calme toute l'année.",
          },
          {
            title: "Sauna et hammam",
            text: "Un rituel thermique complet intégré à la résidence elle-même.",
          },
          {
            title: "Rafraîchissements privés",
            text: "Vestiaires et kitchenette permettent des séjours plus longs et conviviaux.",
          },
          {
            title: "Échappée extérieure",
            text: "Le salon-terrasse prolonge l'expérience vers un plein air planté.",
          },
        ],
        gallery: [
          {
            src: "assets/images/spa-pool.jpg",
            alt: "Intérieur de la piscine",
          },
          {
            src: "assets/images/spa-sitting-pool.jpg",
            alt: "Salon spa",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Assises de la terrasse",
          },
        ],
        quote:
          "Le luxe ici, c'est de pouvoir restaurer son énergie dans le même monde protégé que l'on appelle foyer.",
        next: { href: "grounds.html", label: "Continuer vers les jardins" },
      },
    },
    grounds: {
      en: {
        title: "Turbová | Grounds",
        hero: {
          eyebrow: "04 | Grounds",
          title: "A private park that absorbs the city.",
          lead:
            "The garden grounds form a self-contained landscape with mature trees, cascading planting, outdoor fitness, a wine house, and a playground for the youngest residents.",
          media: [
            "assets/images/terrace.jpg",
            "assets/images/terrace-2.jpg",
            "assets/images/terrace-3.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "private park world" },
          { value: "100+", label: "years of tree presence" },
          { value: "4", label: "garden experiences" },
        ],
        story: {
          title: "Landscape as an amenity and a shield",
          paragraphs: [
            "The garden is not ornamental residue. It performs acoustically, visually, and socially. It protects the residence from surrounding noise while creating places to gather, train, or simply disappear for a while.",
            "The result is a softer form of luxury: not maximal programming, but the freedom to choose between movement, solitude, family time, and evening rituals outdoors.",
          ],
        },
        pillars: [
          {
            title: "Cascading private garden",
            text: "Layered topography and mature planting form a natural envelope around the residence.",
          },
          {
            title: "Outdoor fitness",
            text: "Equipment placed in greenery for open-air training with privacy.",
          },
          {
            title: "Wine house",
            text: "A social node for residents' gatherings and small private events.",
          },
          {
            title: "Children's play space",
            text: "A calm and secure outdoor setting removed from the city bustle.",
          },
        ],
        gallery: [
          {
            src: "assets/images/waterfall.jpg",
            alt: "Waterfall courtyard",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Garden terrace",
          },
        ],
        quote:
          "The rarest amenity may simply be being able to step outside and hear leaves instead of traffic.",
        next: { href: "location.html", label: "Continue to location" },
      },
      cs: {
        title: "Turbová | Zahrady",
        hero: {
          eyebrow: "04 | Zahrady",
          title: "Soukromý park, který pohlcuje město.",
          lead:
            "Zahradní areál vytváří uzavřenou krajinu se vzrostlými stromy, kaskádovou výsadbou, outdoor fitness, viničním domkem a hřištěm pro nejmladší rezidenty.",
          media: [
            "assets/images/terrace.jpg",
            "assets/images/terrace-2.jpg",
            "assets/images/terrace-3.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "svět soukromého parku" },
          { value: "100+", label: "let přítomnosti stromů" },
          { value: "4", label: "zahradní zkušenosti" },
        ],
        story: {
          title: "Krajina jako služba i ochrana",
          paragraphs: [
            "Zahrada zde není dekorativním zbytkem. Funguje akusticky, vizuálně i společensky. Chrání rezidenci před okolním hlukem a zároveň vytváří místa pro setkávání, trénink nebo prosté zmizení na chvíli o samotě.",
            "Výsledkem je měkčí forma luxusu: ne maximální program, ale svoboda volby mezi pohybem, samotou, rodinným časem a večerními rituály venku.",
          ],
        },
        pillars: [
          {
            title: "Kaskádová soukromá zahrada",
            text: "Vrstvená topografie a vzrostlá zeleň tvoří přirozený obal kolem rezidence.",
          },
          {
            title: "Outdoor fitness",
            text: "Vybavení zasazené do zeleně pro soukromý trénink na čerstvém vzduchu.",
          },
          {
            title: "Viniční domek",
            text: "Společenský uzel pro setkávání rezidentů a malé soukromé akce.",
          },
          {
            title: "Dětské hřiště",
            text: "Klidné a bezpečné venkovní prostředí vzdálené městskému ruchu.",
          },
        ],
        gallery: [
          {
            src: "assets/images/waterfall.jpg",
            alt: "Nádvoří s vodopádem",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Zahradní terasa",
          },
        ],
        quote:
          "Nejvzácnější službou může být prostě možnost vyjít ven a slyšet listí místo dopravy.",
        next: { href: "location.html", label: "Pokračovat k lokalitě" },
      },
      ru: {
        title: "Turbová | Сады",
        hero: {
          eyebrow: "04 | Сады",
          title: "Частный парк, поглощающий город.",
          lead:
            "Садовая территория образует самодостаточный ландшафт со зрелыми деревьями, каскадными посадками, открытым фитнесом, винным домом и площадкой для самых юных резидентов.",
          media: [
            "assets/images/terrace.jpg",
            "assets/images/terrace-2.jpg",
            "assets/images/terrace-3.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "мир частного парка" },
          { value: "100+", label: "лет присутствия деревьев" },
          { value: "4", label: "садовых впечатления" },
        ],
        story: {
          title: "Ландшафт как услуга и как щит",
          paragraphs: [
            "Сад здесь не декоративный остаток. Он работает акустически, визуально и социально. Он защищает резиденцию от окружающего шума, создавая места для встреч, тренировок или чтобы просто на время исчезнуть.",
            "В итоге — более мягкая форма роскоши: не максимум программы, а свобода выбора между движением, уединением, семейным временем и вечерними ритуалами на воздухе.",
          ],
        },
        pillars: [
          {
            title: "Каскадный частный сад",
            text: "Слоистый рельеф и зрелые посадки образуют естественную оболочку вокруг резиденции.",
          },
          {
            title: "Открытый фитнес",
            text: "Оборудование размещено в зелени для тренировок на воздухе в приватности.",
          },
          {
            title: "Винный дом",
            text: "Социальный узел для встреч резидентов и небольших частных событий.",
          },
          {
            title: "Детская площадка",
            text: "Спокойная и безопасная открытая среда вдали от городской суеты.",
          },
        ],
        gallery: [
          {
            src: "assets/images/waterfall.jpg",
            alt: "Двор с водопадом",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Садовая терраса",
          },
        ],
        quote:
          "Самой редкой услугой может быть просто возможность выйти наружу и слышать листву вместо транспорта.",
        next: { href: "location.html", label: "Продолжить к локации" },
      },
      fr: {
        title: "Turbová | Jardins",
        hero: {
          eyebrow: "04 | Jardins",
          title: "Un parc privé qui absorbe la ville.",
          lead:
            "Le parc forme un paysage autonome avec des arbres matures, des plantations en cascade, du fitness en plein air, une maison du vin et une aire de jeu pour les plus jeunes résidents.",
          media: [
            "assets/images/terrace.jpg",
            "assets/images/terrace-2.jpg",
            "assets/images/terrace-3.jpg",
          ],
        },
        metrics: [
          { value: "1", label: "monde de parc privé" },
          { value: "100+", label: "ans de présence des arbres" },
          { value: "4", label: "expériences de jardin" },
        ],
        story: {
          title: "Le paysage comme agrément et comme bouclier",
          paragraphs: [
            "Le jardin n'est pas un résidu ornemental. Il agit sur le plan acoustique, visuel et social. Il protège la résidence du bruit environnant tout en créant des lieux pour se réunir, s'entraîner ou simplement disparaître un moment.",
            "Il en résulte une forme plus douce de luxe : non pas une programmation maximale, mais la liberté de choisir entre le mouvement, la solitude, le temps en famille et les rituels du soir en plein air.",
          ],
        },
        pillars: [
          {
            title: "Jardin privé en cascade",
            text: "Une topographie en strates et des plantations matures forment une enveloppe naturelle autour de la résidence.",
          },
          {
            title: "Fitness en plein air",
            text: "Des équipements placés dans la verdure pour s'entraîner au grand air en toute intimité.",
          },
          {
            title: "Maison du vin",
            text: "Un point social pour les rassemblements de résidents et les petits événements privés.",
          },
          {
            title: "Espace de jeu pour enfants",
            text: "Un cadre extérieur calme et sûr, à l'écart de l'agitation de la ville.",
          },
        ],
        gallery: [
          {
            src: "assets/images/waterfall.jpg",
            alt: "Cour à cascade",
          },
          {
            src: "assets/images/terrace.jpg",
            alt: "Terrasse de jardin",
          },
        ],
        quote:
          "L'agrément le plus rare est peut-être simplement de pouvoir sortir et entendre les feuilles plutôt que la circulation.",
        next: { href: "location.html", label: "Continuer vers l'emplacement" },
      },
    },
    location: {
      en: {
        title: "Turbová | Location",
        hero: {
          eyebrow: "05 | Location",
          title: "Connected to Prague. Withdrawn from its noise.",
          lead:
            "Turbová sits within Prague 5, close to the Anděl district and key city routes, while remaining buffered by its own hillside garden world.",
          media: [
            "assets/images/birds-eye-view.jpg",
            "assets/images/garage-entrance.jpg",
          ],
        },
        metrics: [
          { value: "Prague 5", label: "strategic district" },
          { value: "3", label: "international schools nearby" },
          { value: "2026", label: "project completion" },
        ],
        story: {
          title: "Immediate infrastructure, delayed stress",
          paragraphs: [
            "Residents stay close to international education, daily retail, medical services, and major arteries without accepting the noise typically attached to such convenience.",
            "This balance between access and withdrawal is what turns the address into a lifestyle advantage rather than just a map pin.",
          ],
        },
        pillars: [
          {
            title: "Prestigious schools",
            text: "Lycée Français de Prague, Deutsche Schule Prag, and Park Lane International School are all within easy reach.",
          },
          {
            title: "Fast access",
            text: "Major road connections and the Anděl district keep business and culture close.",
          },
          {
            title: "Daily essentials",
            text: "Healthcare, shopping, supermarkets, and dining sit within the immediate urban radius.",
          },
          {
            title: "Protected arrival",
            text: "Private parking, EV charging, and smooth building access turn convenience into a composed arrival ritual.",
          },
        ],
        gallery: [
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Aerial overview of the site",
          },
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "View between the buildings",
          },
          {
            src: "assets/images/garage-entrance.jpg",
            alt: "Parking entrance tunnel",
          },
        ],
        quote:
          "The address works because it offers access on the map and retreat in the body.",
        next: { href: "index.html", label: "Return home" },
      },
      cs: {
        title: "Turbová | Lokalita",
        hero: {
          eyebrow: "05 | Lokalita",
          title: "Napojena na Prahu. Odtažena od jejího hluku.",
          lead:
            "Turbová leží na Praze 5, v blízkosti Anděla a klíčových městských tras, a přitom zůstává chráněna vlastním zahradním svahem.",
          media: [
            "assets/images/birds-eye-view.jpg",
            "assets/images/garage-entrance.jpg",
          ],
        },
        metrics: [
          { value: "Praha 5", label: "strategická čtvrť" },
          { value: "3", label: "mezinárodní školy poblíž" },
          { value: "2026", label: "dokončení projektu" },
        ],
        story: {
          title: "Okamžitá infrastruktura, opožděný stres",
          paragraphs: [
            "Rezidenti zůstávají blízko mezinárodního vzdělávání, každodenního retailu, zdravotních služeb i hlavních tahů, aniž by museli přijmout hluk, který s takovým komfortem obvykle přichází.",
            "Právě tato rovnováha mezi dostupností a ústupem mění adresu v životní výhodu, nikoli jen bod na mapě.",
          ],
        },
        pillars: [
          {
            title: "Prestižní školy",
            text: "Lycée Français de Prague, Deutsche Schule Prag a Park Lane International School jsou snadno dosažitelné.",
          },
          {
            title: "Rychlá dostupnost",
            text: "Hlavní komunikace i čtvrť Anděl drží byznys i kulturu nablízku.",
          },
          {
            title: "Každodenní služby",
            text: "Zdravotnictví, nákupy, supermarkety i gastronomie leží v bezprostředním městském okruhu.",
          },
          {
            title: "Chráněný příjezd",
            text: "Soukromé parkování, nabíjení EV a hladký vstup do budovy mění pohodlí v kultivovaný rituál příjezdu.",
          },
        ],
        gallery: [
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Letecký přehled lokality",
          },
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Pohled mezi budovami",
          },
          {
            src: "assets/images/garage-entrance.jpg",
            alt: "Tunel parkovacího příjezdu",
          },
        ],
        quote:
          "Tato adresa funguje, protože nabízí dostupnost na mapě a ústup v těle.",
        next: { href: "index.html", label: "Zpět domů" },
      },
      ru: {
        title: "Turbová | Локация",
        hero: {
          eyebrow: "05 | Локация",
          title: "Связана с Прагой. Отдалена от её шума.",
          lead:
            "Turbová расположена в Праге 5, рядом с районом Андел и ключевыми городскими магистралями, оставаясь укрытой собственным садовым миром на склоне.",
          media: [
            "assets/images/birds-eye-view.jpg",
            "assets/images/garage-entrance.jpg",
          ],
        },
        metrics: [
          { value: "Прага 5", label: "стратегический район" },
          { value: "3", label: "международные школы рядом" },
          { value: "2026", label: "завершение проекта" },
        ],
        story: {
          title: "Мгновенная инфраструктура, отложенный стресс",
          paragraphs: [
            "Резиденты остаются рядом с международным образованием, ежедневным ретейлом, медицинскими услугами и главными магистралями, не принимая шум, который обычно сопутствует такому удобству.",
            "Именно этот баланс между доступностью и уединением превращает адрес в преимущество образа жизни, а не просто точку на карте.",
          ],
        },
        pillars: [
          {
            title: "Престижные школы",
            text: "Lycée Français de Prague, Deutsche Schule Prag и Park Lane International School легко достижимы.",
          },
          {
            title: "Быстрая доступность",
            text: "Главные дорожные связи и район Андел держат бизнес и культуру рядом.",
          },
          {
            title: "Повседневное необходимое",
            text: "Медицина, шопинг, супермаркеты и гастрономия — в непосредственном городском радиусе.",
          },
          {
            title: "Защищённое прибытие",
            text: "Частная парковка, зарядка EV и плавный доступ в здание превращают удобство в выверенный ритуал прибытия.",
          },
        ],
        gallery: [
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Обзор участка с высоты",
          },
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Вид между зданиями",
          },
          {
            src: "assets/images/garage-entrance.jpg",
            alt: "Тоннель парковочного въезда",
          },
        ],
        quote:
          "Этот адрес работает, потому что предлагает доступность на карте и уединение в теле.",
        next: { href: "index.html", label: "Вернуться на главную" },
      },
      fr: {
        title: "Turbová | Emplacement",
        hero: {
          eyebrow: "05 | Emplacement",
          title: "Reliée à Prague. Retirée de son bruit.",
          lead:
            "Turbová se situe à Prague 5, proche du quartier d'Anděl et des grands axes, tout en restant protégée par son propre monde de jardin sur le coteau.",
          media: [
            "assets/images/birds-eye-view.jpg",
            "assets/images/garage-entrance.jpg",
          ],
        },
        metrics: [
          { value: "Prague 5", label: "quartier stratégique" },
          { value: "3", label: "écoles internationales à proximité" },
          { value: "2026", label: "achèvement du projet" },
        ],
        story: {
          title: "Infrastructure immédiate, stress différé",
          paragraphs: [
            "Les résidents restent proches de l'enseignement international, du commerce quotidien, des services médicaux et des grands axes, sans accepter le bruit habituellement attaché à une telle commodité.",
            "C'est cet équilibre entre accès et retrait qui transforme l'adresse en avantage de vie plutôt qu'en simple point sur la carte.",
          ],
        },
        pillars: [
          {
            title: "Écoles prestigieuses",
            text: "Le Lycée Français de Prague, la Deutsche Schule Prag et la Park Lane International School sont aisément accessibles.",
          },
          {
            title: "Accès rapide",
            text: "Les grandes liaisons routières et le quartier d'Anděl gardent les affaires et la culture à proximité.",
          },
          {
            title: "Essentiels du quotidien",
            text: "Santé, commerces, supermarchés et restauration se trouvent dans le rayon urbain immédiat.",
          },
          {
            title: "Une arrivée protégée",
            text: "Parking privé, recharge VE et accès fluide au bâtiment font de la commodité un rituel d'arrivée maîtrisé.",
          },
        ],
        gallery: [
          {
            src: "assets/images/birds-eye-view.jpg",
            alt: "Vue aérienne du site",
          },
          {
            src: "assets/images/two-buildings-side-view.jpeg",
            alt: "Vue entre les bâtiments",
          },
          {
            src: "assets/images/garage-entrance.jpg",
            alt: "Tunnel d'entrée du parking",
          },
        ],
        quote:
          "L'adresse fonctionne parce qu'elle offre l'accès sur la carte et la retraite dans le corps.",
        next: { href: "index.html", label: "Retour à l'accueil" },
      },
    },
    contact: {
      en: {
        title: "Turbová | Contact",
        hero: {
          eyebrow: "06 | Contact",
          title: "Begin a private conversation.",
          lead:
            "Share a few details and our team will reach out. Everything you send stays confidential.",
        },
        form: {
          detailsLegend: "Your details",
          interestLegend: "How can we help?",
          firstName: { label: "First name", placeholder: "Jane" },
          lastName: { label: "Last name", placeholder: "Doe" },
          email: { label: "Email", placeholder: "you@example.com" },
          country: { label: "Country" },
          phone: { label: "Phone number", placeholder: "601 234 567" },
          intent: {
            label: "Are you looking to buy or rent?",
            options: [
              { value: "buy", label: "Buy" },
              { value: "rent", label: "Rent" },
              { value: "undecided", label: "Still deciding" },
            ],
          },
          contactMethod: {
            label: "Preferred contact method",
            options: [
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "either", label: "Either" },
            ],
          },
          message: {
            label: "Message (optional)",
            placeholder: "Tell us anything that would help us prepare.",
          },
          consent:
            "By submitting this form you agree to be contacted about Turbová residences. We never share your details.",
          submit: "Send enquiry",
          sending: "Sending…",
          errors: {
            required: "This field is required.",
            email: "Please enter a valid email address.",
            phone: "Please enter a valid phone number.",
          },
          submitError: "Something went wrong while sending. Please check your connection and try again.",
          success: {
            title: "Thank you — your enquiry is on its way.",
            text: "Our team will be in contact with you soon.",
          },
        },
      },
      cs: {
        title: "Turbová | Kontakt",
        hero: {
          eyebrow: "06 | Kontakt",
          title: "Začněte soukromý rozhovor.",
          lead:
            "Sdělte nám několik údajů a náš tým se vám ozve. Vše, co odešlete, zůstává důvěrné.",
        },
        form: {
          detailsLegend: "Vaše údaje",
          interestLegend: "Jak vám můžeme pomoci?",
          firstName: { label: "Jméno", placeholder: "Jana" },
          lastName: { label: "Příjmení", placeholder: "Nováková" },
          email: { label: "E-mail", placeholder: "vy@example.com" },
          country: { label: "Země" },
          phone: { label: "Telefonní číslo", placeholder: "601 234 567" },
          intent: {
            label: "Chcete koupit, nebo pronajmout?",
            options: [
              { value: "buy", label: "Koupit" },
              { value: "rent", label: "Pronajmout" },
              { value: "undecided", label: "Stále se rozhoduji" },
            ],
          },
          contactMethod: {
            label: "Preferovaný způsob kontaktu",
            options: [
              { value: "email", label: "E-mail" },
              { value: "phone", label: "Telefon" },
              { value: "either", label: "Libovolný" },
            ],
          },
          message: {
            label: "Zpráva (nepovinné)",
            placeholder: "Napište nám cokoli, co nám pomůže s přípravou.",
          },
          consent:
            "Odesláním formuláře souhlasíte s tím, že vás budeme kontaktovat ohledně rezidencí Turbová. Vaše údaje nikdy nesdílíme.",
          submit: "Odeslat poptávku",
          sending: "Odesílání…",
          errors: {
            required: "Toto pole je povinné.",
            email: "Zadejte prosím platnou e-mailovou adresu.",
            phone: "Zadejte prosím platné telefonní číslo.",
          },
          submitError: "Při odesílání došlo k chybě. Zkontrolujte prosím připojení a zkuste to znovu.",
          success: {
            title: "Děkujeme — vaše poptávka je na cestě.",
            text: "Náš tým se vám brzy ozve.",
          },
        },
      },
      ru: {
        title: "Turbová | Контакты",
        hero: {
          eyebrow: "06 | Контакты",
          title: "Начните частный разговор.",
          lead:
            "Поделитесь несколькими данными, и наша команда свяжется с вами. Всё, что вы отправите, останется конфиденциальным.",
        },
        form: {
          detailsLegend: "Ваши данные",
          interestLegend: "Чем мы можем помочь?",
          firstName: { label: "Имя", placeholder: "Анна" },
          lastName: { label: "Фамилия", placeholder: "Иванова" },
          email: { label: "Эл. почта", placeholder: "you@example.com" },
          country: { label: "Страна" },
          phone: { label: "Номер телефона", placeholder: "901 234 56 78" },
          intent: {
            label: "Вы хотите купить или арендовать?",
            options: [
              { value: "buy", label: "Купить" },
              { value: "rent", label: "Арендовать" },
              { value: "undecided", label: "Ещё думаю" },
            ],
          },
          contactMethod: {
            label: "Предпочтительный способ связи",
            options: [
              { value: "email", label: "Эл. почта" },
              { value: "phone", label: "Телефон" },
              { value: "either", label: "Любой" },
            ],
          },
          message: {
            label: "Сообщение (необязательно)",
            placeholder: "Напишите всё, что поможет нам подготовиться.",
          },
          consent:
            "Отправляя форму, вы соглашаетесь на то, что мы свяжемся с вами по поводу резиденций Turbová. Мы никогда не передаём ваши данные.",
          submit: "Отправить запрос",
          sending: "Отправка…",
          errors: {
            required: "Это поле обязательно для заполнения.",
            email: "Введите действительный адрес эл. почты.",
            phone: "Введите действительный номер телефона.",
          },
          submitError: "При отправке произошла ошибка. Проверьте подключение и попробуйте снова.",
          success: {
            title: "Спасибо — ваш запрос отправлен.",
            text: "Наша команда скоро свяжется с вами.",
          },
        },
      },
      fr: {
        title: "Turbová | Contact",
        hero: {
          eyebrow: "06 | Contact",
          title: "Entamez une conversation privée.",
          lead:
            "Partagez quelques informations et notre équipe vous contactera. Tout ce que vous envoyez reste confidentiel.",
        },
        form: {
          detailsLegend: "Vos coordonnées",
          interestLegend: "Comment pouvons-nous vous aider ?",
          firstName: { label: "Prénom", placeholder: "Marie" },
          lastName: { label: "Nom", placeholder: "Dupont" },
          email: { label: "E-mail", placeholder: "vous@example.com" },
          country: { label: "Pays" },
          phone: { label: "Numéro de téléphone", placeholder: "6 12 34 56 78" },
          intent: {
            label: "Souhaitez-vous acheter ou louer ?",
            options: [
              { value: "buy", label: "Acheter" },
              { value: "rent", label: "Louer" },
              { value: "undecided", label: "Encore indécis" },
            ],
          },
          contactMethod: {
            label: "Moyen de contact préféré",
            options: [
              { value: "email", label: "E-mail" },
              { value: "phone", label: "Téléphone" },
              { value: "either", label: "Peu importe" },
            ],
          },
          message: {
            label: "Message (facultatif)",
            placeholder: "Dites-nous tout ce qui pourrait nous aider à préparer.",
          },
          consent:
            "En soumettant ce formulaire, vous acceptez d'être contacté au sujet des résidences Turbová. Nous ne partageons jamais vos coordonnées.",
          submit: "Envoyer la demande",
          sending: "Envoi…",
          errors: {
            required: "Ce champ est obligatoire.",
            email: "Veuillez saisir une adresse e-mail valide.",
            phone: "Veuillez saisir un numéro de téléphone valide.",
          },
          submitError: "Une erreur s'est produite lors de l'envoi. Vérifiez votre connexion et réessayez.",
          success: {
            title: "Merci — votre demande est en route.",
            text: "Notre équipe vous contactera prochainement.",
          },
        },
      },
    },
  },
};
