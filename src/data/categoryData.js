import { FaCity, FaUmbrellaBeach } from "react-icons/fa";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { TbBrandFunimation } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaHiking } from "react-icons/fa";

const categoryData = [
  {
    id: 1,
    icon: <FaCity />,
    name: "City Tours",
    achived: "10+ Tours",
  },
  {
    id: 2,
    icon: <FaUmbrellaBeach />,
    name: "Beach Tours",
    achived: "10+ Tours",
  },
  {
    id: 3,
    icon: <MdDirectionsBoatFilled />,
    name: "Boat Tours",
    achived: "10+ Tours",
  },
  {
    id: 4,
    icon: <TbBrandFunimation />,
    name: "Adventure Tours",
    achived: "10+ Tours",
  },
  {
    id: 5,
    icon: <PiBowlFoodFill />,
    name: "Food Tours",
    achived: "10+ Tours",
  },
  {
    id: 6,
    icon: <FaHiking />,
    name: "Hiking Tours",
    achived: "10+ Tours",
  },
  // {
  //   id: 7,
  //   icon: "🍔",
  //   name: "Produce",
  //   achived: "10+ Tours",
  // },
  // {
  //   id: 8,
  //   icon: "🍔",
  //   name: "Seafood",
  //   achived: "10+ Tours",
  // },
];

export default categoryData;
