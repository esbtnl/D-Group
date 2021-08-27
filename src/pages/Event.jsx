import React from "react";
import dart from "../res/dart_slide.jpg";
import EventsGrid from "../components/EventsGrid";

function Event() {
  return (
    <>
      <div className="container">
        <img src={dart} alt="Dart" style={{ height: "40vh", width: "100%" }} />
        <h1 className="centered">Evenemang</h1>
      </div>

      <EventsGrid></EventsGrid>
    </>
  );
}
export default Event;
