import { Request, Response } from "express";
import axios, { AxiosResponse } from 'axios'
import { Repository } from '@willfp/common/utils/repository'

let cache: Repository[] = []

interface RawRepository {
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

export const getRepos = async (req: Request, res: Response) => {
    const raw: RawRepository[] = []
    const jank = ["orgs/Auxilor", "users/WillFP"]

    if (cache.length !== 0) {
        res.status(200)
            .send({
                repos: cache
            })

        return
    }

    for (const user of jank) {
        await axios.get(`https://api.github.com/${user}/repos`, {
            headers: {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            }
        }).then((response: AxiosResponse) => {
            raw.push(...response.data)
        }).catch((error: any) => {
            console.error(error)
        })
    }

    const repositories: Repository[] = []

    for (const repo of raw) {
        repositories.push({
            name: repo.name,
            description: repo.description,
            full_name: repo.full_name,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            owner: repo.owner.login,
            url: repo.html_url,
            language: {
                name: repo.language,
                color: colors.get(repo.language)
            }
        })
    }

    cache = repositories
    res.status(200)
        .send({
            repos: repositories
        })

    setTimeout(() => cache = [], 600_000)
}