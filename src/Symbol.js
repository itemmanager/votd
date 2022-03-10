import styled from "styled-components";

import ascendantPlane from "./images/ascendant-plane.png";
import blackGarden from "./images/black-garden.png";
import blackHeart from "./images/black-heart.png";
import commune from "./images/commune.png";
import darkness from "./images/darkness.png";
import drink from "./images/drink.png";
import earth from "./images/earth.png";
import enter from "./images/enter.png";
import fleet from "./images/fleet.png";
import give from "./images/give.png";
import grieve from "./images/grieve.png";
import guardian from "./images/guardian.png";
import hive from "./images/hive.png";
import kill from "./images/kill.png";
import knowledge from "./images/knowledge.png";
import light from "./images/light.png";
import love from "./images/love.png";
import pyramid from "./images/pyramid.png";
import savathun from "./images/savathun.png";
import scorn from "./images/scorn.png";
import stop from "./images/stop.png";
import tower from "./images/tower.png";
import witness from "./images/witness.png";
import worm from "./images/worm.png";
import worship from "./images/worship.png";
import neutral from "./images/neutral.png";

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
    neutral
}

const StyledSymbol = styled.div`
  &.selected {
    filter: opacity(50%);
  }
  display: grid;
  grid-template-areas: "cell";
  cursor: pointer;

  color: white;
  font-weight: 900;
  text-shadow: 1px 1px black;
  > * {
    grid-area: cell;
  }
  span {
    text-transform: capitalize;
    z-index: 1;
    padding: .5em;
    align-self: end;
  }
  img {
    aspect-ratio: 1;
  }
`

export function Symbol({label, image, onSelect, selected}) {
    return <StyledSymbol onClick={() => onSelect?.(image)} className={selected?"selected":""}>
        {label?<span>{label}</span>:""}
        <img src={images[image]} alt={label}/>
    </StyledSymbol>
}

export function Neutral() {
    return <Symbol label="" image="neutral" />
}
