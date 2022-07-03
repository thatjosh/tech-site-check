import { test, expect, Page, firefox } from "@playwright/test";

// Page config
test.describe.configure({ mode: "serial" });
let page: Page;

// Pause function
const pause = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

// Run before test
test.beforeEach(async () => {
  const browser = await firefox.launch({
    headless: false,
  });
  page = await browser.newPage();
});

// Run after test
test.afterEach(async () => {
  await page.close();
});

const sites = [
  "https://www.hudsonrivertrading.com/campus-recruiting/",
  "https://www.janestreet.com/join-jane-street/events/",
  "https://www.janestreet.com/join-jane-street/our-programs/",
  "https://www.citadel.com/careers/launch-your-career/discover-citadel/",
  "https://terminal.c1games.com/competitions", // login required
];

test.describe("Visit sites", () => {
  test("Go to sites", async () => {
    for (let site of sites) {
      await page.goto(site);
      await page.pause();
    }
  });
});
