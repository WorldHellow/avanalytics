import http from "./httpService";

const apiEndpoint = `/videos`;

export function getVideos() {
  console.log(apiEndpoint);
  return http.get(apiEndpoint);
}

export function getVideo(id) {
  return http.get(videoUrl(id));
}
