const ArrowIcon = ({ className, color = "#363636" }: { className?: string, color?: string }) => {
  return (
    <svg className={className + " shrink-0"} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4817 0.155999C13.8395 0.506082 13.8393 0.781275 13.4817 1.13149L7.64808 6.83838C7.29012 7.18857 6.70988 7.18857 6.35192 6.83838L0.518313 1.13149C0.160668 0.781275 0.160456 0.506082 0.518313 0.155999C0.876173 -0.19404 1.4565 0.106157 1.81447 0.456019L7 5.54102L12.1855 0.456019C12.5435 0.106157 13.1238 -0.19404 13.4817 0.155999Z" fill={color} />
    </svg>
  )
}

export default ArrowIcon