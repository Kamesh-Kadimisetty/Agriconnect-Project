import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ComponentStyles/Other.css"

const Spinner = () => {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue)
    }, 1000);
    count === 0 && navigate("/login")
    return () => clearInterval(interval);
  }, [count, navigate])
  return (
    <>
        <div className="spinner"
        style={{height: '100vh'}}>

          <h1 className='text-center'>redirecting in {count} secs</h1>
            <div className="spinner-border" role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    </>
  )
}

export default Spinner