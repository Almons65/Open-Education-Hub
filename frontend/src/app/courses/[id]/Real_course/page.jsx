// "use client";
//
// import { useState, useEffect, useRef } from "react";
// import { useParams } from "next/navigation";
// import PageTransition from "@/app/components/PageTransition";
// import styles from "./realCourse.module.css";
// import Breadcrumb from "@/app/components/Breadcrumb";
//
//
// // Hardcode the current user's name for this session
// // In a real app, this would come from an authentication context
//
// //const CURRENT_USERNAME = "User1";
// const CURRENT_USERNAME = "User2";
// //const CURRENT_USERNAME = "User3";
// //const CURRENT_USERNAME = "User4";
//
// export default function RealCoursePage() {
//   // Get the dynamic URL parameters from Next.js
//   const params = useParams();
//   // Extract the 'id' parameter from the URL
//   const courseId = params.id;
//
//   // Store the current user's name in state
//   const [currentUser] = useState("User2");
//
//   // Create refs to track video playback state without causing re-renders
//   // 'isPlayingRef' tracks if the video is currently playing
//   const isPlayingRef = useRef(false);
//   // 'sessionStartTimeRef' tracks when the user started a playback session
//   const sessionStartTimeRef = useRef(null);
//
//   // Hardcoded course data array. In a real app, this would be fetched from an API.
// const courses = [
//   { id: "AAA001", name: "Introduction to Programming", difficulty: "Beginner", subjects: ["Python"], previewVideo: "/videoUrl/Course_A/PreviewITP.mp4", totalLectures: 3, badge: "/badges/ITP_badge.png", lectures: [
//     { id: 1, title: "Lecture 1: What is Programming?", video: "/videoUrl/Course_A/ITP1.mp4", description: "explore what programming truly means — guiding a computer to complete tasks accurately through clear, structured instructions. You’ll discover how computers interpret binary machine code, why direct communication is difficult, and how programming languages like Python and Java serve as translators between humans and machines. Using a fun Lego analogy, we’ll reveal how precision, logic, and language design shape all computer programs.",
//       materials: [
//         { name: "Introduction to Programming Lecture 1 Slides", link: "/Lec_Powerpoint/Course_A/Computer_Languages.pptx" },
//         { name: "Introduction to Programming Lecture 1 Exercises", link: "/Lec_Exercises/Course_A/Computer_Language_Exercises.pdf" },
//         { name: "Introduction to Programming Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Computer_Language_Exercises_Answers.pdf"}
//       ],
//       lecturer: "Lecturer: NullPointerException"
//     },
//     { id: 2, title: "Lecture 2: What are the Variables?", video: "/videoUrl/Course_A/ITP4.mp4", description: "Learn what variables are, the different types of variables (integers, booleans, floats, doubles, strings, and characters), and why they are essential in programming. This lecture explains how variables store and manipulate information, handle user input, and allow dynamic program behavior. Examples include combining strings for readable output and using characters for game controls.",
//        materials: [
//         { name: "Introduction to Programming Lecture 2 Slides", link: "/Lec_Powerpoint/Course_A/Variables_in_Programming.pptx" },
//         { name: "Introduction to Programming Lecture 2 Exercises", link: "/Lec_Exercises/Course_A/Variables_Exercises.pdf" },
//         { name: "Introduction to Programming Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Variables_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: NullPointerException"
//     },
//     { id: 3, title: "Lecture 3: How do we Manipulate Variables?", video: "/videoUrl/Course_A/ITP5.mp4", description: "explores how variables work behind the scenes—how they are stored in memory, referenced, and updated during program execution. Students will learn how to manipulate variables through arithmetic and string operations, understand memory references, and apply variable naming conventions like camelCase. Practical examples, such as game development scenarios, illustrate how variable updates drive dynamic program behavior.",
//        materials: [
//         { name: "Introduction to Programming Lecture 3 Slides", link: "/Lec_Powerpoint/Course_A/Manipulate_Variables.pptx" },
//         { name: "Introduction to Programming Lecture 3 Exercises", link: "/Lec_Exercises/Course_A/Manipulate_Variables_Exercises.pdf" },
//         { name: "Introduction to Programming Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Manipulate_Variables_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: NullPointerException"
//     }]},
//   { id: "AAA002", name: "Calculus 1", difficulty: "Intermediate", subjects: ["Calculus"], previewVideo: "/videoUrl/Course_B/PreviewCal1.mp4", totalLectures: 3, badge: "/badges/Cal_Badge.png", lectures: [
//     { id: 1, title: "Lecture 1: Limits and Continuity", video: "/videoUrl/Course_B/Cal1_1.mp4", description: "introduces evaluating limits using direct substitution, factoring, conjugates, and algebraic simplification. It covers one-sided limits and cases where limits do not exist, as well as trigonometric limits involving sin, cos, and tan⁡. Students learn to find horizontal asymptotes, apply the Squeeze Theorem, and use the Intermediate Value Theorem (IVT) to verify the existence of roots. The session concludes with solving continuity problems and determining constants to ensure continuity in piecewise functions.",
//       materials: [
//         { name: "Calculus 1 Lecture 1 Slides", link: "/Lec_Powerpoint/Course_B/Limits_n_continuity.pptx" },
//         { name: "Calculus 1 Lecture 1 Exercises", link: "/Lec_Exercises/Course_B/Limits.pdf" },
//         { name: "Calculus 1 Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Limits_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     },
//     { id: 2, title: "Lecture 2: Derivatives", video: "/videoUrl/Course_B/Cal1_2.mp4", description: "introduces the fundamentals of differentiation, explaining how to find the derivative—the slope of the tangent line to a curve. It covers the power rule, constant multiple rule, and the limit definition of a derivative with clear examples. Students learn to differentiate polynomials, rational, and radical functions by applying these rules and simplifying results. Also, presents the product and quotient rules for more complex functions, followed by the derivatives of key trigonometric functions (sine, cosine, tangent, etc.). Emphasis is placed on understanding, accuracy, and practice in applying these core differentiation techniques.",
//       materials: [
//         { name: "Calculus 1 Lecture 2 Slides", link: "/Lec_Powerpoint/Course_B/Derivatives.pptx" },
//         { name: "Calculus 1 Lecture 2 Exercises", link: "/Lec_Exercises/Course_B/Derivatives_Exercises.pdf" },
//         { name: "Calculus 1 Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Derivatives_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     },
//     { id: 3, title: "Lecture 3: Basic Differentiation Rules", video: "/videoUrl/Course_B/Cal1_3.mp4", description: "This lecture covers the foundational techniques for finding derivatives, starting with the power rule for polynomial functions, where derivatives are computed as the exponent times the base raised to the exponent minus one. The course progresses to the differentiation of radical and rational functions by rewriting them as fractional or negative exponents, enabling the use of the power rule. The lecture also covers the derivatives of basic trigonometric functions (e.g., sine, cosine, tangent), with a focus on common sign patterns. Exponential functions (base e) and natural logarithms are also addressed, highlighting their differentiation rules and the chain rule. The product rule is introduced for differentiating products of functions.",
//       materials: [
//         { name: "Calculus 1 Lecture 3 Slides", link: "/Lec_Powerpoint/Course_B/Basic_Diff_Rules.pptx" },
//         { name: "Calculus 1 Lecture 3 Exercises", link: "/Lec_Exercises/Course_B/Diff_Exercises.pdf" },
//         { name: "Calculus 1 Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Diff_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     }]},
//   { id: "BAA001", name: "Electromagnetic Induction", difficulty: "Intermediate", subjects: ["Physics"], previewVideo: "/videoUrl/Course_C/PreviewElectroMag.mp4", totalLectures: 3, badge: "/badges/Electromag_Badge.png", lectures: [
//     { id: 1, title: "Lecture 1: Faraday's Law", video: "/videoUrl/Course_C/ElectroMag_1.mp4", description: "This lecture covers Faraday’s Law, showing that an induced emf occurs only when magnetic flux changes, not from a steady field. Key points include: Faraday’s Law, with Lenz’s Law indicating the emf opposes flux change, Magnetic Flux: Φ=B⋅A⋅cos⁡θ, Ways to induce emf: change B, change coil area , A, or change angle θ. Example: A 50-loop coil with changing magnetic field generates 160 V emf, 8 A current, and 1280 W power; more loops increase emf.",
//       materials: [
//         { name: "Electromagnetic Induction Lecture 1 Slides", link: "/Lec_Powerpoint/Course_C/Faradays.pptx" },
//         { name: "Electromagnetic Induction Lecture 1 Exercises", link: "/Lec_Exercises/Course_C/Faradays_Exercises.pdf" },
//         { name: "Electromagnetic Induction Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_C/Faradays_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     },
//     { id: 2, title: "Lecture 2: Lenz's Law", video: "/videoUrl/Course_C/ElectroMag_2.mp4", description: "This lecture focuses on Lenz's Law, a fundamental principle of electromagnetic induction that explains how induced currents generate magnetic fields to oppose changes in magnetic flux. The core concept of Lenz’s Law is that an induced electromotive force (emf) always produces a current whose magnetic field opposes the flux change that caused it, ensuring the system remains in equilibrium. The lecture begins with basic scenarios of a coil moving in and out of a constant magnetic field, demonstrating how the induced current opposes the increase or decrease in flux. The right-hand rule is introduced as a tool to determine the direction of the induced current in these scenarios.",
//       materials: [
//         { name: "Electromagnetic Induction Lecture 2 Slides", link: "/Lec_Powerpoint/Course_C/Lenz.pptx" },
//         { name: "Electromagnetic Induction Lecture 2 Exercises", link: "/Lec_Exercises/Course_C/Lenz_Exercises.pdf" },
//         { name: "Electromagnetic Induction Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_C/Lenz_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     },
//     { id: 3, title: "Lecture 3: Motional EMF", video: "/videoUrl/Course_C/PreviewElectroMag.mp4", description: "This lecture demonstrates electromagnetic induction using a rod sliding through a magnetic field. The system consists of a 0.5-meter rod moving at 2 m/s in a 5-tesla magnetic field, with a 10-ohm resistor in a closed circuit. The induced electromotive force (emf) is calculated to be 5 volts using Faraday’s law, and the current through the circuit is 0.5 A, determined via Ohm’s law. The electric field inside the rod is 10 V/m, and over 5 seconds, 12.5 joules of energy are dissipated in the resistor. The force required to move the rod at a constant velocity is 1.25 N, which is the same as the magnetic force on the current-carrying rod. This lecture ties together concepts of electromagnetic induction, energy conversion, and mechanical forces in a moving conductor, highlighting the interplay between mechanical and electrical energy and demonstrating energy conservation in the system.",
//       materials: [
//         { name: "Electromagnetic Induction Lecture 3 Slides", link: "/Lec_Powerpoint/Course_C/EMF.pptx" },
//         { name: "Electromagnetic Induction Lecture 3 Exercises", link: "/Lec_Exercises/Course_C/EMF_Exercises.pdf" },
//         { name: "Electromagnetic Induction Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_C/EMF_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: The Organic Chemistry Tutor"
//     }]},
//   { id: "BBA001", name: "Introduction to Deep Learning", difficulty: "Advanced", subjects: ["Ai"], previewVideo: "/videoUrl/Course_D/PreviewITDL.mp4", totalLectures: 3, badge: "/badges/ITDL_Badge.png", lectures: [
//     { id: 1, title: "Lecture 1: Foundations of Deep Learning", video: "/videoUrl/Course_D/ITDL_1.mp4", description: "This lecture introduces the fundamentals of deep learning, its historical context, and why it has rapidly advanced in recent years. Key concepts covered include intelligence, AI, machine learning, and deep learning, highlighting the shift from manual feature engineering to automatic hierarchical feature learning. The lecture explains neural network building blocks, from perceptrons to multi-layer feedforward networks, including activation functions (sigmoid, ReLU), loss functions, and training objectives. Training techniques such as gradient descent, backpropagation, stochastic and mini-batch updates are discussed, along with practical considerations like preventing overfitting through regularization, dropout, and early stopping. The lecture combines theory with hands-on examples, including predictive modeling and practical tips for efficient training. Students gain a foundation for understanding deep learning architectures, optimization methods, and model generalization, preparing them for more advanced topics such as deep sequence modeling.",
//       materials: [
//         { name: "Introduction to Deep Learning Lecture 1 Slides", link: "/Lec_Powerpoint/Course_D/ITDL.pptx" },
//         { name: "Introduction to Deep Learning Lecture 1 Exercises", link: "/Lec_Exercises/Course_D/ITDL_Exercises.pdf" },
//         { name: "Introduction to Deep Learning Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_D/ITDL_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Alexander Amini"
//     },
//     { id: 2, title: "Lecture 2: Recurrent Neural Networks", video: "/videoUrl/Course_D/ITDL_2.mp4", description: "Introducing sequence modeling, which involves predicting outputs based on the history of input sequences, with examples like speech, language, and financial data. RNNs are explored as a method to capture dependencies over time by maintaining a hidden state updated at each time step, where shared weights across time steps allow for processing sequential data. The lecture also covers the training process for RNNs using Backpropagation Through Time (BPTT), noting challenges like vanishing and exploding gradients that hinder long-term dependency learning. To overcome these issues, the lecture introduces LSTMs, which use gates to control memory retention and improve long-term dependency learning. An application example is provided with music generation, demonstrating how an RNN was used to complete Schubert’s unfinished symphony. The lecture provides both theoretical insights and practical improvements in sequence modeling, offering a comprehensive understanding of the subject.",
//        materials: [
//         { name: "Introduction to Deep Learning Lecture 2 Slides", link: "/Lec_Powerpoint/Course_D/RNN.pptx" },
//         { name: "Introduction to Deep Learning Lecture 2 Exercises", link: "/Lec_Exercises/Course_D/RNN_Exercises.pdf" },
//         { name: "Introduction to Deep Learning Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_D/RNN_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Ava Amini"
//     },
//     { id: 3, title: "Lecture 3: Convolutional Neural Networks", video: "/videoUrl/Course_D/PreviewITDL.mp4", description: "The lecture begins with an introduction to computer vision, highlighting its importance in fields like robotics, healthcare, and autonomous driving. It emphasizes the challenge of enabling machines to and interpret visual data, similar to human vision, and addresses the difficulties in tasks like facial detection and object recognition. The lecture then covers how images are represented as arrays of pixels and how basic vision tasks like classification and regression are performed. The limitations of fully connected networks for image data are discussed, leading to the introduction of convolutions, which preserve spatial information. Through convolution, filters are applied to images to extract meaningful features. The importance of nonlinearities (like ReLU) and pooling for enhancing model expressivity is explained. The architecture of CNNs, which stack convolutional, pooling, and nonlinear layers, is then explored, showcasing how these models learn hierarchical features from raw image data. The lecture extends the discussion to advanced tasks such as object detection and semantic segmentation, explaining the role of Region Proposal Networks (R-CNNs) and CNNs in real-time applications like autonomous navigation and control. The lecture concludes by transitioning to the next topic in deep learning: generative models.",
//        materials: [
//         { name: "Introduction to Deep Learning Lecture 3 Slides", link: "/Lec_Powerpoint/Course_D/CNN.pptx" },
//         { name: "Introduction to Deep Learning Lecture 3 Exercises", link: "/Lec_Exercises/Course_D/CNN_Exercises.pdf" },
//         { name: "Introduction to Deep Learning Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_D/CNN_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Alexander Amini"
//     }]},
//   { id: "BBA002", name: "Ecology", difficulty: "Intermediate", subjects: ["Biology"], previewVideo: "/videoUrl/Course_E/PreviewEco.mp4", totalLectures: 3, badge: "/badges/Eco_Badge.png", lectures: [
//     { id: 1, title: "Lecture 1: The History of Life on Earth", video: "/videoUrl/Course_E/Eco_1.mp4", description: "This lecture provides an overview of Earth's ecological history, emphasizing the interactions between life and the environment over 4.5 billion years. Starting with Earth's formation and the origins of life, the lecture explores the evolution of prokaryotes, eukaryotes, and multicellular organisms. Key topics include the oxygen revolution, the Cambrian explosion, the colonization of land, and the rise of plants and animals. The lecture also examines significant events like the Permian-Triassic extinction, the rise and fall of dinosaurs, and the diversification of mammals and birds after their extinction. The role of human activity and its impact on modern ecosystems is highlighted, setting the stage for future ecological studies.",
//       materials: [
//         { name: "Ecology Lecture 1 Slides", link: "/Lec_Powerpoint/Course_E/Ecology_1.pptx" },
//         { name: "Ecology Lecture 1 Exercises", link: "/Lec_Exercises/Course_E/Ecology_1_Exercises.pdf" },
//         { name: "Ecology Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Ecology_1_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: CrashCourse"
//     },
//     { id: 2, title: "Lecture 2: Population Ecology", video: "/videoUrl/Course_E/Eco_2.mp4", description: "This lecture introduces the principles of population ecology, focusing on how populations of species fluctuate over time and space. It explores key concepts such as population density, dispersion, and growth dynamics, using the 2012 West Nile virus outbreak in Dallas as a case study. The lecture examines how environmental factors like temperature and drought removed limiting factors for mosquitoes, leading to a population surge that contributed to the outbreak. The lecture further discusses the difference between density-dependent and density-independent limiting factors, and how fecundity influences population growth. Exponential and logistic growth models are also introduced, illustrating how populations grow under ideal conditions and eventually stabilize when environmental constraints are reached. This lecture provides a foundational understanding of population ecology, highlighting its real-world applications in disease control, conservation, and resource management.",
//       materials: [
//         { name: "Ecology Lecture 2 Slides", link: "/Lec_Powerpoint/Course_E/Population_Eco.pptx" },
//         { name: "Ecology Lecture 2 Exercises", link: "/Lec_Exercises/Course_E/Population_Eco_Exercises.pdf" },
//         { name: "Ecology Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Population_Eco_Exercises_AnswerKey.pdf"}
//       ],
//        lecturer: "Lecturer: CrashCourse"
//     },
//     { id: 3, title: "Lecture 3: Human Population Growth", video: "/videoUrl/Course_E/PreviewEco.mp4", description: "This lecture explores the extraordinary growth of the human population, from approximately 500 million people in 1650 to over 7 billion today, highlighting it as one of the longest and most dramatic examples of exponential growth in history. Despite humans being biologically K-selected, the population has grown like an R-selected species due to innovations in agriculture, medicine, sanitation, and the expansion into previously uninhabitable areas. The lecture also delves into Earth's carrying capacity, which is influenced not only by biological factors but also by consumption patterns and lifestyle choices. It examines the ecological consequences of human expansion, particularly its contribution to the ongoing biodiversity crisis, and highlights the social and cultural shifts, such as increased education and access to contraception, that have led to a decline in population growth rates. Understanding these dynamics is crucial for managing future population growth sustainably and mitigating the environmental impact of human activities.",
//       materials: [
//         { name: "Ecology Lecture 3 Slides", link: "/Lec_Powerpoint/Course_E/Human_Pop.pptx" },
//         { name: "Ecology Lecture 3 Exercises", link: "/Lec_Exercises/Course_E/Human_Pop_Exercises.pdf" },
//         { name: "Ecology Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Human_Pop_Exercises_AnswerKey.pdf"}
//       ],
//        lecturer: "Lecturer: CrashCourse"
//     }]},
//   { id: "CAA100", name: "Electrodynamics", difficulty: "Advanced", subjects: ["Physics"], previewVideo: "/videoUrl/Course_F/PreviewElectroDyn.mp4", totalLectures: 3, badge: "/badges/ElectroDyn_Badge.png", lectures: [
//     { id: 1, title: "Lecture 1: Introduction to Electrodynamics", video: "/videoUrl/Course_F/ElectroDyn_1.mp4", description: "This course serves as an introduction to electrodynamics and quantum mechanics, using the framework of classical mechanics to transition into the quantum regime. Key concepts include Newton’s laws of motion, the foundational second law, and the shift from classical mechanics to quantum mechanics. The course covers the evolution of quantum theory, focusing on Bohr’s atomic model, Heisenberg's Uncertainty Principle, wave-particle duality, and Schrödinger’s contributions. Students will gain a deep understanding of classical and quantum mechanics and the principles governing the behavior of matter and energy at both macroscopic and microscopic scales.",
//       materials: [
//         { name: "Electrodynamics Lecture 1 Slides", link: "/Lec_Powerpoint/Course_F/ITE.pptx" },
//         { name: "Electrodynamics Lecture 1 Exercises", link: "/Lec_Exercises/Course_F/ITE_Exercises.pdf" },
//         { name: "Electrodynamics Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_F/ITE_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Dr. Shahid Ali Yousafzai"
//     },
//     { id: 2, title: "Lecture 2: Quantum Foundations & Relativity", video: "/videoUrl/Course_F/ElectroDyn_2.mp4", description: "This lecture explores the transition from De Broglie's wave-particle duality hypothesis to Einstein’s theory of special relativity, highlighting key shifts in physics from classical to quantum mechanics. It covers De Broglie's idea that particles exhibit both wave and particle characteristics, and how quantum mechanics, with its probabilistic nature, contrasts with the deterministic framework of classical mechanics. The lecture also touches on Einstein’s discomfort with quantum probabilities, his development of relativistic quantum mechanics, and the unification of electricity and magnetism through Maxwell’s equations. It further discusses the disproof of the aether theory via the Michelson-Morley experiment and Einstein's postulate of the absolute speed of light, which underpins special relativity. Key relativistic concepts like time dilation and length contraction are introduced, along with the distinction between Newton's absolute space and Einstein's responsive space. This lecture offers a concise overview of how quantum mechanics and relativity transformed our understanding of space, time, and matter.",
//       materials: [
//         { name: "Electrodynamics Lecture 2 Slides", link: "/Lec_Powerpoint/Course_F/Quantum_Foun.pptx" },
//         { name: "Electrodynamics Lecture 2 Exercises", link: "/Lec_Exercises/Course_F/Quantum_Exercises.pdf" },
//         { name: "Electrodynamics Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_F/Quantum_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Dr. Shahid Ali Yousafzai"
//     },
//     { id: 3, title: "Lecture 3: Space-Time Relativity Decoded", video: "/videoUrl/Course_F/PreviewElectroDyn.mp4", description: "This lecture covers the evolution of space-time relativity, from classical mechanics to Einstein’s theories and quantum field theory. It explains how space and time are responsive, especially at high speeds, where time dilation and length contraction occur to maintain the speed of light. Building on Maxwell's equations, Einstein viewed electric and magnetic fields as space-time variations, dependent on the observer’s frame. The lecture also addresses inertial vs. non-inertial frames, the twin paradox, and general relativity, which redefines gravity as space-time curvature. Finally, quantum field theory unifies Maxwell’s equations and explores higher dimensions.",
//       materials: [
//         { name: "Electrodynamics Lecture 3 Slides", link: "/Lec_Powerpoint/Course_F/Space_Time.pptx" },
//         { name: "Electrodynamics Lecture 3 Exercises", link: "/Lec_Exercises/Course_F/Space_T_Exercises.pdf" },
//         { name: "Electrodynamics Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_F/Space_T_Exercises_AnswerKey.pdf"}
//       ],
//       lecturer: "Lecturer: Dr. Shahid Ali Yousafzai"
//     }]},
// ];
//   // Find the specific course object from the array that matches the 'courseId' in the URL
//   const course = courses.find((c) => c.id === courseId);
//
//   // State to manage which lecture is currently being viewed
//   // Defaults to the first lecture of the found course, or null if no course/lectures
//   const [currentLecture, setCurrentLecture] = useState(course?.lectures[0] || null);
//   // State to toggle the visibility of the feedback form
//   const [isFeedbackActive, setIsFeedbackActive] = useState(false);
//   // State to store the text from the feedback textarea
//   const [feedbackText, setFeedbackText] = useState("");
//
//   // State to hold the entire progress object
//   const [courseProgress, setCourseProgress] = useState({});
//
//   // State to control the "Feedback Submitted!" confirmation pop-up
//   const [showFeedbackAlert, setShowFeedbackAlert] = useState(false);
//
//   // State to manage the fade-out/fade-in animation when changing lectures
//   const [isChangingLecture, setIsChangingLecture] = useState(false);
//
//   // This useEffect runs once when the component first mounts (thanks to the empty `[]`)
//   useEffect(() => {
//     // Try to load existing progress data from localStorage
//     const savedProgress = JSON.parse(localStorage.getItem("courseProgress"));
//     if (savedProgress) {
//       // If data is found, set it in our React state
//       setCourseProgress(savedProgress);
//     } else {
//       // If no data, create an empty object in localStorage and in state
//       localStorage.setItem("courseProgress", JSON.stringify({}));
//       setCourseProgress({});
//     }
//   }, []); // The empty dependency array `[]` ensures this runs only once on mount
//
//   // This useEffect runs whenever the 'courseId' changes
//   useEffect(() => {
//     // Don't do anything if the courseId hasn't loaded yet
//     if (!courseId) return;
//
//     // 1. Get the main history object (or an empty object if none exists)
//     let historyData = JSON.parse(localStorage.getItem("history") || "{}");
//
//     // 2. Fix for old data: If 'historyData' is an array (from a bug), reset it to an object
//     if (Array.isArray(historyData)) {
//       console.log("Old history array found, converting to object...");
//       historyData = {};
//     }
//
//     // 3. Get the personal history list for the *current user*
//     let userHistory = historyData[CURRENT_USERNAME] || [];
//
//     // 4. Remove any old instances of this courseId to prevent duplicates
//     userHistory = userHistory.filter(id => id !== courseId);
//
//     // 5. Add the current courseId to the *front* of the list (most recent)
//     userHistory.unshift(courseId);
//
//     // 6. Put the user's updated list back into the main history object
//     historyData[CURRENT_USERNAME] = userHistory;
//
//     // 7. Save the updated main object back to localStorage
//     localStorage.setItem("history", JSON.stringify(historyData));
//
//     // 8. Dispatch a custom event so other parts of the app (like the Profile page) can react
//     window.dispatchEvent(new Event("historyUpdated"));
//
//   }, [courseId]); // This effect re-runs if 'courseId' changes
//
//     // Function to save accumulated learning time to localStorage
//   const saveLearningTime = (seconds) => {
//     // Don't save if no time has passed
//     if (seconds === 0) return;
//     try {
//       // Get the main learningTime object from storage
//       const learningTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
//       // Get the current user's total time (or 0 if none)
//       const currentTotal = learningTime[currentUser] || 0;
//       // Add the new seconds to their total
//       learningTime[currentUser] = currentTotal + seconds;
//       // Save the updated object back to storage
//       localStorage.setItem("learningTime", JSON.stringify(learningTime));
//       console.log(`Saved ${seconds} seconds for ${currentUser}. New total: ${learningTime[currentUser]}`);
//     } catch (error) {
//       console.error("Failed to save learning time:", error);
//     }
//   };
//
//
//   // This useEffect sets up and tears down the time-tracking logic
//   useEffect(() => {
//     // Start an interval that runs every 5 seconds
//     const interval = setInterval(() => {
//       // Check if the video is marked as 'playing'
//       if (isPlayingRef.current && sessionStartTimeRef.current) {
//         // Calculate time elapsed since the last save/start
//         const now = Date.now();
//         const secondsElapsed = Math.floor((now - sessionStartTimeRef.current) / 1000);
//
//         if (secondsElapsed > 0) {
//           // Save the elapsed time
//           saveLearningTime(secondsElapsed);
//           // Reset the start time to 'now' to start a new 5-second chunk
//           sessionStartTimeRef.current = now;
//         }
//       }
//     }, 5000); // Run every 5000 milliseconds
//
//     // This function runs when the user tries to leave the page
//     const handleUnload = () => {
//       // Check if the video was playing
//       if (isPlayingRef.current && sessionStartTimeRef.current) {
//         // Calculate any remaining time since the last save
//         const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
//         // Save this final chunk of time
//         saveLearningTime(secondsElapsed);
//         // Mark as no longer playing
//         isPlayingRef.current = false;
//       }
//     };
//
//     // Add an event listener to the browser window to catch 'beforeunload' (tab close/refresh)
//     window.addEventListener("beforeunload", handleUnload);
//
//     // This is the "cleanup function" that runs when the component unmounts
//     return () => {
//       // Stop the 5-second interval
//       clearInterval(interval);
//       // Remove the event listener to prevent memory leaks
//       window.removeEventListener("beforeunload", handleUnload);
//       // Run the 'handleUnload' function one last time to save any remaining time
//       handleUnload();
//     };
//   }, [currentUser]); // This effect depends on 'currentUser'
//
//   // This function is called by the <video> element's 'onPlay' event
//   const handlePlay = () => {
//     // Set the ref to true, indicating playback
//     isPlayingRef.current = true;
//     // Record the exact time playback started
//     sessionStartTimeRef.current = Date.now();
//     console.log(`Video playing for ${currentUser}, starting timer...`);
//   };
//
//   // This function is called by 'onPause' or 'onEnded'
//   const handlePauseOrEnd = () => {
//     // Check if we were tracking time
//     if (isPlayingRef.current && sessionStartTimeRef.current) {
//       // Calculate how long this session lasted
//       const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
//       // Save that time
//       saveLearningTime(secondsElapsed);
//     }
//     // Reset the refs to 'stopped' state
//     isPlayingRef.current = false;
//     sessionStartTimeRef.current = null;
//     console.log(`Video paused/ended for ${currentUser}, stopping timer.`);
//   };
//
//   // This function is called by the <video> element's 'onEnded' event
//   const markLectureAsComplete = () => {
//     // First, save any remaining playback time
//     handlePauseOrEnd();
//     // Safety check
//     if (!currentLecture) return;
//     const lectureNumber = currentLecture.id;
//
//     // Get the most up-to-date progress data from localStorage
//     let courseProgressData = JSON.parse(localStorage.getItem("courseProgress")) || {};
//
//     // --- Navigate the data structure ---
//     // Ensure a 'User4' object exists
//     if (typeof courseProgressData[currentUser] !== "object") {
//       courseProgressData[currentUser] = {};
//     }
//     // Ensure an 'AAA001' object exists inside 'User4'
//     if (typeof courseProgressData[currentUser][courseId] !== "object") {
//       courseProgressData[currentUser][courseId] = { completedLectures: [] };
//     }
//     // Ensure a 'completedLectures' array exists inside that
//     if (!Array.isArray(courseProgressData[currentUser][courseId].completedLectures)) {
//       courseProgressData[currentUser][courseId].completedLectures = [];
//     }
//     // --- End navigation ---
//
//     // Add the lecture ID to the completed list, if it's not already there
//     if (!courseProgressData[currentUser][courseId].completedLectures.includes(lectureNumber)) {
//       courseProgressData[currentUser][courseId].completedLectures.push(lectureNumber);
//       console.log(`Marked Lecture ${lectureNumber} for Course ${courseId} as complete for ${CURRENT_USERNAME}.`);
//     }
//
//     // Check if this completion earns a badge
//     const course = courses.find((course) => course.id === courseId);
//     if (course) {
//       const totalLectures = course.totalLectures;
//       const completedCount = courseProgressData[currentUser][courseId].completedLectures.length;
//       const progress = (completedCount / totalLectures) * 100;
//
//       // If 100% complete AND they don't have the badge yet
//       if (progress === 100 && !courseProgressData[currentUser][courseId].badgeEarned) {
//         // Add the badge URL to their progress data
//         courseProgressData[currentUser][courseId].badgeEarned = course.badge;
//         console.log(`Congratulations ${currentUser}! You earned the badge for ${course.name}!`);
//       }
//     }
//
//     // Save the updated progress data back to localStorage
//     localStorage.setItem("courseProgress", JSON.stringify(courseProgressData));
//     // Update the React state to match, which will re-render any components that use it
//     setCourseProgress(courseProgressData);
//   };
//
//   // If the course data couldn't be found, display a "not found" message
//   if (!course) return <p>Course not found.</p>;
//
//   // This function toggles the feedback form open or closed
//   const handleFeedbackToggle = () => {
//     setIsFeedbackActive((prev) => !prev); // Flips the boolean state
//   };
//
//   // This function updates the 'feedbackText' state as the user types
//   const handleFeedbackChange = (e) => {
//     setFeedbackText(e.target.value);
//   };
//
//   // This function is called when the "Send" feedback button is clicked
//   const handleSendFeedback = () => {
//     // Don't send if the feedback is empty or just whitespace
//     if (!feedbackText.trim()) return;
//     // Safety checks
//     if (!courseId || !currentLecture) return;
//
//     try {
//       // 1. Get the main feedback object from storage
//       const allFeedback = JSON.parse(localStorage.getItem("courseFeedback") || "{}");
//
//       // 2. Ensure an entry for this courseId exists
//       if (!allFeedback[courseId]) {
//         allFeedback[courseId] = {};
//       }
//
//       // 3. Ensure an array exists for this specific lectureId
//       const lectureId = currentLecture.id.toString();
//       if (!Array.isArray(allFeedback[courseId][lectureId])) {
//         allFeedback[courseId][lectureId] = [];
//       }
//
//       // 4. Create the new feedback object with user, text, and timestamp
//       const newFeedback = {
//         user: currentUser,
//         text: feedbackText,
//         date: new Date().toISOString(),
//       };
//       // 5. Add the new feedback to the array
//       allFeedback[courseId][lectureId].push(newFeedback);
//
//       // 6. Save the updated main object back to localStorage
//       localStorage.setItem("courseFeedback", JSON.stringify(allFeedback));
//
//       // 7. Reset the UI: Clear the textarea and close the form
//       setFeedbackText("");
//       setIsFeedbackActive(false);
//
//       // 8. Show the "Submitted!" alert
//       setShowFeedbackAlert(true);
//       // Set a timer to hide the alert after 3 seconds
//       setTimeout(() => {
//         setShowFeedbackAlert(false);
//       }, 3000);
//
//     } catch (error) {
//       console.error("Failed to save feedback:", error);
//     }
//   };
//
//   // This function is called when a user clicks on a lecture in the sidebar
//   const handleChangeLecture = (lec) => {
//     // Do nothing if the user clicks the lecture that is already active
//     if (lec.id === currentLecture?.id) return;
//
//     // 1. Set state to 'true' to trigger the fade-out animation (CSS class)
//     setIsChangingLecture(true);
//
//     // 2. Set a timer to run *after* the animation finishes
//     setTimeout(() => {
//       // 3. Once invisible, swap the lecture data
//       setCurrentLecture(lec);
//
//       // 4. Set state back to 'false' to trigger the fade-in animation
//       setIsChangingLecture(false);
//     }, 300); // 300ms MUST match the animation time in the CSS file
//   };
//
//   // --- JSX (HTML) RENDER ---
//   return (
//     // Wrap the entire page in the PageTransition component for animated loads
//     <PageTransition>
//
//       {/* Conditionally render the "Feedback Submitted!" alert */}
//       {showFeedbackAlert && (
//         <div className={styles.feedbackAlert}>
//           Feedback Submitted! Thank you.
//         </div>
//       )}
//
//       {/* Main 2-column container (sidebar + main content) */}
//       <div className={styles.container}>
//
//         {/* Left sidebar */}
//         <aside className={styles.sidebar}>
//           {/* Breadcrumb navigation */}
//           <Breadcrumb
//             items={[
//               { label: "Home", href: "/home" },
//               { label: course.name, href: `/courses/${course.id}`},
//             ]}
//           />
//
//           <h2> {course.name}: Lectures</h2>
//           {/* List of lectures */}
//           <ul>
//             {/* Check if the course has lectures */}
//             {course.lectures.length > 0 ? (
//               // If yes, map over them and create a list item for each
//               course.lectures.map((lec) => (
//                 <li
//                   key={lec.id} // Unique key for React
//                   // Apply 'activeLecture' class if this 'li' matches the 'currentLecture' state
//                   className={lec.id === currentLecture?.id ? styles.activeLecture : ""}
//                   // Add click handler to change the lecture
//                   onClick={() => handleChangeLecture(lec)}
//                 >
//                   {lec.title}
//                 </li>
//               ))
//             ) : (
//               // If no lectures, show a fallback message
//               <li>No lectures available</li>
//             )}
//           </ul>
//         </aside>
//
//         {/* Right main content area */}
//         {/* Apply the 'loading' class when changing lectures to trigger fade animation */}
//         <main className={`${styles.mainContent} ${isChangingLecture ? styles.loading : ""}`}>
//           {/* Check if a lecture is selected */}
//           {currentLecture ? (
//             // If yes, render the lecture details
//             <>
//               <h1 className={styles.lecLabel}>{currentLecture.title}</h1>
//               <div className={styles.lectureVideoContainer}>
//                 {/* The HTML5 video element */}
//                 <video
//                   src={currentLecture.video} // The source URL for the video
//                   controls // Show default browser controls (play, pause, volume, etc.)
//                   className={styles.lectureVideo}
//                   onPlay={handlePlay} // Call 'handlePlay' when video starts
//                   onPause={handlePauseOrEnd} // Call 'handlePauseOrEnd' when video is paused
//                   onEnded={markLectureAsComplete} // Call 'markLectureAsComplete' when video finishes
//                   // This 'key' is CRITICAL. It forces React to destroy the old <video>
//                   // and create a new one when the lecture changes, ensuring the new video loads.
//                   key={currentLecture.id}
//                 >
//                   {/* This text displays if the browser doesn't support the <video> tag */}
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               {/* Section for the lecture description */}
//               <div className={styles.lectureText}>
//                 <h2 className={styles.DesLabel}>Description</h2>
//                 <p>
//                   {currentLecture.description}
//                 </p>
//                 <br></br>
//                 <p>
//                   {currentLecture.lecturer}
//                 </p>
//               </div>
//               {/* Conditionally render the materials section if materials exist */}
//               {currentLecture.materials?.length > 0 && (
//                 <div className={styles.lectureMaterials}>
//                   <h2 className={styles.MaterialLabel}>Lecture Materials</h2>
//                   <ul>
//                     {/* Map over the materials array and create a link for each */}
//                     {currentLecture.materials.map((mat, index) => (
//                       <li key={index}>
//                         {/* 'target="_blank"' opens the link in a new tab */}
//                         <a href={mat.link} target="_blank" rel="noopener noreferrer">
//                           {mat.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </>
//           ) : (
//             // If no 'currentLecture' is set, display this message
//             <p>No lecture selected.</p>
//           )}
//         </main>
//       </div>
//
//       {/* Floating feedback button (chat icon) */}
//       <div className={styles.feedbackButtonContainer} onClick={handleFeedbackToggle}>
//         <img src="/icons/chat-icon.png" alt="chat icon" style={{ width: '35px', height: '35px' }} />
//       </div>
//
//       {/* The expandable feedback form */}
//       {/* It gains the 'active' class when 'isFeedbackActive' is true, triggering CSS transition */}
//       <div className={`${styles.feedbackSection} ${isFeedbackActive ? styles.active : ""}`}>
//         <h2>Give Feedback</h2>
//         <textarea
//           className={styles.feedbackTextArea}
//           value={feedbackText} // The 'value' is controlled by React state
//           onChange={handleFeedbackChange} // 'onChange' updates the state
//           placeholder="Your feedback..."
//         />
//         <button className={styles.feedbackSendButton} onClick={handleSendFeedback}>Send</button>
//       </div>
//
//     </PageTransition>
//   );
// }






