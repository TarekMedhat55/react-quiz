const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div>
      <h2>welcome to the React Quiz!</h2>
      <p>{numQuestions} questions to test your mastery</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        let's start
      </button>
    </div>
  );
};

export default StartScreen;
