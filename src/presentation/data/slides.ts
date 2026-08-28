/**
 * TAJ SABA SMART HOTEL PLATFORM — Presentation Content Map
 * Single source of truth for slide content.
 *
 * Source documents:
 *  - /home/z/my-project/upload/taj-saba-smart-hotel-proposal.md
 *  - /home/z/my-project/upload/taj-saba-discovery-questionnaire.md
 *
 * Rules:
 *  - Arabic primary, English terminology where it is industry standard.
 *  - No invented prices, durations, room counts, integrations, AI claims.
 *  - Placeholders: "TO BE CONFIRMED" / "DISCOVERY REQUIRED" when needed.
 */

export type SlideKind =
  | "cover"
  | "statement"
  | "diagram"
  | "architecture"
  | "process"
  | "timeline"
  | "cards"
  | "comparison"
  | "flow"
  | "big-number"
  | "full-visual"
  | "section-divider"
  | "quote"
  | "closing";

export interface SlideMeta {
  /** zero-padded number, e.g. "01" */
  index: string;
  /** machine id */
  id: string;
  kind: SlideKind;
  /** Arabic eyebrow / section label */
  eyebrow: string;
  /** English bilingual short title */
  eyebrowEn: string;
}

export const PRESENTATION_META = {
  brand: "TAJ SABA",
  brandSub: "SMART HOTEL PLATFORM",
  brandAr: "تاج سبأ",
  provider: "Digital Planetx",
  client: "فندق تاج سبأ",
  date: "29 أغسطس 2026",
  totalSlides: 17,
  closingLine:
    "نبني التقنية حول طريقة عمل تاج سبأ، لا نفرض على تاج سبأ طريقة عمل جاهزة.",
} as const;

export const SLIDES: SlideMeta[] = [
  { index: "01", id: "cover", kind: "cover", eyebrow: "Cover", eyebrowEn: "Cover" },
  {
    index: "02",
    id: "why-here",
    kind: "statement",
    eyebrow: "لماذا نجتمع اليوم",
    eyebrowEn: "Why are we here",
  },
  {
    index: "03",
    id: "discovery-objectives",
    kind: "cards",
    eyebrow: "أهداف جلسة الاكتشاف",
    eyebrowEn: "Discovery Objectives",
  },
  {
    index: "04",
    id: "big-picture",
    kind: "diagram",
    eyebrow: "الصورة الكبرى",
    eyebrowEn: "The Big Picture",
  },
  {
    index: "05",
    id: "ecosystem",
    kind: "architecture",
    eyebrow: "منظومة الفندق",
    eyebrowEn: "Hotel Ecosystem",
  },
  {
    index: "06",
    id: "hotel-operations",
    kind: "cards",
    eyebrow: "إدارة الفندق",
    eyebrowEn: "Hotel Operations",
  },
  {
    index: "07",
    id: "fnb",
    kind: "flow",
    eyebrow: "المطاعم والضيافة",
    eyebrowEn: "Food & Beverage",
  },
  {
    index: "08",
    id: "business-management",
    kind: "cards",
    eyebrow: "إدارة الأعمال",
    eyebrowEn: "Business Management",
  },
  {
    index: "09",
    id: "guest-experience",
    kind: "cards",
    eyebrow: "تجربة النزيل",
    eyebrowEn: "Guest Experience",
  },
  {
    index: "10",
    id: "intelligence-ai",
    kind: "cards",
    eyebrow: "الذكاء والأتمتة",
    eyebrowEn: "Intelligence & AI",
  },
  {
    index: "11",
    id: "integration-landscape",
    kind: "architecture",
    eyebrow: "منظومة التكاملات",
    eyebrowEn: "Integration Landscape",
  },
  {
    index: "12",
    id: "security-governance",
    kind: "cards",
    eyebrow: "الأمن والحوكمة",
    eyebrowEn: "Security & Governance",
  },
  {
    index: "13",
    id: "how-we-build",
    kind: "timeline",
    eyebrow: "كيف نبنيها",
    eyebrowEn: "How we will build it",
  },
  {
    index: "14",
    id: "todays-discovery",
    kind: "cards",
    eyebrow: "اكتشاف اليوم",
    eyebrowEn: "Today's Discovery",
  },
  {
    index: "15",
    id: "discovery-outputs",
    kind: "cards",
    eyebrow: "مخرجات الاكتشاف",
    eyebrowEn: "Discovery Outputs",
  },
  {
    index: "16",
    id: "discovery-to-delivery",
    kind: "process",
    eyebrow: "من الاكتشاف إلى التنفيذ",
    eyebrowEn: "From Discovery to Delivery",
  },
  {
    index: "17",
    id: "closing",
    kind: "closing",
    eyebrow: "ختام",
    eyebrowEn: "Closing",
  },
];

