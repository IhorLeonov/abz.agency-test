import { GetSection } from "../GetSection/GetSection";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { PostSection } from "../PostSection/PostSection";
import "./App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GetSection />
        <PostSection />
      </main>
    </>
  );
}

export default App;
