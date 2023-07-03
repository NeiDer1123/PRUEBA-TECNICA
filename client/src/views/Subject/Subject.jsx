import FormSubject from "../../components/Form/Subjects/FormSubject";
import TableSubjects from "../../components/Tables/TableSubjects";
import { useState } from "react";

export default function Subject() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [idSubject, setIdSubject] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleClick = () => {
    setIsUpdate(false);
    handleShow();
  }

  return (
    <div>
      <button className="btn btn-success" onClick={handleClick} >
        CREAR ASIGNATURA
      </button>
      <TableSubjects handleShow={handleShow} setIsUpdate={setIsUpdate} setIdSubject={setIdSubject}/>
      <FormSubject show={show} handleClose={handleClose} isUpdate={isUpdate} idSubject={idSubject} />
    </div>
  );
}
