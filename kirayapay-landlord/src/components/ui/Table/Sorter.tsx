import { useConfig } from '../ConfigProvider'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

export type SorterProps = { sort?: boolean | 'ASC' | 'DESC' }

const Sorter = ({ sort }: SorterProps) => {
    const { themeColor, primaryColorLevel } = useConfig()

    const color = `text-${themeColor}-${primaryColorLevel}`

    const renderSort = () => {
        if (typeof sort === 'boolean') {
            return <FaSort />
        }

        if (sort === 'ASC') {
            return <FaSortUp className={color} />
        }

        if (sort === 'DESC') {
            return <FaSortDown className={color} />
        }

        return null
    }

    return <div className="inline-flex">{renderSort()}</div>
}

export default Sorter
