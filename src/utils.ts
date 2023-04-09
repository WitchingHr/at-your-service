export const checkCooldown = () => {
	const cooldownData = JSON.parse(
		localStorage.getItem("requestCooldown") || "null"
	);
	if (!cooldownData) return null;
	const cooldownTimestamp = cooldownData;
	const currentTimestamp = Date.now();
	const differenceInMinutes = Math.floor(
		(currentTimestamp - Number(cooldownTimestamp)) / 60000
	); // dividing by 60000 to convert milliseconds to minutes
	if (differenceInMinutes <= 15) {
		return differenceInMinutes;
	}
}

import { useSyncExternalStore } from 'react';

export function useWindowDimensions() {
    // the 3rd parameter is optional and only needed for server side rendering
    return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback: () => void) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
    return window.innerWidth;
}
