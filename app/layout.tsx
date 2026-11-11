import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BookingModal } from "@/components/BookingModal";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "عيادات لوميير بجدة | وجهتكِ الأولى للجمال الطبيعي والجلدية",
  description:
    "يضم مركز لوميير نخبة من استشاريات وأخصائيات الجلدية والتجميل ذوي الخبرة في نحت الملامح، الفيلر، وأحدث أجهزة الليزر المعتمدة من SFDA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("scroll-smooth", almarai.variable, almarai.className)}>
      <body
        className={cn(
          "min-h-screen bg-[#141619] text-zinc-100 antialiased selection:bg-[#C5A880] selection:text-zinc-950",
          almarai.className
        )}
      >
        <BookingModal />
        {children}
      </body>
    </html>
  );
}
