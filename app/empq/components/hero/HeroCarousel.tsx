"use client";

import HeroCarouselDesktop from "./HeroCarouselDesktop";
import HeroCarouselMobile from "./HeroCarouselMobile";

export default function HeroCarousel(props: any) {
  if (props.isMobile) {
    return <HeroCarouselMobile {...props} />;
  }

  return <HeroCarouselDesktop {...props} />;
}