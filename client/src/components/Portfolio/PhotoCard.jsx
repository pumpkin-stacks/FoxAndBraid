import { Card, CardBody } from "reactstrap";

const PhotoCard = (image) => {
  return (
    <>
      <Card>
        <img alt={image.name} src={image.url} />
        <CardBody></CardBody>
      </Card>
    </>
  );
};

export default PhotoCard;
