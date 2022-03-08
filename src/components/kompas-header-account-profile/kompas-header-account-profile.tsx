import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kompas-header-account-profile',
  shadow: true,
})

export class KompasHeaderAccountProfile {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
