import { FishingIcon, LiveCasinoIcon, LiveSportbookIcon, SlotsIcon } from "../Icons/Icons";
import { v4 } from "uuid";
export const dataLinks = [
  {
    id: v4(),
    url: "/live-sportbook",
    icon: LiveSportbookIcon() ,
    name: "Live Sportbook",
  },
  {
    id: v4(),
    url: "/live-casino",
    icon: LiveCasinoIcon(),
    name: "Live Casino",
  },
  {
    id: v4(),
    url: "/tables",
    icon: LiveCasinoIcon(),
    name: "Tables",
  },
  {
    id: v4(),
    url: "/slots",
    icon: SlotsIcon(),
    name: "Slots",
  },
  {
    id: v4(),
    url: "/fishing",
    icon: FishingIcon(),
    name: "Fishing",
  },
];
