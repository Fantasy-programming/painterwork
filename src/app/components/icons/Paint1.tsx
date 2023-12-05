import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.width}
    height={props.height}
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    {...props}
  >
    <path
      d="M154.234 119.867C182.527 125.109 218.668 128 256 128s73.473-2.891 101.766-8.133C396.953 112.6 416 102.18 416 88c0-31.574-100.574-40-160-40S96 56.426 96 88c0 14.18 19.047 24.6 58.234 31.867ZM256 64c88.676 0 140.657 15.671 143.933 23.9-.766 1.22-7.148 9.2-45.081 16.23C327.488 109.207 292.383 112 256 112s-71.488-2.793-98.852-7.867c-38.034-7.052-44.362-15.069-45.073-16.039C115.612 79.593 167.538 64 256 64Z"
      data-original="#000000"
    />
    <path
      d="M496 128a8 8 0 0 0-8-8h-24V88c0-46.766-107.168-72-208-72S48 41.234 48 88v32H24a8 8 0 0 0-8 8v40a239.766 239.766 0 0 0 32 119.568V424c0 46.766 107.168 72 208 72s208-25.234 208-72V287.568A239.766 239.766 0 0 0 496 168ZM184 384h144v16H184Zm159.6-10a7.891 7.891 0 0 0-7.6-6H176a7.891 7.891 0 0 0-7.6 6A224.947 224.947 0 0 1 64 283.185V116.776c7.848 6.606 18.566 12.687 32 18.143V280a48 48 0 0 0 96 0v-48a24 24 0 0 1 48 0v16a48 48 0 0 0 96 0v-16a24.027 24.027 0 0 1 24-24 40.047 40.047 0 0 0 40-40v-27.216c21.155-6.772 37.246-14.766 48-23.753v166.154A224.947 224.947 0 0 1 343.6 374ZM256 160c46.853 0 91.74-5.2 128-14.643V168a24.027 24.027 0 0 1-24 24 40.047 40.047 0 0 0-40 40v16a32 32 0 0 1-64 0v-16a40 40 0 0 0-80 0v48a32 32 0 0 1-64 0V140.69C150.24 152.98 201.792 160 256 160Zm0-128c113.148 0 192 29.512 192 56 0 13.523-22.332 28.562-58.277 39.242C353.328 138.047 305.84 144 256 144c-57.578 0-111.957-7.992-149.195-21.922C80 112.055 64 99.312 64 88c0-26.488 78.852-56 192-56ZM32 136h16v114.857A223.911 223.911 0 0 1 32 168Zm224 344c-113.148 0-192-29.512-192-56V311.63a240.656 240.656 0 0 0 104 79.52V408a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-16.85a240.656 240.656 0 0 0 104-79.52V424c0 26.488-78.852 56-192 56Zm224-312a223.912 223.912 0 0 1-16 82.858V136h16Z"
      data-original="#000000"
    />
  </svg>
);
export default SvgComponent;
