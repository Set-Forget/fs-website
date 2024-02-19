import { useState, useCallback, useEffect } from "react";
import { API_URL } from "../utils/constants";

export const useUser = ({ id, email, name, access_token }) => {
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const registerUser = useCallback(async () => {
    if (!id || !email || !name) return;
    const url = `${API_URL}?userId=${id}&email=${email}&name=${name}&token=${access_token}`;
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      setIsUserRegistered(true);
    } catch (error) {
      console.error(error);
    }
  }, [id, email, name, access_token]);

  const checkUser = useCallback(async () => {
    if (!id) return;
    const url = `${API_URL}?action=getUserById&userId=${id}`;
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      const resJson = await response.json();
      return resJson;
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    const fetchCheckUser = async () => {
      const value = await checkUser();
      if (!value) return;
      const { userIdExists } = value;
      setIsUserRegistered(userIdExists);
      if (!userIdExists) {
        await registerUser();
      } 
        
    };
    fetchCheckUser();
  }, [id, registerUser, checkUser, setIsUserRegistered]);

  return { isUserRegistered };
};
