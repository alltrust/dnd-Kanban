import { v4 as uuidv4 } from "uuid";
import { IData } from "./DataTypes";

const Data: IData = {
  [`${uuidv4()} danger`]: {
    header: "To Do",
    items: [
      {
        itemId: `uuidv4()`,
        itemTask: "Clean up room",
      },
      {
        itemId: uuidv4(),
        itemTask: "Wash dishes",
      },
      {
        itemId: uuidv4(),
        itemTask: "Shovel snow",
      },
    ],
    bgc: "#f56d6d",
  },
  [`${uuidv4()} moderate`]: {
    header: "...Tasks Started",
    items: [
      {
        itemId: uuidv4(),
        itemTask: "Data structures and algos course",
      },
      {
        itemId: uuidv4(),
        itemTask: "Read Undoing Project",
      },
      {
        itemId: uuidv4(),
        itemTask: "Watch Arsenal win the league",
      },
    ],
    bgc: "#ebb85a",
  },
  [`${uuidv4()} success`]: {
    header: "Completed",
    items: [
      {
        itemId: uuidv4(),
        itemTask: "Create kanban board",
      },
      {
        itemId: uuidv4(),
        itemTask: "Apply to Stellar Culinary ",
      },
      {
        itemId: uuidv4(),
        itemTask: "Brush teeth",
      },
    ],
    bgc: "#7cdf70",
  },
};

export default Data;
