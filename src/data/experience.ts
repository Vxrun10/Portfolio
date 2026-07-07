export interface Experience {
  title: string;
  organization: string;
  duration: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Java Web Development with AI Program",
    organization: "HCLTech",
    duration: "Feb 2025 – Mar 2025",
    bullets: [
      "Developed Java-based web applications while learning backend development principles.",
      "Applied AI concepts alongside Java development to understand intelligent application design.",
    ],
  },
  {
    title: "Python Full-Stack Development Training",
    organization: "Professional Training",
    duration: "Oct 2025 – Dec 2025",
    bullets: [
      "Built Flask applications with authentication, REST APIs, and SQL databases.",
      "Developed and deployed end-to-end full-stack applications using Python.",
    ],
  },
];