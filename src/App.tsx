import Confetti from 'react-confetti';
const App = () => {  
  return (
    <div className="relative overflow-hidden backgroundImage min-h-screen flex flex-col items-center justify-center ">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={30}
        recycle={true}
      />
        <div className="flex flex-col items-center justify-center w-5/12 h-screen ml-[60%] bg-gradient-to-r from-blue-200 via-yellow-300 to-orange-200 text-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-10 text-6xl rounded-lg shadow-lg text-center">
            <p>Overrrrrrrrrrrrr!</p>
        </div>
      <footer className='absolute bottom-2'>
        Made with Love 💖 ~ <a href="https://github.com/Hallcoder" className="border-b border-blue-300 animate-bounce">Zesta</a>
      </footer>
    </div>
  );
};

export default App;
