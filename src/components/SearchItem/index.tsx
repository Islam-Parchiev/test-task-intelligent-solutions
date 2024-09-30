import { gql } from '@apollo/client';
import { client } from '../../main';
import { TSearchItem } from '../../types';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../redux/store';
import { addRepo } from '../../redux/slices/oneRepoSlice';

const SearchItem = ({ name, primaryLanguage, forkCount, stargazers, updatedAt, owner }: TSearchItem) => {
  const dispatch = useAppDispatch();
  const GET_ONE_REPO = gql`
   query GetOneRepo($owner:String!, $name:String!){
    repository(owner:$owner name:$name) {
      name,
      stargazers {
               totalCount
             },
      licenseInfo {
            name
            nickname
          }
      languages(first:3) {
        edges {
          node {
            id,
            name
          }
        }
      }
      primaryLanguage {
               id,
               name
             }
  }
  }
  `;
  const getRepoByName = () => {
    client.query({
      query: GET_ONE_REPO,
      variables: {
        owner: owner.login,
        name: name
      },
    })
      .then(result => {
        // Обработайте результаты запроса
        console.log("res", result.data.repository);
        dispatch(addRepo({...result.data.repository}));
      }).catch((e) => {
        console.log(e);
      }).finally(() => {
        // setLoading(false);
      });
  }

  return (
    <li className={styles.Index} onClick={() => getRepoByName()}>
      <span className={styles.Repository}>
        {name}
        {owner.login}
      </span>
      <span className={styles.Language}>
        {primaryLanguage && primaryLanguage.name ? primaryLanguage.name : 'none'}
      </span>
      <span className={styles.Forks}>
        {forkCount}
      </span>
      <span className={styles.Stars}>
        {stargazers.totalCount}
      </span>
      <time dateTime={updatedAt}>{updatedAt ? updatedAt.slice(0, 10) : "none"}</time>
    </li>
  )
}

export default SearchItem