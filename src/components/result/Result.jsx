import React, { useState, useEffect } from 'react';
import './Result.css'

function Result() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const progressLoop = setTimeout(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.01;
        return newProgress.toFixed(2);
      });
    }, 600);

    return () => clearTimeout(progressLoop);
  }, []);
  return (
    <div className='result'>
      <main>
        <div className="loader" data-running={progress < 1}>
          <div className="loader__fill-glow"></div>
          <div className="loader__fill" style={{ '--progress': progress }}></div>
          <div className="loader__middle">
            <div className="loader__value">
              <div data-value>
                {Math.round(progress * 100)}
                %</div>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => setProgress(1)}>Replay</button>
      </main>
      <section className='container'>
          <div className="card">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx={70} cy={70} r={70} ></circle>
                  <circle cx={70} cy={70} r={70} ></circle>
                </svg>
              </div>
              <div className="numbers">
                <h1>90 <span>%</span> </h1>
              </div>
            </div>
            <div className="text">html</div>
          </div>
          <div className="card">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx={70} cy={70} r={70} ></circle>
                  <circle cx={70} cy={70} r={70} ></circle>
                </svg>
              </div>
              <div className="numbers">
                <h1>82 <span>%</span> </h1>
              </div>
            </div>
            <div className="text">css</div>
          </div>
          <div className="card">
            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx={70} cy={70} r={70} ></circle>
                  <circle cx={70} cy={70} r={70} ></circle>
                </svg>
              </div>
              <div className="numbers">
                <h1>60 <span>%</span> </h1>
              </div>
            </div>
            <div className="text">javascript</div>
          </div>
      </section>
    </div>
  )
}

export default Result