/* ------------------------------------------------------------------ */
/* Domain content (derived strictly from the source documents)         */
/* ------------------------------------------------------------------ */

export const DISCOVERY_OBJECTIVES = [
  {
    icon: "Gauge",
    title: "فهم العمليات",
    en: "Understanding Operations",
    desc: "كيف تبدأ كل عملية، من ينفذها، من يراجعها، من يعتمدها.",
  },
  {
    icon: "Target",
    title: "الأولويات",
    en: "Priorities",
    desc: "ضروري عند الإطلاق، مهم، أو مستقبلي.",
  },
  {
    icon: "Layers",
    title: "الأنظمة الحالية",
    en: "Current Systems",
    desc: "ما الذي يستخدمه الفندق اليوم وما الذي سيستمر.",
  },
  {
    icon: "AlertTriangle",
    title: "نقاط الألم",
    en: "Pain Points",
    desc: "العمل الورقي، تكرار الإدخال، تأخر التقارير، التشتت.",
  },
  {
    icon: "Plug",
    title: "التكاملات",
    en: "Integrations",
    desc: "البنوك، البصمة، الأقفال، الجهات الرسمية، الفنادق الأخرى.",
  },
  {
    icon: "ShieldCheck",
    title: "القيود",
    en: "Constraints",
    desc: "اللغة، العملة، السياسات، الأمن، الخصوصية، البنية التحتية.",
  },
  {
    icon: "Telescope",
    title: "الرؤية المستقبلية",
    en: "Future Vision",
    desc: "AI، الذكاء التنفيذي، التوسع، الخدمات الجديدة.",
  },
];

export const BIG_PICTURE_BEFORE = [
  "حجوزات",
  "استقبال",
  "كاشير",
  "مخزون",
  "محاسبة",
  "رواتب",
  "خدمة عملاء",
  "تقارير",
];

export const BIG_PICTURE_AFTER = [
  { label: "HOTEL", sub: "إدارة الفندق" },
  { label: "BUSINESS", sub: "إدارة الأعمال" },
  { label: "GUEST", sub: "تجربة النزيل" },
];

export const HOTEL_OPERATIONS = [
  {
    icon: "Building2",
    title: "إدارة المنشأة",
    en: "Property Management System",
    points: ["المباني والطوابق", "أنواع الغرف وتصنيفاتها", "حالات الغرف", "خطط الأسعار"],
  },
  {
    icon: "CalendarCheck",
    title: "الحجوزات",
    en: "Reservations",
    points: ["توفر فوري", "حجوزات فردية وجماعية", "العربون والمدفوعات", "سجل تغييرات الحجز"],
  },
  {
    icon: "ConciergeBell",
    title: "الاستقبال",
    en: "Front Desk",
    points: ["Check-in / Check-out", "Folio والحسابات", "تمديدات وتغيير غرفة", "المستندات والفواتير"],
  },
  {
    icon: "Sparkles",
    title: "Housekeeping",
    en: "Housekeeping",
    points: ["حالة كل غرفة", "غرف تحتاج تنظيفًا", "غرف جاهزة للبيع", "ربط بالاستقبال"],
  },
  {
    icon: "Wrench",
    title: "الصيانة",
    en: "Maintenance",
    points: ["بلاغات الأعطال", "الأولوية والحالة", "التكليف والمتابعة", "سجل الصيانة"],
  },
];

export const FNB_FLOW = [
  { step: "01", title: "طلب", en: "Order", desc: "POS · الطاولات · Room Service" },
  { step: "02", title: "POS", en: "Point of Sale", desc: "إرسال الطلب للمطبخ" },
  { step: "03", title: "Kitchen", en: "Kitchen Display", desc: "متابعة التحضير والتسليم" },
  { step: "04", title: "Recipe", en: "Recipe", desc: "المواد الخام والكميات" },
  { step: "05", title: "Cost", en: "Food Cost", desc: "التكلفة المعيارية والهامش" },
  { step: "06", title: "Inventory", en: "Inventory", desc: "استهلاك وإعادة تخزين" },
];

