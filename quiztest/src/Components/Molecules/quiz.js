import styles from './quiz.module.css';
import { useState } from 'react';



export default function QuizTest() {

    const questionBank = [
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "Who is the national animal of India ?",
            Answers: [
                { Answer: "Tiger", isCorrect: true },
                { Answer: "Lion", isCorrect: false },
                { Answer: "Elephent", isCorrect: false },
                { Answer: "Deer", isCorrect: false }
            ]
        },
        {
            Question: "Who is the PM of India ?",
            Answers: [
                { Answer: "Narendra Modi", isCorrect: true },
                { Answer: "Asaram Bapu", isCorrect: false },
                { Answer: "Uddhav Thakrey", isCorrect: false },
                { Answer: "Rahul Gandhi", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Mumbai", isCorrect: false }
            ]
        }

    ]

    //using  UseState

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


  const handleAnswerResponse =(isCorrect) =>{
if(isCorrect){
    setScore(score +1)
}
const nextQue = currentQuestion +1;
if(nextQue < questionBank.length){
    setCurrentQuestion(nextQue);
}
else{
    setShowScore(true);
}

  }
 


    return (

        <>
            <div className={styles.container}>

               <div className={styles.child}>

               {showScore ? (
                    <div>
                        you have scored{score} out of {questionBank.length}
                    </div>
                ) : (
                    <>
                       

                            <div className={styles.que_no}>
                                <span>{currentQuestion}</span>/{questionBank.length}
                            </div>

                            <div className={styles.que_txt}>
                                 {questionBank[currentQuestion].Question}
                            </div>
                       

                        <div className={styles.options}>
                            {questionBank[currentQuestion].Answers.map((answer)=>(
                                <button className={styles.btn} onClick={() =>handleAnswerResponse(answer.isCorrect)}> { answer.Answer} </button>
                            ))}
                        </div>
                    </>
                )
                }

               </div>

            </div>

        </>
    )
}