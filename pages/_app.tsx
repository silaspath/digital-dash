import "@/styles/globals.css";
import Sidebar from "../components/Sidebar";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
