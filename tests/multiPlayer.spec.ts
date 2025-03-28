import { test, expect } from '@playwright/test';

test('user can select multiplayer', async ({ page }) => {
  await page.goto('https://soc-final-project.vercel.app/');

  await page.getByRole('button', { name: '👥 Multiplayer' }).click();
});

test('user can enter a name, generate a URL and send a message', async ({ page }) => {
  await page.goto('https://soc-final-project.vercel.app/quiz-lobby');

  // Wait for the name input to be visible before interacting
  const nameInput = page.getByRole('textbox', { name: 'Enter your name:' });
  await nameInput.waitFor({ state: 'visible' });

  await nameInput.fill('Carmen');
  await expect(nameInput).toHaveValue('Carmen');

  // Click the "Set Name" button and wait for next step to load
  await page.getByRole('button', { name: 'Set Name' }).click();
  await page.waitForLoadState('networkidle'); // Wait until no network requests are pending

  // Ensure the message input appears before interacting
  const messageInput = page.getByRole('textbox', { name: 'Message' });
  await expect(messageInput).toBeVisible();

  await messageInput.fill('Hello');
  await page.getByRole('button', { name: 'Send' }).click();

  // Handle potential alert/dialog
  page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

  // Ensure "Generate Invite URL" button is ready
  const inviteButton = page.getByRole('button', { name: 'Generate Invite URL' });
  await expect(inviteButton).toBeVisible();
  await inviteButton.click();

  // Ensure "Start Game" button is ready before clicking
  const startGameButton = page.getByRole('button', { name: 'Start Game' });
  await expect(startGameButton).toBeVisible();
  await startGameButton.click();
});


  test('user can return to home at end of game', async ({ page }) => {
  await page.goto('https://soc-final-project.vercel.app/end');

  await page.waitForSelector('.winner-highlight', { state: 'detached' }); // Wait for overlay to disappear
  const backToHome = page.getByRole('link', { name: 'Back to Home' });
  await backToHome.scrollIntoViewIfNeeded(); // Ensure visibility
  await backToHome.click(); // Click safely
  });