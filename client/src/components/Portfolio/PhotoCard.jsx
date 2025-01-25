import { Card, CardTitle, CardText, CardBody } from "reactstrap";

const PhotoCard = (props) => {
  let { imageURL } = props.image;

  return (
    <>
      <Card>
        <img alt="sample" src={imageURL} />
        <CardBody></CardBody>
      </Card>
    </>
  );
};

export default PhotoCard;
