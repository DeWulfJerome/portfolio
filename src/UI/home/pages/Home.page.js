import React from 'react';
import Header from '../../general/containers/Header';
import DistanceTracker from '../components/DistanceTracker';
import Landing from '../components/Landing';
import Pathfinding from '../components/Pathfinding';
import Websites from '../components/Websites';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Landing></Landing>
      <Pathfinding></Pathfinding>
      <DistanceTracker></DistanceTracker>
      <Websites></Websites>
    </>
  );
}
