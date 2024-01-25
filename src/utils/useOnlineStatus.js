import {useEffect,useState} from 'react'

//own custom hook
//recommended to use in react project while creating custom hook -> to start useComponent 

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