export const BUSINESS_MANAGEMENT = [
  {
    icon: "Package",
    title: "المخزون الذكي",
    en: "Smart Inventory",
    points: ["الأصناف والوحدات", "المستودعات والتحويلات", "الحد الأدنى والتنبيهات", "استهلاك الوصفات"],
  },
  {
    icon: "Truck",
    title: "المشتريات",
    en: "Procurement",
    points: ["طلبات وأوامر الشراء", "الموردون وأرصدتهم", "الاستلام والمطابقة", "سجل الإنفاق"],
  },
  {
    icon: "Calculator",
    title: "المالية",
    en: "Finance & Accounting",
    points: ["الحسابات العامة", "الإيرادات والمصروفات", "الصناديق والبنوك", "التقارير المالية"],
  },
  {
    icon: "Users",
    title: "الموارد البشرية",
    en: "HR & Payroll",
    points: ["الموظفون والورديات", "تكامل البصمة", "كشف الرواتب", "السلف والاستقطاع"],
  },
];

export const GUEST_EXPERIENCE = [
  {
    icon: "UserCircle",
    title: "Guest 360",
    en: "Guest 360",
    points: ["ملف موحد للنزيل", "تاريخ الإقامات", "تفضيلات مسجلة", "سلوك الخدمات"],
  },
  {
    icon: "MessageCircle",
    title: "CRM & تواصل",
    en: "CRM & Communication",
    points: ["قنوات متعددة", "Customer Agent", "إشعارات وحملات", "تحويل للموظف"],
  },
  {
    icon: "Award",
    title: "الولاء والشرائح",
    en: "Loyalty & Segments",
    points: ["العملاء الأكثر تكرارًا", "الأعلى قيمة", "المرشحون للعودة", "عروض مستهدفة"],
  },
  {
    icon: "Smartphone",
    title: "تطبيق النزيل",
    en: "Guest App",
    points: ["الحجز والدفع", "طلبات وRoom Service", "شكاوى ومقترحات", "تقييم الخدمة"],
  },
];

export const AI_MODULES = [
  {
    icon: "BrainCircuit",
    title: "AI Management Assistant",
    desc: "إجابات وتحليلات للإدارة العليا.",
  },
  {
    icon: "BotMessageSquare",
    title: "AI Customer Agent",
    desc: "خدمة عملاء وحملات عبر القنوات المعتمدة.",
  },
  {
    icon: "FileSearch",
    title: "AI Payroll Review",
    desc: "كشف استثنائي للرواتب قبل الاعتماد.",
  },
  {
    icon: "Boxes",
    title: "AI Inventory Intelligence",
    desc: "توقع الاحتياج والتنبيه للأصناف الحرجة.",
  },
  {
    icon: "TrendingUp",
    title: "AI Revenue Intelligence",
    desc: "تحليل الإشغال والإيرادات والطلب.",
  },
  {
    icon: "ShieldAlert",
    title: "AI Anomaly Detection",
    desc: "اكتشاف الأنماط غير المعتادة.",
  },
];

export const INTEGRATIONS = [
  { icon: "CreditCard", title: "بوابات الدفع والبنوك", en: "Payment Gateways" },
  { icon: "Fingerprint", title: "أجهزة البصمة", en: "Biometrics" },
  { icon: "KeyRound", title: "أنظمة أقفال الغرف", en: "Room Locks" },
  { icon: "Receipt", title: "POS والطابعات", en: "POS & Printers" },
  { icon: "Mail", title: "البريد والإشعارات", en: "Mail & Notifications" },
  { icon: "Globe", title: "خدمات الحجز الخارجية", en: "External Booking" },
  { icon: "Building", title: "الفنادق والمنشآت الأخرى", en: "Hotel-to-Hotel" },
  { icon: "ShieldCheck", title: "الجهات الرسمية والأمنية", en: "Official / Security" },
];

