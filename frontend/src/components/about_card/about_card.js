import React from 'react';
import './about_card.css';
import { GiBullseye } from 'react-icons/gi';
import { GrDiamond } from 'react-icons/gr';
import { FaEye } from 'react-icons/fa';

const About_card = () => {
  return (
      <div className="about-card-container d-flex flex-column align-items-center mb-5 p-3 mx-auto">
        <GiBullseye size="3rem" color="#FF6C6C"/>
        <h4 className="m-4">Proposito</h4>
        <p className="p-2">
          Consectetur cillum anim adipisicing velit officia sint tempor velit do
          ullamco esse. Amet excepteur labore adipisicing ea. Eu pariatur labore
          ex id velit. Eiusmod quis labore non voluptate sint aliquip ut sit
          sint laborum. Sunt occaecat aliquip quis cupidatat eiusmod eiusmod
          aute esse labore non culpa. Minim irure minim et occaecat. Aute
          pariatur do fugiat cillum occaecat veniam.
        </p>
      </div>
  );
};

export default About_card;
