import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { useUser } from "../hooks/useUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localData = localStorage.getItem("userData");
    return localData ? JSON.parse(localData) : "";
  });

  const fetchUserData = useCallback(async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) return;
    const data = await response.json();
    return data;
  }, []);

  useEffect(() => {
    if (!user?.access_token || user?.id) return;
    const fetchData = async () => {
      const userData = await fetchUserData(user?.access_token);
      if (!userData) return;
      sessionStorage.setItem("id", userData.id);
      setUser((prev) => ({ ...prev, ...userData }));
    };
    fetchData();
  }, [user?.access_token, fetchUserData, user?.id]);

  const { isUserRegistered } = useUser(user);

  useEffect(() => {
    setUser((prev) => ({ ...prev, isUserRegistered: isUserRegistered }));
  }, [isUserRegistered, user.id]);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
