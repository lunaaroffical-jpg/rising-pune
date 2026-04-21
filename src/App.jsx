import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About Us", "Programs", "Contact Us"];

const PROGRAMS = [
  { icon: "💪", name: "Strength Training", desc: "Barbell, dumbbell and machine-based lifting with certified coaches." },
  { icon: "🏃", name: "Cardio & HIIT", desc: "High-intensity interval sessions built for fat burn and stamina." },
  { icon: "🤸", name: "Crossfit", desc: "Functional movements at high intensity for total-body conditioning." },
  { icon: "🧘", name: "Yoga & Pilates", desc: "Flexibility, core strength, and mindful movement for all levels." },
  { icon: "💃", name: "Zumba & Aerobics", desc: "Dance-based cardio that's as fun as it is effective." },
  { icon: "🥊", name: "TRX Suspension", desc: "Bodyweight resistance training that builds balance and power." },
];

const MEMBERSHIPS = [
  {
    name: "Starter",
    duration: "1 Month",
    price: "₹2,500",
    features: ["Full gym access", "Locker & shower", "Fitness assessment", "Floor trainer guidance"],
    highlight: false,
  },
  {
    name: "Pro",
    duration: "3 Months",
    price: "₹5,999",
    features: ["Full gym access", "Locker & shower", "Fitness assessment", "Diet consultation", "Group classes", "Priority booking"],
    highlight: true,
  },
  {
    name: "Elite",
    duration: "12 Months",
    price: "₹4,500 / mo",
    features: ["Full gym access", "Locker & shower", "Unlimited classes", "Personal training (12 sessions)", "Diet consultation", "Couple discount available"],
    highlight: false,
  },
];

const TESTIMONIALS = [
  { name: "Rasika M.", text: "It's a perfect gym — comfortable trainers who track your progress, great hygiene, and pocket-friendly membership. Highly recommend!", stars: 5 },
  { name: "Aamin R.", text: "One of the best gyms in Camp. Everything under one roof — cardio machines, great trainers, and an amazing atmosphere.", stars: 5 },
  { name: "Priya S.", text: "The ladies section is wonderful. Female instructors, a welcoming vibe, and classes that actually work. So glad I joined.", stars: 5 },
];

