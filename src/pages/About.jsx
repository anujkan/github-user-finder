const About = (props) => {
	return (
		<>
			<h1 className="text-6xl mb-4">Github Finder</h1>
			<p className="mb-4 text-xl font-light">
				A React app to search GitHub profiles and see profile details.
				<br />
				This App also contains an About and 404 not found page.
				<br />
				<br />
				<a
					className="hover:text-white underline"
					href="https://github.com/anujkan/github-user-search"
					target="_blank"
					rel="noreferrer"
				>
					Click here
				</a>{" "}
				to visit the Github page to get the source code.
			</p>
			<p className="text-lg mt-7 text-gray-400">
				Version <span className="text-white">1.0.4</span>
			</p>
		</>
	);
};

export default About;
