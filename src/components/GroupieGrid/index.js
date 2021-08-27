import React, { useEffect, useState } from "react";
import About from "./About";
import GroupieCard from "./GroupieCard";
import { Grid, Row, Col } from "./GroupieGridElements";
import GroupieModel from "./GroupieModel";
import axios from "axios";

const Information = [
  {
    title: "Om D-Group",
    text: "D-Group är D-sektionens eminenta festeri. Vi har funnits sedan världen var svart-vit och popcorn inte gick att göra i micron. Innan dess låg vi i mammas kära mage och smed planer om världsherravälde genom pilkastning, ölhäfv och självrökande cigaretter. Vi tycker om att ha kul!",
  },
  {
    title: "Vilka är vi?",
    text: "Tjena Tjena! Vi är familjen Dequerré Altié, för att veta mer om en specifik medlem är det bara att klicka på bilden!",
  },
];

//https://developers.google.com/sheets/api/guides/concepts
//https://cloud.google.com/firestore/docs/query-data/get-data
const Groupies = [
  {
    image: "https://i.imgur.com/A1hN172.jpg",
    name: "Emma Siklosi",
    post: "Trykk",
    email: "emma.siklosi@d-group.se",
  },
  {
    image: "https://i.imgur.com/A1hN172.jpg",
    name: "Marcus Döberl",
    post: "Trykk",
    email: "emma.siklosi@d-group.se",
  },
];

function GroupieGrid() {
  const [show, setShow] = useState(false);
  //const [whichGroupie, setWhichGroupie] = useState("None")

  const toggle = (name) => {
    setShow(!show);
    console.log(name);
  };

  async function getGroupies() {
    const response = await fetch(
      "http://api.geonames.org/searchJSON?username=weknowit&maxRows=30&featureClass=p&country=se"
    );
    const json = await response.json();
    console.log(json);
    console.log(json.geonames);
    console.log(json.geoname);
    return json;
  }
  useEffect(() => {
    console.log("render");
  }, [show]);
  return (
    <>
      <GroupieModel toggle={toggle} show={show} />
      <Grid>
        <Row>
          <Col size={1}>
            <About
              title={Information[0].title}
              text={Information[0].text}
            ></About>
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[0].image}
              name={Groupies[0].name}
              post={Groupies[0].post}
              email={Groupies[0].email}
              toggle={() => toggle(0)}
            />
          </Col>
          <Col size={1}>
            <About
              title={Information[1].title}
              text={Information[1].text}
            ></About>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(1)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(2)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(3)}
            />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(1)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(2)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(3)}
            />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(1)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(2)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(3)}
            />
          </Col>{" "}
        </Row>
        <Row>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(1)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(2)}
            />
          </Col>
          <Col size={1}>
            <GroupieCard
              image={Groupies[1].image}
              name={Groupies[1].name}
              post={Groupies[1].post}
              email={Groupies[1].email}
              toggle={() => toggle(3)}
            />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default GroupieGrid;
