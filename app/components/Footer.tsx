import { Fredoka_One } from "@next/font/google";
import Link from "next/link";

const fredokaOneFont = Fredoka_One({ weight: '400', })

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-gray-100 border-opacity-30 py-5 px-10 text-gray-200">
      <div>
        <Link href={'/'} className={`${fredokaOneFont.className} text-lg`}>Blog title</Link>
      </div>
      <div className="flex flex-col gap-1">
        <Link href={"/term"} className='flex-auto'>term</Link>
        <Link href={"/example"} className='flex-auto'>example</Link>
      </div>
    </footer>
  )
}