import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
