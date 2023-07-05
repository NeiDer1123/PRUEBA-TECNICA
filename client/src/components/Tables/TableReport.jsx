import { useSelector } from "react-redux";

export default function TableReport() {
  const report = useSelector((state) => state.report);
  console.log(report);

  return (
    <div className="table-responsive">
      {report.length === 0 ? (
        <span className="text-primary">You must assign a grade to a student*</span>
      ) : null}
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Academic Year</th>
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Subject ID</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Professor ID</th>
            <th scope="col">Professor Name</th>
            <th scope="col">FINAL RATING</th>
            <th scope="col">Approved</th>
          </tr>
        </thead>
        <tbody>
          {report.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.academicYear}</td>
                <td>{e.Student.identification}</td>
                <td>{e.Student.name}</td>
                <td>{e.subjectId}</td>
                <td>{e.Subject.name}</td>
                <td>{e.Subject.Professor.identification}</td>
                <td>{e.Subject.Professor.name}</td>
                <td>{e.rating}</td>
                <td>{e.rating > 3 ? "YES" : "NO"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
