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

  // Logo scale entrance
  const logoSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 200 },
    durationInFrames: 40,
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.6, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  // Tagline slide up
  const taglineSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const taglineY = interpolate(taglineSpring, [0, 1], [30, 0]);
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  // Subtext
  const subtextSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const subtextOpacity = interpolate(subtextSpring, [0, 1], [0, 1]);

  // Glow pulse
  const glowPulse = interpolate(frame, [0, 75, 150], [0.6, 1, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Badge entrance
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
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(99,102,241,${0.07 * glowPulse}) 0%, transparent 65%)`,
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
          marginBottom: 32,
          width: 96,
          height: 96,
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: `0 0 40px rgba(99,102,241,0.4)`,
        }}
      >
        <Img
          src={staticFile("logo.svg")}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Logo wordmark */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          fontFamily: FONTS.heading,
          fontSize: 100,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: COLORS.white,
          lineHeight: 1,
        }}
      >
        Web3School
      </div>

      {/* Divider line */}
      {(() => {
        const lineProgress = spring({
          frame: frame - 30,
          fps,
          config: { damping: 200 },
          durationInFrames: 25,
        });
        const lineWidth = interpolate(lineProgress, [0, 1], [0, 380]);
        return (
          <div
            style={{
              margin: "28px 0",
              height: 1,
              width: lineWidth,
              backgroundColor: COLORS.border,
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
          fontSize: 36,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: COLORS.primary,
        }}
      >
        From confusion to irreplaceable.
      </div>

      {/* Sub-descriptor */}
      <div
        style={{
          opacity: subtextOpacity,
          fontFamily: FONTS.body,
          fontSize: 22,
          fontWeight: 400,
          color: COLORS.muted,
          marginTop: 16,
          letterSpacing: "0.01em",
        }}
      >
        AI-powered Web3 career discovery
      </div>
    </AbsoluteFill>
  );
};
