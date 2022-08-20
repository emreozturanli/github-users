import { RiGitRepositoryLine,RiUserFollowFill } from 'react-icons/ri';
import { IoIosPeople } from 'react-icons/io';
import { BsCodeSlash } from 'react-icons/bs';
import { useAppSelector } from '../../app/hooks';

const Info = () => {
    const {user} = useAppSelector(state => state.users)
  return (
    <div className="max-w-3xl m-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-6">
        <div className=" bg-white shadow-lg flex  items-center gap-8 md:gap-4 rounded-md py-2 px-4">
            <RiGitRepositoryLine size={35} className='bg-orange-200 text-orange-600 rounded-full p-1'/>
            <div>
                <span className='font-bold'>{user.public_repos}</span>
                <p className='text-gray-400'>Repositories</p>
            </div>
        </div>
        <div className=" bg-white shadow-lg flex  items-center gap-8 md:gap-4 rounded-md py-2 px-4">
            <IoIosPeople size={35} className='bg-pink-200 text-pink-600 rounded-full p-1'/>
            <div>
                <span className='font-bold'>{user.followers}</span>
                <p className='text-gray-400'>Followers</p>
            </div>
        </div>
        <div className=" bg-white shadow-lg flex  items-center gap-8 md:gap-4 rounded-md py-2 px-4">
            <RiUserFollowFill size={35} className='bg-blue-200 text-blue-600 rounded-full p-1'/>
            <div>
                <span className='font-bold'>{user.following}</span>
                <p className='text-gray-400'>Following</p>
            </div>
        </div>
        <div className=" bg-white shadow-lg flex  items-center gap-8 md:gap-4 rounded-md py-2 px-4">
            <BsCodeSlash size={35} className='bg-green-200 text-green-600 rounded-full p-1'/>
            <div>
                <span className='font-bold'>{user.public_gists}</span>
                <p className='text-gray-400'>Gists</p>
            </div>
        </div>
       
    </div>
  )
}

export default Info