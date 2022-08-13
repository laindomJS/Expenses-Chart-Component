import data from '../../data/data.json';
import { BarChart, XAxis, Bar } from 'recharts';

export const DataVisualization = ():JSX.Element => {

    const softRed:string = "#ec775f";
    const customCyan:string = "#76b5bc";

    return (
        <BarChart width={420} height={250} data={data}>
            <XAxis dataKey="day" />
            <Bar dataKey="amount" fill={softRed} radius={5} />
        </BarChart>
    )
}