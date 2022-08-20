import { MdOutlineSearch } from 'react-icons/md';
const Search = () => {
    return (
        <section>
            <div className="max-w-xl m-auto px-4">
                <div className="w-full py-2 px-2 flex items-center gap-3 bg-white rounded-md">
                    <MdOutlineSearch size={25}/>
                    <input
                    className=" flex-1 text-md leading-6 placeholder-slate-400 border-none outline-none"
                    type="search"
                    placeholder="Search for a Github user..."
                    />
                    <button 
                    className='bg-blue-600 rounded-md py-1 px-4 text-md text-white transition-all duration-500 hover:cursor-pointer hover:bg-blue-400 '

                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Search