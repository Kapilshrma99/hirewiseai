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
        <div className="min-h-screen  px-4 py-10">
  <div className="p-6 max-w-3xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
    
    <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-md mb-8">🧠 Take the Test</h1>

    {questions.map((q, idx) => (
      <div key={idx} className="mb-8 p-6 rounded-xl bg-white/90 shadow-lg border border-gray-300">
        <p className="font-semibold text-lg mb-4 text-blue-900">{idx + 1}. {q.question}</p>
        
        {q.options.map((option, oIdx) => (
          <label
            key={oIdx}
            className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer border ${
              answers[idx] === option
                ? 'bg-blue-100 border-blue-400 font-semibold text-blue-900'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <input
              type="radio"
              name={`question-${idx}`}
              value={option}
              checked={answers[idx] === option}
              onChange={() => handleOptionChange(idx, option)}
              className="mr-3 accent-blue-600"
            />
            {option}
          </label>
        ))}
      </div>
    ))}

    <div className="text-center mt-10">
      <button
        onClick={handleSubmit}
        className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-md hover:from-purple-500 hover:to-blue-600 transition-all duration-300 hover:scale-105"
      >
        🚀 Submit Test
      </button>
    </div>
  </div>
</div>

        </>
    )

}

export default TestPage;