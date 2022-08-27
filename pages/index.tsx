import { NextRequest, NextResponse } from "next/server";

import PageIndex from "@pages/Index";


export function getServerSideProps(req: NextRequest, res: NextResponse) {
	return { props: { somePageIndexProps: "slug" } };
}

export default PageIndex;
