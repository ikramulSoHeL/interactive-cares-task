import React from "react";
import "./team.scss";

// components
import Wrapper from "../../../components/wrapper/Wrapper";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

// static files
import teamData from "./teamData";
import TeamCard from "../../../components/cards/teamCard/TeamCard";

const Team = () => {
  return (
    <Wrapper>
      <div className="team">
        <SectionHeader subText="Features" mainText="Our Team" />

        <div className="teamContainer">
          {teamData.map(({ id, name, position, img }) => (
            // <div className="teamCard" key={id}>
            //   <img className="teamCard__img" src={img} alt="" />
            //   <h3 className="teamCard__name">{name}</h3>
            //   <span className="teamCard__position">{position}</span>
            // </div>
            <TeamCard key={id} img={img} name={name} position={position} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Team;
