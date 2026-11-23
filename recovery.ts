export function recover() {
  const retryLimit = 2;
  return { retryLimit, policy: 'bounded' };
}
