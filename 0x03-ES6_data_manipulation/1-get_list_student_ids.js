const getListStudentIds = (myArr) => {
  if (!Array.isArray(myArr)) {
    return [];
  }
  return myArr.map((studentId) => studentId.id);
};

export default getListStudentIds;
