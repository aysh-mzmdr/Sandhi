import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* --- Navigation --- */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>∞</span> Sandhi
        </div>
        <div className={styles.navLinks}>
          <a href="#how-it-works">How It Works</a>
          <a href="#industries">Industries</a>
          <a href="#impact">Our Impact</a>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Get Started</button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className={styles.hero} style={{ background: "#F0FDF4" }}>
        <div className={styles.heroContent} style={{ color: "#111827" }}>
          <div className={styles.badge} style={{ background: "#DCFCE7" }}>
            New: AI-Verified Quality Grading
          </div>
          <h1 className={styles.heroTitle} style={{ color: "#111827" }}>
            Turning Agri-Waste into <span className={styles.highlight}>Industrial Assets</span>
          </h1>
          <p className={styles.heroSubtitle} style={{ color: "#6B7280" }}>
            Sandhi is the bio-logistics bridge connecting farmers with 
            Biogas, Dairy, and Packaging industries. We handle the 
            grading, transport, and payments.
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className={styles.signupBtn} style={{ 
              fontSize: '1.2rem', 
              padding: '1rem 2.5rem', 
              borderRadius: '12px',
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              Get Started →
            </button>
          </div>
        </div>
          
        <div className={styles.heroVisual}>
          {/* Sandhi Ecosystem Visualization */}
          <svg className={styles.ecosystemGraphic} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background gradient definitions */}
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#16A34A" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#22C55E" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#16A34A" stopOpacity="0.3"/>
              </linearGradient>
              <radialGradient id="centerGlow">
                <stop offset="0%" stopColor="#BBF7D0" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#16A34A" stopOpacity="0.1"/>
              </radialGradient>
            </defs>
            
            {/* Central Sandhi Hub */}
            <circle cx="200" cy="200" r="50" fill="url(#centerGlow)" stroke="#16A34A" strokeWidth="3"/>
            <circle cx="200" cy="200" r="47" fill="white" opacity="0.9"/>
            <text x="200" y="200" textAnchor="middle" fill="#16A34A" fontSize="16" fontWeight="bold">SANDHI</text>
            <text x="200" y="218" textAnchor="middle" fill="#16A34A" fontSize="10" opacity="0.8">HUB</text>
            
            {/* Farm Node (Top) */}
            <g transform="translate(200, 70)">
              <circle cx="0" cy="0" r="40" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3"/>
              <circle cx="0" cy="0" r="37" fill="white" opacity="0.85"/>
              <text x="0" y="-8" textAnchor="middle" fill="#16A34A" fontSize="24">🌾</text>
              <text x="0" y="8" textAnchor="middle" fill="#16A34A" fontSize="12" fontWeight="700">FARM</text>
              <text x="0" y="20" textAnchor="middle" fill="#16A34A" fontSize="9" opacity="0.7">Source</text>
            </g>
            
            {/* Industry Nodes */}
            {/* Dairy (Right) */}
            <g transform="translate(330, 200)">
              <circle cx="0" cy="0" r="40" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3"/>
              <circle cx="0" cy="0" r="32" fill="white" opacity="0.85"/>
              <text x="0" y="-8" textAnchor="middle" fill="#F59E0B" fontSize="20">🥛</text>
              <text x="0" y="8" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="700">DAIRY</text>
              <text x="0" y="20" textAnchor="middle" fill="#F59E0B" fontSize="9" opacity="0.7">Feed</text>
            </g>
            
            {/* Biogas (Bottom Right) */}
            <g transform="translate(290, 330)">
              <circle cx="0" cy="0" r="40" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3"/>
              <circle cx="0" cy="0" r="32" fill="white" opacity="0.85"/>
              <text x="0" y="-8" textAnchor="middle" fill="#3B82F6" fontSize="20">⚡</text>
              <text x="0" y="8" textAnchor="middle" fill="#3B82F6" fontSize="11" fontWeight="700">BIOGAS</text>
              <text x="0" y="20" textAnchor="middle" fill="#3B82F6" fontSize="9" opacity="0.7">Energy</text>
            </g>
            
            {/* Packaging (Bottom Left) */}
            <g transform="translate(110, 330)">
              <circle cx="0" cy="0" r="40" fill="#E0E7FF" stroke="#6366F1" strokeWidth="3"/>
              <circle cx="0" cy="0" r="32" fill="white" opacity="0.85"/>
              <text x="0" y="-8" textAnchor="middle" fill="#6366F1" fontSize="20">📦</text>
              <text x="0" y="8" textAnchor="middle" fill="#6366F1" fontSize="11" fontWeight="700">PACKAGING</text>
              <text x="0" y="20" textAnchor="middle" fill="#6366F1" fontSize="9" opacity="0.7">Materials</text>
            </g>
            
            {/* Mushroom (Left) */}
            <g transform="translate(70, 200)">
              <circle cx="0" cy="0" r="40" fill="#F3E8FF" stroke="#9333EA" strokeWidth="3"/>
              <circle cx="0" cy="0" r="32" fill="white" opacity="0.85"/>
              <text x="0" y="-8" textAnchor="middle" fill="#9333EA" fontSize="20">🍄</text>
              <text x="0" y="8" textAnchor="middle" fill="#9333EA" fontSize="11" fontWeight="700">MUSHROOM</text>
              <text x="0" y="20" textAnchor="middle" fill="#9333EA" fontSize="9" opacity="0.7">Substrate</text>
            </g>
            
            {/* Flow Paths */}
            <path d="M 200 110 Q 200 155 200 150" stroke="#16A34A" strokeWidth="5" fill="none" strokeDasharray="4,8">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 240 200 Q 285 200 295 200" stroke="#16A34A" strokeWidth="5" fill="none" strokeDasharray="4,8">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 235 235 Q 262 282 255 295" stroke="#16A34A" strokeWidth="5" fill="none" strokeDasharray="4,8">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 165 235 Q 137 282 145 295" stroke="#16A34A" strokeWidth="5" fill="none" strokeDasharray="4,8">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 160 200 Q 115 200 105 200" stroke="#16A34A" strokeWidth="5" fill="none" strokeDasharray="4,8">
              <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Floating particles for visual interest */}
            <circle cx="150" cy="150" r="2" fill="#16A34A" opacity="0.6">
              <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="250" cy="250" r="2" fill="#22C55E" opacity="0.6">
              <animate attributeName="cy" values="250;240;250" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="280" r="1.5" fill="#16A34A" opacity="0.5">
              <animate attributeName="cx" values="180;190;180" dur="5s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <div className={styles.statFloat}>
            <span className={styles.statNumber} style={{ color: "#16A34A" }}>12k+</span>
            <span className={styles.statLabel} style={{ color: "#6B7280" }}>Tons Moved</span>
          </div>
        </div>
      </header>

      {/* --- Trust/Stats Banner --- */}
      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <h3>₹4.2 Cr</h3>
          <p>Farmer Income Generated</p>
        </div>
        <div className={styles.statItem}>
          <h3>8,500+</h3>
          <p>Acres of Burn Prevented</p>
        </div>
        <div className={styles.statItem}>
          <h3>48 Hrs</h3>
          <p>Avg. Pickup Time</p>
        </div>
      </section>

      {/* --- The Ecosystem (Cascading Utility) --- */}
      <section className={styles.ecosystem} id="industries">
        <h2 className={styles.sectionTitle}>One Platform, Multiple Industries</h2>
        <p className={styles.sectionSubtitle}>
          Our AI grades rice straws automatically, ensuring the right product for every industry.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>🥛</div>
            <h3>Dairy Farms</h3>
            <p>Premium, dry, mold-free fodder for livestock. Verified safe.</p>
            <span className={styles.gradeBadge}>Grade A</span>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>🍄</div>
            <h3>Mushroom Farms</h3>
            <p>Clean substrate for high-yield cultivation. Optimized moisture.</p>
            <span className={styles.gradeBadge}>Grade B</span>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>📦</div>
            <h3>Eco-Packaging</h3>
            <p>Strong fiber content for pulping and molding. Bulk supply.</p>
            <span className={styles.gradeBadge}>Grade C</span>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>⚡</div>
            <h3>Biogas Plants</h3>
            <p>High-volume organic matter for anaerobic digestion. Cost-effective.</p>
            <span className={styles.gradeBadge}>Grade D</span>
          </div>
        </div>
      </section>

      {/* --- How It Works (The Sandhi Flow) --- */}
      <section className={styles.process} id="how-it-works">
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>01</div>
            <h4>List & Scan</h4>
            <p>Farmers specifies the quantity of rice straw, then uploads a photo. Our AI instantly grades quality. The order is placed for collection</p>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <div className={styles.stepNum}>02</div>
            <h4>Route & Optimize</h4>
            <p>Sandhi connects to the nearest Depot hub and requests collection. The hub then transports it to the customer industry.</p>
          </div>
          <div className={styles.stepLine}></div>
          <div className={styles.step}>
            <div className={styles.stepNum}>03</div>
            <h4>Deliver & Pay</h4>
            <p>Industry gets raw material. All transactions are handled and performed online to reduce trust issues.</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>Sandhi</h2>
            <p>Where Waste Becomes Wealth</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Platform</h4>
              <a href="#">For Farmers</a>
              <a href="#">For Buyers</a>
              <a href="#">Pricing</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          &copy; 2026 Sandhi by aysh_mzmdr. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;