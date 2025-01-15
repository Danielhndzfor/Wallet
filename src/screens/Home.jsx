import SalaryDistribution from '../components/SalaryDistribution'
import NavBar from '@/components/NavBar'

export default function Home() {
    // Estos datos son de ejemplo, deberías reemplazarlos con datos reales de tu aplicación
    const salaryData = {
        weeklyIncome: 1000,
        accumulatedWeeks: 5,
        distribution: [
            { name: 'Emergencias', value: 1000, goal: 5000, frequency: 'weekly' },
            { name: 'Ahorro', value: 1500, goal: 10000, frequency: 'monthly' },
            { name: 'Personal', value: 2000, goal: 8000, frequency: 'weekly' },
            { name: 'Extras', value: 500, goal: 2000, frequency: 'monthly' },
        ]
    }

    return (
        <>
            <NavBar />
            <div className=" bg-gray-50 m-3">
                <main className="container">
                    <h1 className="text-3xl font-bold mb-6">Mi Cartera</h1>
                    <SalaryDistribution data={salaryData} />
                </main>
            </div>
        </>
    )
}