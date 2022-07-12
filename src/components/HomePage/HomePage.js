import Controls from "../Controls";
import List from "../List";
import {useNavigate} from "react-router-dom";
import Card from "../Card";
import {useDispatch, useSelector} from "react-redux";

import {
    selectCountriesInfo,
    selectVisibleCountries
} from "../../store/countries/countries-selectors";
import {loadCountries} from "../../store/countries/countries-actions";
import {useEffect} from "react";
import Spinner from "../Spinner";
import {selectSearch} from "../../store/controls/controls-selectors";

const HomePage = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    const countries = useSelector(state => selectVisibleCountries(state, {search}));
    const {status, error, qty} = useSelector(selectCountriesInfo);



    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);
    return (
        <>
            <Controls/>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <Spinner/>}
            {status === 'received' && (<List>
                {countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>)}

        </>
    );
};
export default HomePage;
