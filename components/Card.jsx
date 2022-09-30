import React, { useState, useEffect } from "react";
import {
  getPokemonName,
  getPokemonDescription,
  getPokemonSpriteUrl
} from "../components/utils";
import styles from "../styles/Card.module.css";

const Card = ({ pokemonIndex }) => {
  const [description, setDescription] = useState([]);
  const [currentName, setCurrentName] = useState([]);
  const [cardIndex, setCardIndex] = useState();

  useEffect(() => {
    async function getDescription() {
      const apiData = await getPokemonDescription(pokemonIndex);
      setDescription(apiData);
    }
    getDescription();
  }, [pokemonIndex]);

  useEffect(() => {
    async function getName() {
      const apiData = await getPokemonName(pokemonIndex);
      setCurrentName(apiData);
    }
    getName();
  }, [pokemonIndex]);

  const handleIncrement = () => {
    pokemonIndex + 1;
  };

  return (
    <div className={styles.cardPage}>
      <div className={styles.pokemonCard}>
        <img src={getPokemonSpriteUrl(pokemonIndex)} alt="pokemon" />
        <h2>{currentName}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.pageButton}>
        <button onClick={e => console.log("prev", pokemonIndex)}>
          Previous
        </button>
        <button onClick={e => handleIncrement}>Next</button>
      </div>
    </div>
  );
};

export default Card;
