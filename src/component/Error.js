import { useRouteError } from "react-router-dom";

//useRouterError - hooks help and gives detail information of error
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops !!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
