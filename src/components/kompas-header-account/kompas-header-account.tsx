import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kompas-header-account',
  styleUrl: 'kompas-header-account.css',
  shadow: true,
})
export class KompasHeaderAccount {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
