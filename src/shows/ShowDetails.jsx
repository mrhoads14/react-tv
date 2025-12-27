import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx"
import EpisodeDetails from "../episodes/EpisodeDetails.jsx"

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState({});
  return (
    <div className="show-details">
      {
        show.name ?
          <>
            <EpisodeList
              name={show.name}
              episodes={show.episodes}
              selectedEpisode={selectedEpisode}
              setSelectedEpisode={setSelectedEpisode}
             />
            {
              show.episodes.find((eachEpisode) => {
                return eachEpisode.title === selectedEpisode.title;
              }) ?
                <EpisodeDetails episode={selectedEpisode} /> :
                <div>
                  <h2>Episode Details</h2>
                  <p>Select an episode to learn more.</p>
                </div>
            }
          </> :
          <p>Please select a show!</p>
      }
    </div>
  )
}
