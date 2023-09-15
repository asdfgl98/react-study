const { createProxyMiddleware } = require("http-proxy-middleware");

// Proxy 미들웨어 서버 생성
// --> 클라이언트 주소를 일시적으로 네이버api 주소와 같게 만들기 위함
module.exports = function (app) {
  app.use(
    // /v1 => api endPoint(API에 접근할 수 있는 마지막 주소)
    // 주의사항 : 각각의 api 마다 endpoint가 다르기 때문에 api에서 확인 필요
    createProxyMiddleware("/v1", {
      // 바꾸어지는 주소값(target)
      target: "https://openapi.naver.com",
      // 출처를 바꾸는 행위를 허용
      changeOrigin: true,
    })
  );
};