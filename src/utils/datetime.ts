// since prisma does not support TIME data type
// replace date with 1970-01-01 UTC for DB comparison

export const datetime = {
	dateToTime: (date: Date): Date => {
		const dummyDate = "1970-01-01";
		const timeString = date.toTimeString().split(" ")[0];
		return new Date(dummyDate + "T" + timeString);
	},
	stringToTime: (timeString: string): Date => {
		const dummyDate = "1970-01-01";
		return new Date(dummyDate + "T" + timeString);
	},
	timeToDate: (time: Date): Date => {
		const now = new Date();
		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			time.getHours(),
			time.getMinutes(),
			time.getSeconds()
		);
	},
};
