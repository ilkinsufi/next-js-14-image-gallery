import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert, Button } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Statik Fetch",
};

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );

  const image: UnsplashImage = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Bu səhifə məlumatları <strong>build zamanı alır və keşləyir.</strong>{" "}
        Unsplash API hər fetchdə yeni bir şəkil göndərsə də səhifəni
        yenilədiyimiz zaman proyekt yenidən build olmadığı üçün eyni şəkli
        görürük.
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
