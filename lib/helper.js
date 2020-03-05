exports.formatAllUsers = arr => {
  const usersArr = [];

  arr.forEach(ele => {
    // if (ele.hasOwnProperty("_doc")) {
    const flatUser = ele["_doc"];
    const nestedUserObj = {};

    const inner = obj => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object") {
            inner(obj[key]);
          }
          if (
            typeof obj[key] !== "object" &&
            key !== "0" &&
            key !== "1" &&
            key !== "2" &&
            key !== "3" &&
            key !== "4" &&
            key !== "5" &&
            key !== "6" &&
            key !== "7" &&
            key !== "8" &&
            key !== "9" &&
            key !== "10" &&
            key !== "11" &&
            key !== "12" &&
            key !== "password" && 
            key !== "avatar" &&
            key !=="_bsontype"
          ) {
            nestedUserObj[key] = obj[key];
          }
        }
      }
    };
    inner(flatUser);
    usersArr.push(nestedUserObj);
  });

  return usersArr;
};

exports.parseIsoDate = arr => {
  arr.sort((date1, date2) => {
    a = (new Date(date1)).getTime();
    b = (new Date(date2)).getTime();
    return a - b
  });
};
