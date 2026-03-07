import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONTS, TRANSITION } from "../constants";
import { SceneBg } from "../SceneBg";

type WordProps = {
  children: string;
  delay: number;
  color?: string;
};

const Word = ({ children, delay, color = COLORS.text }: WordProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [32, 0]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity,
        transform: `translateY(${translateY}px)`,
        color,
        marginRight: "0.25em",
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

  const line1Words = ["More", "resources", "than", "ever."];
  const line2Words = ["More", "confused", "than", "ever."];

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SceneBg />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Line 1 */}
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: 172,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          {line1Words.map((word, i) => (
            <Word key={word} delay={i * 6 + 10} color={COLORS.text}>
              {word}
            </Word>
          ))}
        </div>

        {/* Line 2 — "confused" in green */}
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: 172,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            textAlign: "center",
          }}
        >
          {line2Words.map((word, i) => (
            <Word
              key={word}
              delay={i * 6 + 35}
              color={word === "confused" ? COLORS.primary : COLORS.text}
            >
              {word}
            </Word>
          ))}
        </div>

        {/* Green underline */}
        {(() => {
          const lineProgress = spring({
            frame: frame - 80,
            fps: 30,
            config: { damping: 200 },
            durationInFrames: 30,
          });
          const lineWidth = interpolate(lineProgress, [0, 1], [0, 320]);
          return (
            <div
              style={{
                marginTop: 48,
                height: 5,
                width: lineWidth,
                backgroundColor: COLORS.primary,
                borderRadius: 3,
              }}
            />
          );
        })()}
      </div>
    </AbsoluteFill>
  );
};
