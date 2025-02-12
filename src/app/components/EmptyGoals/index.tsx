import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { DialogTrigger } from '../ui/dialog'
import Icon from '/logo.png'
import RocketLaunchIllustration from '../../assets/lets-start-illustration.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex justify-center items-center gap-1 ">
        <img src={Icon} alt="Logo do site" />
        <span className="font-bold text-xl text-zinc-400">Goals</span>
      </div>
      <img
        src={RocketLaunchIllustration}
        alt="IIlustração de uma mulher controlando um lançamento de um foguete através de um controle remoto"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button className="transition ease-in delay-50">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
