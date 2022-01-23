function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// const student4 = new Student('Lip', 'male', '22');
// const student5 = new Student('Debbie', 'female', '18');
// const student3 = new Student('Ian', 'male', '20');

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    if('marks' in Student.prototype.setSubject === false) {
      this.marks = [];
      this.marks.push(mark);
    }
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
    if('marks' in Student.prototype.setSubject === false) {
      this.marks = [];
      this.marks.push(...mark);
    }
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function() {
  let average = this.marks.reduce((sum, current) => (sum + current)) / this.marks.length;
  return average.toFixed(3);
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.exclude = reason;
}