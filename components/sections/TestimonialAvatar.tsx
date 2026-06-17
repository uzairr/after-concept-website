import Image from "next/image";
import { getTestimonialAvatarUrl, type Testimonial } from "@/lib/testimonials";

type TestimonialAvatarProps = {
  item: Pick<Testimonial, "id" | "name" | "image">;
};

export function TestimonialAvatar({ item }: TestimonialAvatarProps) {
  const src = getTestimonialAvatarUrl(item);

  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-line-strong bg-surface-2">
      <Image
        src={src}
        alt=""
        width={40}
        height={40}
        className="h-full w-full object-cover"
        sizes="40px"
      />
    </div>
  );
}
