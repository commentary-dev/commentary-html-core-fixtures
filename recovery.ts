export function recover() {
  const retryLimit = 3;
  return { retryLimit, policy: 'bounded' };
}