const EQUIPMENT = [
  {
    name: "Dumbbell Rack",
    category: "Free Weights",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    gradient: "linear-gradient(135deg, #0f1923 0%, #1a2e3d 60%, #0d3347 100%)",
    icon: "🏋️",
    desc: "Full range of hex dumbbells from 2.5 kg to 50 kg, neatly racked for easy access.",
  },
  {
    name: "Power Cage / Squat Rack",
    category: "Strength",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    gradient: "linear-gradient(135deg, #1a0800 0%, #3d1500 60%, #4a1a00 100%)",
    icon: "🔩",
    desc: "Heavy-duty squat rack with safety bars — perfect for squats, bench press, and overhead work.",
  },
  {
    name: "Cable Machine",
    category: "Functional",
    img: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=600&q=80",
    gradient: "linear-gradient(135deg, #001a0a 0%, #003d1a 60%, #004d22 100%)",
    icon: "⚙️",
    desc: "Dual-stack cable station for lat pulldowns, rows, tricep pushdowns and cable flyes.",
  },
  {
    name: "Treadmill",
    category: "Cardio",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    gradient: "linear-gradient(135deg, #1a1000 0%, #3d2600 60%, #4a3000 100%)",
    icon: "🏃",
    desc: "Commercial-grade treadmills with incline settings and heart rate monitoring.",
  },
  {
    name: "Kettlebells & Mats",
    category: "Functional",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #16163d 60%, #1a1a4a 100%)",
    icon: "🎯",
    desc: "Cast iron kettlebells across all weights, on rubberised anti-slip flooring.",
  },
  {
    name: "Bench Press Station",
    category: "Strength",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    gradient: "linear-gradient(135deg, #1a0d00 0%, #3d1f00 60%, #4d2800 100%)",
    icon: "💪",
    desc: "Flat and incline bench stations with Olympic barbells for chest and upper body training.",
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#E8C547", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

function NavBar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.35s ease",
      padding: "0 6vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <button onClick={() => setPage("Home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #E8C547 0%, #C9922A 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 16, color: "#0a0a0a", letterSpacing: -0.5,
          }}>RFC</div>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: 1.5, textTransform: "uppercase" }}>
            Rising Fitness Club
          </span>
        </button>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => setPage(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: page === link ? "#E8C547" : "rgba(255,255,255,0.75)",
                fontSize: 13, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase",
                padding: "8px 14px", borderRadius: 6,
                transition: "color 0.2s",
                borderBottom: page === link ? "2px solid #E8C547" : "2px solid transparent",
              }}
            >{link}</button>
          ))}
          <button
            onClick={() => setPage("Contact Us")}
            style={{
              marginLeft: 8, background: "#E8C547", border: "none", cursor: "pointer",
              color: "#0a0a0a", fontSize: 12, fontWeight: 800, letterSpacing: 1.5,
              textTransform: "uppercase", padding: "10px 22px", borderRadius: 6,
            }}
          >Join Now</button>
        </div>

        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }} className="hamburger">
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", opacity: open ? 0 : 1, transition: "all 0.2s" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(10,10,10,0.98)", padding: "16px 6vw 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="mobile-menu">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => { setPage(link); setOpen(false); }} style={{
              display: "block", width: "100%", background: "none", border: "none", cursor: "pointer",
              color: page === link ? "#E8C547" : "#fff", fontSize: 15, fontWeight: 600,
              letterSpacing: 1, textTransform: "uppercase", padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "left",
            }}>{link}</button>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; color: #fff; font-family: 'DM Sans', sans-serif; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function HomePage({ setPage }) {
  return (
    <div style={{ width: "100%" }}>
      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0f0d07 100%)",
        position: "relative", overflow: "hidden", padding: "120px 4vw 80px",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `radial-gradient(ellipse at 70% 50%, rgba(232,197,71,0.08) 0%, transparent 65%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "5%", width: 320, height: 320,
          borderRadius: "50%", border: "1px solid rgba(232,197,71,0.1)",
          animation: "pulse 4s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "8%", width: 220, height: 220,
          borderRadius: "50%", border: "1px solid rgba(232,197,71,0.07)",
          animation: "pulse 4s ease-in-out infinite 1s",
        }} />

        <style>{`@keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.05);opacity:0.6} }`}</style>

        <div style={{ width: "100%" }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(232,197,71,0.12)", border: "1px solid rgba(232,197,71,0.25)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8C547", display: "inline-block" }} />
              <span style={{ fontSize: 12, color: "#E8C547", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Pune's Premier Fitness Destination</span>
            </div>

            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(52px, 9vw, 100px)", fontWeight: 800,
              lineHeight: 0.95, letterSpacing: -1, marginBottom: 28,
              color: "#fff",
            }}>
              RISE.<br />
              <span style={{ color: "#E8C547" }}>TRAIN.</span><br />
              CONQUER.
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 520, marginBottom: 44 }}>
              Two branches in Camp &amp; Wanowrie. Certified trainers, modern equipment, and a community that pushes you to your best every single day.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => setPage("Contact Us")} style={{
                background: "#E8C547", color: "#0a0a0a", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase",
                padding: "16px 36px", borderRadius: 8,
              }}>Start Your Journey</button>
              <button onClick={() => setPage("About Us")} style={{
                background: "transparent", color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer",
                fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase",
                padding: "16px 36px", borderRadius: 8,
              }}>Learn More</button>
            </div>

            <div style={{ display: "flex", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
              {[["8+", "Years Active"], ["2", "Branches"], ["4.4★", "Rated on JD"], ["500+", "Members"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 38, fontWeight: 800, color: "#E8C547", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Strip */}
      <section style={{ background: "#111", padding: "100px 4vw" }}>
        <div style={{ width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#fff" }}>PROGRAMS FOR EVERY GOAL</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, justifyContent: "center" }}>
            {PROGRAMS.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "32px 28px",
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,197,71,0.4)"; e.currentTarget.style.background = "rgba(232,197,71,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10, letterSpacing: 0.5 }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section style={{ background: "#0a0a0a", padding: "100px 4vw" }}>
        <div style={{ width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Flexible Plans</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#fff" }}>MEMBERSHIP OPTIONS</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start", justifyContent: "center" }}>
            {MEMBERSHIPS.map((m, i) => (
              <div key={i} style={{
                background: m.highlight ? "rgba(232,197,71,0.06)" : "rgba(255,255,255,0.02)",
                border: m.highlight ? "1px solid rgba(232,197,71,0.5)" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "36px 32px", position: "relative",
              }}>
                {m.highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#E8C547", color: "#0a0a0a", fontSize: 11, fontWeight: 800,
                    letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 18px", borderRadius: 20,
                  }}>Most Popular</div>
                )}
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{m.duration}</p>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{m.name}</h3>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 46, fontWeight: 800, color: "#E8C547", lineHeight: 1, marginBottom: 28 }}>{m.price}</div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginBottom: 28 }}>
                  {m.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                      <span style={{ color: "#E8C547", marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setPage("Contact Us")} style={{
                  width: "100%", padding: "14px 0",
                  background: m.highlight ? "#E8C547" : "transparent",
                  color: m.highlight ? "#0a0a0a" : "#fff",
                  border: m.highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase",
                }}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section style={{ background: "#0d0d0d", padding: "100px 4vw" }}>
        <div style={{ width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>State-of-the-Art</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#fff" }}>OUR EQUIPMENT</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 14, maxWidth: 480, margin: "14px auto 0" }}>Everything you need to train hard — maintained, modern, and ready for you every day.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, justifyContent: "center" }}>
            {EQUIPMENT.map((eq, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, overflow: "hidden",
                transition: "border-color 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,197,71,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: 220, overflow: "hidden", background: eq.gradient }}>
                  <img
                    src={eq.img}
                    alt={eq.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)" }}
                    onError={e => { e.target.style.display = "none"; }}
                  />
                  <div style={{
                    position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 56, opacity: 0.18, pointerEvents: "none",
                  }}>{eq.icon}</div>
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.35)",
                    borderRadius: 20, padding: "4px 12px",
                    fontSize: 11, fontWeight: 700, color: "#E8C547", letterSpacing: 1.2, textTransform: "uppercase",
                  }}>{eq.category}</div>
                </div>
                <div style={{ padding: "22px 24px 28px" }}>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{eq.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#111", padding: "100px 4vw" }}>
        <div style={{ width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Member Stories</p>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "#fff" }}>WHAT OUR MEMBERS SAY</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, justifyContent: "center" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "32px 28px",
              }}>
                <Stars count={t.stars} />
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, color: "#E8C547",
                  }}>{t.name[0]}</div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #E8C547 0%, #C9922A 100%)",
        padding: "80px 4vw", textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, color: "#0a0a0a", lineHeight: 1, marginBottom: 20 }}>
            YOUR FIRST STEP STARTS TODAY
          </h2>
          <p style={{ fontSize: 16, color: "rgba(10,10,10,0.7)", marginBottom: 36 }}>Join a community that has your back from day one. Two branches, flexible plans, real results.</p>
          <button onClick={() => setPage("Contact Us")} style={{
            background: "#0a0a0a", color: "#E8C547", border: "none", cursor: "pointer",
            fontSize: 13, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase",
            padding: "18px 44px", borderRadius: 8,
          }}>Claim Your Free Trial</button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        background: "linear-gradient(to bottom, #111, #0a0a0a)",
        padding: "100px 6vw 80px", minHeight: "50vh", display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Our Story</p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 800, color: "#fff", lineHeight: 0.95, marginBottom: 28 }}>
            BUILT BY ATHLETES,<br /><span style={{ color: "#E8C547" }}>FOR EVERYONE.</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, lineHeight: 1.8 }}>
            Founded in 2018, Rising Fitness Club was born from a simple belief — great fitness shouldn't be out of reach for anyone in Pune.
          </p>
        </div>
      </section>

      <section style={{ background: "#0a0a0a", padding: "80px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" , justifyContent: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 800, color: "#fff", marginBottom: 20 }}>WHO WE ARE</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>
              Rising Fitness Club has two branches — Camp and Wanowrie — serving hundreds of members across Pune. We are a well-equipped fitness centre with certified personal trainers who genuinely care about your results.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>
              From the reception team to the floor trainers, we come with a sense of familiarity. At Rising Fitness Club, you're not just a member — you're family.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9 }}>
              We offer personalized and customized workout and dietary programs for every goal — whether you're looking to lose weight, build muscle, or simply stay healthy and active.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { num: "2018", label: "Year Founded" },
              { num: "2", label: "Pune Branches" },
              { num: "500+", label: "Active Members" },
              { num: "4.4★", label: "Average Rating" },
            ].map(({ num, label }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "32px 20px", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 800, color: "#E8C547", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: 1.2, textTransform: "uppercase", marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#111", padding: "80px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 800, color: "#fff", marginBottom: 48, textAlign: "center" }}>OUR FACILITIES</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, justifyContent: "center" }}>
            {[
              ["🏋️", "Modern Equipment", "Latest cardio, strength, and functional training machines"],
              ["🚿", "Locker & Showers", "Clean, well-maintained facilities for your comfort"],
              ["👩", "Ladies Section", "Dedicated ladies fitness studio with female instructors"],
              ["🍎", "Diet Consultation", "Personalized nutrition guidance to complement training"],
              ["🎯", "Personal Training", "1-on-1 sessions with certified coaches"],
              ["🤝", "Community", "A welcoming space where everyone belongs"],
            ].map(([icon, title, desc], i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12, padding: "28px 24px",
              }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 14 }}>{icon}</span>
                <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0a0a0a", padding: "80px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 800, color: "#fff", marginBottom: 12, textAlign: "center" }}>OUR BRANCHES</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: 48 }}>Two locations. Same excellence.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, justifyContent: "center" }}>
            {[
              {
                name: "Camp Branch",
                address: "1st Floor, Above Sujata Mastani, East Street Road, Juna Pulgate, Camp, Pune – 411001",
                hours: "Open until 11:00 PM",
                phone: "8888412336",
              },
              {
                name: "Wanowrie Branch",
                address: "2nd Floor, Parmar Gallery, Above SBI Bank, near Jagtap Chowk, Wanowrie, Pune – 411040",
                hours: "Open daily",
                phone: "09035176962",
              },
            ].map((b, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(232,197,71,0.25)",
                borderRadius: 14, padding: "36px 32px",
              }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, color: "#E8C547", marginBottom: 16 }}>{b.name}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 12 }}>📍 {b.address}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>⏰ {b.hours}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>📞 {b.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "#111", padding: "100px 6vw 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, color: "#fff", lineHeight: 0.95, marginBottom: 20 }}>
            LET'S START YOUR<br /><span style={{ color: "#E8C547" }}>JOURNEY TODAY.</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 500, lineHeight: 1.7 }}>
            Have a question about membership, classes, or personal training? Reach out — we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ background: "#0a0a0a", padding: "80px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 , justifyContent: "center" }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 36 }}>CONTACT DETAILS</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { icon: "✉️", label: "Email", value: "risingfitnessclubpune@gmail.com", href: "mailto:risingfitnessclubpune@gmail.com" },
                { icon: "📞", label: "Camp Branch", value: "8888412336", href: "tel:8888412336" },
                { icon: "📞", label: "Wanowrie Branch", value: "09035176962", href: "tel:09035176962" },
                { icon: "📍", label: "Camp", value: "1st Floor, Above Sujata Mastani, East Street Road, Camp, Pune – 411001" },
                { icon: "📍", label: "Wanowrie", value: "2nd Floor, Parmar Gallery, Above SBI Bank, Wanowrie, Pune – 411040" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: "rgba(232,197,71,0.1)", border: "1px solid rgba(232,197,71,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 15, color: "#E8C547", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                    ) : (
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, padding: "28px 24px", background: "rgba(232,197,71,0.05)", border: "1px solid rgba(232,197,71,0.2)", borderRadius: 12 }}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 14 }}>Ladies Section — Camp Branch</h4>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                A dedicated women's fitness studio with Yoga, Aerobics, Zumba &amp; more — guided exclusively by female instructors.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 36 }}>SEND US A MESSAGE</h2>
            {sent ? (
              <div style={{
                background: "rgba(232,197,71,0.08)", border: "1px solid rgba(232,197,71,0.35)",
                borderRadius: 14, padding: "48px 36px", textAlign: "center",
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, color: "#E8C547", marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: 24, background: "#E8C547", color: "#0a0a0a",
                  border: "none", cursor: "pointer", fontWeight: 700, fontSize: 13,
                  letterSpacing: 1.2, textTransform: "uppercase", padding: "12px 28px", borderRadius: 8,
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{field.label}</label>
                    <input
                      type={field.type} name={field.name} value={form[field.name]}
                      onChange={handleChange} placeholder={field.placeholder} required
                      style={{
                        width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 15, outline: "none",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your fitness goals or any questions you have..."
                    rows={5} required
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 15, outline: "none",
                      resize: "vertical", fontFamily: "'DM Sans', sans-serif",
                    }}
                  />
                </div>
                <button type="submit" style={{
                  background: "#E8C547", color: "#0a0a0a", border: "none", cursor: "pointer",
                  fontWeight: 800, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
                  padding: "16px 36px", borderRadius: 8, alignSelf: "flex-start",
                }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 6vw 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 , justifyContent: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "linear-gradient(135deg, #E8C547 0%, #C9922A 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 13, color: "#0a0a0a",
              }}>RFC</div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", letterSpacing: 1.2, textTransform: "uppercase" }}>Rising Fitness Club</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>Your home for real fitness in Pune. Two branches, certified trainers, and a community built on results.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>Navigation</h4>
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => setPage(link)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.5)", fontSize: 14, padding: "5px 0", textAlign: "left",
              }}>{link}</button>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>Contact</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>
              ✉️ risingfitnessclubpune@gmail.com<br />
              📞 Camp: 8888412336<br />
              📞 Wanowrie: 09035176962
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2024 Rising Fitness Club, Pune. All rights reserved.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Est. 2018 · Camp &amp; Wanowrie</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <NavBar page={page} setPage={navigate} />
      {page === "Home" && <HomePage setPage={navigate} />}
      {page === "About Us" && <AboutPage />}
      {page === "Programs" && (
        <div style={{ paddingTop: 72 }}>
          <section style={{ background: "#111", padding: "100px 6vw 80px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Training Options</p>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, color: "#fff", lineHeight: 0.95, marginBottom: 24 }}>
                EVERY PROGRAM.<br /><span style={{ color: "#E8C547" }}>EVERY LEVEL.</span>
              </h1>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 540, lineHeight: 1.7 }}>
                From beginner HIIT sessions to advanced strength and Crossfit, our certified coaches build a program around your goals.
              </p>
            </div>
          </section>
          <section style={{ background: "#0a0a0a", padding: "80px 6vw" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, justifyContent: "center" }}>
              {PROGRAMS.map((p, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14, padding: "40px 32px",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(232,197,71,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 12 }}>{p.name}</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#111", padding: "80px 6vw" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <p style={{ fontSize: 12, color: "#E8C547", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>State-of-the-Art</p>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 48, fontWeight: 800, color: "#fff" }}>OUR EQUIPMENT</h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>Modern machines. Maintained daily. Built for results.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, justifyContent: "center" }}>
                {EQUIPMENT.map((eq, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14, overflow: "hidden",
                    transition: "border-color 0.25s, transform 0.25s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,197,71,0.45)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ height: 200, overflow: "hidden", background: eq.gradient, position: "relative" }}>
                      <img src={eq.img} alt={eq.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.85)", display: "block" }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                      <div style={{
                        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 48, opacity: 0.18, pointerEvents: "none",
                      }}>{eq.icon}</div>
                      <div style={{
                        position: "absolute", top: 12, left: 12,
                        background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.3)",
                        borderRadius: 20, padding: "4px 12px",
                        fontSize: 10, fontWeight: 700, color: "#E8C547", letterSpacing: 1.2, textTransform: "uppercase",
                      }}>{eq.category}</div>
                    </div>
                    <div style={{ padding: "20px 22px 26px" }}>
                      <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{eq.name}</h4>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{eq.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {page === "Contact Us" && <ContactPage />}
      <Footer setPage={navigate} />
    </div>
  );
}