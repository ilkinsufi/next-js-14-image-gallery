export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Page1</h1>
    </div>
  );
}
