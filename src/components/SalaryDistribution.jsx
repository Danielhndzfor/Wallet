import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export default function SalaryDistribution({ data }) {
    const [distribution, setDistribution] = useState(data.distribution)
    const [weeklyIncome, setWeeklyIncome] = useState(data.weeklyIncome)
    const [accumulatedWeeks, setAccumulatedWeeks] = useState(data.accumulatedWeeks)

    useEffect(() => {
        const timer = setInterval(() => {
            setAccumulatedWeeks(weeks => weeks + 1)
        }, 60000) // Aumenta cada minuto para demostración. En una app real, sería semanal.

        return () => clearInterval(timer)
    }, [])

    const total = weeklyIncome * accumulatedWeeks

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

    return (
        <Card className="w-100 max-w-3xl mx-auto">
            <CardContent>
                <div className="mb-4 mt-4 text-center">
                    <p className="text-lg">Sueldo semanal: ${weeklyIncome}</p>
                    <p className="text-lg">Semanas acumuladas: {accumulatedWeeks}</p>
                </div>
                <div className="w-full h-80 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={distribution}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {distribution.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="text-xl font-bold">Total</p>
                        <p className="text-3xl font-bold">${total.toLocaleString()}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {distribution.map((item, index) => (
                        <div key={item.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                <span className="text-sm">{item.name}</span>
                            </div>
                            <span className="text-sm font-semibold">${item.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}