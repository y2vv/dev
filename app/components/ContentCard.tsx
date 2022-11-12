import Link from "next/link";

export default function ContentCard({ href, title }: { href: string, title: string }) {
  return (
    <Link href={href} >
      <div className="h-28 w-28 md:w-36 p-3 rounded-2xl backdrop-blur-xl backdrop-saturate-100 bg-black bg-opacity-5 shadow-lg border-2 border-opacity-20 border-gray-300">
        <div className="divide-y-2 p-2 divide-opacity-30 divide-white">
          <div className="text-md lg:text-lg text-gray-200 font-bold">{title}</div>
        </div>
      </div>
    </Link>
  )
}