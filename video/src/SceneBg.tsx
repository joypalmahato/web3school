import { AbsoluteFill, Img, staticFile } from "remotion";
import { COLORS } from "./constants";

/** Full-bleed flower-field background + frosted overlay for every scene */
export const SceneBg = () => (
  <AbsoluteFill style={{ zIndex: 0 }}>
    <Img
      src={staticFile("bg.png")}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    {/* Frosted white overlay — keeps image visible but ensures text contrast */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: COLORS.overlay,
        backdropFilter: "blur(2px)",
      }}
    />
    {/* Soft green glow centre */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,150,105,0.07) 0%, transparent 70%)",
      }}
    />
  </AbsoluteFill>
);
