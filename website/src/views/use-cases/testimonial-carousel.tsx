import { ScrollSnapDemo } from '../../components/demos/ScrollSnapDemo';
import { UseCasePage } from '../../components/UseCasePage';
import type { UseCaseCopy } from '../../content/types';

export function View({ copy, locale }: { copy: UseCaseCopy; locale: string }) {
  return (
    <UseCasePage
      locale={locale}
      path="/testimonial-carousel"
      copy={copy}
      demo={<ScrollSnapDemo />}
      snippet="testimonialCarousel"
      snippetTitle="TestimonialCarousel.tsx"
      shadcnSnippet="shadcnSnapCarousel"
      storyKey="scrollSnap"
      related={['scroll-snap', 'autoplay', 'infinite-loop']}
    />
  );
}
