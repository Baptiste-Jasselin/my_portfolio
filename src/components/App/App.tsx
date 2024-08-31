import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyStack from '../Main/MyStack';
import Cv from '../Main/Cv';
// import Navbar from '../Navbar/Navbar';

const Expériences = [
  {
    date: 'avr. 24',
    title: 'Développeur Web Product Owner - École O’clock, téléprésentiel',
    description:
      'Conception, développement et déploiement d’un produit minimum viable (MVP). Le but du projet est de proposer aux professionnels de santé une solution leur permettant de communiquer à l’écrit grâce à une application de messagerie instantanée qui respecte les normes françaises de gestion et de sécurisation des données de santé. Travail collaboratif (équipe de 5 développeurs) en suivant la méthode agile SCRUM sur une durée de 1 mois.',
    formation: false,
  },
  {
    date: 'juil. 23',
    title: 'Stage d’observation développement web - Bexter, Toulon',
    description: '',
    formation: false,
  },
  {
    date: 'oct. 24 - juin. 26',
    title:
      'Titre professionnel Concepteur Développeur d’Appdtcation Niveau 6 (RNCP37873) - École O’clock téléprésentiel',
    description:
      '- Conception et développement frontend et backend - Méthodologies et outils (SCRUM, TDD, CI/CD avec GitHub Actions, Docker, Kubernetes) - 1 mois de projet professionnalisant',
    formation: true,
  },
  {
    date: 'oct. 23 - avr. 24',
    title:
      '            Titre professionnel Développeur Web et Web Mobile Niveau 5 (RNCP37674)',
    description:
      '- 3 mois de socle (HTML, CSS, JavaScript, SQL) - 1 mois de spécialisation back-end - 1 mois de projet professionnalisant',
    formation: true,
  },
];

function App() {
  return (
    <div className="py-20 mx-auto flex flex-col items-center gap-16">
      {/* <Navbar /> */}
      <Header />
      <main className="flex flex-col gap-8 mx-5 md:mx-10 lg:w-3/5">
        <MyStack />
        <Cv experiences={Expériences} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
