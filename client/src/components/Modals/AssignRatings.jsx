import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import validate from "./validate";

export default function AssingRatings({ show, handleClose, studentId }) {
  const [subjectSelected, setSubjectSelected] = useState("");
  const subjects = useSelector((state) => state.subjects);
  const [rating, setRating] = useState({ academicYear: "", rating: "" });
  const [errors, setErrors] = useState({ academicYear: "", rating: "" });

  const handleInputChange = (e) => {
    setRating({
      ...rating,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...rating,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOptionChange = (e) => {
    setSubjectSelected(e.target.value);
  };

  const handleSubmit = async () => {
    if (errors.academicYear || errors.rating || !subjectSelected) {
      return;
    } else {
      try {
        const body = {
          academicYear: rating.academicYear,
          rating: rating.rating,
          studentId,
          subjectId: subjectSelected,
        };
        console.log(body);
        await axios.post(
          `http://localhost:3001/rating`,
          body
        );
        setRating({ academicYear: "", rating: "" });
        setErrors({ academicYear: "", rating: "" });
      } catch (error) {
        console.log(error.message)
      }
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assigns the rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Academic Year"
                aria-label="First name"
                name="academicYear"
                value={rating.academicYear}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.academicYear && <span>{errors.academicYear}</span>}
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Rating"
                aria-label="Last name"
                name="rating"
                value={rating.rating}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.rating && <span>{errors.rating}</span>}
            </div>
          </div>
          <select
            className={`form-select ${!subjectSelected ? "text-danger" : ""}`}
            aria-label="Choose the subject"
            value={subjectSelected}
            onChange={handleOptionChange}
          >
            <option value="" className="text-danger">
              You must choose a subject
            </option>
            {subjects.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
