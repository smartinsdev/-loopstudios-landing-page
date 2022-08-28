import deepEarth from "../../public/mobile/image-deep-earth.jpg";
import nightAcarde from "../../public/mobile/image-night-arcade.jpg";
import soccerTeam from "../../public/mobile/image-soccer-team.jpg";
import grid from "../../public/mobile/image-grid.jpg";
import fromAbove from "../../public/mobile/image-from-above.jpg";
import pocketBorealis from "../../public/mobile/image-pocket-borealis.jpg";
import curiosity from "../../public/mobile/image-curiosity.jpg";
import fisheye from "../../public/mobile/image-fisheye.jpg";

import deepEarthDesktop from "../../public/desktop/image-deep-earth.jpg";
import nightAcardeDesktop from "../../public/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "../../public/desktop/image-soccer-team.jpg";
import gridDesktop from "../../public/desktop/image-grid.jpg";
import fromAboveDesktop from "../../public/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "../../public/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../../public/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../../public/desktop/image-fisheye.jpg";
import { StaticImageData } from "next/image";

export type ImageImport = {
  src: StaticImageData,
  title: string
}

export const listImagesMobile = [
  {
    src: deepEarth,
    title: "deep earth",
  },
  {
    src: nightAcarde,
    title: "night acarde",
  },
  {
    src: soccerTeam,
    title: "soccer team vr",
  },
  {
    src: grid,
    title: "the grid",
  },
  {
    src: fromAbove,
    title: "from up above vr",
  },
  {
    src: pocketBorealis, 
    title: "pocket borealis",
  },
  {
    src: curiosity,
    title: "the curiosity",
  },
  {
    src: fisheye,
    title: "make it fisheye",
  },
];

export const listImagesDestop = [
  {
    src: deepEarthDesktop,
    title: "deep earth",
  },
  {
    src: nightAcardeDesktop,
    title: "night acarde",
  },
  {
    src: soccerTeamDesktop,
    title: "soccer team vr",
  },
  {
    src: gridDesktop,
    title: "the grid",
  },
  {
    src: fromAboveDesktop,
    title: "from up above vr",
  },
  {
    src: pocketBorealisDesktop, 
    title: "pocket borealis",
  },
  {
    src: curiosityDesktop,
    title: "the curiosity",
  },
  {
    src: fisheyeDesktop,
    title: "make it fisheye",
  },
];