import { useState } from "react";
import { Badge, Button, Card, CardBody, CardTitle,ButtonGroup, Row, Col } from "reactstrap";
const Badges = () => {
  const [cSelected, setCSelected] = useState([]);

  return (
    <div>
      <Row>
        <Col xs="12" md="6">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges
            </CardTitle>
            <CardBody className="">
              <div>
                <Badge href="" color="primary">
                  Primary
                </Badge>
                <Badge href="" color="secondary" className="ms-3">
                  Secondary
                </Badge>
                <Badge href="" color="success" className="ms-3">
                  Success
                </Badge>
                <Badge href="" color="danger" className="ms-3">
                  Danger
                </Badge>
                <Badge href="" color="warning" className="ms-3">
                  Warning
                </Badge>
                <Badge href="" color="info" className="ms-3">
                  Info
                </Badge>
                <Badge href="" color="light" className="ms-3">
                  Light
                </Badge>
                <Badge href="" color="dark" className="ms-3">
                  Dark
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Outline Buttons
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" outline color="primary">
                  primary
                </Button>
                <Button className="btn" outline color="secondary">
                  secondary
                </Button>
                <Button className="btn" outline color="success">
                  success
                </Button>
                <Button className="btn" outline color="info">
                  info
                </Button>
                <Button className="btn" outline color="warning">
                  warning
                </Button>
                <Button className="btn" outline color="danger">
                  danger
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Focus on click
            </CardTitle>
            <CardBody className="">
              <h5>Checkbox Buttons</h5>
              <ButtonGroup>
                <Button color="primary" active={cSelected.includes(1)}>
                  One
                </Button>
                <Button color="primary" active={cSelected.includes(2)}>
                  Two
                </Button>
                <Button color="primary" active={cSelected.includes(3)}>
                  Three
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Badges;
