import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS, TRANSITION } from "../constants";

type WordProps = {
  children: string;
  delay: number;
  color?: string;
};

const Word = ({ children, delay, color = COLORS.white }: WordProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [24, 0]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity,
        transform: `translateY(${translateY}px)`,
        color,
        marginRight: "0.28em",
      }}
    >
      {children}
    </span>
  );
};

export const HookScene = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const sceneOpacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Subtle green glow pulse
  const glowOpacity = interpolate(
    frame,
    [20, 60, 90, 120],
    [0, 0.6, 0.8, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const line1Words = ["More", "resources", "than", "ever."];
  // "confused" gets accent color to echo the tagline
  const line2Words = ["More", "confused", "than", "ever."];

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
      {/* Green glow radial */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(99,102,241,${glowOpacity * 0.12}) 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Line 1 — all white */}
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: 160,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          marginBottom: 8,
        }}
      >
        {line1Words.map((word, i) => (
          <Word key={word} delay={i * 6 + 10} color={COLORS.white}>
            {word}
          </Word>
        ))}
      </div>

      {/* Line 2 — "confused" in accent color */}
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: 160,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
        }}
      >
        {line2Words.map((word, i) => (
          <Word
            key={word}
            delay={i * 6 + 35}
            color={word === "confused" ? COLORS.primary : COLORS.white}
          >
            {word}
          </Word>
        ))}
      </div>

      {/* Thin green line below */}
      {(() => {
        const lineProgress = spring({
          frame: frame - 80,
          fps: 30,
          config: { damping: 200 },
          durationInFrames: 30,
        });
        const lineWidth = interpolate(lineProgress, [0, 1], [0, 280]);
        return (
          <div
            style={{
              marginTop: 40,
              height: 3,
              width: lineWidth,
              backgroundColor: COLORS.primary,
              borderRadius: 2,
            }}
          />
        );
      })()}
    </AbsoluteFill>
  );
};
