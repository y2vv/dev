import ContentCard from "./components/ContentCard";


export default async function Home() {

  return (
    <div className=" flex justify-center">
      <div className="flex flex-col align-middle gap-10 m-10 ">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </div>

  )
}
