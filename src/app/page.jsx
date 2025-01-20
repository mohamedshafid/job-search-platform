import Header from "@/components/Header";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default async function Home() {

  return (
    <div>
      <hr className="mt-2" />
      <Header />
      <div className="px-2 lg:flex flex-row mt-10 gap-20">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
