export function getApiOffsetFromUrl(urlString: string | null) {
  const match = urlString === null ? null : urlString.match(/offset=(\d+)/);
  let result;
  if (match) {
    const offset = parseInt(match[1]);
    result = offset;
  } else {
    result = null;
  }
  return result;
}

export default getApiOffsetFromUrl;
