import { LineChart, Line } from 'recharts';
import styles from "../styles/MockLineChart.module.css";

const data = [
  {name: 'Page A', uv: 1500, pv: 2400, amt: 2000},
  {name: 'Page B', uv: 1330, pv: 2200, amt: 2800},
  {name: 'Page C', uv: 1233, pv: 1900, amt: 2000},
  {name: 'Page D', uv: 1400, pv: 2000, amt: 3200},
  {name: 'Page D', uv: 1100, pv: 3200, amt: 3500},
];


export default function MockLineChart() {
  return (
    <div className={styles.chartWrapper}>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8"  strokeWidth="5px" />
        <Line type="monotone" dataKey="pv" stroke="#8a2878" strokeWidth="8px" />
        <Line type="monotone" dataKey="amt" stroke="#149c1f" strokeWidth="8px" />
      </LineChart>
    </div>
  )
}