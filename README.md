# 🌟 Academix-Hub: Multi-Role Learning Management System (LMS)

A robust, full-stack Learning Management System built on the **MERN stack**, designed to support differentiated user experiences for both **Learners** and **Instructors** under a secure, tiered access model.

---

## 🚀 Deployment & Repository

* **Live Demo:** [https://academix-hub.netlify.app/](https://academix-hub.netlify.app/)
* **Server Code:** [Academix Hub Server Repo](https://github.com/syedbayzid82849/Academix_Hub_Server_site.git)

---

## Recent added features and Technology

*Features:
1. Dashboard 
2. My Courses section in Dashboard.
3. Profile section in Dashboard.
4. Membership section.

*Technology:
1. NodeMailer for contact.

---

## 🔑 Key Features

### 1. Multi-Role Functionality & Dashboards

The system implements a critical segregation of duties to manage a dual-role environment.

**Instructor Workflow (CRUD):** Dedicated interface for Course Management, enabling instructors to create, edit, and delete their proprietary content via authenticated API endpoints (`/all-course` routes).

**Learner Management:** Personalized dashboard provides an overview of enrolled courses, recent activity, and progress tracking. Learners can manage their active commitments via the **“My Enrollments”** view.

**Gamification & Engagement:** Tracks and displays user achievements, course completion, and quiz submissions to drive continuous engagement.

---

### 2. Secure Monetization and Tiered Access

The platform supports a **Freemium / Tiered Subscription Model**, requiring strong security for financial transactions.

**Premium Feature Toggling:** Access to features like *Advanced Task Automation* is conditionally rendered and enforced server-side based on the user’s `isPremium` status.

**PCI-Compliant Payments:** Integrated with **Stripe** to handle card processing securely via hosted checkout pages—ensuring zero direct handling of sensitive data (Tokenization).

**Webhooks for Provisioning:** The user’s Premium status is updated asynchronously using a **server-to-server Stripe Webhook** (`/api/webhook`), guaranteeing access only upon successful payment confirmation.

---

### 3. Data Integrity and Reporting

**Dynamic Reporting:** The backend leverages **MongoDB Aggregation Pipeline** (`$lookup`, `$group`) for relational-style joins and reporting—such as identifying *Popular Courses*.

**Enrollment Management:** Dedicated logic manages enrollment records, maintaining consistency between `users` and `courses` collections through `/myEnrolls` API.

---

## ⚙️ Technology Stack

| Category           | Technology                                     | Key Libraries / Implementations                                                 |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| **Frontend**       | React.js (SPA)                                 | Tailwind CSS, DaisyUI, Framer Motion, Lottie for enhanced UX                    |
| **Backend**        | Node.js & Express.js                           | Core API layer, CORS, JSON middleware, Nodemailer (contact form email delivery) |
| **Database**       | MongoDB                                        | Cloud-hosted (MongoClient with ServerApiVersion.v1) for persistence             |
| **Authentication** | Firebase (Client) + Custom Role Logic (Server) | Hybrid authentication approach for sessions and role management                 |
| **Payments**       | Stripe                                         | SDK for checkout, Webhooks for subscription provisioning                        |
| **Testing**        | Jest                                           | Automated unit testing (client-side)                                            |

---

## 🔒 Architectural Highlights

### 1. Role-Based Access Control (RBAC)

* **Principle of Least Privilege:** Enforced via server-side authorization middleware that validates user roles for sensitive requests (e.g., course creation, deletion).
* **Object-Level Security:** Instructors can only modify courses where their `instructorEmail` matches the course record, preventing unauthorized content modification.

### 2. DevOps & Code Quality

* **CI/CD Ready:** Version-controlled project compatible with automated deployment platforms (Vercel, Netlify) and GitHub Actions for CI.
* **Testing Strategy:** Unit testing via Jest, with plans for integration and end-to-end testing (Playwright/Cypress) for critical workflows.

### 3. Scalable Content Delivery

* **Video Processing Pipeline:** Instructor uploads are transcoded asynchronously into multiple resolutions (e.g., 1080p, 720p).
* **Global Distribution:** Processed content delivered via CDN with Adaptive Bitrate (ABR) streaming for optimal playback.

---

## 🛠️ Installation & Setup

To run **Academix-Hub** locally, ensure you have **Node.js** and **npm** installed.

### 1. Environment Configuration

Create a `.env` file inside the **Server** directory and populate it with:

```bash
PORT=3000
MONGODB_URI="<Your-MongoDB-Atlas-Connection-String>"
STRIPE_SECRET_KEY="<Your-Stripe-Secret-Key>"
STRIPE_WEBHOOK_SECRET="<Your-Stripe-Webhook-Signing-Secret>"
FRONTEND_URL="http://localhost:5173"  # Or your client local URL

# Nodemailer Configuration
EMAIL_USER="<Your-Admin-Email>"
EMAIL_PASS="<Your-Admin-Email-App-Password>"
```

### 2. Setup & Run

| Step               | Server (Backend)                                                            | Client (Frontend)                       |
| ------------------ | --------------------------------------------------------------------------- | --------------------------------------- |
| **1. Clone Repos** | `git clone https://github.com/syedbayzid82849/Academix_Hub_Server_site.git` | (Clone your client repo)                |
| **2. Install**     | `cd Academix_Hub_Server_site && npm install`                                | `cd academix-hub-client && npm install` |
| **3. Run**         | `npm start` (or `npm run dev` with nodemon)                                 | `npm run dev`                           |

The **server** will typically run on `http://localhost:3000` and the **client** on `http://localhost:5173`.

---

## 📈 Future Enhancements

* Add Admin analytics dashboard (course revenue, engagement trends).
* Implement end-to-end testing with Playwright.
* Integrate content moderation and reporting for UGC.
* Enhance accessibility and multi-language support.

---

### 🧩 License

This project is open-source and available under the **MIT License**.

---

**© 2025 Syed Bayzid — Academix-Hub**
