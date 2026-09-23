// ---------------------------------------------------------------------------
// Northcrest Construction Group
// Central content file: brand, navigation, imagery and all page copy.
// ---------------------------------------------------------------------------

const CDN = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt";

export const img = (hash: string) => `${CDN}/${hash}`;

export const IMAGES = {
  heroSteelWorkers: img("5ccefd2018b5.jpg"),
  heroSiteManager: img("4aafa57604dc.jpg"),
  heroGlassTower: img("feca45578d76.jpeg"),
  aboutForeman: img("fd32b016b204.jpg"),
  aboutBlueprints: img("a044bf944e72.jpg"),
  aboutCrew: img("ad8af1d50688.jpg"),
  aboutTrio: img("baf883b5e961.jpg"),
  whyChooseSteel: img("57469caf53de.jpeg"),
  serviceGeneral: img("089154d212dd.jpg"),
  serviceCommercial: img("70f330a06ee1.jpg"),
  serviceResidential: img("ba40a7005199.jpg"),
  serviceIndustrial: img("80d93d2bf7c2.jpg"),
  serviceRenovation: img("c7a77b3c516c.jpg"),
  projectSkyscraper: img("ffdaae858dba.jpeg"),
  projectTownhomes: img("92d05c6dc2b7.jpg"),
  projectWarehouse: img("6148006fe32a.jpg"),
  projectBridge: img("8c7f2eeb8694.jpg"),
  projectFacade: img("95c4f5f1245d.jpg"),
  projectStaircase: img("91199d35d575.jpg"),
  teamRay: img("06ae8d4c7d11.jpg"),
  teamMiguel: img("ab6095893161.jpg"),
  teamDana: img("a291735da8bd.jpg"),
  teamChris: img("cc37180827a8.jpg"),
  ctaMeeting: img("084b71f92899.png"),
};

export const BRAND = {
  name: "Northcrest Construction Group",
  shortName: "Northcrest",
  tagline: "We build what lasts.",
  founded: 1998,
  phone: "(919) 555 0142",
  phoneHref: "tel:+19195550142",
  email: "info@northcrestcg.com",
  emailHref: "mailto:info@northcrestcg.com",
  address: "1420 Ironworks Avenue, Suite 210, Raleigh, NC 27604",
  hours: "Mon to Fri: 7:30am to 5:30pm",
  city: "Raleigh, North Carolina",
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#/" },
  { label: "About Us", href: "#/about" },
  { label: "Services", href: "#/services" },
  { label: "Projects", href: "#/projects" },
  { label: "Contact", href: "#/contact" },
];

// --------------------------------------------------------------- HOME -------

export const HERO_SLIDES = [
  {
    image: IMAGES.heroSteelWorkers,
    kicker: "General contractor in North Carolina since 1998",
    title: "We Build What Lasts",
    text: "Schools, offices, homes and warehouses across the Southeast. Planned with care, built by people who take pride in their trade, and finished on the date we promised you.",
    primaryCta: { label: "Start Your Project", href: "#/contact" },
    secondaryCta: { label: "See Our Work", href: "#/projects" },
  },
  {
    image: IMAGES.heroSiteManager,
    kicker: "One team, start to finish",
    title: "From First Sketch to Final Walkthrough",
    text: "Design, permits, construction and handover all handled under one roof. You get one contract, one schedule and one person who answers when you call.",
    primaryCta: { label: "How We Work", href: "#/about" },
    secondaryCta: { label: "Our Services", href: "#/services" },
  },
  {
    image: IMAGES.heroGlassTower,
    kicker: "Commercial construction that keeps you on schedule",
    title: "Spaces That Open on Time",
    text: "Your building opening later than planned costs you money every single week. We build aggressive but honest schedules, and then we hit them.",
    primaryCta: { label: "Get an Estimate", href: "#/contact" },
    secondaryCta: { label: "Meet the Team", href: "#/about" },
  },
];

