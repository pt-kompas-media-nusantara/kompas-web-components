import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kompas-metered-register',
  styleUrl: 'kompas-metered-register.css',
  shadow: true,
})
export class KompasMeteredRegister {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
