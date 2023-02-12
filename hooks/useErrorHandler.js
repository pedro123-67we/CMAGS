const useErrorHandler = () => {
  /**
   * @description
   * Handle the possible erros during the executio no the function passed as a
   * parameter, in case of a error the function will take the error message and
   * will throw it.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   * @throws Returns the error resulted of the execution of the function
   */
  const funcErrorWrapper = func => {
    return async (...args) => {
      try {
        return await func(...args);
      } catch (error) {
        const errMsg =
          error?.response?.data.msg || "Something went wrong, try again later.";
        throw new Error(errMsg);
      }
    };
  };

  return funcErrorWrapper;
};

export default useErrorHandler;

//que hiciste ayer?
//subio el pull request
//realizo pull request en el backend y front
//checar problemas con lo de axios

//que vas a hacer hoy?
//corregisr lo del package e ayudar con error de axios
//agregar cosas faltantyes y completar la parte web y del backend
//

//Tienes problemas?
//con lo de axios y lo del package
//no no tiene problenaas
//axios
