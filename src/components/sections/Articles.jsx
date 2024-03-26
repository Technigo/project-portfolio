import { ArticlePhoto } from "../reusable/ArticlePhoto"

export const MyWords = () => {
  return (
    <>
      <div className="articles">
        <div className="wavy-line"></div>
        <div className="articles-container">
          <h2 className="title">My Words</h2>
          <p>If I decide to write any text, I will feature it here.</p>
          <ArticlePhoto />
        </div>
      </div>
    </>
  )
}
