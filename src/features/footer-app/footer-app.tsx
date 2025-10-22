import { Badge } from '@/shared/ui/badge/badge'
import tg from '@/shared/assets/svg/tg.svg'

export const FooterApp = () => {
  return (
    <>
      <div>Разработано на платформе Noxer</div>
      <Badge>
        <img src={tg} alt='tg' />
        noxerai_bot
      </Badge>
    </>
  )
}
