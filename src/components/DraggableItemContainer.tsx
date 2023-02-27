import { Draggable } from "react-beautiful-dnd";
import { IItem } from "../data/DataTypes";

interface DraggableItemContainerProps {
  items: IItem[];
}

const DraggableItemContainer = ({ items }: DraggableItemContainerProps) => {
  return (
    <div className="item-container">
      {items.map((item, index) => {
        return (
          <Draggable key={item.itemId} draggableId={item.itemId} index={index}>
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{
                    userSelect: "none",
                    backgroundColor: snapshot.isDragging
                      ? "white"
                      : "transparent",
                    color: snapshot.isDragging ? "black" : "white",
                    minHeight: 50,
                    ...provided.draggableProps.style,
                  }}
                >
                  {item.itemTask}
                </div>
              );
            }}
          </Draggable>
        );
      })}
    </div>
  );
};

export default DraggableItemContainer;
