import type { GetStaticPropsResult, NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'
import axios, { AxiosResponse } from 'axios';
import { env } from 'process';
import RepoCard from '../components/RepoCard'
import { Repository } from '@willfp/common/utils/repository'

interface ProjectsProps {
  repos: Repository[],
}

const Projects: NextPage<ProjectsProps> = (props: ProjectsProps) => {
  return (
    <PageWrapper>
      <h1 className='text-3xl font-extrabold font-sans mb-4'>My GitHub Repositories</h1>
      <div className='grid grid-cols-3 gap-4'>
        {props.repos.sort((a, b) => b.stars === a.stars ? b.forks - a.forks : b.stars - a.stars)
          .map(repo => <RepoCard repo={repo} key={repo.name} />)}
      </div>
    </PageWrapper>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProjectsProps>> {
  const repositories: Repository[] = []

  console.log(`${process.env.API_ROUTE}`)
  await axios.get(`${process.env.API_ROUTE}/v1/getRepos`, {
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`
    }
  }).then((response: AxiosResponse) => {
    repositories.push(...response.data)
  }).catch((error: any) => {
    console.error(error)
  })

  return {
    props: {
      repos: repositories
    }
  }
}

export default Projects