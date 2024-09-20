import SearchResults from '../SearchResults';
import styles from './styles.module.scss';
import { RootState, useAppSelector } from '../../redux/store';

const Main = () => {
  // const [find, setFind] = useState(false);
  const repos = useAppSelector((state: RootState) => state.repositories);
  return (
    <main className={styles.Main}>
      {repos.loading ? "loading" : repos.items.length > 0 ? <SearchResults /> : <div className={styles.Wrapper}>
        <h1 className={styles.Title}>
          Добро пожаловать
        </h1></div>}
    </main>
  )
}

export default Main