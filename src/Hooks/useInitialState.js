
import { useState } from "react";

const useInitialState = () => {

    const [notesState, setNotesState] = useState(false);
    const [wordCounter, setWordCounter] = useState([]);



    // FUNCTIONS.
    const ActiveNote = () => {
        setNotesState(!notesState);
    }



    return {
        notesState,
        ActiveNote,
        wordCounter, setWordCounter
    };
}

export default useInitialState;

