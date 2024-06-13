declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    autoplaySpeed?: number;
    autoplay?: boolean;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    className?: string;
    centerPaddind?: string;
    responsive?: Array;
  }

  export interface Slider extends React.Component<Settings> {}

  export default class Slider extends React.Component<Settings> {}
}
