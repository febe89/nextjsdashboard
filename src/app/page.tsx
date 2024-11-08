import { Dashboard } from '@/components/dashboard/Dashboard'
import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid gap-4 p-4 grid-cols-[220px,_1fr]'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
