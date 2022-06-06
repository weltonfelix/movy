export default function debounce<T extends unknown[]>(waitTime: number = 700) {
  let debouncePromise: number;

  return (callback: (...args: T) => void) => {
    clearTimeout(debouncePromise);
    debouncePromise = setTimeout(callback, waitTime);
  };
}
