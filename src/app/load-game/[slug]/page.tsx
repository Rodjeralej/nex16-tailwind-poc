import Typography from "@/components/Typography";
export default async function LoadGameSlug({
  params,
}: {
  params: { slug: Promise<string> };
}) {
  const slug = (await params).slug;

  return (
    <div className="flex relative justify-center items-center h-full">
      <div className="absolute inset-0 bg-black-200 opacity-50" />
      <div className="relative z-10 flex flex-col gap-8 p-8 max-h-full">
        <Typography variant="heading">
          {`Congratulations, you just tried to load the id ${slug} zone. Now, go to Steam and buy the game you cheap bastard`}
        </Typography>
      </div>
    </div>
  );
}
