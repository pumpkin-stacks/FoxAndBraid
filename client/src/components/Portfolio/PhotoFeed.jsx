import PhotoCard from "./PhotoCard";

const PhotoFeed = (props) => {
  return (
    <>
      {props.portfolioItems.map((image) => (
        <PhotoCard key={image.id} image={image} />
      ))}
    </>
  );
};

export default PhotoFeed;
