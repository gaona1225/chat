import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('1. 页面结构：标题栏、消息列表、输入框、发送按钮', async ({ page }) => {
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('.chat-main ul')).toBeVisible();
  await expect(page.locator('footer input')).toBeVisible();
  await expect(page.locator('footer button')).toHaveText('发送');
});

test('2. 预置消息：左右排列与内容', async ({ page }) => {
  const items = page.locator('.chat-main li');
  await expect(items).toHaveCount(6);
  await expect(items.nth(0)).toHaveClass(/chat-user/);
  await expect(items.nth(0)).toContainText('你好assistant');
  await expect(items.nth(2)).toHaveClass(/chat-assistant/);
  await expect(items.nth(3)).toContainText('有什么可以帮助你的');
});

test('3. 点发送：右蓝气泡出现 + 输入框清空', async ({ page }) => {
  const input = page.locator('footer input');
  await input.fill('hello test');
  await page.locator('footer button').click();
  const bubble = page.locator('.chat-main li.chat-user', { hasText: 'hello test' });
  await expect(bubble).toBeVisible();
  await expect(input).toHaveValue('');
});

test('4. mock 回复：左灰气泡出现', async ({ page }) => {
  await page.locator('footer input').fill('hello test');
  await page.locator('footer button').click();
  const reply = page.locator('.chat-main li.chat-assistant', {
    hasText: '我是mock response...',
  });
  await expect(reply).toBeVisible({ timeout: 8000 });
});

test('5. 回车发送', async ({ page }) => {
  const input = page.locator('footer input');
  await input.fill('second message');
  await input.press('Enter');
  const bubble = page.locator('.chat-main li.chat-user', { hasText: 'second message' });
  await expect(bubble).toBeVisible();
  const reply = page.locator('.chat-main li.chat-assistant', {
    hasText: '我是mock response...',
  });
  await expect(reply).toBeVisible({ timeout: 8000 });
});

test('6. 空输入：按钮禁用，点不动', async ({ page }) => {
  const button = page.locator('footer button');
  await expect(button).toBeDisabled();
  const count = await page.locator('.chat-main li').count();
  await button.click({ force: true });
  await page.waitForTimeout(500);
  await expect(page.locator('.chat-main li')).toHaveCount(count);
});

test('7. 消息多时：footer 不被顶出可视区 + 自动滚到底', async ({ page }) => {
  const input = page.locator('footer input');
  const button = page.locator('footer button');
  for (let i = 0; i < 15; i++) {
    await input.fill(`msg ${i}`);
    await button.click();
  }
  // 等 mock 回复跟上
  await page.waitForTimeout(2500);

  const footerBox = await page.locator('footer').boundingBox();
  const viewport = page.viewportSize();
  expect(footerBox).not.toBeNull();
  expect(footerBox!.y + footerBox!.height).toBeLessThanOrEqual(viewport!.height + 1);

  const atBottom = await page.locator('.chat-main ul').evaluate((ul) => {
    return ul.scrollTop + ul.clientHeight >= ul.scrollHeight - 2;
  });
  expect(atBottom).toBe(true);
});
