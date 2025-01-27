import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`

  const classes = classnames(
    'w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded-none dark:text-white',
    {
      'bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700':
        !status,
      'border-black dark:border-slate-100': value && !status,

      'absent shadowed bg-neutral-500 dark:bg-slate-500 text-white border-slate-400 dark:border-slate-500':
        status === 'absent',
      'correct shadowed bg-green-500 text-white border-green-500':
        status === 'correct',
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'present',

      'cell-fill-animation': isFilled,

      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
