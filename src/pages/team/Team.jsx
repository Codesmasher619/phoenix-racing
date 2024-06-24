import Header from "/src/components/Header";
import TeamNavigator from "./TeamNavigator";
import Footer from "/src/components/Footer";

function Team() {
  return (
    <>
      <Header />
      <div className="mt-20">
        <TeamNavigator
          textColor="text-blue-800"
          borderColor="border-blue-800"
          hoverTextColor="hover:text-white"
          hoverBorderColor="hover:bg-blue-800"
          activeTextColor="text-white"
          activeBgColor="bg-blue-800"
        />
      </div>
        <Footer />
    </>
  );
}

export default Team;
