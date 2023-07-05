const { Sequelize } = require("sequelize");
const ProfessorModel = require("./models/Professor");
const StudentModel = require("./models/Student");
const SubjectModel = require("./models/Subject");
const RatingModel = require("./models/Rating");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

ProfessorModel(sequelize);
StudentModel(sequelize);
SubjectModel(sequelize);
RatingModel(sequelize);

const { Professor, Student, Rating, Subject } = sequelize.models;

// Relación entre Professor y Subject (Uno a Uno)
Professor.hasOne(Subject, { foreignKey: "professorId"});
Subject.belongsTo(Professor, { foreignKey: "professorId" });

// Relación entre Student y Rating (Uno a Muchos)
Student.hasMany(Rating, { foreignKey: "studentId" });
Rating.belongsTo(Student, { foreignKey: "studentId" });

// Relación entre Subject y Rating (Uno a Muchos)
Subject.hasMany(Rating, { foreignKey: "subjectId" });
Rating.belongsTo(Subject, { foreignKey: "subjectId" });

// Relación de muchos a muchos entre Estudiante y Asignatura
Student.belongsToMany(Subject, {
  through: "student_subject",
  foreignKey: "studentId",
});
Subject.belongsToMany(Student, {
  through: "student_subject",
  foreignKey: "subjectId",
});

module.exports = { sequelize, ...sequelize.models };
