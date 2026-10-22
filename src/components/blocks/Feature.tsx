import { storyblokEditable } from "@storyblok/react/rsc";

type FeatureBlock = {
  _uid: string;
  _editable?: string;
  title?: string;
  text?: string;
  icon?: string;
  hasSectionTitle?: boolean;
};

export default function Feature({
  blok,
  hasSectionTitle = true,
}: {
  blok: FeatureBlock;
  hasSectionTitle?: boolean;
}) {
  return (
    <article
      className="feature"
      role="listitem"
      {...storyblokEditable(blok)}
    >
      {blok.icon && (
        <span className="feature__icon" aria-hidden="true">
          {blok.icon}
        </span>
      )}
      {blok.title &&
        (hasSectionTitle ? (
          <h3>{blok.title}</h3>
        ) : (
          <h2>{blok.title}</h2>
        ))}
      {blok.text && <p>{blok.text}</p>}
    </article>
  );
}
