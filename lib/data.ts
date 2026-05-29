export type ColorScheme = 'maroon' | 'blue' | 'orange' | 'purple' | 'yellow' | 'green' | 'pink';

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

export const colleges = [
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
  "King Faisal Center for Islamic, Arabic and Asian Studies"
];

export const coursesData: Course[] = [
  {
    "id": "c_0",
    "code": "BSA-AGRO",
    "name": "BS Agriculture Major in Agronomy",
    "description": "Focuses on crop production and soil management.",
    "college": "College of Agriculture",
    "duration": "4 Years",
    "careers": "Agronomist, Crop Scientist",
    "colorScheme": "maroon",
    "pdfFileName": "msu-bsa-agro-prospectus.pdf"
  },
  {
    "id": "c_1",
    "code": "BSA-AS",
    "name": "BS Agriculture Major in Animal Science",
    "description": "Focuses on livestock production and management.",
    "college": "College of Agriculture",
    "duration": "4 Years",
    "careers": "Animal Scientist, Farm Manager",
    "colorScheme": "blue",
    "pdfFileName": "msu-bsa-as-prospectus.pdf"
  },
  // {
  //   "id": "c_2",
  //   "code": "BSA-ENTOM",
  //   "name": "BS Agriculture Major in Entomology",
  //   "description": "Study of insects and their relationship to humans, the environment, and other organisms.",
  //   "college": "College of Agriculture",
  //   "duration": "4 Years",
  //   "careers": "Entomologist, Pest Control Specialist",
  //   "colorScheme": "orange",
  //   "pdfFileName": "msu-bsa-entom-prospectus.pdf"
  // },
  // {
  //   "id": "c_3",
  //   "code": "BSA-PP",
  //   "name": "BS Agriculture Major in Plant Pathology",
  //   "description": "Study of plant diseases and their management.",
  //   "college": "College of Agriculture",
  //   "duration": "4 Years",
  //   "careers": "Plant Pathologist",
  //   "colorScheme": "purple",
  //   "pdfFileName": "msu-bsa-pp-prospectus.pdf"
  // },
  {
    "id": "c_4",
    "code": "BS-ABM",
    "name": "BS Agribusiness Management",
    "description": "Integration of business principles with agriculture.",
    "college": "College of Agriculture",
    "duration": "4 Years",
    "careers": "Agribusiness Manager",
    "colorScheme": "yellow",
    "pdfFileName": "COA/msu-bs-abm-prospectus.pdf"
  },
  // {
  //   "id": "c_5",
  //   "code": "DAT",
  //   "name": "Diploma in Agricultural Technology",
  //   "description": "2-year program focusing on hands-on agricultural skills.",
  //   "college": "College of Agriculture",
  //   "duration": "2 Years",
  //   "careers": "Agricultural Technician",
  //   "colorScheme": "green",
  //   "pdfFileName": "msu-dat-prospectus.pdf"
  // },
  // {
  //   "id": "c_6",
  //   "code": "MS-AGRI",
  //   "name": "Master of Science in Agriculture",
  //   "description": "Post-graduate research in agricultural sciences.",
  //   "college": "College of Agriculture",
  //   "duration": "2 Years",
  //   "careers": "Researcher, Academe",
  //   "colorScheme": "pink",
  //   "pdfFileName": "msu-ms-agri-prospectus.pdf"
  // },
  {
    "id": "c_7",
    "code": "BSA",
    "name": "BS Accountancy",
    "description": "Prepares students for the CPA licensure exam and a career in accounting.",
    "college": "College of Business Administration and Accountancy",
    "duration": "4 Years",
    "careers": "CPA, Auditor",
    "colorScheme": "maroon",
    "pdfFileName": "msu-bsa-prospectus.pdf"
  },
  {
    "id": "c_8",
    "code": "BSBA-MKT",
    "name": "BSBA Major in Marketing Management",
    "description": "Focuses on market research, consumer behavior, and sales.",
    "college": "College of Business Administration and Accountancy",
    "duration": "4 Years",
    "careers": "Marketing Manager",
    "colorScheme": "blue",
    "pdfFileName": "msu-bsba-mkt-prospectus.pdf"
  },
  {
    "id": "c_9",
    "code": "BSBA-ECON",
    "name": "BSBA Major in Business Economics",
    "description": "Applies economic theories to business decision-making.",
    "college": "College of Business Administration and Accountancy",
    "duration": "4 Years",
    "careers": "Economic Analyst",
    "colorScheme": "orange",
    "pdfFileName": "msu-bsba-econ-prospectus.pdf"
  },
  {
    "id": "c_10",
    "code": "BSBA-HR",
    "name": "BSBA Major in Human Resource Management",
    "description": "Focuses on talent acquisition and organizational behavior.",
    "college": "College of Business Administration and Accountancy",
    "duration": "4 Years",
    "careers": "HR Manager",
    "colorScheme": "purple",
    "pdfFileName": "msu-bsba-hr-prospectus.pdf"
  },
  {
    "id": "c_11",
    "code": "MBA",
    "name": "Master in Business Administration",
    "description": "Post-graduate program for business leaders.",
    "college": "College of Business Administration and Accountancy",
    "duration": "2 Years",
    "careers": "Executive, Entrepreneur",
    "colorScheme": "yellow",
    "pdfFileName": "msu-mba-prospectus.pdf"
  },
  {
    "id": "c_12",
    "code": "BEED",
    "name": "Bachelor of Elementary Education",
    "description": "Prepares students to teach in elementary schools.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "Elementary Teacher",
    "colorScheme": "green",
    "pdfFileName": "msu-beed-prospectus.pdf"
  },
  {
    "id": "c_13",
    "code": "BSED-ENG",
    "name": "BSEd Major in English",
    "description": "Prepares secondary education English teachers.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "High School English Teacher",
    "colorScheme": "pink",
    "pdfFileName": "msu-bsed-eng-prospectus.pdf"
  },
  {
    "id": "c_14",
    "code": "BSED-MATH",
    "name": "BSEd Major in Mathematics",
    "description": "Prepares secondary education Mathematics teachers.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "Math Teacher",
    "colorScheme": "maroon",
    "pdfFileName": "msu-bsed-math-prospectus.pdf"
  },
  {
    "id": "c_15",
    "code": "BSED-SCI",
    "name": "BSEd Major in Science",
    "description": "Prepares secondary education Science teachers.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "Science Teacher",
    "colorScheme": "blue",
    "pdfFileName": "msu-bsed-sci-prospectus.pdf"
  },
  {
    "id": "c_16",
    "code": "BSED-FIL",
    "name": "BSEd Major in Filipino",
    "description": "Prepares secondary education Filipino teachers.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "Filipino Teacher",
    "colorScheme": "orange",
    "pdfFileName": "msu-bsed-fil-prospectus.pdf"
  },
  {
    "id": "c_17",
    "code": "BSED-SOC",
    "name": "BSEd Major in Social Studies",
    "description": "Prepares secondary education Social Studies teachers.",
    "college": "College of Education",
    "duration": "4 Years",
    "careers": "Social Studies Teacher",
    "colorScheme": "purple",
    "pdfFileName": "msu-bsed-soc-prospectus.pdf"
  },
  {
    "id": "c_18",
    "code": "MAED",
    "name": "Master of Arts in Education",
    "description": "Post-graduate program for educational leadership.",
    "college": "College of Education",
    "duration": "2 Years",
    "careers": "School Administrator",
    "colorScheme": "yellow",
    "pdfFileName": "msu-maed-prospectus.pdf"
  },
  {
    "id": "c_19",
    "code": "PHD-ED",
    "name": "PhD in Educational Management",
    "description": "Doctoral program for high-level educational management.",
    "college": "College of Education",
    "duration": "3-4 Years",
    "careers": "Superintendent, Professor",
    "colorScheme": "green",
    "pdfFileName": "msu-phd-ed-prospectus.pdf"
  },
  {
    "id": "c_20",
    "code": "BSCE",
    "name": "BS Civil Engineering",
    "description": "Design and construction of infrastructure.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Civil Engineer",
    "colorScheme": "pink",
    "pdfFileName": "COE/msu-bsce-prospectus.pdf"
  },
  {
    "id": "c_21",
    "code": "BSME",
    "name": "BS Mechanical Engineering",
    "description": "Design and manufacturing of mechanical systems.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Mechanical Engineer",
    "colorScheme": "maroon",
    "pdfFileName": "msu-bsme-prospectus.pdf"
  },
  {
    "id": "c_22",
    "code": "BSEE",
    "name": "BS Electrical Engineering",
    "description": "Study of electrical systems and power.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Electrical Engineer",
    "colorScheme": "blue",
    "pdfFileName": "msu-bsee-prospectus.pdf"
  },
  {
    "id": "c_23",
    "code": "BSECE",
    "name": "BS Electronics Engineering",
    "description": "Design of electronic circuits and communication systems.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Electronics Engineer",
    "colorScheme": "orange",
    "pdfFileName": "msu-bsece-prospectus.pdf"
  },
  {
    "id": "c_24",
    "code": "BSCHE",
    "name": "BS Chemical Engineering",
    "description": "Application of chemistry to industrial processes.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Chemical Engineer",
    "colorScheme": "purple",
    "pdfFileName": "msu-bsche-prospectus.pdf"
  },
  {
    "id": "c_25",
    "code": "BSAE",
    "name": "BS Agricultural and Biosystems Engineering",
    "description": "Engineering applied to agriculture and biology.",
    "college": "College of Engineering",
    "duration": "4 Years",
    "careers": "Agricultural Engineer",
    "colorScheme": "yellow",
    "pdfFileName": "msu-bsae-prospectus.pdf"
  },
  {
    "id": "c_26",
    "code": "DCT",
    "name": "Diploma in Construction Technology",
    "description": "2-year program for construction skills.",
    "college": "College of Engineering",
    "duration": "2 Years",
    "careers": "Construction Supervisor",
    "colorScheme": "green",
    "pdfFileName": "msu-dct-prospectus.pdf"
  },
  {
    "id": "c_27",
    "code": "DET",
    "name": "Diploma in Electrical Technology",
    "description": "2-year program for electrical installation.",
    "college": "College of Engineering",
    "duration": "2 Years",
    "careers": "Electrician, Technician",
    "colorScheme": "pink",
    "pdfFileName": "msu-det-prospectus.pdf"
  },
  {
    "id": "c_28",
    "code": "MS-ENG",
    "name": "Master of Science in Engineering",
    "description": "Post-graduate engineering research.",
    "college": "College of Engineering",
    "duration": "2 Years",
    "careers": "Senior Engineer, Researcher",
    "colorScheme": "maroon",
    "pdfFileName": "msu-ms-eng-prospectus.pdf"
  },
  {
    "id": "c_29",
    "code": "BSF",
    "name": "BS Fisheries",
    "description": "Study of aquaculture, capture fisheries, and aquatic resources.",
    "college": "College of Fisheries",
    "duration": "4 Years",
    "careers": "Fisheries Technologist",
    "colorScheme": "blue",
    "pdfFileName": "msu-bsf-prospectus.pdf"
  },
  {
    "id": "c_30",
    "code": "D-AQUA",
    "name": "Diploma in Aquaculture",
    "description": "2-year program on breeding and rearing aquatic animals.",
    "college": "College of Fisheries",
    "duration": "2 Years",
    "careers": "Aquaculture Technician",
    "colorScheme": "orange",
    "pdfFileName": "msu-d-aqua-prospectus.pdf"
  },
  {
    "id": "c_31",
    "code": "BS-FOR",
    "name": "BS Forestry",
    "description": "Management and conservation of forest resources.",
    "college": "College of Forestry and Environmental Studies",
    "duration": "4 Years",
    "careers": "Forester",
    "colorScheme": "purple",
    "pdfFileName": "msu-bs-for-prospectus.pdf"
  },
  {
    "id": "c_32",
    "code": "BS-ES",
    "name": "BS Environmental Science",
    "description": "Study of environmental problems and solutions.",
    "college": "College of Forestry and Environmental Studies",
    "duration": "4 Years",
    "careers": "Environmental Scientist",
    "colorScheme": "yellow",
    "pdfFileName": "msu-bs-es-prospectus.pdf"
  },
  {
    "id": "c_33",
    "code": "BSN",
    "name": "BS Nursing",
    "description": "Prepares students for nursing practice and healthcare.",
    "college": "College of Health Sciences",
    "duration": "4 Years",
    "careers": "Registered Nurse",
    "colorScheme": "green",
    "pdfFileName": "msu-bsn-prospectus.pdf"
  },
  {
    "id": "c_34",
    "code": "BSHM",
    "name": "BS Hospitality Management",
    "description": "Management of hotels, restaurants, and resorts.",
    "college": "College of Hospitality and Tourism Management",
    "duration": "4 Years",
    "careers": "Hotel Manager",
    "colorScheme": "pink",
    "pdfFileName": "msu-bshm-prospectus.pdf"
  },
  {
    "id": "c_35",
    "code": "BSTM",
    "name": "BS Tourism Management",
    "description": "Management of tourism operations and planning.",
    "college": "College of Hospitality and Tourism Management",
    "duration": "4 Years",
    "careers": "Tourism Officer",
    "colorScheme": "maroon",
    "pdfFileName": "msu-bstm-prospectus.pdf"
  },
  {
    "id": "c_36",
    "code": "D-CUL",
    "name": "Diploma in Culinary Arts",
    "description": "2-year program in professional cooking.",
    "college": "College of Hospitality and Tourism Management",
    "duration": "2 Years",
    "careers": "Chef",
    "colorScheme": "blue",
    "pdfFileName": "msu-d-cul-prospectus.pdf"
  },
  {
    "id": "c_37",
    "code": "BSCS",
    "name": "BS Computer Science",
    "description": "Study of algorithms, data structures, and software engineering.",
    "college": "College of Information and Computing Sciences",
    "duration": "4 Years",
    "careers": "Software Engineer",
    "colorScheme": "orange",
    "pdfFileName": "CICS/msu-bscs-prospectus.pdf"
  },
  {
    "id": "c_38",
    "code": "BSIT-DB",
    "name": "BS Information Technology Major in Database",
    "description": "Focuses on database management, data systems, and backend technologies.",
    "college": "College of Information and Computing Sciences",
    "duration": "4 Years",
    "careers": "Database Administrator",
    "colorScheme": "purple",
    "pdfFileName": "CICS/msu-bsit-database-prospectus.pdf"
  },
  {
    "id": "c_39",
    "code": "BSIT-NET",
    "name": "BS Information Technology Major in Networking",
    "description": "Focuses on computer networks, cybersecurity, and network infrastructure.",
    "college": "College of Information and Computing Sciences",
    "duration": "4 Years",
    "careers": "Network Administrator",
    "colorScheme": "blue",
    "pdfFileName": "CICS/msu-bsit-networking-prospectus.pdf"
  },
  {
    "id": "c_40",
    "code": "BSIS",
    "name": "BS Information Systems",
    "description": "Integration of IT solutions with business processes.",
    "college": "College of Information and Computing Sciences",
    "duration": "4 Years",
    "careers": "Systems Analyst",
    "colorScheme": "yellow",
    "pdfFileName": "CICS/msu-bsis-prospectus.jpg"
  },
  {
    "id": "c_41",
    "code": "JD",
    "name": "Juris Doctor (Law)",
    "description": "Post-graduate professional degree in law.",
    "college": "College of Law",
    "duration": "4 Years",
    "careers": "Lawyer, Judge",
    "colorScheme": "pink",
    "pdfFileName": "msu-jd-prospectus.pdf"
  },
  {
    "id": "c_42",
    "code": "MD",
    "name": "Doctor of Medicine",
    "description": "Post-graduate professional degree in medicine.",
    "college": "College of Medicine",
    "duration": "4 Years",
    "careers": "Physician, Surgeon",
    "colorScheme": "maroon",
    "pdfFileName": "msu-md-prospectus.pdf"
  },
  {
    "id": "c_43",
    "code": "BS-BIO",
    "name": "BS Biology",
    "description": "Study of living organisms and their vital processes.",
    "college": "College of Natural Sciences and Mathematics",
    "duration": "4 Years",
    "careers": "Biologist, Pre-Med",
    "colorScheme": "blue",
    "pdfFileName": "CNSM/msu-bs-bio-prospectus.pdf"
  },
  {
    "id": "c_44",
    "code": "BS-CHEM",
    "name": "BS Chemistry",
    "description": "Study of matter, its properties, and reactions.",
    "college": "College of Natural Sciences and Mathematics",
    "duration": "4 Years",
    "careers": "Chemist",
    "colorScheme": "orange",
    "pdfFileName": "msu-bs-chem-prospectus.pdf"
  },
  {
    "id": "c_45",
    "code": "BS-MATH",
    "name": "BS Mathematics",
    "description": "Study of numbers, quantities, and shapes.",
    "college": "College of Natural Sciences and Mathematics",
    "duration": "4 Years",
    "careers": "Mathematician, Data Analyst",
    "colorScheme": "purple",
    "pdfFileName": "msu-bs-math-prospectus.pdf"
  },
  {
    "id": "c_46",
    "code": "BS-PHYS",
    "name": "BS Physics",
    "description": "Study of matter and energy.",
    "college": "College of Natural Sciences and Mathematics",
    "duration": "4 Years",
    "careers": "Physicist",
    "colorScheme": "yellow",
    "pdfFileName": "msu-bs-phys-prospectus.pdf"
  },
  {
    "id": "c_47",
    "code": "MS-BIO",
    "name": "Master of Science in Biology",
    "description": "Post-graduate research in biological sciences.",
    "college": "College of Natural Sciences and Mathematics",
    "duration": "2 Years",
    "careers": "Researcher",
    "colorScheme": "green",
    "pdfFileName": "msu-ms-bio-prospectus.pdf"
  },
  {
    "id": "c_48",
    "code": "BSSW",
    "name": "BS Social Work",
    "description": "Prepares students for professional social work practice.",
    "college": "College of Public Affairs",
    "duration": "4 Years",
    "careers": "Social Worker",
    "colorScheme": "pink",
    "pdfFileName": "msu-bssw-prospectus.pdf"
  },
  {
    "id": "c_49",
    "code": "BPA",
    "name": "Bachelor of Public Administration",
    "description": "Study of government and public policy.",
    "college": "College of Public Affairs",
    "duration": "4 Years",
    "careers": "Public Administrator",
    "colorScheme": "maroon",
    "pdfFileName": "CPA/msu-bpa-prospectus.pdf"
  },
  {
    "id": "c_50",
    "code": "MPA",
    "name": "Master of Public Administration",
    "description": "Post-graduate degree in public management.",
    "college": "College of Public Affairs",
    "duration": "2 Years",
    "careers": "Government Official",
    "colorScheme": "blue",
    "pdfFileName": "msu-mpa-prospectus.pdf"
  },
  {
    "id": "c_51",
    "code": "DPA",
    "name": "Doctor of Public Administration",
    "description": "Doctoral degree in public policy and governance.",
    "college": "College of Public Affairs",
    "duration": "3-4 Years",
    "careers": "Policy Analyst, Academic",
    "colorScheme": "orange",
    "pdfFileName": "msu-dpa-prospectus.pdf"
  },
  {
    "id": "c_52",
    "code": "BA-PSYCH",
    "name": "BA Psychology",
    "description": "Study of human behavior and mental processes.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Psychometrician, HR",
    "colorScheme": "purple",
    "pdfFileName": "msu-ba-psych-prospectus.pdf"
  },
  {
    "id": "c_53",
    "code": "BA-POLSCI",
    "name": "BA Political Science",
    "description": "Study of political systems and behavior.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Political Analyst, Pre-Law",
    "colorScheme": "yellow",
    "pdfFileName": "CSSH/msu-ba-polsci-prospectus.pdf"
  },
  {
    "id": "c_54",
    "code": "BA-SOCIO",
    "name": "BA Sociology",
    "description": "Study of society and human social behavior.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Sociologist",
    "colorScheme": "green",
    "pdfFileName": "msu-ba-socio-prospectus.pdf"
  },
  {
    "id": "c_55",
    "code": "BA-HIST",
    "name": "BA History",
    "description": "Study of past events and their impacts.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Historian, Researcher",
    "colorScheme": "pink",
    "pdfFileName": "msu-ba-hist-prospectus.pdf"
  },
  {
    "id": "c_56",
    "code": "BA-ELS",
    "name": "BA English Language Studies",
    "description": "Advanced study of the English language and linguistics.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Linguist, Writer",
    "colorScheme": "maroon",
    "pdfFileName": "msu-ba-els-prospectus.pdf"
  },
  {
    "id": "c_57",
    "code": "BA-COMM",
    "name": "BA Communication",
    "description": "Study of media, broadcasting, and communication arts.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Media Practitioner",
    "colorScheme": "blue",
    "pdfFileName": "msu-ba-comm-prospectus.pdf"
  },
  {
    "id": "CSSH-1",
    "code": "BA-PHILO",
    "name": "BA Philosophy",
    "description": "Study of fundamental questions about existence, knowledge, ethics, and reasoning.",
    "college": "College of Social Sciences and Humanities",
    "duration": "4 Years",
    "careers": "Professor, Researcher, Pre-Law",
    "colorScheme": "green",
    "pdfFileName": "CSSH/msu-ba-philosophy-prospectus.pdf"
  },
  {
    "id": "c_58",
    "code": "BPED",
    "name": "Bachelor of Physical Education",
    "description": "Prepares physical education teachers and sports leaders.",
    "college": "College of Sports, Physical Education and Recreation",
    "duration": "4 Years",
    "careers": "PE Teacher",
    "colorScheme": "orange",
    "pdfFileName": "msu-bped-prospectus.pdf"
  },
  {
    "id": "c_59",
    "code": "D-SC",
    "name": "Diploma in Sports Coaching",
    "description": "2-year program for athletic coaching.",
    "college": "College of Sports, Physical Education and Recreation",
    "duration": "2 Years",
    "careers": "Sports Coach",
    "colorScheme": "purple",
    "pdfFileName": "msu-d-sc-prospectus.pdf"
  },
  {
    "id": "c_60",
    "code": "BA-IS",
    "name": "BA Islamic Studies",
    "description": "Study of Islamic history, theology, and law.",
    "college": "King Faisal Center for Islamic, Arabic and Asian Studies",
    "duration": "4 Years",
    "careers": "Islamic Scholar",
    "colorScheme": "yellow",
    "pdfFileName": "KFCIAAS/msu-ba-is-prospectus.pdf"
  },
  {
    "id": "c_61",
    "code": "BA-ARABIC",
    "name": "BA Arabic Language",
    "description": "Advanced study of the Arabic language.",
    "college": "King Faisal Center for Islamic, Arabic and Asian Studies",
    "duration": "4 Years",
    "careers": "Translator, Educator",
    "colorScheme": "green",
    "pdfFileName": "msu-ba-arabic-prospectus.pdf"
  },
  {
    "id": "c_62",
    "code": "BA-IR",
    "name": "BA International Relations",
    "description": "Study of global politics and diplomacy.",
    "college": "King Faisal Center for Islamic, Arabic and Asian Studies",
    "duration": "4 Years",
    "careers": "Diplomat, Analyst",
    "colorScheme": "pink",
    "pdfFileName": "msu-ba-ir-prospectus.pdf"
  },
  {
    "id": "c_63",
    "code": "MA-IS",
    "name": "Master of Arts in Islamic Studies",
    "description": "Post-graduate degree in Islamic studies.",
    "college": "King Faisal Center for Islamic, Arabic and Asian Studies",
    "duration": "2 Years",
    "careers": "Professor, Researcher",
    "colorScheme": "maroon",
    "pdfFileName": "msu-ma-is-prospectus.pdf"
  }
];
