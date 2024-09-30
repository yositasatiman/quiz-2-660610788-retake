"use client";
import { ReplyProps } from "@/libs/types";
import { useState, useEffect } from "react";

export default function Reply({ ImagePath, username, replyTitle, likes, commentTitle}) {
  const [itOk, setItOk] = useState(false);

  useEffect(() => {
    if (likes > 0) {
      setItOk(true);
    } else {
      setItOk(false);
    }
  })
  return <div>
  <div className="d-flex gap-2 my-2 ps-5">
  <img
    src={ImagePath}
    width="48"
    height="48"
    className="rounded-circle"
    style={{ objectFit: "cover" }}
  />
  <div
    className="rounded rounded-3 p-2"
    style={{ backgroundColor: "#E5E7EB" }}
  >
    <span className="fw-semibold">{username}</span>
    <br />
    <span>{replyTitle}</span>
    <div className="d-flex align-items-center gap-1">
      <img src="/like.svg" width={20}></img>
      <span className="text-muted">{likes} คน</span>
    </div>
  </div>
</div>
</div>;
}
