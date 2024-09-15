import { Plus } from 'lucide-react'

import Icon from './assets/icon.svg'
import letsStart from './assets/lets-start-illustration.svg'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <img src={Icon} alt="Logo do site" />
      <img src={letsStart} alt="Ilustração de nenhuma meta adicionada" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta.
      </p>
      <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight transition ease-in-out delay-75 hover:bg-violet-700 "
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  )
}
