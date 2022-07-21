import {
  NavLink as RouterNavLink,
  Routes,
  Route,
  useNavigate,
  NavLinkProps,
  Navigate,
} from 'react-router-dom';
import clsx from 'clsx';
import LogoutIcon from '@heroicons/react/outline/LogoutIcon';

import MarketPlace from './pages/MarketPlace/MarketPlace';
import Profile from './pages/Profile';
import { useWeb3Auth } from './services/web3auth';
import Item from './pages/MarketPlace/sections/Item';
import Items from './pages/MarketPlace/sections/Items';

function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        clsx(
          className,
          'hover:text-primary text-lg font-semibold',
          isActive && props.to !== '#' ? 'text-secondary' : 'text-primary',
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
            <NavLink to="/marketplace">Marketplace</NavLink>
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
            <Route index element={<Navigate to="/marketplace" />} />
            <Route path="marketplace" element={<MarketPlace />}>
              <Route index element={<Items />} />
              <Route path=":itemId" element={<Item />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
