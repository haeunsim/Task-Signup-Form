"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="layout">
      <div className="content">
        <div className="layout-flex">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <div className="text-sm text-gray-500">회원가입 폼</div>
          <Button variant="outline">
            <Link href="/main">회원가입 완료</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
