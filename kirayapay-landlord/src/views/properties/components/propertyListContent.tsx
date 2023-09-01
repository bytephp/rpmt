import { useEffect } from 'react'
import classNames from 'classnames'
import GridItem from './GridItem'
import ListItem from './ListItem'
import Spinner from '@/components/ui/Spinner'
import { getList, useAppDispatch, useAppSelector } from '@/views/properties/store'
// import { getList, useAppDispatch, useAppSelector } from '../store'

const ProjectListContent = () => {
    const dispatch = useAppDispatch()

    const loading = useAppSelector((state) => state.property.data.loading)
    const projectList = useAppSelector(
        (state) => state.property.data.property
    )
    console.log(projectList);
    
    const view = useAppSelector((state) => state.property.data.view)
    const { sort, search } = useAppSelector(
        (state) => state.property.data.query
    )

    useEffect(() => {
        dispatch(getList({ sort, search }))
    }, [dispatch, sort, search])

    return (
        <div
            className={classNames(
                'mt-6 h-full flex flex-col',
                loading && 'justify-center'
            )}
        >
            {loading && (
                <div className="flex justify-center">
                    <Spinner size={40} />
                </div>
            )}
            {view === 'grid' && projectList.length > 0 && !loading && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projectList.map((project) => (
                        <GridItem key={project.id} data={project} />
                    ))}
                </div>
            )}
            {view === 'list' &&
                projectList.length > 0 &&
                !loading &&
                projectList.map((project) => (
                    <ListItem key={project.id} data={project} />
                ))}
        </div>
    )
}

export default ProjectListContent
