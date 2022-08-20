import { useAppSelector } from '../../app/hooks'
import { WiDirectionUpRight } from 'react-icons/wi';
import { ImOffice, ImLocation2, ImLink } from 'react-icons/im';


const UserInfo = () => {
    const { user } = useAppSelector(state => state.users)
    return (
        <div className="max-w-3xl m-auto  px-4 mb-6 ">
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md p-4 shadow-lg'>
                <div className='flex gap-4 items-center pb-4 border-b-2 md:border-b-0 md:border-r-2 md:pr-4'>
                    <img
                        src={user.avatar_url}
                        alt={user.name}
                        width={70} height={70}
                        className='object-cover rounded-full'
                    />
                    <div className='flex-1'>
                        <h3 className='font-bold'>{user.name}</h3>
                        <p className='text-gray-500'>@{user.login}</p>
                    </div>
                    <a href={user.html_url} target='blank'><WiDirectionUpRight size={40} className='animate-bounce'/></a>
                </div>
                <div className='md:pl-4 flex flex-col gap-4' >
                    <div className='flex items-center gap-10'>
                        <ImOffice size={20} className='text-blue-500'/>
                        <p>{user.company ? user.company : 'Open to work'}</p>
                    </div>
                    <div className='flex items-center gap-10'>
                        <ImLocation2 size={20} className='text-blue-500'/>
                        <p>{user.location}</p>

                    </div>
                    <div className='flex items-center gap-10'>
                        <ImLink size={20} className='text-blue-500'/>
                        <a href={user.blog}>{user.blog}</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserInfo