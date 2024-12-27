import { Box } from '@chakra-ui/react'
import { Suspense, lazy, useEffect, useState } from 'react'
import { APP_CONSTANTS } from './constants/app'
import { GlobalStateContext } from './GlobalStateContext/GlobalState'


const Unauthenticated = lazy(() => import("./appcomponents/Unauthenticated"));
const Authenticated = lazy(()=> import("./appcomponents/Authenticated"))

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [state, setState] = useState(
    localStorage.getItem("state")
      ? JSON.parse(localStorage.getItem("state"))
      : {}
  );
  const dispatch = (incoming) => {
    setState((prev) => ({ ...prev, ...incoming }));
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const deleteTokenAndKickUserOut = () => {
      sessionStorage.removeItem(APP_CONSTANTS.token);
    };

    const token = sessionStorage?.getItem(APP_CONSTANTS.token);

    if (token) {
      const decoded = jwtDecode(token);
      const expiryDate = new Date(decoded?.exp * 1000);

      setState({ ...state, user: decoded });
      return new Date() > expiryDate
        ? deleteTokenAndKickUserOut()
        : setAuthorized(true);
    }
    return deleteTokenAndKickUserOut();
  }, []);
   console.log(state,"iio")

  return (
    <Suspense fallback={<p></p>}>
      {authorized ? (
        <GlobalStateContext.Provider value={{ state, setState, dispatch }}>
          <Authenticated />{" "}
        </GlobalStateContext.Provider>
      ) : (
        <Unauthenticated />
      )}
    </Suspense>
  )
}

export default App
