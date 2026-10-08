// -------------------------------------------------------------
// PROJECT PREVIEW MODAL DATA & HANDLERS
// -------------------------------------------------------------
const projectDetails = {
    agrisathi: {
        title: "AgriSathi AI — Agricultural Intelligence & Decision Support",
        subtitle: "Java 21 · Spring Boot 3.x · Spring Data JPA · PostgreSQL · JWT Auth · Computer Vision Pipeline",
        github: "https://github.com/gargnikunj991-ux/AgriSathi_AI",
        demo: "https://agri-sathi-ai-three.vercel.app/",
        architecture: [
            "Client Tier (Web / Mobile App / Swagger UI) ➔ Spring Boot 3 REST Controllers (/api/v1)",
            "Stateless Security Filter Chain: Spring Security 6, JWT Bearer validation, BCrypt hashing & RBAC (FARMER, BUYER, ADMIN)",
            "Service & Business Logic: Transactional workflows (@Transactional), DTO input validation (@Valid), and Global Exception Handling",
            "AI Computer Vision & Media: Multipart file ingestion interfacing with Cloudinary CDN & computer vision disease classification inference",
            "Hyper-Local Weather Engine: Real-time multi-day forecast, spraying condition evaluation, and irrigation scheduling",
            "Peer-to-Peer Agritech Marketplace: Direct buy orders and equipment rental/borrow requests with state-machine order flow",
            "Government Schemes Recommendation Engine: Multi-factor algorithm matching farmer profile (state, crop, farm size)",
            "Data Layer: Spring Data JPA Repositories ➔ Relational PostgreSQL 15+ Schema (7+ tables, normalized & indexed)"
        ],
        schemas: [
            { table: "users", pkey: "id (UUID)", fkeys: "None", fields: "email (UQ), password_hash, role (FARMER/BUYER/ADMIN), created_at" },
            { table: "farmer_profiles", pkey: "id (BIGINT)", fkeys: "user_id -> users(id)", fields: "full_name, state, district, farm_size_acres, soil_type, phone" },
            { table: "crops", pkey: "id (BIGINT)", fkeys: "farmer_id -> farmer_profiles(id)", fields: "crop_name, variety, sowing_date, expected_harvest, status" },
            { table: "disease_scans", pkey: "id (BIGINT)", fkeys: "crop_id -> crops(id)", fields: "image_url, diagnosed_disease, confidence_score, treatment, scan_timestamp" },
            { table: "marketplace_listings", pkey: "id (BIGINT)", fkeys: "seller_id -> users(id)", fields: "title, category, quantity, unit_price, status (AVAILABLE/RENTED)" }
        ],
        spotlights: [
            { name: "CropDiseaseController.java", desc: "Multipart file upload handler and computer vision inference controller", url: "https://github.com/gargnikunj991-ux/AgriSathi_AI" },
            { name: "SecurityConfig.java", desc: "Spring Security 6 stateless JWT filter chain and role-based authorization rules", url: "https://github.com/gargnikunj991-ux/AgriSathi_AI" },
            { name: "MarketplaceListing.java", desc: "JPA entity with relational audit listeners and optimistic version locking", url: "https://github.com/gargnikunj991-ux/AgriSathi_AI" }
        ],
        endpoints: [
            { method: "POST", route: "/api/v1/auth/register", desc: "Registers user profile with role (FARMER / BUYER) & BCrypt hashing" },
            { method: "POST", route: "/api/v1/auth/login", desc: "Authenticates credentials and returns JWT bearer access token" },
            { method: "GET", route: "/api/v1/auth/me", desc: "Retrieves currently authenticated user profile and roles" },
            { method: "PUT", route: "/api/v1/farmer/profile", desc: "Updates farm acreage, soil classification, district, and main crop" },
            { method: "POST", route: "/api/v1/crops", desc: "Registers active crop lifecycle with sowing and projected harvest dates" },
            { method: "GET", route: "/api/v1/crops", desc: "Retrieves active farmer crop records with growth tracking" },
            { method: "POST", route: "/api/v1/disease/scan", desc: "Multipart scan upload for AI crop disease diagnosis & treatment advice" },
            { method: "GET", route: "/api/v1/disease/history", desc: "Fetches historical crop scan records with confidence scores" },
            { method: "GET", route: "/api/v1/weather/farming-summary", desc: "Hyper-local weather summary with spraying, irrigation & risk alerts" },
            { method: "GET", route: "/api/v1/weather/forecast", desc: "Multi-day agronomic weather forecast with precipitation probability" },
            { method: "POST", route: "/api/v1/recommendations/fertilizer", desc: "Generates optimal fertilizer recommendations based on crop and disease" },
            { method: "POST", route: "/api/v1/chat", desc: "Multilingual conversational AI advisory assistant for agricultural queries" },
            { method: "POST", route: "/api/v1/marketplace/listings", desc: "Creates produce listing with quantity, pricing, and Cloudinary media" },
            { method: "GET", route: "/api/v1/marketplace/listings", desc: "Filters produce listings by cropName, location, minPrice & maxPrice" },
            { method: "POST", route: "/api/v1/marketplace/listings/{id}/buy", desc: "Submits direct purchase order between buyer and producer" },
            { method: "POST", route: "/api/v1/marketplace/listings/{id}/borrow", desc: "Equipment rental and borrow request submission with timeline" },
            { method: "GET", route: "/api/v1/government-schemes/recommendations", desc: "Intelligent subsidy recommendation engine matching state, crop & farm size" },
            { method: "GET", route: "/api/v1/government-schemes", desc: "Lists and filters government welfare schemes by state and target crop" },
            { method: "POST", route: "/api/v1/files/upload", desc: "Multipart file upload handler interfacing with Cloudinary media CDN" }
        ]
    },
    devtinder: {
        title: "DevTinder — Developer Teammate Matching Platform (Backend)",
        subtitle: "Java 21 · Spring Boot 3 · PostgreSQL 16 · WebSockets (STOMP) · Spring Security · Render Cloud",
        github: "https://github.com/gargnikunj991-ux/Devlynix-Buildathon-2.0.git",
        demo: "https://devlynix-frontend12-git-main-hxmblevishus-projects.vercel.app/",
        architecture: [
            "Engineering Role: Prototyped backend during Devlynix Buildathon 2.0 with frontend teammates; independently evolved into production-grade microservice integrated with Next.js client",
            "Real-Time Messaging Broker: Bidirectional chat over WebSockets (STOMP) with delta sync fallback (GET /api/chat/{id}/messages?after={id}) and unread tracking, sub-50ms latency",
            "Algorithmic Skill Synergy Engine: Heuristic scoring engine (50–99%) weighting shared technologies, complementary engineering disciplines, and project pitches",
            "Stateless Security & Rate Limiting: Spring Security 6 JWT filter chain with Refresh Token Rotation, BCrypt hashing, and sliding-window IP rate limiting (RateLimitFilter)",
            "Discovery State Machine: Reciprocal match radar (GET /api/matches/requests) and queue rewind (DELETE /api/discover/reset-passes) preventing candidate starvation",
            "Relational Data Persistence: Spring Data JPA Repositories ➔ PostgreSQL 16 normalized relational schema (users, skills, user_skills, swipes, matches, messages)",
            "Production Cloud Deployment: Containerized with Docker and deployed to Render Cloud with health check probes (/api/health), achieving 99.9% uptime"
        ],
        schemas: [
            { table: "users", pkey: "id (BIGINT)", fkeys: "None", fields: "name, email (UQ), password_hash, github_url, bio, looking_for, location, project_pitch, active, created_at, updated_at" },
            { table: "skills", pkey: "id (BIGINT)", fkeys: "None", fields: "name (UQ, VARCHAR(60))" },
            { table: "user_skills", pkey: "(user_id, skill_id)", fkeys: "user_id -> users(id), skill_id -> skills(id)", fields: "ManyToMany junction linking developers to specialized tech tags" },
            { table: "swipes", pkey: "id (BIGINT)", fkeys: "swiper_id -> users(id), swiped_id -> users(id)", fields: "direction (LIKE / PASS), created_at, index: (swiper_id, swiped_id)" },
            { table: "matches", pkey: "id (BIGINT)", fkeys: "user_one_id -> users(id), user_two_id -> users(id)", fields: "created_at, index: (user_one_id, user_two_id)" },
            { table: "messages", pkey: "id (BIGINT)", fkeys: "match_id -> matches(id), sender_id -> users(id)", fields: "content, is_read, read_at, created_at, index: (match_id, created_at)" }
        ],
        spotlights: [
            { name: "DiscoverService.java", desc: "Algorithmic synergy calculation evaluating shared skills, complementary stacks, and project pitch relevance", url: "https://github.com/gargnikunj991-ux/Devlynix-Buildathon-2.0.git" },
            { name: "ChatController.java", desc: "Delta synchronization (?after={id}), read receipts (/read), and WebSocket STOMP broadcast integration", url: "https://github.com/gargnikunj991-ux/Devlynix-Buildathon-2.0.git" },
            { name: "MatchService.java", desc: "Swipe evaluation state machine, incoming like queries, mutual match creation, and unmatching cascade", url: "https://github.com/gargnikunj991-ux/Devlynix-Buildathon-2.0.git" },
            { name: "RateLimitFilter.java", desc: "In-memory sliding-window IP rate limiter safeguarding authentication and discovery endpoints", url: "https://github.com/gargnikunj991-ux/Devlynix-Buildathon-2.0.git" },
            { name: "CassetteCard.tsx", desc: "Retro cassette-styled candidate card with mechanical audio feedback, Framer Motion gestures, and dossier modal", url: "https://devlynix-frontend12-git-main-hxmblevishus-projects.vercel.app/" }
        ],
        endpoints: [
            { method: "POST", route: "/api/auth/register", desc: "Registers developer profile with skill tags, email, and BCrypt-hashed password" },
            { method: "POST", route: "/api/auth/login", desc: "Authenticates credentials and returns JWT access token" },
            { method: "POST", route: "/api/auth/refresh", desc: "Issues renewed JWT bearer token for seamless persistent developer sessions" },
            { method: "GET", route: "/api/profile/me", desc: "Retrieves logged-in developer profile, bio, skills, and hackathon project pitch" },
            { method: "PATCH", route: "/api/profile/me", desc: "Updates bio, lookingFor, location, githubUrl, skills, and project pitch" },
            { method: "GET", route: "/api/discover", desc: "Paginated candidate feed with filterBySkill and real-time AI Synergy scores (50–99%)" },
            { method: "POST", route: "/api/discover/swipe", desc: "Submits swipe (LIKE / PASS); triggers mutual match creation on reciprocal like" },
            { method: "DELETE", route: "/api/discover/reset-passes", desc: "Queue rewind; clears PASS swipes allowing re-evaluation of skipped developers" },
            { method: "GET", route: "/api/matches", desc: "Lists all mutual matches with unread message counts and profile dossiers" },
            { method: "GET", route: "/api/matches/requests", desc: "Incoming radar; lists developers who liked the user awaiting reciprocal response" },
            { method: "DELETE", route: "/api/matches/{matchId}", desc: "Unmatches developer pair, purging conversation history and reciprocal swipes" },
            { method: "GET", route: "/api/chat/{matchId}/messages", desc: "Delta chat sync (?after={id}&limit={n}) and paginated message history" },
            { method: "PUT", route: "/api/chat/{matchId}/read", desc: "Marks unread messages as read with timestamp for active conversation" },
            { method: "POST", route: "/api/chat/{matchId}/messages", desc: "Dispatches message and broadcasts to /topic/matches/{matchId} subscribers" },
            { method: "WS", route: "/ws/chat (STOMP)", desc: "Real-time bidirectional WebSocket connection with SockJS fallback" }
        ]
    },
    library: {
        title: "LibroSphere — High-Concurrency Asset Lending & Reservation Engine",
        subtitle: "Java 21 · Spring Boot 3 · Spring Data JPA · PostgreSQL 16 · JUnit 5 (64 Tests)",
        github: "https://github.com/gargnikunj991-ux/library_spring.git",
        architecture: [
            "Concurrency Control: Database row-level pessimistic locking (@Lock(LockModeType.PESSIMISTIC_WRITE) / SELECT ... FOR UPDATE) inside atomic @Transactional boundaries eliminating inventory race conditions",
            "FIFO Waitlist Queue: State-driven reservation lifecycle (WAITING ➔ NOTIFIED_READY ➔ CLAIMED/EXPIRED) with automated 48-hour pickup window allocation on asset return",
            "Nightly Reconciliation Worker: Scheduled cron (@Scheduled) running midnight audits for overdue loans and calculating tiered member fine liabilities",
            "Database Index Optimization: Composite B-Tree indexes on books(title, author) and borrow_records(returned, due_date) slashing query latency from 120ms to under 15ms",
            "Stateless Security: JWT Authentication with database-persisted Refresh Token Rotation (/auth/refresh) and RBAC (ADMIN, LIBRARIAN, ASSISTANT)",
            "Automated Concurrency Testing: Comprehensive 64-test JUnit 5 test suite verifying thread safety and 0 oversells under 50-thread concurrent stress (CountDownLatch)"
        ],
        schemas: [
            { table: "books", pkey: "id (BIGINT)", fkeys: "None", fields: "title, author, total_copies, available_copies, indexes: (title, author)" },
            { table: "members", pkey: "member_id (BIGINT)", fkeys: "None", fields: "name, email, phone_number" },
            { table: "borrow_records", pkey: "borrow_id (BIGINT)", fkeys: "book_id -> books(id), member_id -> members(member_id)", fields: "borrow_date, due_date, return_date, returned, index: (returned, due_date)" },
            { table: "book_reservations", pkey: "id (BIGINT)", fkeys: "book_id -> books(id), member_id -> members(member_id)", fields: "status (WAITING/NOTIFIED_READY/...), reserved_at, pickup_deadline, index: (book_id, status, reserved_at)" },
            { table: "fine_records", pkey: "fine_id (BIGINT)", fkeys: "borrow_id -> borrow_records(borrow_id), member_id -> members(member_id)", fields: "amount, paid, calculated_at, paid_at, index: (member_id, paid)" },
            { table: "refresh_tokens", pkey: "id (BIGINT)", fkeys: "user_id -> users(id)", fields: "token (UQ), expiry_date, revoked" }
        ],
        spotlights: [
            { name: "BookRepository.java", desc: "Pessimistic write locking query definition: @Lock(LockModeType.PESSIMISTIC_WRITE) and case-insensitive catalog search", url: "https://github.com/gargnikunj991-ux/library_spring.git" },
            { name: "BorrowService.java", desc: "Atomic decrement under @Transactional boundary and automated FIFO waitlist allocation", url: "https://github.com/gargnikunj991-ux/library_spring.git" },
            { name: "OverdueReconciliationWorker.java", desc: "Nightly cron worker performing idempotent tiered overdue fine calculations", url: "https://github.com/gargnikunj991-ux/library_spring.git" },
            { name: "BorrowConcurrencyTest.java", desc: "Multi-threaded stress test using CountDownLatch and ExecutorService verifying 0 double-checkouts", url: "https://github.com/gargnikunj991-ux/library_spring.git" }
        ],
        endpoints: [
            { method: "POST", route: "/auth/login", desc: "Authenticates user and returns signed JWT Access Token & Refresh Token" },
            { method: "POST", route: "/auth/refresh", desc: "Rotates refresh token and issues fresh JWT access token" },
            { method: "GET", route: "/api/books", desc: "Lists all cataloged books with multi-copy inventory counts (total & available)" },
            { method: "GET", route: "/api/books/search", desc: "Optimized case-insensitive search by keyword matching title or author" },
            { method: "POST", route: "/api/borrow", desc: "Executes concurrency-safe borrow with pessimistic write lock & atomic inventory decrement" },
            { method: "POST", route: "/api/borrow/return/{borrowId}", desc: "Processes book return and auto-assigns copy to next FIFO waitlist reservation" },
            { method: "POST", route: "/api/reservations", desc: "Places member onto FIFO waitlist queue when book copies are exhausted" },
            { method: "GET", route: "/api/reservations/queue/{bookId}", desc: "Queries active waitlist queue and member positions for an asset" },
            { method: "GET", route: "/api/fines", desc: "Audits all system fines across the library (Admin & Librarian only)" },
            { method: "POST", route: "/api/fines/{id}/pay", desc: "Processes fine payment and marks record as settled" }
        ]
    }
};

