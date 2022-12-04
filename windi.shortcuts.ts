import { Shortcut } from 'windicss/types/interfaces'

export default {
  container: 'w-full mx-auto p-6',
  'bg-middleworld': 'bg-gradient-to-br from-black  via-slate-900 to-teal-900',
  scale: 'transform transition-transform scale-103 disabled:scale-100',
  'scale-big': 'transform transition-transform scale-150 disabled:scale-100',
  icon: 'hover:scale transition-colors cursor-pointer'
} as { [p: string]: Shortcut } | undefined