export const HOME_FEATURES = [
  {
    icon: "calendar",
    title: "On schedule",
    text: "We plan every job backwards from your move in date and share the schedule with you from day one.",
  },
  {
    icon: "shield",
    title: "Safety without compromise",
    text: "Every crew, every site, every day. Our safety record is something we have worked hard to earn.",
  },
  {
    icon: "receipt",
    title: "Honest numbers",
    text: "The price we quote is the price you pay. If something changes, you hear it from us first.",
  },
];

export const ABOUT_PREVIEW = {
  kicker: "Welcome to Northcrest",
  title: "A Contractor Who Picks Up the Phone",
  paragraph1:
    "Northcrest started in 1998 with two carpenters, one pickup truck and a simple promise to our first client: we would treat your project like it was our own money being spent. Twenty seven years and more than six hundred projects later, that promise still runs the company.",
  paragraph2:
    "We are builders first. Our supervisors came up through the trades, most of our office staff have spent real time on site, and nobody here hides behind jargon. When you ask a question, you get a straight answer in plain language.",
  checklist: [
    "Licensed general contractor in NC, SC and VA",
    "Full design build services under one roof",
    "Dedicated project manager on every job",
    "Weekly written updates with photos",
  ],
  badgeNumber: "27",
  badgeLabel: "Years of building across the Southeast",
  signatureName: "Ray Donnelly",
  signatureRole: "President and cofounder",
};

export const STATS = [
  { value: 640, suffix: "+", label: "Projects completed" },
  { value: 27, suffix: "", label: "Years in business" },
  { value: 120, suffix: "", label: "Crew and office staff" },
  { value: 98, suffix: "%", label: "Clients who return" },
];

// ----------------------------------------------------------- SERVICES -------

