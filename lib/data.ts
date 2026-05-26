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
  "King Faisal Center for Islamic, Arabic and Asian Studies",
];

export const coursesData: Course[] = [
  {
    id: "agri-1",
    code: "BSA-AS",
    name: "BSA - Animal Science",
    description: "Focuses on the science and business of producing domestic livestock species, including beef cattle, dairy cattle, horses, poultry, sheep, and swine.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Farm Manager, Animal Breeder, Livestock Consultant",
    colorScheme: "green",
    pdfFileName: "bsa-as-prospectus.pdf"
  },
  {
    id: "agri-2",
    code: "BSA-EE",
    name: "BSA - Extension Education",
    description: "Prepares students to become effective communicators and educators in agricultural practices to bridge the gap between research and farming communities.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Agricultural Extensionist, Community Development Worker",
    colorScheme: "orange",
    pdfFileName: "bsa-ee-prospectus.pdf"
  },
  {
    id: "agri-3",
    code: "BSA-AE",
    name: "BSA - Agricultural Extension",
    description: "Focuses on methods and theories extending practical agricultural knowledge and technologies to farmers and related industries.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Agricultural Extensionist, Trainer, Consultant",
    colorScheme: "yellow",
    pdfFileName: "bsa-ae-prospectus.pdf"
  },
  {
    id: "agri-4",
    code: "BS-AM",
    name: "BS - Agribusiness Management",
    description: "Integrates core business principles with agricultural practices, focusing on the economics and management of agricultural businesses.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Agribusiness Manager, Farm Administrator, Entrepreneur",
    colorScheme: "maroon",
    pdfFileName: "bs-am-prospectus.pdf"
  },
  {
    id: "agri-5",
    code: "BSA-AFP",
    name: "BSA - Agricultural Food Processing",
    description: "Provides comprehensive knowledge on technologies and processes involved in converting agricultural produce into consumable food products.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Food Process Engineer, Quality Assurance Specialist",
    colorScheme: "blue",
    pdfFileName: "bsa-afp-prospectus.pdf"
  },
  {
    id: "agri-6",
    code: "DABMT-FPT",
    name: "DABMT - Food Processing Technology",
    description: "A 2-year short course focusing on practical skills and basic technologies for food processing and preservation.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Food Processing Technician, Production Line Supervisor",
    colorScheme: "pink",
    pdfFileName: "dabmt-fpt-prospectus.pdf"
  },
  {
    id: "agri-7",
    code: "BSA-AGRO",
    name: "BSA - Agronomy",
    description: "Focuses on the science and technology of producing and using plants for food, fuel, fiber, and land reclamation.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Agronomist, Crop Scientist, Plant Breeder",
    colorScheme: "green",
    pdfFileName: "bsa-agro-prospectus.pdf"
  },
  {
    id: "agri-8",
    code: "BSA-SS",
    name: "BSA - Soil Science",
    description: "The study of soil as a natural resource, including soil formation, classification, physical, chemical, biological, and fertility properties.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Soil Scientist, Conservationist, Environmental Consultant",
    colorScheme: "orange",
    pdfFileName: "bsa-ss-prospectus.pdf"
  },
  {
    id: "agri-9",
    code: "BSA-HORT",
    name: "BSA - Horticulture",
    description: "Deals with the art, science, technology, and business of growing intensively cultivated plants for human use, including fruits, vegetables, and ornamental plants.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Horticulturist, Landscape Designer, Precision Agriculturist",
    colorScheme: "purple",
    pdfFileName: "bsa-hort-prospectus.pdf"
  },
  {
    id: "agri-10",
    code: "BSA-FS",
    name: "BSA - Farming Systems",
    description: "Focuses on the holistic and integrated approach to agricultural production and resource management, emphasizing sustainable practices.",
    college: "College of Agriculture",
    duration: "4 Years",
    careers: "Farming System Specialist, Sustainable Agriculture Consultant",
    colorScheme: "blue",
    pdfFileName: "bsa-fs-prospectus.pdf"
  },
  {
    id: "agri-11",
    code: "DAT-CPT",
    name: "DAT - Crop Production Technology",
    description: "A 2-year program designed to provide practical training and fundamental knowledge in crop production and technology application.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Crop Technician, Farm Supervisor, Agricultural Technician",
    colorScheme: "yellow",
    pdfFileName: "dat-cpt-prospectus.pdf"
  },
  {
    id: "agri-12",
    code: "MS-AS",
    name: "Master of Science in Animal Science",
    description: "Advanced program for specialization in animal breeding, nutrition, physiology, and production management systems.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Animal Research Scientist, Livestock Specialist, Academe",
    colorScheme: "maroon",
    pdfFileName: "ms-as-prospectus.pdf"
  },
  {
    id: "agri-13",
    code: "MS-FS",
    name: "Master of Science in Farming Systems",
    description: "An advanced degree focusing on research, development, and application of complex farming systems and sustainable agriculture.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Farming Systems Researcher, Agricultural Policy Analyst",
    colorScheme: "green",
    pdfFileName: "ms-fs-prospectus.pdf"
  },
  {
    id: "agri-14",
    code: "MS-AM",
    name: "Master of Science in Agribusiness Management",
    description: "Research-driven graduate program focusing on advanced agribusiness management, economics, and empirical analysis.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Agribusiness Researcher, Consultant, Academe",
    colorScheme: "orange",
    pdfFileName: "ms-am-prospectus.pdf"
  },
  {
    id: "agri-15",
    code: "M-AM",
    name: "Master in Agribusiness Management",
    description: "A professional graduate degree emphasizing practical applications of advanced management and leadership in agricultural enterprises.",
    college: "College of Agriculture",
    duration: "2 Years",
    careers: "Agribusiness Executive, Strategic Planner, Consultant",
    colorScheme: "blue",
    pdfFileName: "m-am-prospectus.pdf"
  },
  {
    id: "CICS",
    code: "BSCS",
    name: "BS Computer Science",
    description: "Focuses on the study of concepts and theories, algorithmic foundations, implementation and application of information and computing solutions.",
    college: "College of Information and Computing Sciences",
    duration: "4 Years",
    careers: "Software Engineer, Data Scientist, AI Researcher",
    colorScheme: "maroon",
    pdfFileName: "./../CICS/BS-ComputerScience.pdf"
  },
  {
    id: "CICS2",
    code: "BSIT",
    name: "BS Information Technology major in Database",
    description: "Focuses on the utilization of computers and computer software to plan, install, customize, operate, manage, administer and maintain information technology infrastructure with specialization in Database systems.",
    college: "College of Information and Computing Sciences",
    duration: "4 Years",
    careers: "Database Administrator, Data Analyst, Software Developer",
    colorScheme: "orange",
    pdfFileName: "./../CICS/BS-IT-Database.pdf"
  },
  {
    id: "CICS3",
    code: "BSIT",
    name: "BS Information Technology major in Networking",
    description: "Focuses on computer networks, systems administration, cloud infrastructure and cybersecurity principles.",
    college: "College of Information and Computing Sciences",
    duration: "4 Years",
    careers: "Network Engineer, Systems Administrator, Cloud Architect",
    colorScheme: "blue",
    pdfFileName: "./../CICS/BS-IT-Networking.pdf"
  },
  {
    id: "CICS4",
    code: "BSIS",
    name: "BS Information Systems",
    description: "Integrates business management with information technology, focusing on the design, development, and implementation of business solutions.",
    college: "College of Information and Computing Sciences",
    duration: "4 Years",
    careers: "Systems Analyst, Business Analyst, IT Consultant",
    colorScheme: "yellow",
    pdfFileName: "./../CICS/BS-IS_part1.jpg"
  },
  {
    id: "3",
    code: "BSME",
    name: "Bachelor of Science in Mechanical Engineering",
    description: "A program that deals with the design, development, installation, operation and maintenance of machinery, engines, and thermodynamic principles.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Mechanical Engineer, Automotive Engineer, Plant Supervisor",
    colorScheme: "purple",
    pdfFileName: "bsme-prospectus.pdf"
  },
  {
    id: "eng-1",
    code: "BSAE",
    name: "Bachelor of Science in Agricultural Engineering",
    description: "Applies engineering principles to agricultural production and processing, focusing on soil conservation, machinery, and structures.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Agricultural Engineer, Irrigation Specialist, Machinery Designer",
    colorScheme: "green",
    pdfFileName: "bsae-prospectus.pdf"
  },
  {
    id: "eng-2",
    code: "BSChE",
    name: "Bachelor of Science in Chemical Engineering",
    description: "Focuses on the transformation of raw materials into useful products through chemical, physical, and biological processes.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Chemical Engineer, Process Engineer, Materials Scientist",
    colorScheme: "blue",
    pdfFileName: "bsche-prospectus.pdf"
  },
  {
    id: "eng-3",
    code: "BSEE",
    name: "Bachelor of Science in Electrical Engineering",
    description: "Deals with the study and application of electricity, electronics, and electromagnetism in various systems and devices.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Electrical Engineer, Power Systems Engineer, Control Systems Engineer",
    colorScheme: "yellow",
    pdfFileName: "bsee-prospectus.pdf"
  },
  {
    id: "eng-4",
    code: "BSECE",
    name: "Bachelor of Science in Electronics and Communications Engineering",
    description: "Focuses on the design, development, and testing of electronic equipment and communication systems.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Electronics Engineer, Telecommunications Engineer, Network Designer",
    colorScheme: "pink",
    pdfFileName: "bsece-prospectus.pdf"
  },
  {
    id: "cbaa-1",
    code: "BSA",
    name: "Bachelor of Science in Accountancy",
    description: "Prepares students for a career in accounting and finance, focusing on financial reporting, auditing, taxation, and management accounting.",
    college: "College of Business Administration and Accountancy",
    duration: "4 Years",
    careers: "Certified Public Accountant, Auditor, Financial Analyst",
    colorScheme: "maroon",
    pdfFileName: "bsa-prospectus.pdf"
  },
  {
    id: "cbaa-2",
    code: "BSBA-BE",
    name: "BS Business Administration major in Business Economics",
    description: "Integrates economic theories with business management, focusing on market analysis, forecasting, and strategic decision-making.",
    college: "College of Business Administration and Accountancy",
    duration: "4 Years",
    careers: "Economic Analyst, Business Consultant, Market Researcher",
    colorScheme: "yellow",
    pdfFileName: "bsba-be-prospectus.pdf"
  },
  {
    id: "cbaa-3",
    code: "BSBA-EM",
    name: "BS Business Administration major in Entrepreneurial Marketing",
    description: "Focuses on developing innovative marketing strategies, brand management, and entrepreneurial skills for business ventures.",
    college: "College of Business Administration and Accountancy",
    duration: "4 Years",
    careers: "Marketing Manager, Entrepreneur, Brand Strategist",
    colorScheme: "orange",
    pdfFileName: "bsba-em-prospectus.pdf"
  },
  {
    id: "cbaa-4",
    code: "BSBA-HRM",
    name: "BS Business Administration major in Human Resource Management",
    description: "Equips students with principles of human resource management, organizational behavior, talent acquisition, and compensation.",
    college: "College of Business Administration and Accountancy",
    duration: "4 Years",
    careers: "HR Manager, Recruitment Specialist, Training and Development Officer",
    colorScheme: "pink",
    pdfFileName: "bsba-hrm-prospectus.pdf"
  },
  {
    id: "5",
    code: "BA PSY",
    name: "BA Psychology",
    description: "Explores the scientific study of behavior and mental processes, preparing students for careers in counseling, research, and human resources.",
    college: "College of Social Sciences and Humanities",
    duration: "4 Years",
    careers: "Psychometrician, Guidance Counselor, HR Specialist",
    colorScheme: "green",
    pdfFileName: "bapsy-prospectus.pdf"
  },
  {
    id: "6",
    code: "BSN",
    name: "BS Nursing",
    description: "A comprehensive program designed to prepare students for a career in healthcare, focusing on patient care, medical procedures, and health education.",
    college: "College of Health Sciences",
    duration: "4 Years",
    careers: "Registered Nurse, Clinical Instructor, Nurse Practitioner",
    colorScheme: "pink",
    pdfFileName: "bsn-prospectus.pdf"
  },
  {
    id: "edu-1",
    code: "BSED-EN",
    name: "Bachelor of Secondary Education Major in English",
    description: "Prepares students to become effective secondary school english teachers with strong foundations in language and literature.",
    college: "College of Education",
    duration: "4 Years",
    careers: "English Teacher, Language Instructor, Educational Consultant",
    colorScheme: "blue",
    pdfFileName: "bsed-en-prospectus.pdf"
  },
  {
    id: "edu-2",
    code: "BSED-MATH",
    name: "Bachelor of Secondary Education Major in Mathematics",
    description: "Prepares prospective teachers with a strong foundational knowledge in mathematics and pedagogy for secondary education.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Math Teacher, Tutor, Educational Consultant",
    colorScheme: "maroon",
    pdfFileName: "bsed-math-prospectus.pdf"
  },
  {
    id: "edu-3",
    code: "BSED-SCI",
    name: "Bachelor of Secondary Education Major in Science",
    description: "Equips future educators with comprehensive knowledge in biological and physical sciences for effective science teaching.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Science Teacher, Laboratory Instructor, Science Communicator",
    colorScheme: "green",
    pdfFileName: "bsed-sci-prospectus.pdf"
  },
  {
    id: "edu-4",
    code: "BSED-FL",
    name: "Bachelor of Secondary Education Major in Filipino",
    description: "Prepares students to teach Filipino, focusing on national language, Philippine literature, and culture.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Filipino Teacher, Language Researcher, Writer",
    colorScheme: "yellow",
    pdfFileName: "bsed-fl-prospectus.pdf"
  },
  {
    id: "edu-5",
    code: "BSED-SS",
    name: "Bachelor of Secondary Education Major in Social Studies",
    description: "Provides foundational knowledge in history, geography, economics, and politics to prepare effective social studies educators.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Social Studies Teacher, Community Educator, Researcher",
    colorScheme: "orange",
    pdfFileName: "bsed-ss-prospectus.pdf"
  },
  {
    id: "edu-6",
    code: "BEED",
    name: "Bachelor of Elementary Education",
    description: "Prepares students to become elementary school teachers equipped with multidisciplinary pedagogical skills.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Elementary Teacher, Tutor, Educational Content Developer",
    colorScheme: "pink",
    pdfFileName: "beed-prospectus.pdf"
  },
  {
    id: "edu-7",
    code: "BECED",
    name: "Bachelor of Early Childhood Education",
    description: "Focuses on the fundamentals of child development and developmentally appropriate pedagogy for young children.",
    college: "College of Education",
    duration: "4 Years",
    careers: "Preschool Teacher, Child Care Center Director, Early Childhood Specialist",
    colorScheme: "purple",
    pdfFileName: "beced-prospectus.pdf"
  },
  {
    id: "edu-8",
    code: "BPED",
    name: "Bachelor of Physical Education",
    description: "Prepares students for a career in teaching physical education, sports coaching, and promoting health-enhancing physical activities.",
    college: "College of Education",
    duration: "4 Years",
    careers: "PE Teacher, Sports Coach, Fitness Instructor",
    colorScheme: "maroon",
    pdfFileName: "bped-prospectus.pdf"
  },
  {
    id: "edu-9",
    code: "MAED-EM",
    name: "Master of Arts in Education Major in Educational Management",
    description: "Advanced program for educational leaders focusing on school administration, policy formulation, and organizational leadership.",
    college: "College of Education",
    duration: "2 Years",
    careers: "School Principal, Educational Administrator, Consultant",
    colorScheme: "blue",
    pdfFileName: "maed-em-prospectus.pdf"
  },
  {
    id: "edu-10",
    code: "MAED-R",
    name: "Master of Arts in Education Major in Reading",
    description: "Specialized program aimed at developing literacy leaders and reading specialists in various educational settings.",
    college: "College of Education",
    duration: "2 Years",
    careers: "Reading Specialist, Literacy Coach, Academe",
    colorScheme: "green",
    pdfFileName: "maed-r-prospectus.pdf"
  },
  {
    id: "edu-11",
    code: "MAED-ELT",
    name: "Master of Arts in Education Major in English Language Teaching",
    description: "Focuses on advanced methodologies, language testing, and curriculum design for English language instruction.",
    college: "College of Education",
    duration: "2 Years",
    careers: "ESL Instructor, Curriculum Developer, Educational Researcher",
    colorScheme: "yellow",
    pdfFileName: "maed-elt-prospectus.pdf"
  },
  {
    id: "edu-12",
    code: "MAED-ME",
    name: "Master of Arts in Education Major in Mathematics Education",
    description: "Advanced program for math educators to enhance instructional strategies and mathematical understanding.",
    college: "College of Education",
    duration: "2 Years",
    careers: "Master Teacher, Math Curriculum Specialist, Academe",
    colorScheme: "maroon",
    pdfFileName: "maed-me-prospectus.pdf"
  },
  {
    id: "edu-13",
    code: "MAED-SE",
    name: "Master of Arts in Education Major in Science Education",
    description: "Designed for science teachers aspiring to deepen their pedagogical content knowledge and advance science education.",
    college: "College of Education",
    duration: "2 Years",
    careers: "Science Coordinator, Educational Supervisor, Academe",
    colorScheme: "orange",
    pdfFileName: "maed-se-prospectus.pdf"
  },
  {
    id: "edu-14",
    code: "PHD-EM",
    name: "Doctor of Philosophy in Education Major in Educational Management",
    description: "A research-focused terminal degree aiming to produce top-level educational planners, researchers, and administrators.",
    college: "College of Education",
    duration: "3-4 Years",
    careers: "University Professor, High-Level Educational Administrator, Policy Maker",
    colorScheme: "purple",
    pdfFileName: "phd-em-prospectus.pdf"
  },
  {
    id: "edu-15",
    code: "PHD-LS",
    name: "Doctor of Philosophy in Education Major in Language Studies",
    description: "Advanced research degree exploring linguistic theories, language education policies, and sociolinguistics.",
    college: "College of Education",
    duration: "3-4 Years",
    careers: "Linguistics Researcher, Professor, Language Policy Consultant",
    colorScheme: "pink",
    pdfFileName: "phd-ls-prospectus.pdf"
  },
  {
    id: "8",
    code: "BSCE",
    name: "Bachelor of Science in Civil Engineering",
    description: "Involves the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, and buildings.",
    college: "College of Engineering",
    duration: "4 Years",
    careers: "Civil Engineer, Structural Engineer, Construction Manager",
    colorScheme: "orange",
    pdfFileName: "bsce-prospectus.pdf"
  }
];
