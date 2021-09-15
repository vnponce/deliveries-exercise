import React from 'react';

function Details(props) {
  return (
    <svg
      width={20}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0v16h20V0H0zm18 4.67h-2.5V2H18v2.67zm-2.5 2H18v2.67h-2.5V6.67zM2 2h11.5v12H2V2zm13.5 12v-2.67H18V14h-2.5z"
        fill="#000"
        fillOpacity={0.25}
      />
    </svg>
  );
}

export default Details;
