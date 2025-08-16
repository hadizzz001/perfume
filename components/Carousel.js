"use client";

import React from "react";

const MyCarousel = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Background */}
      <img
        src="https://res.cloudinary.com/dzfuvfl10/image/upload/v1755337733/b9a70522-b3a0-410c-a15d-caa0939a592b_hzmnv3.webp"
        alt="Hot Sale Desktop"
        className="myCar1 w-full h-full object-contain"
      />

      {/* Mobile Background */}
      <img
        src="https://res.cloudinary.com/dzfuvfl10/image/upload/v1755337733/mob_uiij16.webp"
        alt="Hot Sale Mobile"
        className="myCar w-full h-full object-contain mt-10"
      />

<div class="title-container">
  <p class="myTitle1">Spain</p>
  <p class="myTitle2">Scent</p>
</div>


    </div>
  );
};

export default MyCarousel;
