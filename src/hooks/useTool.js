import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading/Loading";

const useTools = () => {
    // const [tools, setTools] = useState([]);

    // useEffect( () => {
    //     fetch('https://stormy-anchorage-56703.herokuapp.com/tool')
    //     .then(res => res.json())
    //     .then(data => setTools(data));
    // }, [])
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://stormy-anchorage-56703.herokuapp.com/tool').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(tools);
    return[tools];
}
export default useTools;