export type Service = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  full: string;
  scope: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "general-contracting",
    title: "General Contracting",
    image: IMAGES.serviceGeneral,
    excerpt:
      "Full management of your build from ground break to keys in hand, with our own crews on the critical path.",
    full: "When you hire Northcrest as your general contractor, you get one company accountable for the whole job. We self perform concrete, framing and carpentry with our own crews, and we hold every trade on the site to the same standard we hold ourselves. You see the schedule, you see the numbers, and you always know what is happening on your site this week.",
    scope: [
      "Complete site management and supervision",
      "Self performed concrete, framing and finish carpentry",
      "Trusted subcontractors we have used for years",
      "Weekly progress reports with photos",
      "Permits, inspections and code compliance handled",
    ],
  },
  {
    slug: "design-build",
    title: "Design Build",
    image: IMAGES.aboutBlueprints,
    excerpt:
      "Architects, engineers and builders working as one team on one contract, so nothing falls between the cracks.",
    full: "Separate designers and builders pointing fingers at each other is the oldest problem in construction. Design build fixes it. Our in house design team works alongside our estimators from day one, so what gets drawn is buildable, on budget and matched to what you actually need. Changes happen faster because the people drawing the plans talk to the people swinging the hammers every morning.",
    scope: [
      "In house architectural design and engineering",
      "Early cost estimating during design",
      "One contract covering design and construction",
      "Value engineering without cutting quality",
      "Faster approvals and fewer surprises",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Construction",
    image: IMAGES.serviceCommercial,
    excerpt:
      "Office buildings, retail spaces and mixed use developments built to open on the date your business needs.",
    full: "A commercial project has two deadlines that matter: when you need to open and when your financing says you need to open. We build to both. Our commercial team has delivered office buildings, medical suites, restaurants and retail centers across the Triangle, and we understand tenant improvement work, landlord requirements and how to keep neighboring businesses happy while we build.",
    scope: [
      "Office buildings and corporate interiors",
      "Retail stores, restaurants and showrooms",
      "Medical and dental offices",
      "Mixed use and multi tenant buildings",
      "Tenant improvements and expansions",
    ],
  },
  {
    slug: "residential",
    title: "Residential Construction",
    image: IMAGES.serviceResidential,
    excerpt:
      "Custom homes and townhome communities built by craftsmen who sweat the details you will live with daily.",
    full: "We still frame most of our homes with our own crews, the way we did when the company was two guys and a truck. That shows up in the details: straight walls, square corners, and a house that feels solid when you close the door. Whether it is a single custom home or a forty unit townhome community, you get the same foreman attention and the same materials standards.",
    scope: [
      "Custom homes from 2,000 to 12,000 square feet",
      "Townhome and small subdivision communities",
      "Additions and second story expansions",
      "Garages, sunrooms and outdoor living",
      "Energy efficient framing packages",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial and Warehousing",
    image: IMAGES.serviceIndustrial,
    excerpt:
      "Steel buildings, distribution centers and manufacturing floors designed around how your operation actually runs.",
    full: "Industrial buildings live or die on clearance heights, floor flatness and truck circulation. We have built distribution centers, manufacturing plants and flex space across the state, and we start every project by walking your operation with you. How does freight come in? Where do the racking lines run? What does the maintenance crew need? Then we build the building around the answers.",
    scope: [
      "Distribution and fulfillment centers",
      "Steel frame warehouses up to 40 foot clear height",
      "Manufacturing facilities and plant expansions",
      "Loading docks, racking and site circulation",
      "Office build outs inside industrial shells",
    ],
  },
  {
    slug: "renovation",
    title: "Renovation and Interior Work",
    image: IMAGES.serviceRenovation,
    excerpt:
      "Occupied or vacant, big or small, we renovate buildings with as little disruption to your life as possible.",
    full: "Renovation is a different skill than new construction. Walls hide surprises, buildings are occupied, and schedules matter even more because you are living or working through the mess. Our renovation crews are selected for patience and clean workmanship. We seal work areas, protect finishes, sweep up every evening and keep your home or business running while we work around you.",
    scope: [
      "Kitchen and bathroom renovations",
      "Whole home and whole floor renovations",
      "Office refreshes done after hours if needed",
      "Structural repairs and remodels",
      "Historic building restoration work",
    ],
  },
];

// ----------------------------------------------------------- PROJECTS -------

export type Project = {
  title: string;
  category: "Commercial" | "Residential" | "Industrial" | "Infrastructure" | "Renovation";
  location: string;
  year: string;
  size: string;
  image: string;
  description: string;
};

export const PROJECT_CATEGORIES = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
  "Renovation",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Harborview Office Campus",
    category: "Commercial",
    location: "Charlotte, NC",
    year: "2024",
    size: "68,000 sq ft",
    image: IMAGES.projectSkyscraper,
    description:
      "A three building office campus delivered in 14 months, two weeks ahead of the tenant's lease commencement date.",
  },
  {
    title: "Maple Grove Townhomes",
    category: "Residential",
    location: "Cary, NC",
    year: "2023",
    size: "42 homes",
    image: IMAGES.projectTownhomes,
    description:
      "A 42 unit townhome community with shared greenspace, built in three phases so sales could stay open throughout.",
  },
  {
    title: "Eastgate Logistics Center",
    category: "Industrial",
    location: "Durham, NC",
    year: "2024",
    size: "210,000 sq ft",
    image: IMAGES.projectWarehouse,
    description:
      "Tilt wall distribution center with 36 foot clear heights, 42 dock doors and a 60 foot speed bay for staging.",
  },
  {
    title: "Cedar Run Bridge Replacement",
    category: "Infrastructure",
    location: "Greensboro, NC",
    year: "2022",
    size: "190 ft span",
    image: IMAGES.projectBridge,
    description:
      "Full replacement of a county bridge while keeping one lane of traffic open for the residents on the north side.",
  },
  {
    title: "The Ashton Building",
    category: "Commercial",
    location: "Raleigh, NC",
    year: "2023",
    size: "31,500 sq ft",
    image: IMAGES.projectFacade,
    description:
      "A mixed use building downtown with first floor retail, four floors of office and a rooftop terrace.",
  },
  {
    title: "Lakeside Villa Renewal",
    category: "Renovation",
    location: "Chapel Hill, NC",
    year: "2024",
    size: "5,800 sq ft",
    image: IMAGES.projectStaircase,
    description:
      "A full renovation of a 1990s lake home, opened up the main floor and rebuilt the staircase as the centerpiece.",
  },
];

