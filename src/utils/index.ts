export function isTruethy(value: unknown) {
  return value === 0 ? true : !!value;
}

export function cleanObject(object: object) {
  const objectClone = { ...object };
  Object.keys(objectClone).forEach((key) => {
    // @ts-ignore
    const value = object[key];

    if (!isTruethy(value)) {
      // @ts-ignore
      delete objectClone[key];
    }
  });
  return objectClone;
}
