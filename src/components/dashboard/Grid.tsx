import { ActivityGraph } from './ActivityGraph'
import { RecentTransaction } from './RecentTransaction'
import { StatCards } from './StatCards'
import  UsageRadar  from './UsageRadar'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransaction/>
    </div>
  )
}
