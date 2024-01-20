import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert, Button } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Incremental Static Regeneration",
};

export const revalidate = 15;

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
    {
      // next: { revalidate: 15 },
    }
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Bu səhifə{" "}
        <strong>"Incremental Static Regeneration"-dan istifadə edir.</strong>{" "}
        Hər 15 saniyədən bir yeni şəkil üçün fetch atılır (səhifə yeniləndikdən sonra) və bu ərəfədə səhifəni yeniləsək keşlənmiş şəkil göstərilir.
      </Alert>

      <Image
        src={image.urls.raw}
        alt={image.description}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
      />
      <Link href={image.urls.raw} className="mt-3">
        <Button>Şəkli yüklə</Button>
      </Link>
    </div>
  );
}
