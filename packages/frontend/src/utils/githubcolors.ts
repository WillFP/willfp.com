import axios, { AxiosResponse } from 'axios'

const colors = new Map<string, string>()

axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')
    .then((res: AxiosResponse) => {
        Object.keys(res.data).forEach(key => {
            colors.set(key, res.data[key].color)
        })
    })


export default function getColor(language: string): string | undefined {
    return colors.get(language)
}