declare module "react-lazy-load-image-component" {
  import React from "react";

  export interface LazyLoadImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    // Define the props for the LazyLoadImage component
    src: string | undefined;
    alt?: string;
    className?: string;
    // based on the library's documentation
  }

  export const LazyLoadImage: React.FC<LazyLoadImageProps>;
}
