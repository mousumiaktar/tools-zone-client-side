import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading/Loading";

const useTools = () => {
    // const [tools, setTools] = useState([]);

    // useEffect( () => {
    //     fetch('http://localhost:5000/tool')
    //     .then(res => res.json())
    //     .then(data => setTools(data));
    // }, [])
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(tools);
    return[tools];
}
export default useTools;