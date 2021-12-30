'use strict';
import {
  Model
}from 'sequelize';
module.exports = () => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //  models
    static associate() {
      // define association here
    }
  };
  // Employee.init({
  //   name: DataTypes.STRING,
  //   email: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Employee',
  // });
  return Employee;
};