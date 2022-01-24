import { FC } from 'react'
import axios, { AxiosResponse } from 'axios'
import Link from 'next/link'

export interface Repository {
    name: string,
    description: string,
    full_name: string,
    stargazers_count: number,
    forks_count: number,
    language: string,
    html_url: string,
    owner: {
        login: string
    }
}

const colors = new Map<string, string>()

axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
    .then((res: AxiosResponse) => {
        Object.keys(res.data).forEach(key => {
            colors.set(key, res.data[key].color)
        })
    })

const RepoCard: FC<{ repo: Repository }> = props => {
    const repo = props.repo
    const color = colors.get(repo.language)

    return (
        <Link href={repo.html_url} passHref={true}>
            <div className='rounded-md border-2 py-2 px-4 hover:scale-105 transition-all ease-out duration-150 hover:cursor-pointer'>
                <h1 className='font-sans text-xl font-bold'>{repo.full_name}</h1>
                <h2 className='font-sans text-xs pb-2 font-extralight'>{repo.description}</h2>
                {
                    repo.language ?
                        <div className='flex flex-row'>
                            <svg width='18' height='20'>
                                <circle r='6' cx='6' cy='14' fill={color} />
                            </svg>
                            <h1 className='font-sans text-lg font-light'>{repo.language}</h1>
                        </div>
                        : <div />
                }

                <div className='flex flex-row'>
                    <p className='pr-1 font-sans text-sm font-extralight'>Stars: {repo.stargazers_count}</p>
                    <p className='pr-1 font-sans text-sm font-extralight'>Forks: {repo.forks_count}</p>
                </div>
            </div>
        </Link>
    )
}

export default RepoCard