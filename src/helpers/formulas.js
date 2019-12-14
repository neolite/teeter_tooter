export const getObjectMoment = object => {
  const { distance, weight } = object;
  const G = 9.8;
  return Number(weight || 0) * Number(distance || 0) * G;
};

export const getObjectsTotalMoment = objects => {
  if (Array.isArray(objects)) {
    const moment = objects.reduce((totalMoment, object) => {
      return totalMoment + getObjectMoment(object);
    }, 0);

    return moment.toFixed(2);
  }
  return 0;
};
