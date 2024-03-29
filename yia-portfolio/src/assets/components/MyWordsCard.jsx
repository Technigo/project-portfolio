

export const MyWordsCard = ({
  articleImage,
  articleDate,
  articleTitle,
  articleText,
  articleLink,
  imageAltText,
}) => {
  return (
    <div className="my-words-card">
      <img
        src={articleImage}
        alt={imageAltText}
        className="article-card-image"
      />
      <div className="my-words-heading-wrapper">
        <TagComponent tag={articleDate} />
        <MediumHeadline
          className="medium-headline"
          mediumSizeHeader={articleTitle}
          useSpan={false}
        />
      </div>
      <Textbox text={articleText} />
      <ReadMoreButton articleLink={articleLink} />
    </div>
  );
};