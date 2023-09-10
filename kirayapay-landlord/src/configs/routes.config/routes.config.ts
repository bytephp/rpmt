import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'dashboard',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'messages',
        path: '/messages',
        component: lazy(() => import('@/views/messages/chatList')),
        authority: [],
    },
    {
        key: 'properties',
        path: '/properties',
        component: lazy(() => import('@/views/properties/propertiesList')),
        authority: [],
    },
    {
        key: 'properties.add',
        path: '/properties/add',
        component: lazy(() => import('@/views/properties/propertiesAdd')),
        authority: [],
    },
    {
        key: 'properties.unit.show',
        path: '/properties/:propertyId/unit/:unitId',
        component: lazy(() => import('@/views/properties/propertyUnitShow')),
        authority: [],
    },

    {
        key: 'properties.show',
        path: '/properties/:propertyId',
        component: lazy(() => import('@/views/properties/propertiesShow')),
        authority: [],
    },
    {
        key: 'maintenance',
        path: '/maintenance',
        component: lazy(() => import('@/views/maintenance/maintenanceList')),
        authority: [],
    },
    {
        key: 'leases',
        path: '/leases',
        component: lazy(() => import('@/views/leases/leasesList')),
        authority: [],
    },
    {
        key: 'leases.show',
        path: '/leases/:id',
        component: lazy(() => import('@/views/leases/leasesShow')),
        authority: [],
    },
    {
        key: 'tenants',
        path: '/tenants',
        component: lazy(() => import('@/views/tenants/tenantList')),
        authority: [],
    },
    {
        key: 'financial.payments',
        path: '/payments',
        component: lazy(() => import('@/views/payments/paymentList')),
        authority: [],
    },
    {
        key: 'financial.expenses',
        path: '/expenses',
        component: lazy(() => import('@/views/expenses/expensesList')),
        authority: [],
    }
]