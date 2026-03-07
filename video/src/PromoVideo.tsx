import { AbsoluteFill, Series } from "remotion";
import { COLORS, SCENE } from "./constants";
import { HookScene } from "./scenes/HookScene";
import { BrandScene } from "./scenes/BrandScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { CTAScene } from "./scenes/CTAScene";

export const PromoVideo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, fontFamily: "sans-serif" }}>
      <Series>
        <Series.Sequence durationInFrames={SCENE.hook}>
          <HookScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE.brand}>
          <BrandScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE.features}>
          <FeaturesScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE.cta}>
          <CTAScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
