import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Reactstrap Alerts
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="warning">
              This is a warning alert with
              <a href="/" className="alert-link">
                {" "}an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="info">
              This is a info alert with
              <a href="/" className="alert-link">
              {" "}an example link
              </a>
              . Give it a click if you like.
            </Alert>
            <Alert color="dark">
              This is a dark alert with
              <a href="/" className="alert-link">
              {" "}an example link
              </a>
              . Give it a click if you like.
            </Alert>
          </div>
        </CardBody>
      </Card>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Alert with content
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert color="success">
              <h4 className="alert-heading">You Suck !</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium facere facilis nobis, quisquam ipsum odio corrupti id
                dignissimos delectus, veritatis repellat numquam vel.
              </p>
              <hr />
              <p className="mb-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </Alert>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Removable alert with fade
        </CardTitle>
        <CardBody className="">
          <div>
            <UncontrolledAlert color="info">
              I am an alert and I can be dismissed!
            </UncontrolledAlert>
          </div>
        </CardBody>
      </Card>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-6*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2" />
          Removable alerts without fade
        </CardTitle>
        <CardBody className="">
          <div>
            <Alert
              color="primary"
              isOpen={visible}
              toggle={onDismiss.bind(null)}
              fade={false}
            >
              I am a primary alert and I can be dismissed without animating!
            </Alert>
            <UncontrolledAlert color="warning" fade={false}>
              I am an alert and I can be dismissed without animating!
            </UncontrolledAlert>
          </div>
        </CardBody>
      </Card>

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Alerts;
