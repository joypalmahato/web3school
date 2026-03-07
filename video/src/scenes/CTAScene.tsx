import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS, TRANSITION } from "../constants";

export const CTAScene = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneOpacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const taglineSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200 },
    durationInFrames: 35,
  });
  const taglineScale = interpolate(taglineSpring, [0, 1], [0.9, 1]);
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  const btnSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 18, stiffness: 200 },
    durationInFrames: 30,
  });
  const btnScale = interpolate(btnSpring, [0, 1], [0.7, 1]);
  const btnOpacity = interpolate(btnSpring, [0, 1], [0, 1]);

  const urlSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const urlOpacity = interpolate(urlSpring, [0, 1], [0, 1]);
  const urlY = interpolate(urlSpring, [0, 1], [16, 0]);

  const subSpring = spring({
    frame: frame - 28,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);

  const ringProgress = interpolate(frame, [0, 150], [0, 1], {
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(
    Math.sin(ringProgress * Math.PI * 4),
    [-1, 1],
    [0.05, 0.18]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: sceneOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 160px",
      }}
    >
      {/* Animated green glow */}
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(16,185,129,${ringOpacity}) 0%, transparent 60%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Brand mark */}
      {(() => {
        const markSpring = spring({
          frame: frame - 5,
          fps,
          config: { damping: 200 },
          durationInFrames: 20,
        });
        const markOpacity = interpolate(markSpring, [0, 1], [0, 1]);
        return (
          <div
            style={{
              opacity: markOpacity,
              fontFamily: FONTS.heading,
              fontSize: 40,
              fontWeight: 700,
              color: COLORS.primary,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 44,
            }}
          >
            Web3School
          </div>
        );
      })()}

      {/* Main tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          transform: `scale(${taglineScale})`,
          fontFamily: FONTS.heading,
          fontSize: 164,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: COLORS.white,
          textAlign: "center",
          maxWidth: 1600,
          marginBottom: 24,
        }}
      >
        From confusion to{" "}
        <span style={{ color: COLORS.primary }}>irreplaceable.</span>
      </div>

      {/* Sub text */}
      <div
        style={{
          opacity: subOpacity,
          fontFamily: FONTS.body,
          fontSize: 60,
          fontWeight: 400,
          color: COLORS.muted,
          textAlign: "center",
          marginBottom: 64,
          letterSpacing: "0.01em",
        }}
      >
        Join early learners building unstoppable Web3 careers.
      </div>

      {/* CTA button */}
      <div
        style={{
          opacity: btnOpacity,
          transform: `scale(${btnScale})`,
          backgroundColor: COLORS.primary,
          color: "#000",
          fontFamily: FONTS.heading,
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          padding: "32px 100px",
          borderRadius: 100,
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 52,
          boxShadow: "0 0 80px rgba(16,185,129,0.4)",
        }}
      >
        Get early access →
      </div>

      {/* URL */}
      <div
        style={{
          opacity: urlOpacity,
          transform: `translateY(${urlY}px)`,
          fontFamily: FONTS.body,
          fontSize: 44,
          fontWeight: 500,
          color: COLORS.mutedDim,
          letterSpacing: "0.04em",
        }}
      >
        web3school.study
      </div>
    </AbsoluteFill>
  );
};
