interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

  const student1: Student = {
	firstName: 'Tim',
	lastName: 'Simms',
	age: 37,
	location: 'Tulsa'
  }

  const student2: Student = {
	firstName: 'betterTim',
	lastName: 'Simms',
	age: 37,
	location: 'betterTulsa'
  }

  const studentsList: Array<Student> = [student1, student2];

  const table = document.createElement('table');
  studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstname = row.insertCell();
  const location = row.insertCell();
  firstname.innerHTML = student.firstName;
  location.innerHTML = student.location;
});


document.body.appendChild(table);


