import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import Test from "../components/Test";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://online-json-server-api.up.railway.app/project/66b4e514340dd55056fb63d4/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + `${title}`;
  }, [title]);

  return (
    <div className="container quiz-container">
      {isPending && <p>loading...</p>}
      {error && <p>{error}</p>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </div>
  );
}

export default Quiz;
