import { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { IRepos } from '../../types/interfaces'
import Pie from './Pie'
import Bar from './Bar'

 export interface IData{
  label: string
  value: number
}

const Charts = () => {
  const [repos, setRepos] = useState<IRepos[]>([])
  const { user } = useAppSelector(state => state.users)
  const { repos_url } = user

  const getRepos = async () => {
    const res = await fetch(repos_url + '?per_page=100');
    const data = await res.json();
    setRepos(data)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getRepos() }, [user])

  // pie chart data (languages)
  const languages = repos?.reduce((total: any, repo) => {
    const lang = repo.language
    if (lang !== null) {
      if (!total[lang]) {
        total[lang] = { label: lang, value: 1 }
      }
      else {
        total[lang] = {
          ...total[lang],
          value: total[lang].value + 1
        }
      }
    }
    return total
  }, {})

  const pieData : IData[] | any = Object.values(languages).sort((a: any, b: any) => {
    return b.value - a.value
  }).slice(0, 5)

  // bar chart data (stars)
const stars = repos?.reduce((total: any, repo)=>{
  total[repo.name]={label: repo.name, value: repo.stargazers_count}
  return total
},{})

const barData : IData[] | any = Object.values(stars).sort((a : any, b: any)=>{
   return b.value - a.value
  }).slice(0, 5)

  console.log(barData)



  return (
    <section className="max-w-3xl m-auto  px-4 mb-6 ">
      <Pie data={pieData}/>
      <Bar data={barData}/>
    </section>
  )
}

export default Charts