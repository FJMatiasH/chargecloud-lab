import {
  StoryblokServerComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";

type FeatureGridBlock = {
  _uid: string;
  _editable?: string;
  title?: string;
  features?: SbBlokData[];
};

export default function FeatureGrid({ blok }: { blok: FeatureGridBlock }) {
  return (
    <section className="feature-grid" {...storyblokEditable(blok)}>
      {blok.title && <h2>{blok.title}</h2>}
      {blok.features && blok.features.length > 0 && (
        <div className="feature-grid__items" role="list">
          {blok.features.map((feature) => (
            <StoryblokServerComponent
              key={feature._uid}
              blok={feature}
              hasSectionTitle={Boolean(blok.title?.trim())}
            />
          ))}
        </div>
      )}
    </section>
  );
}
