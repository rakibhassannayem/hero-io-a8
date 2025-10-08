// import useApps from "../hooks/useApps";
import HeroSection from "../components/HeroSection";
import TrandingApps from "../components/TrandingApps";

const Home = () => {
  // const { apps, loading, error } = useApps();

  return (
    <div>
      <HeroSection />
      <TrandingApps />
    </div>
  );
};

export default Home;
