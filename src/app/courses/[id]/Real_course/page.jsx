"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./realCourse.module.css"; // Create a new CSS module
import Breadcrumb from "@/app/components/Breadcrumb";


export default function RealCoursePage() {
  const params = useParams();
  const courseId = params.id;

  // Example list of lectures
const courses = [
  { id: "AAA001", name: "Introduction to Programming", difficulty: "Beginner", subjects: ["Python"], previewVideo: "/videoUrl/Course_A/PreviewITP.mp4", lectures: [
    { id: 1, title: "Lecture 1: What is Programming?", video: "/videoUrl/Course_A/ITP1.mp4", description: "explore what programming truly means — guiding a computer to complete tasks accurately through clear, structured instructions. You’ll discover how computers interpret binary machine code, why direct communication is difficult, and how programming languages like Python and Java serve as translators between humans and machines. Using a fun Lego analogy, we’ll reveal how precision, logic, and language design shape all computer programs.", 
      materials: [
        { name: "Introduction to Programming Lecture 1 Slides", link: "/Lec_Powerpoint/Course_A/Computer_Languages.pptx" },
        { name: "Introduction to Programming Lecture 1 Exercises", link: "/Lec_Exercises/Course_A/Computer_Language_Exercises.pdf" },
        { name: "Introduction to Programming Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Computer_Language_Exercises_Answers.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: What are the Variables?", video: "/videoUrl/Course_A/ITP4.mp4", description: "Learn what variables are, the different types of variables (integers, booleans, floats, doubles, strings, and characters), and why they are essential in programming. This lecture explains how variables store and manipulate information, handle user input, and allow dynamic program behavior. Examples include combining strings for readable output and using characters for game controls.", 
       materials: [
        { name: "Introduction to Programming Lecture 2 Slides", link: "/Lec_Powerpoint/Course_A/Variables_in_Programming.pptx" },
        { name: "Introduction to Programming Lecture 2 Exercises", link: "/Lec_Exercises/Course_A/Variables_Exercises.pdf" },
        { name: "Introduction to Programming Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Variables_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: How do we Manipulate Variables?", video: "/videoUrl/Course_A/ITP5.mp4", description: "explores how variables work behind the scenes—how they are stored in memory, referenced, and updated during program execution. Students will learn how to manipulate variables through arithmetic and string operations, understand memory references, and apply variable naming conventions like camelCase. Practical examples, such as game development scenarios, illustrate how variable updates drive dynamic program behavior.",
       materials: [
        { name: "Introduction to Programming Lecture 3 Slides", link: "/Lec_Powerpoint/Course_A/Manipulate_Variables.pptx" },
        { name: "Introduction to Programming Lecture 3 Exercises", link: "/Lec_Exercises/Course_A/Manipulate_Variables_Exercises.pdf" },
        { name: "Introduction to Programming Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_A/Manipulate_Variables_Exercises_AnswerKey.pdf"}
      ]
    }]},  
  { id: "AAA002", name: "Calculus 1", difficulty: "Intermediate", subjects: ["Calculus"], previewVideo: "/videoUrl/Course_B/PreviewCal1.mp4", lectures: [
    { id: 1, title: "Lecture 1: Limits and Continuity", video: "/videoUrl/Course_B/Cal1_1.mp4", description: "introduces evaluating limits using direct substitution, factoring, conjugates, and algebraic simplification. It covers one-sided limits and cases where limits do not exist, as well as trigonometric limits involving sin, cos, and tan⁡. Students learn to find horizontal asymptotes, apply the Squeeze Theorem, and use the Intermediate Value Theorem (IVT) to verify the existence of roots. The session concludes with solving continuity problems and determining constants to ensure continuity in piecewise functions.",
      materials: [
        { name: "Calculus 1 Lecture 1 Slides", link: "/Lec_Powerpoint/Course_B/Limits_n_continuity.pptx" },
        { name: "Calculus 1 Lecture 1 Exercises", link: "/Lec_Exercises/Course_B/Limits.pdf" },
        { name: "Calculus 1 Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Limits_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: Derivatives", video: "/videoUrl/Course_B/Cal1_2.mp4", description: "introduces the fundamentals of differentiation, explaining how to find the derivative—the slope of the tangent line to a curve. It covers the power rule, constant multiple rule, and the limit definition of a derivative with clear examples. Students learn to differentiate polynomials, rational, and radical functions by applying these rules and simplifying results. Also, presents the product and quotient rules for more complex functions, followed by the derivatives of key trigonometric functions (sine, cosine, tangent, etc.). Emphasis is placed on understanding, accuracy, and practice in applying these core differentiation techniques.",
      materials: [
        { name: "Calculus 1 Lecture 2 Slides", link: "/Lec_Powerpoint/Course_B/Derivatives.pptx" },
        { name: "Calculus 1 Lecture 2 Exercises", link: "/Lec_Exercises/Course_B/Derivatives_Exercises.pdf" },
        { name: "Calculus 1 Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Derivatives_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: Basic Differentiation Rules", video: "/videoUrl/Course_B/Cal1_3.mp4", description: "This lecture covers the foundational techniques for finding derivatives, starting with the power rule for polynomial functions, where derivatives are computed as the exponent times the base raised to the exponent minus one. The course progresses to the differentiation of radical and rational functions by rewriting them as fractional or negative exponents, enabling the use of the power rule. The lecture also covers the derivatives of basic trigonometric functions (e.g., sine, cosine, tangent), with a focus on common sign patterns. Exponential functions (base e) and natural logarithms are also addressed, highlighting their differentiation rules and the chain rule. The product rule is introduced for differentiating products of functions.",
      materials: [
        { name: "Calculus 1 Lecture 3 Slides", link: "/Lec_Powerpoint/Course_B/Basic_Diff_Rules.pptx" },
        { name: "Calculus 1 Lecture 3 Exercises", link: "/Lec_Exercises/Course_B/Diff_Exercises.pdf" },
        { name: "Calculus 1 Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_B/Diff_Exercises_AnswerKey.pdf"}
      ]
    }]},
  { id: "BAA001", name: "Electromagnetic Induction", difficulty: "Intermediate", subjects: ["Physics"], previewVideo: "/videoUrl/Course_C/PreviewElectroMag.mp4", lectures: [
    { id: 1, title: "Lecture 1: Faraday's Law", video: "/videoUrl/Course_C/ElectroMag_1.mp4", description: "This lecture covers Faraday’s Law, showing that an induced emf occurs only when magnetic flux changes, not from a steady field. Key points include: Faraday’s Law, with Lenz’s Law indicating the emf opposes flux change, Magnetic Flux: Φ=B⋅A⋅cos⁡θ, Ways to induce emf: change B, change coil area , A, or change angle θ. Example: A 50-loop coil with changing magnetic field generates 160 V emf, 8 A current, and 1280 W power; more loops increase emf.",
      materials: [
        { name: "Electromagnetic Induction Lecture 1 Slides", link: "/Lec_Powerpoint/Course_C/Faradays.pptx" },
        { name: "Electromagnetic Induction Lecture 1 Exercises", link: "/Lec_Exercises/Course_C/Faradays_Exercises.pdf" },
        { name: "Electromagnetic Induction Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_C/Faradays_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: Lenz's Law", video: "/videoUrl/Course_C/ElectroMag_2.mp4", description: "This lecture focuses on Lenz's Law, a fundamental principle of electromagnetic induction that explains how induced currents generate magnetic fields to oppose changes in magnetic flux. The core concept of Lenz’s Law is that an induced electromotive force (emf) always produces a current whose magnetic field opposes the flux change that caused it, ensuring the system remains in equilibrium. The lecture begins with basic scenarios of a coil moving in and out of a constant magnetic field, demonstrating how the induced current opposes the increase or decrease in flux. The right-hand rule is introduced as a tool to determine the direction of the induced current in these scenarios.",
      materials: [
        { name: "Electromagnetic Induction Lecture 2 Slides", link: "/Lec_Powerpoint/Course_C/Lenz.pptx" },
        { name: "Electromagnetic Induction Lecture 2 Exercises", link: "/Lec_Exercises/Course_C/Lenz_Exercises.pdf" },
        { name: "Electromagnetic Induction Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_C/Lenz_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: Motional EMF", video: "/videoUrl/Course_C/PreviewElectroMag.mp4", description: "This lecture demonstrates electromagnetic induction using a rod sliding through a magnetic field. The system consists of a 0.5-meter rod moving at 2 m/s in a 5-tesla magnetic field, with a 10-ohm resistor in a closed circuit. The induced electromotive force (emf) is calculated to be 5 volts using Faraday’s law, and the current through the circuit is 0.5 A, determined via Ohm’s law. The electric field inside the rod is 10 V/m, and over 5 seconds, 12.5 joules of energy are dissipated in the resistor. The force required to move the rod at a constant velocity is 1.25 N, which is the same as the magnetic force on the current-carrying rod. This lecture ties together concepts of electromagnetic induction, energy conversion, and mechanical forces in a moving conductor, highlighting the interplay between mechanical and electrical energy and demonstrating energy conservation in the system.",
      materials: [
        { name: "Electromagnetic Induction Lecture 3 Slides", link: "/Lec_Powerpoint/Course_C/EMF.pptx" },
        { name: "Electromagnetic Induction Lecture 3 Exercises", link: "/Lec_Exercises/Course_C/EMF_Exercises.pdf" },
        { name: "Electromagnetic Induction Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_C/EMF_Exercises_AnswerKey.pdf"}
      ]
    }]},
  { id: "BBA001", name: "Introduction to Deep Learning", difficulty: "Advanced", subjects: ["Ai"], previewVideo: "/videoUrl/Course_D/PreviewITDL.mp4", lectures: [
    { id: 1, title: "Lecture 1: Foundations of Deep Learning", video: "/videoUrl/Course_D/ITDL_1.mp4", description: "This lecture introduces the fundamentals of deep learning, its historical context, and why it has rapidly advanced in recent years. Key concepts covered include intelligence, AI, machine learning, and deep learning, highlighting the shift from manual feature engineering to automatic hierarchical feature learning. The lecture explains neural network building blocks, from perceptrons to multi-layer feedforward networks, including activation functions (sigmoid, ReLU), loss functions, and training objectives. Training techniques such as gradient descent, backpropagation, stochastic and mini-batch updates are discussed, along with practical considerations like preventing overfitting through regularization, dropout, and early stopping. The lecture combines theory with hands-on examples, including predictive modeling and practical tips for efficient training. Students gain a foundation for understanding deep learning architectures, optimization methods, and model generalization, preparing them for more advanced topics such as deep sequence modeling.", 
      materials: [
        { name: "Introduction to Deep Learning Lecture 1 Slides", link: "/Lec_Powerpoint/Course_D/ITDL.pptx" },
        { name: "Introduction to Deep Learning Lecture 1 Exercises", link: "/Lec_Exercises/Course_D/ITDL_Exercises.pdf" },
        { name: "Introduction to Deep Learning Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_D/ITDL_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: Recurrent Neural Networks", video: "/videoUrl/Course_D/ITDL_2.mp4", description: "Introducing sequence modeling, which involves predicting outputs based on the history of input sequences, with examples like speech, language, and financial data. RNNs are explored as a method to capture dependencies over time by maintaining a hidden state updated at each time step, where shared weights across time steps allow for processing sequential data. The lecture also covers the training process for RNNs using Backpropagation Through Time (BPTT), noting challenges like vanishing and exploding gradients that hinder long-term dependency learning. To overcome these issues, the lecture introduces LSTMs, which use gates to control memory retention and improve long-term dependency learning. An application example is provided with music generation, demonstrating how an RNN was used to complete Schubert’s unfinished symphony. The lecture provides both theoretical insights and practical improvements in sequence modeling, offering a comprehensive understanding of the subject.", 
       materials: [
        { name: "Introduction to Deep Learning Lecture 2 Slides", link: "/Lec_Powerpoint/Course_D/RNN.pptx" },
        { name: "Introduction to Deep Learning Lecture 2 Exercises", link: "/Lec_Exercises/Course_D/RNN_Exercises.pdf" },
        { name: "Introduction to Deep Learning Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_D/RNN_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: Convolutional Neural Networks", video: "/videoUrl/Course_D/PreviewITDL.mp4", description: "The lecture begins with an introduction to computer vision, highlighting its importance in fields like robotics, healthcare, and autonomous driving. It emphasizes the challenge of enabling machines to and interpret visual data, similar to human vision, and addresses the difficulties in tasks like facial detection and object recognition. The lecture then covers how images are represented as arrays of pixels and how basic vision tasks like classification and regression are performed. The limitations of fully connected networks for image data are discussed, leading to the introduction of convolutions, which preserve spatial information. Through convolution, filters are applied to images to extract meaningful features. The importance of nonlinearities (like ReLU) and pooling for enhancing model expressivity is explained. The architecture of CNNs, which stack convolutional, pooling, and nonlinear layers, is then explored, showcasing how these models learn hierarchical features from raw image data. The lecture extends the discussion to advanced tasks such as object detection and semantic segmentation, explaining the role of Region Proposal Networks (R-CNNs) and CNNs in real-time applications like autonomous navigation and control. The lecture concludes by transitioning to the next topic in deep learning: generative models.", 
       materials: [
        { name: "Introduction to Deep Learning Lecture 3 Slides", link: "/Lec_Powerpoint/Course_D/CNN.pptx" },
        { name: "Introduction to Deep Learning Lecture 3 Exercises", link: "/Lec_Exercises/Course_D/CNN_Exercises.pdf" },
        { name: "Introduction to Deep Learning Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_D/CNN_Exercises_AnswerKey.pdf"}
      ]
    }]},
  { id: "BBA002", name: "Ecology", difficulty: "Intermediate", subjects: ["Biology"], previewVideo: "/videoUrl/Course_E/PreviewEco.mp4", lectures: [
    { id: 1, title: "Lecture 1: The History of Life on Earth", video: "/videoUrl/Course_E/Eco_1.mp4", description: "This lecture provides an overview of Earth's ecological history, emphasizing the interactions between life and the environment over 4.5 billion years. Starting with Earth's formation and the origins of life, the lecture explores the evolution of prokaryotes, eukaryotes, and multicellular organisms. Key topics include the oxygen revolution, the Cambrian explosion, the colonization of land, and the rise of plants and animals. The lecture also examines significant events like the Permian-Triassic extinction, the rise and fall of dinosaurs, and the diversification of mammals and birds after their extinction. The role of human activity and its impact on modern ecosystems is highlighted, setting the stage for future ecological studies.",
      materials: [
        { name: "Ecology Lecture 1 Slides", link: "/Lec_Powerpoint/Course_E/Ecology_1.pptx" },
        { name: "Ecology Lecture 1 Exercises", link: "/Lec_Exercises/Course_E/Ecology_1_Exercises.pdf" },
        { name: "Ecology Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Ecology_1_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: Population Ecology", video: "/videoUrl/Course_E/Eco_2.mp4", description: "This lecture introduces the principles of population ecology, focusing on how populations of species fluctuate over time and space. It explores key concepts such as population density, dispersion, and growth dynamics, using the 2012 West Nile virus outbreak in Dallas as a case study. The lecture examines how environmental factors like temperature and drought removed limiting factors for mosquitoes, leading to a population surge that contributed to the outbreak. The lecture further discusses the difference between density-dependent and density-independent limiting factors, and how fecundity influences population growth. Exponential and logistic growth models are also introduced, illustrating how populations grow under ideal conditions and eventually stabilize when environmental constraints are reached. This lecture provides a foundational understanding of population ecology, highlighting its real-world applications in disease control, conservation, and resource management.",
      materials: [
        { name: "Ecology Lecture 2 Slides", link: "/Lec_Powerpoint/Course_E/Population_Eco.pptx" },
        { name: "Ecology Lecture 2 Exercises", link: "/Lec_Exercises/Course_E/Population_Eco_Exercises.pdf" },
        { name: "Ecology Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Population_Eco_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: Human Population Growth", video: "/videoUrl/Course_E/PreviewEco.mp4", description: "This lecture explores the extraordinary growth of the human population, from approximately 500 million people in 1650 to over 7 billion today, highlighting it as one of the longest and most dramatic examples of exponential growth in history. Despite humans being biologically K-selected, the population has grown like an R-selected species due to innovations in agriculture, medicine, sanitation, and the expansion into previously uninhabitable areas. The lecture also delves into Earth's carrying capacity, which is influenced not only by biological factors but also by consumption patterns and lifestyle choices. It examines the ecological consequences of human expansion, particularly its contribution to the ongoing biodiversity crisis, and highlights the social and cultural shifts, such as increased education and access to contraception, that have led to a decline in population growth rates. Understanding these dynamics is crucial for managing future population growth sustainably and mitigating the environmental impact of human activities.",
      materials: [
        { name: "Ecology Lecture 3 Slides", link: "/Lec_Powerpoint/Course_E/Human_Pop.pptx" },
        { name: "Ecology Lecture 3 Exercises", link: "/Lec_Exercises/Course_E/Human_Pop_Exercises.pdf" },
        { name: "Ecology Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_E/Human_Pop_Exercises_AnswerKey.pdf"}
      ]
    }]},
  { id: "CAA100", name: "Electrodynamics", difficulty: "Advanced", subjects: ["Physics"], previewVideo: "/videoUrl/Course_F/PreviewElectroDyn.mp4", lectures: [
    { id: 1, title: "Lecture 1: Introduction to Electrodynamics", video: "/videoUrl/Course_F/ElectroDyn_1.mp4", description: "This course serves as an introduction to electrodynamics and quantum mechanics, using the framework of classical mechanics to transition into the quantum regime. Key concepts include Newton’s laws of motion, the foundational second law, and the shift from classical mechanics to quantum mechanics. The course covers the evolution of quantum theory, focusing on Bohr’s atomic model, Heisenberg's Uncertainty Principle, wave-particle duality, and Schrödinger’s contributions. Students will gain a deep understanding of classical and quantum mechanics and the principles governing the behavior of matter and energy at both macroscopic and microscopic scales.",
      materials: [
        { name: "Electrodynamics Lecture 1 Slides", link: "/Lec_Powerpoint/Course_F/ITE.pptx" },
        { name: "Electrodynamics Lecture 1 Exercises", link: "/Lec_Exercises/Course_F/ITE_Exercises.pdf" },
        { name: "Electrodynamics Lecture 1 AnswerKeys", link: "/Lec_AnswerKey/Course_F/ITE_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 2, title: "Lecture 2: Quantum Foundations & Relativity", video: "/videoUrl/Course_F/ElectroDyn_2.mp4", description: "This lecture explores the transition from De Broglie's wave-particle duality hypothesis to Einstein’s theory of special relativity, highlighting key shifts in physics from classical to quantum mechanics. It covers De Broglie's idea that particles exhibit both wave and particle characteristics, and how quantum mechanics, with its probabilistic nature, contrasts with the deterministic framework of classical mechanics. The lecture also touches on Einstein’s discomfort with quantum probabilities, his development of relativistic quantum mechanics, and the unification of electricity and magnetism through Maxwell’s equations. It further discusses the disproof of the aether theory via the Michelson-Morley experiment and Einstein's postulate of the absolute speed of light, which underpins special relativity. Key relativistic concepts like time dilation and length contraction are introduced, along with the distinction between Newton's absolute space and Einstein's responsive space. This lecture offers a concise overview of how quantum mechanics and relativity transformed our understanding of space, time, and matter.",
      materials: [
        { name: "Electrodynamics Lecture 2 Slides", link: "/Lec_Powerpoint/Course_F/Quantum_Foun.pptx" },
        { name: "Electrodynamics Lecture 2 Exercises", link: "/Lec_Exercises/Course_F/Quantum_Exercises.pdf" },
        { name: "Electrodynamics Lecture 2 AnswerKeys", link: "/Lec_AnswerKey/Course_F/Quantum_Exercises_AnswerKey.pdf"}
      ]
    },
    { id: 3, title: "Lecture 3: Space-Time Relativity Decoded", video: "/videoUrl/Course_F/PreviewElectroDyn.mp4", description: "This lecture covers the evolution of space-time relativity, from classical mechanics to Einstein’s theories and quantum field theory. It explains how space and time are responsive, especially at high speeds, where time dilation and length contraction occur to maintain the speed of light. Building on Maxwell's equations, Einstein viewed electric and magnetic fields as space-time variations, dependent on the observer’s frame. The lecture also addresses inertial vs. non-inertial frames, the twin paradox, and general relativity, which redefines gravity as space-time curvature. Finally, quantum field theory unifies Maxwell’s equations and explores higher dimensions.",
      materials: [
        { name: "Electrodynamics Lecture 3 Slides", link: "/Lec_Powerpoint/Course_F/Space_Time.pptx" },
        { name: "Electrodynamics Lecture 3 Exercises", link: "/Lec_Exercises/Course_F/Space_T_Exercises.pdf" },
        { name: "Electrodynamics Lecture 3 AnswerKeys", link: "/Lec_AnswerKey/Course_F/Space_T_Exercises_AnswerKey.pdf"}
      ]
    }]},
];


   const course = courses.find((c) => c.id === courseId);

  // Default to first lecture if available
  const [currentLecture, setCurrentLecture] = useState(course?.lectures[0] || null);
  const [isFeedbackActive, setIsFeedbackActive] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  if (!course) return <p>Course not found.</p>;

    const handleLectureCompletion = () => {
    const currentProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
    const updatedProgress = { ...currentProgress, [courseId]: (currentProgress[courseId] || 0) + 1 };
    localStorage.setItem("courseProgress", JSON.stringify(updatedProgress));
  };

  useEffect(() => {
    // Ensure to handle any progress initialization or checks on mount
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress"));
    if (savedProgress && savedProgress[courseId]) {
      // Optionally set the current lecture to the completed one, or show last completed lecture
    }
  }, [courseId]);

const handleFeedbackToggle = () => {
    setIsFeedbackActive((prev) => !prev);
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSendFeedback = () => {
    // Send feedback logic here (e.g., API call)
    alert("Feedback sent: " + feedbackText);
    setFeedbackText(""); // Clear the feedback text after submission
    setIsFeedbackActive(false); // Close feedback form after sending
  };

  return (
    <PageTransition>
      <div className={styles.container}>
        {/* Sidebar */}
                <aside className={styles.sidebar}>
          <Breadcrumb
            items={[
              { label: "🏠 Home", href: "/home" },
              { label: course.name, href: `/courses/${course.id}`},
            ]}
          />

          <h2> {course.name}: Lectures</h2>
          <ul>
            {course.lectures.length > 0 ? (
              course.lectures.map((lec) => (
                <li
                  key={lec.id}
                  className={lec.id === currentLecture?.id ? styles.activeLecture : ""}
                  onClick={() => setCurrentLecture(lec)}
                >
                  {lec.title}
                </li>
              ))
            ) : (
              <li>No lectures available</li>
            )}
          </ul>
        </aside>

        {/* Main content */}
        <main className={styles.mainContent}>
          {currentLecture ? (
            <>
              <h1 className={styles.lecLabel}>{currentLecture.title}</h1>
              <div className={styles.lectureVideoContainer}>
                <video
                  src={currentLecture.video}
                  controls
                  className={styles.lectureVideo}
                  onEnded={handleLectureCompletion}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={styles.lectureText}>
                <h2 className={styles.DesLabel}>Description</h2>
                <p>
                {currentLecture.description}
                </p>
              </div>
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
 <div className={styles.feedbackButtonContainer} onClick={handleFeedbackToggle}>
  
   <img src="/icons/chat-icon.png" alt="chat icon" style={{ width: '35px', height: '35px' }} />
  </div>

      {/* Expandable Feedback Form */}
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