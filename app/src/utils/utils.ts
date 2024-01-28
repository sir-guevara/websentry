export const timeInSeconds = (seconds: number): number => {
    const now = new Date();
    const expirationInSeconds = seconds; //7 days expiration in seconds
    const expirationTimestamp =
      Math.floor(now.getTime() / 1000) + expirationInSeconds;
      return expirationTimestamp
}