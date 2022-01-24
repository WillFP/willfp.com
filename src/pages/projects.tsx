import type { GetStaticPropsResult, NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'
import axios, { AxiosResponse } from 'axios';
import { env } from 'process';
import RepoCard, { Repository } from '../components/RepoCard'

interface ProjectsProps {
  repos: Repository[],
}

const Projects: NextPage<ProjectsProps> = (props: ProjectsProps) => {
  return (
    <PageWrapper>
      <h1 className='text-3xl font-extrabold font-sans mb-4'>My GitHub Repositories</h1>
      <div className='grid grid-cols-3 gap-4'>
        {props.repos.sort((a, b) => b.stargazers_count === a.stargazers_count ? b.forks_count - a.forks_count : b.stargazers_count - a.stargazers_count)
          .map(repo => <RepoCard repo={repo} key={repo.name} />)}
      </div>
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
    }).catch((error: any) => {
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