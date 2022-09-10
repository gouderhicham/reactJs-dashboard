import React from "react";
import { Row, Col, CardTitle, Button, CardSubtitle } from "reactstrap";
import ComponentCard from "../components/ComponentCard";

const About = () => {
  const features = [
    {
      title: "vite Based",
      desc: "create vite is a tool that gives you a massive head start when building React apps.",
      icon: "bi-vinyl",
    },
    {
      title: "React Hooks",
      desc: "Hooks are functions that let you “hook into” React state and lifecycle features from function components.",
      icon: "bi-umbrella",
    },
    {
      title: "Easy Navigation",
      desc: "Carefully crafted, clean, smart & easy theme navigation with collapsible option.",
      icon: "bi-segmented-nav",
    },
    {
      title: "No jQuery Dependency",
      desc: "jQuery sucks, Its not a great idea to use jQuery and React in the same UI.",
      icon: "bi-shield-check",
    },
    {
      title: "Code Splitting",
      desc: 'To avoid winding up with a large bundle, it’s good to get ahead of the problem and use "Code Splitting".',
      icon: "bi-file-code",
    },
    {
      title: "Lazy Loading",
      desc: "Its more efficient to split each routes components into a separate chunk, and only load them when the route is visited.",
      icon: "bi-arrow-clockwise",
    },
  ];
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <ComponentCard
          title="React Dashboard made with bootstrap"
          subtitle={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              cumque quidem quibusdam accusantium blanditiis ut sit? Est minima
              soluta dolorum, eligendi hic doloremque facilis assumenda at enim
              ad quasi vero.
            </p>
          }
        >
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  tag={"a"}
                >
                  Check Now
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
        <ComponentCard title="Features">
          <Row>
            {features.map((feature) => (
              <Col lg="4" className="mb-5 pb-3" key={feature.title}>
                <div>
                  <i className={`bi ${feature.icon} text-primary fs-2`} />

                  <CardTitle tag="h4" className="my-3">
                    {feature.title}
                  </CardTitle>
                  <CardSubtitle className="text-muted col-10">
                    {feature.desc}
                  </CardSubtitle>
                </div>
              </Col>
            ))}
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default About;
