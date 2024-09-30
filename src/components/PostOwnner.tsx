"use client";
import { PostOwnnerProps } from "@/libs/types";
import React from "react";
import { useState, useEffect } from "react";
export default function PostOwnner({
  ImagePath,
  username,
  commentTitle,
  likes
}) {
  const [itOk, setItOk] = useState(false);

  useEffect(() => {
    if (likes > 0) {
      setItOk(true);
    } else {
      setItOk(false);
    }
  })
  return <div> 
  <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/Yosita.png"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">Yosita Satiman 660610788</span>
  </div>

  <span>{commentTitle}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">{likes}</span>
  </div>
  <hr className="m-0 border" />
</div>
</div>;
}
