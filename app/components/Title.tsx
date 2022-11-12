import { Anton } from "@next/font/google";
import Link from "next/link";
const mainFont = Anton({ weight: ['400'], })

export default function Title({ sizeType }: { sizeType: string }) {

  const fontSize = sizeType === 'header' ? 'text-3xl' : sizeType === 'footer' ? 'text-2xl' : 'text-xl'

  return (
    <Link href={'/'}><div className={`${mainFont.className} ${fontSize} text-gray-200 `}>Blog title</div></Link>
  )
}