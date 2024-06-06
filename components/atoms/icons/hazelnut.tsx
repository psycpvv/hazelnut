import * as React from 'react'
const Hazelnut = ({
  className,
  fill,
}: {
  className?: string
  fill?: string
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 137.18 120.45"
    className={className}
  >
    <defs>
      <style>
        {'.cls-1{stroke:#010101;stroke-miterlimit:10;stroke-width:2px;}'}
      </style>
    </defs>
    <path
      style={{
        fill: fill || '#C7CB50',
      }}
      className="cls-1"
      d="M8.84,28.2A60.45,60.45,0,0,0,3,43.16,71.37,71.37,0,0,0,1,60.22c0,17.51,5.93,33.25,17,44.09L26.7,68.5a2.21,2.21,0,0,0-3.22-2.37,2.28,2.28,0,0,1-1,.24,2.16,2.16,0,0,1-2.08-2.92c4.24-10.37,12-33.09,3.59-44.39a13.66,13.66,0,0,0-1.21-1.43,14.79,14.79,0,0,0-3.49-2.69A52.55,52.55,0,0,0,8.84,28.2Z"
    />
    <path
      style={{
        fill: fill || '#C7CB50',
      }}
      className="cls-1"
      d="M31.63,6.62A50.29,50.29,0,0,0,20.34,14c-.37.31-.73.63-1.08.95A14.77,14.77,0,0,1,21,16.05,14.38,14.38,0,0,1,23.89,19c8.48,11.26.73,34.09-3.52,44.49a2.16,2.16,0,0,0,2.08,2.92,2.28,2.28,0,0,0,1-.24A2.21,2.21,0,0,1,26.7,68.5L18,104.31c9.61,9.41,23.11,15.14,40,15.14,17.84,0,37.9-9.94,53-26.07.38-.41.77-.83,1.15-1.26A91,91,0,0,0,122,79.05a89.61,89.61,0,0,1,13.1-16.36,3.39,3.39,0,0,0,0-4.93A89.4,89.4,0,0,1,122,41.39C106.86,17,80.62,1,58,1A60.36,60.36,0,0,0,31.63,6.62Z"
    />
  </svg>
)
export default Hazelnut
