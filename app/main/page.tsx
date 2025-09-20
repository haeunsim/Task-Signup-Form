"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, logout } from "@/lib/storage";

export default function Main() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = getUser();
    if (!userData) {
      router.push("/auth/login");
    } else {
      setUser(userData);
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <div className="layout">
      <div className="flex flex-col items-center justify-center pt-60">
        <h6 className="text-xl font-bold text-memoment mb-10">로그인 성공!</h6>

        <h4 className="text-6xl font-bold text-memoment">
          환영합니다~ {user?.nickname}님
        </h4>

        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 mt-[100px] cursor-pointer hover:text-gray-700"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
