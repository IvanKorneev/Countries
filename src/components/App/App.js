import Header from "../Header";
import {Main} from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import NotFound from "../NotFound";
import Details from "../Details";
import HomePage from "../HomePage";



const App = () => {
    return (
        <>
            <>
                <Header />
                <Main>
                    <Routes>
                        <Route exact path="/" element={
                            <HomePage />
                        } />
                        <Route path="/country/:name" element={<Details />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Main>
            </>
        </>
    )
}
export default App;