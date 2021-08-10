const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
const IMAGE_END_POINT =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/";

const request = async (url) => {
  const result = await fetch(url);
  switch (result.status) {
    case 200:
      return await result.json();
    case 404:
      throw new Error("데이터가 없습니다!");
    default:
      throw new Error("네트워크 오류!");
  }
};
const fetchAPI = {
  fetchRoot: async () => {
    return request(`${API_END_POINT}/`);
  },
  getByDirectoryID: async (id) => {
    return request(`${API_ENDPOINT}/${id}`);
  },
  getImageByPath: async (path) => {
    return request(`${IMAGE_END_POINT}/${path}`);
  },
};
export default fetchAPI;
