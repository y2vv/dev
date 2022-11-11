export default function ContentCard() {
  return (
    <div className="w-80 h-36 p-10 rounded-2xl backdrop-blur-xl backdrop-saturate-100 bg-white bg-opacity-5 shadow-lg border-2 border-opacity-20 border-fuchsia-300">
      <div className="divide-y-2 p-2 divide-opacity-30 divide-white">
        <div className="text-lg text-gray-200 font-bold">title</div>
        <div className=" text-gray-200">content</div>
      </div>
    </div>
  )
}