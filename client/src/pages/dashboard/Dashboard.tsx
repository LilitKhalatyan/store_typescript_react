import DashboardLineChart from "./DashboardLineChart";
import Button from "../../common/Button";
import DashboardPieChart from "./DashboardPieChart";
import "../../styles/App.css"
import "../../assets/styles/dashboard.css"

const Dashboard = () => {

  // const [selectDate, selectedDate] = useState(null)

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-top">
        <h1>DASHBOARD</h1>
        <div className="dashboard-date">
          <input type="date" id="" className="dashboard-date-from" />
          <p>-</p>
          <input type="date" id="" className="dashboard-date-to"/>
        </div>
      </div>
      <div className="dashboard-block1">
          <DashboardLineChart/>
          <DashboardLineChart/>
          <DashboardLineChart/>
          <DashboardLineChart/>
      </div>
      <div className="dashboard-block2">
          <div className="dashboard-income">
            <p>INCOME</p>
            <div className="dashboard-line-chart-wrapper">
              <div className="dashboard-line-chart-btns">
                <Button text="Day" className="block2-chart1-button"/>
                <Button text="Month" className="block2-chart1-button"/>
                <Button text="Year" className="block2-chart1-button"/>
              </div>
              <DashboardLineChart/>
            </div>
          </div>
        <div className="dashboard-budget">
          <p>DAILY BUDGET</p>
          <DashboardPieChart/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard