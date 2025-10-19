"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import CourseDetail from "../components/CourseDetail.jsx";

// Example course data
const courses = [
  { 
    id: "AAA001", 
    name: "Introduction to Programming", 
    difficulty: "Beginner", 
    subjects: ["Python"], 
    previewVideo: "/videoUrl/Course_A/PreviewITP.mp4",
    description: "Learn the basics of coding with Python — from variables and loops to functions and data structures. This course builds your problem-solving skills and gives you a solid foundation for creating simple programs and advancing to more complex coding concepts."
  },
  { id: "AAA002", 
    name: "Calculus 1", 
    difficulty: "Intermediate", 
    subjects: ["Calculus"],
    previewVideo: "/videoUrl/Course_B/PreviewCal1.mp4",
    description: "introduces the fundamental concepts of calculus, focusing on limits, derivatives, and basic integration. Students will learn how to analyze and model real-world phenomena using mathematical functions and change rates. Topics include limits and continuity, differentiation of algebraic and transcendental functions, applications of derivatives such as optimization and motion analysis, and an introduction to definite and indefinite integrals. Emphasis is placed on conceptual understanding, problem-solving, and mathematical reasoning, preparing students for advanced studies in calculus, science, and engineering." },
  { id: "BAA001", 
    name: "Electromagnetic Induction", 
    difficulty: "Intermediate", 
    subjects: ["Physics"], 
    previewVideo: "/videoUrl/Course_C/PreviewElectroMag.mp4",
    description: "explores the principles of electromagnetic induction, focusing on how changing magnetic fields produce electric currents and emf. Topics include Faraday’s and Lenz’s laws, motional emf, eddy currents, self and mutual induction, energy in inductors, and practical applications such as transformers, generators, and induction motors. Students will develop both conceptual understanding and problem-solving skills related to induced electric and magnetic phenomena."},
  { id: "BBA001", 
    name: "Introduction to Deep Learning", 
    difficulty: "Advanced", 
    subjects: ["Ai"],
    previewVideo: "/videoUrl/Course_D/PreviewITDL.mp4",
    description: "This course introduces deep learning, covering neural network fundamentals, training techniques, and optimization. Students will explore architectures like CNNs and RNNs, practice model building with frameworks such as TensorFlow or PyTorch, and apply deep learning to real-world tasks in computer vision, NLP, and reinforcement learning."},
  {id: "BBA002", 
    name: "Ecology", 
    difficulty: "Intermediate", 
    subjects: ["Biology"],
    previewVideo: "/videoUrl/Course_E/PreviewEco.mp4",
    description: "This course introduces the study of ecology, focusing on the interactions between organisms and their environment. Topics include energy flow, nutrient cycling, species interactions, and the dynamics of populations, communities, and ecosystems. Students will explore the impact of human activities on biodiversity and ecosystem stability, with a particular focus on climate change, habitat loss, and conservation. The course provides a foundational understanding of ecological processes and prepares students to address contemporary environmental challenges." 
  },
  { id: "CAA100", 
    name: "Electrodynamics", 
    difficulty: "Advanced", 
    subjects: ["Physics"],
    previewVideo: "/videoUrl/Course_F/PreviewElectroDyn.mp4",
    description: "This course covers classical electrodynamics, focusing on electric and magnetic fields, their interactions with matter, and Maxwell's equations. Topics include electrostatics, magnetostatics, electromagnetic waves, and radiation. The course explores the relationship between electricity and magnetism, with applications in physics, electrical circuits, and communication systems. Students will develop a solid understanding of electromagnetism through problem-solving and theoretical analysis." 
  },
];

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = courses.find((c) => c.id === courseId);
    setCourse(found);
  }, [courseId]);

  if (!course) {
    return <p style={{ padding: "2rem" }}>Course not found.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <CourseDetail course={course} />
    </div>
  );
}
