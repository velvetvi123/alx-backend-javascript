const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (age, value) => age + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
