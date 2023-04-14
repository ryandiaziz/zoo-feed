const jwt = require("jsonwebtoken");
const screetCode =  process.env.SECRET_CODE || 'zoofeed'


const tokenGenerator = (data) => {
  const { id,name, email, imageUrl, age, roleId, role,animals } = data;
  return jwt.sign({
    id : id,
    name: name,
    email: email,
    imageUrl: imageUrl,
    age: age,
    roleId: roleId,
    role : role,
    animal :animals
  },screetCode);
};

const tokenVerifier = (data) =>{
    return jwt.verify(data,screetCode)

}


module.exports = {
    tokenGenerator,tokenVerifier
}
