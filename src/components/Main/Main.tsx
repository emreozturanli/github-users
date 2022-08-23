import { useAppSelector } from "../../app/hooks"
import Charts from "../Charts/Charts"
import Info from "./Info"
import UserInfo from "./UserInfo"
import spinner from '../../assets/spinner.gif'

const Main = () => {
  const { user,loading,error } = useAppSelector(state => state.users)

  if(loading){
    return <img  className="block m-auto" src={spinner} alt="loading-spinner" />
  }

  return (
    <main>
      {
        user.login ?
        <>
          <Info />
          <UserInfo />
          <Charts />
        </>
        :
        <h2 className="text-center text-red-500 font-bold">{error}</h2>
      }
    </main>
  )
}

export default Main