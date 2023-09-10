import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import { ExpensesLists } from '@/shared/expenses'

const ExpensesList = () => {
    return (
        <Container className="h-full">
            <ExpensesLists />
            {/* <PageHeader pageTitle={'Payment'} /> */}
            {/* <ProjectListContent /> */}
        </Container>
    )
}

export default ExpensesList
