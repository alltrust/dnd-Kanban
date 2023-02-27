import { IData } from "../data/DataTypes";
import { Droppable } from "react-beautiful-dnd";
import DraggableItemContainer from "./DraggableItemContainer";

interface DroppableColumnContainerProps {
  entries: IData;
}

const DroppableColumnContainer = ({
  entries,
}: DroppableColumnContainerProps) => {
  return (
    <div className="columns-wrapper">
      {Object.entries(entries).map(([id, entry], index) => {
        return (
          <div className="column" key={index}>
            <h3>{entry.header}</h3>

            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: `${entry.bgc}`,
                      opacity: snapshot.isDraggingOver ? 0.33 : 1
                    }}
                  >
                    <DraggableItemContainer items={entry.items} />
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      })}
    </div>
  );
};

export default DroppableColumnContainer;
