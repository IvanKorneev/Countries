import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import {Button} from "../Button/Button";
import Info from "../Info";
import {useDispatch, useSelector} from "react-redux";
import {selectDetails} from "../../store/details/details-selector";
import {useEffect} from "react";
import {loadCountryByName} from "../../store/details/details-action";
import Spinner from "../Spinner";

const Details = () => {
    const {name} = useParams();
    const dispatch = useDispatch();
    const {currentCountry, error, status} = useSelector(selectDetails)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(loadCountryByName(name))
    }, [name, dispatch])


    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {status==='loading'&& <Spinner/>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
export default Details;