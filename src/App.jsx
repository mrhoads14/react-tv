import { useState } from "react";
import tvShows from "./shows/data.js";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows, setTvShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState({});

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
