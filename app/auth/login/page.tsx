"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="layout">
      <div className="content">
        <div className="layout-flex">
          <h2 className="text-2xl font-bold">로그인</h2>
          <div className="text-sm text-gray-500">로그인 폼</div>

          <Button variant="outline">
            <Link href="/auth/signup">회원가입 이동</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
