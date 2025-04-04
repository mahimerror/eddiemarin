import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthContextProvider from "../context/authContext/AuthContextProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
// import StateContextProvider from "../context/StateContext/StateContextProvider";

const queryClient = new QueryClient();

function MainProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthContextProvider> */}
        {/* <StateContextProvider> */}
          <HelmetProvider>{children}</HelmetProvider>
        {/* </StateContextProvider> */}
      {/* </AuthContextProvider> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MainProvider;
