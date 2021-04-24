import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';
import styles from '../styles/app.module.scss';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value="Eduardo">
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}
