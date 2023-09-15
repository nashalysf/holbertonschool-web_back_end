export default class HolbertonClass {
constructor(name, length, students) {
    if (typeof (name) !='string') throw TypeError('Name must be a string');
    if (typeof (length) !== 'number') throw TypeError('Lenght must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be a list');
    if (students.every((student) => typeof student !== 'string')) throw TypeError('Students must be a list')

    this._name = name;
    this._length = length;
    this._students = students;
}

  /* getter of name */
  get name() {
    return this._name;
  }

  /* getter of length */
  get length() {
    return this._length;
  }

  /* getter of students */
  get students() {
    return this._students;
  }

  /* setter of name */
  set name(value) {
    if (typeof (value) !== 'string') throw TypeError('Name must be a string');

    this._name = value;
  }

  /* setter of length */
  set length(value) {
    if (typeof (length) !== 'number') throw TypeError('Lenght must be a number');

    this._length = value;
  }

  /* setter of students */
  set students(value) {
    if (!Array.isArray(students)) throw TypeError('Students must be a list');
    if (students.every((student) => typeof student !== 'string')) throw TypeError('Students must be a list');

    this._students = value;
  }
}