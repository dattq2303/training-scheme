const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Course = connection.sequelize.define("course", {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  credits: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  },
  requirement: {
    type: Sequelize.TEXT,
  },
  objective: {
    type: Sequelize.TEXT,
  },
  document_url: {
    type: Sequelize.TEXT,
  },
  required_course_uuid: {
    type: Sequelize.UUID,
  },
});

module.exports = Course;
