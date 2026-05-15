const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'frontend', 'profile.html'), 'utf-8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", (err) => { console.error("🛑 JSDOM Error:", err); });
virtualConsole.on("jsdomError", (err) => { console.error("🛑 Internal JSDOM Error:", err); });
virtualConsole.on("log", (msg) => { console.log("📝 Log:", msg); });

const dom = new JSDOM(html, {
    url: "http://localhost:3000/profile.html",
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole
});

// Mock fetch to simulate logged-in user
dom.window.fetch = async (url) => {
    if (url.includes('/current-user')) return { ok: true, json: async () => ({ id: "123", name: "Test User", email: "test@example.com" }) };
    if (url.includes('/profile')) return { ok: true, json: async () => ({ hasMembership: true, user: { name: "Test User", email: "test@example.com" }, membership: { plan: "Premium", duration: "Yearly", status: "active", trainer: "Someone", expiryDate: new Date().toISOString() } }) };
    if (url.includes('/my-membership')) return { ok: true, json: async () => ({ hasMembership: true, membership: { plan: "Premium" } }) };
    if (url.includes('/notifications')) return { ok: true, json: async () => ([]) };
    return { ok: true, json: async () => ({}) };
};

setTimeout(() => {
    console.log("Checking page elements:");
    console.log("- Wrapper display:", !!dom.window.document.querySelector('.profile-wrapper'));
    console.log("- Header visible:", !!dom.window.document.querySelector('.profile-header'));
    console.log("- Loader visible:", !!dom.window.document.getElementById('pageLoader'));
    console.log("- Body content snippet:", dom.window.document.body.innerHTML.substring(0, 500));
    process.exit(0);
}, 2500);
