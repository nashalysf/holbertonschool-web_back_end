export default function getStudentIdsSum(students) {
  return students.reduce((student, sum) => sum + student.id, 0);
}
