import MainContainer from "../components/MainContainer"
import HomeCard from "../components/HomeCard"
import lionImage from '../assets/lion-header.jpg'
import FeedAnimal from '../assets/berimakan.jpg'
import InteractioAnimal from '../assets/interaksi.jpg'
import Playground from '../assets/wahana.jpg'

const HomePage = () => {
  return (
    <MainContainer>
      <header className="h-screen relative">
        <h1 className="w-28 sm:w-56 md:w-96 xl:w-fit text-5xl sm:text-6xl md:text-8xl mb-2 font-amatic font-black text-white absolute top-20 sm:top-40 left-5 ">
          Welcome to Zoo Feed !
        </h1>
        <img
          className="w-full h-full object-cover object-top"
          src={lionImage}
          alt="Dashboard"
        />
      </header>
      <section className="py-10 px-5 space-y-10">
        <HomeCard
          title={"Feed Animals"}
          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum doloremque eligendi nesciunt ipsa itaque quaerat recusandae non nulla repellendus nam, iste vel ipsam nisi quam, minima velit assumenda error saepe eveniet labore, totam pariatur sequi maiores vitae. Neque animi molestias excepturi quaerat, recusandae aut laboriosam corporis, aliquam ad sit voluptas."}
          image={FeedAnimal}
          imgDesc={"feed animal"}
        />
        <HomeCard
          title={"Interact With Animals"}
          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum doloremque eligendi nesciunt ipsa itaque quaerat recusandae non nulla repellendus nam, iste vel ipsam nisi quam, minima velit assumenda error saepe eveniet labore, totam pariatur sequi maiores vitae. Neque animi molestias excepturi quaerat, recusandae aut laboriosam corporis, aliquam ad sit voluptas."}
          image={InteractioAnimal}
          imgDesc={"interact with animals"}
        />
        <HomeCard
          title={"Play Rides"}
          content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum doloremque eligendi nesciunt ipsa itaque quaerat recusandae non nulla repellendus nam, iste vel ipsam nisi quam, minima velit assumenda error saepe eveniet labore, totam pariatur sequi maiores vitae. Neque animi molestias excepturi quaerat, recusandae aut laboriosam corporis, aliquam ad sit voluptas."}
          image={Playground}
          imgDesc={"play rides"}
        />
      </section>
    </MainContainer>
  );
};

export default HomePage;
