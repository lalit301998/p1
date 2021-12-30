'use strict';
import {
  Model,DataTypes
} from 'sequelize';
module.exports = () => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      // this.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  };
  // Posts.init({
  //   title: DataTypes.STRING,
  //   content: DataTypes.STRING,
  //   userId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Posts',
  //   tableName: 'posts'
  // });
  return Posts;
};