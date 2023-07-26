import React, { lazy, Suspense } from "react";

const LazyAutoDeposits = lazy(() => import("./AutoDeposits"));

const AutoDeposits = (props) => (
  <Suspense fallback={null}>
    <LazyAutoDeposits {...props} />
  </Suspense>
);

export default AutoDeposits;
