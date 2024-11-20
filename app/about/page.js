import Container from "@/app/components/ui/Container";
import Header from "@/app/components/about/Header";
import Profile from "@/app/components/about/Profile";
import Skills from "@/app/components/about/Skills";
import CallToAction from "@/app/components/about/CallToAction";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden py-20">
      <Container>
        <Header />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Profile />
          <div className="space-y-8">
            <Skills />
            <CallToAction />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
