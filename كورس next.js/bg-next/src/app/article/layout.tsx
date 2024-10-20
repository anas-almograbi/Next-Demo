import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
  description: "Generated by create next app",
};

export default function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Article</h1>
      <div>{children}</div> {/* Replace <p> with <div> */}
    </div>
  );
}
