import ContentCard from "../components/ContentCard";
import InformationCard from "../components/InformationCard";


export default async function Home() {

  return (
    <>
      <InformationCard />
      <div className="flex justify-center my-10">
        <div className="flex gap-5">
          <ContentCard href={"/"} title={"日本語てすと"} />
          <ContentCard href={"/example"} title={"example"} />
          <ContentCard href={"/contents/blog"} title={"blog"} />
        </div>
      </div>
    </>


  )
}
