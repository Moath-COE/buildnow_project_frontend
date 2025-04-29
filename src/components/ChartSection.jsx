import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartSection(props) {
  return (
    <div className="w-full h-full text-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="Spends"
            fill={
              props.cycle === "all"
                ? "rgb(193, 199, 208)"
                : props.cycle === "mn"
                ? "rgba(30, 64, 175, 0.8)"
                : "rgba(22, 101, 52, 0.8)"
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-200 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-gray-500">
          Costs:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
