import { Card, CardBody } from "reactstrap";

const PhotoCard = ({key, url, name}) => {
  console.log(url)
  return (
    <>
      <Card>
        <img alt={name} src={url} />
        <CardBody></CardBody>
      </Card>
    </>
  );
};

export default PhotoCard;