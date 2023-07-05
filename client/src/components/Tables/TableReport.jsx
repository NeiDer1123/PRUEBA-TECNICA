import { useSelector } from "react-redux";

export default function TableReport() {
  const report = useSelector((state) => state.report);

  return (
    <div className="table-responsive">
      {report.length === 0 ? (
        <span className="text-primary">
          Debes asignar una calificación a un estudiante.*
        </span>
      ) : null}
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr className="text-center">
            <th scope="col">Año Académico</th>
            <th scope="col">ID del Estudiante</th>
            <th scope="col">Nombre del Estudiante</th>
            <th scope="col">ID de la Asignatura</th>
            <th scope="col">Nombre de la Asignatura</th>
            <th scope="col">ID del Profesor</th>
            <th scope="col">Nombre del Profesor</th>
            <th scope="col">CALIFICACIÓN FINAL</th>
            <th scope="col">Aprobado</th>
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
