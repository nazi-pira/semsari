export const authHeader = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user && user.token) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`
    };
  } else {
    return { 'Content-Type': 'application/json' };
  }
}

export const parseQuery = (queryParams) => {
  const uri = new URL('http://www')
  Object.keys(queryParams).forEach((key) => {
    uri.searchParams.set(key, queryParams[key]);
  })
  return uri.search
}