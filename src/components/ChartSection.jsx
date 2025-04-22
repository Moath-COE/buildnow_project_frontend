import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartSection(props) {
  return (
    <div className="w-full h-full text-center">
      {/* <Bar
        data={{
          labels: props.titles,
          dataset: [
            {
              label: props.cycle + " Cost",
              data: props.prices,
            },
          ],
        }}
        className="mx-auto"
      /> */}
    </div>
  );
}
