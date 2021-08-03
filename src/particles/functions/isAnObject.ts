export const isAnObject = (inputObject: any) => {
  if (inputObject === null || inputObject === undefined) return false;
  return Object.getPrototypeOf(inputObject).isPrototypeOf(Object);
};

export default isAnObject;
