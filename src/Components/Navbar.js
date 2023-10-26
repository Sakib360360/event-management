import Link from "next/link";
export const metadata = {
  title: 'Nav bar | Event mangment',
  description: 'Next Hero',
}

const NavBar = () => {
  const user = false;
  const navLinks = [
    {
        path:'/',
        title:'Home',
    },
    {
        path:'/about',
        title:'About',
    },
    {
        path:'/advisors',
        title:'Advisors',
    },
    {
        path:'/reviews',
        title:'Reviews',
    },
    {
        path:'/dashboard',
        title:'Dashboard',
    },
    {
        path:'/login',
        title:'Login',
    },
    {
        path:'/logout',
        title:'Log Out',
    },
]

  return (
    <nav className="flex items-center mt-4 justify-between container mx-auto">
       <div>
       <h1 className="text-3xl font-semibold"><span>Logo</span> Event Managent </h1>
       </div>
            <div>
            <ul className="flex items-center justify-center">
            {
                navLinks.map(({path, title}) => <li className="mx-2" key={path}>
                    <Link exact={path === "/"} activeClassName="text-blue-500" href={path}>{title}</Link>
                </li>)
            }
            </ul>
            </div>
            <div>
              <button>button</button>
            </div>
        </nav>
  );
};

export default NavBar;
