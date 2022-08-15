import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Radio from '../Components/Radio';
import { questionsArr } from '../index.utils';
const Form = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [result, setResult] = useState("");
    const gotoNext = () => {
        if (current !== questions.length - 1)
            setCurrent(current + 1);
    }
    const gotoPrev = () => {
        if (current !== 0)
            setCurrent(current - 1);
    }
    const submit = () => {
        const sum = questions.reduce((total, item) => item.selected + total, 0);
        debugger
        if (sum >= 5 && sum <= 8)
            setResult("Introvert");
        else if (sum >= 9 && sum <= 12)
            setResult("Ambivert");
        else
            setResult("Extrovert");
    }
    useEffect(() => {
        setQuestions(questionsArr);
    }, [])
    const handleSelect = (e, i) => {
        const updatedQuestionsArr = [...questions];
        updatedQuestionsArr[current] = { ...questions[current], selected: i + 1 };
        setQuestions(updatedQuestionsArr);

    }
    return (
        <div className='inner-container'>
            {(questions.length > 0 && result === "") &&
                <div className='form'>
                    <h5 className="title" >
                        Question {current + 1}/{questions.length}
                    </h5>
                    <div className="q-block">
                        <h3 className='question'>{questions[current].title}</h3>
                        {questions[current].options.map((option, i) => (
                            <Radio value={(questions[current].selected === i + 1)} onChange={(e) => handleSelect(e, i)}
                                label={option} key={option}
                            />
                        )
                        )}
                        <div className='d-flex my-5'>
                            <Button onClick={gotoPrev} title="Previous" className="form-btn" disabled={current === 0} />
                            <Button onClick={current < questions.length - 1 ? gotoNext : submit}
                                title={current < questions.length - 1 ? "Next" : "Submit"}
                                disabled={!questions[current].selected}
                                className="form-btn next-btn" />
                        </div>
                    </div>
                </div>
            }
            {
                result !== "" &&
                <div className=''>
                    <h1 className="title" >
                        You are an <span className="text-color-primary"> {result}</span>
                    </h1>
                    <Button onClick={() => navigate('/home')} title="Back" className="my-5 d-block mx-auto" />
                </div>
            }
        </div>

    );
};

export default Form;