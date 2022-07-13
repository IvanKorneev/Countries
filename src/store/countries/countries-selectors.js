export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
});
export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, {search = '', region = ''}) => {
    console.log(1111, search, region);
    return state.countries.list.filter(
        country => (
            country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
        )
    )
};