function openProjectModal(key) {
    const data = projectDetails[key];
    if (!data) return;

    document.getElementById("modalProjectTitle").textContent = data.title;
    document.getElementById("modalProjectSubtitle").textContent = data.subtitle;
    document.getElementById("modalGithubLink").href = data.github;

    let endpointRows = data.endpoints.map(ep => {
        const methodClass = "method-" + ep.method.toLowerCase();
        return `<tr>
            <td><span class="http-method ${methodClass}">${ep.method}</span></td>
            <td style="color:#00e5ff; font-weight:600;">${ep.route}</td>
            <td style="color:#cbd5e1;">${ep.desc}</td>
        </tr>`;
    }).join("");

    let archSteps = data.architecture.map((step, idx) => `
        <div class="arch-diagram-step">
            <span class="arch-badge">0${idx + 1}</span>
            <span>${step}</span>
        </div>
    `).join("");

    let schemaRows = (data.schemas || []).map(s => `
        <tr>
            <td style="color:#ffcc00; font-weight:bold;">${s.table}</td>
            <td style="color:#00ff9d; font-family:monospace; font-size:0.75rem;">${s.pkey}</td>
            <td style="color:#79c0ff; font-family:monospace; font-size:0.75rem;">${s.fkeys}</td>
            <td style="color:#cbd5e1; font-size:0.78rem;">${s.fields}</td>
        </tr>
    `).join("");

    let spotlightCards = (data.spotlights || []).map(sp => `
        <a href="${sp.url}" target="_blank" rel="noopener noreferrer" class="spotlight-card">
            <div class="spotlight-header">
                <i class="fab fa-java" style="color:#00ff9d;"></i>
                <span class="spotlight-name">${sp.name}</span>
                <i class="fas fa-arrow-up-right-from-square" style="color:#94a3b8; font-size:0.75rem; margin-left:auto;"></i>
            </div>
            <p class="spotlight-desc">${sp.desc}</p>
        </a>
    `).join("");

    let demoAction = data.demo ? `
        <div style="margin-bottom: 16px;">
            <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="btn-demo">
                <i class="fas fa-arrow-up-right-from-square"></i> Open Live Deployed Application ↗
            </a>
        </div>
    ` : "";

    document.getElementById("modalBody").innerHTML = `
        ${demoAction}

        <div>
            <h4 class="modal-section-title"><i class="fas fa-sitemap"></i> SYSTEM ARCHITECTURAL FLOW</h4>
            <div class="arch-diagram-box">${archSteps}</div>
        </div>

        <div>
            <h4 class="modal-section-title"><i class="fas fa-code-branch"></i> CORE BACKEND SOURCE SPOTLIGHT</h4>
            <div class="spotlight-grid">${spotlightCards}</div>
        </div>

        <div>
            <h4 class="modal-section-title"><i class="fas fa-database"></i> RELATIONAL DATABASE SCHEMA &amp; KEYS</h4>
            <table class="endpoint-table">
                <thead>
                    <tr>
                        <th>Table</th>
                        <th>Primary Key</th>
                        <th>Foreign Keys</th>
                        <th>Key Columns &amp; Constraints</th>
                    </tr>
                </thead>
                <tbody>${schemaRows}</tbody>
            </table>
        </div>

        <div>
            <h4 class="modal-section-title"><i class="fas fa-plug"></i> REST API ENDPOINT SPECIFICATIONS</h4>
            <table class="endpoint-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint Route</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>${endpointRows}</tbody>
            </table>
        </div>
    `;

    const modal = document.getElementById("projectModal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

function handleModalBackdropClick(e) {
    if (e.target.id === "projectModal") {
        closeProjectModal();
    }
}

function openResumeModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeResumeModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

function handleResumeModalBackdropClick(e) {
    if (e.target.id === "resumeModal") {
        closeResumeModal();
    }
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeProjectModal();
        closeResumeModal();
    }
});

