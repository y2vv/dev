import { Anton } from "@next/font/google";
import Link from "next/link";
const mainFont = Anton({ weight: ['400'], })

export default function Title({ sizeType }: { sizeType: string }) {
  return (
    <Link href={'/'}><div className={`${mainFont.className} text-2xl text-gray-200 `}>Blog title</div></Link>
  )

}