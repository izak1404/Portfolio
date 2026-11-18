import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#60a5fa",
          borderRadius: "6px",
          border: "1px solid #262626",
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        {">_"}
      </div>
    ),
    {
      ...size,
    }
  );
}