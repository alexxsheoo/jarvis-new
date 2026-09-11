import ChoosePlanPage from "@/app/(marketing)/checkout/page";
import MarketingLayout from "@/app/(marketing)/layout";

export { metadata } from "@/app/(marketing)/checkout/page";

/** Keep previously shared Build My System links on the payment-selection flow. */
export default function LegacyBuildPage() {
  return (
    <MarketingLayout>
      <ChoosePlanPage />
    </MarketingLayout>
  );
}
