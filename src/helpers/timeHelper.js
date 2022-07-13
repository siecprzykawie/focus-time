const addLeadingZero = (num) => num > 9 ? num : `0${num}`;

export const secondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const hoursStr = addLeadingZero(hours);
    const minutesStr = addLeadingZero(minutes);
    const secondsStr = addLeadingZero(secondsLeft);

    if (hours > 0) {
        return `${hoursStr}:${minutesStr}:${secondsStr}`;
    }
    if (minutes > 0) {
        return `${minutesStr}:${secondsStr}`;
    }
    return `${secondsStr}`;
}