// ------------------------------------------------------------- PROCESS ------

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "We listen first",
    text: "Sit down with you, walk the site and understand what you need, what you have spent and what worries you about the project.",
  },
  {
    number: "02",
    title: "Straight estimate",
    text: "A detailed written estimate with real line items, not a single number on a napkin. You see where every dollar goes.",
  },
  {
    number: "03",
    title: "Build with updates",
    text: "Our crews get to work. You get a weekly written update with photos and a schedule that shows exactly where things stand.",
  },
  {
    number: "04",
    title: "Walkthrough and support",
    text: "We walk the finished project together, fix our punch list fast, and back our work with a two year workmanship warranty.",
  },
];

// -------------------------------------------------------- TESTIMONIALS ------

export const TESTIMONIALS = [
  {
    quote:
      "They finished our distribution center six weeks ahead of schedule, which never happens in construction. The site was calm, organized and safe every single time I visited. I have already sent two other companies their way.",
    name: "Daniel Reyes",
    role: "Operations Director, Eastgate Freight",
    initials: "DR",
  },
  {
    quote:
      "Building a school while school is in session sounds impossible. The Northcrest crew sealed off our construction zone, worked around our calendar and the teachers honestly forgot they were there. The new wing is beautiful.",
    name: "Karen Whitfield",
    role: "Principal, Swift Creek Academy",
    initials: "KW",
  },
  {
    quote:
      "We interviewed five contractors for our renovation and Northcrest was the only one who told us something we did not want to hear. Two years later, that honesty saved us a fortune. The house is everything they promised.",
    name: "Marcus Bell",
    role: "Homeowner, Chapel Hill",
    initials: "MB",
  },
];

// ---------------------------------------------------------- WHY CHOOSE ------

export const WHY_POINTS = [
  {
    title: "Our own crews on the critical path",
    text: "Concrete, framing and carpentry are done by Northcrest employees, not whoever happened to be available that month.",
  },
  {
    title: "One project manager, one number",
    text: "You get a dedicated PM with a direct line. Not a call center, not a rotating cast of site contacts.",
  },
  {
    title: "Open book pricing",
    text: "Want to see the actual invoices? Ask. We will walk you through the numbers on any project we build.",
  },
  {
    title: "Two year workmanship warranty",
    text: "Double the industry standard. If something is not right, we come back and make it right.",
  },
];

export const PROGRESS_BARS = [
  { label: "Projects finished on schedule", value: 96 },
  { label: "Work completed by our own crews", value: 72 },
  { label: "Clients who hire us again", value: 98 },
];

// ---------------------------------------------------------------- TEAM ------

export const TEAM = [
  {
    name: "Ray Donnelly",
    role: "President and Cofounder",
    image: IMAGES.teamRay,
    bio: "Started Northcrest with a hammer and a pickup in 1998. Still walks every active site at least once a week.",
  },
  {
    name: "Miguel Santos",
    role: "Vice President of Operations",
    image: IMAGES.teamMiguel,
    bio: "Twenty years running commercial jobs. Miguel is the reason our schedules mean something.",
  },
  {
    name: "Dana Whitaker",
    role: "Head of Design Build",
    image: IMAGES.teamDana,
    bio: "Licensed architect who crossed over to the builder side. Dana leads our in house design team.",
  },
  {
    name: "Chris Okafor",
    role: "Safety Director",
    image: IMAGES.teamChris,
    bio: "Chris has kept our sites incident free for over 1,400 days and counting. He does not bend on safety.",
  },
];

