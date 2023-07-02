import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../redux/actions";
import style from "./Tables.module.css"

export default function TableSubjects() {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects);
  console.log(subjects)

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <table className="table">
        <thead>
          <tr>
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
                <td>
                  <button className="btn btn-danger">Delete</button>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}