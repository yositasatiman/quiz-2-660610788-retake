import Image from "next/image";
import styles from "./page.module.css";
import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white" 
      >
        {/* Post Owner Example
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

          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div> */}

        <PostOwnner
          ImagePath ="/profileImages/Yosita.png"
          username ="Yosita Satiman 660610788"
          commentTitle="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likes={888} ></PostOwnner>

        {/* Comment Example 
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">Lisa</span>
            <br />
            <span>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">999 คน</span>
            </div>
          </div>
        </div> */}

        {/* Reply Example
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">หมาน้อย</span>
            <br />
            <span>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted"> </span>
            </div>
          </div>
        </div>*/} 

        <Comment
          ImagePath = "/profileImages/lisa.jpg"
          username = "Lisa"
          commentTitle = "จริงค่า"
          likes = "555"></Comment>

        <Reply
          ImagePath = "/profileImages/puppy.jpg"
          username = "หมาน้อย"
          replyTitle = "จริงด้วยค้าบบบบบบบบ"
          likes = ""></Reply>

        <Reply
        ImagePath = "/profileImages/popcat.png"
        username = "Cat Meme"
        replyTitle = "ลิซ่าาาาาาา Rockstar"
        likes = "20"></Reply>

        {/* map-loop render Comment component here */}

        <Comment
          ImagePath = "/profileImages/charliebrown.jpg"
          username = "Charlie Brown"
          commentTitle = "บ้าไปแล้ว"
          likes = "100"></Comment>
      </div>
    </div>
  );
}
