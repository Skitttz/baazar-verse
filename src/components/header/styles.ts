const NavButtonStyle = {
  primary: "flex text-gray-700 items-center gap-2 px-4 py-2 rounded-md hover:bg-[#F5EAEA] hover:text-primary transition-colors duration-200",
  current: "text-primary [&>svg]:text-primary bg-[#F5EAEA] font-semibold",
} as const

export {NavButtonStyle}