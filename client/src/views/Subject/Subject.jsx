import FormSubject from "../../components/Form/Subjects/FormSubject";
import TableSubjects from "../../components/Tables/TableSubjects";
import { useState } from "react";

export default function Subject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow}>CREAR ASIGNATURA</button>
      <TableSubjects />
      <FormSubject show={show} handleClose={handleClose} />
    </div>
  );
}
