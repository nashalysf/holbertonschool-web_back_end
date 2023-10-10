export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((studentList) => studentList.location === city).map((studentName) => {
    const newGrade = newGrades.filter((location) => location.studentId === studentName.id);
    const student = studentName;
    if (newGrade.length === 1) student.grade = newGrade[0].grade;
    else student.grade = 'N/A';
    return student;
  });
}
