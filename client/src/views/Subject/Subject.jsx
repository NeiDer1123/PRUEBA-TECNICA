import FormSubject from "../../components/Form/Subjects/FormSubject";
import TableSubjects from "../../components/Tables/TableSubjects";
import { useState } from "react";
import styles from "../index.css"

export default function Subject() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [idSubject, setIdSubject] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    setIsUpdate(false);
    handleShow();
  };

  return (
    <div>
      <div className="container">
        <button className="btn btn-success my-4" onClick={handleClick}>
          Crear Asignatura
        </button>
        <TableSubjects
          handleShow={handleShow}
          setIsUpdate={setIsUpdate}
          setIdSubject={setIdSubject}
        />
      </div>
      <FormSubject
        show={show}
        handleClose={handleClose}
        isUpdate={isUpdate}
        idSubject={idSubject}
      />
    </div>
  );
}