"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./realCourse.module.css";
import Breadcrumb from "@/app/components/Breadcrumb";
import { supabase } from "@/lib/supabaseClient"; // Supabaseクライアントをインポート

// const CURRENT_USERNAME = "User1";
const CURRENT_USERNAME = "User2";
//const CURRENT_USERNAME = "User3";
//const CURRENT_USERNAME = "User4";

export default function RealCoursePage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;

  const [currentUser] = useState(CURRENT_USERNAME);
  const isPlayingRef = useRef(false);
  const sessionStartTimeRef = useRef(null);

  // --- ▼ データ取得ロジックの変更 ▼ ---

  // 1. ハードコードされた 'courses' 配列をすべて削除します。

  // 2. course と currentLecture のための state を初期値 null で定義
  const [course, setCourse] = useState(null);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を追加

  // ... (他の state はそのまま) ...
  const [isFeedbackActive, setIsFeedbackActive] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [courseProgress, setCourseProgress] = useState({});
  const [showFeedbackAlert, setShowFeedbackAlert] = useState(false);
  const [isChangingLecture, setIsChangingLecture] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [completedLectures, setCompletedLectures] = useState(new Set());

  // 3. SupabaseからデータをフェッチするuseEffect
  useEffect(() => {
    if (!courseId) return;

    const fetchCourseData = async () => {
      setIsLoading(true); // データ取得開始

      const { data, error } = await supabase
          .from("courses") // 'courses' テーブルから
          .select(`
          *,
          lectures (
            *
          )
        `) // 'lectures' テーブルの情報も結合して取得
          .eq("id", courseId)
          .single(); // 1件だけ取得

      if (error) {
        console.error("Error fetching course data:", error);
        setCourse(null);
      } else {
        // 取得成功
        // レクチャーを lecture_number でソートする
        if (data.lectures) {
          data.lectures.sort((a, b) => a.lecture_number - b.lecture_number);
        }

        setCourse(data); // 取得したデータを course state にセット
        // 最初のレクチャーを currentLecture state にセット
        setCurrentLecture(data.lectures?.[0] || null);
      }
      setIsLoading(false); // データ取得完了
    };

    fetchCourseData();
  }, [courseId]); // courseId が変わった時だけ実行

  // --- ▲ データ取得ロジックの変更 ▲ ---

  useEffect(() => {
    const fetchUserAndProgress = async () => {
      // 1. ユーザー情報を取得
      const { data: { user } } = await supabase.auth.getUser();
      setLoggedInUser(user);

      if (user) {
        // 2. ユーザーの進捗（完了済み講義IDのリスト）を取得
        // (これは ProfilePage と同じロジックです)
        const { data: progressData, error } = await supabase
            .from("lecture_progress") // ★ lecture_progress テーブルから
            .select("lecture_id")
            .eq("user_id", user.id);

        if (progressData) {
          // 取得したIDの配列を Set にして state に保存
          setCompletedLectures(new Set(progressData.map(p => p.lecture_id)));
        }
      } else {
        router.push('/auth'); // ログインしていない場合は認証ページへ
      }
    };
    fetchUserAndProgress();
  }, [router]);

  // ... (localStorageからprogressを読み込むuseEffect はそのまま) ...
  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress"));
    if (savedProgress) {
      setCourseProgress(savedProgress);
    } else {
      localStorage.setItem("courseProgress", JSON.stringify({}));
      setCourseProgress({});
    }
  }, []);

  // ... (localStorageのhistoryを更新するuseEffect はそのまま) ...
  useEffect(() => {
    if (!courseId) return;
    let historyData = JSON.parse(localStorage.getItem("history") || "{}");
    if (Array.isArray(historyData)) {
      historyData = {};
    }
    let userHistory = historyData[CURRENT_USERNAME] || [];
    userHistory = userHistory.filter(id => id !== courseId);
    userHistory.unshift(courseId);
    historyData[CURRENT_USERNAME] = userHistory;
    localStorage.setItem("history", JSON.stringify(historyData));
    window.dispatchEvent(new Event("historyUpdated"));
  }, [courseId]);

  // ... (saveLearningTime 関数 はそのまま) ...
  // const saveLearningTime = (seconds) => {
  //   if (seconds === 0) return;
  //   try {
  //     const learningTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
  //     const currentTotal = learningTime[currentUser] || 0;
  //     learningTime[currentUser] = currentTotal + seconds;
  //     localStorage.setItem("learningTime", JSON.stringify(learningTime));
  //     console.log(`Saved ${seconds} seconds for ${currentUser}. New total: ${learningTime[currentUser]}`);
  //   } catch (error) {
  //     console.error("Failed to save learning time:", error);
  //   }
  // };

  const saveLearningTime = async (seconds) => {
    // 0秒なら何もしない
    if (seconds === 0) return;

    try {
      // Supabaseの 'increment_learning_time' 関数を呼び出す
      // { seconds_to_add: ... } がSQL関数に渡す引数です
      const { error } = await supabase.rpc('increment_learning_time', {
        seconds_to_add: seconds
      });

      if (error) {
        // 失敗した場合、コンソールにエラーを表示
        console.error("Failed to save learning time:", error.message);
      } else {
        // 成功した場合
        console.log(`Saved ${seconds} seconds to Supabase.`);
      }
    } catch (error) {
      console.error("Error calling RPC function:", error);
    }
  };

  // ... (時間追跡のuseEffect はそのまま) ...
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlayingRef.current && sessionStartTimeRef.current) {
        const now = Date.now();
        const secondsElapsed = Math.floor((now - sessionStartTimeRef.current) / 1000);
        if (secondsElapsed > 0) {
          saveLearningTime(secondsElapsed);
          sessionStartTimeRef.current = now;
        }
      }
    }, 5000);

    const handleUnload = () => {
      if (isPlayingRef.current && sessionStartTimeRef.current) {
        const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
        saveLearningTime(secondsElapsed);
        isPlayingRef.current = false;
      }
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
      handleUnload();
    };
  }, [currentUser]);

  // ... (handlePlay, handlePauseOrEnd 関数 はそのまま) ...
  const handlePlay = () => {
    isPlayingRef.current = true;
    sessionStartTimeRef.current = Date.now();
    console.log(`Video playing for ${currentUser}, starting timer...`);
  };

  const handlePauseOrEnd = () => {
    if (isPlayingRef.current && sessionStartTimeRef.current) {
      const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
      saveLearningTime(secondsElapsed);
    }
    isPlayingRef.current = false;
    sessionStartTimeRef.current = null;
    console.log(`Video paused/ended for ${currentUser}, stopping timer.`);
  };



  const markLectureAsComplete = async () => {
    handlePauseOrEnd(); // ビデオの再生時間を保存（これは変更なし）

    // ログイン中のユーザーか、現在の講義がなければ何もしない
    if (!loggedInUser || !currentLecture) return;

    const lectureIdToMark = currentLecture.id; // DBの 'id' (UUID)

    // ★ 既に完了済みリスト (Set) に含まれているかチェック
    if (completedLectures.has(lectureIdToMark)) {
      console.log(`Lecture ${lectureIdToMark} is already marked as complete.`);
      return; // 既に完了しているので何もしない
    }

    try {
      // ★ FastAPI の /progress/complete エンドポイントを呼び出す
      const endpoint = `http://localhost:8000/progress/complete/${loggedInUser.id}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lecture_id: lectureIdToMark }), // ★ 'id' を 'lecture_id' として送信
      });

      if (!response.ok) throw new Error("Failed to save progress");

      // ★ 成功したら、ローカルの 'completedLectures' Set にもIDを追加
      setCompletedLectures(prevSet => new Set(prevSet).add(lectureIdToMark));

      console.log(`Marked Lecture ${lectureIdToMark} as complete in DB.`);

      // (オプション) バッジ獲得のロジックは、ProfilePage.jsx 側で計算する方が
      // データが正確になるため、ここでのバッジ獲得ロジックは削除します。

    } catch (error) {
      console.error("Progress save error:", error);
    }
  };
  // 'markLectureAsComplete' 内の 'courses.find' を削除
  // const markLectureAsComplete = () => {
  //   handlePauseOrEnd();
  //   if (!currentLecture || !course) return;
  //
  //   // DBスキーマの `lecture_number` または `id` を使います
  //   // ここでは `id` (UUID) を使うと仮定します
  //   const lectureIdToMark = currentLecture.id;
  //
  //   let courseProgressData = JSON.parse(localStorage.getItem("courseProgress")) || {};
  //
  //   if (typeof courseProgressData[currentUser] !== "object") {
  //     courseProgressData[currentUser] = {};
  //   }
  //   if (typeof courseProgressData[currentUser][courseId] !== "object") {
  //     courseProgressData[currentUser][courseId] = { completedLectures: [] };
  //   }
  //   if (!Array.isArray(courseProgressData[currentUser][courseId].completedLectures)) {
  //     courseProgressData[currentUser][courseId].completedLectures = [];
  //   }
  //
  //   // 完了したレクチャーのID (UUID) を保存
  //   if (!courseProgressData[currentUser][courseId].completedLectures.includes(lectureIdToMark)) {
  //     courseProgressData[currentUser][courseId].completedLectures.push(lectureIdToMark);
  //     console.log(`Marked Lecture ${lectureIdToMark} for Course ${courseId} as complete for ${CURRENT_USERNAME}.`);
  //   }
  //
  //   // 'course.badge' 'course.totalLectures' を直接参照する
  //   if (course) {
  //     const totalLectures = course.total_lectures; // DBのカラム名に合わせる
  //     const completedCount = courseProgressData[currentUser][courseId].completedLectures.length;
  //     const progress = (completedCount / totalLectures) * 100;
  //
  //     if (progress >= 100 && !courseProgressData[currentUser][courseId].badgeEarned) {
  //       courseProgressData[currentUser][courseId].badgeEarned = course.badge;
  //       console.log(`Congratulations ${currentUser}! You earned the badge for ${course.name}!`);
  //     }
  //   }
  //
  //   localStorage.setItem("courseProgress", JSON.stringify(courseProgressData));
  //   setCourseProgress(courseProgressData);
  // };

  // ... (handleFeedbackToggle, handleFeedbackChange, handleSendFeedback はそのまま) ...
  const handleFeedbackToggle = () => {
    setIsFeedbackActive((prev) => !prev);
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSendFeedback = () => {
    if (!feedbackText.trim() || !courseId || !currentLecture) return;

    try {
      const allFeedback = JSON.parse(localStorage.getItem("courseFeedback") || "{}");
      if (!allFeedback[courseId]) {
        allFeedback[courseId] = {};
      }

      // レクチャーのID (UUID) をキーにする
      const lectureIdKey = currentLecture.id.toString();
      if (!Array.isArray(allFeedback[courseId][lectureIdKey])) {
        allFeedback[courseId][lectureIdKey] = [];
      }

      const newFeedback = {
        user: currentUser,
        text: feedbackText,
        date: new Date().toISOString(),
      };
      allFeedback[courseId][lectureIdKey].push(newFeedback);

      localStorage.setItem("courseFeedback", JSON.stringify(allFeedback));
      setFeedbackText("");
      setIsFeedbackActive(false);

      setShowFeedbackAlert(true);
      setTimeout(() => {
        setShowFeedbackAlert(false);
      }, 3000);

    } catch (error) {
      console.error("Failed to save feedback:", error);
    }
  };

  // ... (handleChangeLecture はそのまま) ...
  const handleChangeLecture = (lec) => {
    if (lec.id === currentLecture?.id) return;
    setIsChangingLecture(true);
    setTimeout(() => {
      setCurrentLecture(lec);
      setIsChangingLecture(false);
    }, 300);
  };

  // --- ▼ レンダリング部分の変更 ▼ ---

  // 4. ローディング中とデータが無い場合の表示を追加
  if (isLoading) {
    return (
        <PageTransition>
          <div className={styles.container}>
            <p style={{ padding: "2rem" }}>Loading course data...</p>
          </div>
        </PageTransition>
    );
  }

  // 5. 'course' が fetch 失敗で null の場合の表示
  if (!course) {
    return <p style={{ padding: "2rem" }}>Course not found.</p>;
  }

  return (
      <PageTransition>
        {showFeedbackAlert && (
            <div className={styles.feedbackAlert}>
              Feedback Submitted! Thank you.
            </div>
        )}

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <Breadcrumb
                items={[
                  { label: "Home", href: "/home" },
                  { label: course.name, href: `/courses/${course.id}` },
                ]}
            />
            <h2> {course.name}: Lectures</h2>
            <ul>
              {/* 'course.lectures' が存在するかチェック (DBから取得) */}
              {course.lectures && course.lectures.length > 0 ? (
                  course.lectures.map((lec) => (
                      <li
                          key={lec.id} // DBのユニークID (UUID) を使う
                          className={lec.id === currentLecture?.id ? styles.activeLecture : ""}
                          onClick={() => handleChangeLecture(lec)}
                      >
                        {lec.title}
                      </li>
                  ))
              ) : (
                  <li>No lectures available</li>
              )}
            </ul>
          </aside>

          <main className={`${styles.mainContent} ${isChangingLecture ? styles.loading : ""}`}>
            {currentLecture ? (
                <>
                  <h1 className={styles.lecLabel}>{currentLecture.title}</h1>
                  <div className={styles.lectureVideoContainer}>
                    {console.log("Current lecture video URL:", currentLecture?.video)}
                    <video
                        src={currentLecture.video}
                        controls
                        className={styles.lectureVideo}
                        onPlay={handlePlay}
                        onPause={handlePauseOrEnd}
                        onEnded={markLectureAsComplete}
                        key={currentLecture.id} // DBのUUIDを使う
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className={styles.lectureText}>
                    <h2 className={styles.DesLabel}>Description</h2>
                    <p>
                      {currentLecture.description}
                    </p>
                    <br></br>
                    <p>
                      {currentLecture.lecturer}
                    </p>
                  </div>
                  {/* materials の map も 'currentLecture.materials' (jsonb) をそのまま使える */}
                  {currentLecture.materials?.length > 0 && (
                      <div className={styles.lectureMaterials}>
                        <h2 className={styles.MaterialLabel}>Lecture Materials</h2>
                        <ul>
                          {currentLecture.materials.map((mat, index) => (
                              <li key={index}>
                                <a href={mat.link} target="_blank" rel="noopener noreferrer">
                                  {mat.name}
                                </a>
                              </li>
                          ))}
                        </ul>
                      </div>
                  )}
                </>
            ) : (
                <p>No lecture selected.</p>
            )}
          </main>
        </div>

        {/* ... (feedbackButtonContainer, feedbackSection の JSX はそのまま) ... */}
        <div className={styles.feedbackButtonContainer} onClick={handleFeedbackToggle}>
          <img src="/icons/chat-icon.png" alt="chat icon" style={{ width: '35px', height: '35px' }} />
        </div>

        <div className={`${styles.feedbackSection} ${isFeedbackActive ? styles.active : ""}`}>
          <h2>Give Feedback</h2>
          <textarea
              className={styles.feedbackTextArea}
              value={feedbackText}
              onChange={handleFeedbackChange}
              placeholder="Your feedback..."
          />
          <button className={styles.feedbackSendButton} onClick={handleSendFeedback}>Send</button>
        </div>

      </PageTransition>
  );
}