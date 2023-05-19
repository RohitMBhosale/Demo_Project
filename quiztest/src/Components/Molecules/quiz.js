import styles from './quiz.module.css';
import { useState } from 'react';
import Timer from './Timer/timer';



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
            Question: " River Luni originates near Pushkar and drains into which one of the following ?",
            Answers: [
                { Answer: "Rann of Kachchh", isCorrect: true },
                { Answer: "Arabian Sea", isCorrect: false },
                { Answer: "Gulf of Cambay", isCorrect: false },
                { Answer: "Lake Sambhar", isCorrect: false }
            ]
        },
        {
            Question: " Patanjali is well known for the compilation of  ?",
            Answers: [
                { Answer: " Yoga Sutra", isCorrect: true },
                { Answer: "Panchatantra", isCorrect: false },
                { Answer: "Brahma Sutra", isCorrect: false },
                { Answer: "Ayurveda", isCorrect: false }
            ]
        },
        {
            Question: " The metal whose salts are sensitive to light is ?",
            Answers: [

                { Answer: "Zinc", isCorrect: false },
                { Answer: "Aluminium", isCorrect: false },
                { Answer: "Copper", isCorrect: false },
                { Answer: "Silver", isCorrect: true }
            ]
        },
        {
            Question: "Who among the following wrote Sanskrit grammar ?",
            Answers: [
                { Answer: "Kalidasa", isCorrect: false },
                { Answer: "Charak", isCorrect: false },
                { Answer: "Panini", isCorrect: true },
                { Answer: "Aryabhatt", isCorrect: false }
            ]
        },
        {
            Question: "What is the capital of India ?",
            Answers: [

                { Answer: "Pune", isCorrect: false },
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Mumbai", isCorrect: false }
            ]
        },
        {
            Question: ". Who among the following wrote Sanskrit grammar ?",
            Answers: [
                { Answer: "Kalidasa", isCorrect: false },
                { Answer: "Charak", isCorrect: false },
                { Answer: "Panini", isCorrect: true },
                { Answer: "Aryabhatt", isCorrect: false }
            ]
        },
        {
            Question: "The Central Rice Research Station is situated in ?",
            Answers: [
                { Answer: "Chennai", isCorrect: false },
                { Answer: "Cuttok", isCorrect: true },
                { Answer: "Bangalore", isCorrect: false },
                { Answer: "Quilon", isCorrect: false }
            ]
        },
        {
            Question: " Which one of the following river flows between Vindhyan and Satpura ranges ?",
            Answers: [
                { Answer: "Narmada", isCorrect: true },
                { Answer: "Mahanadi", isCorrect: false },
                { Answer: "Son", isCorrect: false },
                { Answer: "Netravati", isCorrect: false }
            ]
        }

    ]

    //using  UseState

    const [currentQuestion, setCurrentQuestion] = useState(0);  //to change the question when submit the option
    const [score, setScore] = useState(0);    //to set the score to strore the score the of candidate.
    const [showScore, setShowScore] = useState(false);
    const [pass, setPass] = useState('');


    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {      // when isCorrect is true 
            setScore(score + 1)  //score will increase by one.
        }
        const nextQue = currentQuestion + 1;
        if (nextQue < questionBank.length) {                  //  to check the how many question done
            setCurrentQuestion(nextQue);                    // to update the questions
        }
        else {                                             // when the question is not equal to length then else will run.
            setShowScore(true);                          // set show score true. and show the result on line no.145
            if (score >= questionBank.length - 5) {        //to check pass or fail
                setPass("✨🥂 CONGRATULATION 🥂✨ You Pass The Test ")
            } else {
                setPass("😔Better Luck Next Time 😔")
            }
        }

    }



    return (

        <>
            <div className={styles.container}>

                <div className={styles.output}>
                    <h1>{pass}</h1>
                </div>

                <div className={styles.child}>

                    {showScore ? (
                        <div className={styles.result}>
                            <h6>score :</h6> {score}/{questionBank.length}
                          </div>
                          ) : (
                          <>

                            <div className={styles.que_timer}>
                                <Timer />
                            </div>

                            <div className={styles.que_no}>
                                <span>{currentQuestion}</span>/{questionBank.length}
                            </div>
  
                            <div className={styles.que_txt}>   

                                {questionBank[currentQuestion].Question}     
                            </div>


                            <div className={styles.options}>
                                {questionBank[currentQuestion].Answers.map((answer) => (
                                    <button className={styles.btn} onClick={() => handleAnswerResponse(answer.isCorrect)}> {answer.Answer} </button>
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