import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = (props) => {
	return (
		<>
			<UserSearch />
			<UserResults />
		</>
	);
};

export default Home;
