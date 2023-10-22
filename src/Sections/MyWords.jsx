import ArticleList from "../Components/ArticleList";
import Headlines from "../Components/Headlines";
const MyWords = () => {
  return (
    <div className="mywords-bg page-grid">
      <Headlines title="My Words" />
      <div className="mywords-wrapper">
        <ArticleList />
      </div>
    </div>
  );
};

export default MyWords;
