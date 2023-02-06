const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize }
);

module.exports = Comment;
