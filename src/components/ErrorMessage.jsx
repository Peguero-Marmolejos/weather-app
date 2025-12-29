function ErrorMessage({ error, onDismiss }) {
	return (
		<div className="alert alert-danger alert-dismissable fade show m-3">
			<strong>Uh-Oh!</strong>
			{error}
			<button type="button" className="btn-close" onClick={onDismiss}></button>
		</div>
	);
}
export default ErrorMessage;
