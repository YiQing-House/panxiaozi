import { Hero } from "@/components/hero";
import { ResourceList } from "@/components/resource";

export const revalidate = 60;
export const dynamic = "force-dynamic"; // 跳过静态生成，避免构建超时

export default function Home() {
  return (
    <>
      <Hero />
      <ResourceList />
    </>
  );
}
