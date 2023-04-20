// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {vaccinationCoverageDetails} = props

  return (
    <div className="bar-container">
      <h1 className="title">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={vaccinationCoverageDetails}
          margin={{
            top: 5,
          }}
          height={300}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="dose1"
            name="Dose1"
            radius={[10, 10, 0, 0]}
            fill="#5a8dee"
            barSize="10%"
          />
          <Bar
            dataKey="dose2"
            name="Dose2"
            radius={[10, 10, 0, 0]}
            fill="#f54394"
            barSize="10%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
