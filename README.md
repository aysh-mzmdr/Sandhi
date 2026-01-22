# Sandhi: Transforming Agricultural Residue into Industrial Assets

> **Vision:** Converting a national crisis into an economic growth opportunity by turning agricultural waste into valuable industrial raw materials.

---

## 🏗️ 1. The Problem vs. The Solution

### The National Crisis
Currently, rice straw is considered waste. The most common treatment is **burning**, causing:
* **Heavy Pollution:** Massive contribution to smog and air quality deterioration.
* **Economic Loss:** Valuable biomass is destroyed rather than utilized.
* **Urgency:** Public and Government sectors are desperate for a viable alternative to stubble burning.

### The Sandhi Solution
Sandhi is a B2B platform that acts as a bridge between farmers and industries.
* **For Farmers:** It provides extra income and a hassle-free waste disposal method.
* **For Industries:** It ensures a cheap, consistent, and quality-graded supply of raw materials.
* **For The Nation:** It solves the pollution crisis while boosting the rural economy.

---

## 🌾 2. AI-Driven Quality Grading

Our proprietary AI (MobileNetV3) analyzes rice straws and grades them to ensure they reach the most appropriate industry. This ensures **zero waste**.

| Grade | Category | Target Industry | Application |
| :--- | :--- | :--- | :--- |
| **Grade A** | Premium | **Dairy Farms** | High-nutrition fodder for livestock. |
| **Grade B** | Substrate | **Mushroom Farms** | Optimal growth medium/substrate. |
| **Grade C** | Fiber | **Packaging Industry** | Eco-friendly molded pulp and paper. |
| **Grade D** | Fuel | **Biogas Plants** | Biomass for green energy generation. |

---

## 🚀 3. Strategic Advantages

### 🔄 The "Multi-Exit" Strategy
This feature solves the biggest problem in supply chains: **Demand Saturation**.
* **Flexibility:** If Grade C (Packaging) demand drops or quality is slightly off, the stock isn't wasted—it is automatically rerouted to Grade D (Biogas).
* **Geospatial Logic:** If a specific industry is too far, the platform identifies a closer buyer from a different sector to minimize logistics costs.
* **Outcome:** A sustainable business model that functions year-round.

### 🌿 The Carbon Credit Calculator
A massive value-add for the Packaging and Biogas sectors.
* **Mechanism:** The platform calculates the specific amount of $CO_2$ saved by converting a ton of rice straw into industrial product instead of burning it.
* **Financial Benefit:** Companies can claim these **Carbon Credits** to get tax breaks or sell them, monetizing their ethical sourcing.

---

## 💻 4. Technical Architecture

The platform is built on a robust, scalable stack designed for geospatial logistics and high-speed AI processing.

### **Frontend**
* **Framework:** React.js

### **Backend (Core Application)**
* **Runtime:** Node.js
* **Framework:** Express.js

### **Backend (Microservices & AI)**
* **Framework:** Python (FastAPI)
* **Responsibilities:**
    * Payment Webhooks
    * AI Image Processing
    * Logistics Route Optimization
* **AI Model:** MobileNetV3 (Convolutional Neural Network) via TensorFlow Lite for efficient edge/cloud detection.

### **Database**
* **Primary DB:** PostgreSQL
* **Spatial Extension:** **PostGIS** (Essential for geospatial queries to map farmers to nearby industries).

### **Security & Auth**
* **Middleware:** Passport.js
* **Encryption:** Bcrypt

### **Infrastructure**
* **Payment Gateway:** Razorpay

---

## 🔮 5. Future Roadmap & Impact

* **Scalability:** While currently focused on rice straw, Sandhi is built to expand into other agricultural wastes like **bagasse** and **molasses** (sugarcane).
* **Irreplaceability:** By creating a network that benefits sellers (farmers) and buyers (industries) simultaneously, Sandhi aims to become the standard infrastructure for the circular bio-economy.