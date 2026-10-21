/* =====================================================================
   PORTFOLIO CONTENT — this is the only file you need to edit to update
   the site. Add new entries to the TOP of the relevant list.

   Teaching entry fields:
     date      "YYYY-MM"  (used for sorting and academic-year grouping)
     dateLabel what is shown, e.g. "Oct. 2026" or "Oct.–Nov. 2026"
     title     session / lab / rotation name
     type      "didactic" | "lab" | "discussion" | "assessment" |
               "precepting" | "coordination"
     role      optional badge, e.g. "Lead Facilitator"
     audience  learner group
     setting   where it happened
     details   optional — { summary, attendance, strengths, growth,
               reflection, feedback, evidence: [{label, url}] }
   ===================================================================== */

const UPLOADS = "files/";

const PROFILE = {
  name: "Austin Herzog, PharmD",
  title: "Academic and Ambulatory Care Fellow",
  org: "Purdue University College of Pharmacy",
  email: "herzoga@purdue.edu",
  photo: "files/headshot.jpg",
  cv: "Austin-Herzog-CV-October-2026.pdf",
  cvUpdated: "October 2026",
  about: [
    "Welcome to my teaching portfolio! I am an Academic and Ambulatory Care Fellow at Purdue University. I completed my PGY-1 Community-Based Pharmacy Residency at Purdue University Pharmacy in June 2025 and began my fellowship in July 2025. I have been fortunate to have opportunities to lead topic discussions, facilitate Professional Skills Labs, conduct didactic lectures, and precept APPE students.",
    "I am originally from Valparaiso, Indiana and completed my PharmD at Purdue University in May 2024. While going through the PharmD program, I found an interest in academia through being a teaching assistant during my P3 year in a Public Health course taken by second-year pharmacy students. That interest has continued to grow through my residency and fellowship teaching experiences.",
    "This portfolio includes my teaching experiences, reflections, and feedback from learners and preceptors. It documents my development as an educator and the areas I continue to work on as I prepare for a career in academia."
  ]
};

const PHILOSOPHY = {
  pillars: [
    { name: "Adaptability", text: "Every learner approaches challenges differently, so I tailor my methods to meet their unique needs." },
    { name: "Empathy", text: "Open dialogue, active listening, and collaborative learning help learners feel safe to ask questions and grow confident." },
    { name: "Lifelong learning", text: "Connecting theory to practice through real stories, then reflecting and giving feedback to keep improving." }
  ],
  paragraphs: [
    "As I reflect on what it means to be an educator, I recognize that my teaching philosophy is shaped by the experiences that have taught me adaptability, empathy, and a commitment to lifelong learning. These qualities guide my approach as I support learners in their professional and personal growth.",
    "One experience that shaped my philosophy was assisting with our pharmacy’s vaccination clinic. We graciously accept current pharmacy students as volunteers, as they are an integral part of making these clinics so successful. During one clinic, a learner approached me expressing nervousness and fear, which had caused them to lose confidence in their abilities. I encouraged them by creating an open environment where they felt comfortable asking questions. I also reminded them that we wouldn’t have asked them to participate if we didn’t believe in their capabilities. After that conversation, the learner carried out vaccine administration with a wide smile, expressing joy and a sense of confidence. Later, they approached me to share their gratitude for instilling that confidence in them. This experience taught me the importance of adaptability and empathy—recognizing that every learner approaches challenges differently and tailoring my methods to meet their unique needs. Whether I’m collaborating on patient care cases, guiding topic discussions, or mentoring through projects, I strive to create an environment where learners feel supported and empowered to succeed.",
    "My time working on patient-centered services like hormonal birth control consultations, travel health, and immunizations has reinforced the value of empathy and connection in teaching. Building trust with patients relates to the relationships I aim to create with learners. I encourage open dialogue, active listening, and collaborative learning to spark confidence. This approach ensures learners feel comfortable to ask questions and share perspectives.",
    "I also emphasize the importance of connecting theory to practice by sharing personal stories that connect learning objectives and real-world applications. For example, I might share how a thoughtful, clear explanation helped a hesitant patient understand the benefits of vaccination, resulting in a positive health outcome. Furthermore, I could recall a family experience where education played a critical role in improving a loved one's health, highlighting the importance of empathy and communication. By implementing these relatable examples into my teaching, I help learners see how the knowledge they’re gaining applies to real-life scenarios. I’ve identified that these stories make the material more engaging.",
    "Feedback and reflection are critical to my teaching approach. I believe constructive feedback should identify areas for improvement while recognizing what learners are doing well. During my fellowship, I have focused on providing real-time feedback in Professional Skills Labs and skills-based feedback during APPE rotations. I use goal-setting and midpoint evaluations to help guide learners, and I reflect on my own teaching after each experience to identify changes for the next session.",
    "Lastly, I believe the role of an educator extends beyond the classroom. Some of the most impactful mentorship experiences I’ve had involved one-on-one conversations about goals, opportunities, challenges, and expressing belief. I aim to provide the same guidance to my learners by encouraging them to push their own boundaries, because I believe they are capable of doing so.",
    "In summary, my teaching philosophy is built on adaptability, empathy, and the encouragement of lifelong learning. By creating a supportive learning environment, connecting personal experiences to real-world practice, and building meaningful relationships, I strive to prepare learners with the skills and confidence they need to excel."
  ]
};

