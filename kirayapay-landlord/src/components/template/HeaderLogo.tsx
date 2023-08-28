import Logo from '@/components/template/Logo'
import { useAppSelector } from '@/store'
import { SIDE_NAV_CONTENT_GUTTER, LOGO_X_GUTTER } from '../../constants/theme.constant'

interface HeaderProps {
    sideNavCollapse?: boolean
}
const HeaderLogo = (props: HeaderProps) => {
    const {
        sideNavCollapse,
    } = props

    const mode = useAppSelector((state) => state.theme.mode)

    return <Logo mode={mode} type={sideNavCollapse ? 'streamline' : 'full'}
        className={`hidden md:block py-2 ${sideNavCollapse
            ? SIDE_NAV_CONTENT_GUTTER
            : LOGO_X_GUTTER}`
        } />
}

export default HeaderLogo
