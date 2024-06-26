import { signOut } from 'next-auth/react'

const LogoutButton = ({ children }) => {
  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/" });
  };

  return <button onClick={handleLogout}>{children}</button>;
};

export default LogoutButton
