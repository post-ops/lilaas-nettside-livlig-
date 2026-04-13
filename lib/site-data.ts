/** Key data row — use site-wide for consistency (• separators, °C). */
export const KEY_DATA_LINE = ">10M cycles • IP67 • -40°C to +85°C • Dual-channel output";

export type ProductItem = {
  slug: string;
  name: string;
  image: string;
  specs: string[];
  whatItIs: string;
  usedIn: string;
  category: "Control Levers" | "Joysticks" | "Thruster Control" | "Precision Mechanics";
};

export const products: ProductItem[] = [
  {
    slug: "l01-thruster-control",
    name: "L01",
    image: "/images/curated/lilaas-product-group-1.png",
    specs: ["Dual-axis operator unit", "Marine-duty mechanical design", "Integration-ready interfaces"],
    whatItIs: "Compact azimuth and thruster control unit for precision maneuvering.",
    usedIn: "Azimuth propulsion systems and close-quarter vessel control.",
    category: "Thruster Control"
  },
  {
    slug: "lf70-thruster-control",
    name: "LF70",
    image: "/images/curated/console-variant-3.png",
    specs: ["Propulsion-oriented lever geometry", "Color-coded operating sectors", "Heavy-duty bridge use"],
    whatItIs: "Azimuth-oriented control lever family for propulsion and directional control.",
    usedIn: "Azimuth bridge stations and offshore maneuvering consoles.",
    category: "Thruster Control"
  },
  {
    slug: "le90-control-lever",
    name: "LE90",
    image: "/images/curated/lilaas-product-group-2.png",
    specs: ["Twin lever architecture", "Panel-mounted industrial housing", "Smooth mechanical response"],
    whatItIs: "Dual control lever assembly for coordinated propulsion operation.",
    usedIn: "Main bridge propulsion control and integrated operator desks.",
    category: "Control Levers"
  },
  {
    slug: "lf120-control-lever",
    name: "LF120",
    image: "/images/curated/steering-panels.png",
    specs: ["Multi-variant control head", "Color-coded operational ranges", "Compact bridge footprint"],
    whatItIs: "Versatile propulsion control lever for single and dual station setups.",
    usedIn: "Propulsion control, tunnel thruster and maneuvering stations.",
    category: "Control Levers"
  },
  {
    slug: "lf180-control-lever",
    name: "LF180",
    image: "/images/curated/console-variant-1.png",
    specs: ["High-travel lever movement", "Mechanical detent options", "Panel or console integration"],
    whatItIs: "High-range control lever for precise propulsion command input.",
    usedIn: "Bridge control consoles and offshore propulsion stations.",
    category: "Control Levers"
  },
  {
    slug: "lf90-control-lever",
    name: "LF90",
    image: "/images/curated/console-variant-2.png",
    specs: ["Twin-handle operation", "Mechanical feedback through full stroke", "Rugged enclosure design"],
    whatItIs: "Classic marine control lever for propulsion and maneuvering tasks.",
    usedIn: "Workboats, coastal vessels and retrofit bridge systems.",
    category: "Control Levers"
  },
  {
    slug: "lf90x-lf120x-control-levers",
    name: "LF90X and LF120X",
    image: "/images/curated/lf90x-lf120x.png",
    specs: ["Extended series mechanical platform", "Panel-mounted operator handles", "Configurable output setup"],
    whatItIs: "Extended control lever family for tailored bridge control layouts.",
    usedIn: "Integrated bridge systems and project-specific vessel controls.",
    category: "Control Levers"
  },
  {
    slug: "lf150-rudder-control",
    name: "LF150",
    image: "/images/curated/lf150.png",
    specs: ["Wheel and knob control options", "Detent in center", "Panel plate installation"],
    whatItIs: "Rudder-focused control unit with multiple operator interface options.",
    usedIn: "Steering control panels and marine helm stations.",
    category: "Control Levers"
  },
  {
    slug: "lf80-rudder-control",
    name: "LF80",
    image: "/images/curated/lf80.png",
    specs: ["Single 5 kOhm potentiometer", "Detent in zero", "Panel plate 96 x 96 mm"],
    whatItIs: "Small and reliable control lever for rudder control.",
    usedIn: "Compact bridge panels and retrofit helm positions.",
    category: "Control Levers"
  },
  {
    slug: "l04-joystick",
    name: "L04",
    image: "/images/curated/joystick-concept.png",
    specs: ["Compact joystick geometry", "Panel-mounted base option", "Single-hand precision operation"],
    whatItIs: "Compact joystick for maneuver and control input in constrained consoles.",
    usedIn: "Auxiliary controls, maneuvering input and custom operator stations.",
    category: "Joysticks"
  },
  {
    slug: "lf50-joystick",
    name: "LF50",
    image: "/images/curated/lilaas-product-family.png",
    specs: ["Vertical grip control", "Rugged marine boot interface", "Short-throw precision movement"],
    whatItIs: "Marine joystick unit designed for reliable directional input.",
    usedIn: "Vessel control desks and deck machinery command panels.",
    category: "Joysticks"
  },
  {
    slug: "lf60-joystick",
    name: "LF60",
    image: "/images/curated/thruster-concept.png",
    specs: ["Heavy-duty joystick platform", "Multi-shape handle variants", "Designed for demanding environments"],
    whatItIs: "Joystick family for robust control applications in marine environments.",
    usedIn: "Thruster and propulsion-adjacent operator interfaces.",
    category: "Joysticks"
  },
  {
    slug: "thruster-control-unit",
    name: "Thruster Control Unit",
    image: "/images/thruster-system.jpg",
    specs: ["Integrated propulsion control", "Redundant network architecture", "Stable response under high load"],
    whatItIs: "Integrated thruster control for propulsion and maneuvering.",
    usedIn: "Offshore vessels and dynamic positioning operations.",
    category: "Thruster Control"
  },
  {
    slug: "precision-console-assembly",
    name: "Precision Mechanics Assembly",
    image: "/images/curated/precision-mechanics.png",
    specs: ["Precision mechanics", "Integration-ready build", "Design-to-spec production"],
    whatItIs: "Precision mechanical assembly concept for operator interfaces.",
    usedIn: "Bridge control and integrated vessel systems (project-specific).",
    category: "Precision Mechanics"
  }
];

export const applicationAreas = [
  {
    title: "Maritime",
    whatItIs: "Control interfaces for bridge and propulsion systems.",
    usedIn: "Commercial shipping and coastal operations."
  },
  {
    title: "Defence",
    whatItIs: "Control hardware for mission-critical platforms.",
    usedIn: "Surface vessels and land-based control stations."
  },
  {
    title: "Medical",
    whatItIs: "Precision input mechanics for controlled equipment.",
    usedIn: "Surgical and diagnostic systems."
  },
  {
    title: "Space",
    whatItIs: "Control components for low-tolerance assemblies.",
    usedIn: "Satellite and ground support equipment."
  }
];
