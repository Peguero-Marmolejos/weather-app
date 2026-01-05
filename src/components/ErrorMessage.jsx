/**
 * ErrorMessage Component
 *
 * Displays an error message when input is incorrect or data cannot be fetched
 *
 * @param {string} error - Error message to be displayed
 * @param {Function} onDismiss - Function to clear error message upon dismissal
 */
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
