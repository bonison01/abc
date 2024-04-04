import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { VendorsMain } from "./_components/discover-main";

export default function VendorsMain() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <VendorsMain />
      <QuickLink/>
      <Footer/>
    </main>
  );
}
