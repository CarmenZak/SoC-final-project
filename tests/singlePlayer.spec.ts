import { test } from '@playwright/test';


test('single player button', async ({ page }) => {
  await page.goto('https://soc-final-project.vercel.app/');

  // Click the single player button.
  await page.getByRole('button', { name: '🎮 Single Player' }).click();

});

test('player can return to home at end of game', async ({ page }) => {
    
  await page.goto('https://soc-final-project.vercel.app/end');

  await page.getByRole('link', { name: 'Back to Home' }).click();
});