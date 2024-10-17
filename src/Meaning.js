import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      <em>
        <p className="example">{props.meaning.example}</p>
      </em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
