export const checkCooldown = () => {
	const cooldownData = JSON.parse(
		localStorage.getItem("requestCooldown") || "null"
	);
	if (!cooldownData) return false;
	const cooldownTimestamp = cooldownData;
	const currentTimestamp = Date.now();
	const differenceInMinutes = Math.floor(
		(currentTimestamp - Number(cooldownTimestamp)) / 60000
	); // dividing by 60000 to convert milliseconds to minutes
	if (differenceInMinutes <= 15) {
		return true;
	}
}