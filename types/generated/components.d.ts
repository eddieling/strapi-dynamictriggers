import type { Schema, Attribute } from '@strapi/strapi';

export interface DisplayDisplays extends Schema.Component {
  collectionName: 'components_display_displays';
  info: {
    displayName: 'Displays';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    Displays: Attribute.Component<'display.resolution'>;
  };
}

export interface DisplayResolution extends Schema.Component {
  collectionName: 'components_display_resolutions';
  info: {
    displayName: 'Resolution';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    Resolutions: Attribute.Enumeration<
      ['w800h1140', 'w1024h768', 'w1200h1710', 'w1600h980', 'w1920h1080']
    >;
    Media: Attribute.Media;
    Name: Attribute.String;
  };
}

export interface ScreenScreens extends Schema.Component {
  collectionName: 'components_screen_screens';
  info: {
    displayName: 'Screens';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Displays: Attribute.Enumeration<
      ['w800h1140', 'w1024h768', 'w1200h1710', 'w1600h980', 'w1920h1080']
    >;
    Media: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'display.displays': DisplayDisplays;
      'display.resolution': DisplayResolution;
      'screen.screens': ScreenScreens;
    }
  }
}
