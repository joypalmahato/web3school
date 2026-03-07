import { Composition } from "remotion";
import { PromoVideo } from "./PromoVideo";
import { FPS, W, H, TOTAL_FRAMES } from "./constants";

export const RemotionRoot = () => {
  return (
    <Composition
      id="Promo"
      component={PromoVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={W}
      height={H}
    />
  );
};
