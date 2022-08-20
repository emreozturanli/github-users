import { useAppSelector } from "../../app/hooks"
import Charts from "../Charts/Charts"
import Info from "./Info"
import UserInfo from "./UserInfo"

const Main = () => {
  const { user } = useAppSelector(state => state.users)
  return (
    <main>
      {
        user.login &&
        <>
          <Info />
          <UserInfo />
          <Charts />
        </>
      }
    </main>
  )
}

export default Main