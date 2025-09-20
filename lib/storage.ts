export interface User {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  birth: string;
  gender: string;
  nickname: string;
}

// User 저장
export const saveUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
  console.log("회원가입 완료");
  return true;
};

// 로그인
export const login = (username: string, password: string) => {
  const saved = localStorage.getItem("user");
  if (!saved) return false;

  const user: User = JSON.parse(saved);
  if (user.username === username && user.password === password) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    console.log("로그인 완료");
    return true;
  }
  return false;
};

// 현재 User 정보
export const getUser = () => {
  const user = localStorage.getItem("currentUser");
  console.log("현재 User 정보", user);

  return user ? JSON.parse(user) : null;
};

// 로그아웃
export const logout = () => {
  localStorage.removeItem("currentUser");
  console.log("로그아웃 완료");
  return true;
};
