import Cv from './MainContents/Cv';
import MyStack from './MainContents/MyStack';

function Main() {
  return (
    <main className="flex flex-col gap-8 w-3/5">
      <MyStack />
      <Cv />
    </main>
  );
}

export default Main;
