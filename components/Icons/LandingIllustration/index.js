export default function LandingIllustration (props) {
  return(
    <svg
      width={886}
      height={627}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        x={182}
        y={174}
        width={654}
        height={354}
        rx={10}
        fill="#9F6D6F"
        fillOpacity={0.5}
      />
      <rect x={162} y={154} width={654} height={354} rx={10} fill="#B6757A" />
      <g filter="url(#prefix__filter0_f_15:45)">
        <path fill="#FE4787" fillOpacity={0.25} d="M100 100h737v427H100z" />
      </g>
      <rect
        x={141}
        y={137}
        width={654}
        height={354}
        rx={10}
        fill="url(#prefix__pattern0)"
      />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_15:45"
            transform="matrix(.00078 0 0 .00143 -.07 -.273)"
          />
        </pattern>
        <filter
          id="prefix__filter0_f_15:45"
          x={0}
          y={0}
          width={937}
          height={627}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={50}
            result="effect1_foregroundBlur_15:45"
          />
        </filter>
        <image
          id="prefix__image0_15:45"
          width={1470}
          height={980}
        />
      </defs>
    </svg>
  )
}