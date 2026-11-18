import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectPreviewProps {
  title: string;
  previewImage: string;
  category?: string;
  variant?: 'default' | 'compact' | 'wide';
  className?: string;
  priority?: boolean;
}

const blurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiMxMjEyMTQiLz48L3N2Zz4=';

/** Project screenshot inside a minimal browser frame, sitting on a soft stage. */
export default function ProjectPreview({
  title,
  previewImage,
  category,
  variant = 'default',
  className,
  priority = false,
}: ProjectPreviewProps) {
  return (
    <div
      className={cn(
        'group/preview relative flex w-full items-center justify-center overflow-hidden bg-bg-hover/60',
        variant === 'compact'
          ? 'aspect-[16/10.5]'
          : variant === 'wide'
          ? 'aspect-[16/10] sm:aspect-[16/9]'
          : 'aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[400px]',
        className
      )}
    >
      {/* stage glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-full h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-ink/20 blur-[70px] transition-opacity duration-700 group-hover/preview:opacity-100 sm:opacity-60"
      />

      <div className="relative w-[88%] overflow-hidden rounded-xl border border-customBorder bg-bg-card shadow-2xl shadow-black/30 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/preview:-translate-y-1.5 group-hover/preview:scale-[1.02]">
        <div className="flex items-center gap-1.5 border-b border-customBorder px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-customBorder-hover/70" />
          <span className="h-2 w-2 rounded-full bg-customBorder-hover/70" />
          <span className="h-2 w-2 rounded-full bg-customBorder-hover/70" />
          {category && (
            <span className="ml-auto max-w-[60%] truncate font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted sm:text-[10px]">
              {category}
            </span>
          )}
        </div>
        <div className="aspect-[16/9] w-full overflow-hidden bg-bg">
          <Image
            src={previewImage}
            alt={`${title} screenshot preview`}
            width={1200}
            height={675}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, (min-width: 640px) 70vw, 82vw"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
