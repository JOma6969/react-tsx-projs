import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface GitHubProfile {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  login: string;
  following: number;
  message: string;
}

const GithubProfileFInder: React.FC = () => {
  const [user, setUser] = useState<GitHubProfile | null>(null);
  const [search, setSearch] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<string>("JOma6969");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const res = await fetch(`https://api.github.com/users/${searchedUser}`);
      const data = await res.json();
      console.log(data);
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [searchedUser]);

  const searchUser = () => {
    if (!search.trim()) return;
    setSearchedUser(search);
    setSearch("");
  };

  const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if(key.key === "Enter") {
      searchUser();
    }
  }

  if(loading) return (
    <div className="fixed bg-black/50 h-screen w-screen flex items-center justify-center">Loading...</div>
  );

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl lg:text-5xl my-10 font-bold">
        GitHub Profile Finder.
      </h1>
      <div className="flex items-center w-[90%] md:w-[600px] gap-4 px-7 md:h-[60px] h-14 rounded-[999px] shadow-lg">
        <input
          type="text"
          placeholder="enter username..."
          className="w-full placeholder:capitalize outline-none"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <IoSearchOutline className="text-gray-700 cursor-pointer" size={30} onClick={searchUser} />
      </div>
      {user?.message !== "Not Found" ? (
        <div className="w-full">
          <div className="sm:w-120 w-[80%] py-5 px-5 mx-auto my-10 rounded-2xl border-2">
            <img
              src={user?.avatar_url}
              className="size-30 rounded-full block mx-auto"
              alt=""
            />
            <p className="font-bold text-xl text-center mt-4">
              {user?.name} || {user?.login}
            </p>
            <div className="grid md:grid-cols-3 max-md:gap-3 justify-items-center mt-10">
              <p className="w-[80%]">Public Repos: {user?.public_repos}</p>
              <p className=" w-[80%]">Following: {user?.following}</p>
              <p className=" w-[80%]">Followers: {user?.followers}</p>
            </div>
          </div>
        </div>
      ) : <p className="absolute transform w-full text-center -translate-1/2 top-1/2 left-1/2">No such user exist!. Kindly, <span onClick={() => setSearchedUser("JOma6969")} className="cursor-pointer underline hover:text-blue-300 transition-all duration-500">refresh</span></p>}
    </div>
  );
};

export default GithubProfileFInder;
