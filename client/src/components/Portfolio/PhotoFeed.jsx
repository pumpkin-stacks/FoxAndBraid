import PhotoCard from "./PhotoCard";

const PhotoFeed = (props) => {
  console.log(props)
  return (
    <>
      {props.portfolioItems.map((image) => (
        <PhotoCard key={image.id}url={image.url}name={image.name} />
      ))}
    </>
  );
};

export default PhotoFeed;
