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
  const [feedbackRating, setFeedbackRating] = useState(0);
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

  const handleSendFeedback = async () => {
      // Guard against no rating or empty text
      if (feedbackRating === 0) {
        alert("Please select a star rating.");
        return;
      }
      if (!feedbackText.trim() || !courseId || !currentLecture) return;

      try {
        // Get the currently logged-in user's ID
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error("You must be logged in to leave a review.");

        // Use 'upsert' to either create a new review or update an old one
        const { error } = await supabase
          .from('reviews')
          .upsert({
            course_id: courseId,
            lecture_id: currentLecture.id,
            comment: feedbackText,
            rating: feedbackRating,
            user_id: user.id
          }, {
            // This tells Supabase to update if a row
            // already exists with this user_id and lecture_id
            onConflict: 'user_id, lecture_id'
          });

        if (error) {
          throw new Error(`Failed to submit review: ${error.message}`);
        }

        // Success! Reset the UI
        setFeedbackText("");
        setFeedbackRating(0);
        setIsFeedbackActive(false);

        setShowFeedbackAlert(true);
        setTimeout(() => {
          setShowFeedbackAlert(false);
        }, 3000);

      } catch (error) {
        console.error(error);
        alert(error.message); // Show the error to the user
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

                  <div className={`${styles.feedbackSection} ${isFeedbackActive ? styles.active : ""}`}>
                    <h2>Give Feedback for {currentLecture?.title}</h2>
                    
                    {/* --- ADDED STAR RATING --- */}
                    <div className={styles.starRating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={star <= feedbackRating ? styles.starFilled : styles.starEmpty}
                          onClick={() => setFeedbackRating(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <textarea
                        className={styles.feedbackTextArea}
                        value={feedbackText}
                        onChange={handleFeedbackChange}
                        placeholder="Your feedback..."
                    />
                    <button className={styles.feedbackSendButton} onClick={handleSendFeedback}>Send</button>
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