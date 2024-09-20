/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, TextField } from '@mui/material';
import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';
import { GET_REPOSITORIES } from '../SearchResults';
import { useQuery } from '@apollo/client';
import { addItems, setLoading } from '../../redux/slices/repositoriesSlice';
import { useAppDispatch } from '../../redux/store';
const Header = () => {
    const [search, setSearch] = useState<string | null>("");
    const dispatch = useAppDispatch();
    const { loading, data, error } = useQuery(GET_REPOSITORIES, {
        variables: {
            query: search,
            count: 8,
        },
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(e);
        //@ts-ignore
        const formData = new FormData(e.target);
        setSearch(String(formData.get('repo')))
        console.log(data);
    }
    if (loading) {
        dispatch(setLoading(true))
    } else if (!loading && !error) {
        dispatch(addItems(data.search.nodes));
        dispatch(setLoading(false));
    } else {
        console.log("Daun");
    }

    return (
        <header className={styles.Header}>
            <div className={styles.Container}>

                <div className={styles.Wrapper}>
                    <form action="/" className={styles.Form} onSubmit={(e) => handleSubmit(e)}>
                        <TextField
                            name="repo"
                            id="outlined-basic"
                            label="Outlined"
                            fullWidth
                            variant="outlined"
                            className={styles.Input}
                        />
                        <Button variant="contained" type='submit'>Искать</Button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header