export default function useConfig(hostname) {
  let config;
  if (hostname === 'localhost') {
    config = {url: 'http://localhost:3001', device: 'desktop', env: 'development', isMobile: false }
  } else if (/10./.test(hostname)) {
    config = {url: 'http://' + hostname + ':3001', device: 'mobile', env: 'development', isMobile: true }
  } else if (hostname === 'yourdomain.com') {
    config = {url: 'https://yourdomain.com', device: 'desktop', env: 'production', isMobile: false }
  } else if (hostname === 'm.yourdomain.com') {
    config = {url: 'https://m.yourdomain.com', device: 'mobile', env: 'production', isMobile: true }
  }
  return config;
};