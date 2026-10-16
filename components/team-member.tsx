import Image from "next/image";
import type { CSSProperties } from "react";
import type { TeamMember as TeamMemberData } from "@/data/team";

type TeamMemberProps = {
  member: TeamMemberData;
};

export default function TeamMember({ member }: TeamMemberProps) {
  const cardStyle: CSSProperties = {
    display: "flex",
    minHeight: 260,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    border: "1px solid rgb(255 255 255 / 12%)",
    borderRadius: 22,
    background: "linear-gradient(145deg, rgb(255 255 255 / 8%), rgb(255 255 255 / 2%))",
  };
  const avatarStyle: CSSProperties = {
    display: "grid",
    width: 68,
    height: 68,
    placeItems: "center",
    overflow: "hidden",
    border: "1px solid rgb(255 255 255 / 18%)",
    borderRadius: 20,
    background: "#fff",
  };

  return (
    <article style={cardStyle}>
      <div style={avatarStyle} aria-hidden="true">
        <Image
          src={member.image}
          alt=""
          width={96}
          height={96}
          style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }}
        />
      </div>
      <div style={{ marginTop: 36, textAlign: "center" }}>
        <h2
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 750,
            letterSpacing: "-0.045em",
          }}
        >
          {member.role}
        </h2>
      </div>
    </article>
  );
}
