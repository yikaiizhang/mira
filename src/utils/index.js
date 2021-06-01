export function isTruethy(value) {
  return value === 0 ? true : !!value;
}

export function cleanObject(object) {
  const objectClone = { ...object };
  Object.keys(objectClone).forEach((key) => {
    const value = object[key];

    if (!isTruethy(value)) {
      delete objectClone[key];
    }
  });
  return objectClone;
}
