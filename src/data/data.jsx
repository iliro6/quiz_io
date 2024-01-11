import React from "react";
import {
  MdHistoryEdu,
  MdComputer,
  MdArtTrack,
  MdOutlineSportsBasketball,
  MdFlutterDash
} from "react-icons/md";

export const categories = [
  {
    category: "sport",
    desc: "you can test your knowledge in sports such as basketball , football and soccer ",
    icon: <MdOutlineSportsBasketball />,
    color: "#ff7126",
    id: 21,
    selected: false,
  },
  {
    category: "history",
    desc: "what do you know about your past? history is everything in this life, test your knowledge",
    icon: <MdHistoryEdu />,
    color: "#1ea81e",
    id: 23,
    selected: false,
  },
  {
    category: "animals",
    desc: "what do you know about animals? learn about these wonderful creatures by testing yourself.",
    icon: <MdFlutterDash />,
    color: "#e65870",
    id: 27,
    selected: false,
  },
  {
    category: "computers",
    desc: "computers are the keys to progress in the future,lets improve your knowledge",
    icon: <MdComputer />,
    color: "#34b4e9",
    id: 18,
    selected: false,
  },
];

export const icons = categories.filter(item => {
  return item.icon
})


export { MdHistoryEdu, MdComputer, MdArtTrack, MdOutlineSportsBasketball };


