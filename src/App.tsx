import { Dialog } from '@radix-ui/react-dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import { Loader2 } from 'lucide-react'
import { EmptyGoals } from './components/EmptyGoals'
import { CreateGoal } from './components/CreateGoal'
import { WeeklySummary } from './components/WeeklySummary'

export function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  return (
    <Dialog>
      {data.summary.total > 0 ? (
        <WeeklySummary summary={data.summary} />
      ) : (
        <EmptyGoals />
      )}
      <CreateGoal />
    </Dialog>
  )
}
