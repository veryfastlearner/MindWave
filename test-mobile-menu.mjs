import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 393, height: 852 }
});

// Navigate to the dev server
await page.goto('http://127.0.0.1:5174', { waitUntil: 'networkidle' });

// Check if hamburger button is visible
const hamburger = page.locator('.hamburger-btn');
const hamburgerVisible = await hamburger.isVisible();
console.log('Hamburger visible:', hamburgerVisible);

// Check if main nav is hidden
const mainNav = page.locator('.main-nav');
const mainNavVisible = await mainNav.isVisible();
console.log('Main nav visible (should be false):', mainNavVisible);

// Click hamburger to open menu
await hamburger.click();
await page.waitForTimeout(300);

// Check if mobile menu overlay is visible
const mobileMenu = page.locator('.mobile-menu-overlay');
const mobileMenuVisible = await mobileMenu.isVisible();
console.log('Mobile menu visible after click:', mobileMenuVisible);

// Check if mobile menu has links
const mobileLinks = page.locator('.mobile-nav-link');
const linkCount = await mobileLinks.count();
console.log('Mobile nav links count:', linkCount);

// Click a link to close menu
await mobileLinks.first().click();
await page.waitForTimeout(300);

// Check if menu closed
const mobileMenuClosed = await mobileMenu.isVisible();
console.log('Mobile menu visible after link click (should be false):', mobileMenuClosed);

// Reopen menu
await hamburger.click();
await page.waitForTimeout(300);

// Click outside (overlay) to close
await page.mouse.click(50, 100);
await page.waitForTimeout(300);

const mobileMenuClosed2 = await mobileMenu.isVisible();
console.log('Mobile menu visible after clicking outside (should be false):', mobileMenuClosed2);

await browser.close();

// Summary
const allPassed = hamburgerVisible && !mainNavVisible && mobileMenuVisible && linkCount === 5 && !mobileMenuClosed && !mobileMenuClosed2;
console.log('\n=== ALL TESTS PASSED:', allPassed, '===');
process.exit(allPassed ? 0 : 1);