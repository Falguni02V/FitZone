const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Setup console mirroring
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));
        page.on('requestfailed', req => console.error('FAILED REQUEST:', req.url(), req.failure().errorText));

        // Inject fake user session
        await page.goto('http://localhost:3000/login.html');
        await page.evaluate(() => {
            localStorage.setItem('user', JSON.stringify({ id: "123", name: "Test", email: "tester@gmail.com" }));
        });

        // Navigate to profile
        console.log('Navigating to profile...');
        await page.goto('http://localhost:3000/profile.html', { waitUntil: 'networkidle0' });

        // Wait to allow JS execution
        await new Promise(r => setTimeout(r, 2000));

        const bodyHtml = await page.evaluate(() => document.body.innerHTML.substring(0, 1000));
        console.log('--- DOM Snippet ---');
        console.log(bodyHtml);

        const pageLoaderVisibility = await page.evaluate(() => {
            const el = document.getElementById('pageLoader');
            return el ? window.getComputedStyle(el).opacity : 'Not found';
        });
        console.log('Page Loader Opacity:', pageLoaderVisibility);

        const wrapperVisible = await page.evaluate(() => {
            const el = document.querySelector('.profile-wrapper');
            if (!el) return 'Not found';
            const rect = el.getBoundingClientRect();
            return `width=${rect.width}, height=${rect.height}, display=${window.getComputedStyle(el).display}`;
        });
        console.log('Profile Wrapper CSS Box:', wrapperVisible);

        await browser.close();
        process.exit(0);
    } catch (err) {
        console.error('PUPPETEER CRASH:', err);
        process.exit(1);
    }
})();
