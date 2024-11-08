'use client'
import { FiEye } from 'react-icons/fi'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150
  }
]

const UsageRadar = () => {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

  return (
    <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
      <div className='p-4'>
        <h3 className='flex items-center gap-1.5 font-medium'>
          <FiEye /> Usage
        </h3>
      </div>
      <div className='h-64 px-4'>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis />
            <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default UsageRadar
