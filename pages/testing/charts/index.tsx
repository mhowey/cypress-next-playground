import MockLineChart from "@root/components/MockLineChart";
import styles from "../../../styles/Charts.module.css";
import MockAreaChart from "@root/components/MockAreaChart";
import MockPieChart from "@root/components/MockPieChart";
export default function ChartsPage() {
  return (
    <div>
      <h1>Charts Page</h1>
      <div className={styles.charts}>
        <MockLineChart />
        <MockAreaChart />
        <MockPieChart />
      </div>
    </div>
  );
}
