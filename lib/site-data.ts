import {
  HabitItem,
  PrefixItem,
  QuizQuestion,
  SIUnit,
  StatItem,
  TimelineEvent,
  WhyTab,
} from "@/lib/types";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why", label: "Why Metric?" },
  { href: "/units", label: "SI Unit Explorer" },
  { href: "/history", label: "US History" },
  { href: "/action", label: "Take Action" },
  { href: "/quiz", label: "Quiz" },
] as const;

export const homeStats: StatItem[] = [
  {
    id: "countries",
    value: "195 countries",
    label: "use the metric system",
    detail: "The US, Liberia, and Myanmar are the primary holdouts.",
    citation: {
      label: "CIA World Factbook",
      url: "https://www.cia.gov/the-world-factbook/field/measurement-system/",
    },
  },
  {
    id: "trade",
    value: "~97%",
    label: "of world trade uses SI-aligned standards",
    detail: "Global supply chains and technical standards are overwhelmingly SI-based.",
    citation: {
      label: "BIPM / International System of Units",
      url: "https://www.bipm.org/en/measurement-units",
      note: "Industry estimate used in advocacy communications.",
    },
  },
  {
    id: "nasa",
    value: "1999: $327M",
    label: "Mars Climate Orbiter was lost",
    detail: "A unit mismatch between teams led to mission failure.",
    citation: {
      label: "NASA MCO Mishap Report",
      url: "https://llis.nasa.gov/lesson/900",
    },
  },
  {
    id: "cost",
    value: "~$17B/year",
    label: "estimated US dual-system overhead",
    detail: "Estimated inefficiency from maintaining imperial + metric workflows.",
    citation: {
      label: "US Metric Association",
      url: "https://usma.org/",
      note: "Estimate synthesized from trade and manufacturing analyses.",
    },
  },
];

export const whyTabs: WhyTab[] = [
  {
    key: "science",
    label: "Science",
    summary: "Research scales faster when every lab, paper, and instrument speaks the same unit language.",
    cards: [
      {
        id: "science-1",
        icon: "FlaskConical",
        title: "Universal Language",
        description:
          "SI lets scientists publish once and collaborate everywhere. It removes conversion ambiguity across borders and disciplines.",
      },
      {
        id: "science-2",
        icon: "Atom",
        title: "Base Units That Scale",
        description:
          "Seven SI base units anchor modern measurement. Derived units then stay coherent from nanotech to astronomy.",
      },
      {
        id: "science-3",
        icon: "Binary",
        title: "Decimal Simplicity",
        description:
          "Powers of ten make calculations faster and less error-prone. Moving between millimeters and kilometers is algorithmically trivial.",
      },
    ],
  },
  {
    key: "commerce",
    label: "Commerce",
    summary: "Using one system across design, sourcing, and logistics cuts waste and unlocks global market speed.",
    cards: [
      {
        id: "commerce-1",
        icon: "Wallet",
        title: "Dual-System Cost",
        description:
          "Maintaining two measurement systems introduces tooling, documentation, and training overhead that compounds yearly.",
      },
      {
        id: "commerce-2",
        icon: "Ship",
        title: "Trade Friction",
        description:
          "Exporters often re-spec products and labels for global markets. Native SI workflows reduce handoffs and delays.",
      },
      {
        id: "commerce-3",
        icon: "Factory",
        title: "Manufacturing Errors",
        description:
          "Mixed-unit production pipelines increase mismatch risk. Standard SI dimensions simplify QA and reduce rework.",
      },
    ],
  },
  {
    key: "education",
    label: "Education",
    summary: "Students should build intuition once, not split cognitive effort between parallel systems.",
    cards: [
      {
        id: "education-1",
        icon: "GraduationCap",
        title: "Lower Cognitive Load",
        description:
          "Students currently memorize duplicated unit systems in early grades. A single standard keeps learning time focused on concepts.",
      },
      {
        id: "education-2",
        icon: "BookOpenText",
        title: "Clearer STEM Pathways",
        description:
          "Most higher-level STEM material is already SI first. Early alignment reduces transition friction for labs and engineering courses.",
      },
      {
        id: "education-3",
        icon: "BrainCircuit",
        title: "Confidence Through Consistency",
        description:
          "Consistent units improve estimation skills and mental math. That confidence carries into science fairs, coding, and robotics.",
      },
    ],
  },
  {
    key: "safety",
    label: "Safety",
    summary: "When measurement is inconsistent, people and missions absorb the consequences.",
    cards: [
      {
        id: "safety-1",
        icon: "Rocket",
        title: "Mars Climate Orbiter",
        description:
          "The 1999 mission loss remains the most famous unit mismatch failure. Mixed standards in critical systems can be catastrophic.",
      },
      {
        id: "safety-2",
        icon: "Cross",
        title: "Medical Dosing Risk",
        description:
          "Medication instructions depend on precise, standardized units. Metric-first dosing reduces transcription and interpretation errors.",
      },
      {
        id: "safety-3",
        icon: "Plane",
        title: "Transport Incident Prevention",
        description:
          "Aviation and logistics rely on strict numeric discipline. Reducing conversion steps helps teams avoid avoidable mistakes.",
      },
    ],
  },
];

