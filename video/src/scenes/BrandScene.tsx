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
import { SceneBg } from "../SceneBg";

export const BrandScene = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneOpacity = interpolate(
    frame,
    [0, TRANSITION, durationInFrames - TRANSITION, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const logoSpring = spring({ frame: frame - 10, fps, config: { damping: 20, stiffness: 200 }, durationInFrames: 40 });
  const logoScale = interpolate(logoSpring, [0, 1], [0.6, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  const taglineSpring = spring({ frame: frame - 35, fps, config: { damping: 200 }, durationInFrames: 30 });
  const taglineY = interpolate(taglineSpring, [0, 1], [30, 0]);
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  const subtextSpring = spring({ frame: frame - 55, fps, config: { damping: 200 }, durationInFrames: 30 });
  const subtextOpacity = interpolate(subtextSpring, [0, 1], [0, 1]);

  const badgeSpring = spring({ frame: frame - 20, fps, config: { damping: 200 }, durationInFrames: 25 });
  const badgeScale = interpolate(badgeSpring, [0, 1], [0.5, 1]);
  const badgeOpacity = interpolate(badgeSpring, [0, 1], [0, 1]);

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
        {/* Logo */}
        <div
          style={{
            opacity: badgeOpacity,
            transform: `scale(${badgeScale})`,
            marginBottom: 36,
            width: 130,
            height: 130,
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 8px 48px rgba(5,150,105,0.35), 0 2px 12px rgba(0,0,0,0.12)",
          }}
        >
          <Img src={staticFile("logo.svg")} style={{ width: "100%", height: "100%" }} />
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
            color: COLORS.text,
            lineHeight: 1,
          }}
        >
          Web3School
        </div>

        {/* Divider */}
        {(() => {
          const p = spring({ frame: frame - 30, fps, config: { damping: 200 }, durationInFrames: 25 });
          const w = interpolate(p, [0, 1], [0, 480]);
          return (
            <div style={{ margin: "36px 0", height: 3, width: w, backgroundColor: COLORS.primary, borderRadius: 2 }} />
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

        {/* Sub */}
        <div
          style={{
            opacity: subtextOpacity,
            fontFamily: FONTS.body,
            fontSize: 56,
            fontWeight: 400,
            color: COLORS.textMuted,
            marginTop: 24,
            letterSpacing: "0.01em",
            textAlign: "center",
          }}
        >
          AI-powered Web3 career discovery
        </div>
      </div>
    </AbsoluteFill>
  );
};
