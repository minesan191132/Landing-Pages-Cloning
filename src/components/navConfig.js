import navAiPractice from '../assests/images/nav-ai-practice-management.DOLrS83x_1qYFPm.webp';
import navCustody from '../assests/images/nav-custody-execution.BBzLjn3v_ZHMNdI.webp';
import navIndependent from '../assests/images/nav-independent-firms.BlA20NJs_5rWs8.webp';
import navConsolidators from '../assests/images/nav-consolidators.CkmIfV3m_Z1EIYiR.webp';

export const NAV_ITEMS = [
  {
    label: "What we offer",
    children: [
      {
        icon: "🧠",
        image: navAiPractice,
        title: "AI Practice Management",
        description:
          "Your clients, meetings, and tasks — captured by AI, searchable in seconds, ready to act on.",
        href: "/what-we-offer/ai-crm-for-financial-advisors",
      },
      {
        icon: "🏦",
        image: navCustody,
        title: "Custody & Execution",
        description:
          "Trade, rebalance, and custody — all in one place. With instant account opening.",
        href: "/what-we-offer/custody-and-execution",
      },
    ],
  },
  {
    label: "Who's it for",
    children: [
      {
        icon: "👥",
        image: navIndependent,
        title: "Independent firms",
        description:
          "Spend less time on admin and more time delivering advice that matters.",
        href: "/whos-it-for/independent-firms",
      },
      {
        icon: "🌐",
        image: navConsolidators,
        title: "Consolidators",
        description:
          "Unify firms, data, and controls to scale faster — without operational drag.",
        href: "/whos-it-for/consolidators",
      },
    ],
  },
  {
    label: "Integrations",
    href: "/integrations",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];
