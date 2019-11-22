export const convertState = (obj, newObj) => {
  console.log(newObj)
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      if (typeof obj[key] === "object") convertState(obj[key]);
      if (typeof obj[key] !== "object") initialState[key] = obj[key];
    }
  }
  return
};