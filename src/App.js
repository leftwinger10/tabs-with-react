import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [info, setInfo] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      const reponse = await fetch("https://course-api.com/react-tabs-project");
      const newJobs = await reponse.json();
      setJobs(newJobs);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  if (loading) return <h1 className="loading">Loading...</h1>;
  const { company, dates, duties, title } = jobs[info];

  return (
    <div className="App">
      <main>
        <nav>
          {jobs.map((item, index) => {
            return (
              <h3
                key={item.id}
                onClick={() => setInfo(index)}
                className={index === info && "active-btn"}
              >
                {item.company}
              </h3>
            );
          })}
        </nav>

        <section className="info">
          <div>
            <h1>{company}</h1>
            <h3>{title}</h3>
          </div>

          <h4>{dates}</h4>

          {duties.map((duty, index) => {
            return <p key={index}>{duty}</p>;
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
