import { newE2EPage } from '@stencil/core/testing';

describe('kompas-paywall', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-paywall></kompas-paywall>');

    const element = await page.find('kompas-paywall');
    expect(element).toHaveClass('hydrated');
  });
});
