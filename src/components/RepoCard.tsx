import { FC } from 'react'

export interface Repository {
    name: string,
    stargazers_count: number,
    language: string
}

const RepoCard: FC<{ repo: Repository }> = props => {
    return (
        <div className=''>
            {props.repo.name}
        </div>
    )
}

export default RepoCard