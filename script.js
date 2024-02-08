// Array of student names
const students = [
  "AMAN PARKHAD",
  "ANUJ SINGH KHAS",
  "AYUSH HEDA",
  "AYUSH THAKRE",
  "AYUSH TOMAR",
  "AYUSHI JOSHI",
  "AYUSHI YADAV",
  "DEEPAK SISODIYA",
  "GAUTAM PATEL",
  "HARSH GEHLOT",
  "JAYESH PABLE",
  "KHUSHI SOLANKI",
  "KIRTI DEWASKAR",
  "MAHAK NIGAM",
  "NAVDEEP S GAMBHIR",
  "NIDHI PANWAR",
  "NIRJAL PARMAR",
  "PIYUSH PAWAR",
  "RAVI DHOTE",
  "RITIK SINGH",
  "SAHAJ DUBEY",
  "SANDEEP KUSHWAHA",
  "SAPNA MISHRA",
  "SHAILESH REGE",
  "SHOBHIT JAIN",
  "SHUBH MAHESHWARI",
  "SUJAL SAHU",
  "TWINKLE SINGH",
  "UJJAWAL PRAJAPAT",
  "URJA CHOUHAN",
  "VIBHUTI SHARMA",
  "VISHAL KUMAR SINGH",
  "VISHAL SINGH CHAUHAN",
  "YASH BANAIT",
  "YASH KUSUMAKAR",
  "MANASVI NEEMA",
  "UDAY YADAV",
  "ALI ASGAR TAMBAWALA",
  "MANASVI BAGHERWAL",
  "TUSHAR SHARMA",
  "USMENDRA SINGH"
];

// Array to store present students
const presentStudents = [];

let currentStudentIndex = 0;

// Function to display current student and buttons
function displayCurrentStudent() {
  const currentStudent = students[currentStudentIndex];
  document.getElementById("studentName").textContent = currentStudent;
}

// Function to handle 'Present' button click
function markPresent() {
  const currentStudent = students[currentStudentIndex];
  presentStudents.push(currentStudent);
  nextStudent();
}

// Function to handle 'Absent' button click
function markAbsent() {
  nextStudent();
}

// Function to move to the next student or finish attendance
function nextStudent() {
  currentStudentIndex++;
  if (currentStudentIndex < students.length) {
    displayCurrentStudent();
  } else {
    // All students have been processed, print present students
    const presentList = document.getElementById("presentList");
    presentStudents.forEach(student => {
      const listItem = document.createElement("p");
      listItem.textContent = student;
      presentList.appendChild(listItem);
    });
    document.getElementById("totalPresent").textContent = `Total Present: ${presentStudents.length}`;
  }
}

// Function to copy present students list to clipboard
function copyPresentList() {
  const presentList = document.getElementById("presentList");
  const listItems = presentList.querySelectorAll("p");
  const namesArray = Array.from(listItems).map(item => item.textContent);
  const namesText = namesArray.join("\n");

  navigator.clipboard.writeText(namesText)
    .then(() => {
      alert("List copied to clipboard now you can paste it anywhere you want!");
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}

// Initialize by displaying the first student
displayCurrentStudent();
