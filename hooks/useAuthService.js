import useAlert from "./useAlert";
import useFetch from "./useFetch";

const useAuthService = () => {
  const { loginRequest } = useFetch();
  const waitingResponse = useAlert();

  const signIn = waitingResponse(async (email, password, navigation) => {
    const user = await loginRequest({ email, password });

    navigation.navigate("Home");
  });

  const signOut = () => {
    throw new Error("Method not implemented");
  };

  return { signIn, signOut };
};

export default useAuthService;
