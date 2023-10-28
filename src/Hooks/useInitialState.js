
import { useState } from "react";

const useInitialState = () => {

    const [notesState, setNotesState] = useState(false);


    // FUNCTIONS.
    const ActiveNote = () => {
        setNotesState(!notesState);
    }



    return {
        notesState, ActiveNote
    };
}

export default useInitialState;

