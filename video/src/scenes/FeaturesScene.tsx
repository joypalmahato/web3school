import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Series,
} from "remotion";
import { COLORS, FONTS, FEATURES, TRANSITION, FPS } from "../constants";

const FEATURE_DURATION = 4 * FPS;

type FeatureData = (typeof FEATURES)[number];

type FeatureSlideProps = {
  feature: FeatureData;
  index: number;
};

const FeatureSlide = ({ feature, index }: FeatureSlideProps) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneOpacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Step badge
  const stepSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const stepOpacity = interpolate(stepSpring, [0, 1], [0, 1]);
  const stepY = interpolate(stepSpring, [0, 1], [-20, 0]);

  // Icon
  const iconSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 10 },
    durationInFrames: 35,
  });
  const iconScale = interpolate(iconSpring, [0, 1], [0, 1]);

  // Title
  const titleSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const titleY = interpolate(titleSpring, [0, 1], [40, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Description
  const descSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const descOpacity = interpolate(descSpring, [0, 1], [0, 1]);
  const descY = interpolate(descSpring, [0, 1], [30, 0]);

  // Stat
  const statSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const statOpacity = interpolate(statSpring, [0, 1], [0, 1]);
  const statScale = interpolate(statSpring, [0, 1], [0.8, 1]);

  // Green bar under title
  const barProgress = spring({
    frame: frame - 35,
    fps,
    config: { damping: 200 },
    durationInFrames: 35,
  });
  const barWidth = interpolate(barProgress, [0, 1], [0, 200]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: sceneOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 180px",
      }}
    >
      {/* Subtle green glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Step badge */}
      <div
        style={{
          opacity: stepOpacity,
          transform: `translateY(${stepY}px)`,
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <div
          style={{
            backgroundColor: COLORS.primaryDim,
            border: `1px solid rgba(16,185,129,0.3)`,
            borderRadius: 100,
            padding: "10px 32px",
            fontFamily: FONTS.heading,
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.primary,
            letterSpacing: "0.04em",
          }}
        >
          {feature.step} / 04
        </div>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 10 }}>
          {FEATURES.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === index ? 36 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: i === index ? COLORS.primary : COLORS.border,
              }}
            />
          ))}
        </div>
      </div>

      {/* Icon */}
      <div
        style={{
          transform: `scale(${iconScale})`,
          fontSize: 110,
          marginBottom: 32,
          lineHeight: 1,
        }}
      >
        {feature.icon}
      </div>

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: FONTS.heading,
          fontSize: 168,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: COLORS.white,
          lineHeight: 1.0,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        {feature.title}
      </div>

      {/* Green accent bar */}
      <div
        style={{
          height: 4,
          width: barWidth,
          backgroundColor: COLORS.primary,
          borderRadius: 2,
          marginBottom: 36,
        }}
      />

      {/* Description */}
      <div
        style={{
          opacity: descOpacity,
          transform: `translateY(${descY}px)`,
          fontFamily: FONTS.body,
          fontSize: 64,
          fontWeight: 400,
          color: COLORS.muted,
          lineHeight: 1.5,
          textAlign: "center",
          maxWidth: 1400,
          marginBottom: 48,
        }}
      >
        {feature.description}
      </div>

      {/* Stat pill */}
      <div
        style={{
          opacity: statOpacity,
          transform: `scale(${statScale})`,
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: COLORS.primaryDim,
          border: `1px solid rgba(16,185,129,0.3)`,
          borderRadius: 100,
          padding: "16px 48px",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.heading,
            fontSize: 56,
            fontWeight: 800,
            color: COLORS.primary,
            letterSpacing: "-0.02em",
          }}
        >
          {feature.stat}
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 44,
            fontWeight: 400,
            color: COLORS.muted,
          }}
        >
          {feature.statLabel}
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const FeaturesScene = () => {
  return (
    <AbsoluteFill>
      <Series>
        {FEATURES.map((feature, i) => (
          <Series.Sequence
            key={feature.step}
            durationInFrames={FEATURE_DURATION}
            premountFor={TRANSITION}
          >
            <FeatureSlide feature={feature} index={i} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
