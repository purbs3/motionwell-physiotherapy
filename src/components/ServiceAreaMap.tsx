"use client";

import dynamic from "next/dynamic";

const ServiceAreaMapClient = dynamic(
  () => import("./ServiceAreaMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 sm:h-[500px]">
        <div className="text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-lime-600 border-t-transparent" />

          <p className="font-medium text-slate-700">
            Loading interactive map...
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Please wait a moment.
          </p>
        </div>
      </div>
    ),
  }
);

export default function ServiceAreaMap({
  areas = [],
}: {
  areas?: string[];
}) {
  return <ServiceAreaMapClient areas={areas} />;
}