import FormPerson from "../../components/Form/Student-Professor/FormPerson";
import TableTeachers from "../../components/Tables/TableTeachers";
import { useState } from "react";

export default function Professor() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="btn btn-success" onClick={handleShow}>CREAR PROFESOR</button>
      <TableTeachers />
      <FormPerson show={show} handleClose={handleClose} />
    </div>
  );
}
