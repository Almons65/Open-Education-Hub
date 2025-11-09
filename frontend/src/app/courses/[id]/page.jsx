// "use client";
//
// // Import the Next.js hook to read dynamic URL parameters (e.g., the [id] part)
// import { useParams } from "next/navigation";
// // Import React's hooks for managing state and side effects
// import { useState, useEffect } from "react";
// // Import the component that will display the course details
// import CourseDetail from "../components/CourseDetail.jsx";
//
// // This is a hardcoded array of all available courses.
// // In a real application, this data would likely be fetched from a database or API.
// const courses = [
//   {
//     id: "AAA001",
//     name: "Introduction to Programming",
//     difficulty: "Beginner",
//     subjects: ["Python"],
//     previewVideo: "/videoUrl/Course_A/PreviewITP.mp4",
//     description: "Learn the basics of coding with Python — from variables and loops to functions and data structures. This course builds your problem-solving skills and gives you a solid foundation for creating simple programs and advancing to more complex coding concepts.",
//     lecturer: "Lecturer: NullPointerException"
//   },
//   {
//     id: "AAA002",
//     name: "Calculus 1",
//     difficulty: "Intermediate",
//     subjects: ["Calculus"],
//     previewVideo: "/videoUrl/Course_B/PreviewCal1.mp4",
//     description: "introduces the fundamental concepts of calculus, focusing on limits, derivatives, and basic integration. Students will learn how to analyze and model real-world phenomena using mathematical functions and change rates. Topics include limits and continuity, differentiation of algebraic and transcendental functions, applications of derivatives such as optimization and motion analysis, and an introduction to definite and indefinite integrals. Emphasis is placed on conceptual understanding, problem-solving, and mathematical reasoning, preparing students for advanced studies in calculus, science, and engineering.",
//     lecturer: "Lecturer: The Organic Chemistry Tutor"
//   },
//   {
//     id: "BAA001",
//     name: "Electromagnetic Induction",
//     difficulty: "Intermediate",
//     subjects: ["Physics"],
//     previewVideo: "/videoUrl/Course_C/PreviewElectroMag.mp4",
//     description: "explores the principles of electromagnetic induction, focusing on how changing magnetic fields produce electric currents and emf. Topics include Faraday’s and Lenz’s laws, motional emf, eddy currents, self and mutual induction, energy in inductors, and practical applications such as transformers, generators, and induction motors. Students will develop both conceptual understanding and problem-solving skills related to induced electric and magnetic phenomena.",
//     lecturer: "Lecturer: The Organic Chemistry Tutor"
//   },
//   {
//     id: "BBA001",
//     name: "Introduction to Deep Learning",
//     difficulty: "Advanced",
//     subjects: ["Ai"],
//     previewVideo: "/videoUrl/Course_D/PreviewITDL.mp4",
//     description: "This course introduces deep learning, covering neural network fundamentals, training techniques, and optimization. Students will explore architectures like CNNs and RNNs, practice model building with frameworks such as TensorFlow or PyTorch, and apply deep learning to real-world tasks in computer vision, NLP, and reinforcement learning.",
//     lecturer: "Lecturers: Alexander Amini and Ava Amini"
//   },
//   {
//     id: "BBA002",
//     name: "Ecology",
//     difficulty: "Intermediate",
//     subjects: ["Biology"],
//     previewVideo: "/videoUrl/Course_E/PreviewEco.mp4",
//     description: "This course introduces the study of ecology, focusing on the interactions between organisms and their environment. Topics include energy flow, nutrient cycling, species interactions, and the dynamics of populations, communities, and ecosystems. Students will explore the impact of human activities on biodiversity and ecosystem stability, with a particular focus on climate change, habitat loss, and conservation. The course provides a foundational understanding of ecological processes and prepares students to address contemporary environmental challenges.",
//     lecturer: "Lecturer: CrashCourse"
//   },
//   {
//     id: "CAA100",
//     name: "Electrodynamics",
//     difficulty: "Advanced",
//     subjects: ["Physics"],
//     previewVideo: "/videoUrl/Course_F/PreviewElectroDyn.mp4",
//     description: "This course covers classical electrodynamics, focusing on electric and magnetic fields, their interactions with matter, and Maxwell's equations. Topics include electrostatics, magnetostatics, electromagnetic waves, and radiation. The course explores the relationship between electricity and magnetism, with applications in physics, electrical circuits, and communication systems. Students will develop a solid understanding of electromagnetism through problem-solving and theoretical analysis.",
//     lecturer: "Lecturer: Dr. Shahid Ali Yousafzai"
//   },
// ];
//
// // Define and export the main page component for a single course
// export default function CoursePage() {
//   // Get the dynamic URL parameters
//   const params = useParams();
//   // Extract the 'id' from the URL (e.g., "AAA001")
//   const courseId = params.id;
//   // Create a state variable to hold the course object we find
//   const [course, setCourse] = useState(null); // Default to null (not found yet)
//
//   // This useEffect hook runs when the component mounts and whenever 'courseId' changes
//   useEffect(() => {
//     // Find the course in the 'courses' array that matches the 'courseId' from the URL
//     const found = courses.find((c) => c.id === courseId);
//     // Update the 'course' state with the course we found (or 'undefined' if not found)
//     setCourse(found);
//   }, [courseId]); // The dependency array ensures this runs if the 'courseId' changes
//
//   // If the 'course' state is still null (or 'undefined'), the course hasn't been found
//   if (!course) {
//     // Display a "not found" message
//     return <p style={{ padding: "2rem" }}>Course not found.</p>;
//   }
//
//   // If the course *was* found, render the CourseDetail component
//   return (
//     // A simple div wrapper with some padding
//     <div style={{ padding: "2rem" }}>
//       {/* Pass the found 'course' object as a prop to the CourseDetail component */}
//       <CourseDetail course={course} />
//     </div>
//   );
// }



// "use client" を削除します (サーバーコンポーネントにするため)
import CourseDetail from "../components/CourseDetail.jsx";
import { supabase } from "@/lib/supabaseClient"; // Supabaseクライアントをインポート

// ページコンポーネントを async に変更
export default async function CoursePage({ params }) {
  // URLの[id]を取得
    const { id: courseId } = await params;

  // Supabaseから単一のコースデータをフェッチ
  const { data: course, error } = await supabase
      .from("courses") // 'courses' テーブルから
      .select("*")     // すべての列を選択
      .eq("id", courseId) // 'id' が 'courseId' と一致するもの
      .single(); // 1件のデータだけを取得

  // エラーハンドリング
  if (error || !course) {
    console.error("Error fetching course:", error);
    return <p style={{ padding: "2rem" }}>Course not found.</p>;
  }

  // 取得したデータを CourseDetail コンポーネントに渡す
  return (
      <div style={{ padding: "2rem" }}>
        {/* CourseDetailはクライアントコンポーネントのままでOK */}
        <CourseDetail course={course} />
      </div>
  );
}