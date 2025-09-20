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
  const saved = localStorage.getItem("users");
  const users: User[] = saved ? JSON.parse(saved) : [];

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  console.log("회원가입 완료");
  return true;
};

// 로그인
export const login = (username: string, password: string) => {
  const saved = localStorage.getItem("users");
  if (!saved) return false;

  const users: User[] = JSON.parse(saved);

  const found = users.find(
    (u) => u.username === username && u.password === password
  );

  if (found) {
    localStorage.setItem("currentUser", JSON.stringify(found));
    console.log("로그인 완료");
    return true;
  }

  console.log("아이디 또는 비밀번호가 일치하지 않습니다.");
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