export const SECURITY_PILLARS = [
  {
    icon: "Users2",
    title: "المستخدمون والأدوار",
    en: "Roles & Permissions",
    desc: "أدوار متعددة المستويات وفصل الصلاحيات الحساسة.",
  },
  {
    icon: "ScrollText",
    title: "سجل التدقيق",
    en: "Audit Log",
    desc: "تتبع كامل للعمليات المهمة والموافقات.",
  },
  {
    icon: "Lock",
    title: "حماية البيانات",
    en: "Data Protection",
    desc: "ضوابط خاصة بالبيانات الشخصية وبيانات الهوية.",
  },
  {
    icon: "ShieldCheck",
    title: "الموافقات الصريحة",
    en: "Explicit Approvals",
    desc: "كل عملية مالية حساسة تخضع للاعتماد البشري.",
  },
  {
    icon: "DatabaseBackup",
    title: "النسخ والاستعادة",
    en: "Backup & Recovery",
    desc: "نسخ احتياطي منتظم واختبار للاستعادة.",
  },
  {
    icon: "Activity",
    title: "المراقبة والتوفر",
    en: "Monitoring & Availability",
    desc: "مراقبة الأخطاء والعمليات واستمرارية التشغيل.",
  },
];

export const BUILD_TIMELINE = [
  { step: "01", title: "تأسيس المنصة", en: "Platform Foundation" },
  { step: "02", title: "الهوية والصلاحيات", en: "Identity & Access" },
  { step: "03", title: "إدارة الفندق", en: "Hotel Management" },
  { step: "04", title: "المطاعم", en: "Restaurants" },
  { step: "05", title: "المخزون والمشتريات", en: "Inventory & Procurement" },
  { step: "06", title: "المالية", en: "Finance" },
  { step: "07", title: "الموارد البشرية", en: "HR" },
  { step: "08", title: "تجربة العميل", en: "Guest Experience" },
  { step: "09", title: "التكاملات المؤسسية", en: "Enterprise Integrations" },
  { step: "10", title: "AI والأتمتة", en: "AI & Automation" },
  { step: "11", title: "التشغيل والتحسين", en: "Run & Improve" },
];

export const TODAY_DISCOVERY = [
  { icon: "Building2", title: "الفندق", en: "Hotel" },
  { icon: "Users", title: "المستخدمون", en: "Users" },
  { icon: "Workflow", title: "العمليات", en: "Operations" },
  { icon: "Layers", title: "الأنظمة", en: "Systems" },
  { icon: "Database", title: "البيانات", en: "Data" },
  { icon: "Plug", title: "التكاملات", en: "Integrations" },
  { icon: "Server", title: "البنية التحتية", en: "Infrastructure" },
  { icon: "AlertTriangle", title: "التحديات", en: "Challenges" },
  { icon: "Target", title: "الأولويات", en: "Priorities" },
];

export const DISCOVERY_OUTPUTS = [
  { icon: "ClipboardList", title: "Requirements", desc: "متطلبات موثقة لكل قسم." },
  { icon: "Target", title: "Priorities", desc: "ضروري · مهم · مستقبلي." },
  { icon: "FileQuestion", title: "Assumptions", desc: "افتراضات مُعلنة قابلة للتحقق." },
  { icon: "HelpCircle", title: "Open Questions", desc: "نقاط تحتاج قرارًا من الفندق." },
  { icon: "Ruler", title: "Scope", desc: "نطاق المرحلة الأولى المحدد." },
  { icon: "Lock", title: "Constraints", desc: "قيود أمنية وتنظيمية وتشغيلية." },
  { icon: "Plug", title: "Integrations", desc: "تكاملات معتمدة بموافقة الأطراف." },
  { icon: "Map", title: "Next Steps", desc: "خطة واضحة للانتقال للتنفيذ." },
];

export const DELIVERY_PIPELINE = [
  { step: "01", title: "Requirements", en: "Requirements" },
  { step: "02", title: "PRD", en: "Product Spec" },
  { step: "03", title: "UX / UI", en: "Design System" },
  { step: "04", title: "Architecture", en: "Architecture" },
  { step: "05", title: "Database / API", en: "Data & API" },
  { step: "06", title: "Implementation Plan", en: "Build Plan" },
];

export const BOARD_DECISIONS = [
  "اعتماد الرؤية العامة للتحول الرقمي",
  "اعتماد النطاق التجاري النهائي",
  "تعيين ممثل أو فريق اعتماد من الفندق",
  "توفير بيانات الأنظمة والأجهزة الحالية",
  "تحديد الأولويات التشغيلية",
  "اعتماد السياسات التي سيبنى عليها النظام",
  "اعتماد التكاملات المطلوبة",
  "اعتماد خطة التنفيذ والجدول التجاري",
];

export const VISION_TAGLINE =
  "من فندق يدير عملياته رقميًا، إلى فندق يدير عملياته بذكاء.";
