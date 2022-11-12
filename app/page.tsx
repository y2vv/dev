import ContentCard from "./components/ContentCard";


export default async function Home() {

  return (
    <div className="flex justify-center my-10">
      <div className="flex gap-5">
        <ContentCard href={"/"} title={"日本語てすと"} />
        <ContentCard href={"/example"} title={"example"} />
        <ContentCard href={"/contents/blog"} title={"blog"} />
      </div>
    </div>

  )
}
