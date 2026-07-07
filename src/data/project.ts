import farmiwise from "../assets/farmiwise.png";
import nexlanc from "../assets/nexlanc.png";
import carprice from "../assets/carprice.png";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  problem: string;
  approach: string;
  techDecisions: string;
  outcome: string;
  stack: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FarmiWise AI",
    image: farmiwise,
    description:
      "An end-to-end agricultural intelligence platform helping farmers make data-driven decisions.",

    problem:
      "Farmers often lack a unified system combining crop recommendations, weather insights, and market intelligence.",

    approach:
      "Built a decision support system combining ML recommendation models with weather analytics and market data.",

    techDecisions:
      "Flask backend, SQLite database, Scikit-learn recommendation engine, Render deployment.",

    outcome:
      "Successfully deployed and publicly accessible with integrated ML predictions and live data.",

    stack: [
      "Python",
      "Flask",
      "SQLite",
      "Scikit-learn",
      "HTML",
      "Bootstrap",
    ],

    github: "https://github.com/Vxrun10/FarmiWise-Ai",
    demo: "https://farmiwise-ai.onrender.com/",
  },

  {
    id: 2,
    title: "Nexlanc AI",
    image: nexlanc,
    description:
      "AI-powered resume analyzer with skill-gap analysis and interview generation.",

    problem:
      "Job seekers struggle to understand how well their resume matches specific roles.",

    approach:
      "Built a resume parsing and AI feedback pipeline using Groq APIs.",

    techDecisions:
      "Flask, SQLAlchemy, TiDB Cloud, Jinja2 templates, Render deployment.",

    outcome:
      "Created a fully functional AI feedback system from upload to analysis.",

    stack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "TiDB",
      "Groq API",
      "Jinja2",
    ],

    github: "https://github.com/Vxrun10/Nexlanc-ai",
    demo: "https://nexlanc-ai.onrender.com/login",
  },

  {
    id: 3,
    title: "Car Price Prediction",
    image: carprice,
    description:
      "Machine learning application for real-time used car price prediction.",

    problem:
      "Buyers and sellers often lack reliable price estimates.",

    approach:
      "Built an ML pipeline with preprocessing, feature engineering and prediction APIs.",

    techDecisions:
      "XGBoost model, Flask API, Streamlit frontend.",

    outcome:
      "Delivered a complete end-to-end prediction system.",

    stack: [
      "Python",
      "XGBoost",
      "Flask",
      "Streamlit",
      "Pandas",
    ],

    github: "https://github.com/Vxrun10/car_price_prediction",
    demo: "https://carpredictionpy-molchyu2repcv8hajlswql.streamlit.app/",
  },
];