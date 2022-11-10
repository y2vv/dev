import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-12 border-t-2 border-gray-100 border-opacity-30 p-10 text-gray-200">
      <div className="flex">
        <Link href={"/term"} className='flex-auto'>term</Link>
        <Link href={"/example"} className='flex-auto'>example</Link>
      </div>
    </footer>
  )
}