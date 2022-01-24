import type { GetStaticPropsResult, NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'
import "react-gh-repo-cards/dist/index.css";
import axios, { AxiosResponse } from 'axios';
import { env } from 'process';
import RepoCard, { Repository } from '../components/RepoCard'

interface ProjectsProps {
  repos: Repository[],
}

const Projects: NextPage<ProjectsProps> = (props: ProjectsProps) => {
  return (
    <PageWrapper>
      <h1 className='text-3xl font-extrabold font-sans'>My GitHub Repositories</h1>
      {props.repos.map(repo => <RepoCard repo={repo} key='what' />)}
      {props.repos.sort(repo => repo.stargazers_count).map((repo) => repo.name).join(", ")}
    </PageWrapper>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsProps>> {
  const repositories: Repository[] = []
  const jank = ["orgs/Auxilor", "users/WillFP"]

  for (const user of jank) {
    await axios.get(`https://api.github.com/${user}/repos`, {
      headers: {
        'Authorization': `token ${env.GITHUB_TOKEN}`
      }
    }).then((response: AxiosResponse) => {
      repositories.push(...response.data)
    })
      .catch((error: any) => {
        console.error(error)
      })
  }

  return {
    props: {
      repos: repositories
    }
  }
}

export default Projects