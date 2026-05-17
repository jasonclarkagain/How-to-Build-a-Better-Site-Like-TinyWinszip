import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0D0D0D", color: "#F2EDE8" }}
    >
      <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
        >
          404 — Page Not Found
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Lost in the
          <br />
          <span style={{ color: "#FF4D1C" }}>Dark</span>
        </h1>
        <p
          className="mb-10 text-lg max-w-md mx-auto"
          style={{ color: "#9A9490", fontFamily: "'DM Sans', sans-serif" }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            border: "1px solid #FF4D1C",
            color: "#FF4D1C",
            backgroundColor: "transparent",
            padding: "0.75rem 2rem",
            cursor: "pointer",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FF4D1C";
            e.currentTarget.style.color = "#0D0D0D";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#FF4D1C";
          }}
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