// -------------------------------------------------------------
// DYNAMIC FILTERING (PROJECTS & STACK)
// -------------------------------------------------------------
function filterProjects(category, btn) {
    document.querySelectorAll("#projects .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cards = document.querySelectorAll("#projectGrid .glass-card");
    cards.forEach(card => {
        const cats = card.getAttribute("data-category") || "";
        if (category === "all" || cats.includes(category)) {
            card.classList.remove("filtered-out");
        } else {
            card.classList.add("filtered-out");
        }
    });
}

function filterStack(category, btn) {
    document.querySelectorAll("#stack .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cards = document.querySelectorAll("#stackGrid .glass-card");
    cards.forEach(card => {
        const cat = card.getAttribute("data-category") || "";
        if (category === "all" || cat.includes(category)) {
            card.classList.remove("filtered-out");
        } else {
            card.classList.add("filtered-out");
        }
    });
}

// -------------------------------------------------------------
// TERMINAL WORKBENCH TABS & INTERACTIVE CLI
// -------------------------------------------------------------
function switchTermTab(tab) {
    const cliView = document.getElementById("termCliView");
    const lockView = document.getElementById("termLockView");

    const tabCliBtn = document.getElementById("tabCliBtn");
    const tabLockBtn = document.getElementById("tabLockBtn");

    if (cliView) cliView.style.display = "none";
    if (lockView) lockView.style.display = "none";

    if (tabCliBtn) tabCliBtn.classList.remove("active");
    if (tabLockBtn) tabLockBtn.classList.remove("active");

    if (tab === "concurrency" || tab === "lab") {
        if (lockView) lockView.style.display = "block";
        if (tabLockBtn) tabLockBtn.classList.add("active");
    } else {
        if (cliView) cliView.style.display = "block";
        if (tabCliBtn) tabCliBtn.classList.add("active");
        const input = document.getElementById("cliInput");
        if (input) input.focus();
    }
}

// -------------------------------------------------------------
// CONCURRENCY & PESSIMISTIC LOCKING SIMULATOR
// -------------------------------------------------------------
let isPessimisticLock = true;
let isSimulating = false;

function initWorkerGrid() {
    const grid = document.getElementById("simWorkerGrid");
    if (!grid) return;
    grid.innerHTML = "";
    for (let i = 1; i <= 50; i++) {
        const node = document.createElement("div");
        node.className = "worker-node";
        node.id = `worker-node-${i}`;
        node.textContent = `T${i < 10 ? '0' + i : i}`;
        node.title = `Thread #${i} (Idle)`;
        grid.appendChild(node);
    }
}

function resetWorkerGrid() {
    for (let i = 1; i <= 50; i++) {
        const node = document.getElementById(`worker-node-${i}`);
        if (node) {
            node.className = "worker-node";
            node.title = `Thread #${i} (Idle)`;
        }
    }
}

function setSimMode(useLock) {
    if (isSimulating) return;
    isPessimisticLock = useLock;
    const btnPessimistic = document.getElementById("simModePessimistic");
    const btnVulnerable = document.getElementById("simModeVulnerable");

    if (useLock) {
        btnPessimistic.className = "sim-mode-btn active";
        btnVulnerable.className = "sim-mode-btn";
    } else {
        btnPessimistic.className = "sim-mode-btn";
        btnVulnerable.className = "sim-mode-btn vulnerable active";
    }

    resetWorkerGrid();
    const progressBar = document.getElementById("simProgressBar");
    if (progressBar) progressBar.style.width = "0%";
    const threadsCountEl = document.getElementById("simThreadsCount");
    if (threadsCountEl) threadsCountEl.textContent = "0 / 50";
    const finalStockEl = document.getElementById("simFinalStock");
    if (finalStockEl) {
        finalStockEl.className = "sim-stat-val text-green";
        finalStockEl.textContent = "2";
    }
    const waitlistEl = document.getElementById("simWaitlistCount");
    if (waitlistEl) waitlistEl.textContent = "0";
    const oversellEl = document.getElementById("simOversellCount");
    if (oversellEl) {
        oversellEl.className = "sim-stat-val text-green";
        oversellEl.textContent = "0";
    }

    const consoleEl = document.getElementById("simConsole");
    if (consoleEl) {
        consoleEl.innerHTML = `<div class="sim-console-line text-muted">[CONFIG] Lock mode set to: ${useLock ? "PESSIMISTIC_WRITE (Row Locking + Atomic Decrement + FIFO Queue)" : "NO_LOCKING (TOCTOU Race Condition Vulnerable)"}. Click 'Run 50 Threads' to simulate stress.</div>`;
    }
}

function runConcurrencySimulation() {
    if (isSimulating) return;
    isSimulating = true;
    const runBtn = document.getElementById("simRunBtn");
    if (runBtn) runBtn.disabled = true;

    resetWorkerGrid();

    const consoleEl = document.getElementById("simConsole");
    const progressBar = document.getElementById("simProgressBar");
    const threadsCountEl = document.getElementById("simThreadsCount");
    const finalStockEl = document.getElementById("simFinalStock");
    const waitlistEl = document.getElementById("simWaitlistCount");
    const oversellEl = document.getElementById("simOversellCount");

    if (consoleEl) {
        consoleEl.innerHTML = `<div class="sim-console-line text-gold">[INIT] Spawning 50 concurrent checkout worker threads (ExecutorService + CountDownLatch)...</div>`;
    }
    if (progressBar) progressBar.style.width = "0%";

    let currentStock = 2;
    let waitlistCount = 0;
    let oversells = 0;
    let processed = 0;
    const totalThreads = 50;

    const interval = setInterval(() => {
        processed += 5;
        if (processed > totalThreads) processed = totalThreads;

        if (progressBar) progressBar.style.width = (processed / totalThreads * 100) + "%";
        if (threadsCountEl) threadsCountEl.textContent = `${processed} / ${totalThreads}`;

        if (!isPessimisticLock) {
            // Vulnerable TOCTOU Race Condition: All threads read cached stock at same time
            currentStock -= 5;
            oversells = Math.abs(Math.min(0, currentStock));
            if (finalStockEl) {
                finalStockEl.className = "sim-stat-val text-red";
                finalStockEl.textContent = currentStock;
            }
            if (oversellEl) {
                oversellEl.className = "sim-stat-val text-red";
                oversellEl.textContent = oversells;
            }

            for (let t = processed - 4; t <= processed; t++) {
                const node = document.getElementById(`worker-node-${t}`);
                if (node) {
                    node.className = "worker-node node-race";
                    node.title = `Thread #${t}: Read stale stock, triggered oversell!`;
                }
            }

            if (consoleEl) {
                const line = document.createElement("div");
                line.className = "sim-console-line text-red";
                line.textContent = `[Thread-Pool-${processed}] TOCTOU Race Condition: Thread read cached stock, executed blind decrement. Stock underflow: ${currentStock}`;
                consoleEl.appendChild(line);
                consoleEl.scrollTop = consoleEl.scrollHeight;
            }
        } else {
            // Concurrency Safe with Pessimistic Locking
            if (processed === 5) {
                currentStock = 0;
                waitlistCount = 3;

                const n1 = document.getElementById("worker-node-1");
                const n2 = document.getElementById("worker-node-2");
                if (n1) { n1.className = "worker-node node-acquired"; n1.title = "Thread #1: Acquired Lock & Decremented Inventory (Copy #1)"; }
                if (n2) { n2.className = "worker-node node-acquired"; n2.title = "Thread #2: Acquired Lock & Decremented Inventory (Copy #2)"; }

                for (let t = 3; t <= 5; t++) {
                    const node = document.getElementById(`worker-node-${t}`);
                    if (node) {
                        node.className = "worker-node node-waitlist";
                        node.title = `Thread #${t}: Stock exhausted -> Enqueued in FIFO Waitlist (#${t - 2})`;
                    }
                }

                if (consoleEl) {
                    const l1 = document.createElement("div");
                    l1.className = "sim-console-line text-green";
                    l1.textContent = `[Thread-01 & Thread-02] Acquired PESSIMISTIC_WRITE lock (SELECT ... FOR UPDATE). Inventory safely decremented 2 -> 0.`;
                    consoleEl.appendChild(l1);

                    const l2 = document.createElement("div");
                    l2.className = "sim-console-line text-blue";
                    l2.textContent = `[Thread-03 to 05] Stock = 0 detected. Auto-routed into FIFO Waitlist Queue (Positions 1-3).`;
                    consoleEl.appendChild(l2);
                }
            } else {
                waitlistCount += 5;
                for (let t = processed - 4; t <= processed; t++) {
                    const node = document.getElementById(`worker-node-${t}`);
                    if (node) {
                        node.className = "worker-node node-waitlist";
                        node.title = `Thread #${t}: Stock locked at 0 -> Enqueued in FIFO Waitlist (#${t - 2})`;
                    }
                }

                if (consoleEl) {
                    const line = document.createElement("div");
                    line.className = "sim-console-line text-blue";
                    line.textContent = `[Thread-Pool-${processed}] Stock locked at 0. Auto-assigned to FIFO Waitlist (Position #${waitlistCount}). 48h pickup window reserved.`;
                    consoleEl.appendChild(line);
                }
            }
            if (finalStockEl) {
                finalStockEl.className = "sim-stat-val text-green";
                finalStockEl.textContent = "0";
            }
            if (waitlistEl) waitlistEl.textContent = waitlistCount;
            if (oversellEl) {
                oversellEl.className = "sim-stat-val text-green";
                oversellEl.textContent = "0";
            }
            if (consoleEl) consoleEl.scrollTop = consoleEl.scrollHeight;
        }

        if (processed >= totalThreads) {
            clearInterval(interval);
            isSimulating = false;
            if (runBtn) runBtn.disabled = false;

            if (consoleEl) {
                const summary = document.createElement("div");
                summary.className = isPessimisticLock ? "sim-console-line text-green" : "sim-console-line text-red";
                summary.style.fontWeight = "bold";
                summary.style.marginTop = "6px";
                if (isPessimisticLock) {
                    summary.textContent = `[PASS] 50/50 threads completed safely. 2 items allocated, 48 members enqueued in FIFO waitlist. Zero oversells, zero inventory corruption.`;
                } else {
                    summary.textContent = `[CRITICAL FAIL] Double-checkouts occurred! Final stock is -48. Data integrity violated due to lack of row-level lock.`;
                }
                consoleEl.appendChild(summary);
                consoleEl.scrollTop = consoleEl.scrollHeight;
            }
        }
    }, 110);
}

// -------------------------------------------------------------
// CLI COMMAND HISTORY & TAB AUTO-COMPLETION
// -------------------------------------------------------------
const cliHistoryList = [];
let cliHistoryIndex = -1;

const supportedCliCommands = [
    "simulate concurrency",
    "help",
    "leetcode",
    "curl /api/health",
    "curl /api/books",
    "curl /api/developers/feed",
    "projects",
    "cat resume",
    "stack",
    "contact",
    "clear"
];

function setupCliKeyboardListeners() {
    const input = document.getElementById("cliInput");
    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cliHistoryList.length === 0) return;
            if (cliHistoryIndex === -1) {
                cliHistoryIndex = cliHistoryList.length - 1;
            } else if (cliHistoryIndex > 0) {
                cliHistoryIndex--;
            }
            input.value = cliHistoryList[cliHistoryIndex] || "";
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (cliHistoryIndex !== -1 && cliHistoryIndex < cliHistoryList.length - 1) {
                cliHistoryIndex++;
                input.value = cliHistoryList[cliHistoryIndex] || "";
            } else {
                cliHistoryIndex = -1;
                input.value = "";
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const current = input.value.trim().toLowerCase();
            if (!current) return;

            const matches = supportedCliCommands.filter(c => c.toLowerCase().startsWith(current));
            if (matches.length >= 1) {
                input.value = matches[0];
            }
        }
    });
}