// -------------------------------------------------------------- VALUES ------

export const VALUES = [
  {
    title: "Do it right",
    text: "The client may never see the framing behind the drywall, but we will know it is there. We build things we would put our own name on, because we do.",
  },
  {
    title: "Say it straight",
    text: "Bad news does not improve with age. If the schedule slips or a cost changes, you hear it from us that day, along with our plan to fix it.",
  },
  {
    title: "Own the outcome",
    text: "There is no such thing as not my job on a Northcrest site. Whatever happens on your project, we own it and we solve it.",
  },
  {
    title: "Look out for each other",
    text: "Everyone goes home in one piece, every day. We watch out for our crew, our trades and everyone who walks past our sites.",
  },
];

export const MILESTONES = [
  {
    year: "1998",
    title: "Two carpenters and a pickup",
    text: "Ray Donnelly and Tom Alvarez found Northcrest, framing houses on weekends and evenings.",
  },
  {
    year: "2004",
    title: "First commercial contract",
    text: "A 12,000 sq ft medical office in Cary. We still do service work for that same client today.",
  },
  {
    year: "2011",
    title: "Design build division opens",
    text: "We hire our first staff architect so clients could get design and construction from one team.",
  },
  {
    year: "2017",
    title: "100 employees",
    text: "Our crew passes one hundred people. We celebrate with a family cookout, as usual.",
  },
  {
    year: "2022",
    title: "First infrastructure project",
    text: "The Cedar Run bridge replacement teaches us a lot about working over water. We loved it.",
  },
  {
    year: "2025",
    title: "Charlotte office opens",
    text: "A second office to serve clients better across the western part of the Carolinas.",
  },
];

export const CERTIFICATIONS = [
  "NC General Contractor License, Unlimited",
  "SC and VA General Contractor Licensed",
  "EPA Lead Safe Certified Firm",
  "OSHA Partnership Program Participant",
  "LEED Accredited Professionals on staff",
  "Bonded and fully insured to $10M",
];

export const PROJECT_TYPES = [
  "Commercial construction",
  "Residential construction",
  "Industrial or warehouse",
  "Renovation or remodel",
  "Something else",
];

export const BUDGET_RANGES = [
  "Under $100k",
  "$100k to $500k",
  "$500k to $2M",
  "$2M to $10M",
  "Over $10M",
  "Not sure yet",
];

export const FAQS = [
  {
    q: "How early should I bring a contractor into my project?",
    a: "The earlier the better. If you bring us in before the plans are final, we can often save you more than our fee in avoided redesign and smarter material choices. Even a rough sketch is enough to start a useful conversation.",
  },
  {
    q: "Do you work on projects outside North Carolina?",
    a: "Yes. We hold unlimited licenses in North Carolina, South Carolina and Virginia, and we regularly take projects in all three states. For anything further afield, call us anyway. We partner with trusted builders in neighboring states from time to time.",
  },
  {
    q: "What does a typical project cost?",
    a: "Honest answer: it depends on too many factors to guess on a website. Custom homes generally start around $400k, commercial fit ups around $150 per square foot, and industrial buildings vary widely with site work. Give us a call and we will give you a real range based on real numbers.",
  },
  {
    q: "How do you keep projects on schedule?",
    a: "Long lead materials are ordered before ground break, our own crews handle the critical path work, and the schedule is reviewed every Monday morning with the whole team. When something does slip, we tell you the same day and show you the plan to recover the time.",
  },
];

// ------------------------------------------------------------ CTA / MISC ----

export const CTA_BANNER = {
  kicker: "Ready when you are",
  title: "Got a project in mind? Let's talk it through.",
  text: "Call us, email us, or send the form. A real person who knows construction will get back to you within one business day.",
};
