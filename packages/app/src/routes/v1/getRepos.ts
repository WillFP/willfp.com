import { Request, Response } from "express";
import axios, { AxiosResponse } from 'axios'

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

export const getRepos = async (req: Request, res: Response) => {
    const repositories: Repository[] = []
    const jank = ["orgs/Auxilor", "users/WillFP"]

    for (const user of jank) {
        await axios.get(`https://api.github.com/${user}/repos`, {
            headers: {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            }
        }).then((response: AxiosResponse) => {
            repositories.push(...response.data)
        }).catch((error: any) => {
            console.error(error)
        })
    }

    res.status(200)
        .send({
            repos: repositories
        })
}