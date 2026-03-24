import { useEffect, useState } from "react";

const features = [
  {
    id: "variety",
    icon: "🍜",
    title: "Delicious Variety",
    desc: "From ramen to momos, every dish is packed with flavor and freshness.",
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    title: "Family Friendly",
    desc: "Enjoy our special Kid Zone for a relaxed dining experience.",
  },
  {
    id: "ambiance",
    icon: "🌿",
    title: "Unique Ambiance",
    desc: "Balcony coffee & chill zone that adds a modern vibe to your visit.",
  },
  {
    id: "smoking",
    icon: "🚬",
    title: "Smoking Area",
    desc: "A dedicated outdoor smoking area so everyone can dine comfortably.",
  },
];

const menuItems = [
  { id: "ramen", icon: "🍜", name: "Ramen" },
  { id: "momos", icon: "🥟", name: "Momos" },
  { id: "rolls", icon: "🌯", name: "Chicken Rolls" },
  { id: "rice", icon: "🍚", name: "Fried Rice" },
  { id: "chilli", icon: "🌶️🍗", name: "Chilli Chicken" },
  { id: "omelette", icon: "🍳", name: "Signature Omelette Platter" },
];

const reviewParagraphs = [
  "We recently visited the newly opened Roadside Kitchen, and overall it was a wonderful and satisfying experience 😊. We ordered their 1299 platter (discounted), and the variety and quantity were truly impressive. The platter included ramen 🍜, momos 🥟, chicken rolls 🌯, fried rice 🍚, chilli chicken 🌶️🍗, fresh salad 🥗, and what really enhanced the beauty of the serving were the two beautifully prepared omelettes placed on top of the rice 🍳😍. The presentation was eye-catching and made the platter look even more tempting.",
  "The food quality was excellent — fresh, flavorful, and perfectly cooked 👌. Each item had its own distinct taste, showing great attention to detail in the kitchen. The serving style was neat and appealing, especially for a newly opened place.",
  "A big plus for us was the Kid Zone 🧸🎈. My son absolutely loved playing there, which made our dining experience even more relaxed and enjoyable. It's a great family-friendly feature 👍.",
  "They also have a balcony-type open area ☕🌿 that works as a coffee plus smoking zone. Even though I don't smoke, I feel it's a good addition and adds to the overall vibe of the place.",
  "The ambiance, decoration, food quality, and service ✨ are all great and well thought out.",
  "The only small negatives 🚻 would be that there is just one men's and one ladies' washroom, and during busy hours we noticed a lot of waiting. Also, it would have been really nice to have a small breastfeeding area for moms 🤱.",
  "Overall, Roadside Kitchen is a fantastic new spot with great food and a lovely atmosphere. Definitely worth visiting! 😍👏🍽️",
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", target: "hero" },
    { label: "Menu", target: "popular-menu" },
    { label: "About", target: "features" },
    { label: "Contact", target: "visit" },
  ];

  return (
    <div
      className="min-h-screen font-poppins"
      style={{ backgroundColor: "#0f0f0f", color: "#fff" }}
    >
      {/* Header */}
      <header
        data-ocid="header.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ backgroundColor: "#111" }}
      >
        <div className="flex justify-between items-center px-[10%] py-5">
          <h1
            className="text-2xl font-bold tracking-wide"
            style={{ color: "#ff4d00" }}
          >
            Roadside Kitchen
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.target}
                data-ocid={`nav.${item.label.toLowerCase()}.link`}
                onClick={() => scrollTo(item.target)}
                className="font-semibold capitalize text-white hover:text-[#ff4d00] transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="header.order_button"
              onClick={() => scrollTo("popular-menu")}
              className="font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#ff4d00",
                padding: "10px 22px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#ff7a3c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#ff4d00";
              }}
            >
              Order Online
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-[10%] pb-5 flex flex-col gap-3"
            style={{ backgroundColor: "#111" }}
          >
            {navItems.map((item) => (
              <button
                type="button"
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left font-semibold text-white hover:text-[#ff4d00] transition-colors duration-200 bg-transparent border-none cursor-pointer py-1"
                data-ocid={`nav.mobile.${item.label.toLowerCase()}.link`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        data-ocid="hero.section"
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "0 10%",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Where Flavor Meets the Road 🍽️🔥
        </h2>
        <p
          className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          style={{ color: "#cfcfcf" }}
        >
          Experience delicious, freshly made meals in a cozy, modern roadside
          vibe. Perfect for families, friends, and food lovers.
        </p>
        <button
          type="button"
          data-ocid="hero.order_button"
          onClick={() => scrollTo("popular-menu")}
          className="font-semibold text-white transition-all duration-300"
          style={{
            backgroundColor: "#ff4d00",
            padding: "12px 25px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#ff7a3c";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#ff4d00";
          }}
        >
          Order Now
        </button>
      </section>

      {/* Why Choose Us */}
      <section
        id="features"
        data-ocid="features.section"
        style={{ padding: "60px 10%", backgroundColor: "#0f0f0f" }}
      >
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <div
              key={f.id}
              data-ocid={`features.item.${idx + 1}`}
              className="p-5 rounded-[15px] transition-all duration-300 hover:-translate-y-[5px]"
              style={{
                backgroundColor: "#1a1a1a",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {f.icon} {f.title}
              </h3>
              <p
                style={{ color: "#afafaf" }}
                className="leading-relaxed text-sm"
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Menu */}
      <section
        id="popular-menu"
        data-ocid="menu.section"
        style={{ padding: "60px 10%", backgroundColor: "#111" }}
      >
        <h2 className="text-3xl font-bold mb-10">Popular Menu</h2>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={item.id}
              data-ocid={`menu.item.${idx + 1}`}
              className="p-5 rounded-[15px] font-semibold text-base transition-all duration-300 hover:-translate-y-[5px] cursor-pointer"
              style={{
                backgroundColor: "#1a1a1a",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {item.icon} {item.name}
            </div>
          ))}
        </div>
      </section>

      {/* Customer Review */}
      <section
        id="review"
        data-ocid="review.section"
        style={{ padding: "60px 10%", backgroundColor: "#0f0f0f" }}
      >
        <h2 className="text-3xl font-bold mb-10">Customer Review ⭐</h2>
        <div
          className="p-6 md:p-8 rounded-[15px]"
          style={{
            backgroundColor: "#1a1a1a",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            lineHeight: "1.8",
          }}
        >
          {reviewParagraphs.map((para) => (
            <p
              key={para.slice(0, 40)}
              style={{ color: "#cfcfcf" }}
              className="mt-5 first:mt-0"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Visit Us Today */}
      <section
        id="visit"
        data-ocid="visit.section"
        style={{
          padding: "60px 10%",
          backgroundColor: "#111",
          textAlign: "center",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">Visit Us Today 🚀</h2>
        <p className="mb-8 text-base" style={{ color: "#afafaf" }}>
          Come and experience the best roadside dining vibe in town!
        </p>
        <button
          type="button"
          data-ocid="visit.directions_button"
          className="font-semibold text-white transition-all duration-300"
          style={{
            backgroundColor: "#ff4d00",
            padding: "12px 25px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#ff7a3c";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#ff4d00";
          }}
          onClick={() => window.open("https://maps.google.com", "_blank")}
        >
          Get Directions
        </button>
      </section>

      {/* Footer */}
      <footer
        data-ocid="footer.section"
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#111",
        }}
      >
        <p style={{ color: "#afafaf" }} className="text-sm mb-2">
          © {new Date().getFullYear()} Roadside Kitchen | All Rights Reserved
        </p>
        <p style={{ color: "#666" }} className="text-xs">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff4d00" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
