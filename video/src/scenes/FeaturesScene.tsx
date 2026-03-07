import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Series,
} from "remotion";
import { COLORS, FONTS, FEATURES, TRANSITION, FPS } from "../constants";

const FEATURE_DURATION = 4 * FPS; // 120 frames per feature

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

  // Step number entrance
  const stepSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 200 },
    durationInFrames: 30,
  });
  const stepOpacity = interpolate(stepSpring, [0, 1], [0, 1]);
  const stepX = interpolate(stepSpring, [0, 1], [-60, 0]);

  // Card slide in from right
  const cardSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 20, stiffness: 150 },
    durationInFrames: 45,
  });
  const cardX = interpolate(cardSpring, [0, 1], [120, 0]);
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

  // Icon bounce
  const iconSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 8 },
    durationInFrames: 35,
  });
  const iconScale = interpolate(iconSpring, [0, 1], [0, 1]);

  // Title entrance
  const titleSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const titleY = interpolate(titleSpring, [0, 1], [20, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Description entrance
  const descSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const descOpacity = interpolate(descSpring, [0, 1], [0, 1]);

  // Stat entrance
  const statSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });
  const statOpacity = interpolate(statSpring, [0, 1], [0, 1]);
  const statY = interpolate(statSpring, [0, 1], [16, 0]);

  // Accent bar width
  const barProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
    durationInFrames: 40,
  });
  const barWidth = interpolate(barProgress, [0, 1], [0, 280]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        opacity: sceneOpacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background glow centered on card */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Progress dots — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
        }}
      >
        {FEATURES.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 32 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: i === index ? COLORS.primary : COLORS.border,
              transition: "none",
            }}
          />
        ))}
      </div>

      {/* Main layout: step number left | card right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 100,
          maxWidth: 1400,
          width: "100%",
          padding: "0 120px",
        }}
      >
        {/* Left: step number */}
        <div
          style={{
            opacity: stepOpacity,
            transform: `translateX(${stepX}px)`,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.heading,
              fontSize: 180,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              color: "rgba(99,102,241,0.12)",
              userSelect: "none",
            }}
          >
            {feature.step}
          </div>
        </div>

        {/* Right: feature card */}
        <div
          style={{
            opacity: cardOpacity,
            transform: `translateX(${cardX}px)`,
            flex: 1,
            backgroundColor: COLORS.card,
            borderRadius: 32,
            border: `1px solid ${COLORS.border}`,
            padding: "64px 72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 72,
              height: 3,
              width: barWidth,
              backgroundColor: COLORS.primary,
              borderRadius: "0 0 3px 3px",
            }}
          />

          {/* Icon */}
          <div
            style={{
              transform: `scale(${iconScale})`,
              fontSize: 72,
              marginBottom: 28,
              display: "inline-block",
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
              fontSize: 70,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: COLORS.white,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            {feature.title}
          </div>

          {/* Description */}
          <div
            style={{
              opacity: descOpacity,
              fontFamily: FONTS.body,
              fontSize: 30,
              fontWeight: 400,
              color: COLORS.muted,
              lineHeight: 1.6,
              marginBottom: 36,
              maxWidth: 620,
            }}
          >
            {feature.description}
          </div>

          {/* Stat pill */}
          <div
            style={{
              opacity: statOpacity,
              transform: `translateY(${statY}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: COLORS.primaryDim,
              border: `1px solid rgba(99,102,241,0.25)`,
              borderRadius: 100,
              padding: "12px 28px",
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: 34,
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
                fontSize: 22,
                fontWeight: 400,
                color: COLORS.muted,
              }}
            >
              {feature.statLabel}
            </span>
          </div>
        </div>
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
