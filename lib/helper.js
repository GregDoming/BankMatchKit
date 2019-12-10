


exports.formatAllUsers = (arr) => {
  const usersArr = [];

  arr.forEach((obj) => {
    if (obj.hasOwnProperty("_doc")) usersArr.push(obj["_doc"])
  })
  return usersArr;
};

