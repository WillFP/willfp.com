import { FC } from 'react'
import Link from 'next/link'
import { Repository } from '@willfp/common/utils/repository'

const RepoCard: FC<{ repo: Repository }> = props => {
    const repo = props.repo

    return (
        <Link href={repo.url} passHref={true}>
            <div
                className=
                'rounded-md border-2 drop py-2 px-4 hover:border-teal-500 hover:scale-105 transition-all ease-out duration-150 hover:cursor-pointer'
            >
                <h1 className='font-sans text-xl font-bold'>{repo.full_name}</h1>
                <h2 className='font-sans text-xs pb-2 font-extralight'>{repo.description}</h2>
                {
                    repo.language ?
                        <div className='flex flex-row'>
                            <svg width='18' height='20'>
                                <circle r='6' cx='6' cy='14' fill={repo.language.color} />
                            </svg>
                            <h1 className='font-sans text-lg font-light'>{repo.language.name}</h1>
                        </div>
                        : <div />
                }

                <div className='flex flex-row'>
                    <p className='pr-1 font-sans text-sm font-extralight'>Stars: {repo.stars}</p>
                    <p className='pr-1 font-sans text-sm font-extralight'>Forks: {repo.forks}</p>
                </div>
            </div>
        </Link>
    )
}

export default RepoCard