import Head from "next/head";
import CoinFlip from "../components/CoinFlip/CoinFlip";
import ThemeToggle from "../components/ThemeToggle";
import DisableDevtool from 'disable-devtool';

DisableDevtool();
export default function Home() {

  return (
    <>
      <Head>
        <title>Flip It!</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Flip/Toss a Coin in a minimal way"/>
        <meta name="keywords" content="Flip, Toss, Coin, heads, head, tails, tail"/>
        
      </Head>
      <ThemeToggle />
      <p className="text-gray-800 dark:text-red-400 text-5xl font-bold flex justify-center py-4">Flip-it</p>
      <CoinFlip/>
      <div className="flex items-center justify-center relative py-4 dark:text-gray-200"><a href="https://github.com/royalnavghan" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-95 dark:text-red-400">{'</>'} with 🚶 by Santhosh</a></div>
    </>
  );
}
