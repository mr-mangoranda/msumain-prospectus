const fs = require('fs');

const ColorSchemes = ['maroon', 'blue', 'orange', 'purple', 'yellow', 'green', 'pink'];
let colorIndex = 0;
function getNextColor() {
  const color = ColorSchemes[colorIndex % ColorSchemes.length];
  colorIndex++;
  return color;
}

const colleges = [
  "All Colleges",
  "College of Agriculture",
  "College of Business Administration and Accountancy",
  "College of Education",
  "College of Engineering",
  "College of Fisheries",
  "College of Forestry and Environmental Studies",
  "College of Health Sciences",
  "College of Hospitality and Tourism Management",
  "College of Information and Computing Sciences",
  "College of Law",
  "College of Medicine",
  "College of Natural Sciences and Mathematics",
  "College of Public Affairs",
  "College of Social Sciences and Humanities",
  "College of Sports, Physical Education and Recreation",
  "King Faisal Center for Islamic, Arabic and Asian Studies",
];

const rawData = [
  // College of Agriculture
  { code: "BSA-AGRO", name: "BS Agriculture Major in Agronomy", desc: "Focuses on crop production and soil management.", col: "College of Agriculture", dur: "4 Years", car: "Agronomist, Crop Scientist" },
  { code: "BSA-AS", name: "BS Agriculture Major in Animal Science", desc: "Focuses on livestock production and management.", col: "College of Agriculture", dur: "4 Years", car: "Animal Scientist, Farm Manager" },
  { code: "BSA-ENTOM", name: "BS Agriculture Major in Entomology", desc: "Study of insects and their relationship to humans, the environment, and other organisms.", col: "College of Agriculture", dur: "4 Years", car: "Entomologist, Pest Control Specialist" },
  { code: "BSA-PP", name: "BS Agriculture Major in Plant Pathology", desc: "Study of plant diseases and their management.", col: "College of Agriculture", dur: "4 Years", car: "Plant Pathologist" },
  { code: "BS-ABM", name: "BS Agribusiness Management", desc: "Integration of business principles with agriculture.", col: "College of Agriculture", dur: "4 Years", car: "Agribusiness Manager" },
  { code: "MS-AGRI", name: "Master of Science in Agriculture", desc: "Post-graduate research in agricultural sciences.", col: "College of Agriculture", dur: "2 Years", car: "Researcher, Academe" },

  // CBAA
  { code: "BSA", name: "BS Accountancy", desc: "Prepares students for the CPA licensure exam and a career in accounting.", col: "College of Business Administration and Accountancy", dur: "4 Years", car: "CPA, Auditor" },
  { code: "BSBA-MKT", name: "BSBA Major in Marketing Management", desc: "Focuses on market research, consumer behavior, and sales.", col: "College of Business Administration and Accountancy", dur: "4 Years", car: "Marketing Manager" },
  { code: "BSBA-ECON", name: "BSBA Major in Business Economics", desc: "Applies economic theories to business decision-making.", col: "College of Business Administration and Accountancy", dur: "4 Years", car: "Economic Analyst" },
  { code: "BSBA-HR", name: "BSBA Major in Human Resource Management", desc: "Focuses on talent acquisition and organizational behavior.", col: "College of Business Administration and Accountancy", dur: "4 Years", car: "HR Manager" },
  { code: "MBA", name: "Master in Business Administration", desc: "Post-graduate program for business leaders.", col: "College of Business Administration and Accountancy", dur: "2 Years", car: "Executive, Entrepreneur" },

  // Education
  { code: "BEED", name: "Bachelor of Elementary Education", desc: "Prepares students to teach in elementary schools.", col: "College of Education", dur: "4 Years", car: "Elementary Teacher" },
  { code: "BSED-ENG", name: "BSEd Major in English", desc: "Prepares secondary education English teachers.", col: "College of Education", dur: "4 Years", car: "High School English Teacher" },
  { code: "BSED-MATH", name: "BSEd Major in Mathematics", desc: "Prepares secondary education Mathematics teachers.", col: "College of Education", dur: "4 Years", car: "Math Teacher" },
  { code: "BSED-SCI", name: "BSEd Major in Science", desc: "Prepares secondary education Science teachers.", col: "College of Education", dur: "4 Years", car: "Science Teacher" },
  { code: "BSED-FIL", name: "BSEd Major in Filipino", desc: "Prepares secondary education Filipino teachers.", col: "College of Education", dur: "4 Years", car: "Filipino Teacher" },
  { code: "BSED-SOC", name: "BSEd Major in Social Studies", desc: "Prepares secondary education Social Studies teachers.", col: "College of Education", dur: "4 Years", car: "Social Studies Teacher" },
  { code: "MAED", name: "Master of Arts in Education", desc: "Post-graduate program for educational leadership.", col: "College of Education", dur: "2 Years", car: "School Administrator" },
  { code: "PHD-ED", name: "PhD in Educational Management", desc: "Doctoral program for high-level educational management.", col: "College of Education", dur: "3-4 Years", car: "Superintendent, Professor" },

  // Engineering
  { code: "BSCE", name: "BS Civil Engineering", desc: "Design and construction of infrastructure.", col: "College of Engineering", dur: "4 Years", car: "Civil Engineer" },
  { code: "BSME", name: "BS Mechanical Engineering", desc: "Design and manufacturing of mechanical systems.", col: "College of Engineering", dur: "4 Years", car: "Mechanical Engineer" },
  { code: "BSEE", name: "BS Electrical Engineering", desc: "Study of electrical systems and power.", col: "College of Engineering", dur: "4 Years", car: "Electrical Engineer" },
  { code: "BSECE", name: "BS Electronics Engineering", desc: "Design of electronic circuits and communication systems.", col: "College of Engineering", dur: "4 Years", car: "Electronics Engineer" },
  { code: "BSCHE", name: "BS Chemical Engineering", desc: "Application of chemistry to industrial processes.", col: "College of Engineering", dur: "4 Years", car: "Chemical Engineer" },
  { code: "BSAE", name: "BS Agricultural and Biosystems Engineering", desc: "Engineering applied to agriculture and biology.", col: "College of Engineering", dur: "4 Years", car: "Agricultural Engineer" },
  { code: "DCT", name: "Diploma in Construction Technology", desc: "2-year program for construction skills.", col: "College of Engineering", dur: "2 Years", car: "Construction Supervisor" },
  { code: "DET", name: "Diploma in Electrical Technology", desc: "2-year program for electrical installation.", col: "College of Engineering", dur: "2 Years", car: "Electrician, Technician" },
  // Fisheries
  { code: "BSF", name: "BS Fisheries", desc: "Study of aquaculture, capture fisheries, and aquatic resources.", col: "College of Fisheries", dur: "4 Years", car: "Fisheries Technologist" },
  { code: "D-AQUA", name: "Diploma in Aquaculture", desc: "2-year program on breeding and rearing aquatic animals.", col: "College of Fisheries", dur: "2 Years", car: "Aquaculture Technician" },

  // Forestry
  { code: "BS-FOR", name: "BS Forestry", desc: "Management and conservation of forest resources.", col: "College of Forestry and Environmental Studies", dur: "4 Years", car: "Forester" },
  { code: "BS-ES", name: "BS Environmental Science", desc: "Study of environmental problems and solutions.", col: "College of Forestry and Environmental Studies", dur: "4 Years", car: "Environmental Scientist" },

  // Health Sciences
  { code: "BSN", name: "BS Nursing", desc: "Prepares students for nursing practice and healthcare.", col: "College of Health Sciences", dur: "4 Years", car: "Registered Nurse" },

  // Hospitality
  { code: "BSHM", name: "BS Hospitality Management", desc: "Management of hotels, restaurants, and resorts.", col: "College of Hospitality and Tourism Management", dur: "4 Years", car: "Hotel Manager" },
  { code: "BSTM", name: "BS Tourism Management", desc: "Management of tourism operations and planning.", col: "College of Hospitality and Tourism Management", dur: "4 Years", car: "Tourism Officer" },

  // CICS
  { code: "BSCS", name: "BS Computer Science", desc: "Study of algorithms, data structures, and software engineering.", col: "College of Information and Computing Sciences", dur: "4 Years", car: "Software Engineer" },
  { code: "BSIT", name: "BS Information Technology", desc: "Focuses on network administration, web development, and IT systems.", col: "College of Information and Computing Sciences", dur: "4 Years", car: "IT Specialist" },
  { code: "BSIS", name: "BS Information Systems", desc: "Integration of IT solutions with business processes.", col: "College of Information and Computing Sciences", dur: "4 Years", car: "Systems Analyst" },

  // Law
  { code: "JD", name: "Juris Doctor (Law)", desc: "Post-graduate professional degree in law.", col: "College of Law", dur: "4 Years", car: "Lawyer, Judge" },

  // Medicine
  { code: "MD", name: "Doctor of Medicine", desc: "Post-graduate professional degree in medicine.", col: "College of Medicine", dur: "4 Years", car: "Physician, Surgeon" },

  // CNSM
  { code: "BS-BIO", name: "BS Biology", desc: "Study of living organisms and their vital processes.", col: "College of Natural Sciences and Mathematics", dur: "4 Years", car: "Biologist, Pre-Med" },
  { code: "BS-CHEM", name: "BS Chemistry", desc: "Study of matter, its properties, and reactions.", col: "College of Natural Sciences and Mathematics", dur: "4 Years", car: "Chemist" },
  { code: "BS-MATH", name: "BS Mathematics", desc: "Study of numbers, quantities, and shapes.", col: "College of Natural Sciences and Mathematics", dur: "4 Years", car: "Mathematician, Data Analyst" },
  { code: "BS-PHYS", name: "BS Physics", desc: "Study of matter and energy.", col: "College of Natural Sciences and Mathematics", dur: "4 Years", car: "Physicist" },
  { code: "MS-BIO", name: "Master of Science in Biology", desc: "Post-graduate research in biological sciences.", col: "College of Natural Sciences and Mathematics", dur: "2 Years", car: "Researcher" },

  // Public Affairs
  { code: "BSSW", name: "BS Social Work", desc: "Prepares students for professional social work practice.", col: "College of Public Affairs", dur: "4 Years", car: "Social Worker" },
  { code: "BPA", name: "Bachelor of Public Administration", desc: "Study of government and public policy.", col: "College of Public Affairs", dur: "4 Years", car: "Public Administrator" },
  { code: "MPA", name: "Master of Public Administration", desc: "Post-graduate degree in public management.", col: "College of Public Affairs", dur: "2 Years", car: "Government Official" },
  { code: "DPA", name: "Doctor of Public Administration", desc: "Doctoral degree in public policy and governance.", col: "College of Public Affairs", dur: "3-4 Years", car: "Policy Analyst, Academic" },

  // CSSH
  { code: "BA-PSYCH", name: "BA Psychology", desc: "Study of human behavior and mental processes.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Psychometrician, HR" },
  { code: "BA-POLSCI", name: "BA Political Science", desc: "Study of political systems and behavior.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Political Analyst, Pre-Law" },
  { code: "BA-SOCIO", name: "BA Sociology", desc: "Study of society and human social behavior.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Sociologist" },
  { code: "BA-HIST", name: "BA History", desc: "Study of past events and their impacts.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Historian, Researcher" },
  { code: "BA-ELS", name: "BA English Language Studies", desc: "Advanced study of the English language and linguistics.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Linguist, Writer" },
  { code: "BA-COMM", name: "BA Communication", desc: "Study of media, broadcasting, and communication arts.", col: "College of Social Sciences and Humanities", dur: "4 Years", car: "Media Practitioner" },

  // Sports
  { code: "BPED", name: "Bachelor of Physical Education", desc: "Prepares physical education teachers and sports leaders.", col: "College of Sports, Physical Education and Recreation", dur: "4 Years", car: "PE Teacher" },

  // King Faisal
  { code: "BA-IS", name: "BA Islamic Studies", desc: "Study of Islamic history, theology, and law.", col: "King Faisal Center for Islamic, Arabic and Asian Studies", dur: "4 Years", car: "Islamic Scholar" },
  { code: "BA-ARABIC", name: "BA Arabic Language", desc: "Advanced study of the Arabic language.", col: "King Faisal Center for Islamic, Arabic and Asian Studies", dur: "4 Years", car: "Translator, Educator" },
  { code: "BA-IR", name: "BA International Relations", desc: "Study of global politics and diplomacy.", col: "King Faisal Center for Islamic, Arabic and Asian Studies", dur: "4 Years", car: "Diplomat, Analyst" },
  { code: "MA-IS", name: "Master of Arts in Islamic Studies", desc: "Post-graduate degree in Islamic studies.", col: "King Faisal Center for Islamic, Arabic and Asian Studies", dur: "2 Years", car: "Professor, Researcher" }
];

const mappedCourses = rawData.map((c, idx) => ({
  id: `c_${idx}`,
  code: c.code,
  name: c.name,
  description: c.desc,
  college: c.col,
  duration: c.dur,
  careers: c.car,
  colorScheme: getNextColor(),
  pdfFileName: `msu-${c.code.toLowerCase()}-prospectus.pdf`
}));

const fileContent = `export type ColorScheme = 'maroon' | 'blue' | 'orange' | 'purple' | 'yellow' | 'green' | 'pink';

export type Course = {
  id: string;
  code: string;
  name: string;
  description: string;
  college: string;
  duration: string;
  careers: string;
  colorScheme: ColorScheme;
  pdfFileName: string;
};

export const colleges = ${JSON.stringify(colleges, null, 2)};

export const coursesData: Course[] = ${JSON.stringify(mappedCourses, null, 2)};
`;

fs.writeFileSync('lib/data.ts', fileContent, 'utf-8');
console.log('Successfully generated lib/data.ts with exhaustive MSU Main Campus courses.');
