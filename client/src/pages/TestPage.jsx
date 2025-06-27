import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const TestPage=()=>{

    
    const { jobId,candidateId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
// console.log(jobId+" "+candidateId)
//  console.log(questions)
    useEffect(()=>{
        const fetchTest =async ()=>{
            try{
            const res = await axios.get(`${apiUrl}/api/test/${jobId}`)
            setQuestions(res.data.question)
             console.log(res)
            setLoading(false)
        }catch(err){
            console.log("failed to load the test   "+ err)
        }
        }
        fetchTest();

    },[jobId])
    const handleOptionChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${apiUrl}/api/test/submit`, {
        candidateId,
        jobId,
        answers,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  if (loading) return <div className="p-6 text-xl">Loading test...</div>;

  if (submitted) {
    return (
      <div className="p-6 text-center text-green-600 text-2xl">
        ✅ Test submitted successfully. Good luck!
      </div>
    );
  }
    

    return(

        <>
        < div className='p-6 max-w-3xl mx-auto'>
            <h1 className="text-2xl font-bold mb-4">Test</h1>

                {
                    questions.map((q,idx)=>(
                         <div key={idx} className="mb-6 p-4 border rounded-xl shadow">
                            <p className="font-semibold mb-2">{idx+1}. {q.question} </p>
                              {
                                q.options.map((option,oIdx)=>(
                                    <label key={oIdx} className="block mb-1">
                                          <input
                                            type="radio"
                                            name={`question-${idx}`}
                                            value={option}
                                            checked={answers[idx] === option}
                                            onChange={() => handleOptionChange(idx, option)}
                                            className="mr-2"
                                          />
                                            {option}

                                    </label>
                                ))
                            }

                         </div>   

                    ))
                
                
                }
    <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit Test
      </button>
        </div>
        </>
    )

}

export default TestPage;