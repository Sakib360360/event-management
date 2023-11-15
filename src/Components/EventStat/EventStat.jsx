"use client";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const EventStat = ({ event }) => {
  if (!event) {
    return <div>Loading...</div>;
  }
  const { registrations, ticketSales, demographics } = event;
  //console.log(eventData);
  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [demographics.male, demographics.female],
        backgroundColor: ["blue", "pink"],
      },
    ],
  };
  const options = {};

  const ageData = {
    labels: demographics.ageGroups.map((group) => group.ageGroup),
    datasets: [
      {
        label: "Age Groups",
        data: demographics.ageGroups.map((group) => group.count),
        backgroundColor: ["blue", "green", "orange", "red"],
      },
    ],
  };

  return (
    <div>
      <h2>Event Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3>Registrations</h3>
          <p>{registrations}</p>
        </div>
        <div>
          <h3>Ticket Sales</h3>
          <p>{ticketSales}</p>
        </div>
      </div>
      <div>
        <h3>Gender Distribution</h3>
        <div
          style={{
            width: "1000px",
            height: "500px",
            padding: "25px",
            cursor: "pointer",
          }}
        >
          <Pie data={genderData} options={options}></Pie>
        </div>

        {/* <h1 className="font-bold text-3xl text-center mt-10">
      Gender Distribution
    </h1> */}
        {/* <div
      style={{
        width: "500px",
        height: "500px",
        padding: "25px",
        cursor: "pointer",
      }}
    >
      <Pie data={genderData} options={pieOptions} />
    </div> */}
      </div>
      <div>
        <h3>Age Group Distribution</h3>
        <div
          style={{
            width: "1000px",
            height: "500px",
            padding: "25px",
            cursor: "pointer",
          }}
        >
          <Bar data={ageData} options={options}></Bar>
        </div>
      </div>
    </div>
  );
};

export default EventStat;