const PCP = "Purdue University College of Pharmacy";
const P1 = "P1 students", P2 = "P2 students", P3 = "P3 students", P4 = "P4 / APPE students";

const TEACHING = [
  /* ---------------- 2026–2027 ---------------- */
  { date: "2026-11", dateLabel: "Oct.–Nov. 2026", title: "Ambulatory Care APPE", type: "precepting", role: "Preceptor", audience: P4,
    setting: "Family Health Clinic, Monon, IN · Center for Healthy Living, West Lafayette, IN" },
  { date: "2026-11", dateLabel: "Oct.–Nov. 2026", title: "Stable Angina, ACS, & CHF", type: "didactic", audience: P4,
    setting: "PHRM 490: NAPLEX Prep I (asynchronous) · " + PCP },
  { date: "2026-10", dateLabel: "Oct. 2026", title: "Toxicology, Antidotes, Natural Medicines, & Pharmacokinetics", type: "didactic", audience: P4,
    setting: "PHRM 490: NAPLEX Prep I (asynchronous) · " + PCP },
  { date: "2026-10", dateLabel: "Oct. 2026", title: "Point of Care Testing", type: "lab", role: "Lead Facilitator", audience: P3, setting: PCP },
  { date: "2026-12", dateLabel: "Aug.–Dec. 2026", title: "PHRM 490: NAPLEX Prep I", type: "coordination", role: "Course Coordinator", audience: P4,
    setting: PCP, details: { summary: "Asynchronous longitudinal course preparing APPE students for the NAPLEX." } },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "YouRx: Prescription for Wellness", type: "lab", role: "Lead Facilitator", audience: P1, setting: PCP },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "Exam Writing 101", type: "didactic", audience: "Rho Chi pharmacy students", setting: PCP },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "Time Management", type: "didactic", audience: "Rho Chi pharmacy students", setting: PCP },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "Simulated Ambulatory Care Visit", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "Vital Signs & SOAP Notes", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-09", dateLabel: "Sept. 2026", title: "Medication Therapy Management and Medication History", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-09", dateLabel: "Aug.–Sept. 2026", title: "Ambulatory Care APPE", type: "precepting", role: "Preceptor", audience: P4,
    setting: "Family Health Clinic, Monon, IN · Center for Healthy Living, West Lafayette, IN" },
  { date: "2026-08", dateLabel: "Aug. 2026", title: "Literature Reviews", type: "didactic", audience: "Pharmacy faculty and fellows", setting: PCP },
  { date: "2026-08", dateLabel: "Aug. 2026", title: "Introduction to Research", type: "didactic", audience: "Pharmacy faculty and fellows", setting: PCP },
  { date: "2026-08", dateLabel: "Aug. 2026", title: "Learning Objective", type: "didactic", audience: "Pharmacy faculty and fellows", setting: PCP },
  { date: "2026-08", dateLabel: "Aug. 2026", title: "Effective Precepting", type: "didactic", audience: "Pharmacy faculty and fellows", setting: PCP },
  { date: "2026-08", dateLabel: "Aug. 2026", title: "Career Development CV Grading", type: "assessment", role: "Evaluator", audience: P3, setting: PCP },

  /* ---------------- 2025–2026 (fellowship) ---------------- */
  { date: "2026-06", dateLabel: "May–Jun. 2026", title: "Ambulatory Care APPE", type: "precepting", role: "Preceptor", audience: P4,
    setting: "Family Health Clinic, Delphi, IN · Center for Healthy Living, West Lafayette, IN" },
  { date: "2026-04", dateLabel: "Apr. 2026", title: "Tuberculosis and Community Health Workers (CHW) Adherence", type: "lab", role: "Lead Facilitator", audience: P3, setting: PCP },
  { date: "2026-04", dateLabel: "Apr. 2026", title: "Performance-Based Assessments", type: "assessment", role: "Evaluator", audience: P3, setting: PCP },
  { date: "2026-04", dateLabel: "Apr. 2026", title: "Performance-Based Assessments", type: "assessment", role: "Evaluator", audience: P1, setting: PCP },
  { date: "2026-04", dateLabel: "Apr. 2026", title: "Reproductive Health", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-04", dateLabel: "Apr. 2026", title: "Communications", type: "lab", role: "Facilitator", audience: P2, setting: PCP },
  { date: "2026-03", dateLabel: "Mar. 2026", title: "Ambulatory Care and Academia APPE", type: "precepting", role: "Preceptor", audience: P4,
    setting: "Family Health Clinic, Delphi, IN · Center for Healthy Living · " + PCP,
    details: { summary: "I precepted an APPE student from March 2–27, 2026 and provided mentorship regarding residency opportunities. During Quarter 4, I completed precepting and evaluations for two additional APPE students." } },
  { date: "2026-03", dateLabel: "Mar. 2026", title: "Asthma & COPD", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-03", dateLabel: "Mar. 2026", title: "Multiple Disease States", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2026-03", dateLabel: "Mar. 2026", title: "Teaching Performance-Based Assessment", type: "lab", role: "Facilitator", audience: P2, setting: PCP },
  { date: "2026-02", dateLabel: "Feb. 2026", title: "Infectious Diseases II (Respiratory Tract Infections) & Provider Communications", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2026-02", dateLabel: "Feb. 2026", title: "Drug Information & Patient Encounters", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-01", dateLabel: "Jan. 2026", title: "Introduction to Patient Case Presentations and Problem Prioritization", type: "lab", role: "Lead Facilitator", audience: P1, setting: PCP },
  { date: "2026-01", dateLabel: "Jan. 2026", title: "Immunization Injection Technique Assessments", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2026-01", dateLabel: "Jan. 2026", title: "APhA-ASP Guest Speaker", type: "didactic", audience: "P1–P3 students", setting: PCP },
  { date: "2025-12", dateLabel: "Dec. 2, 2025", title: "Dermatology I", type: "didactic", audience: P1, setting: PCP,
    details: { summary: "I created and delivered the Dermatology I lecture for first-year pharmacy students and developed related examination questions." } },
  { date: "2025-12", dateLabel: "Dec. 2025", title: "Performance-Based Assessments", type: "assessment", role: "Evaluator", audience: P2, setting: PCP },
  { date: "2025-12", dateLabel: "Dec. 2025", title: "Point of Care, Home Testing, and Assistive Devices", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2025-11", dateLabel: "Nov. 2025", title: "Medication Reconciliation", type: "lab", role: "Lead Facilitator", audience: P2, setting: PCP },
  { date: "2025-11", dateLabel: "Nov. 2025", title: "Performance-Based Assessments", type: "assessment", role: "Evaluator", audience: P1, setting: PCP },
  { date: "2025-11", dateLabel: "Nov. 2025", title: "Patient Case Studies – Hypertension", type: "didactic", audience: "P1–P3 students", setting: PCP,
    details: { summary: "I delivered a hypertension patient case discussion in Dr. Scott’s Didactic Patient Cases course for first- through third-year pharmacy students." } },
  { date: "2025-11", dateLabel: "Nov. 2025", title: "Motivational Interviewing", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2025-11", dateLabel: "Nov. 2025", title: "Simulated Ambulatory Care Visit", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2025-10", dateLabel: "Sept.–Oct. 2025", title: "Ambulatory Care and Academia APPE", type: "precepting", role: "Lead Preceptor", audience: P4,
    setting: "Family Health Clinic, Delphi, IN · Center for Healthy Living · " + PCP,
    details: { summary: "I developed an APPE syllabus and served as lead preceptor for an APPE student in October 2025. My responsibilities included goal-setting, midpoint evaluation, and skills-based feedback. I also facilitated topic discussions on Learning Objectives and Time Management." } },
  { date: "2025-10", dateLabel: "Oct. 2025", title: "Point of Care Testing", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2025-09", dateLabel: "Sept. 2025", title: "YouRx: Prescription for Wellness", type: "lab", role: "Lead Facilitator", audience: P1, setting: PCP },
  { date: "2025-09", dateLabel: "Sept. 2025", title: "Vital Signs & SOAP Notes", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2025-09", dateLabel: "Sept. 2025", title: "Medication Therapy Management and Medication History", type: "lab", role: "Facilitator", audience: P1, setting: PCP },
  { date: "2025-09", dateLabel: "Sept. 2025", title: "Patient Communication & APE Recitation", type: "lab", role: "Facilitator", audience: P3, setting: PCP },
  { date: "2025-09", dateLabel: "Sept. 2025", title: "Drug Information", type: "lab", role: "Facilitator", audience: P2, setting: PCP },
  { date: "2025-08", dateLabel: "Aug. 2025", title: "Career Development", type: "lab", role: "Facilitator", audience: P2, setting: PCP },

  /* ---------------- 2024–2025 (PGY-1 residency) ---------------- */
  { date: "2025-04", dateLabel: "Apr. 8, 2025", title: "Immunizations Topic Discussion", type: "discussion", audience: "3 APPE learners (Zoom)", setting: PCP,
    details: {
      summary: "Nikki Olenik, PharmD, CDCES, BC-ADM, LDE was responsible for organizing the opportunity to facilitate. This was the first topic discussion I was able to lead independently - which was a very rewarding and fulfilling moment.",
      strengths: "My ability to provide an active learning environment. I challenged the students to think of different vaccines that fit the categories of subunit, viral vector, mRNA, etc. While the learners seemed hesitant to answer - I encouraged them to use their resources to find the answers. This was an example of what we do as pharmacists when we aren't entirely sure of an answer - using our resources!",
      growth: "My pace. This time, I was proceeding at a pace that was too slow. I found myself having to rush through the last few slides in order to respect the time restraints that were in place. I've recognized that finding a pace “sweet spot” will need to be identified."
    } },
  { date: "2025-03", dateLabel: "Mar. 11, 2025", title: "Immunizations Topic Discussion", type: "discussion", audience: "3 APPE learners (Zoom)", setting: PCP,
    details: {
      summary: "This occurred with three APPE learners from Purdue University via Zoom. Nikki Olenik, PharmD, CDCES, BC-ADM, LDE was in attendance.",
      strengths: "My overall comfort level. This was another opportunity with immunizations to display my knowledge on the topic and improvement from the first topic discussion. I was able to highlight important tips and pearls regarding various vaccines, effectively apply critical thinking to various patient scenarios, and adequately discuss the importance of the administration triangle.",
      growth: "My brain moving faster than the words coming out of my mouth. As a result, it could have been perceived that I was nervous, unprepared, or confused — which can lead to a loss in credibility from the audience. This was a reminder to take a moment, slow down, and relax."
    } },
  { date: "2025-03", dateLabel: "Mar. 4, 2025", title: "Community Pharmacy Advancement", type: "didactic", audience: P3 + " (~150)", setting: PCP,
    details: {
      summary: "This lecture was delivered in-person at Purdue University to P3 students as part of their curriculum. I served as a co-presenter alongside a community focused research fellow and was responsible for co-developing the lecture content.",
      attendance: "Approximately 150 students",
      reflection: "Although this was my first time presenting on this specific topic, it was one of the most comfortable teaching experiences I’ve had to date. Having delivered multiple lectures throughout the year, I felt confident and at ease—allowing for a more natural flow and meaningful interaction with students. It was especially rewarding to see students express genuine interest in community-based residency training. I was intentional about restating audience questions to improve clarity, though I recognize the need to continue developing active learning opportunities that promote deeper critical thinking—something that proved more challenging with this particular subject matter.",
      evidence: [
        { label: "Preceptor evaluation (PDF)", url: UPLOADS + "utf-8preceptor_evaluation_of_teaching_form_herzog_community_pharmacy_advancement.pdf" },
        { label: "Student feedback dashboard (PDF)", url: UPLOADS + "dashboard-export-12-27-am-2025-05-12.pdf" }
      ]
    } },
  { date: "2025-02", dateLabel: "Feb. 27, 2025", title: "Hormonal Contraceptives Topic Discussion", type: "discussion", audience: "2 APPE learners (in person)", setting: PCP,
    details: {
      summary: "This occurred with two APPE learners from Purdue University in-person. Katie Koch, PharmD was in attendance for this topic discussion as the APPE learners were on her rotation during this time.",
      strengths: "Being able to “connect the dots” for the learners. There were many times where I would pause for questions, and the response would include statements of confusion prior to explanation, and the explanation brought upon “light bulb” moments. This was a rewarding experience to be able to observe learners truly understanding the material. Furthermore, I was able to stay within the time limits that I had set.",
      growth: "My pace that was observed at certain times throughout the facilitation of the discussion. This is in respect to my habit of clicking to the next slide before I completed a statement regarding material being discussed."
    } },
  { date: "2025-01", dateLabel: "Jan. 27, 2025", title: "Immunizations Administration Training Lab (PHRM 821)", type: "lab", role: "Facilitator", audience: P1 + " (~30)", setting: PCP,
    details: {
      summary: "This occurred at Purdue University with one lab section composed of approximately 30 P1 students. My role in this setting was to provide feedback on immunizations administration technique in a small group breakout room. The techniques that were reviewed were two intramuscular injections and one subcutaneous injection.",
      strengths: "My ability to speak to the learner on a level that allowed them to feel comfort. All of the learners had never administered injections before and there was a high degree of fear and anxiousness associated with the practice. My priority was to let the learners know it is okay to be nervous, but also recognize they are more than capable of carrying out the assignment.",
      growth: "Giving constructive feedback. At times, I feel there are opportunities to be critical in order to allow a learning experience. However, trying to balance constructive criticism with positive reinforcement can be a challenge and a new avenue to discover. My lack of constructive feedback could be viewed as “too light” and could lead to my point not being received in its intended level of understanding."
    } },
  { date: "2025-01", dateLabel: "Jan. 21, 2025", title: "Introduction to Immunizations", type: "didactic", audience: P1 + " (~150)", setting: PCP,
    details: {
      summary: "This lecture was delivered in-person at Purdue University to P1 students as part of their curriculum. I served as a co-presenter alongside three APPE students in the Introduction to Immunization live seminar.",
      attendance: "Approximately 150 students",
      reflection: "This was a fun lecture to be a part of. With my residency location, we do a large volume of vaccinations for the students on campus - so being able to provide the fundamental information for P1 students was my bread and butter. I believe the strongest part of this lecture presentation was being able to engage with the students. For the P1's this lecture is a part of a very long seminar, which last around 6 hours, and I was the last presenter. With that being said, I was able to bring up the energy and provide an environment that allowed the students to have fun while learning the material. The lecture provided a large volume of patient cases and encouraged the students to utilize the CDC vaccination schedules.",
      feedback: "As I've stated above, this lecture was a lot of fun to conduct. I think the joy I had to present reflected in my ability to engage the students and how they were able to apply the information to the patient cases. One strength noted by my evaluator - Dr. Jamie Woodyard - was my ability to relate the content to the real world and why this is such an important topic. One area for improvement was repeating questions asked by the audience to ensure the full audience is able to hear. I always love seeing the student feedback - whether it is positive or providing constructive feedback. The feedback from the students for this lecture was extremely fulfilling. The kind words the students had and the encouragement to continue pushing for a position in academia meant the world to me.",
      evidence: [
        { label: "Preceptor evaluation, p. 1 (image)", url: UPLOADS + "immunization_feedback_1.png" },
        { label: "Preceptor evaluation, p. 2 (image)", url: UPLOADS + "immunization_feedback_2.png" },
        { label: "Student feedback dashboard (PDF)", url: UPLOADS + "dashboard-export-03-26-pm-2025-05-14.pdf" }
      ]
    } },
  { date: "2024-12", dateLabel: "Dec. 16, 2024", title: "Hormonal Birth Control and Smoking Cessation", type: "didactic", audience: "Student Health Center providers (~15)", setting: "Purdue University Student Health Center",
    details: {
      summary: "This teaching experience was delivered in-person at the Purdue University Student Health Center to an interprofessional audience that included MDs, DOs, NPs, and PAs. Members of the Purdue University Pharmacy team were also in attendance. The session focused on pharmacist-led birth control services and strategies for tobacco cessation counseling.",
      attendance: "Approximately 15 medical professionals",
      reflection: "This lecture provided a unique opportunity to engage with a multidisciplinary audience and highlight the expanding clinical role of pharmacists in both reproductive health and tobacco cessation. It was rewarding to contribute to a conversation that reinforced pharmacist-provider collaboration, especially in a space where pharmacy-driven services can significantly improve access and outcomes. Presenting to medical professionals challenged me to be concise, evidence-driven, and intentional in my delivery. One piece of feedback that resonated with me was the suggestion to take a question-and-answer break before transitioning to a new topic—something I plan to incorporate into future interprofessional presentations to improve clarity and engagement. This experience strengthened my ability to communicate within a team-based care model and helped build my confidence in presenting pharmacist-led services to a broader healthcare audience."
    } },
  { date: "2024-12", dateLabel: "Nov.–Dec. 2024", title: "Immunizations & Community Pharmacy APPEs", type: "precepting", role: "Co-preceptor / Primary Preceptor", audience: P4, setting: "Purdue University Pharmacy",
    details: {
      summary: "During the Fall 2024 semester, I had the pleasure of being a co-preceptor for two students on an Immunization APPE rotation. Additionally, I took on the role of primary preceptor for one student on a Community Pharmacy APPE rotation. I assisted the learners with working through bulk patient uploads into PioneerRx, evaluating patient screening forms to assess appropriateness, dosing schedules of various immunizations, administration technique, patient education, and documentation. As primary preceptor, I assisted the learner with prescription dispensing workflow, immunizations workflow, and clinical consultations. I assigned the learner with projects that were tailored to their goals of the APPE rotation, which included activities that assisted in their preparation for the NAPLEX. These included completing a document with the Top 100 prescription medications and creating a “Drug of the Month” flyer made in Canva."
    } },
  { date: "2024-11", dateLabel: "Nov. 15, 2024", title: "Integrated Pharmacotherapeutics II: Hypertension", type: "didactic", audience: P2 + " (~150)", setting: PCP,
    details: {
      summary: "This lecture was given in-person at Purdue University College of Pharmacy to P2 students in the Integrated Pharmacotherapeutics II course. Students participated in-person. The lecture series, originally created by Nicole Olenik, was edited and adapted this year.",
      attendance: "Approximately 150 students",
      reflection: "Due to scheduling conflicts, I was given ~10 minutes less time than originally expected. Through my abilities to address the amount of time spent on each slide, I was able to concisely and confidently navigate the lecture in a timely manner. With enhancing my preparation and time spent practicing, I was able to incorporate time for active learning activities and questions from students even with reduced time. I think I did a good job making the material relatable to the students by providing personal stories to help create a connection to the information that was presented. I have a very relaxed, fun, welcoming approach to my lectures which fits in a classroom setting with P2 students. There were still areas of improvement after reflection: re-stating a question to ensure the entire class hears what the question was, making sure to tailor my personality to the appropriate audience (students vs. providers), and ensuring students knowledge gaps are addressed at specific points in the lecture.",
      feedback: "Nicole Olenik completed my preceptor evaluation. Student feedback was captured via a Qualtrics survey and received 60 responses - all of which were extremely positive with some stating “This was the best lecture presented by a resident” and “I wish we had Austin for every lecture”.",
      evidence: [
        { label: "Preceptor evaluation (PDF)", url: UPLOADS + "utf-8iptec_teaching_evaluation_herzog_htn_lecture_olenik.pdf" },
        { label: "Student evaluations (XLSX)", url: UPLOADS + "student_evaluation_of_resident_-_htn_december_19_2024_11.24.xlsx" }
      ]
    } },
  { date: "2024-10", dateLabel: "Oct. 29, 2024", title: "Immunizations Topic Discussion", type: "discussion", audience: "Butler University APPE learners (Zoom)", setting: PCP,
    details: {
      summary: "This topic discussion occurred with APPE learners from Butler University via Zoom. Nicole Olenik, PharmD, CDCES, BC-ADM, LDE was also present and allowed me to feel comfortable in disseminating the material to the students in an effective manner.",
      strengths: "Incorporating personal stories to help connect with the students, stating the “why” behind specific vaccination recommendations and dosing schedules, and creating an environment for learners to ask questions and feel comfortable doing so.",
      growth: "Speaking on the administration triangle: the practice of having the administrator, the patient, and the sharps container in a triangle. I struggled to effectively communicate how the process is carried out, as well as stumbling over my words for why the administrator should have the sharps container placed near their dominant hand so they aren't crossing over their body to dispose a needle."
    } },
  { date: "2024-10", dateLabel: "Oct. 24, 2024", title: "Introduction to Patient-Centered Care: Vitamins, Minerals, Prebiotics, Probiotics", type: "didactic", audience: P1 + " (~150)", setting: "Purdue University, Electrical Engineering Building",
    details: {
      summary: "This lecture was given in-person at Purdue University - Electrical Engineering Building to P1 students in the Introduction to Patient-Centered Care course. All students participated in-person.",
      attendance: "Approximately 150 students",
      reflection: "Nutrition is an area of passion for me. This lecture was the first of its kind for the residency program and it was very exciting to be the first resident to create new material for this course. Furthermore, this was the first lecture of my post-graduate career! The feedback received by my preceptors and the students was positive, and the sense of accomplishment felt after conducting a successful lecture is something that has stuck with me since. The areas of improvement I discovered within myself was the need to be more prepared for answering questions, develop confidence before the lecture starts - as many people noticed I was nervous in the beginning, and developing a method to be more cognizant on the amount of time to spend on a given slide.",
      feedback: "Jamie Woodyard completed my preceptor evaluation. We discussed strengths and areas for improvement directly after the lecture with her P4 student on APPE rotations. Student feedback was captured via a Qualtrics survey and captured ~110 responses - all displaying very positive feedback.",
      evidence: [
        { label: "Preceptor evaluation (PDF)", url: UPLOADS + "iptec_teaching_evaluation_herzog_supplements_lecture_woodyard-2.pdf" },
        { label: "Student evaluations (XLSX)", url: UPLOADS + "student_evaluation_of_resident_december_19_2024_11.27.xlsx" }
      ]
    } },
  { date: "2024-10", dateLabel: "Oct. 4, 2024", title: "Diabetes Point of Care Lab (PHRM 840)", type: "lab", role: "Facilitator", audience: P2 + " (2 sections, ~30 each)", setting: PCP,
    details: {
      summary: "This occurred at Purdue University with two lab sections composed of approximately 30 P2 students in each section. My role in this setting was to provide clinical education and administration technique on the various GLP-1s.",
      strengths: "My ability to connect the clinical anecdotes to the level of the learner - many of the learners have not had a learning experience in the ambulatory care setting, so I felt it was a priority to use language and examples that resonated with the learner.",
      growth: "My initial nervousness and hesitation. I had never participated in lab facilitation before this experience, and I was timid in the beginning of the first section. As I was able to feel more comfortable, I was able to gain confidence."
    } }
];

const SCHOLARSHIP = {
  publications: [
    { cite: "Hooper CE, Riley-Jensen EG, Sosinski L, <b>Herzog AM</b>, Snyder ME. Frequency and characteristics of prescription adaptations requested and made by chain community pharmacists.", venue: "Journal of the American Pharmacists Association", status: "In press" }
  ],
  posters: [
    { title: "Frequency and characteristics of patient information requests made by community pharmacists during delivery of medication therapy management services for a self-insured employer", venue: "Great Lakes Pharmacy Resident Conference · West Lafayette, IN", date: "May 2025" },
    { title: "Frequency and characteristics of patient information requests made by community pharmacists during delivery of medication therapy management services for a self-insured employer", venue: "APhA Annual Meeting · Nashville, TN", date: "Mar. 2025" }
  ],
  research: [
    { title: "Tuberculosis Medication Adherence Simulation", where: PCP, date: "May 2026–Present", note: "Simulation conducted May 2026; analysis and manuscript in progress" },
    { title: "Impact of NovoCare Patient Assistance Program Eligibility Criteria Changes on Glycemic Control", where: "Family Health Clinic, Delphi & Monon, IN", date: "Jan. 2026–Present" },
    { title: "Impact of Blood Pressure Cuff Type on Blood Pressure Readings, Medication Adherence, and Patient-Perceived Health Literacy", where: PCP, date: "In progress" },
    { title: "Scoping Review Co-Author, Faculty PhD Dissertation", where: PCP, date: "In progress" }
  ]
};

const TRAINING = [
  { title: "Academic and Ambulatory Care Fellow", where: "Purdue University", date: "Jul. 2025–Present", note: "Director: Kimberly Illingworth, PhD, BSPharm" },
  { title: "PGY-1 Community-Based Pharmacy Resident", where: "Purdue University Pharmacy", date: "Jun. 2024–Jun. 2025", note: "Director: Nicole Olenik, PharmD, CDCES, BC-ADM, LDE" },
  { title: "Doctor of Pharmacy", where: "Purdue University College of Pharmacy", date: "May 2024" },
  { title: "Teaching Assistant", where: "Purdue University College of Pharmacy", date: "Jan.–May 2023", note: "Supervisor: Steven Scott, PharmD" }
];

const HONORS = [
  { title: "Preceptor of the Year Award Nomination", date: "May 2026" },
  { title: "APhA Incentive Grant Recipient", date: "Oct. 2024" },
  { title: "Dean’s List, Purdue University", date: "Dec. 2020" },
  { title: "Derek & Jennifer Schemenaur Asay Scholarship", date: "Aug. 2020" },
  { title: "Semester Honors, Purdue University", date: "May 2019" }
];

const CREDENTIALS = [
  { title: "Pharmacist, Indiana State Board of Pharmacy", date: "Sept. 2024" },
  { title: "Indiana Health Excellence Certificate (INHEC)", date: "May 2026" },
  { title: "Yellow Fever Certification", date: "Nov. 2024" },
  { title: "CDC Travel Health Certification", date: "Oct. 2024" },
  { title: "Birth Control Pharmacist Certificate of Completion", date: "Oct. 2024" },
  { title: "BLS Certification", date: "Oct. 2024" },
  { title: "HIPAA Certificate", date: "Jun. 2024" },
  { title: "QPR Certification", date: "Sept. 2021" },
  { title: "Rx for Change: Clinician-Assisted Tobacco Cessation", date: "Aug. 2021" },
  { title: "Purdue Immunization Training Certificate", date: "Jan. 2021" },
  { title: "Purdue Blood-Borne Pathogen Training", date: "Dec. 2020" }
];

const SERVICE = [
  { title: "Purdue University Pharmacy Vaccine Clinic", date: "Sept.–Oct. 2024" },
  { title: "Purdue University Industry Pharmacist Organization", date: "Sept. 2021–Aug. 2022" },
  { title: "Dean’s Advisory Council Meeting", date: "Sept. 2021–Oct. 2022" },
  { title: "Purdue University College of Pharmacy Orientation Program", date: "Aug. 2021" },
  { title: "Purdue Homecoming Royalty Co-Coordinator", date: "Feb.–Sept. 2018" },
  { title: "Purdue Student Union Board", date: "Sept. 2017–Aug. 2019" },
  { title: "Spirits and Traditions Committee Member", date: "Sept. 2017–Aug. 2019" }
];

const VOLUNTEER = [
  { title: "St. Vincent-DePaul Food Pantry — Healthy Nudges", where: "Indianapolis, IN", date: "Jul. 2024–Jun. 2025" },
  { title: "Porter County Swine Committee — Swine Show Ring Hand", where: "Valparaiso, IN", date: "Jul. 2018–Jul. 2023" },
  { title: "Valparaiso Turkey Trot — Water Station Volunteer", where: "Valparaiso, IN", date: "Nov. 2018–2019" }
];

const LOGS = [
  { label: "Fellowship Teaching Experience Log 2025–2026", url: UPLOADS + "fellowship_teaching_experience_log.xlsx" },
  { label: "Residency IPTeC Teaching Log 2024–2025", url: UPLOADS + "iptec_teaching_log_updated_2024.xlsx" }
];
