import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Incremental Static Regeneration - NextJS 13.4 Image Gallery",
};

export const revalidate = 15;

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
    {
      // next: { revalidate: 15 }
    }
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Bu səhifə{" "}
        <strong>Incremental Static Regeneration-dan istifadə edir.</strong> Hər
        15 saniyədən bir yeni şəkil üçün fetch atılır (səhifə yeniləndikdən
        sonra) və bu ərəfədə səhifəni yeniləsək keşlənmiş şəkil göstərilir.
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
