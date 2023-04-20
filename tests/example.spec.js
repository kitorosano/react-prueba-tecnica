// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cdn2.thecatapi.com/images'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

test('random fact and images chages after button click', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const button = await page.getByRole('button')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await button.click()

  setTimeout(async () => {
    const textContentAfterClick = await text.textContent()
    const imageSrcAfterClick = await image.getAttribute('src')

    await expect(textContent).not.toBe(textContentAfterClick)
    await expect(imageSrc).not.toBe(imageSrcAfterClick)
  }, 3000)
})
