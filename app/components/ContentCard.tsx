export default function ContentCard() {
  return (
    <div className="w-80 h-36 border-2 border-violet-400 border-opacity-30 p-10 rounded-2xl bg-violet-700 shadow-xl shadow-fuchsia-500/50 backdrop-opacity-60">
      <div className="divide-y-2 p-2">
        <div className="text-lg text-gray-200 font-bold">title</div>
        <div className=" text-gray-200">content</div>
      </div>
    </div>
  )
}