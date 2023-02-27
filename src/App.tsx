import { useState } from "react";
import Data from "./data/Data";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DroppableColumnContainer from "./components/DroppableColumnContainer";
import "./App.css";

function App() {
  const [entries, setEntries] = useState(Data);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.source.droppableId !== result.destination.droppableId) {
      const entriesSource = entries[result.source.droppableId];
      const entriesDestination = entries[result.destination.droppableId];

      const sourceTasks = [...entriesSource.items];
      const destinationTasks = [...entriesDestination.items];

      const [removed] = sourceTasks.splice(result.source.index, 1);
      destinationTasks.splice(result.destination.index, 0, removed);
      setEntries({
        ...entries,
        [result.source.droppableId]: {
          ...entriesSource,
          items: sourceTasks,
        },
        [result.destination.droppableId]: {
          ...entriesDestination,
          items: destinationTasks,
        },
      });
    } else {
      const entry = entries[result.source.droppableId];

      const tasksCopied = [...entry.items];
      const [removed] = tasksCopied.splice(result.source.index, 1);
      tasksCopied.splice(result.destination.index, 0, removed);
      setEntries({
        ...entries,
        [result.source.droppableId]: { ...entry, items: tasksCopied },
      });
    }
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
        <DroppableColumnContainer entries={entries} />
      </DragDropContext>
    </div>
  );
}

export default App;
