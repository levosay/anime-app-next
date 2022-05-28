import axios from 'api/axios'

const makeRequest = async (config = {}) => {
  try {
    return await axios(config)
  } catch (error) {
    const code =
      error.code ||
      error.status ||
      (error.response && error.response.status) ||
      500;

    return {
      code: error.code,
      status: error.status,
      errorMessage: `${code}: ${error.message}`,
      ...error.response,
    }
  }
}

export default makeRequest