export const metricChartData = [
  { name: "Countries Using Metric", value: 195 },
  { name: "Countries Not Fully Metric", value: 3 },
];

export const siBaseUnits: SIUnit[] = [
  {
    id: "meter",
    name: "meter",
    symbol: "m",
    measures: "length",
    example: "A dollar bill is about 156 mm long.",
    definitionYear: 1983,
  },
  {
    id: "kilogram",
    name: "kilogram",
    symbol: "kg",
    measures: "mass",
    example: "A liter of water has a mass close to 1 kilogram.",
    definitionYear: 2019,
  },
  {
    id: "second",
    name: "second",
    symbol: "s",
    measures: "time",
    example: "A hummingbird can flap its wings around 50 times per second.",
    definitionYear: 1967,
  },
  {
    id: "ampere",
    name: "ampere",
    symbol: "A",
    measures: "electric current",
    example: "A phone charger commonly outputs around 2 amperes.",
    definitionYear: 2019,
  },
  {
    id: "kelvin",
    name: "kelvin",
    symbol: "K",
    measures: "thermodynamic temperature",
    example: "Room temperature is roughly 293 kelvin.",
    definitionYear: 2019,
  },
  {
    id: "mole",
    name: "mole",
    symbol: "mol",
    measures: "amount of substance",
    example: "One mole contains exactly 6.02214076×10²³ entities.",
    definitionYear: 2019,
  },
  {
    id: "candela",
    name: "candela",
    symbol: "cd",
    measures: "luminous intensity",
    example: "A typical candle emits luminous intensity near one candela.",
    definitionYear: 1979,
  },
];

export const prefixItems: PrefixItem[] = [
  {
    id: "nano",
    name: "nano",
    symbol: "n",
    factor: "10??",
    example: "Modern chip features are measured in nanometers.",
  },
  {
    id: "micro",
    name: "micro",
    symbol: "µ",
    factor: "10?6",
    example: "A human red blood cell is about 7 to 8 micrometers wide.",
  },
  {
    id: "milli",
    name: "milli",
    symbol: "m",
    factor: "10?³",
    example: "A raindrop volume is often a few milliliters.",
  },
  {
    id: "centi",
    name: "centi",
    symbol: "c",
    factor: "10?²",
    example: "Most rulers use centimeter markings.",
  },
  {
    id: "kilo",
    name: "kilo",
    symbol: "k",
    factor: "10³",
    example: "A 5K race is 5 kilometers.",
  },
  {
    id: "mega",
    name: "mega",
    symbol: "M",
    factor: "106",
    example: "City populations are often expressed in megascale counts.",
  },
  {
    id: "giga",
    name: "giga",
    symbol: "G",
    factor: "10?",
    example: "Internet speeds are sold in gigabits per second.",
  },
  {
    id: "tera",
    name: "tera",
    symbol: "T",
    factor: "10¹²",
    example: "Hard drives are commonly sized in terabytes.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1866",
    title: "Metric System Legalized in the United States",
    description:
      "Congress passed legislation making metric units legal for use in commerce across the country.",
    impact: "positive",
  },
  {
    year: "1875",
    title: "US Signs the Metre Convention",
    description:
      "The United States joined the international treaty coordinating standards for measurement worldwide.",
    impact: "positive",
  },
  {
    year: "1975",
    title: "Metric Conversion Act",
    description:
      "President Gerald Ford signed a law encouraging voluntary metric conversion and establishing national coordination.",
    impact: "positive",
  },
  {
    year: "1982",
    title: "US Metric Board Disbanded",
    description:
      "The board tasked with metric transition support was dissolved, slowing momentum for standardization.",
    impact: "negative",
  },
  {
    year: "1999",
    title: "Mars Climate Orbiter Loss",
    description:
      "A metric-imperial mismatch between teams contributed to the spacecraft's destruction during orbital insertion.",
    impact: "negative",
  },
  {
    year: "2023 - Present",
    title: "Renewed Public Advocacy",
    description:
      "Educators, engineers, and policy advocates are pushing for practical metric-first adoption in schools and industry.",
    impact: "neutral",
  },
];

export const dailyMetricHabits: HabitItem[] = [
  {
    id: "habit-cm",
    label: "Measure household items in centimeters",
    description: "Use cm or m for daily dimensions instead of inches or feet.",
  },
  {
    id: "habit-kg",
    label: "Track body weight in kilograms",
    description: "Switch fitness logs and goals to kg units.",
  },
  {
    id: "habit-celsius",
    label: "Read weather in Celsius",
    description: "Check and discuss temperature in °C first.",
  },
  {
    id: "habit-liters",
    label: "Use liters for beverages and cooking",
    description: "Practice measuring liquids in mL and L.",
  },
  {
    id: "habit-distance",
    label: "Estimate travel distances in kilometers",
    description: "Convert common routes and learn quick km intuition.",
  },
  {
    id: "habit-speed",
    label: "Think in km/h for speed",
    description: "Mentally convert common mph values to km/h.",
  },
];

