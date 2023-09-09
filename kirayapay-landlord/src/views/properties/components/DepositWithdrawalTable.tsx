import { useMemo } from 'react'
import DataTable from '@/components/shared/DataTable'
import type { TableQueries } from '@/@types/common'

type DepositWithdrawalTableProps = {
    data: any
    loading?: boolean
    tableData?: TableQueries
}

const DepositWithdrawalTable = ({
    data,
    loading,
    tableData,
}: DepositWithdrawalTableProps) => {
    const columns = useMemo(
        () => [
            {
                header: 'Transaction Id',
                accessorKey: 'id',
            },
            {
                header: 'Date',
                accessorKey: 'date',
            },
            {
                header: 'Amount',
                accessorKey: 'amount',
            },
            {
                header: 'Status',
                accessorKey: 'status',
            },
        ],
        []
    )
    return (
        <DataTable
            columns={columns}
            data={data}
            loading={loading}
        />
    )
}

export default DepositWithdrawalTable
