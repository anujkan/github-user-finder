import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
	const navigate = useNavigate();
	const handleViewUserProfile = () => {
		navigate(`/user/${login}`);
	};

	return (
		<div
			onClick={handleViewUserProfile}
			className="card shadow-md compact side bg-base-100 hover:bg-base-300 cursor-pointer"
		>
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							<img src={avatar_url} alt="profile" />
						</div>
					</div>
				</div>
				<div>
					<h2 className="card-title">{login}</h2>
					<h3 className="block mt-1 text-base-content text-opacity-40">
						Visit Profile
					</h3>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