function runCliCommand(cmd) {
    const input = document.getElementById("cliInput");
    if (input) input.value = cmd;
    cliHistoryList.push(cmd);
    cliHistoryIndex = -1;
    executeCli(cmd);
}

function handleCliSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("cliInput");
    const cmd = input.value.trim();
    if (!cmd) return;
    cliHistoryList.push(cmd);
    cliHistoryIndex = -1;
    executeCli(cmd);
    input.value = "";
}

function executeCli(cmd) {
    const history = document.getElementById("cliHistory");
    const normalized = cmd.toLowerCase().trim();

    const entry = document.createElement("div");
    entry.className = "cli-entry";
    entry.innerHTML = `<span class="cli-prompt-line">nikunj@backend:~$</span> ${cmd}`;
    history.appendChild(entry);

    const out = document.createElement("div");
    out.className = "cli-output";

    if (normalized === "help") {
        out.innerHTML = `Available Commands:
  - <span style="color:#00ff9d;">simulate concurrency</span>                : Run 50-thread high-contention locking stress test
  - <span style="color:#00ff9d;">leetcode</span>                             : View LeetCode problem solving profile & stats
  - <span style="color:#00ff9d;">curl /api/health</span>                     : Query Spring Boot backend health status
  - <span style="color:#00ff9d;">curl /api/books</span>                      : Query LibroSphere library inventory with row-locking stats
  - <span style="color:#00ff9d;">curl /api/developers/feed</span>            : Query DevTinder real-time teammate matching feed
  - <span style="color:#00ff9d;">projects</span>                             : List backend project specifications
  - <span style="color:#00ff9d;">cat resume</span>                           : View summary qualifications & CV download
  - <span style="color:#00ff9d;">stack</span>                                : View Java backend technology stack
  - <span style="color:#00ff9d;">contact</span>                              : Display developer contact endpoints
  - <span style="color:#00ff9d;">clear</span>                                : Clear terminal screen`;
    } else if (normalized.includes("concurrency") || normalized === "simulate" || normalized === "test lock") {
        switchTermTab("concurrency");
        runConcurrencySimulation();
        out.className += " success";
        out.textContent = "[CONCURRENCY LAB LAUNCHED] Switched to Concurrency Workbench. Executing 50-thread stress test simulation...";
    } else if (normalized.includes("curl") && (normalized.includes("health") || normalized.includes("status"))) {
        out.className += " json";
        out.textContent = JSON.stringify({
            status: "200 OK",
            service: "Spring Boot Microservice",
            database: "PostgreSQL 16 Connection: ACTIVE",
            concurrency_lock: "Pessimistic Row Lock (SELECT ... FOR UPDATE)",
            active_threads: 4,
            uptime: "99.98%",
            engineer: "Nikunj Garg"
        }, null, 2);
    } else if (normalized.includes("curl") && (normalized.includes("book") || normalized.includes("librosphere"))) {
        out.className += " json";
        out.textContent = JSON.stringify({
            project: "LibroSphere",
            architecture: "High-Concurrency Asset Lending & Reservation Engine",
            concurrency_control: "Row-Level Pessimistic Write Lock (@Lock(LockModeType.PESSIMISTIC_WRITE))",
            database: "PostgreSQL 16",
            test_coverage: "64 JUnit 5 Tests (100% Pass Rate)",
            catalog_summary: {
                total_titles: 1420,
                active_borrows: 384,
                active_fifo_reservations: 27
            },
            sample_inventory: [
                { id: 101, title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", totalCopies: 5, availableCopies: 2, status: "AVAILABLE" },
                { id: 102, title: "Effective Java (3rd Edition)", author: "Joshua Bloch", totalCopies: 3, availableCopies: 0, status: "WAITLIST_QUEUE_ACTIVE" }
            ]
        }, null, 2);
    } else if (normalized.includes("curl") && (normalized.includes("developer") || normalized.includes("devtinder") || normalized.includes("feed") || normalized.includes("discover"))) {
        out.className += " json";
        out.textContent = JSON.stringify({
            project: "DevTinder",
            event: "Devlynix Buildathon 2.0 (Prototyped & Post-Hackathon Polished)",
            architecture: "Backend Sole Architecture (Spring Boot 3 + PostgreSQL 16 + WebSockets STOMP)",
            collaboration: "Frontend developed by hackathon teammates",
            deployment: "Render Cloud (Backend) + Vercel (Frontend)",
            matching_engine: "Algorithmic Skill Synergy Scoring (50-99%)",
            active_connections: 42,
            sample_candidate: {
                id: 12,
                name: "Arjun Verma",
                skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS"],
                looking_for: "Backend Java / Spring Boot teammate for Devlynix Buildathon",
                project_pitch: "Building real-time AI code review assistant with collaborative canvas",
                synergy_score: "94% Match (Complementary Discipline + Shared Stacks)",
                github_url: "https://github.com/arjun-dev",
                match_status: "INCOMING_LIKE_RADAR"
            }
        }, null, 2);
    } else if (normalized === "projects") {
        out.innerHTML = `[PROJECT 1] <span style="color:#00ff9d;">DevTinder</span>: Developer Teammate Matching Platform (Spring Boot 3 + PostgreSQL + WebSockets STOMP + AI Synergy Engine + Render)
[PROJECT 2] <span style="color:#00ff9d;">LibroSphere</span>: High-Concurrency Asset Lending Engine (Spring Boot 3 + PostgreSQL + Pessimistic Locking + 64 JUnit 5 Tests)
[PROJECT 3] <span style="color:#00ff9d;">AgriSathi AI</span>: Agricultural Intelligence Platform (Spring Boot 3 + REST APIs + Cloudinary CDN + OpenAPI 3.0)`;
    } else if (normalized === "leetcode" || normalized === "dsa") {
        out.className += " json";
        out.textContent = JSON.stringify({
            platform: "LeetCode",
            handle: "Nikunjgarg12",
            profileUrl: "https://leetcode.com/u/Nikunjgarg12/",
            language: "Java",
            focus_topics: ["Data Structures & Algorithms", "Arrays & Strings", "Two Pointers", "Linked Lists", "Hash Maps"],
            status: "Active Problem Solver"
        }, null, 2);
    } else if (normalized === "cat resume" || normalized === "resume") {
        out.innerHTML = `Nikunj Garg | BCA @ SGRRU Dehradun (2025–2028) | CGPA: 7.48 / 10.0 | Java Backend Developer
Portfolio: <a href="https://nikunjgarg.xyz" target="_blank" style="color:#00e5ff; text-decoration:underline;">nikunjgarg.xyz</a> | LeetCode: <a href="https://leetcode.com/u/Nikunjgarg12/" target="_blank" style="color:#00e5ff; text-decoration:underline;">@Nikunjgarg12</a>
Specialization: Spring Boot 3, PostgreSQL, Spring Security, WebSockets (STOMP), JPA/Hibernate, Docker, JUnit 5
Download CV: <a href="resume.pdf" download="Nikunj_Garg_Resume" style="color:#00e5ff; text-decoration:underline;">Click to download resume.pdf</a>`;
    } else if (normalized === "stack" || normalized === "skills") {
        out.textContent = "Languages & Backend: Java 21, Spring Boot 3, Spring Data JPA, Hibernate ORM, REST APIs, WebSockets (STOMP) | Databases & Concurrency: PostgreSQL, ACID Transactions, Pessimistic Locking, Composite B-Tree Indexes | Security & Architecture: Spring Security, JWT (Refresh Token Rotation), BCrypt, RBAC | DevOps & Tools: Docker, Docker Compose, Render Cloud, Git, Maven, Postman | Testing & QA: JUnit 5 (64 Automated Tests - Concurrency Stress & Unit Suites, 100% Pass Rate)";
    } else if (normalized === "contact") {
        out.innerHTML = `Phone: +91 94565 00319
Email: gargnikunj991@gmail.com
Portfolio: https://nikunjgarg.xyz
LeetCode: https://leetcode.com/u/Nikunjgarg12/
GitHub: https://github.com/gargnikunj991-ux
LinkedIn: https://linkedin.com/in/nikunj-garg-36045b37a`;
    } else if (normalized === "clear") {
        history.innerHTML = "";
        return;
    } else {
        out.className += " error";
        out.textContent = `zsh: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    history.appendChild(out);
    history.scrollTop = history.scrollHeight;
}

// -------------------------------------------------------------
// ACTIVE NAVIGATION SCROLL SPY
// -------------------------------------------------------------
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function updateActiveNav() {
    const scrollPosition = window.scrollY + 200;
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

let isScrolling = false;
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            updateActiveNav();
            isScrolling = false;
        });
        isScrolling = true;
    }
});
updateActiveNav();

// -------------------------------------------------------------
// HERO TYPEWRITER EFFECT
// -------------------------------------------------------------
const roles = [
    "BUILDING_SPRING_BOOT_APPS...",
    "ARCHITECTING_REST_APIS...",
    "SCALING_POSTGRESQL_DATABASES...",
    "SOLVING_CONCURRENCY_CHALLENGES..."
];

let rIdx = 0;
let cIdx = 0;
let typingElement = null;

function type() {
    if (!typingElement) {
        typingElement = document.getElementById("typing");
    }
    if (!typingElement) return;

    if (cIdx < roles[rIdx].length) {
        typingElement.textContent += roles[rIdx].charAt(cIdx);
        cIdx++;
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 2200);
    }
}

function erase() {
    if (!typingElement) {
        typingElement = document.getElementById("typing");
    }
    if (!typingElement) return;

    if (cIdx > 0) {
        typingElement.textContent = roles[rIdx].substring(0, cIdx - 1);
        cIdx--;
        setTimeout(erase, 45);
    } else {
        rIdx = (rIdx + 1) % roles.length;
        setTimeout(type, 400);
    }
}

// -------------------------------------------------------------
// CURSOR GLOW TRACKER
// -------------------------------------------------------------
const glow = document.getElementById("cursorGlow");
if (glow && window.matchMedia("(hover: hover)").matches) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        glow.style.left = currentX + "px";
        glow.style.top = currentY + "px";
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// -------------------------------------------------------------
// APP INITIALIZATION
// -------------------------------------------------------------
function initApp() {
    initWorkerGrid();
    setupCliKeyboardListeners();
    type();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}
