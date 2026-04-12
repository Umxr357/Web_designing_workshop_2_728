function calculateResult() {
// Step 1: Get number of subjects

    let numSubjects = parseInt(document.getElementById("numSubjects").value);
    // Step 2: Validate input
    if (isNaN(numSubjects) || numSubjects <= 0) {

        alert("Please enter a valid number of subjects (greater than 0).");
        return;
    }
    // Step 3: Collect marks using a loop
    let totalMarks = 0;
    let marksArray = [];
    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks for Subject " + i + ". Please enter a value between 0 and 100.");
            return;
        }
        marksArray.push(mark);
        totalMarks += mark;
    }
    // Step 4: Calculate average
    let averageMarks = totalMarks / numSubjects;
    averageMarks = parseFloat(averageMarks.toFixed(2));
    // Step 5: Determine grade
    let grade;
    let gradeClass;
    if (averageMarks >= 90) {
        grade = "A";
        gradeClass = "grade-A";
    } else if (averageMarks >= 75) {
        grade = "B";
        gradeClass = "grade-B";
    } else if (averageMarks >= 60) {
        grade = "C";
        gradeClass = "grade-C";
    } else if (averageMarks >= 40) {
        grade = "D";
        gradeClass = "grade-D";
    } else {
        grade = "F";
        gradeClass = "grade-F";
    }
    // Step 6: Determine pass or fail
    let resultStatus;
    let resultClass;
    if (averageMarks >= 40) {
        resultStatus = "PASS";
        resultClass = "pass";
    } else {
        resultStatus = "FAIL";
        resultClass = "fail";
    }
    // Step 7: Display results on the webpage
    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `
        <h2>📊 Result Summary</h2>
        <div class="result-item">
            <span>Number of Subjects</span>
            <span class="result-value">${numSubjects}</span>
        </div>
        <div class="result-item">
            <span>Total Marks</span>
            <span class="result-value">${totalMarks}</span>
        </div>
        <div class="result-item">
            <span>Average Marks</span>
            <span class="result-value">${averageMarks} / 100</span>
        </div>
        <div class="result-item">
            <span>Grade</span>
            <span class="result-value">
                <span class="grade-badge ${gradeClass}">${grade}</span>
            </span>
        </div>
        <div class="result-item">
            <span>Result</span>
            <span class="result-value">
                <span class="pass-badge ${resultClass}">${resultStatus}</span>
            </span>
        </div>
    `;
    // resultBox.classList.remove("hidden");
    resultBox.classList.remove("d-none");
}