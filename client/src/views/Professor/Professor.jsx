import FormPerson from "../../components/Form/Student-Professor/FormPerson";
import TableTeachers from "../../components/Tables/TableTeachers";
import { useState } from "react";

export default function Professor() {
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState("");
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
          Crear Profesor
        </button>
        <TableTeachers
          handleShowForm={handleShow}
          setIsUpdate={setIsUpdate}
          setIdToUpdate={setIdToUpdate}
        />
      </div>
      <FormPerson
        show={show}
        handleClose={handleClose}
        isUpdate={isUpdate}
        idToUpdate={idToUpdate}
      />
    </div>
  );
}
