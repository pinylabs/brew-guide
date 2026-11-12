/** A guide's facts as the home shows them on its cards: ratio, grind and time, each only when it is set. */
export function guideFacts(data: {
	ratio?: string;
	grind?: string;
	time?: string;
}): Array<[label: string, value: string]> {
	const facts: Array<[string, string | undefined]> = [
		["ratio", data.ratio],
		["grind", data.grind],
		["time", data.time],
	];
	return facts.filter((fact): fact is [string, string] => Boolean(fact[1]));
}
