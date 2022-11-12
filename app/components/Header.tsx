import Title from "./Title";


export default function Header() {
  return (
    <nav className="w-full border-b-2 border-gray-200 border-opacity-30 h-16 p-3">
      <Title sizeType="header" />
    </nav>
  )
}