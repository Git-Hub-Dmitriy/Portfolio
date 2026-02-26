import Home from "@views/Home/Home.server";
import { ParamsRequest } from "@interfaces/paramsRequest";
import { Suspense } from "react";
import PageContainer from "@layout/PageContainer/PageContainer.server";

interface PropsHome {
  searchParams: Promise<Partial<ParamsRequest>>;
}

export default function home({ searchParams }: PropsHome) {
  return (
    <>
      <Suspense>
        <PageContainer>
          <Home searchParams={searchParams} />
        </PageContainer>
      </Suspense>
    </>
  );
}
