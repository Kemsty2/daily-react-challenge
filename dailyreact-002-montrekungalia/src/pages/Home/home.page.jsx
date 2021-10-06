import ArrayRight from "../../assets/imgs/002-arrow-right.svg";
import withDefaultWrapper from "../../components/Layouts/DefaultWrapper/default-wrapper-layout";

const HomePage = () => {
  return (
    <main>
      <p>Collection Noblesse</p>
      <p>
        Découvrez avec cette collection la noblesse africaine sous toutes ses
        facettes et les titres qui l'ont incarnée historiquement. La noblesse
        est à votre portée
      </p>
      <button>
        <span>Découvrer la collection</span>
        <img src={ArrayRight} alt="arrow-right" />
      </button>
    </main>
  );
};

export default withDefaultWrapper(HomePage);
