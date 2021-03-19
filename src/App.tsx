import { ToastContainer } from "react-toastify";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <Header />
      <TaskList />
    </>
  );
}
