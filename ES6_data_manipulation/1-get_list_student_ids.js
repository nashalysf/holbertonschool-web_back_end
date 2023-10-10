export default function getsListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map(student => student.id);
  } else {
    return [];
  }
}
