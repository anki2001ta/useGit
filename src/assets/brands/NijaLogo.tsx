import React from "react"

const NijaLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`nija_logo ${className}`}
      viewBox='0 0 120 120'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='120' height='120' rx='60' fill='#6E43FB' />
      <path
        d='M71.8128 33.9127C72.7936 32.883 74.4225 32.8445 75.4508 33.8268L98.5402 55.8797C99.5685 56.862 99.6071 58.4929 98.6262 59.5226L89.391 69.2174C88.4101 70.2471 86.7813 70.2855 85.7529 69.3033L62.6636 47.2503C61.6352 46.2681 61.5967 44.6372 62.5775 43.6075L71.8128 33.9127Z'
        fill='white'
      />
      <path
        d='M44.0174 36.1028C44.9983 35.0731 46.6271 35.0346 47.6555 36.0168L84.1515 70.8748C85.1799 71.857 85.2184 73.4879 84.2375 74.5176L75.0023 84.2124C74.0214 85.2421 72.3926 85.2806 71.3642 84.2983L34.8682 49.4404C33.8398 48.4582 33.8013 46.8272 34.7822 45.7976L44.0174 36.1028Z'
        fill='white'
      />
      <path
        d='M29.8098 51.0179C30.7906 49.9882 32.4194 49.9498 33.4478 50.932L56.5372 72.985C57.5655 73.9672 57.6041 75.5982 56.6232 76.6278L47.3879 86.3226C46.4071 87.3523 44.7783 87.3908 43.7499 86.4086L20.6606 64.3556C19.6322 63.3734 19.5937 61.7424 20.5745 60.7127L29.8098 51.0179Z'
        fill='white'
      />
    </svg>
  )
}

export default NijaLogo