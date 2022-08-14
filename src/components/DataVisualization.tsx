import data from '../../data/data.json';
import { BarChart, XAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts';

// import { amountTooltip } from './amountTooltip';

export const DataVisualization = ():JSX.Element => {

    const softRed:string = "#ec775f";
    // const customCyan:string = "#76b5bc";
    
    return (
        <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="amount" fill={softRed} radius={4} />
            </BarChart>
        </ResponsiveContainer>
    )
}