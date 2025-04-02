import type { Schema, Attribute } from '@strapi/strapi';

export interface DisplayDisplays extends Schema.Component {
  collectionName: 'components_display_displays';
  info: {
    displayName: 'Displays';
    icon: 'slideshow';
  };
  attributes: {
    Displays: Attribute.Component<'display.resolution', true>;
  };
}

export interface DisplayResolution extends Schema.Component {
  collectionName: 'components_display_resolutions';
  info: {
    displayName: 'Resolution';
    icon: 'slideshow';
  };
  attributes: {
    Resolutions: Attribute.Enumeration<
      ['w800h1140', 'w1024h768', 'w1200h1710', 'w1600h980']
    >;
    Image: Attribute.Media;
    Video: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'display.displays': DisplayDisplays;
      'display.resolution': DisplayResolution;
    }
  }
}
