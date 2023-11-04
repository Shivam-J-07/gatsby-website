import * as React from "react";
import Map from "../components/neighbourhood/map.js"
import styles from "../styles/neighbourhood.css";

const Neighbourhood = () => {
  return (
    <section id="neighbourhood-section" className="content-section flex-col">
      <h1 id="neighbourhood-header" className="header">
        Neighbourhood
      </h1>
      <div className="neighbourhood-content flex-col">
        <p>
          Beyond the walls of your apartment, 1602-1604 Queen Street East offers
          a host of amenities to enhance your living experience. Stay active and
          fit in the state-of-the-art fitness center, or unwind and socialize in
          the stylish communal lounge. The rooftop terrace provides a
          picturesque setting for enjoying the stunning views of the city
          skyline or hosting gatherings with friends and neighbors.
        </p>
        <p>
          When it comes to location, this apartment building truly shines.
          Immerse yourself in the vibrant energy of Leslieville, known for its
          eclectic mix of boutiques, cafes and restaurants. Take a leisurely
          stroll along the Beaches boardwalk, where you can soak up the sun,
          enjoy water activities, or simply relax on the sandy shores. With easy
          access to public transpiration and major highways, exploring the rest
          of Toronto is a breeze. Whether you're heading downtown for work or
          venturing out to discover the city's cultural attractions, you'll find
          yourself conveniently connected to it all.
        </p>
      </div>
      <Map />
    </section>
  );
};

export default Neighbourhood;
