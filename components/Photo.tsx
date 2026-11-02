import Image from "next/image";
import { cn } from "@/lib/cn";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  sizes?: string;
};

export function Photo({
  src,
  alt,
  className,
  position = "center",
  sizes = "(min-width: 768px) 480px, 100vw",
}: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={75}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
