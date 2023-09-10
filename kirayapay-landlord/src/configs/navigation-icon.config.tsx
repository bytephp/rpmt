import {
    HiOutlineHome,
    HiOutlineWrenchScrewdriver,
    HiOutlineHomeModern,
    HiOutlineChatBubbleLeftRight,
    HiOutlineKey,
    HiOutlineClipboardDocumentList,
    HiOutlineWallet
} from 'react-icons/hi2'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <HiOutlineHome />,
    chat: <HiOutlineChatBubbleLeftRight />,
    property: <HiOutlineHomeModern />,
    maintenance: <HiOutlineWrenchScrewdriver />,
    leases: <HiOutlineClipboardDocumentList />,
    tenants: <HiOutlineKey />,
    payments: <HiOutlineWallet />,
    expenses: <HiOutlineWallet />,
}

export default navigationIcon
