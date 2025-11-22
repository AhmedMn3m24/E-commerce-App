import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center mt-20">
      <Image src="/images/error.svg" alt="Error" width={300} height={300} />
    </div>
  );
}
