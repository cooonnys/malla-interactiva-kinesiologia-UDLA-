const courses = {};
const courseData = JSON.parse(localStorage.getItem("courseState") || "{}");

fetch("courses.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("semesters-container");

    // agrupar por semestre estimado
    const semesters = [
      "Primer semestre", "Segundo semestre",
      "Tercer semestre", "Cuarto semestre",
      "Quinto semestre", "Sexto semestre",
      "Séptimo semestre", "Octavo semestre",
      "Noveno semestre", "Décimo semestre"
    ];
    
    // Cursos por semestre
    const semesterMap = {
      "Primer semestre": ["MYF101", "MAT117", "CBI102", "KIN102", "LCE0016"],
      "Segundo semestre": ["MYF201", "FIS401", "CQU202", "KIN208", "KIN204", "LCE0026"],
      "Tercer semestre": ["KIN305", "AES519", "MYF302", "KIN303", "KIN207", "LIC001"],
      "Cuarto semestre": ["KIN591", "KIN409", "KIN410", "KIN412", "KIN408", "LIC002"],
      "Quinto semestre": ["KIN508", "KIN494", "KIN509", "KIN600", "KIN510", "LIC003"],
      "Sexto semestre": ["KIN607", "KIN615", "KIN503", "KIN719", "KIN720", "LIC004"],
      "Séptimo semestre": ["KIN723", "KIN721", "KIN211", "KIN001", "KIN812", "LIC005"],
      "Octavo semestre": ["KIN823", "KIN718", "KIN505", "KIN817", "KIN315", "LIC006"],
      "Noveno semestre": ["KIN916", "KIN917"],
      "Décimo semestre": ["KIN916", "KIN917"]
    };

    for (const [semester, codes] of Object.entries(semesterMap)) {
      const semDiv = document.createElement("div");
      semDiv.className = "semester";
      semDiv.innerHTML = `<h2>${semester}</h2>`;
      
      codes.forEach(code => {
        const course = data.find(c => c.code === code);
        courses[code] = course;

        const btn = document.createElement("div");
        btn.className = "course locked";
        btn.textContent = `${course.code} - ${course.name}`;
        btn.dataset.code = course.code;
        semDiv.appendChild(btn);
      });

      container.appendChild(semDiv);
    }

    unlockCourses();
    attachHandlers();
  });

function unlockCourses() {
  for (const code in courses) {
    const course = courses[code];
    const prereqsMet = course.prerequisites.every(p => courseData[p]);
    const btn = document.querySelector(`.course[data-code='${code}']`);
    if (courseData[code]) {
      btn.classList.remove("locked");
      btn.classList.add("completed");
    } else if (prereqsMet) {
      btn.classList.remove("locked");
    }
  }
}

function attachHandlers() {
  document.querySelectorAll(".course").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.code;
      if (btn.classList.contains("locked")) return;
      courseData[code] = !courseData[code];
      localStorage.setItem("courseState", JSON.stringify(courseData));
      location.reload();
    });
  });
}