export const representativeLetterTemplate = `Subject: Support practical SI (metric) adoption in the United States

Dear Representative,

I am writing as your constituent to encourage practical, phased adoption of the International System of Units (SI) across education, manufacturing, labeling, and public communication.

The United States already uses metric in many scientific, medical, military, and industrial contexts. A clearer national strategy would reduce conversion errors, lower trade friction, and better prepare students for STEM careers in a global economy.

I support efforts that:
- Increase metric-first instruction in schools
- Encourage dual-labeling with a metric-first default
- Expand federal guidance for SI use in technical standards and procurement

Please support policies that make measurement in the US safer, simpler, and globally aligned.

Thank you for your service.

Sincerely,
[Your Name]
[City, State]`;

export const defaultShareMessage =
  "The US is one of the last countries not fully using SI. Metric adoption means fewer errors, better STEM outcomes, and smoother global trade. Learn more at MetricUS.";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "How many centimeters are in one meter?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "100" },
      { id: "c", text: "1000" },
      { id: "d", text: "12" },
    ],
    correctOptionId: "b",
    explanation: "A meter equals 100 centimeters in the SI decimal structure.",
  },
  {
    id: "q2",
    prompt: "Which group is most often cited as not fully metric today?",
    options: [
      { id: "a", text: "US, Liberia, Myanmar" },
      { id: "b", text: "US, Canada, UK" },
      { id: "c", text: "US, Japan, Australia" },
      { id: "d", text: "US, France, Germany" },
    ],
    correctOptionId: "a",
    explanation: "These three are commonly referenced as the main holdouts.",
  },
  {
    id: "q3",
    prompt: "What was a major cause of the Mars Climate Orbiter loss in 1999?",
    options: [
      { id: "a", text: "Fuel leak" },
      { id: "b", text: "Solar flare" },
      { id: "c", text: "Unit mismatch" },
      { id: "d", text: "Launch delay" },
    ],
    correctOptionId: "c",
    explanation: "One team used imperial units while another expected metric values.",
  },
  {
    id: "q4",
    prompt: "What SI prefix represents one-thousandth (10?³)?",
    options: [
      { id: "a", text: "kilo" },
      { id: "b", text: "milli" },
      { id: "c", text: "micro" },
      { id: "d", text: "tera" },
    ],
    correctOptionId: "b",
    explanation: "Milli means one-thousandth of a base unit.",
  },
  {
    id: "q5",
    prompt: "Which SI base unit measures thermodynamic temperature?",
    options: [
      { id: "a", text: "Celsius" },
      { id: "b", text: "Fahrenheit" },
      { id: "c", text: "Kelvin" },
      { id: "d", text: "Joule" },
    ],
    correctOptionId: "c",
    explanation: "Kelvin (K) is the SI base unit for temperature.",
  },
  {
    id: "q6",
    prompt: "Which US law encouraged voluntary metric conversion in 1975?",
    options: [
      { id: "a", text: "Weights and Measures Act" },
      { id: "b", text: "Metric Conversion Act" },
      { id: "c", text: "STEM Alignment Act" },
      { id: "d", text: "National Standards Act" },
    ],
    correctOptionId: "b",
    explanation: "The Metric Conversion Act of 1975 set a voluntary transition direction.",
  },
  {
    id: "q7",
    prompt: "How many grams are in one kilogram?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "100" },
      { id: "c", text: "500" },
      { id: "d", text: "1000" },
    ],
    correctOptionId: "d",
    explanation: "One kilogram equals 1000 grams.",
  },
  {
    id: "q8",
    prompt: "Which reason best explains why SI helps global commerce?",
    options: [
      { id: "a", text: "It removes all regulations" },
      { id: "b", text: "It standardizes specs across markets" },
      { id: "c", text: "It eliminates shipping costs" },
      { id: "d", text: "It guarantees instant customs clearance" },
    ],
    correctOptionId: "b",
    explanation: "A shared unit system reduces translation and conversion friction.",
  },
  {
    id: "q9",
    prompt: "Which is an SI base unit for amount of substance?",
    options: [
      { id: "a", text: "mole" },
      { id: "b", text: "liter" },
      { id: "c", text: "newton" },
      { id: "d", text: "watt" },
    ],
    correctOptionId: "a",
    explanation: "The mole (mol) is the SI base unit for amount of substance.",
  },
  {
    id: "q10",
    prompt: "What happened in US metric policy in 1982?",
    options: [
      { id: "a", text: "Metric use was banned" },
      { id: "b", text: "US joined the Metre Convention" },
      { id: "c", text: "US Metric Board was disbanded" },
      { id: "d", text: "Metric became mandatory nationwide" },
    ],
    correctOptionId: "c",
    explanation: "The disbanding reduced federal coordination on metric transition.",
  },
];

