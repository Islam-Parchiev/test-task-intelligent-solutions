import { Root } from '../../types';
import styles from './styles.module.scss';
const Info = ({ name, primaryLanguage, languages, stargazers, licenseInfo }: Root) => {
    return (
        <div className={styles.Index}>
            <div className={styles.Inner}>
                <div className={styles.Top}>
                    <h2 className={styles.Title}>{name ? name : "None"}</h2>
                    <div className={styles.Info}>
                        <div className={styles.MainLanguage}>{primaryLanguage!=null ? primaryLanguage.name : "None"}</div>
                        <span className={styles.Stars}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 15.77L16.18 19.5L14.54 12.47L20 7.74L12.81 7.13L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77Z" fill="#FFB400" />
                            </svg>
                            {stargazers.totalCount ? stargazers.totalCount : "None"}
                        </span>
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <ul className={styles.List}>
                        {languages ? languages.edges.map((language) => (
                            <li className={styles.ListItem}>
                                {language.node.name}
                            </li>
                        )) : 'Error'
                        }
                    </ul>
                    <span className={styles.License}>{licenseInfo != null ? licenseInfo.name : 'none'} license</span>
                </div>
            </div>
            {/* : */}
            {/* <h4 className={styles.Subtitle}>Выберите репозиторий</h4> */}

        </div>
    )
}

export default Info