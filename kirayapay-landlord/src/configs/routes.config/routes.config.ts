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
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
    {
        key: 'properties',
        path: '/properties',
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
    {
        key: 'maintenance',
        path: '/maintenance',
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
    {
        key: 'leases',
        path: '/leases',
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
    {
        key: 'tenants',
        path: '/tenants',
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
    {
        key: 'financial.payments',
        path: '/payments',
        component: lazy(() => import('@/views/messages/chat')),
        authority: [],
    },
]