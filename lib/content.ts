export const nav = [
  { href: "#plan", label: "Plan" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#coaching", label: "Coaching" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
] as const;

export const hero = {
  eyebrow: "Liam Collins",
  title: "Run. Lift. Live.",
  line: "A training plan should fit your life.",
  lineTwo: "Not the other way around.",
  body: "Personalised coaching to help you run further, get faster, get stronger or change your body — built around the life you actually live.",
  cta: "Start coaching",
};

export const plan = {
  titleLead: "The plan",
  titleRest: "is the easy bit.",
  paragraphs: [
    "You can find a plan for almost anything. A faster 5K. Your first half marathon. Losing body fat. Building muscle. Getting stronger.",
    "The difficult bit is making that plan work around you.",
    "Your running and gym training shouldn’t exist separately either. They’re programmed together, with nutrition to support both.",
    "Then life happens. You slept badly. Work got stressful. You missed a session. Your calf feels a bit weird. You’ve got a meal out this weekend.",
    "That’s where coaching comes in. I build your training and nutrition around your goals, then we adapt it together as your life, performance and priorities change.",
    "The plan matters. But the person following it matters more.",
  ],
};

export const steps = [
  {
    number: "01",
    title: "Tell me where you’re at",
    body: "Your goals, your training history, your lifestyle and what you’re struggling with. We start with the person before we build the plan.",
    image: {
      src: "/photos/conversation.jpg",
      alt: "Liam walking the track with an athlete",
      position: "center 42%",
    },
  },
  {
    number: "02",
    title: "We build your training",
    body: "Running and gym work programmed together, with nutrition guidance to support your performance, body composition and goals.",
    image: {
      src: "/photos/session.jpg",
      alt: "A coaching group gathered on the running track",
      position: "center 42%",
      aspect: "aspect-[5/4]",
    },
  },
  {
    number: "03",
    title: "We adapt as we go",
    body: "You train. We communicate. I see how you’re responding and make changes when they're needed. No rigid plans. No starting again every Monday. Just coaching that moves with you.",
    image: {
      src: "/photos/track-session.jpg",
      alt: "Athletes mid-session on the track",
      position: "center 40%",
    },
  },
] as const;

export const tiers = [
  {
    id: "programming",
    name: "Programming",
    price: "£80",
    period: "/ month",
    popular: false,
    lead: "",
    summary:
      "A self-sufficient option for people who want the structure without needing regular coaching. You’ll have somewhere to track your training and progress, while I take care of the programming behind it.",
    includes: [
      "Personalised running + gym programming",
      "Nutrition & fuelling guidance",
      "Training & progress tracking",
      "Programme adjustments when needed",
      "Monthly coaching call",
      "Message support",
    ],
    note: "This also works as a natural next step for clients who have worked with me, built confidence and are ready to take more ownership of their training.",
    cta: "Get started",
  },
  {
    id: "coaching",
    name: "Coaching",
    price: "£150",
    period: "/ month",
    popular: true,
    summary: "For most people, this is where I recommend starting.",
    lead: "Everything in Programming, plus:",
    includes: [
      "Weekly check-ins",
      "Progress, performance & body composition tracking",
      "More regular programme adjustments",
      "Greater accountability & coach contact",
      "Form feedback & training support",
    ],
    note: "Ideal for fat loss, body composition, building better habits, performance goals or anyone who benefits from regular accountability.",
    cta: "Start coaching",
  },
  {
    id: "bespoke",
    name: "1:1 Bespoke",
    price: "£250",
    period: "/ month",
    popular: false,
    summary: "The highest level of coaching and access I offer.",
    lead: "Everything in Coaching, plus:",
    includes: [
      "Weekly 1:1 coaching call",
      "More hands-on training & nutrition support",
      "Priority communication",
      "Closer management of your training, recovery and progress",
    ],
    note: "Best suited to more complex goals, race preparation, performance-focused training or anyone who wants a much more involved coaching relationship.",
    cta: "Apply for 1:1",
  },
] as const;

export type CoachingLevel = (typeof tiers)[number]["id"];

export const coachingFlexibility =
  "Your coaching can change as your needs do. Move between levels month to month depending on your goals, how much support you need and what life looks like at the time.";

export const stories = [
  {
    kicker: "First half marathon",
    metric: "Completed",
    quote: "I never thought I'd actually be able to run this distance.",
    image: "Race / finish-line photo",
    photo: {
      src: "/photos/pack-run.jpg",
      alt: "A group running together on the track",
      position: "center 38%",
    },
  },
  {
    kicker: "Half marathon PB",
    metric: "1:43 → 1:36",
    quote:
      "The biggest difference was finally having my running and strength training working together.",
    image: "Race photo + result",
  },
  {
    kicker: "First marathon",
    metric: "Completed",
    quote:
      "Having the plan adjusted around work and how I was actually feeling made such a difference.",
    image: "Finish-line photo + race result",
  },
] as const;

export const transformations = Array.from({ length: 10 }, (_, index) => ({
  label: `Before & after ${String(index + 1).padStart(2, "0")}`,
}));

export const about = {
  title: "Hi, I’m Liam.",
  paragraphs: [
    "I’ve been a Personal Trainer since 2013 and have been coaching people online since 2021.",
    "My background is in Sports & Exercise Science, strength training and helping normal people get results without making fitness their entire personality.",
    "Then, in 2026, I did something a bit stupid. After running just 29 times in the whole of 2025, I decided to run at least 5K every single day for a year. And it completely changed the way I coach.",
    "I’ve since run a 1:35 half marathon, a sub-20 5K and completed a 50K training run, all while continuing the run streak every single day. I’ve covered thousands of kilometres and learned first-hand what happens when you try to balance running, lifting, recovery, work, relationships and an actual life.",
    "It reinforced something I’d already learned from years of coaching: the best programme isn’t the most perfect one on paper. It’s the one that works for the person actually doing it.",
    "That’s what my coaching is built around now. Whether you want to lose body fat, build muscle, run your first 5K, chase a marathon PB or just become a fitter, stronger version of yourself, we’ll build your training around your goal and the life you actually have.",
  ],
  credentials: [
    "BSc Sports & Exercise Science. 1st Class Honors",
    "Personal Trainer & Online Coach.",
  ],
  stats: [
    { value: "2013", label: "Personal trainer" },
    { value: "1:35", label: "Half marathon" },
    { value: "Sub-20", label: "5K" },
  ],
  portrait: {
    src: "/photos/liam.jpg",
    alt: "Liam Collins on the track",
    position: "center 30%",
  },
};

export const whoItsFor = [
  "You want to start running, but don’t know where to begin.",
  "You already run, but want to go further or get faster.",
  "You’re training for a 5K, 10K, half marathon, marathon or beyond.",
  "You love the gym, but want to add running without sacrificing your strength or muscle.",
  "You’re a runner who knows you should probably be doing more in the gym.",
  "You want to lose body fat, build muscle or simply feel better in your body.",
  "You’ve tried following plans before, but struggle when work, life or motivation gets in the way.",
  "Or maybe you just want to become fitter, stronger and more capable without making fitness your entire life.",
];

export const faqs = [
  {
    question: "Do I need to be a runner?",
    answer:
      "Not at all. You might be training for a marathon, starting your first 5K or have absolutely no interest in running. Your coaching is built around your goals.",
  },
  {
    question: "Do I need to train in a gym?",
    answer:
      "Not necessarily. If strength training is part of your plan, we’ll build it around the equipment and environment you have available.",
  },
  {
    question: "Is nutrition included?",
    answer:
      "Yes. Nutrition and fuelling guidance can be built around your goals, whether that’s improving performance, losing body fat, building muscle or simply eating better around your training.",
  },
  {
    question: "How will I access my programme?",
    answer:
      "Your training is delivered through an app where you’ll be able to see your sessions, track your training and keep everything in one place.",
  },
  {
    question: "Can I change my level of coaching?",
    answer:
      "Yes. You can move between Programming, Coaching and 1:1 Bespoke as your goals and the level of support you need change.",
  },
  {
    question: "How long do I need to sign up for?",
    answer:
      "I ask clients to commit to a minimum of three months. Real progress takes time, and I want to give the coaching a genuine chance to work. After that, I ask for 30 days’ notice if you decide to leave. I also understand that life and financial circumstances can change. If something happens, talk to me and we’ll work out the best way forward.",
  },
] as const;

export const goals = [
  "Lose fat",
  "Build muscle",
  "Get stronger",
  "Run further",
  "Get faster",
  "Race prep",
  "Feel better",
  "Not sure",
] as const;

export const finalCta = {
  title: "Your goal. Your life. Your plan.",
  body: "You don’t need another perfect plan. You need one that works for you.",
  kicker: "Let’s build it.",
  cta: "Start coaching",
};

export const instagramUrl = "https://instagram.com";

export function levelLabel(id: string) {
  return tiers.find((tier) => tier.id === id)?.name ?? id;
}
