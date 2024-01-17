import { Header, Hero, Users, SignUp, TooltipCmp } from "./components/index";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useAppSelector, useAppDispatch } from "./redux/store";
import { Loader } from "./components/Loader/Loader";
import { useEffect } from "react";
import { resetError } from "./redux/mainSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return () => {
      dispatch(resetError());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users />
        <SignUp />
      </main>
      <TooltipCmp />
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
}

export default App;
