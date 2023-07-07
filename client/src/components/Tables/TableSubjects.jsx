import { useDispatch, useSelector } from "react-redux";
import { getSubject, getSubjects } from "../../redux/actions";
import axios from "axios";
import { useEffect } from "react";

export default function TableSubjects({ handleShow, setIsUpdate, setIdSubject }) {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects);

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  const handleClick = (e) => {
    const id = e.target.id;
    handleShow();
    setIsUpdate(true);
    setIdSubject(id);
    dispatch(getSubject(id))
  };

  const deleteSubject = async (e) => {
    const id = e.target.id;
    await axios.delete(`/subject/${id}`);
    dispatch(getSubjects());
  };

  return (
    <div className="table-responsive">
      <table >
        <thead>
          <tr className="text-center">
            <th scope="col">Identification</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td className="d-flex justify-content-evenly">
                  <button className="btn btn-danger" id={e.id} onClick={(e) => deleteSubject(e)}>
                    Delete
                  </button>
                  <button className="btn btn-primary" id={e.id} onClick={handleClick}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}