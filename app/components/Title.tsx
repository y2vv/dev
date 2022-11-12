import { Anton } from "@next/font/google";
import Link from "next/link";
const mainFont = Anton({ weight: ['400'], })

export default function Title({ size }: { size: number }) {

  const fontSize = `text-${size}xl`
  return (
    <Link href={'/'}><div className={`${mainFont.className} ${fontSize} text-gray-200 `}>Blog title</div></Link>
  )
}