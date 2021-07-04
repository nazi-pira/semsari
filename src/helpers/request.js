export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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

export const handleResponse = async (response) => {
  if (response.ok) {
    if (response.status === 401) {
      // logout
      console.log('Unauthorized');
    }
    return response.json() // await response.json()
  } else {
    throw new Error(response.message || response.statusText)
  }
}
