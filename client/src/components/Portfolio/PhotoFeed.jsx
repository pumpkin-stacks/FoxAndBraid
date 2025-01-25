import PhotoCard from "./PhotoCard";

const PhotoFeed = (Props) => {
  return (
    <>
      {Props.portfolioItems.map((image, index) => (
        <PhotoCard key={index} image={image} />
      ))}
    </>
  );
};

export default PhotoFeed;
