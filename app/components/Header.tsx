import { Fredoka_One } from "@next/font/google";
import Link from "next/link";
const fredokaOneFont = Fredoka_One({ weight: '400', })

export default function Header() {
  return (
    <nav className="w-full border-b-2 border-gray-200 border-opacity-30 h-16 p-3">
      <Link href={'/'}><div className={`${fredokaOneFont.className} text-4xl text-gray-200 `}>Blog title</div></Link>
    </nav>
  )
}