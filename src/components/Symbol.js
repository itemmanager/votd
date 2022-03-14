import styled from "styled-components";

import ascendantPlane from "../images/ascendant-plane.png";
import blackGarden from "../images/black-garden.png";
import blackHeart from "../images/black-heart.png";
import commune from "../images/commune.png";
import darkness from "../images/darkness.png";
import drink from "../images/drink.png";
import earth from "../images/earth.png";
import enter from "../images/enter.png";
import fleet from "../images/fleet.png";
import give from "../images/give.png";
import grieve from "../images/grieve.png";
import guardian from "../images/guardian.png";
import hive from "../images/hive.png";
import kill from "../images/kill.png";
import knowledge from "../images/knowledge.png";
import light from "../images/light.png";
import love from "../images/love.png";
import pyramid from "../images/pyramid.png";
import savathun from "../images/savathun.png";
import scorn from "../images/scorn.png";
import stop from "../images/stop.png";
import tower from "../images/tower.png";
import traveller from "../images/traveller.png"
import witness from "../images/witness.png";
import worm from "../images/worm.png";
import worship from "../images/worship.png";
import neutral from "../images/neutral.png";

const images = {
    ascendantPlane,
    blackGarden,
    blackHeart,
    commune,
    darkness,
    drink,
    earth,
    enter,
    fleet,
    give,
    grieve,
    guardian,
    hive,
    kill,
    knowledge,
    light,
    love,
    pyramid,
    savathun,
    scorn,
    stop,
    tower,
    witness,
    worm,
    worship,
    traveller,
    neutral
}

const StyledSymbol = styled.div`
  --color: white;
  --shadow: black 1px 1px 2px, black -1px -1px 2px;
  border-radius: 10%;
  overflow: hidden;
  box-shadow: rgba(96, 200, 148, 0.5) 0 0 10px;
  aspect-ratio: 1;
  max-height: 180px;


  @media only screen and (min-width: 600px) {
    & {
      font-size: clamp(.5rem, 2vw, 1.25rem);
    }
  }

  &.selected {
    filter: opacity(50%);
  }

  display: grid;
  grid-template-areas: "cell";
  cursor: pointer;

  color: var(--color);
  font-weight: 400;
  text-shadow: var(--shadow);
  
  input {
    background: transparent;
    border: none;
    color: var(--color);
    text-shadow: var(--shadow);
  }
  input:focus {
    background: rgba(0,0,0,.5);
    border: 1px solid rgb(96, 200, 148);
    outline: 0;
  }
  
  > * {
    grid-area: cell;
    overflow: hidden;
  }

  span, input {
    text-transform: capitalize;
    padding: .5em;
    align-self: end;
  }

  img {
    aspect-ratio: 1;
  }
`

export function Symbol({label, image, onSelect, selected, onEdit}) {
    const readOnlyLabel = label ? <span>{label}</span> : ""
    const labelComponent = onEdit ?
        <input
            type="text"
            value={label}
            onChange={event => onEdit(event.target.value)}
        /> : readOnlyLabel

    return (
        <StyledSymbol
            onClick={() => onSelect?.(image)}
            className={selected ? "selected" : ""}
        >
            <img src={images[image]} alt={label}/>
            {labelComponent}
        </StyledSymbol>
    )

}

export function Neutral() {
    return <Symbol label="" image="neutral"/>
}
