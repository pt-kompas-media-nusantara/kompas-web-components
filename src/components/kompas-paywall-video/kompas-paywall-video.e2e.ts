import { newE2EPage } from '@stencil/core/testing';

describe('kompas-paywall-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-paywall-video></kompas-paywall-video>');

    const element = await page.find('kompas-paywall-video');
    expect(element).toHaveClass('hydrated');
  });
});
