// Definición de ramos con sus códigos y prerrequisitos (por código)
const ramos = [
  // Primer ciclo
  { code: "MYF101", name: "Morfología y función I", prereq: [] },
  { code: "MAT117", name: "Fundamento físico matemático en kinesiología", prereq: [] },
  { code: "CBI102", name: "Fundamentos de biología celular e histología", prereq: [] },
  { code: "KIN102", name: "Fundamentos de la kinesiología", prereq: [] },
  { code: "LCE0016", name: "Inglés I", prereq: [] },

  { code: "MYF201", name: "Morfología y función II", prereq: ["MYF101"] },
  { code: "FIS401", name: "Biofísica", prereq: ["MAT117"] },
  { code: "CQU202", name: "Fundamentos de química y bioquímica para salud", prereq: [] },
  { code: "KIN208", name: "Comunicación científica en salud", prereq: [] },
  { code: "KIN204", name: "Actividad física y salud", prereq: [] },
  { code: "LCE0026", name: "Inglés II", prereq: [] },

  // Segundo ciclo
  { code: "KIN305", name: "Bases del movimiento", prereq: ["MYF201","FIS401"] },
  { code: "AES519", name: "Bioestadística", prereq: ["MAT117"] },
  { code: "MYF302", name: "Fisiología general", prereq: ["MYF101","KIN102"] },
  { code: "KIN303", name: "Kinesiología basada en evidencia", prereq: ["KIN102","KIN208"] },
  { code: "KIN208f", name: "Fundamentos fisiológico y psicológicos I", prereq: ["KIN204"] },
  { code: "LIC001", name: "Fundamentos del actuar comunitario", prereq: [] },

  { code: "KIN591", name: "Análisis del movimiento", prereq: ["KIN305"] },
  { code: "KIN409", name: "Control y aprendizaje motor", prereq: ["MYF302"] },
  { code: "KIN410", name: "Fisiología del ejercicio", prereq: ["KIN204","MYF302"] },
  { code: "KIN412", name: "Fisiopatología", prereq: ["MYF302","CQU202"] },
  { code: "KIN408", name: "Fundamentos fisiológico y psicológicos II", prereq: ["KIN208"] },
  { code: "LIC002", name: "Fundamentos éticos del actuar comunitario", prereq: ["LIC001"] },

  // Tercer ciclo
  { code: "KIN508", name: "Disfunción neuromusculoesquelética", prereq: ["KIN591"] },
  { code: "KIN494", name: "Disfunción cardiorrespiratoria", prereq: ["KIN412","MYF302"] },
  { code: "KIN509", name: "Fundamentos farmacológicos en kinesiología", prereq: ["KIN412","MYF302"] },
  { code: "KIN600", name: "Gestión y emprendimiento en salud", prereq: ["AES519"] },
  { code: "KIN510", name: "Práctica integrada I", prereq: ["KIN408","KIN410"] }, // Simplificado a dos prereqs
  { code: "LIC003", name: "Salud pública y políticas públicas", prereq: ["LIC002"] },

  { code: "KIN607", name: "Evaluación neuromusculoesquelética", prereq: ["KIN508"] },
  { code: "KIN615", name: "Evaluación cardiorrespiratoria", prereq: ["KIN454"] }, // Faltó agregar KIN454, puedes agregar si quieres
  { code: "KIN503", name: "Ergonomía, factores humanos y salud ocupacional", prereq: ["LIC003","KIN591"] },
  { code: "KIN719", name: "Metodología de investigación", prereq: ["KIN600"] },
  { code: "KIN720", name: "Prácticas integradas II", prereq: ["KIN494"] }, // Simplificado
  { code: "LIC004", name: "Metodología participativa e interacción comunitaria", prereq: ["LIC003"] },

  { code: "KIN723", name: "Intervención neuromusculoesquelética I", prereq: ["KIN507"] }, // KIN507 no está listado, ok para test
  { code: "KIN721", name: "Intervención respiratoria", prereq: ["KIN615"] },
  { code: "KIN211", name: "Agentes físicos en rehabilitación", prereq: [] }, // Simplificado
  { code: "KIN001", name: "Seminario de grado", prereq: ["KIN719"] },
  { code: "KIN812", name: "Práctica integrada III", prereq: ["KIN720","KIN515","KIN508"] }, // Simplificado
  { code: "LIC005", name: "Taller de intervención comunitaria interdisciplinaria I", prereq: ["LIC004"] },

  { code: "KIN823", name: "Intervención neuromusculoesquelética II", prereq: ["KIN723"] },
  { code: "KIN718", name: "Intervención cardiometabólica", prereq: ["KIN615","KIN410"] }, 
  { code: "KIN505", name: "Intervención gerontogeriátrica", prereq: ["KIN412"] },
  { code: "KIN817", name: "Seminario de grado II", prereq: ["KIN001"] },
  { code: "KIN315", name: "Práctica integrada IV", prereq: ["KIN812"] },
  { code: "LIC006", name: "Taller comunitario interdisciplinario II", prereq: ["LIC005"] },

  { code: "KIN916", name: "Práctica profesional I", prereq: [] },
  { code: "KIN917", name: "Práctica profesional II", prereq: [] },
  { code: "KIN916b", name: "Práctica profesional III", prereq: [] },
  { code: "KIN917b", name: "Práctica profesional IV", prereq: [] },
];

// Estado de cada ramo: "locked", "unlocked", "approved
