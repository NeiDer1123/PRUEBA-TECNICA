import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudets } from "../../redux/actions";

export default function TableStudents() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(getStudets());
  }, []);

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Identification</th>
          <th scope="col">Name</th>
          <th scope="col">Lastname</th>
          <th scope="col">Age</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((e, i) => {
          return (
            <tr>
              <th scope="row">{e.identification}</th>
              <td>{e.name}</td>
              <td>{e.lastName}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
