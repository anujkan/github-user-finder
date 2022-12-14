import { FaCode, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";

const User = () => {
	const { dispatch, user, loading, repos } = useContext(GithubContext);
	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;
	const params = useParams();

	useEffect(() => {
		dispatch({ type: "SET_LOADING" });
		const fetchData = async () => {
			const userData = await getUserAndRepos(params.login);
			dispatch({
				type: "GET_USER_AND_REPOS",
				payload: userData,
			});
		};
		fetchData();
	}, [dispatch, params.login]);

	if (!loading) {
		return (
			<>
				<div className="w-full mx-auto lg:w-10/12">
					<div className="mb-4">
						<Link to="/" className="btn btn-ghost">
							Back to Search
						</Link>
					</div>

					<div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
						<div className="custom-card-image mb-6 md:mb-0">
							<div className="rounded-xl shadow-xl card image-full">
								<figure>
									<img src={avatar_url} alt="Not Available" />
								</figure>
								<div className="card-body justify-end gap-0 p-5">
									<h2 className="card-title mb-0 text-white">{name}</h2>
									<p className="flex-grow-0 text-white">{login}</p>
								</div>
							</div>
						</div>

						<div className="col-span-2">
							<div className="mb-6">
								<h1 className="flex text-3xl card-title items-baseline">
									{name}
									<div className="ml-2 badge badge-success">{type}</div>
									{hireable && (
										<div className="mx-1 badge badge-info">Hirable</div>
									)}
								</h1>
								<p className="mt-4">{bio}</p>
								<div className="mt-6 card-actions">
									<a
										href={html_url}
										target="_blank"
										rel="noreferrer"
										className="btn btn-outline"
									>
										Visit Github Profile
									</a>
								</div>
							</div>
							<div className="w-full rounded-lg shadow-md bg-base-100 stats">
								{location && (
									<div className="stat">
										<div className="stat-title text-md">Location</div>
										<div className="text-lg stat-value">{location}</div>
									</div>
								)}
								{blog && (
									<div className="stat">
										<div className="stat-title text-md">Website</div>
										<div className="text-lg stat-value">
											<a
												href={`https://${blog}`}
												target="_blank"
												rel="noreferrer"
											>
												{blog}
											</a>
										</div>
									</div>
								)}
								{twitter_username && (
									<div className="stat">
										<div className="stat-title text-md">Twitter</div>
										<div className="text-lg stat-value">
											<a
												href={`https://twitter.com/${twitter_username}`}
												target="_blank"
												rel="noreferrer"
											>
												{twitter_username}
											</a>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaUsers className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Followers</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{followers}
							</div>
						</div>

						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaUserFriends className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Following</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{following}
							</div>
						</div>

						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaCode className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Public Repos</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{public_repos}
							</div>
						</div>

						<div className="stat">
							<div className="stat-figure text-secondary">
								<FaStore className="text-3xl md:text-5xl" />
							</div>
							<div className="stat-title pr-5">Public Gists</div>
							<div className="stat-value pr-5 text-3xl md:text-4xl">
								{public_gists}
							</div>
						</div>
					</div>
					{repos.length > 0 && <RepoList repos={repos} />}
				</div>
			</>
		);
	} else {
		return <Spinner />;
	}
};

export default User;
