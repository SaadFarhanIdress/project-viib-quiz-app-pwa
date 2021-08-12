import React from 'react';
import { Props } from '../types/types';
import styles from '../App.module.css';
import cx from 'classnames';

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {

    return (
        <div>
        <p className={styles.questionNumber}>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} className={styles.text} />
        <div className={styles.text}>
            {answers.map((answer: string) => (
                <div key={answer}>
                    <button disabled={userAnswer ? true : false} className={cx(userAnswer?.correctAnswer === answer ? styles.right : userAnswer?.answer === answer ? styles.wrong : null, styles.options)} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
        
    </div>
    )
}

export default QuestionCard
