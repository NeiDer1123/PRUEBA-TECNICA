import FormPerson from "../../components/Form/Student-Professor/FormPerson";
import TableStudents from "../../components/Tables/TableStudents";
import { useState } from "react";

export default function Student() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btn btn-success" onClick={handleShow}>CREAR ESTUDIANTE</button>
      {/* <FormPerson /> */}
      <TableStudents/>
      <FormPerson show={show} handleClose={handleClose} />
    </div>
  );
}
