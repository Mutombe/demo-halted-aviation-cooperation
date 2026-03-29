export const designTokens = {
  heroStyle: "parallax",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "light",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "circuit",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Halted Aviation Cooperation",
    legalName: "Halted Aviation Cooperation (Pvt) Ltd",
    tagline: "Elevating Africa's Airspace",
    description:
      "Pioneering aviation services, drone technology, and aerospace solutions across Zimbabwe and Southern Africa. From flight operations to UAV mapping, we push boundaries.",
    phone: "",
    phoneRaw: "",
    whatsappNumber: "",
    email: "info@haltedaviation.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 19,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "300+",
    employees: "45+",
    coordinates: { lat: -17.9318, lng: 31.0922 },
    hours: [
      { day: "Monday - Friday", time: "7:30 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0922!3d-17.9318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU1JzU0LjUiUyAzMcKwMDUnMzEuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "halted-aviation-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Halted",
    logoLine2: "Aviation",
  },

  hero: {
    badge: "Zimbabwe's Aviation Innovators",
    titleParts: [
      { text: "Elevating " },
      { text: "Africa's", highlight: true },
      { text: " Airspace" },
    ],
    subtitle:
      "From drone surveying and aerial mapping to flight operations and aerospace consulting, we deliver cutting-edge aviation solutions across Southern Africa.",
    ctaPrimary: "Discuss Your Mission",
    ctaSecondary: "Our Capabilities",
    trustBadge: "CAAZ Licensed",
    backgroundImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
    backgroundAlt:
      "Professional drone flying above landscape at golden hour",
  },

  stats: [
    { number: "300+", label: "Missions Completed" },
    { number: "4.8", label: "Client Rating" },
    { number: "9+", label: "Years Operating" },
    { number: "45+", label: "Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "NavigationArrow",
      title: "Drone Surveying",
      desc: "High-resolution aerial surveys and photogrammetry for mining, agriculture, construction, and environmental monitoring.",
    },
    {
      iconName: "Eye",
      title: "Aerial Inspection",
      desc: "Infrastructure inspection using advanced UAV platforms for power lines, pipelines, and telecom towers.",
    },
    {
      iconName: "Target",
      title: "Precision Mapping",
      desc: "LiDAR and photogrammetric mapping delivering centimeter-accurate 3D terrain models and orthomosaics.",
    },
    {
      iconName: "Briefcase",
      title: "Aviation Consulting",
      desc: "Regulatory compliance, airspace management, and operational setup for commercial drone and aviation enterprises.",
    },
    {
      iconName: "GraduationCap",
      title: "Pilot Training",
      desc: "CAAZ-approved remote pilot license training for commercial drone operators across all weight categories.",
    },
    {
      iconName: "Wrench",
      title: "Fleet Maintenance",
      desc: "Professional servicing, repair, and calibration of commercial drone platforms and avionics systems.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      title: "Masvingo Solar Farm Survey",
      category: "Aerial Surveying",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
      title: "Kariba Dam Inspection",
      category: "Infrastructure",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800",
      title: "Great Dyke Geological Mapping",
      category: "Mining",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Precision from " },
      { text: "Above", highlight: true },
      { text: ", Excellence Below" },
    ],
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
    imageAlt:
      "Professional drone operator in the field with enterprise UAV",
    experienceYears: "9+",
    experienceLabel: "Years of Operations",
    points: [
      {
        title: "CAAZ Certified",
        desc: "Fully licensed by the Civil Aviation Authority of Zimbabwe with all required operational permits and insurance.",
      },
      {
        title: "Military-Grade Precision",
        desc: "Our sensor payloads and processing pipelines deliver sub-centimeter accuracy for critical mapping applications.",
      },
      {
        title: "Rapid Deployment",
        desc: "Operational teams can be airborne within 48 hours of mission briefing anywhere in Zimbabwe.",
      },
      {
        title: "Data Security",
        desc: "All flight data and deliverables are encrypted, securely stored, and handled per international aviation data standards.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1920",
    backgroundAlt:
      "Drone silhouette against dramatic sunset sky",
    titleParts: [
      { text: "Ready to See Your Project " },
      { text: "From Above", highlight: true },
      { text: "?" },
    ],
    subtitle:
      "Whether you need aerial surveying, infrastructure inspection, or a complete drone operations setup, our team is ready for your mission.",
    ctaPrimary: "Request a Mission Brief",
    whatsappText:
      "Hello Halted Aviation, I would like to discuss a drone or aviation project.",
  },

  homeTestimonials: [
    {
      name: "Farai Chikwanha",
      role: "Chief Surveyor, Zimgeo Surveys",
      text: "Halted Aviation's drone surveying cut our topographical survey time from 3 weeks to 3 days. The accuracy of their LiDAR data exceeded expectations.",
      rating: 5,
    },
    {
      name: "Nyasha Matimba",
      role: "Project Manager, ZESA Holdings",
      text: "Their aerial inspection of our transmission lines identified 47 fault points we could not have found from ground-based inspection. Exceptional work.",
      rating: 5,
    },
    {
      name: "Tamuka Dube",
      role: "Mine Manager, Hwange Colliery",
      text: "Monthly volumetric surveys with pinpoint accuracy. Halted Aviation has become an essential part of our mine planning workflow.",
      rating: 4,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Pioneering " },
      { text: "Aviation", highlight: true },
      { text: " in Zimbabwe" },
    ],
    heroSubtitle:
      "Since 2015, Halted Aviation Cooperation has been at the forefront of commercial drone operations and aerospace innovation in Southern Africa.",
    storyImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    storyImageAlt:
      "Halted Aviation team preparing drone for a mapping mission",
    storyProjectCount: "300+",
    storyProjectLabel: "Completed Missions",
    storyTitle: "From a Passion for Flight to an Industry Leader",
    storyParagraphs: [
      "Halted Aviation Cooperation was founded in Harare by a team of aviation enthusiasts and engineers who saw the transformative potential of drone technology for African industries.",
      "Starting with a single survey drone, we systematically built capability across aerial mapping, infrastructure inspection, precision agriculture, and pilot training. Our investment in enterprise-grade platforms and processing software set us apart from the start.",
      "Today we operate a fleet of 20+ commercial UAV platforms, employ 45 specialists including licensed pilots, GIS analysts, and avionics engineers, and have completed over 300 missions across Zimbabwe, Zambia, Mozambique, and Botswana.",
    ],
    mission:
      "To accelerate African development through innovative aviation technology, delivering aerial intelligence that empowers smarter decisions in mining, agriculture, infrastructure, and environmental management.",
    vision:
      "To be Southern Africa's most trusted aviation technology partner, setting the standard for safety, precision, and innovation in commercial drone operations and aerospace services.",
    values: [
      {
        iconName: "ShieldCheck",
        title: "Safety First",
        desc: "Aviation safety is non-negotiable. Every mission follows strict CAAZ protocols and international best practice.",
      },
      {
        iconName: "Trophy",
        title: "Precision",
        desc: "We pursue the highest data accuracy standards because our clients' decisions depend on our deliverables.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We continuously invest in the latest platforms, sensors, and processing technology to stay ahead.",
      },
      {
        iconName: "Handshake",
        title: "Client Partnership",
        desc: "We embed with client teams to understand their challenges and deliver tailored aerial solutions.",
      },
      {
        iconName: "Heart",
        title: "Environmental Stewardship",
        desc: "Drone technology reduces environmental impact compared to traditional survey and inspection methods.",
      },
      {
        iconName: "Users",
        title: "Knowledge Transfer",
        desc: "We train local teams to operate and maintain drone technology, building long-term capability in Africa.",
      },
    ],
    team: [
      {
        name: "Tawanda Halsted",
        role: "Managing Director",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Chipo Mukwena",
        role: "Chief Pilot / Head of Operations",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Blessing Nyathi",
        role: "Senior GIS Analyst",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Kudakwashe Mpofu",
        role: "Avionics Engineer",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2015",
        title: "Company Founded",
        desc: "Halted Aviation Cooperation established in Harare as a commercial drone services company.",
      },
      {
        year: "2017",
        title: "CAAZ Certification",
        desc: "Received full commercial drone operator certification from the Civil Aviation Authority of Zimbabwe.",
      },
      {
        year: "2019",
        title: "Mining Sector Breakthrough",
        desc: "Awarded first multi-year volumetric survey contract with a major platinum mining operation.",
      },
      {
        year: "2021",
        title: "LiDAR Capability",
        desc: "Added LiDAR survey platform to our fleet, enabling forestry, power line, and terrain mapping.",
      },
      {
        year: "2023",
        title: "Regional Expansion",
        desc: "Extended operations to Zambia, Mozambique, and Botswana with cross-border flight permits.",
      },
      {
        year: "2025",
        title: "300+ Missions",
        desc: "Surpassed 300 completed missions across mining, energy, agriculture, and infrastructure sectors.",
      },
    ],
    ctaTitle: "Ready to Take Your Project Airborne?",
    ctaSubtitle:
      "Partner with us for aerial surveying, inspection, or drone operations consulting.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Aviation " },
      { text: "Solutions", highlight: true },
      { text: " That Deliver" },
    ],
    heroSubtitle:
      "Six specialized service areas combining cutting-edge drone technology with deep aviation expertise to serve Zimbabwe's key industries.",
    items: [
      {
        iconName: "NavigationArrow",
        title: "Drone Surveying",
        slug: "drone-surveying",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900",
        desc: "High-resolution aerial surveys using photogrammetry and LiDAR for mining, construction, agriculture, and environmental applications. Deliverables include orthomosaics, DSMs, DTMs, and volumetric calculations.",
        features: [
          "Photogrammetric and LiDAR surveys",
          "Volumetric stockpile measurement",
          "Topographical mapping",
          "Agricultural crop health monitoring (NDVI)",
          "Environmental baseline surveys",
          "Progress monitoring for construction sites",
        ],
      },
      {
        iconName: "Eye",
        title: "Aerial Inspection",
        slug: "aerial-inspection",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900",
        desc: "Advanced UAV-based inspection of infrastructure assets including power lines, pipelines, telecom towers, bridges, and solar installations. Reduces risk and cost versus manual inspection.",
        features: [
          "High-voltage power line inspection",
          "Pipeline corridor monitoring",
          "Telecom tower structural assessment",
          "Bridge and dam visual inspection",
          "Solar panel thermal imaging",
          "Wind turbine blade inspection",
        ],
      },
      {
        iconName: "Target",
        title: "Precision Mapping",
        slug: "precision-mapping",
        image:
          "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=900",
        desc: "Centimeter-accurate 3D mapping using multi-spectral, thermal, and LiDAR sensors. GIS integration and custom deliverables for engineering, planning, and environmental analysis.",
        features: [
          "LiDAR point cloud generation",
          "3D terrain and surface models",
          "GIS data integration and analysis",
          "Cadastral boundary mapping",
          "Flood risk and watershed modeling",
          "Vegetation and land use classification",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Aviation Consulting",
        slug: "aviation-consulting",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900",
        desc: "Expert advisory for organizations establishing commercial drone operations. Regulatory compliance, airspace management, operational manuals, and safety management systems.",
        features: [
          "CAAZ regulatory compliance guidance",
          "Operations manual development",
          "Safety management system (SMS) setup",
          "Airspace risk assessment",
          "Insurance and liability advisory",
          "Fleet procurement consulting",
        ],
      },
      {
        iconName: "GraduationCap",
        title: "Pilot Training",
        slug: "pilot-training",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900",
        desc: "CAAZ-approved Remote Pilot License (RPL) training for commercial drone operators. Ground school, flight school, and examination preparation for all UAV weight categories.",
        features: [
          "Remote Pilot License (RPL) course",
          "Ground school theory and exams",
          "Practical flight training (multi-rotor and fixed-wing)",
          "Night operations endorsement",
          "BVLOS operations endorsement",
          "Refresher and recurrency training",
        ],
      },
      {
        iconName: "Wrench",
        title: "Fleet Maintenance",
        slug: "fleet-maintenance",
        image:
          "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=900",
        desc: "Professional servicing, repair, and calibration of commercial drone platforms. Preventive maintenance programs and warranty-backed repairs for DJI, senseFly, and custom UAVs.",
        features: [
          "Scheduled preventive maintenance",
          "Motor and ESC replacement",
          "Gimbal and camera calibration",
          "Firmware updates and configuration",
          "Battery health monitoring and cycling",
          "Airframe repair and modification",
        ],
      },
    ],
    ctaTitle: "Need a Tailored Aviation Solution?",
    ctaSubtitle:
      "Every mission is unique. Contact us to build a customized aerial operations plan for your project.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Missions That " },
      { text: "Matter", highlight: true },
    ],
    heroSubtitle:
      "Explore our portfolio of aerial surveying, inspection, and mapping missions across Zimbabwe and Southern Africa.",
    categories: [
      "All",
      "Aerial Surveying",
      "Infrastructure",
      "Mining",
      "Agriculture",
      "Environmental",
    ],
    items: [
      {
        id: 1,
        title: "Masvingo Solar Farm Survey",
        category: "Aerial Surveying",
        location: "Masvingo",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        desc: "Complete topographical survey and thermal inspection of a 50MW solar installation. Identified 23 underperforming panels and generated a precision terrain model for Phase 2 expansion.",
        services: ["Drone Surveying", "Precision Mapping"],
      },
      {
        id: 2,
        title: "Kariba Dam Wall Inspection",
        category: "Infrastructure",
        location: "Lake Kariba",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
        desc: "High-resolution visual and thermal inspection of the dam wall surface. Our drones accessed areas impossible for human inspectors, generating a complete structural condition report.",
        services: ["Aerial Inspection", "Precision Mapping"],
      },
      {
        id: 3,
        title: "Great Dyke Geological Mapping",
        category: "Mining",
        location: "Shurugwi - Lalapanzi",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800",
        desc: "Multi-spectral aerial mapping across 120km of the Great Dyke for geological prospecting. Delivered classified mineral occurrence maps integrated with existing geological databases.",
        services: ["Precision Mapping", "Drone Surveying"],
      },
      {
        id: 4,
        title: "ZESA Transmission Line Audit",
        category: "Infrastructure",
        location: "Nationwide",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        desc: "Inspection of 800km of high-voltage transmission lines across Zimbabwe. Identified vegetation encroachment, damaged insulators, and structural degradation using thermal and visual sensors.",
        services: ["Aerial Inspection"],
      },
      {
        id: 5,
        title: "Mazowe Valley Crop Analysis",
        category: "Agriculture",
        location: "Mazowe",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
        desc: "Season-long NDVI crop health monitoring for 5,000 hectares of commercial tobacco. Drone data enabled targeted fertilizer application, reducing input costs by 18%.",
        services: ["Drone Surveying", "Precision Mapping"],
      },
      {
        id: 6,
        title: "Hwange Coal Stockpile Volumes",
        category: "Mining",
        location: "Hwange",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800",
        desc: "Monthly volumetric measurement of coal stockpiles using photogrammetric drone surveys. Replaced manual survey methods, improving accuracy by 40% and reducing survey time from 5 days to 4 hours.",
        services: ["Drone Surveying"],
      },
      {
        id: 7,
        title: "Gonarezhou Biodiversity Mapping",
        category: "Environmental",
        location: "Gonarezhou National Park",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
        desc: "Aerial wildlife count and vegetation mapping for conservation management. Covered 2,000 square kilometers using fixed-wing drones with minimal disturbance to wildlife.",
        services: ["Drone Surveying", "Precision Mapping"],
      },
      {
        id: 8,
        title: "Telecel Tower Network Assessment",
        category: "Infrastructure",
        location: "Nationwide",
        year: "2022",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        desc: "Structural inspection of 150 telecom towers across Zimbabwe. Delivered detailed condition reports with 3D models enabling remote engineering assessment.",
        services: ["Aerial Inspection"],
      },
      {
        id: 9,
        title: "Zimplats Pit Mapping",
        category: "Mining",
        location: "Ngezi",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800",
        desc: "Weekly drone surveys of open-pit mining operations for progress tracking and material reconciliation. Data feeds directly into mine planning software.",
        services: ["Drone Surveying", "Precision Mapping"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "Client " },
      { text: "Feedback", highlight: true },
    ],
    heroSubtitle:
      "Hear from the organizations across Zimbabwe and the region who trust Halted Aviation for their aerial intelligence needs.",
    ratingBreakdown: { 5: 14, 4: 4, 3: 1, 2: 0, 1: 0 },
    items: [
      {
        name: "Farai Chikwanha",
        role: "Chief Surveyor, Zimgeo Surveys",
        text: "Halted Aviation's drone surveying cut our topographical survey time from 3 weeks to 3 days. The accuracy of their LiDAR data exceeded our expectations and matched our ground control network perfectly.",
        rating: 5,
        date: "1 month ago",
        project: "Topographical Survey",
      },
      {
        name: "Nyasha Matimba",
        role: "Project Manager, ZESA Holdings",
        text: "Their aerial inspection of our transmission lines identified 47 fault points we could not have found from ground-based inspection. The thermal imaging was particularly valuable for detecting hot spots.",
        rating: 5,
        date: "2 months ago",
        project: "Power Line Inspection",
      },
      {
        name: "Tamuka Dube",
        role: "Mine Manager, Hwange Colliery",
        text: "Monthly volumetric surveys with pinpoint accuracy. Halted Aviation has become an essential part of our mine planning workflow. Their data integrates seamlessly with our Vulcan software.",
        rating: 4,
        date: "3 months ago",
        project: "Mining Survey",
      },
      {
        name: "Sandra Moyo",
        role: "Agronomist, Zimbabwe Tobacco Association",
        text: "The NDVI crop health maps transformed our precision agriculture program. We reduced fertilizer costs by 18% while increasing yield. The ROI was immediate and measurable.",
        rating: 5,
        date: "4 months ago",
        project: "Agricultural Monitoring",
      },
      {
        name: "Simba Kahari",
        role: "Conservation Manager, Parks & Wildlife",
        text: "Their fixed-wing surveys covered our entire reserve with minimal wildlife disturbance. The vegetation maps and animal count data are now central to our management plan. Outstanding professionalism.",
        rating: 5,
        date: "5 months ago",
        project: "Wildlife Conservation",
      },
      {
        name: "Rudo Magwenzi",
        role: "Network Planner, Telecel Zimbabwe",
        text: "150 tower inspections completed ahead of schedule. The 3D models they delivered allowed our engineers to assess structural conditions without climbing a single tower. Safer and faster.",
        rating: 5,
        date: "6 months ago",
        project: "Telecom Tower Inspection",
      },
      {
        name: "Bernard Mapfumo",
        role: "Senior Engineer, Zinara",
        text: "Halted Aviation surveyed our road corridor faster than any traditional team could. The orthomosaics were precise enough for our design engineers to work from directly. Highly recommended.",
        rating: 4,
        date: "7 months ago",
        project: "Road Corridor Survey",
      },
      {
        name: "Tatenda Chirwa",
        role: "Solar Project Director, Distributed Power Africa",
        text: "Their thermal inspection found defective panels that our ground team had missed for months. The cost savings from early detection alone paid for the entire inspection campaign.",
        rating: 5,
        date: "8 months ago",
        project: "Solar Panel Inspection",
      },
      {
        name: "Kudzai Manyika",
        role: "Exploration Geologist, Anglo American",
        text: "The multi-spectral mapping data from Halted Aviation significantly improved our geological targeting. Their pilots understand mineral exploration requirements, which is rare in this market.",
        rating: 5,
        date: "9 months ago",
        project: "Geological Exploration",
      },
      {
        name: "Maxwell Nyoni",
        role: "Bridge Engineer, Ministry of Transport",
        text: "We used Halted Aviation to inspect bridges that were unsafe for human access. Their drone footage and 3D models gave us the condition data we needed for rehabilitation planning.",
        rating: 4,
        date: "10 months ago",
        project: "Bridge Inspection",
      },
      {
        name: "Angela Dube",
        role: "Environmental Manager, EMA Zimbabwe",
        text: "Their environmental monitoring capabilities are impressive. Regular drone surveys of our decommissioned mine sites give us the data we need for rehabilitation compliance reporting.",
        rating: 5,
        date: "11 months ago",
        project: "Environmental Monitoring",
      },
      {
        name: "Peter Zvobgo",
        role: "Construction Director, Murray & Roberts",
        text: "Monthly progress monitoring of our dam construction project. The time-lapse orthomosaics they produce are invaluable for client reporting and design verification.",
        rating: 5,
        date: "1 year ago",
        project: "Construction Monitoring",
      },
    ],
    ctaTitle: "Ready to See the Difference From Above?",
    ctaSubtitle:
      "Join our growing list of clients who rely on Halted Aviation for critical aerial intelligence.",
    ctaCta: "Request a Mission Brief",
    ctaWhatsappText:
      "Hello, I saw your client reviews and would like to discuss an aerial project.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Plan " },
      { text: "Your Mission", highlight: true },
    ],
    heroSubtitle:
      "Have an aerial survey, inspection, or mapping requirement? Reach out and our operations team will prepare a mission brief within 48 hours.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Join the " },
      { text: "Flight", highlight: true },
      { text: " Crew" },
    ],
    heroSubtitle:
      "Be part of Zimbabwe's most innovative aviation team. We are looking for pilots, engineers, analysts, and aviation professionals who want to push boundaries.",
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
    cultureTitle: "Why Fly With Us?",
    cultureItems: [
      {
        iconName: "Users",
        title: "Cutting-Edge Tech",
        desc: "Work with the latest drone platforms, LiDAR sensors, and GIS processing tools.",
      },
      {
        iconName: "Rocket",
        title: "Rapid Growth",
        desc: "Our industry is expanding fast. Grow your career as we scale across Southern Africa.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety Culture",
        desc: "Aviation safety is in our DNA. Work in an environment where safety is never compromised.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400",
    cultureImageAlt:
      "Halted Aviation team operating drones in the field",
    cultureTagline: "More Than a Job. A Mission.",
    cultureTaglineDesc:
      "Every flight delivers data that powers real decisions. Our team sees the impact of their work in real time, every day.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Salary",
        desc: "Market-leading compensation with performance bonuses tied to mission outcomes.",
      },
      {
        iconName: "FirstAid",
        title: "Medical Cover",
        desc: "Comprehensive medical aid for you and your dependents from day one.",
      },
      {
        iconName: "GraduationCap",
        title: "Flight Training",
        desc: "Sponsored pilot licenses, type ratings, and specialist endorsements.",
      },
      {
        iconName: "Car",
        title: "Field Allowances",
        desc: "Generous per-diem allowances for field missions and cross-border deployments.",
      },
      {
        iconName: "Heart",
        title: "Work-Life Balance",
        desc: "Mission-based rotations with structured downtime between deployments.",
      },
      {
        iconName: "ShieldCheck",
        title: "Personal Protective Equipment",
        desc: "All required PPE, flight gear, and field equipment provided.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Senior Remote Pilot",
        department: "Flight Operations",
        type: "Full-Time",
        location: "Harare / Field",
        description:
          "Lead drone pilot for complex commercial missions including LiDAR surveys, infrastructure inspection, and BVLOS operations.",
        requirements: [
          "CAAZ Remote Pilot License (RPL)",
          "500+ commercial flight hours",
          "Multi-rotor and fixed-wing experience",
          "LiDAR mission experience preferred",
          "Willingness to travel extensively",
        ],
      },
      {
        id: 2,
        title: "GIS Analyst",
        department: "Data Processing",
        type: "Full-Time",
        location: "Harare",
        description:
          "Process drone-captured data into deliverables including orthomosaics, point clouds, DSMs, and GIS-integrated outputs.",
        requirements: [
          "Degree in GIS, Geomatics, or Geography",
          "Proficiency with Pix4D, Agisoft, or DroneDeploy",
          "QGIS or ArcGIS experience",
          "Understanding of photogrammetry principles",
          "Strong data visualization skills",
        ],
      },
      {
        id: 3,
        title: "Avionics Technician",
        department: "Engineering",
        type: "Full-Time",
        location: "Harare",
        description:
          "Maintain, repair, and calibrate our fleet of commercial drone platforms and sensor payloads.",
        requirements: [
          "Diploma in Electronics or Avionics",
          "3+ years drone or avionics maintenance experience",
          "Soldering and circuit board repair skills",
          "DJI Enterprise certification preferred",
          "Strong troubleshooting methodology",
        ],
      },
      {
        id: 4,
        title: "Business Development Manager",
        department: "Commercial",
        type: "Full-Time",
        location: "Harare",
        description:
          "Drive new business across mining, energy, agriculture, and infrastructure sectors. Build relationships with key decision-makers.",
        requirements: [
          "Degree in business, engineering, or related field",
          "5+ years B2B sales experience",
          "Understanding of aerial survey or inspection industry",
          "Own vehicle and valid driver's license",
          "Strong presentation and proposal-writing skills",
        ],
      },
      {
        id: 5,
        title: "Trainee Pilot",
        department: "Flight Operations",
        type: "Internship",
        location: "Harare",
        description:
          "12-month training program to become a licensed commercial drone pilot. Includes ground school, flight training, and mentored field missions.",
        requirements: [
          "Degree or diploma in any technical field",
          "Strong spatial awareness and coordination",
          "Interest in aviation and drone technology",
          "Clean criminal record",
          "Willingness to work in remote field conditions",
        ],
      },
    ],
    generalApplicationTitle: "Don't See Your Role?",
    generalApplicationSubtitle:
      "We are always looking for talented people who are passionate about aviation and technology. Send us your CV.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Elevating Africa's airspace through innovative drone technology and aviation solutions. Licensed, insured, and trusted across Southern Africa.",
    copyright: "Halted Aviation Cooperation (Pvt) Ltd",
  },
};

export default siteData;
