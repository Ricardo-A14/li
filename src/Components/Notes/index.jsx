import "./Notes.css";

const Notes = () => {
  return (
    <div className="notes_container">
      <textarea className="textArea" cols="30" rows="10" placeholder="Escribe tus notas."></textarea>
    </div>
  );
};

export default Notes;
