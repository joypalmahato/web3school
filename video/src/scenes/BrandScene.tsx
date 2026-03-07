import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS, TRANSITION } from "../constants";

export const BrandScene = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneOpacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const logoSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 200 },
    durationInFrames: 40,
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.6, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  const taglineSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const taglineY = interpolate(taglineSpring, [0, 1], [30, 0]);
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  const subtextSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const subtextOpacity = interpolate(subtextSpring, [0, 1], [0, 1]);

  const glowPulse = interpolate(frame, [0, 75, 150], [0.6, 1, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const badgeScale = interpolate(badgeSpring, [0, 1], [0.5, 1]);
  const badgeOpacity = interpolate(badgeSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: sceneOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Green glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(16,185,129,${0.08 * glowPulse}) 0%, transparent 65%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo icon */}
      <div
        style={{
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
          marginBottom: 36,
          width: 120,
          height: 120,
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: `0 0 60px rgba(16,185,129,0.5)`,
        }}
      >
        <Img
          src={staticFile("logo.svg")}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Wordmark */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          fontFamily: FONTS.heading,
          fontSize: 172,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: COLORS.white,
          lineHeight: 1,
        }}
      >
        Web3School
      </div>

      {/* Divider */}
      {(() => {
        const lineProgress = spring({
          frame: frame - 30,
          fps,
          config: { damping: 200 },
          durationInFrames: 25,
        });
        const lineWidth = interpolate(lineProgress, [0, 1], [0, 480]);
        return (
          <div
            style={{
              margin: "36px 0",
              height: 2,
              width: lineWidth,
              backgroundColor: COLORS.primary,
              borderRadius: 2,
            }}
          />
        );
      })()}

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          fontFamily: FONTS.heading,
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: COLORS.primary,
          textAlign: "center",
        }}
      >
        From confusion to irreplaceable.
      </div>

      {/* Sub-descriptor */}
      <div
        style={{
          opacity: subtextOpacity,
          fontFamily: FONTS.body,
          fontSize: 56,
          fontWeight: 400,
          color: COLORS.muted,
          marginTop: 24,
          letterSpacing: "0.01em",
          textAlign: "center",
        }}
      >
        AI-powered Web3 career discovery
      </div>
    </AbsoluteFill>
  );
};
