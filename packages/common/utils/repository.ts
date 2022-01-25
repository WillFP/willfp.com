export type Repository = {
    name: string,
    description: string,
    full_name: string,
    stars: number,
    forks: number,
    owner: string,
    url: string,
    language: {
        name: string,
        color?: string,
    },
}