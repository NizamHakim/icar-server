export enum TicketDistanceStatus {
	NOTHING = "NOTHING",
	CLOSE = "CLOSE",
	ARRIVED = "ARRIVED",
}

export function getTicketDistanceStatus(
	distance: number
): TicketDistanceStatus {
	if (distance < 100) {
		return TicketDistanceStatus.ARRIVED;
	} else if (distance < 300) {
		return TicketDistanceStatus.CLOSE;
	} else {
		return TicketDistanceStatus.NOTHING;
	}
}
