export interface Dish {
  id: string;
  name: string;
  description: string;
  isPremium?: boolean;
  premiumPrice?: number;
  pricePerGuest?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  limit: number; // how many they can choose
  options: Dish[];
}

export interface CityConfig {
  slug: string;
  name: string;
  deliveryFee: number;
  minGuests: number;
  region: string;
  customHeading: string;
  customIntro: string;
  localTrustHook?: string;
  neighborhoods?: string[];
  synagogues?: string[];
  isFocus?: boolean;
  neighborSlugs?: string[];
}

export const CATERING_MENU: MenuCategory[] = [
  {
    id: "salads",
    name: "סלטים טריים (בחירה של 7 סלטים)",
    limit: 7,
    options: [
      { id: "sl1", name: "חומוס הבית", description: "חומוס יפואי אורגינל עשיר עם שמן זית ופטרוזיליה" },
      { id: "sl2", name: "טחינה", description: "טחינה עבודת יד עם לימון, שום ופטרוזיליה טרייה" },
      { id: "sl3", name: "מסייר", description: "ירקות מוחמצים בסגנון ביתי אותנטי" },
      { id: "sl4", name: "טבולה", description: "סלט בורגול עשיר עם ירק קצוץ, לימון ושמן זית" },
      { id: "sl5", name: "הום פרייז", description: "קוביות בטטה אפויות ברוטב צ'ילי מתוק ושומשום קלוי" },
      { id: "sl6", name: "סלט ישראלי", description: "מלפפון, עגבניות ובצל קצוצים דק בתיבול קלאסי" },
      { id: "sl7", name: "טריקולור פלפלים", description: "רצועות פלפלים בשלושה צבעים עם בצל סגול ותחמיץ" },
      { id: "sl8", name: "גזר חי בלימון", description: "סלט גזר פריך ורענן עם מיץ לימון טבעי ושום" },
      { id: "sl9", name: "גזר מרוקאי", description: "גזר מבושל בתיבול כמון, פפריקה חריפה וכוסברה" },
      { id: "sl10", name: "סלק אדום", description: "סלק מבושל בתיבול ביתי של חומץ, כמון ושום" },
      { id: "sl11", name: "מטבוחה מרוקאית", description: "סלט עגבניות ופלפלים חריפים מבושל שעות בבישול ארוך" },
      { id: "sl12", name: "חציל מטוגן", description: "פרוסות חציל קלויות ושחומות בטעם של פעם" },
      { id: "sl13", name: "חציל מיונז", description: "סלט חציל קלוי במיונז עשיר ושום כתוש" },
      { id: "sl14", name: "חציל בטחינה", description: "חציל קלוי על האש בשילוב טחינה ביתית איכותית" },
      { id: "sl15", name: "זעלוק חציל", description: "סלט חציל מרוקאי מבושל עם עגבניות, שום ותבלינים" },
      { id: "sl16", name: "סלט השוק", description: "לקט ירקות העונה טריים ופריכים בתיבול שמן זית ולימון" },
      { id: "sl17", name: "קולסלאו", description: "סלט כרוב וגזר קצוצים ברוטב מיונז וחרדל עדין" },
      { id: "sl18", name: "כרוב חמוציות", description: "סלט כרוב לבן פריך עם חמוציות מתוקות ברוטב חמוץ-מתוק" },
      { id: "sl19", name: "כרוב אדום במיונז", description: "כרוב אדום קצוץ דק ברוטב מיונז עשיר ולימון" },
      { id: "sl20", name: "תפו\"א במיונז", description: "סלט תפוחי אדמה מבושלים עם אפונה, גזר ומלפפון חמוץ במיונז" },
      { id: "sl21", name: "פלפל חריף מטוגן", description: "פלפלים חריפים מטוגנים בשמן עמוק ומומלצים לפתיחת התיאבון" },
      { id: "sl22", name: "תירס צ'יליאני", description: "סלט גרגירי תירס מתוקים עם פלפלים צבעוניים ורוטב צ'ילי" },
      { id: "sl23", name: "נלסון", description: "סלט כרוב צבעוני עם אגוזים וחמוציות בתיבול מיוחד" }
    ]
  },
  {
    id: "sides",
    name: "תוספות חמות (בחירה של 3 תתוספות)",
    limit: 3,
    options: [
      { id: "s1", name: "אורז לבן / מג'דרה / אורז אדום", description: "מגוון סגנונות של אורז בסמטי חגיגי ואוורירי" },
      { id: "s2", name: "אורז לנטריה", description: "אורז בסמטי מבושל עם אטריות שחומות בתיבול ביתי" },
      { id: "s3", name: "תפודים", description: "תפוחי אדמה זעירים אפויים בגריל עם שמן זית ורוזמרין" },
      { id: "s4", name: "תפו\"א אפוי", description: "פלחי תפוחי אדמה זהובים ופריכים בתיבול פפריקה ועשבי תיבול" },
      { id: "s5", name: "קוסקוס מרוקאי אוורירי", description: "קוסקוס סולת מסורתי המוכן בעבודת יד" },
      { id: "s6", name: "מרק ירקות עשיר לקוסקוס", description: "מרק עם דלעת, קישואים, גזר וגרגירי חומוס מבושלים" },
      { id: "s7", name: "זיתים מבושלים ברוטב", description: "תבשיל זיתים ירוקים ברוטב עגבניות פיקנטי וכמון" },
      { id: "s8", name: "ארטישוק ופטריות", description: "תבשיל לבבות ארטישוק ופטריות יער בתיבול עדין" },
      { id: "s9", name: "אפונה וסלרי", description: "אפונה ירוקה עדינה מבושלת עם גבעולי סלרי ריחניים" },
      { id: "s10", name: "שעועית ברוטב עגבניות", description: "שעועית ירוקה או צהובה מבושלת ברוטב עגבניות ביתי" },
      { id: "s11", name: "אפונה וגזר", description: "תבשיל אפונה וקוביות גזר בתיבול עדין וטעים" },
      { id: "s12", name: "ירקות מוקפצים תאילנדי", description: "לקט ירקות העונה מוקפצים בווק עם שומשום ורוטב סויה" },
      { id: "s13", name: "שעועית מוקפצת בסויה", description: "שעועית ירוקה מוקפצת קלות עם שום, סויה ושומשום קלוי" }
    ]
  },
  {
    id: "mains",
    name: "מנות עיקריות (בחירה של 3 מנות)",
    limit: 3,
    options: [
      { id: "m1", name: "צלי בקר ברוטב פטריות", description: "פרוסות בקר רכות בבישול ארוך עם רוטב פטריות עשיר" },
      { id: "m2", name: "רוסטביף", description: "נתח בקר מובחר צלוי בתיבול חרדל, פלפל שחור גרוס ועשבי תיבול" },
      { id: "m3", name: "סטייק פרגית על האש", description: "נתחי פרגית עסיסיים במרינדת תבלינים ים-תיכונית" },
      { id: "m4", name: "קבב הבית", description: "קציצות בקר משובחות עם בצל ופטרוזיליה, צלויות על הגריל" },
      { id: "m5", name: "חזה עוף בגריל", description: "נתחי חזה עוף טריים עשויים על הגריל בתיבול עדין" },
      { id: "m6", name: "עוף בגריל - כרעיים", description: "כרעי עוף עסיסיים אפויים בתנור עם שום, דבש ורוזמרין" },
      { id: "m7", name: "שניצל ביתי", description: "חזה עוף טרי בציפוי פירורי לחם מוזהבים ושומשום פריך" },
      { id: "m8", name: "מוקפץ סיני עם ירקות", description: "נתחי עוף מוקפצים עם ירקות העונה ברוטב אסייתי עשיר" },
      { id: "m9", name: "קציצות בשר ברוטב", description: "קציצות בקר נימוחות בבישול ביתי עם רוטב עגבניות עשיר" },
      { id: "m10", name: "פלפל ממולא טבעוני", description: "פלפל אדום ממולא באורז, ירקות ועשבי תיבול ברוטב עגבניות" },
      { id: "m11", name: "אסאדו ביין", description: "בשר אסאדו שמן ועסיסי בצלייה ארוכה עם יין אדום ודבש", isPremium: true, premiumPrice: 7, pricePerGuest: true },
      { id: "m12", name: "צלי בקר מס' 5", description: "נתח בקר מובחר בבישול ביתי איטי עם ירקות שורש", isPremium: true, premiumPrice: 7, pricePerGuest: true }
    ]
  },
  {
    id: "intermediates",
    name: "מנות ביניים (+₪15 | ניתן לפצל)",
    limit: 99,
    options: [
      { id: "i1", name: "פילה מושט מרוקאי", description: "פילה דג מושט מבושל ברוטב פיקנטי עשיר עם גזר, שום וכוסברה", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i2", name: "נסיכת הנילוס בחריימה", description: "נתחי דג נסיכת הנילוס ברוטב חריימה פיקנטי מסורתי", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i3", name: "טונה מבושל בנוסח מרוקאי", description: "נתחי דג טונה עסיסיים מבושלים ברוטב עגבניות חריף עם פלפלים", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i4", name: "דג סול מטוגן", description: "פילה דג סול בציפוי פריך וזהוב לצד לימון סחוט", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i5", name: "מפרום - תפוד ממולא", description: "תפוח אדמה ממולא בבשר בקר טחון ותבלינים בבישול ארוך", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i6", name: "מוסקה - חציל ממולא", description: "שכבות חציל קלוי ממולא בשר בקר ברוטב עגבניות סמיך", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i7", name: "רול טלה", description: "מאפה בצק עלים פריך במילוי בשר טלה מובחר ותבלינים", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i8", name: "רול צ'יקן", description: "טורטייה מגולגלת וממולאת בבשר עוף קצוץ וירקות", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i9", name: "רול טבעוני", description: "טורטייה מגולגלת עם מילוי ירקות שורש מוקפצים ופטריות", isPremium: true, premiumPrice: 15, pricePerGuest: true },
      { id: "i10", name: "בורקס ברוטב פטריות", description: "בורקס תפוחי אדמה פריך מוגש עם רוטב פטריות חם ועשיר", isPremium: true, premiumPrice: 15, pricePerGuest: true }
    ]
  },
  {
    id: "premiumIntermediates",
    name: "מנות ביניים פרימיום (+₪25 | ניתן לפצל)",
    limit: 99,
    options: [
      { id: "pi1", name: "פילה סלמון נורבגי", description: "פילה סלמון אפוי בתנור בתיבול עשבי תיבול, שמן זית ולימון", isPremium: true, premiumPrice: 25, pricePerGuest: true },
      { id: "pi2", name: "פילה סלמון מרוקאי", description: "פילה סלמון עסיסי מבושל ברוטב מרוקאי עשיר עם כוסברה וגרגירי חומוס", isPremium: true, premiumPrice: 25, pricePerGuest: true },
      { id: "pi3", name: "פאסטיה עוף ופירות יבשים", description: "מאפה מרוקאי פריך במילוי עוף מפורק, שקדים, צימוקים וקינמון", isPremium: true, premiumPrice: 25, pricePerGuest: true }
    ]
  },
  {
    id: "desserts",
    name: "תוספות, לחמים וקינוחים (אופציונלי)",
    limit: 99,
    options: [
      { id: "d1", name: "לחמניות רגילות", description: "לחמניות טריות ורכות לכל סועד", isPremium: true, premiumPrice: 2, pricePerGuest: true },
      { id: "d2", name: "לחמניות מתוקות", description: "לחמניות קלועות מתוקות לשבת חתן", isPremium: true, premiumPrice: 2.5, pricePerGuest: true },
      { id: "d3", name: "לחמניות פרנה", description: "לחם פרנה מרוקאי מסורתי ואפוי באבן", isPremium: true, premiumPrice: 3.5, pricePerGuest: true },
      { id: "d4", name: "כלים חד-פעמיים רויאל", description: "סט כלים חד פעמיים מהודרים ואיכותיים ביותר להגשה", isPremium: true, premiumPrice: 10, pricePerGuest: true },
      { id: "d5", name: "שתייה קלה", description: "מגוון בקבוקי שתייה קלה קרים ואיכותיים לאירוע", isPremium: true, premiumPrice: 10, pricePerGuest: true },
      { id: "d6", name: "מגש קינוחים (60 יחידות)", description: "מגש עשיר ומגוון של קינוחי פרווה איכותיים ואישיים", isPremium: true, premiumPrice: 180, pricePerGuest: false },
      { id: "d7", name: "מוס שוקולד / טרימיסו / קינוח הבית", description: "מוס אישי מפנק לקינוח האירוח", isPremium: true, premiumPrice: 12, pricePerGuest: true }
    ]
  }
];

export const CATERING_REGIONS: Record<string, { title: string; desc: string }> = {
  center: {
    title: "במרכז",
    desc: "שירותי קייטרינג ואוכל מוכן ביתי לאירועים קטנים ומשפחתיים בכל ערי המרכז וגוש דן. משלוחים חמים של מגשי אוכל בשרי עשיר ישירות אליכם."
  },
  sharon: {
    title: "בשרון",
    desc: "אירועים פרטיים, שבתות חתן ואזכרות באזור השרון. אוכל מוכן בשרי, עשיר וכשר למהדרין עם משלוח מהיר וחם."
  },
  shephelah: {
    title: "בשפלה",
    desc: "אספקת מגשי אוכל מוכן בשרי ועשיר לשבתות חתן, אזכרות ובריתות באזור השפלה וסביבותיה."
  },
  south: {
    title: "בדרום",
    desc: "קייטרינג בשרי כשר למהדרין לתושבי הדרום (עד גבול באר שבע). פתרון מושלם וזול להפקת אירוע קטן בשירות עצמי."
  },
  shomron: {
    title: "בשומרון",
    desc: "אוכל מוכן בשרי כשר למהדרין בהשגחת הבד\"ץ ליישובי השומרון וסביבותיהם. משלוחי אוכל חם ומפנק ישירות לאירוע שלכם."
  }
};

export const CITY_DATA: CityConfig[] = [
  // ─── FOCUS CITIES (TIER 1) ───
  {
    slug: "bnei-brak",
    name: "בני ברק",
    deliveryFee: 100,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג כשר למהדרין בבני ברק | בד\"ץ שלמה מחפוד לשבת חתן ואירועים קטנים",
    customIntro: "מחפשים קייטרינג בשרי לאירוע בבני ברק שלא מתפשר על רמת הכשרות וגם לא קורע את הכיס? 'קייטרינג טעם מהודר' מציע פתרון מושלם לאירועים משפחתיים, שבתות חתן, אזכרות ובריתות. תחת השגחת יורה דעה - בהנהגת הרב שלמה מחפוד שליט\"א, אנו מכינים מגשי אוכל מוכן בשריים עשירים וטעימים בסגנון ביתי חם. הפתרון שלנו מבוסס על הגשה עצמית חכמה בסגנון \"עשה זאת בעצמך\" שחוסכת לכם אלפי שקלים של צוות מלצרים והפקה, ומאפשרת לכם לארח ברווחה, בשפע ובטעם בלתי נשכח.",
    localTrustHook: "הכשרות המועדפת על תושבי בני ברק המקפידים על שחיטת בד\"ץ יורה דעה של הרב מחפוד.",
    neighborhoods: ["גן ורשא", "פרדס כץ", "עזרא", "מאה שערים", "איינשטיין", "רמת אלחנן", "קרית הרצוג", "רמת אהרן", "מרכז העיר"],
    synagogues: ["בית כנסת איצקוביץ'", "בית כנסת לדרמן", "בית כנסת הגדול", "ישיבת פוניבז'", "בית כנסת היכל שלמה"],
    isFocus: true,
    neighborSlugs: ["ramat-gan", "givatayim", "tel-aviv", "givat-shmuel", "bat-yam"]
  },
  {
    slug: "jerusalem",
    name: "ירושלים",
    deliveryFee: 180,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בירושלים לאירועים קטנים ושבתות חתן | כשר בד\"ץ הרב מחפוד",
    customIntro: "אירוע בירושלים דורש שפע קולינרי שמכבד את האורחים לצד הקפדה יתרה על כשרות למהדרין. 'קייטרינג טעם מהודר' מספק לירושלים והסביבה תפריט בשרי עשיר, חם ומפנק המבוסס על מגשי אוכל בשירות עצמי. התפריט קל להכנה והגשה, כשר בהשגחת בד\"ץ יורה דעה בנשיאות הרב שלמה מחפוד. אנו עוזרים לכם לחסוך בהוצאות האירוע בירושלים מבלי לפגוע באיכות הבשרים ובנדיבות המנות.",
    localTrustHook: "מתאים במיוחד לעליות לתורה בכותל המערבי, שבתות חתן בירושלים ואזכרות משפחתיות.",
    neighborhoods: ["בית וגן", "הר נוף", "גבעת שאול", "רחביה", "תלפיות", "גילה", "רמות", "קטמון", "פסגת זאב", "מקור ברוך"],
    synagogues: ["בית כנסת הגדול", "בית כנסת ישורון", "בית כנסת חורבת רבי יהודה החסיד", "בית כנסת אוהל יצחק", "הכותל המערבי"],
    isFocus: true,
    neighborSlugs: ["maale-adumim"]
  },
  {
    slug: "beit-shemesh",
    name: "בית שמש",
    deliveryFee: 160,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בבית שמש כשר למהדרין לשבת חתן וברית מילה",
    customIntro: "שירותי קייטרינג בשרי חם בבית שמש. תפריט 58 ש\"ח העשיר שלנו, בכשרות המהודרת של בד\"ץ הרב שלמה מחפוד, מותאם בול לאירוח עצמי שופע ומפנק.",
    isFocus: true
  },
  {
    slug: "elad",
    name: "אלעד",
    deliveryFee: 120,
    minGuests: 30,
    region: "shomron",
    customHeading: "קייטרינג באלעד כשר למהדרין - אוכל מוכן בשרי עשיר ומפנק לאירוח מושלם",
    customIntro: "תושבי אלעד יודעים להעריך אירוח מכובד ושופע במחיר הוגן. אנו ב'טעם מהודר' מתמחים באספקת מגשי אוכל בשרי חם לאירוח עצמי באלעד. בין אם מדובר בשבת חתן, עלייה לתורה, סעודת מצווה או אזכרה, האוכל שלנו מגיע חם, ארוז היטב וכשר למהדרין בהשגחת הבד\"ץ של הרב שלמה מחפוד. עם מינימום הזמנה של 30 איש בלבד, תוכלו להרכיב תפריט עשיר של 3 בשרים, 3 תוספות ו-7 סלטים ב-58 ש\"ח בלבד למנה, ללא עלויות נסתרות.",
    localTrustHook: "שירות מהיר ומשלוחים מותאמים במיוחד ללוח הזמנים של השבתות והחגים באלעד.",
    neighborhoods: ["רובע א'", "רובע ב'", "רובע ג'", "שכונת דרך החיים", "שכונת אפיקי מים"],
    synagogues: ["בית כנסת אוהל משה", "בית כנסת כנסת הגדולה", "בית כנסת זכור לאברהם", "בית כנסת חניכי הישיבות"],
    isFocus: true
  },
  {
    slug: "modiin-illit",
    name: "מודיעין עילית",
    deliveryFee: 130,
    minGuests: 30,
    region: "shomron",
    customHeading: "קייטרינג במודיעין עילית כשר למהדרין | בד\"ץ הרב מחפוד לאירועים ושבתות חתן",
    customIntro: "תושבי מודיעין עילית והסביבה נהנים מאוכל מוכן בשרי עשיר, חם ושופע ב-58 ₪ למנה. פתרון מנצח לשבתות חתן, בריתות ואזכרות בכשרות המהודרת ביותר של בד\"ץ הרב מחפוד.",
    localTrustHook: "משלוחי אוכל חם ומקורר מותאמים היטב לקצב השבתות והשמחות במודיעין עילית.",
    isFocus: true
  },
  {
    slug: "betar-illit",
    name: "ביתר עילית",
    deliveryFee: 180,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בביתר עילית כשר למהדרין - אוכל מוכן בשרי עשיר ושופע",
    customIntro: "מחפשים קייטרינג בשרי כשר למהדרין בביתר עילית? 'טעם מהודר' מספקת מגשי אוכל מוכן בשריים עשירים וטעימים ישירות אליכם לשבת חתן, ברית או אזכרה, בהשגחת בד\"ץ הרב מחפוד.",
    localTrustHook: "פתרון מושלם וחגיגי להגשה עצמית חסכונית שמתאים לכל קהילה בביתר עילית.",
    isFocus: true
  },
  {
    slug: "netivot",
    name: "נתיבות",
    deliveryFee: 180,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג בנתיבות כשר למהדרין בד\"ץ הרב מחפוד | אוכל בשרי חם לאירוח",
    customIntro: "תושבי נתיבות והסביבה מוזמנים ליהנות מתפריט קייטרינג בשרי עשיר, חם ושופע ב-58 ₪ למנה בלבד. פתרון אירוח עצמי מושלם וחסכוני לשבת חתן, ברית מילה ואזכרות, ללא עלויות הפקה יקרות.",
    localTrustHook: "שירות אדיב ומשלוחים חמים וטריים המגיעים ישירות לכל שכונות נתיבות.",
    isFocus: true,
    neighborSlugs: ["beer-sheva", "ofakim", "sderot", "kiryat-gat", "kiryat-malachi"]
  },
  {
    slug: "petah-tikva",
    name: "פתח תקווה",
    deliveryFee: 100,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בפתח תקווה כשר בד\"ץ מחפוד | מגשי אוכל מוכן לאירועים קטנים",
    customIntro: "פתח תקווה היא מהערים המובילות בביקוש לקייטרינג לשבת חתן ובריתות. במקום לשלם מחירים מופקעים על אולמות והפקה מלאה, 'טעם מהודר' מביאה אליכם לפתח תקווה אוכל בשרי משובח להגשה עצמית. המגשים שלנו מתאימים בול להפקה עצמית בבית, בבית הכנסת או בחצר. הכשרות המהודרת של בד\"ץ הרב מחפוד נותנת לכם שקט נפשי מלא לארח אורחים מכל הקהילות והזרמים בפתח תקווה.",
    localTrustHook: "משלוח חם ישירות לבתי הכנסת ומועדוני הדיירים בכל השכונות בפתח תקווה.",
    neighborhoods: ["כפר גנים", "אם המושבות", "הדר גנים", "מחנה יהודה", "סגולה", "נווה גן", "גן העיר", "מרכז העיר"],
    synagogues: ["בית כנסת הגדול בית יעקב", "בית כנסת בית אברהם", "בית כנסת אור חיים", "בית כנסת שירת דבורה"],
    isFocus: true,
    neighborSlugs: ["kfar-saba", "raanana", "hod-hasharon", "rosh-haayin", "shoham", "kiryat-ono", "or-yehuda", "yehud"]
  },
  {
    slug: "rishon-lezion",
    name: "ראשון לציון",
    deliveryFee: 120,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בראשון לציון כשר למהדרין בשרי | מגשי אוכל מוכן חם",
    customIntro: "מחפשים קייטרינג בשרי בראשון לציון לשבת חתן או ברית? 'טעם מהודר' מציעה לכם מגשים חמים של בשרים, תוספות וסלטים להגשה עצמית בכשרות בד\"ץ הרב מחפוד.",
    neighborhoods: ["נווה דקלים", "כרמים", "רמז", "אברמוביץ'", "קדמת ראשון", "נחלת יהודה", "נווה חוף", "נווה שלום"],
    synagogues: ["בית כנסת הגדול", "בית כנסת מגן אברהם", "בית כנסת אוהל יעקב", "בית כנסת ישועת יעקב"],
    isFocus: true,
    neighborSlugs: ["holon", "bat-yam", "nes-ziona", "yavne", "modiin"]
  },
  {
    slug: "ashdod",
    name: "אשדוד",
    deliveryFee: 140,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג באשדוד כשר למהדרין בשרי | מגשי אוכל מוכן חם",
    customIntro: "חוגגים שבת חתן או אזכרה באשדוד? הזמינו משלוח חם של מגשי אוכל בשרי עשיר ושופע מבית 'טעם מהודר' בכשרות בד\"ץ הרב שלמה מחפוד. אירוח יוקרתי במחיר הוגן.",
    isFocus: true,
    neighborSlugs: ["ashkelon"]
  },
  {
    slug: "netanya",
    name: "נתניה",
    deliveryFee: 150,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג בשרי בנתניה כשר למהדרין | משלוחי אוכל מוכן חם",
    customIntro: "מחפשים קייטרינג בשרי כשר למהדרין בנתניה? 'טעם מהודר' מציעה משלוחי אוכל בשרי חם ישירות לביתכם או לבית הכנסת בנתניה. התפריט העשיר שלנו מתאים במיוחד לאירועים קטנים ושבתות חתן במחיר הזול בישראל.",
    neighborhoods: ["קרית השרון", "עיר ימים", "פולג", "רמת פולג", "שכונת אגמים", "נאות פולג", "קרית נורדאו", "מרכז נתניה"],
    synagogues: ["בית כנסת הגדול שושנת העמקים", "בית כנסת אורח חיים", "בית כנסת בית מאיר", "בית כנסת ישועת השם"],
    isFocus: true,
    neighborSlugs: ["herzliya", "raanana"]
  },
  {
    slug: "rehovot",
    name: "רחובות",
    deliveryFee: 130,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג ברחובות כשר בד\"ץ הרב מחפוד | אוכל מוכן לאירועים קטנים",
    customIntro: "שירותי אוכל מוכן ברחובות והסביבה. אנו מתמחים באספקת קייטרינג בשרי חם לאירועים פרטיים, שבתות חתן ואזכרות ברחובות, עם מנות ביתיות עשירות ונדיבות.",
    neighborhoods: ["שעריים", "אושיות", "רחובות המדע", "רחובות ההולנדית", "קרית משה", "נווה אלון", "רחובות החדשה", "צפון העיר", "הדר"],
    synagogues: ["בית כנסת הגדול", "בית כנסת אוהל שרה", "בית כנסת ישועת דוד", "בית כנסת עץ חיים"],
    isFocus: true,
    neighborSlugs: ["ramla", "lod", "gedera", "nes-ziona"]
  },

  // ─── STANDARD CITIES (TIER 2) ───
  {
    slug: "kfar-saba",
    name: "כפר סבא",
    deliveryFee: 130,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג בכפר סבא כשר למהדרין לאירועים קטנים ושבתות חתן",
    customIntro: "תושבי כפר סבא והסביבה נהנים מאוכל מוכן בשרי ועשיר להגשה עצמית. פתרון מושלם לבריתות בבית, אזכרות משפחתיות ושבת חתן בבית הכנסת עם השגחה מהודרת של בד\"ץ הרב מחפוד.",
    neighborhoods: ["גן הצפון", "כפר סבא הירוקה", "רמת כפר סבא", "מרכז העיר", "שכונת יצחק", "שכונה ה'", "נווה אלון"],
    synagogues: ["בית כנסת הגדול", "בית כנסת בית אברהם", "בית כנסת עדות המזרח", "בית כנסת אור יצחק", "בית כנסת שבת אחים"],
    isFocus: true,
    neighborSlugs: ["raanana", "hod-hasharon"]
  },
  {
    slug: "raanana",
    name: "רעננה",
    deliveryFee: 130,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג ברעננה בשרי כשר בד\"ץ הרב מחפוד לשבתות ואירועים",
    customIntro: "מחפשים אוכל מוכן בשרי ברעננה לאירוח עצמי ושופע? אנו ב'טעם מהודר' מספקים מגשי אוכל מבושל וחם ברעננה במחירים נוחים ועם רמת כשרות קפדנית ביותר של בד\"ץ יורה דעה.",
    localTrustHook: "רעננה מציעה קהילה מסורתית מגוונת הכוללת עולים מדוברי אנגלית ומשפחות דתיות וחרדיות — כולן מחפשות כשרות מהודרת בד\"ץ מחפוד.",
    neighborhoods: ["גן הצפון", "מרכז רעננה", "שכונת אורנים", "נווה ורדים", "צפון מזרח", "שכונת קינר", "רמת חן"],
    synagogues: ["בית כנסת הגדול", "בית כנסת עמיחי", "בית כנסת עולי בריטניה", "בית כנסת אור יעקב", "בית כנסת נצח ישראל"],
    isFocus: true,
    neighborSlugs: ["kfar-saba", "herzliya"]
  },
  {
    slug: "hod-hasharon",
    name: "הוד השרון",
    deliveryFee: 130,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג בהוד השרון כשר למהדרין | אוכל בשרי חם לאירוח עצמי",
    customIntro: "משלוח אוכל מוכן בהוד השרון ישירות לאירוע שלכם. אנו מתמחים במגשים בשריים חמים של אוכל מוכן לשבתות חתן, בריתות או אזכרות, ללא צורך במלצרים.",
    neighborSlugs: ["kfar-saba", "raanana"]
  },
  {
    slug: "herzliya",
    name: "הרצליה",
    deliveryFee: 140,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג בהרצליה כשר בד\"ץ מחפוד | מגשי אירוח בשריים חמים",
    customIntro: "חוגגים ברית מילה או שבת חתן בהרצליה? הזמינו קייטרינג בשרי כשר למהדרין להגשה עצמית ותיהנו ממנות נדיבות ועשירות שכולם אוהבים, במחיר שווה לכל נפש.",
    localTrustHook: "הרצליה משלבת קהילה מסורתית ותיקה עם עולים ומשפחות דתיות — כשרות בד\"ץ הרב מחפוד מבטיחה שכל אורח ירגיש בנוח.",
    neighborhoods: ["הרצליה פיתוח", "נווה עמל", "שיקמון", "אגמים", "מרכז הרצליה", "שכונת הצפון", "רמת השרון גבול"],
    synagogues: ["בית כנסת הגדול", "בית כנסת ישורון", "בית כנסת עדות המזרח", "בית כנסת אהבת ציון", "בית כנסת תפארת ישראל"],
    isFocus: true,
    neighborSlugs: ["raanana", "ramat-hasharon"]
  },
  {
    slug: "ramat-hasharon",
    name: "רמת השרון",
    deliveryFee: 140,
    minGuests: 30,
    region: "sharon",
    customHeading: "קייטרינג ברמת השרון כשר למהדרין בשרי להגשה עצמית",
    customIntro: "קייטרינג ביתי חם ברמת השרון לאירועים קטנים. תפריט בשרי עשיר, טעים וכשר בהשגחת בד\"ץ הרב מחפוד המוגש במגשים מסודרים ישירות אליכם.",
    neighborSlugs: ["herzliya", "tel-aviv"]
  },
  {
    slug: "tel-aviv",
    name: "תל אביב",
    deliveryFee: 120,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בתל אביב כשר למהדרין בד\"ץ מחפוד לאירועים פרטיים",
    customIntro: "הפקת אירוע בשרי בתל אביב לא חייבת לעלות הון. 'טעם מהודר' מציעה משלוחי מגשי אוכל מוכן בשרי חם וכשר למהדרין בתל אביב והסביבה. מענה מצוין לשבתות חתן, אזכרות ובריתות.",
    neighborSlugs: ["ramat-gan", "givatayim", "bat-yam"]
  },
  {
    slug: "ramat-gan",
    name: "רמת גן",
    deliveryFee: 110,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג ברמת גן כשר למהדרין | משלוחי אוכל בשרי מוכן חם",
    customIntro: "קייטרינג בשרי מומלץ ברמת גן לאירועים קטנים ושבת חתן. תפריט 58 ש\"ח העשיר שלנו כולל מגוון רחב של מנות עיקריות, תוספות וסלטים טריים בטעם ביתי מהודר.",
    localTrustHook: "קריית קריניצי, קריית הרצוג ושכונת ראשונים — מוקדים של קהילה מסורתית וחרדית ברמת גן — מחפשים כשרות בד\"ץ הרב מחפוד ואוכל ביתי שופע.",
    neighborhoods: ["מרום נווה", "קריית קריניצי", "נווה יהושע", "רמת חן", "שכונת ראשונים", "תל בנימין", "מרכז העיר"],
    synagogues: ["בית כנסת הגדול", "בית כנסת אהבת רעים", "בית כנסת בית יוסף", "בית כנסת אור יצחק", "בית כנסת היכל שלמה"],
    isFocus: true,
    neighborSlugs: ["givatayim", "bnei-brak", "tel-aviv"]
  },
  {
    slug: "givatayim",
    name: "גבעתיים",
    deliveryFee: 110,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בגבעתיים בשרי כשר למהדרין לשבתות חתן ואירועים",
    customIntro: "הזמינו אוכל מוכן בשרי חם בגבעתיים ישירות לביתכם או לבית הכנסת. מגשי אוכל מוכן בשריים עשירים וטעימים בכשרות המהודרת של בד\"ץ הרב שלמה מחפוד.",
    neighborSlugs: ["ramat-gan", "tel-aviv"]
  },
  {
    slug: "holon",
    name: "חולון",
    deliveryFee: 110,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בחולון כשר בד\"ץ הרב מחפוד | אוכל מוכן לאירועים קטנים",
    customIntro: "קייטרינג בשרי מומלץ בחולון לשבת חתן, אזכרות, בריתות וסעודות מצווה. אנו מספקים מגשי אוכל מוכן עשירים וחמים שישדרגו לכם את האירוע במחיר הזול ביותר.",
    localTrustHook: "חולון מונה קהילה מסורתית גדולה ומגוונת הכוללת עולים מדרום אמריקה, מרוקו ועיראק — כשרות בד\"ץ הרב מחפוד מתאימה למכלול עדות הקהילה.",
    neighborhoods: ["קריית שרת", "ג'סי כהן", "תל גיבורים", "נאות רחל", "אגרובנק", "נווה ארזים", "קריית אילון"],
    synagogues: ["בית כנסת הגדול", "בית כנסת תפילה למשה", "בית כנסת ישמח משה", "בית כנסת בית אל", "בית כנסת עדות המזרח"],
    isFocus: true,
    neighborSlugs: ["rishon-lezion", "bat-yam"]
  },
  {
    slug: "bat-yam",
    name: "בת ים",
    deliveryFee: 120,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בבת ים כשר למהדרין בשרי | מגשי אירוח חמים",
    customIntro: "חוגגים אירוע משפחתי בבת ים? 'טעם מהודר' מספקת מגשי אוכל בשרי חם מוכן מראש, עם כשרות מהודרת של בד\"ץ הרב מחפוד. פתרון מדהים לאירועים בשירות עצמי.",
    localTrustHook: "בת ים — מרכז הקהילה המרוקאית והמסורתית בחוף ים התיכון. שורשי העדה ותרבות האירוח הביתי הופכים את כשרות בד\"ץ מחפוד לבחירה הטבעית.",
    neighborhoods: ["יד ליד", "נווה עופר", "שכונת בבלי", "מרכז העיר", "קריית שמואל", "שכונה ד'", "שיכון עממי"],
    synagogues: ["בית כנסת הגדול", "בית כנסת עדות המזרח", "בית כנסת אהבת שלום", "בית כנסת שלום על ישראל", "בית כנסת מגן אברהם"],
    isFocus: true,
    neighborSlugs: ["holon", "tel-aviv"]
  },
  {
    slug: "givat-shmuel",
    name: "גבעת שמואל",
    deliveryFee: 100,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בגבעת שמואל כשר למהדרין בד\"ץ מחפוד לשבת חתן",
    customIntro: "תושבי גבעת שמואל מוזמנים ליהנות מתפריט בשרי עשיר ושופע לשבתות חתן ובריתות. מגשי אוכל מוכן להגשה עצמית המשלבים כשרות מהודרת וטעם ביתי נפלא.",
    neighborSlugs: ["bnei-brak", "petah-tikva"]
  },
  {
    slug: "kiryat-ono",
    name: "קרית אונו",
    deliveryFee: 110,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג בקרית אונו כשר למהדרין לאירועים ושבתות חתן",
    customIntro: "משלוחי קייטרינג בשרי חם לקרית אונו והסביבה. מגוון עשיר של מנות בשריות, תוספות חמות וסלטים טריים בכשרות מהודרת ללא פשרות במחירים נוחים במיוחד.",
    neighborSlugs: ["petah-tikva", "or-yehuda"]
  },
  {
    slug: "or-yehuda",
    name: "אור יהודה",
    deliveryFee: 100,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג באור יהודה כשר למהדרין בד\"ץ מחפוד | אוכל בשרי מוכן",
    customIntro: "מחפשים אוכל מוכן באור יהודה לאירוח עצמי חגיגי? אנו מספקים מגשי אוכל חמים של בשרים, תוספות וסלטים טריים בטעם ביתי אותנטי וכשר למהדרין.",
    neighborSlugs: ["petah-tikva", "yehud"]
  },
  {
    slug: "yehud",
    name: "יהוד",
    deliveryFee: 110,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג ביהוד בשרי כשר למהדרין לשבת חתן וברית מילה",
    customIntro: "שירותי קייטרינג בשרי ואוכל מוכן ביתי ביהוד. מגשי אוכל מוכן חמים וטריים ישירות לאירוח בבית הכנסת או בבית, בכשרות בד\"ץ הרב שלמה מחפוד.",
    neighborSlugs: ["petah-tikva", "or-yehuda"]
  },
  {
    slug: "nes-ziona",
    name: "נס ציונה",
    deliveryFee: 130,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בנס ציונה כשר למהדרין בשרי לאירוח עצמי מושלם",
    customIntro: "מארגנים אירוע קטן בנס ציונה? תיהנו מתפריט אוכל מוכן בשרי חם של 'טעם מהודר' המוגש במגשי אלומיניום נוחים להגשה עצמית, בכשרות בד\"ץ יורה דעה.",
    neighborSlugs: ["rishon-lezion", "rehovot"]
  },
  {
    slug: "yavne",
    name: "יבנה",
    deliveryFee: 140,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בייבנה כשר בד\"ץ מחפוד | משלוחי אוכל בשרי חם לאירוע",
    customIntro: "קייטרינג בשרי ביבנה לשבתות חתן ובריתות. אנו ב'טעם מהודר' מספקים אוכל בשרי מוכן חם שיאפשר לכם לארח את המשפחה בשפע ובנוחות רבה ובמחיר מנצח.",
    neighborSlugs: ["rishon-lezion", "rehovot"]
  },
  {
    slug: "ramla",
    name: "רמלה",
    deliveryFee: 120,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג ברמלה כשר למהדרין בד\"ץ מחפוד | אוכל בשרי ביתי חם",
    customIntro: "תושבי רמלה נהנים מאוכל מוכן בשרי אותנטי ועשיר לכל סוגי האירועים הקטנים והמשפחתיים. המגשים שלנו מגיעים חמים ומוכנים לאכילה מיידית בשירות עצמי.",
    localTrustHook: "הקהילה המסורתית הוותיקה של רמלה — שורשים עמוקים בתרבות מזרחית ומרוקאית הדורשים כשרות מהודרת ואוכל ביתי אמיתי.",
    neighborhoods: ["שכונת ברנע", "שכונת גאולה", "קרית תל-אביב", "נווה גנים", "מרכז העיר", "שכונה ג'"],
    synagogues: ["בית כנסת הגדול", "בית כנסת עדות המזרח", "בית כנסת ויזאן", "בית כנסת אור לציון"],
    isFocus: true,
    neighborSlugs: ["lod", "rehovot"]
  },
  {
    slug: "lod",
    name: "לוד",
    deliveryFee: 120,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בלוד בשרי כשר למהדרין לשבת חתן ואזכרות משפחתיות",
    customIntro: "קייטרינג מוכן עד הבית ללוד והסביבה. שירות מושלם לאירועים פרטיים, שבת חתן, ברית מילה ואזכרה. כשרות מהודרת של בד\"ץ הרב מחפוד ואיכות בשרים ללא פשרות.",
    localTrustHook: "לוד מונה קהילה מסורתית גדולה ומגוונת עם שורשים תימניים, מרוקאיים ועיראקיים — כשרות בד\"ץ מחפוד מכבדת את המסורת של כל אחת מהעדות.",
    neighborhoods: ["רמת אשכול", "שכונת גאולה", "קרית השחר", "גבעת רמב\"ם", "מרכז העיר", "הפרדסים", "נווה ירק"],
    synagogues: ["בית כנסת הגדול", "בית כנסת עדות המזרח", "בית כנסת אוהל שרה", "בית כנסת מאיר עיניים", "בית כנסת שלום על ישראל"],
    isFocus: true,
    neighborSlugs: ["tel-aviv", "herzliya", "ramla"]
  },
  {
    slug: "shoham",
    name: "שוהם",
    deliveryFee: 120,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בשוהם כשר למהדרין בשרי | מגשי אוכל מוכן לשבת חתן",
    customIntro: "מארגנים עלייה לתורה או שבת חתן בשוהם? קבלו משלוח חם של מגשי בשרים, תוספות חמות וסלטים טריים בכשרות מהודרת של בד\"ץ הרב שלמה מחפוד.",
    neighborSlugs: ["petah-tikva", "lod"]
  },
  {
    slug: "gedera",
    name: "גדרה",
    deliveryFee: 140,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בגדרה כשר בד\"ץ מחפוד לשבת חתן וברית מילה",
    customIntro: "קייטרינג בשרי ביתי עשיר בגדרה והסביבה. מגשי אוכל בשרי חם מוכנים מראש, בטעם ביתי משובח ובמחיר משתלם במיוחד לאירוח עצמי מכובד.",
    neighborSlugs: ["rehovot", "kiryat-malachi"]
  },
  {
    slug: "rosh-haayin",
    name: "ראש העין",
    deliveryFee: 110,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג בראש העין כשר למהדרין בשרי לאירועים קטנים",
    customIntro: "מחפשים אוכל מוכן באזור השרון? קייטרינג 'טעם מהודר' מספק מגשי אוכל לאירועים קטנים וגדולים: שבתות חתן, בר ובת מצווה, בריתות ועוד. בשרים על האש ואוכל מסורתי עם בד\"ץ מחפוד באזור.",
    neighborSlugs: ["herzliya", "petah-tikva"]
  },
  {
    slug: "modiin",
    name: "מודיעין",
    deliveryFee: 140,
    minGuests: 30,
    region: "shephelah",
    customHeading: "קייטרינג במודיעין כשר למהדרין בד\"ץ מחפוד | אוכל בשרי חם",
    customIntro: "תושבי מודיעין נהנים משירותי קייטרינג בשרי חם להגשה עצמית. הפתרון המושלם לאירוע בבית או בבית הכנסת שחוסך לכם אלפי שקלים של צוות מלצרים.",
    localTrustHook: "מודיעין מארחת קהילות דתיות-לאומיות ומסורתיות הצומחות בקצב מהיר — כשרות בד\"ץ הרב מחפוד היא הבחירה הנכונה לכלל קהילות הדתיות-לאומיות בעיר.",
    neighborhoods: ["מכבים", "ספיר", "נאות קוטנר", "גבעת המנורה", "מבוא חורון", "שכונת יובל", "אמירים"],
    synagogues: ["בית כנסת עץ חיים", "בית כנסת קהלת יהודה", "בית כנסת הגדול", "בית כנסת ישורון", "בית כנסת אהבת שלום"],
    isFocus: true,
    neighborSlugs: ["rishon-lezion", "rosh-haayin"]
  },
  {
    slug: "ashkelon",
    name: "אשקלון",
    deliveryFee: 160,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג באשקלון בשרי כשר למהדרין לאירועים קטנים",
    customIntro: "קייטרינג בשרי מומלץ באשקלון לשבת חתן, אזכרות ובריתות. אנו מספקים מגשי אוכל מבושל וחם בכשרות מהודרת של בד\"ץ יורה דעה ללא פשרות, ובמחיר ללא תחרות.",
    localTrustHook: "אשקלון מכילה קהילה מרוקאית ומסורתית גדולה ומושרשת — כשרות בד\"ץ הרב מחפוד מתאימה בדיוק לרמת הכשרות שהקהילה דורשת.",
    neighborhoods: ["ממשית", "עיר הגנים", "דגניה", "ציפורית", "ברנע", "מרכז העיר", "הולילנד", "אפרידר"],
    synagogues: ["בית כנסת הגדול", "בית כנסת אור יצחק", "בית כנסת עדות המזרח", "בית כנסת מגן אברהם", "בית כנסת שלום על ישראל"],
    isFocus: true,
    neighborSlugs: ["ashdod"]
  },
  {
    slug: "kiryat-gat",
    name: "קרית גת",
    deliveryFee: 150,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג בקרית גת כשר בד\"ץ מחפוד | אוכל בשרי חם",
    customIntro: "משלוחי אוכל בשרי מוכן חם לקרית גת והסביבה. פתרון אירוח עצמי משתלם במיוחד לאירועים משפחתיים, שבתות חתן או סעודות מצווה קטנות.",
    neighborSlugs: ["ashkelon", "netivot"]
  },
  {
    slug: "beer-sheva",
    name: "באר שבע",
    deliveryFee: 200,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג בבאר שבע כשר למהדרין לשבתות חתן ואירועים קטנים",
    customIntro: "תושבי באר שבע מוזמנים ליהנות מקייטרינג בשרי ביתי עשיר המוגש חם במגשים מסודרים ישירות אליכם. כשרות מהודרת של בד\"ץ הרב מחפוד המאפשרת לארח בשלווה ובשפע.",
    localTrustHook: "באר שבע — בירת הנגב ומרכז הקהילות המסורתיות של הדרום. שירות משלוחים מותאם לעוצמת הביקוש לאירועים מסורתיים מקהילות תימן, מרוקו ועיראק.",
    neighborhoods: ["נאות לון", "שכונת ד'", "עיר הבה\"דים", "רמות", "נאות שקמה", "נחל עשן", "שכונת א'", "שכונת ג'"],
    synagogues: ["בית כנסת הגדול", "בית כנסת עדות המזרח", "בית כנסת עוד יוסף חי", "בית כנסת נוה שלום", "בית כנסת שלום על ישראל"],
    isFocus: true,
    neighborSlugs: ["netivot", "ofakim"]
  },
  {
    slug: "ofakim",
    name: "אופקים",
    deliveryFee: 180,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג באופקים כשר למהדרין בשרי | מגשי אוכל מוכן חם",
    customIntro: "תושבי אופקים מוזמנים ליהנות מקייטרינג בשרי חם להגשה עצמית. תפריט בשרי עשיר, חם וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד לשבתות חתן, בריתות ואזכרות.",
    neighborSlugs: ["netivot", "beer-sheva"]
  },
  {
    slug: "sderot",
    name: "שדרות",
    deliveryFee: 170,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג בשדרות כשר למהדרין בשרי | מגשי אוכל מוכן חם",
    customIntro: "משלוח אוכל מוכן בשרי בשדרות והסביבה. אנו מתמחים באספקת קייטרינג בשרי חם לאירועים פרטיים, שבתות חתן או אזכרות, עם מנות ביתיות עשירות וכשרות מהודרת.",
    neighborSlugs: ["netivot", "ashkelon"]
  },
  {
    slug: "kiryat-malachi",
    name: "קריית מלאכי",
    deliveryFee: 150,
    minGuests: 30,
    region: "south",
    customHeading: "קייטרינג בקריית מלאכי כשר למהדרין בשרי | אוכל מוכן חם",
    customIntro: "מחפשים קייטרינג בשרי כשר למהדרין בקריית מלאכי? אנו מספקים מגשי אוכל מוכן חם לשבתות חתן, בריתות ואזכרות בכשרות המהודרת ביותר של בד\"ץ הרב מחפוד.",
    neighborSlugs: ["ashkelon", "gedera"]
  },
  {
    slug: "maale-adumim",
    name: "מעלה אדומים",
    deliveryFee: 180,
    minGuests: 30,
    region: "center",
    customHeading: "קייטרינג במעלה אדומים כשר למהדרין בשרי | אוכל מוכן חם",
    customIntro: "שירותי אוכל מוכן במעלה אדומים והסביבה. אנו מתמחים באספקת קייטרינג בשרי חם לשבתות חתן, בריתות ואזכרות במעלה אדומים בכשרות המהודרת של בד\"ץ הרב מחפוד."
  }
];

export const PASSOVER_MENU: MenuCategory[] = [
  {
    id: "salads",
    name: "סלטים לבחירה",
    limit: 7,
    options: [
      { id: "p_sl1", name: "מטבוחה מרוקאית", description: "" },
      { id: "p_sl2", name: "זעלוק (חציל מבושל)", description: "" },
      { id: "p_sl3", name: "סלק אדום", description: "" },
      { id: "p_sl4", name: "סלט ישראלי", description: "" },
      { id: "p_sl5", name: "גזר חי בלימון", description: "" },
      { id: "p_sl6", name: "חציל מיונז", description: "" },
      { id: "p_sl7", name: "קולסלאו", description: "" },
      { id: "p_sl8", name: "כרוב חמוציות", description: "" },
      { id: "p_sl9", name: "פלפל חריף מטוגן", description: "" },
      { id: "p_sl10", name: "תירס צ'יליאני", description: "" }
    ]
  },
  {
    id: "sides",
    name: "תוספות חמות",
    limit: 3,
    options: [
      { id: "p_s1", name: "תפו\"א זעירים אפויים בתנור", description: "" },
      { id: "p_s2", name: "ארטישוק בפטריות", description: "" },
      { id: "p_s3", name: "אפונה וגזר", description: "" },
      { id: "p_s4", name: "שעועית ירוקה", description: "" },
      { id: "p_s5", name: "ירקות מוקפצים", description: "" }
    ]
  },
  {
    id: "intermediates",
    name: "מנות ביניים",
    limit: 2,
    options: [
      { id: "p_in1", name: "מושט ברוטב מרוקאי חריף", description: "" },
      { id: "p_in2", name: "נסיכת הנילוס מרוקאי", description: "" },
      { id: "p_in3", name: "טונה בנוסח מרוקאי", description: "" },
      { id: "p_in4", name: "דג סול מטוגן מרוקאי", description: "" },
      { id: "p_in5", name: "קציצות דגים ברוטב", description: "" }
    ]
  },
  {
    id: "mains",
    name: "מנות עיקריות",
    limit: 2,
    options: [
      { id: "p_m1", name: "צלי בקר ברוטב פטריות", description: "" },
      { id: "p_m2", name: "בקר בנוסח מרוקאי", description: "" },
      { id: "p_m3", name: "פרגיות על האש", description: "" },
      { id: "p_m4", name: "קבב על האש / מטוגן", description: "" },
      { id: "p_m5", name: "חזה עוף על האש", description: "" },
      { id: "p_m6", name: "שניצל עוף פריך", description: "" },
      { id: "p_m7", name: "שוקיים עוף ברוטב / אפוי", description: "" },
      { id: "p_m8", name: "עוף בגריל אפוי (כרעיים)", description: "" }
    ]
  }
];

export const ROSH_HASHANAH_MENU: MenuCategory[] = [
  {
    id: "salads",
    name: "סלטים טריים",
    limit: 7,
    options: [
      { id: "r_sl1", name: "סלק אדום", description: "לסימן סלקא" },
      { id: "r_sl2", name: "גזר חריף בלימון", description: "לסימן קרא" },
      { id: "r_sl3", name: "מטבוחה ביתית", description: "" },
      { id: "r_sl4", name: "חציל פרוס מצופה פנקו", description: "" },
      { id: "r_sl5", name: "חציל מטוגן בויניגרט", description: "" },
      { id: "r_sl6", name: "תפוח אדמה במיונז", description: "" },
      { id: "r_sl7", name: "טחינה לבנונית", description: "" },
      { id: "r_sl8", name: "חומוס הבית", description: "" },
      { id: "r_sl9", name: "קולסלאו", description: "" },
      { id: "r_sl10", name: "סלט השוק", description: "" }
    ]
  },
  {
    id: "sides",
    name: "תוספות חמות",
    limit: 3,
    options: [
      { id: "r_s1", name: "טנזיה – תבשיל פירות יבשים", description: "חובה לחג מתוק" },
      { id: "r_s2", name: "אורז לבן קלאסי", description: "" },
      { id: "r_s3", name: "אורז עם אטריות דקות", description: "" },
      { id: "r_s4", name: "תפוחי אדמה אפויים בשמן זית ורוזמרין", description: "" },
      { id: "r_s5", name: "קינואה בוטנים וחמוציות", description: "" },
      { id: "r_s6", name: "ארטישוק אפונה ופטריות", description: "" },
      { id: "r_s7", name: "ירקות קלויים בטאבון", description: "" },
      { id: "r_s8", name: "קוביות בטטה בצ'ילי", description: "" }
    ]
  },
  {
    id: "intermediates",
    name: "מנות ביניים / דגים",
    limit: 2,
    options: [
      { id: "r_in1", name: "סלמון נורבגי בקראנץ' פיצוחים", description: "" },
      { id: "r_in2", name: "סלמון נורווגי בעשבי תיבול", description: "" },
      { id: "r_in3", name: "פילה מושט מרוקאי פיקנטי", description: "" },
      { id: "r_in4", name: "קציצות דג לברק ברוטב מזרחי", description: "" },
      { id: "r_in5", name: "מעטפת פילו פרגית ופירות יבשים", description: "" },
      { id: "r_in6", name: "טורטיה רול ממולאת בשר", description: "" }
    ]
  },
  {
    id: "mains",
    name: "מנות עיקריות",
    limit: 2,
    options: [
      { id: "r_m1", name: "צלי כתף בקר ברוטב פטריות", description: "" },
      { id: "r_m2", name: "אסאדו ברוטב יין וטריאקי", description: "" },
      { id: "r_m3", name: "בשר ראש ברוטב חומוס פיקנטי", description: "" },
      { id: "r_m4", name: "פרגית צלויה על האש", description: "" },
      { id: "r_m5", name: "פרגית ממולאת", description: "" },
      { id: "r_m6", name: "כרעיים עוף ברוטב הדרים", description: "" },
      { id: "r_m7", name: "כרעיים עוף בשמן זית שום וטימין", description: "" }
    ]
  }
];
