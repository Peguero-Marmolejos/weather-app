function LoadingSpinner() {
	const message = ["L", "O", "A", "D", "I", "N", "G", ".", ".", ".", ".", "."];
	const animate = message.map((letter, index) => {
		return (
			<span
				key={index}
				className="bounce-char"
				style={{ animationDelay: `${index * 0.05}s` }}>
				{letter}
			</span>
		);
	});

	return (
		<div className="loading-spinner-overlay">
			<p className="loading-text">{animate}</p>
			<div className="spinner-border text-primary loading-spinner"></div>
		</div>
	);
}

export default LoadingSpinner;
