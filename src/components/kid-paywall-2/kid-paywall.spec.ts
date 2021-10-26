/**
 * individual test:
 * npm run test.spec -- src/components/kid-paywall/kid-paywall.spec.ts
 */

jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg', () => ({ }))

import { newSpecPage } from '@stencil/core/testing'
import { KidPaywall } from './kid-paywall'



describe('KidPaywall', () => {
  it('component without props is rendered and throws an error', async () => {
    
    const { root } = await newSpecPage({
      components: [KidPaywall],
      html: `<kid-paywall></kid-paywall>`
    })
    console.log(root)
    // expect(root.checked).toBe(false);

  })
})

// it('should toggle the checked property', () => {
//   const toggle = new KidPaywall();

//   expect(toggle.isLogin).toBe(false);
// });
