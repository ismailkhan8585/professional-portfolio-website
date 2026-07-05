import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectPreviewProps {
  title: string;
  previewImage: string;
  category?: string;
  variant?: 'default' | 'compact' | 'wide';
  className?: string;
}

const blurDataURL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiMwYTBhMGEiLz48cmVjdCB4PSIxMjAiIHk9IjEwMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIHJ4PSIyNCIgZmlsbD0iIzEwYjk4MSIgZmlsbC1vcGFjaXR5PSIwLjE4Ii8+PC9zdmc+';

export default function ProjectPreview({
  title,
  previewImage,
  category,
  variant = 'default',
  className,
}: ProjectPreviewProps) {
  return (
    <div
      className={cn(
        'group relative flex w-full items-center justify-center overflow-hidden bg-bg',
        variant === 'compact'
          ? 'aspect-[16/10] min-h-52'
          : variant === 'wide'
          ? 'aspect-[16/9] min-h-64'
          : 'aspect-[16/11] min-h-64 sm:aspect-[16/10] lg:h-full lg:min-h-[360px]',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--app-border) / 0.35) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--app-border) / 0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative w-[90%] max-w-[720px] rounded-lg border border-customBorder bg-bg-card shadow-2xl shadow-black/20 transition-transform duration-300 group-hover:-translate-y-1 sm:w-[88%]">
        <div className="flex items-center gap-2 border-b border-customBorder px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          {category && (
            <span className="ml-auto max-w-[52%] truncate rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              {category}
            </span>
          )}
        </div>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-bg p-2 sm:p-3">
          <Image
            src={previewImage}
            alt={`${title} screenshot preview`}
            width={800}
            height={450}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, (min-width: 640px) 70vw, 82vw"
            className="h-full w-full rounded-md object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}
