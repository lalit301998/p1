'use strict';
import {
  Model,DataTypes
} from'sequelize';
module.exports = () => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      // this.hasMany(models.Posts, { foreignKey: 'userId' });
    }
  };
  // Users.init({
  //   name: DataTypes.STRING,
  //   email: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Users',
  // });
  return Users;
};