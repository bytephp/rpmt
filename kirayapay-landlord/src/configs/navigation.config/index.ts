import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'messages',
        path: '/messages',
        title: 'Messages',
        translateKey: 'nav.messages',
        icon: 'chat',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'properties',
        path: '/properties',
        title: 'Properties',
        translateKey: 'nav.properties',
        icon: 'property',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'maintenance',
        path: '/maintenance',
        title: 'Maintenance',
        translateKey: 'nav.maintenance',
        icon: 'maintenance',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'leases',
        path: '/leases',
        title: 'Leases',
        translateKey: 'nav.leases',
        icon: 'leases',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'tenants',
        path: '/tenants',
        title: 'Tenants',
        translateKey: 'nav.tenants',
        icon: 'tenants',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    
    {
        key: 'financial',
        path: '',
        title: 'Financial',
        translateKey: 'nav.financial.financial',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'financial.payments',
                path: '/payments',
                title: 'Payments',
                translateKey: 'nav.financial.payments',
                icon: 'payments',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
