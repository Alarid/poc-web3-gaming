import {
  NavLink as RouterNavLink,
  Routes,
  Route,
  useNavigate,
  NavLinkProps,
} from 'react-router-dom';
import clsx from 'clsx';
import LogoutIcon from '@heroicons/react/outline/LogoutIcon';

import Dashboard from './pages/MarketPlace';
import Profile from './pages/Profile';
import { useWeb3Auth } from './services/web3auth';

function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        clsx(
          className,
          'hover:text-primary text-lg font-semibold',
          isActive ? 'text-primary' : 'text-secondary',
        )
      }
    />
  );
}

export default function AuthenticatedApp() {
  const navigate = useNavigate();
  const { logout, login } = useWeb3Auth();

  return (
    <div className="h-screen bg-dark flex flex-col">
      <nav className="flex justify-center items-baseline p-8 border-b-2 border-b-primary bg-gray w-screen shadow-xl">
        <h1 className="text-3xl text-primary text-center font-semibold">
          POC Web3 Gaming 🕹
        </h1>
        <ul className="flex gap-8 text-xl mx-auto">
          <li>
            <NavLink to="/">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
        <NavLink
          to="#"
          onClick={() =>
            logout().then(() => {
              navigate('/');
              login();
            })
          }
        >
          Logout <LogoutIcon className="w-6 h-6 inline-block" />
        </NavLink>
      </nav>
      <div className="flex flex-1">
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
