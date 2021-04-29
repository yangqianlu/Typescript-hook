

const  needLeave= [0, false]
const isEmpty = (value) => needLeave.includes(value) ? false : !value;
export const cleanObject = (object) => {
  const result = {...object};
  Object.entries(result).forEach(([key, value]) => {
    if(isEmpty(value)) {
      delete result[key];
    }
  })
  return result;
}
