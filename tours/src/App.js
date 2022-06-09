import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const renderTours = () => {
    return tours.length === 0 ? (
      <main>
        <div className="title">
          <h3>No tour</h3>
          <button className="refresh-btn" onClick={fetchApi}>
            Refresh
          </button>
        </div>
      </main>
    ) : (
      <main>
        <Tours tours={tours} onRemove={handleRemove} />
      </main>
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  return renderTours();
}

export default App;
